using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the TsWebApi item template (VSIX 15.
    /// TsWebApiItemTemplate): generates the user TypeScript stub {Entity}.ts
    /// (the template's static "//" placeholder — the one template in the
    /// family whose stub carries no codegen) plus the generated webapi twin
    /// {Entity}.webapi.ts from Logic.TsWebApi.GetTsWebApiCodeAsync — the
    /// typed early-bound style CRUD scaffold off the entity's attribute
    /// metadata — and refreshes the shared OptionSet.ts the way the
    /// wizard's RunFinished always does after the two payload files
    /// (existing entity blocks in the file survive the merge, so
    /// scaffolding a second entity keeps the first). The codegen reads the
    /// entity's attributes and every lookup target through the lazy
    /// XrmHelper caches, so unlike LateBound this template has no offline
    /// fallback. Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.TsWebApi.
    /// </summary>
    public sealed class TsWebApiItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.TsWebApi.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpTsWebApiItemTemplate.vstemplate: both payload files carry
        /// ReplaceParameters, named by $SchemaName$. The .ts is the user
        /// file — a bare "//" placeholder, never overwritten unless force;
        /// the .webapi.ts is the generated twin — rewritten whenever its
        /// real content changed (the wizard's RunFinished
        /// WriteTargetFileIfChangedAsync). OptionSet.ts is not a vstemplate
        /// payload — the wizard writes it from code, so the manifest, like
        /// the vstemplate, carries exactly the two payload files.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.TsWebApi.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.TsWebApi.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TypeScript.ts", TargetFileName = "$SchemaName$.ts", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TypeScript.webapi.ts", TargetFileName = "$SchemaName$.webapi.ts", ReplaceParameters = true, IsGenerated = true });
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

            // The webapi codegen reads the entity's attributes (fetching
            // them itself only through a service) and every lookup target
            // through the lazy XrmHelper caches. With a service those fill
            // themselves per entity, but without one a cold cache is
            // unknowable (the wizard always runs connected).
            if (input.ServiceClient == null &&
                (metadata.Attributes == null ||
                 metadata.Attributes
                     .OfType<LookupAttributeMetadata>()
                     .Any(lookup => lookup.Targets == null ||
                                    lookup.Targets.Any(target => !XrmHelper.EntitiesMetadata.Any(x => x.LogicalName == target)))))
            {
                result.AddError("template 'TsWebApi': requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                return result;
            }

            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.TsWebApi.ToString());

            // The generated twin content: the wizard computes it in
            // RunStarted ($TypeScriptWebApi$) before any file is written,
            // so a codegen failure never leaves a half scaffold.
            request.Tokens["$TypeScriptWebApi$"] = await TsWebApi.GetTsWebApiCodeAsync(input.ServiceClient, metadata);

            // The user stub ({Entity}.ts): created when missing, never
            // overwritten unless --force (VSIX ShouldAddProjectItem). The
            // payload is the template's static "//" placeholder — no
            // tokens, so every fresh scaffold writes exactly that.
            var stubAction = await WritePayloadFileAsync(prefix + "TypeScript.ts", $"{schemaName}.ts", request.Tokens, outputDirectory, input.Force, isUserFile: true, result: result);
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.ts", Path.Combine(outputDirectory, $"{schemaName}.ts"), stubAction));

            // The generated twin ({Entity}.webapi.ts): rewritten whenever
            // its real content changed — the wizard's RunFinished
            // WriteTargetFileIfChangedAsync semantics via Helper.IsTheSame,
            // the whitespace-tolerant compare the CLI generator
            // (TaskGenerator.GeneratorTsWebApiAsync) already uses for the
            // very same .webapi.ts files.
            var webApiAction = await WritePayloadFileAsync(prefix + "TypeScript.webapi.ts", $"{schemaName}.webapi.ts", request.Tokens, outputDirectory, input.Force, isUserFile: false, result: result);
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.webapi.ts", Path.Combine(outputDirectory, $"{schemaName}.webapi.ts"), webApiAction));

            // The wizard's RunFinished ends with RefreshOptionSetAsync on
            // every run: the merged OptionSet.ts (existing entity blocks
            // kept, this entity added or replaced) written when its full
            // content changed. VSIX-only project-item bookkeeping
            // (AddTargetFileToProjectAsync, the webapi twin's DependentUpon
            // the user stub) has no CLI side — SDK-style projects glob the
            // files.
            await RefreshOptionSetAsync(input, metadata, outputDirectory, result);

            return result;
        }

        /// <summary>
        /// Resolves the entity metadata. Looks the entity up in the
        /// XrmHelper cache first (by schema or logical name); when missing
        /// and a service is available, reads the org's entity metadata once
        /// into the cache (attributes included — the same call the entity
        /// prompt makes) and looks again. The wizard's FormItem fills the
        /// cache with EntityFilters.Entity and GetTsWebApiCodeAsync then
        /// upgrades it with a per-entity fetch — mirror that upgrade when a
        /// service exists so the webapi code sees the full attribute set.
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
                    result.AddError("template 'TsWebApi': requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
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
        /// The wizard's RefreshOptionSetAsync: merge this entity's option
        /// sets into OptionSet.ts next to the payload files (the wizard's
        /// target folder — not the project root) and write when changed.
        /// The compare is the wizard's WriteTargetFileIfChangedAsync
        /// ordinal text compare on the BOM-stripped read, and the write is
        /// the wizard's ForceWriteAllTextAsync — a UTF-8 signature, the
        /// only one of the three outputs (the no-BOM payload twins are the
        /// template files' own encodings).
        /// </summary>
        private static async Task RefreshOptionSetAsync(ItemTemplateInput input, EntityMetadata metadata, string outputDirectory, ScaffoldResult result)
        {
            var optionSetPath = Path.Combine(outputDirectory, "OptionSet.ts");
            var existingContent = File.Exists(optionSetPath) ? await FileHelper.ReadAllTextAsync(optionSetPath) : null;
            var optionSetCode = await TsOptionSet.GetTsOptionSetCodeAsync(input.ServiceClient, new List<EntityMetadata> { metadata }, existingContent);
            var action = existingContent == null
                ? "Created"
                : string.Equals(existingContent, optionSetCode, StringComparison.Ordinal) ? "Unchanged" : "Updated";
            if (action != "Unchanged")
            {
                await FileHelper.ForceWriteAllTextAsync(optionSetPath, optionSetCode);
            }
            result.Files.Add(new ScaffoldFileResult("OptionSet.ts", optionSetPath, action));
        }

        /// <summary>
        /// Renders one payload stub with the tokens and writes it. Returns
        /// the action taken: Created, Updated, Skipped (user file exists,
        /// no force) or Unchanged (generated file, same content). The
        /// generated compare is the wizard's WriteTargetFileIfChangedAsync
        /// semantics via Helper.IsTheSame — the whitespace-tolerant compare
        /// the CLI generator already uses for the very same .webapi.ts
        /// files. Byte-faithful to Visual Studio: the stubs carry the
        /// payload file's own encoding — no BOM for either TypeScript
        /// placeholder.
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

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }
    }
}
