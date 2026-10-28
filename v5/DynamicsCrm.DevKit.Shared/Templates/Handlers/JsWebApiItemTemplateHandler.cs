using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the JsWebApi item template (VSIX 03.
    /// JsWebApiItemTemplate): generates the user JavaScript stub {Entity}.js
    /// from CodeGenService.GetDefaultWebApiFileAsync plus the generated webapi
    /// twin {Entity}.webapi.js and typing file {Entity}.d.ts from
    /// Logic.JsWebApi.GetJsWebApiCodeAsync, all off the entity's attribute
    /// metadata. The .d.ts WebApi section is always on and its Form section
    /// follows the {Entity}.form.js sibling (pairs with the JsForm item).
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.JsWebApi.
    /// </summary>
    public sealed class JsWebApiItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.JsWebApi.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpJsWebApiItemTemplate.vstemplate: all three payload stubs are
        /// single $token$ files ($Javascript$ / $Javascript.d.ts$ /
        /// $Javascript.webapi.js$) with ReplaceParameters on, named by
        /// $SchemaName$ in vstemplate order. The .js is the user file —
        /// never overwritten unless force; the .d.ts and .webapi.js are the
        /// generated twins — rewritten whenever their real content changed
        /// (the wizard's RunFinished WriteTargetFileIfChangedAsync).
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.JsWebApi.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.JsWebApi.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Javascript.js", TargetFileName = "$SchemaName$.js", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Javascript.d.ts", TargetFileName = "$SchemaName$.d.ts", ReplaceParameters = true, IsGenerated = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Javascript.webapi.js", TargetFileName = "$SchemaName$.webapi.js", ReplaceParameters = true, IsGenerated = true });
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
            var entity = !string.IsNullOrWhiteSpace(input.Entity) ? input.Entity : input.Name;

            var metadata = await ResolveEntityMetadataAsync(input, entity, result);
            if (metadata == null) return result;

            // The wizard names the files after metadata.SchemaName — the
            // typed value may be the logical name ("account") while the
            // files are "Account".
            var schemaName = metadata.SchemaName;
            request.Tokens["$SchemaName$"] = schemaName;

            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            Directory.CreateDirectory(outputDirectory);
            var rootNamespace = ResolveRootNamespace(workspace, input.RootNamespace, outputDirectory);
            request.Tokens["$rootnamespace$"] = rootNamespace;

            // VSIX IsJsFormExistAsync: the {Entity}.form.js sibling in the
            // target folder turns the Form section of the .d.ts on (pairs
            // with the JsForm item template).
            var isJsFormExist = File.Exists(Path.Combine(outputDirectory, $"{schemaName}.form.js"));

            // The webapi codegen (webapi twin and declaration alike) reads
            // the entity's attributes and every lookup target through the
            // lazy XrmHelper caches, and — with a .form.js sibling — the
            // entity's forms and BPF processes (the Form section of the
            // .d.ts walks both, like the JsForm template). With a service
            // those fill themselves per entity, but without one a cold
            // cache is unknowable (the wizard always runs connected).
            if (input.ServiceClient == null)
            {
                if (metadata.Attributes == null ||
                    metadata.Attributes
                        .OfType<LookupAttributeMetadata>()
                        .Any(lookup => lookup.Targets == null ||
                                       lookup.Targets.Any(target => !XrmHelper.EntitiesMetadata.Any(x => x.LogicalName == target))))
                {
                    result.AddError("template 'JsWebApi': requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                    return result;
                }
                if (isJsFormExist &&
                    (!XrmHelper.EntitiesFormXml.Any(x => x.EntityLogicalName == metadata.LogicalName) ||
                     !XrmHelper.EntitiesProcessForm.Any(x => x.EntityLogicalName == metadata.LogicalName)))
                {
                    result.AddError("template 'JsWebApi': requires a Dataverse connection to read entity forms. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                    return result;
                }
            }

            request.Tokens["$Javascript$"] = await new CodeGenService(input.ServiceClient).GetDefaultWebApiFileAsync(schemaName);
            var (webApiCode, dts) = await JsWebApi.GetJsWebApiCodeAsync(input.ServiceClient, metadata, rootNamespace, isJsFormExist);

            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.JsWebApi.ToString());

            // The user stub ({Entity}.js): created when missing, never
            // overwritten unless --force (VSIX ShouldAddProjectItem).
            var jsAction = await WritePayloadFileAsync(prefix + "Javascript.js", $"{schemaName}.js", request.Tokens, outputDirectory, input.Force, isUserFile: true, result: result);
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.js", Path.Combine(outputDirectory, $"{schemaName}.js"), jsAction));

            // The generated twins ({Entity}.d.ts, {Entity}.webapi.js):
            // compared on their full content — unlike the LateBound
            // generated class they carry no volatile timestamp header, so a
            // plain compare can never false-positive.
            request.Tokens["$Javascript.d.ts$"] = dts;
            request.Tokens["$Javascript.webapi.js$"] = webApiCode;

            var dtsAction = await WritePayloadFileAsync(prefix + "Javascript.d.ts", $"{schemaName}.d.ts", request.Tokens, outputDirectory, input.Force, isUserFile: false, result: result);
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.d.ts", Path.Combine(outputDirectory, $"{schemaName}.d.ts"), dtsAction));

            var webApiAction = await WritePayloadFileAsync(prefix + "Javascript.webapi.js", $"{schemaName}.webapi.js", request.Tokens, outputDirectory, input.Force, isUserFile: false, result: result);
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.webapi.js", Path.Combine(outputDirectory, $"{schemaName}.webapi.js"), webApiAction));

            return result;
        }

        /// <summary>
        /// Resolves the entity metadata. Looks the entity up in the
        /// XrmHelper cache first (by schema or logical name); when missing
        /// and a service is available, reads the org's entity metadata once
        /// into the cache (attributes included — the same call the entity
        /// prompt makes) and looks again. The wizard's FormItem fills the
        /// cache with EntityFilters.Entity and GetJsWebApiCodeAsync then
        /// upgrades it with a per-entity EntityFilters.All fetch — mirror
        /// that upgrade when a service exists so the code sees the full
        /// attribute and relationship set.
        /// </summary>
        private static async Task<EntityMetadata> ResolveEntityMetadataAsync(ItemTemplateInput input, string entity, ScaffoldResult result)
        {
            var metadata = FindEntityMetadata(entity);
            if (metadata == null && input.ServiceClient != null)
            {
                await new MetadataService(input.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Attributes);
                metadata = FindEntityMetadata(entity);
            }
            if (metadata == null)
            {
                if (input.ServiceClient == null && XrmHelper.EntitiesMetadata.Count == 0)
                {
                    // Nothing to look the entity up in: without a service and
                    // without a cached metadata read the entity is unknowable.
                    result.AddError("template 'JsWebApi': requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                }
                else
                {
                    result.AddError($"--entity '{entity}': entity not found in the current instance.");
                }
                return null;
            }
            if (input.ServiceClient == null) return metadata;
            return await new MetadataService(input.ServiceClient).FetchEntityMetadataAsync(metadata.LogicalName);
        }

        private static EntityMetadata FindEntityMetadata(string entity)
        {
            if (string.IsNullOrWhiteSpace(entity)) return null;
            return XrmHelper.EntitiesMetadata.FirstOrDefault(x =>
                string.Equals(x.SchemaName, entity, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(x.LogicalName, entity, StringComparison.OrdinalIgnoreCase));
        }

        /// <summary>
        /// Renders one payload stub with the tokens and writes it. Returns
        /// the action taken: Created, Updated, Skipped (user file exists,
        /// no force) or Unchanged (generated file, same content). The
        /// generated compare is the wizard's WriteTargetFileIfChangedAsync
        /// semantics via Helper.IsTheSame — the whitespace-tolerant compare
        /// the CLI generator already uses for the very same .webapi.js
        /// files. Byte-faithful to Visual Studio: the stubs carry a BOM and
        /// the wizard writes one.
        /// </summary>
        private static async Task<string> WritePayloadFileAsync(string resourceName, string targetFileName, Dictionary<string, string> tokens, string outputDirectory, bool force, bool isUserFile, ScaffoldResult result)
        {
            var payload = await TemplatePayload.ReadContentAsync(resourceName);
            if (payload == null)
            {
                throw new InvalidOperationException($"resource not found: {resourceName}");
            }
            var content = TokenEngine.ApplyReplacements(payload.Content, tokens);
            var fullPath = Path.Combine(outputDirectory, targetFileName);

            var exists = File.Exists(fullPath);
            if (exists && isUserFile && !force)
            {
                return "Skipped";
            }
            if (exists && !isUserFile)
            {
                var oldCode = await FileHelper.ReadAllTextAsync(fullPath);
                if (Helper.IsTheSame(oldCode, content))
                {
                    return "Unchanged";
                }
            }
            if (payload.HasBom)
            {
                await FileHelper.ForceWriteAllTextAsync(fullPath, content);
            }
            else
            {
                await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, content);
            }
            return exists ? "Updated" : "Created";
        }

        /// <summary>
        /// Visual Studio composes $rootnamespace$ = the project default
        /// namespace + the target folder path inside the project (the
        /// TestAllInOne reference carries Dev.AllInOne.WebResource.entities).
        /// The scanner yields the project default namespace — append the
        /// same suffix for targets nested under the containing project.
        /// </summary>
        private static string ResolveRootNamespace(WorkspaceContext workspace, string rootNamespace, string outputDirectory)
        {
            var ns = !string.IsNullOrWhiteSpace(rootNamespace) ? rootNamespace : workspace?.RootNamespace;
            if (string.IsNullOrWhiteSpace(ns)) return ns;
            var projectRoot = FindProjectRoot(outputDirectory);
            if (projectRoot == null) return ns;
            var relative = GetRelativePath(projectRoot, outputDirectory);
            if (string.IsNullOrWhiteSpace(relative)) return ns;
            var suffix = relative.Replace(Path.DirectorySeparatorChar, '.').Replace(Path.AltDirectorySeparatorChar, '.').TrimEnd('.');
            if (suffix.Length == 0) return ns;
            return $"{ns}.{suffix}";
        }

        /// <summary>
        /// The nearest directory at or above the target holding a project
        /// file (SDK-style .csproj or a shared .shproj) — the same walk the
        /// scanner's FindRootNamespace makes.
        /// </summary>
        private static string FindProjectRoot(string startDirectory)
        {
            var directory = new DirectoryInfo(startDirectory);
            while (directory != null)
            {
                if (Directory.GetFiles(directory.FullName, "*.csproj").Length > 0 ||
                    Directory.GetFiles(directory.FullName, "*.shproj").Length > 0)
                {
                    return directory.FullName;
                }
                directory = directory.Parent;
            }
            return null;
        }

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }

        /// <summary>
        /// Path.GetRelativePath does not exist on net48 (SolutionMutator
        /// carries its own) — both inputs are full paths, path sits under
        /// relativeTo.
        /// </summary>
        private static string GetRelativePath(string relativeTo, string path)
        {
            var root = relativeTo.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
                       + Path.DirectorySeparatorChar;
            return path.StartsWith(root, StringComparison.OrdinalIgnoreCase)
                ? path.Substring(root.Length)
                : path;
        }
    }
}
