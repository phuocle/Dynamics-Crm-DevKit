using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the CustomAction item template (VSIX 05.
    /// CustomActionItemTemplate): renders the T4 template (CustomAction.tt
    /// by default, a DynamicsCrm.DevKit.Cli.json custom title or a direct
    /// .tt path) with the T4Context the wizard builds from FormPlugin and
    /// writes the custom action class {Class}{Order}.cs. The payload stub
    /// is just the $customaction$ token, so the CLI writes the T4 render
    /// directly instead of substituting tokens (the engine replaces
    /// $customaction$ itself).
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.CustomAction. The dialog is
    /// FormPlugin again, with two CustomAction differences: the entity
    /// combo inserts a "None" choice (LogicalName "none" — an unbound
    /// custom action registration) and the message combo lists the
    /// custom operations (MetadataService.GetCustomActionsAsync) instead
    /// of the entity's sdk messages.
    /// </summary>
    public sealed class CustomActionItemTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// The wizard's inserted "None" entity choice (FormPlugin.
        /// Connection_Connected): SchemaName "None", LogicalName "none".
        /// Typed offline as any casing — normalized to the wizard's pair.
        /// </summary>
        public const string NoneSchemaName = "None";
        public const string NoneLogicalName = "none";

        public string TemplateId
        {
            get { return ItemType.CustomAction.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the single file entry of
        /// CSharpCustomActionItemTemplate.vstemplate: one payload stub whose
        /// content is just $customaction$ (the T4 render), named
        /// $Class$$PluginOrder$.cs — $PluginOrder$ is empty when the order
        /// is 1, so the first step of a class has no file-name suffix.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.CustomAction.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.CustomAction.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Class.cs", TargetFileName = "$Class$$PluginOrder$.cs", ReplaceParameters = true });
            return manifest;
        }

        /// <summary>
        /// The FormPlugin class suggestion (UpdateClassName — the same
        /// formula the Plugin dialog uses): {Stage}{SchemaName}{Message}
        /// {Execution} with the Operation suffix stripped. The "None"
        /// entity keeps its schema name, so an unbound suggestion reads
        /// PreNonenew_MyActionSynchronous — odd-looking but exactly what
        /// the wizard types.
        /// </summary>
        public static string SuggestClassName(string stage, string schemaName, string message, string execution)
        {
            return $"{(stage ?? string.Empty).Replace("Operation", string.Empty)}{schemaName}{message}{execution}";
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

            // The entity is required — "none" is the wizard's unbound
            // registration choice; everything else names the bound entity.
            var entity = input.Entity?.Trim();
            if (string.IsNullOrWhiteSpace(entity))
            {
                result.AddError($"--entity: required for template 'CustomAction' — a schema name or '{NoneLogicalName}' for an unbound custom action.");
                return result;
            }
            var className = !string.IsNullOrWhiteSpace(input.Class) ? input.Class.Trim() : input.Name?.Trim();
            if (string.IsNullOrWhiteSpace(className))
            {
                result.AddError("--name: required for template 'CustomAction' — the custom action class name.");
                return result;
            }
            input.Class = className;
            if (string.IsNullOrWhiteSpace(input.Message))
            {
                result.AddError("--message: required for template 'CustomAction'.");
                return result;
            }
            var stage = input.Stage?.Trim() ?? string.Empty;
            if (stage.Length == 0)
            {
                result.AddError("--stage: required for template 'CustomAction'. Use PreValidation, PreOperation or PostOperation.");
                return result;
            }
            if (!stage.Equals("PreValidation", StringComparison.OrdinalIgnoreCase) &&
                !stage.Equals("PreOperation", StringComparison.OrdinalIgnoreCase) &&
                !stage.Equals("PostOperation", StringComparison.OrdinalIgnoreCase))
            {
                result.AddError($"--stage '{input.Stage}': invalid. Use PreValidation, PreOperation or PostOperation.");
                return result;
            }
            var execution = string.IsNullOrWhiteSpace(input.Execution) ? "Synchronous" : input.Execution.Trim();
            if (!execution.Equals("Synchronous", StringComparison.OrdinalIgnoreCase) &&
                !execution.Equals("Asynchronous", StringComparison.OrdinalIgnoreCase))
            {
                result.AddError($"--execution '{input.Execution}': invalid. Use Synchronous or Asynchronous.");
                return result;
            }
            if (execution.Equals("Asynchronous", StringComparison.OrdinalIgnoreCase) &&
                !stage.Equals("PostOperation", StringComparison.OrdinalIgnoreCase))
            {
                result.AddError("--execution 'Asynchronous': requires stage PostOperation — PreValidation/PreOperation steps run Synchronous.");
                return result;
            }
            if (input.Order < 1)
            {
                result.AddError($"--order '{input.Order}': invalid. Use a positive integer.");
                return result;
            }
            input.Execution = execution;
            input.Stage = stage;

            // The engine resolves the project file for EVERY item template
            // (--project name, else the nearest at/above the output
            // directory) and errors without one; the namespace reads from
            // that file.
            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            var projectFile = request.ProjectFile;
            if (string.IsNullOrWhiteSpace(projectFile))
            {
                result.AddError("--project: required for item template 'CustomAction' — run inside a project folder or pass --project <name>.");
                return result;
            }
            Directory.CreateDirectory(outputDirectory);
            input.RootNamespace = ResolveRootNamespace(input, projectFile, outputDirectory);
            if (string.IsNullOrWhiteSpace(input.RootNamespace))
            {
                result.AddError($"--project '{Path.GetFileNameWithoutExtension(projectFile)}': the project carries no RootNamespace.");
                return result;
            }

            // The wizard always runs connected: the entity combo fills from
            // the org metadata (None first) and the message combo from the
            // custom operations (GetCustomActionsAsync — the same list as
            // FormPlugin). Offline (work unit §5) every value is typed and
            // trusted, with a warning in the result.
            string schemaName;
            string logicalName;
            string message;
            if (input.ServiceClient != null)
            {
                if (IsNoneEntity(entity))
                {
                    schemaName = NoneSchemaName;
                    logicalName = NoneLogicalName;
                    var unbound = await new MetadataService(input.ServiceClient).GetCustomActionsAsync();
                    var unboundFound = unbound.FirstOrDefault(x => string.Equals(x.Name, input.Message.Trim(), StringComparison.OrdinalIgnoreCase));
                    if (unboundFound == null)
                    {
                        result.AddError($"--message '{input.Message}': not a valid custom action for entity '{NoneLogicalName}'.");
                        return result;
                    }
                    message = unboundFound.Name;
                }
                else
                {
                    if (XrmHelper.EntitiesMetadata.Count == 0)
                    {
                        await new MetadataService(input.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Entity);
                    }
                    var metadata = FindEntityMetadata(entity);
                    if (metadata == null)
                    {
                        result.AddError($"--entity '{entity}': entity not found in the current instance.");
                        return result;
                    }
                    schemaName = metadata.SchemaName;
                    logicalName = metadata.LogicalName;

                    var actions = await new MetadataService(input.ServiceClient).GetCustomActionsAsync(logicalName);
                    var found = actions.FirstOrDefault(x => string.Equals(x.Name, input.Message.Trim(), StringComparison.OrdinalIgnoreCase));
                    if (found == null)
                    {
                        result.AddError($"--message '{input.Message}': not a valid custom action for entity '{logicalName}'.");
                        return result;
                    }
                    message = found.Name;
                }
            }
            else
            {
                schemaName = IsNoneEntity(entity) ? NoneSchemaName : entity;
                logicalName = IsNoneEntity(entity) ? NoneLogicalName : entity.ToLowerInvariant();
                message = input.Message.Trim();
                result.AddWarning("template 'CustomAction': offline mode — entity and message were not validated against the connected instance.");
            }

            // The factory reads the entity from input.Entity (schema form —
            // the logical name derives lowercased) and the comment through
            // input.Comment; write both back like the wizard's form output.
            input.Entity = schemaName;
            input.DataSource = logicalName;

            // The wizard's comment block: the custom action request's
            // InputParameters / OutputParameters doc read from the org
            // (empty offline).
            input.Comment = input.ServiceClient != null
                ? await new MetadataService(input.ServiceClient).GetPluginCommentAsync(logicalName, message)
                : string.Empty;

            var t4Code = await ResolveT4CodeAsync(input, outputDirectory, result);
            if (t4Code == null) return result;

            // The wizard renders with the full context for custom templates
            // (title differs from "Default") and the plugin context for the
            // built-in one — title-based, exactly like CustomAction.cs.
            var t4Context = hasCustomTitle || !string.IsNullOrWhiteSpace(input.T4Path)
                ? T4ContextFactory.BuildContext(input, workspace)
                : T4ContextFactory.BuildPluginContext(input, workspace);

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

            // $Class$$PluginOrder$.cs — the suffix vanishes when the order
            // is 1 (t4Context.ClassWithOrder carries the same rule for the
            // class declaration inside the file).
            var targetFileName = $"{t4Context.ClassWithOrder}.cs";
            var fullPath = Path.Combine(outputDirectory, targetFileName);

            // The custom action class is a user file: created when missing,
            // never overwritten unless force (the wizard prompts in Visual
            // Studio; the CLI skips). Byte-faithful: the payload stub
            // carries a BOM and the wizard writes one.
            var payload = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Item, ItemType.CustomAction.ToString()) + "Class.cs");
            var exists = File.Exists(fullPath);
            if (exists && !input.Force)
            {
                result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, "Skipped"));
                return result;
            }
            if (payload != null && payload.HasBom)
            {
                await FileHelper.ForceWriteAllTextAsync(fullPath, code);
            }
            else
            {
                await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, code);
            }
            result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, exists ? "Updated" : "Created"));
            return result;
        }

        /// <summary>
        /// True when the entity argument names the wizard's None choice —
        /// any casing of "none".
        /// </summary>
        public static bool IsNoneEntity(string entity)
        {
            return string.Equals(entity?.Trim(), NoneLogicalName, StringComparison.OrdinalIgnoreCase);
        }

        /// <summary>
        /// The T4 code: a direct .tt path (--t4, wins), a custom title from
        /// DynamicsCrm.DevKit.Cli.json (the resolver walks up from the
        /// output directory like the wizard walks its config), or the
        /// built-in CustomAction.tt resource. Null with an error added when
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
            var t4Code = await T4TemplateResolver.GetT4CodeAsync(ItemType.CustomAction, input.TemplateTitle, null, outputDirectory);
            if (t4Code == null)
            {
                result.AddError($"--template '{input.TemplateTitle}': template not found in DynamicsCrm.DevKit.Cli.json. Use 'Default' or add the custom template.");
                return null;
            }
            return t4Code;
        }

        /// <summary>
        /// Looks the entity up in the XrmHelper cache by schema or logical
        /// name — the wizard reads the same cache (EntityFilters.Entity,
        /// the entity prompt's fill).
        /// </summary>
        private static EntityMetadata FindEntityMetadata(string entity)
        {
            if (string.IsNullOrWhiteSpace(entity)) return null;
            return XrmHelper.EntitiesMetadata.FirstOrDefault(x =>
                string.Equals(x.SchemaName, entity, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(x.LogicalName, entity, StringComparison.OrdinalIgnoreCase));
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
