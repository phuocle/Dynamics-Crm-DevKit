using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the Test item template (VSIX
    /// 09.TestItemTemplate): renders the T4 template (Test.tt by default,
    /// a DynamicsCrm.DevKit.Cli.json custom title or a direct .tt path)
    /// with the T4Context the wizard builds from FormPlugin and writes
    /// the FakeXrmEasy test class {Class}{Order}Test.cs. The payload stub
    /// is just the $test$ token, so the CLI writes the T4 render directly
    /// instead of substituting tokens (the engine replaces $test$ itself).
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.Test.
    ///
    /// The dialog is FormPlugin with the entity, message, stage and
    /// execution combos collapsed: their values ride in with the plugin /
    /// workflow class picked in the test-plugin combo, which FormPlugin
    /// fills from PluginTestDiscovery — a regex scan of the .cs files of
    /// the test project's ProjectReference folders for non-abstract
    /// IPlugin / CodeActivity classes carrying [CrmPluginRegistration],
    /// minus the ones whose {ClassName}Test already exists in the test
    /// project. The class textbox auto-fills with the picked class name
    /// (the CLI takes it as the --name default) and strips a trailing
    /// Test, so the template's own Test suffix never doubles; the
    /// template panel stays visible, exactly like Plugin's.
    ///
    /// A candidate whose registration and body match the default plugin
    /// template shape (public parameterless constructor, the
    /// Execute(IServiceProvider) guard throws) makes Test.tt render its
    /// guard context — the using TargetPlugin alias and the
    /// AssertInvalidPluginContext test (HasPluginTestGuardContext).
    /// Everything else renders the plain test skeleton.
    /// </summary>
    public sealed class TestItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.Test.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the single file entry of
        /// CSharpTestItemTemplate.vstemplate: one payload stub whose
        /// content is just $test$ (the T4 render), named
        /// $Class$$PluginOrder$Test.cs — $PluginOrder$ is empty when the
        /// order is 1, and the Test suffix is the vstemplate's own.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.Test.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.Test.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Class.cs", TargetFileName = "$Class$$PluginOrder$Test.cs", ReplaceParameters = true });
            return manifest;
        }

        public async Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
        {
            var result = new ScaffoldResult { TemplateId = TemplateId };
            var input = request?.ItemInput;
            if (input == null)
            {
                result.AddError("input: required");
                return result;
            }
            var workspace = request.Workspace ?? WorkspaceContext.Empty(input.OutputDirectory);

            if (input.Transformer == null)
            {
                result.AddError("T4 transformer: required — the host must supply an ITextTransformer (CLI: MonoTextTransformer).");
                return result;
            }
            var hasCustomTitle = !string.IsNullOrWhiteSpace(input.TemplateTitle) &&
                                 !string.Equals(input.TemplateTitle, T4TemplateResolver.DefaultTemplateTitle, StringComparison.Ordinal);
            if (!string.IsNullOrWhiteSpace(input.T4Path) && hasCustomTitle)
            {
                result.AddError("--t4 and --template: use one custom T4 source.");
                return result;
            }

            // The class textbox auto-fills from the picked candidate (the
            // wizard's ApplySelectedTestPluginToForm), so it is required
            // only when no candidate supplies it; its trailing Test is
            // stripped (FormPlugin.GetClassBaseName) so the template's own
            // Test suffix never doubles.
            var className = !string.IsNullOrWhiteSpace(input.Class) ? input.Class.Trim() : input.Name?.Trim();
            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);

            // The test-plugin combo: resolve the target class against the
            // scan of the test project's references (PluginTestDiscovery)
            // and take the missing registration fields from the candidate
            // — the dialog's combos are collapsed, the candidate is their
            // only voice. A target that is not among the scanned
            // candidates is impossible in the wizard; an empty scan is
            // the wizard's empty combo (typed values trusted).
            if (!string.IsNullOrWhiteSpace(input.TestTarget))
            {
                // The unfiltered scan: an explicit target resolves even
                // when its {ClassName}Test already exists (the wizard's
                // combo filter never blocks a rerun).
                var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(request.ProjectFile);
                var candidate = candidates.FirstOrDefault(x => string.Equals(x.FullClassName, input.TestTarget, StringComparison.OrdinalIgnoreCase));
                if (candidate == null && candidates.Count > 0)
                {
                    result.AddError($"--test-target '{input.TestTarget}': not found among the plugin/workflow classes of the project references.");
                    return result;
                }
                if (candidate != null)
                {
                    if (string.IsNullOrWhiteSpace(input.Message)) input.Message = candidate.MessageName;
                    if (string.IsNullOrWhiteSpace(input.Stage)) input.Stage = candidate.Stage;
                    if (string.IsNullOrWhiteSpace(input.Execution)) input.Execution = candidate.ExecutionMode;
                    if (string.IsNullOrWhiteSpace(input.Entity)) input.Entity = candidate.EntityLogicalName;
                    if (string.IsNullOrWhiteSpace(className)) className = candidate.ClassName;
                    // The wizard's TestTargetFullClassName carries the
                    // full class name only when the candidate matches the
                    // default plugin template shape (the guard test) —
                    // anything else renders the plain skeleton.
                    input.TestTarget = candidate.SupportsGuardTest ? candidate.FullClassName : string.Empty;
                }
            }
            else
            {
                input.TestTarget = string.Empty;
            }

            if (string.IsNullOrWhiteSpace(className))
            {
                result.AddError("--name: required for template 'Test' — the test class name.");
                return result;
            }
            className = StripTestSuffix(className);
            input.Class = className;
            if (input.Order < 1)
            {
                result.AddError($"--order '{input.Order}': invalid. Use a positive integer.");
                return result;
            }

            // The engine resolves the project file for EVERY item template
            // (--project name, else the nearest at/above the output
            // directory) and errors without one; the namespace reads from
            // that file.
            var projectFile = request.ProjectFile;
            if (string.IsNullOrWhiteSpace(projectFile))
            {
                result.AddError("--project: required for item template 'Test' — run inside a project folder or pass --project <name>.");
                return result;
            }
            Directory.CreateDirectory(outputDirectory);
            input.RootNamespace = ResolveRootNamespace(input, projectFile, outputDirectory);
            if (string.IsNullOrWhiteSpace(input.RootNamespace))
            {
                result.AddError($"--project '{Path.GetFileNameWithoutExtension(projectFile)}': the project carries no RootNamespace.");
                return result;
            }

            // The wizard's custom-title path renders through the full
            // context (T4Helper.BuildContextAsync) — whose comment is the
            // org's message doc read from the form's logical name +
            // message (empty when nothing is set or offline). The
            // default-title path (BuildTestContextAsync) reads no comment
            // at all, so the field stays untouched here.
            if (hasCustomTitle)
            {
                input.DataSource = input.Entity;
                input.Comment = input.ServiceClient != null
                    ? await new MetadataService(input.ServiceClient).GetPluginCommentAsync(input.Entity ?? string.Empty, input.Message ?? string.Empty)
                    : string.Empty;
            }

            var t4Code = await ResolveT4CodeAsync(input, outputDirectory, result);
            if (t4Code == null) return result;
            if (!hasCustomTitle && string.IsNullOrWhiteSpace(input.T4Path))
            {
                // VS T4 host parity (the wizard's
                // PreAccountUpdateSynchronousTest.cs): the guard using
                // line sits inside the if-block, so the closing <#}#>
                // line's own newline survives in the wizard output — an
                // empty line separates the using from the namespace. Mono
                // swallows the newlines around a block-only line, so the
                // empty line is emitted through an explicit Write inside
                // the block (guard runs only; the guard-less path keeps
                // the collapsed shape — the VS host removes a block-only
                // line when its construct emits nothing, the Plugin.tt
                // false-image blocks byte-identical through I.4). The
                // resource reaches the CLI in the checkout's line endings
                // (git autocrlf) — match both.
                t4Code = t4Code
                    .Replace(
                        "<#=Context.TestTargetFullClassName#>;\r\n<#}#>",
                        "<#=Context.TestTargetFullClassName#>;\r\n<#Write(\"\\r\\n\");#>\r\n<#}#>")
                    .Replace(
                        "<#=Context.TestTargetFullClassName#>;\n<#}#>",
                        "<#=Context.TestTargetFullClassName#>;\n<#Write(\"\\r\\n\");#>\n<#}#>");
            }

            // The wizard renders with the full context for custom templates
            // (title differs from "Default") and the test context for the
            // built-in one — title-based, exactly like Test.cs.
            var t4Context = hasCustomTitle || !string.IsNullOrWhiteSpace(input.T4Path)
                ? T4ContextFactory.BuildContext(input, workspace)
                : T4ContextFactory.BuildTestContext(input, workspace);

            string code;
            try
            {
                code = await input.Transformer.TransformAsync(t4Code, t4Context);
            }
            catch (InvalidOperationException ex)
            {
                result.AddError(ex.Message);
                return result;
            }

            // $Class$$PluginOrder$Test.cs — the suffix vanishes when the
            // order is 1 (t4Context.ClassWithOrder carries the same rule
            // for the class declaration inside the file) and the Test
            // suffix is the vstemplate's own.
            var targetFileName = $"{t4Context.ClassWithOrder}Test.cs";
            var fullPath = Path.Combine(outputDirectory, targetFileName);

            // The test class is a user file: created when missing, never
            // overwritten unless force (the wizard prompts in Visual
            // Studio; the CLI skips). Byte-faithful to the WIZARD OUTPUT,
            // not the payload marker: the PreAccountUpdateSynchronousTest
            // .cs the wizard produced starts directly with the first
            // using — no BOM (unlike the Plugin/Workflow items, whose
            // outputs carry the payload's BOM through).
            var exists = File.Exists(fullPath);
            if (exists && !input.Force)
            {
                result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, "Skipped"));
                return result;
            }
            await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, code);
            result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, exists ? "Updated" : "Created"));
            return result;
        }

        /// <summary>
        /// FormPlugin.GetClassBaseName: the typed class name loses its
        /// trailing Test so the template's own Test suffix never doubles
        /// (MyPluginTest renders class MyPluginTest, file
        /// MyPluginTest.cs). A bare "Test" stays — stripping it would
        /// leave the wizard's empty class name behind.
        /// </summary>
        private static string StripTestSuffix(string className)
        {
            return className.Length > 4 && className.EndsWith("Test", StringComparison.Ordinal)
                ? className.Substring(0, className.Length - 4)
                : className;
        }

        /// <summary>
        /// The T4 code: a direct .tt path (--t4, wins), a custom title from
        /// DynamicsCrm.DevKit.Cli.json (the resolver walks up from the
        /// output directory like the wizard walks its config), or the
        /// built-in Test.tt resource. Null with an error added when
        /// the requested source does not exist.
        /// </summary>
        private static async Task<string> ResolveT4CodeAsync(ItemTemplateInput input, string outputDirectory, ScaffoldResult result)
        {
            if (!string.IsNullOrWhiteSpace(input.T4Path))
            {
                var t4Path = Path.GetFullPath(input.T4Path);
                if (!File.Exists(t4Path))
                {
                    result.AddError($"--t4 '{input.T4Path}': file not found.");
                    return null;
                }
                return await FileHelper.ReadAllTextAsync(t4Path);
            }
            var t4Code = await T4TemplateResolver.GetT4CodeAsync(ItemType.Test, input.TemplateTitle, null, outputDirectory);
            if (t4Code == null)
            {
                result.AddError($"--template '{input.TemplateTitle}': template not found in DynamicsCrm.DevKit.Cli.json. Use 'Default' or add the custom template.");
                return null;
            }
            return t4Code;
        }

        /// <summary>
        /// $rootnamespace$ — the project's namespace (resolved by the
        /// engine) plus the target folder path inside the project (VS
        /// composes the same).
        /// </summary>
        private static string ResolveRootNamespace(ItemTemplateInput input, string projectFile, string outputDirectory)
        {
            var ns = input.RootNamespace;
            if (string.IsNullOrWhiteSpace(ns)) return ns;

            var projectRoot = Path.GetDirectoryName(Path.GetFullPath(projectFile));
            var relative = GetRelativePath(projectRoot, outputDirectory);
            if (string.IsNullOrEmpty(relative)) return ns;
            var suffix = relative.Replace(Path.DirectorySeparatorChar, '.').Replace(Path.AltDirectorySeparatorChar, '.').TrimEnd('.');
            if (suffix.Length == 0) return ns;
            return $"{ns}.{suffix}";
        }

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }

        /// <summary>
        /// Path.GetRelativePath does not exist on net48 (SolutionMutator
        /// carries its own). Both inputs are full paths: the relative path
        /// of path under relativeTo — empty when they are the same
        /// directory, null when path is not under relativeTo (no namespace
        /// suffix can be composed then).
        /// </summary>
        private static string GetRelativePath(string relativeTo, string path)
        {
            var trimmedRelative = relativeTo.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
            var trimmedPath = path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
            if (string.Equals(trimmedPath, trimmedRelative, StringComparison.OrdinalIgnoreCase)) return string.Empty;
            var root = trimmedRelative + Path.DirectorySeparatorChar;
            return trimmedPath.StartsWith(root, StringComparison.OrdinalIgnoreCase)
                ? trimmedPath.Substring(root.Length)
                : null;
        }
    }
}
