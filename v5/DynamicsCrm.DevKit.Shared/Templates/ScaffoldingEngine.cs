using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// Everything a template handler needs to do its work. Handlers live
    /// in Shared (registered by their host) and never talk to a UI.
    /// </summary>
    public sealed class ScaffoldRequest
    {
        public TemplateDescriptor Descriptor { get; set; }
        public TemplateManifest Manifest { get; set; }
        public ProjectTemplateInput ProjectInput { get; set; }
        public ItemTemplateInput ItemInput { get; set; }
        public WorkspaceContext Workspace { get; set; }
        public Dictionary<string, string> Tokens { get; set; }
    }

    /// <summary>
    /// A template handler owns one template id: payload rendering plus any
    /// template-specific generation (T4, metadata codegen). This is the
    /// single extension point filled in by the P.* / I.* work units.
    /// </summary>
    public interface ITemplateHandler
    {
        string TemplateId { get; }
        Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request);
    }

    /// <summary>
    /// The platform-neutral scaffolding engine shared by the CLI
    /// (devkit new) and MCP tools: validates input against the catalog,
    /// builds the token dictionary, dispatches to the registered handler
    /// (or renders the registered manifest directly) and reports a
    /// structured ScaffoldResult.
    /// </summary>
    public static class ScaffoldingEngine
    {
        private static readonly object Lock = new object();
        private static readonly Dictionary<string, ITemplateHandler> Handlers = new Dictionary<string, ITemplateHandler>(StringComparer.OrdinalIgnoreCase);

        public static void RegisterHandler(ITemplateHandler handler)
        {
            if (handler == null || string.IsNullOrWhiteSpace(handler.TemplateId)) return;
            lock (Lock)
            {
                Handlers[handler.TemplateId.Trim()] = handler;
            }
        }

        public static ITemplateHandler FindHandler(string templateId)
        {
            if (string.IsNullOrWhiteSpace(templateId)) return null;
            lock (Lock)
            {
                Handlers.TryGetValue(templateId.Trim(), out var handler);
                return handler;
            }
        }

        /// <summary>
        /// Removes every registered handler — the test-isolation counterpart
        /// of TemplateManifests.Clear(), letting tests exercise the
        /// manifest-fallback path for template ids that have handlers.
        /// </summary>
        public static void ClearHandlers()
        {
            lock (Lock)
            {
                Handlers.Clear();
            }
        }

        public static async Task<ScaffoldResult> ScaffoldProjectAsync(ProjectTemplateInput input)
        {
            var result = new ScaffoldResult { TemplateId = input?.TemplateId };
            if (input == null)
            {
                result.AddError("input: required");
                return result;
            }

            var descriptor = TemplateCatalog.Find(input.TemplateId, TemplateKind.Project);
            if (descriptor == null)
            {
                result.AddError($"--type '{input.TemplateId}': unknown project template. Use 'devkit new list' to see all templates.");
                return result;
            }
            if (string.IsNullOrWhiteSpace(input.ProjectName))
            {
                result.AddError("--name: required");
                return result;
            }

            var workspace = WorkspaceScanner.Scan(ResolveOutputDirectory(input.OutputDirectory));
            if (!string.IsNullOrWhiteSpace(input.SolutionFile))
            {
                // The caller named the solution to register the project in
                // (--solution). Validate before anything is created so a
                // typo leaves no debris, then anchor the workspace at that
                // file — not whatever the walk-up scan would have picked.
                var solutionFile = Path.GetFullPath(input.SolutionFile);
                if (!File.Exists(solutionFile))
                {
                    var notFound = new ScaffoldResult { TemplateId = input.TemplateId };
                    notFound.AddError($"--solution '{input.SolutionFile}': solution file not found.");
                    return notFound;
                }
                workspace = WorkspaceScanner.FromSolution(solutionFile, ResolveOutputDirectory(input.OutputDirectory));
            }
            Directory.CreateDirectory(ResolveOutputDirectory(input.OutputDirectory));
            var tokens = new Dictionary<string, string>(StringComparer.Ordinal);
            await TokenEngine.AddProjectTokensAsync(tokens, input, workspace);

            return await DispatchAsync(descriptor, workspace, tokens, input, null);
        }

        public static async Task<ScaffoldResult> ScaffoldItemAsync(ItemTemplateInput input)
        {
            var result = new ScaffoldResult { TemplateId = input?.TemplateId };
            if (input == null)
            {
                result.AddError("input: required");
                return result;
            }

            var descriptor = TemplateCatalog.Find(input.TemplateId, TemplateKind.Item);
            if (descriptor == null)
            {
                result.AddError($"--type '{input.TemplateId}': unknown item template. Use 'devkit new list' to see all templates.");
                return result;
            }
            if (string.IsNullOrWhiteSpace(input.Name) && string.IsNullOrWhiteSpace(input.Entity))
            {
                result.AddError("--name (or --entity): required");
                return result;
            }

            var workspace = WorkspaceScanner.Scan(ResolveOutputDirectory(input.OutputDirectory));
            if (string.IsNullOrEmpty(input.RootNamespace))
            {
                input.RootNamespace = workspace.RootNamespace;
            }
            var tokens = new Dictionary<string, string>(StringComparer.Ordinal);
            TokenEngine.AddItemTokens(tokens, input, workspace);

            return await DispatchAsync(descriptor, workspace, tokens, null, input);
        }

        /// <summary>
        /// Renders every manifest file with the given tokens, honoring the
        /// idempotency rules: user files are never overwritten (unless
        /// force), generated files are updated when their content changed.
        /// </summary>
        public static async Task<ScaffoldResult> RenderManifestFilesAsync(TemplateManifest manifest, Dictionary<string, string> tokens, string outputDirectory, bool force, ScaffoldResult result)
        {
            if (manifest == null)
            {
                result.AddError("manifest: required");
                return result;
            }

            foreach (var file in manifest.Files)
            {
                var payload = await TemplatePayload.ReadContentAsync(file.ResourceName);
                if (payload == null)
                {
                    result.AddError($"resource not found: {file.ResourceName}");
                    continue;
                }
                var content = payload.Content;

                var targetFileName = TokenEngine.ApplyReplacements(file.TargetFileName, tokens);
                var fullPath = Path.Combine(outputDirectory ?? string.Empty, targetFileName);
                Directory.CreateDirectory(Path.GetDirectoryName(fullPath));

                if (file.ReplaceParameters)
                {
                    content = TokenEngine.ApplyReplacements(content, tokens);
                }

                var exists = File.Exists(fullPath);
                if (exists && !force && !file.IsGenerated)
                {
                    result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, "Skipped"));
                    continue;
                }

                var oldContent = exists ? await FileHelper.ReadAllTextAsync(fullPath) : null;
                if (string.Equals(oldContent, content, StringComparison.Ordinal))
                {
                    result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, "Unchanged"));
                    continue;
                }

                // Byte-faithful to Visual Studio: the payload keeps the BOM
                // state of its source file (VS preserves per-file encodings).
                if (payload.HasBom)
                {
                    await FileHelper.ForceWriteAllTextAsync(fullPath, content);
                }
                else
                {
                    await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, content);
                }
                result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, exists ? "Updated" : "Created"));
            }

            return result;
        }

        /// <summary>
        /// Marks a generated shell script executable on macOS/Linux so it
        /// runs directly (files written by code carry no executable bit).
        /// No-op on Windows; the net48 VSIX host compiles an empty body.
        /// </summary>
        public static void MarkExecutable(string path)
        {
            if (string.IsNullOrEmpty(path) || !File.Exists(path)) return;
#if NET10_0_OR_GREATER
            if (OperatingSystem.IsWindows()) return;
            try
            {
                File.SetUnixFileMode(path,
                    UnixFileMode.UserRead | UnixFileMode.UserWrite | UnixFileMode.UserExecute |
                    UnixFileMode.GroupRead | UnixFileMode.GroupExecute |
                    UnixFileMode.OtherRead | UnixFileMode.OtherExecute);
            }
            catch
            {
                // Best effort — the script still runs via "bash <script>".
            }
#endif
        }

        private static async Task<ScaffoldResult> DispatchAsync(TemplateDescriptor descriptor, WorkspaceContext workspace, Dictionary<string, string> tokens, ProjectTemplateInput projectInput, ItemTemplateInput itemInput)
        {
            var request = new ScaffoldRequest
            {
                Descriptor = descriptor,
                Workspace = workspace,
                Tokens = tokens,
                ProjectInput = projectInput,
                ItemInput = itemInput,
            };

            var handler = FindHandler(descriptor.Id);
            if (handler != null)
            {
                var handlerResult = await handler.ScaffoldAsync(request);
                if (handlerResult == null)
                {
                    handlerResult = new ScaffoldResult { TemplateId = descriptor.Id };
                    handlerResult.AddError("handler returned no result");
                }
                return handlerResult;
            }

            TemplateManifests.TryGet(descriptor.Id, out var manifest);
            if (manifest != null)
            {
                var outputDirectory = ResolveOutputDirectory(projectInput?.OutputDirectory ?? itemInput?.OutputDirectory);
                var force = projectInput?.Force == true || itemInput?.Force == true;
                var result = new ScaffoldResult { TemplateId = descriptor.Id };
                await RenderManifestFilesAsync(manifest, tokens, outputDirectory, force, result);
                return result;
            }

            var unimplemented = new ScaffoldResult { TemplateId = descriptor.Id };
            unimplemented.AddError($"Template '{descriptor.Id}' is not implemented yet (see DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp for the work plan).");
            return unimplemented;
        }

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? System.IO.Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }
    }
}
