using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the TsDialog item template (VSIX 16.
    /// TsDialogItemTemplate): generates the user TypeScript file
    /// {Dialog}.ts — the CodeGenService.GetDefaultTsDialogFileAsync
    /// skeleton (OnLoad/OkClick/CancelClick importing the generated dialog
    /// namespace, the wizard's $TypeScript$) — plus the generated twin
    /// {Dialog}.dialog.ts from Logic.TsDialog.GetTsDialogCodeAsync, the
    /// typed DevKitDialog.{Dialog} namespace (the IDialog control
    /// interface and the DialogFormBase class) off the picked dialog's
    /// FormXml. Both names come from the SystemForm.UniqueName of the
    /// dialog the wizard's FormItem combo lists (the org's active
    /// unmanaged dialogs) and the user picks — there is no free-typed
    /// name in this template, and unlike the entity templates the
    /// resolution has no XrmHelper cache to fall back on, so a
    /// connection is the only way in. Cross-platform port of the VSIX
    /// wizard DynamicsCrm.DevKit.Wizard.ItemTemplates.TsDialog.
    /// </summary>
    public class TsDialogItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.TsDialog.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpTsDialogItemTemplate.vstemplate: both payload files carry
        /// ReplaceParameters, named by $DialogName$ (the picked dialog's
        /// UniqueName). The .ts is the user file — created when missing,
        /// never overwritten unless force; the .dialog.ts is the generated
        /// twin — rewritten whenever its real content changed (the
        /// wizard's RunFinished WriteTargetFileIfChangedAsync). Unlike
        /// TsWebApi there is no third, code-written output: the wizard's
        /// RunFinished writes exactly these two files and the VSIX-only
        /// DependentUpon (the twin nested under the user file).
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.TsDialog.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.TsDialog.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TypeScript.ts", TargetFileName = "$DialogName$.ts", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TypeScript.dialog.ts", TargetFileName = "$DialogName$.dialog.ts", ReplaceParameters = true, IsGenerated = true });
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
            var dialogName = !string.IsNullOrWhiteSpace(input.Entity) ? input.Entity : input.Name;

            var dialog = await ResolveDialogAsync(input, dialogName, result);
            if (dialog == null) return result;

            // The wizard's DialogClassName — both file names ($DialogName$)
            // and the generated DevKitDialog namespace members come from the
            // SystemForm.UniqueName, not the display Name the user picked.
            var dialogClassName = dialog.UniqueName;
            request.Tokens["$DialogName$"] = dialogClassName;

            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            Directory.CreateDirectory(outputDirectory);

            // The generated contents: the wizard computes both in RunStarted
            // ($TypeScriptDialog$ first, then $TypeScript$) before any file
            // is written, so a codegen failure never leaves a half scaffold.
            // GetTsDialogCodeAsync walks the dialog's FormXml locally (the
            // service rides along unused, exactly like the wizard's call);
            // GetDefaultTsDialogFileAsync builds the user skeleton off the
            // UniqueName alone.
            request.Tokens["$TypeScriptDialog$"] = await TsDialog.GetTsDialogCodeAsync(input.ServiceClient, dialog);
            request.Tokens["$TypeScript$"] = await new CodeGenService(input.ServiceClient).GetDefaultTsDialogFileAsync(dialog, dialogClassName);

            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.TsDialog.ToString());

            // The user file ({Dialog}.ts): created when missing, never
            // overwritten unless --force (VSIX ShouldAddProjectItem +
            // RunFinished's !IsDialogTsExisting guard).
            var stubAction = await WritePayloadFileAsync(prefix + "TypeScript.ts", $"{dialogClassName}.ts", request.Tokens, outputDirectory, input.Force, isUserFile: true, result: result);
            result.Files.Add(new ScaffoldFileResult($"{dialogClassName}.ts", Path.Combine(outputDirectory, $"{dialogClassName}.ts"), stubAction));

            // The generated twin ({Dialog}.dialog.ts): rewritten whenever
            // its real content changed — the wizard's RunFinished
            // WriteTargetFileIfChangedAsync, an ordinal compare on the
            // BOM-stripped read. Unlike the .webapi.ts twin there is no CLI
            // generator precedent for .dialog.ts files, so the wizard's own
            // compare is the source of truth here (a whitespace-only edit
            // is a change and gets rewritten).
            var dialogAction = await WritePayloadFileAsync(prefix + "TypeScript.dialog.ts", $"{dialogClassName}.dialog.ts", request.Tokens, outputDirectory, input.Force, isUserFile: false, result: result);
            result.Files.Add(new ScaffoldFileResult($"{dialogClassName}.dialog.ts", Path.Combine(outputDirectory, $"{dialogClassName}.dialog.ts"), dialogAction));

            return result;
        }

        /// <summary>
        /// Resolves the picked dialog: the wizard's FormItem fills its
        /// "Dialog" combo with MetadataService.GetEntityDialogFormsAsync
        /// (the org's active unmanaged dialogs, ordered by display name)
        /// and the pick is by display Name — the typed --name is that
        /// pick, matched case-insensitively (a duplicated Name resolves to
        /// the first, the list's own order).
        /// </summary>
        protected virtual async Task<SystemForm> ResolveDialogAsync(ItemTemplateInput input, string dialogName, ScaffoldResult result)
        {
            var dialogs = await GetDialogFormsAsync(input, result);
            if (dialogs == null) return null;
            var dialog = dialogs.FirstOrDefault(x => string.Equals(x.Name, dialogName, StringComparison.OrdinalIgnoreCase));
            if (dialog == null)
            {
                result.AddError($"--name '{dialogName}': dialog not found in the current instance.");
            }
            return dialog;
        }

        /// <summary>
        /// The org read behind the resolution — the wizard always runs
        /// connected and there is no dialog cache in XrmHelper, so without
        /// a service the scaffold refuses up front. Split out (with the
        /// refusal) so tests can seed the dialog list without a
        /// ServiceClient (the input model's service is the concrete
        /// ServiceClient — the same seam the VSIX test suites use for
        /// IOrganizationService).
        /// </summary>
        protected virtual Task<List<SystemForm>> GetDialogFormsAsync(ItemTemplateInput input, ScaffoldResult result)
        {
            if (input.ServiceClient == null)
            {
                result.AddError("template 'TsDialog': requires a Dataverse connection to read the org's dialogs. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                return Task.FromResult<List<SystemForm>>(null);
            }
            return new MetadataService(input.ServiceClient).GetEntityDialogFormsAsync();
        }

        /// <summary>
        /// Renders one payload stub with the tokens and writes it. Returns
        /// the action taken: Created, Updated, Skipped (user file exists,
        /// no force) or Unchanged (generated file, same content). The
        /// generated compare is the wizard's WriteTargetFileIfChangedAsync
        /// ordinal compare on the BOM-stripped read. Byte-faithful to
        /// Visual Studio: the files carry the payload file's own encoding —
        /// no BOM for either TypeScript placeholder.
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
