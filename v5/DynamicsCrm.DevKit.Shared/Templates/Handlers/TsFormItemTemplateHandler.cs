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
    /// Item handler for the TsForm item template (VSIX 14.
    /// JsFormTsItemTemplate): generates the user TypeScript stub {Entity}.ts
    /// from CodeGenService.GetDefaultTsFormFileAsync plus the generated form
    /// twin {Entity}.form.ts from Logic.TsForm.GetTsFormCodeAsync — both off
    /// the entity's live form metadata — and refreshes the shared
    /// OptionSet.ts the way the wizard's RunFinished always does after the
    /// two payload files (existing entity blocks in the file survive the
    /// merge, so scaffolding a second entity keeps the first). The stub is
    /// form-dependent, so unlike LateBound this template has no offline
    /// fallback. Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.TsForm.
    /// </summary>
    public sealed class TsFormItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.TsForm.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpJsFormTsItemTemplate.vstemplate: both payload stubs are
        /// single $token$ files ($TypeScript$ / $TypeScriptForm$) with
        /// ReplaceParameters on, named by $SchemaName$ in vstemplate order.
        /// The .ts is the user file — never overwritten unless force; the
        /// .form.ts is the generated twin — rewritten whenever its real
        /// content changed (the wizard's RunFinished
        /// WriteTargetFileIfChangedAsync). OptionSet.ts is not a vstemplate
        /// payload — the wizard writes it from code, so the manifest, like
        /// the vstemplate, carries exactly the two payload files.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.TsForm.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.TsForm.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TypeScript.ts", TargetFileName = "$SchemaName$.ts", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TypeScript.form.ts", TargetFileName = "$SchemaName$.form.ts", ReplaceParameters = true, IsGenerated = true });
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

            // The form codegen (stub, form twin and OptionSet merge alike)
            // reads the entity's forms and BPF processes through the lazy
            // XrmHelper caches — with a service those fill themselves per
            // entity, but without one a cold cache is unknowable (the
            // wizard always runs connected).
            if (input.ServiceClient == null &&
                (!XrmHelper.EntitiesFormXml.Any(x => x.EntityLogicalName == metadata.LogicalName) ||
                 !XrmHelper.EntitiesProcessForm.Any(x => x.EntityLogicalName == metadata.LogicalName)))
            {
                result.AddError("template 'TsForm': requires a Dataverse connection to read entity forms. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                return result;
            }

            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.TsForm.ToString());

            // The user stub ({Entity}.ts): created when missing, never
            // overwritten unless --force (VSIX ShouldAddProjectItem). An
            // entity without forms stubs to the empty file (the codegen's
            // string.Empty), exactly the wizard's fresh output.
            request.Tokens["$TypeScript$"] = await new CodeGenService(input.ServiceClient).GetDefaultTsFormFileAsync(metadata);
            var stubAction = await WritePayloadFileAsync(prefix + "TypeScript.ts", $"{schemaName}.ts", request.Tokens, outputDirectory, input.Force, isUserFile: true, result: result);
            result.Files.Add(new ScaffoldFileResult($"{schemaName}.ts", Path.Combine(outputDirectory, $"{schemaName}.ts"), stubAction));

            // The generated twin ({Entity}.form.ts): when the entity has no
            // enabled Main/QuickCreate form the codegen returns null and
            // nothing is written (the JsForm handler's "(no forms)" skip —
            // the wizard's own null-token path is a swallowed error, not a
            // shape worth porting).
            var formCode = await TsForm.GetTsFormCodeAsync(input.ServiceClient, metadata);
            if (string.IsNullOrEmpty(formCode))
            {
                result.AddWarning($"Entity '{schemaName}' has no Main or Quick Create forms — '{schemaName}.form.ts' was not generated.");
                result.Files.Add(new ScaffoldFileResult($"{schemaName}.form.ts", Path.Combine(outputDirectory, $"{schemaName}.form.ts"), "Skipped"));
            }
            else
            {
                request.Tokens["$TypeScriptForm$"] = formCode;
                var formAction = await WritePayloadFileAsync(prefix + "TypeScript.form.ts", $"{schemaName}.form.ts", request.Tokens, outputDirectory, input.Force, isUserFile: false, result: result);
                result.Files.Add(new ScaffoldFileResult($"{schemaName}.form.ts", Path.Combine(outputDirectory, $"{schemaName}.form.ts"), formAction));
            }

            // The wizard's RunFinished ends with RefreshOptionSetAsync on
            // every run, before or after any forms: the merged OptionSet.ts
            // (existing entity blocks kept, this entity added or replaced)
            // written when its full content changed. VSIX-only project-item
            // bookkeeping (AddTargetFileToProjectAsync, DependentUpon) has
            // no CLI side — SDK-style projects glob the files.
            await RefreshOptionSetAsync(input, metadata, outputDirectory, result);

            return result;
        }

        /// <summary>
        /// Resolves the entity metadata. Looks the entity up in the
        /// XrmHelper cache first (by schema or logical name); when missing
        /// and a service is available, reads the org's entity metadata once
        /// into the cache (attributes included — the same call the entity
        /// prompt makes) and looks again. The wizard's FormItem fills the
        /// cache with EntityFilters.Entity and GetTsFormCodeAsync then
        /// upgrades it with a per-entity EntityFilters.All fetch — mirror
        /// that upgrade when a service exists so the form code sees the
        /// full attribute set.
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
                    result.AddError("template 'TsForm': requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
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
        /// semantics — an ordinal text compare on the BOM-stripped read
        /// (unlike the JsForm twins there is no CLI generator for these
        /// files, so the whitespace-tolerant IsTheSame has no precedent
        /// here). Byte-faithful to Visual Studio: the stubs carry the
        /// payload file's own encoding — no BOM for the two TypeScript
        /// placeholders.
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
                if (string.Equals(oldCode, content, StringComparison.Ordinal))
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
