using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the UiTest item template (VSIX
    /// 10.UiTestItemTemplate): renders the T4 template (UiTest.tt by
    /// default, a DynamicsCrm.DevKit.Cli.json custom title or a direct
    /// .tt path) with the T4Context the wizard builds from FormPlugin and
    /// writes the EasyRepro UI test class {Class}{Order}Test.cs. The
    /// payload stub is just the $uitest$ token, so the CLI writes the T4
    /// render directly instead of substituting tokens (the engine
    /// replaces $uitest$ itself). The wizard output drops the payload's
    /// BOM — the generated file starts directly with the first using,
    /// like the Test item.
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.UiTest. The dialog is
    /// FormPlugin with every org combo hidden (UiTestItem collapses
    /// entity, message, stage and execution) — a UI test class is just
    /// the class name, so there is nothing to validate against the
    /// connected instance and the handler performs no org calls at all
    /// (FormPlugin.Connection_Connected has no UiTest branch; the comment
    /// the wizard derives is GetPluginCommentAsync("", "") which
    /// short-circuits to the empty string). The Default title renders
    /// through the class-only context (T4Helper.BuildClassContextAsync —
    /// namespace, order, class and the Shared project namespace only); a
    /// custom title renders through the full context like every other
    /// T4 item.
    ///
    /// The typed class name loses its trailing Test (FormPlugin
    /// counts the UiTest dialog among the test-class items —
    /// GetClassBaseName strips it) so the template's own Test suffix
    /// never doubles, exactly like the Test item.
    /// </summary>
    public sealed class UiTestItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.UiTest.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the single file entry of
        /// CSharpUiTestItemTemplate.vstemplate: one payload stub whose
        /// content is just $uitest$ (the T4 render), named
        /// $Class$$PluginOrder$Test.cs — $PluginOrder$ is empty when the
        /// order is 1, and the Test suffix is the vstemplate's own.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.UiTest.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.UiTest.ToString());
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

            // The class is the only dialog input: FormPlugin.UiTestItem
            // collapses the entity, message, stage and execution combos and
            // IsValid checks the class textbox alone. Its trailing Test is
            // stripped (FormPlugin.GetClassBaseName counts UiTest among the
            // test-class items) so the template's own Test suffix never
            // doubles.
            var className = !string.IsNullOrWhiteSpace(input.Class) ? input.Class.Trim() : input.Name?.Trim();
            if (string.IsNullOrWhiteSpace(className))
            {
                result.AddError("--name: required for template 'UiTest' — the UI test class name.");
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
            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            var projectFile = request.ProjectFile;
            if (string.IsNullOrWhiteSpace(projectFile))
            {
                result.AddError("--project: required for item template 'UiTest' — run inside a project folder or pass --project <name>.");
                return result;
            }
            Directory.CreateDirectory(outputDirectory);
            input.RootNamespace = ResolveRootNamespace(input, projectFile, outputDirectory);
            if (string.IsNullOrWhiteSpace(input.RootNamespace))
            {
                result.AddError($"--project '{Path.GetFileNameWithoutExtension(projectFile)}': the project carries no RootNamespace.");
                return result;
            }

            // The wizard's comment is empty for a UI test class (the
            // entity combo is collapsed, so PluginLogicalName is the empty
            // string and GetPluginCommentAsync short-circuits) — write it
            // back so custom templates render the same value, not the
            // Name-when-Class-is-set fallback.
            input.Comment = string.Empty;

            var t4Code = await ResolveT4CodeAsync(input, outputDirectory, result);
            if (t4Code == null) return result;

            // The wizard renders with the full context for custom templates
            // (title differs from "Default") and the class-only context for
            // the built-in one — title-based, exactly like UiTest.cs.
            var t4Context = hasCustomTitle || !string.IsNullOrWhiteSpace(input.T4Path)
                ? T4ContextFactory.BuildContext(input, workspace)
                : T4ContextFactory.BuildClassContext(input, workspace);

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

            // The UI test class is a user file: created when missing,
            // never overwritten unless force (the wizard prompts in Visual
            // Studio; the CLI skips). Byte-faithful to the WIZARD OUTPUT,
            // not the payload marker: the LoginTest.cs the wizard produced
            // starts directly with the first using — no BOM (like the Test
            // item; unlike the Plugin/Workflow items, whose outputs carry
            // the payload's BOM through). UiTest.tt is a pure text
            // template — two expression holes, no block construct — so the
            // render needs no VS-host newline repair.
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
        /// (MyLoginTest renders class MyLoginTest, file MyLoginTest.cs). A
        /// bare "Test" stays — stripping it would leave the wizard's empty
        /// class name behind.
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
        /// built-in UiTest.tt resource. Null with an error added when
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
            var t4Code = await T4TemplateResolver.GetT4CodeAsync(ItemType.UiTest, input.TemplateTitle, null, outputDirectory);
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
