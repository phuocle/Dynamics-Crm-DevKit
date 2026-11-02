using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the Data Provider item template (VSIX
    /// 08.DataProviderItemTemplate): renders the five built-in T4
    /// templates DataProvider{Create,Update,Delete,Retrieve,
    /// RetrieveMultiple}.tt with the T4Context the wizard builds from
    /// FormPlugin and writes the five data provider operation classes
    /// Create.cs, Update.cs, Delete.cs, Retrieve.cs and
    /// RetrieveMultiple.cs — the vstemplate's five payload stubs are just
    /// $DataProvider{SubType}$ tokens, so the CLI writes the T4 renders
    /// directly instead of substituting tokens.
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.DataProvider. The dialog
    /// is FormPlugin with the entity combo relabeled "Data Source" and
    /// filled from Metadata.GetAllDataSourceAsync (the virtual tables
    /// backed by the DevKit data provider) — the class, message, stage
    /// and execution fields are collapsed, so the selected data source
    /// logical name is the only dialog input. The five class names are
    /// hard-coded in the templates (the vstemplate's TargetFileName is
    /// fixed too and Context.Class is never read), the registration
    /// order is 1 and the template panel is hidden: the wizard renders
    /// the five built-in templates only (GetDefaultCustomTemplateBodyAsync
    /// — no DynamicsCrm.DevKit.Cli.json lookup, no --template/--t4).
    /// </summary>
    public sealed class DataProviderItemTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// The five vstemplate files, in
        /// CSharpDataProviderItemTemplate.vstemplate order — each payload
        /// stub carries the BOM the wizard writes through and each target
        /// name is fixed (no $Class$).
        /// </summary>
        private static readonly string[] SubTypes = { "Retrieve", "RetrieveMultiple", "Create", "Update", "Delete" };

        public string TemplateId
        {
            get { return ItemType.DataProvider.ToString(); }
        }

        /// <summary>
        /// The payload declarations, mirroring the five file entries of
        /// CSharpDataProviderItemTemplate.vstemplate: payload stubs whose
        /// content is just $DataProvider{SubType}$ (the T4 render), named
        /// {SubType}.cs (ReplaceParameters on).
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.DataProvider.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.DataProvider.ToString());
            foreach (var subType in SubTypes)
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + subType + ".cs", TargetFileName = subType + ".cs", ReplaceParameters = true });
            }
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
            // The wizard's template panel is hidden for a data provider
            // and its renderer reads the five built-in resources only —
            // a custom T4 source has no wizard counterpart to mirror.
            var hasCustomTitle = !string.IsNullOrWhiteSpace(input.TemplateTitle) &&
                                 !string.Equals(input.TemplateTitle, T4TemplateResolver.DefaultTemplateTitle, StringComparison.Ordinal);
            if (hasCustomTitle || !string.IsNullOrWhiteSpace(input.T4Path))
            {
                result.AddError("--template/--t4: not supported for template 'DataProvider' — the wizard renders the five built-in templates.");
                return result;
            }

            // The data source is the only dialog input: FormPlugin
            // relabels the entity combo "Data Source", fills it with
            // Metadata.GetAllDataSourceAsync and collapses every other
            // field (the class textbox included).
            if (string.IsNullOrWhiteSpace(input.DataSource))
            {
                result.AddError("--datasource: required for template 'DataProvider' — the virtual table data source logical name.");
                return result;
            }

            // The engine resolves the project file for EVERY item template
            // (--project name, else the nearest at/above the output
            // directory) and errors without one; the namespace reads from
            // that file.
            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            var projectFile = request.ProjectFile;
            if (string.IsNullOrWhiteSpace(projectFile))
            {
                result.AddError("--project: required for item template 'DataProvider' — run inside a project folder or pass --project <name>.");
                return result;
            }
            Directory.CreateDirectory(outputDirectory);
            input.RootNamespace = ResolveRootNamespace(input, projectFile, outputDirectory);
            if (string.IsNullOrWhiteSpace(input.RootNamespace))
            {
                result.AddError($"--project '{Path.GetFileNameWithoutExtension(projectFile)}': the project carries no RootNamespace.");
                return result;
            }

            // The wizard renders every template BEFORE Visual Studio
            // writes the first file — one context, five renders; a broken
            // template errors out with nothing written.
            var t4Context = T4ContextFactory.BuildDataProviderContext(input, workspace);
            var renders = new Dictionary<string, string>(StringComparer.Ordinal);
            foreach (var subType in SubTypes)
            {
                var t4Code = await T4TemplateResolver.GetDefaultTemplateBodyAsync(ItemType.DataProvider, subType);
                if (t4Code == null)
                {
                    result.AddError($"template '{subType}': built-in T4 resource not found.");
                    return result;
                }
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
                renders[subType] = code;
            }

            // Five user files, fixed names (the vstemplate's
            // TargetFileName): created when missing, never overwritten
            // unless force, each decided on its own — a rerun completes
            // the missing ones. Byte-faithful: the payload stubs carry a
            // BOM and the wizard writes one.
            foreach (var subType in SubTypes)
            {
                var targetFileName = subType + ".cs";
                var fullPath = Path.Combine(outputDirectory, targetFileName);
                var payload = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Item, ItemType.DataProvider.ToString()) + subType + ".cs");
                var exists = File.Exists(fullPath);
                if (exists && !input.Force)
                {
                    result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, "Skipped"));
                    continue;
                }
                if (payload != null && payload.HasBom)
                {
                    await FileHelper.ForceWriteAllTextAsync(fullPath, renders[subType]);
                }
                else
                {
                    await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, renders[subType]);
                }
                result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, exists ? "Updated" : "Created"));
            }
            return result;
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
