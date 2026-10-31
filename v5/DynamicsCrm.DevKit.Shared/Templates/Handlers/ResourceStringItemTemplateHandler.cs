using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the ResourceString item template (VSIX 11.
    /// ResourceStringItemTemplate): copies the token-free ResourceString.resx
    /// payload — a bare .resx (schema, four resheaders, no data rows) — to
    /// {Class}{Order}.{LanguageCode}.resx. Cross-platform port of the VSIX
    /// wizard DynamicsCrm.DevKit.Wizard.ItemTemplates.ResourceString.
    ///
    /// The dialog is FormPlugin with the message, stage and execution combos
    /// hidden and the template panel hidden (no custom T4 — the handler
    /// needs no ITextTransformer). Two relabels: the class textbox becomes
    /// "Resource" (spelling fixed 2026-10-31 — the wizard used to read
    /// "Resouce") and the entity combo becomes "Language", filled on
    /// connect with the org's provisioned languages
    /// (RetrieveProvisionedLanguagesRequest; the
    /// XrmEntity LogicalName is the LCID string). OK stays disabled until
    /// that list loads — the wizard cannot finish offline. The CLI prompt
    /// chain resolves --language against the same list; the handler itself
    /// performs no org calls and trusts the value like the DataProvider
    /// handler trusts --datasource.
    ///
    /// The payload carries no $token$, so the wizard's ReplaceParameters
    /// copies it through unchanged. Only the target file name is
    /// composed: $Class$$PluginOrder$.$LanguageCode$.resx, with $PluginOrder$
    /// empty when the order is 1 (ResourceString.RunStarted — the VSIX
    /// computes the order from the container's {Class}.cs / {Class}{N}.cs
    /// files, a DTE scan the CLI replaces with --order like every other item
    /// template). The wizard output drops the payload's BOM — the generated
    /// file starts directly with "<?xml" (like the Test/UiTest items).
    /// </summary>
    public sealed class ResourceStringItemTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ItemType.ResourceString.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the single file entry of
        /// CSharpResourceStringItemTemplate.vstemplate: the token-free
        /// ResourceString.resx (ReplaceParameters on — nothing to
        /// substitute), named $Class$$PluginOrder$.$LanguageCode$.resx.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.ResourceString.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.ResourceString.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ResourceString.resx", TargetFileName = "$Class$$PluginOrder$.$LanguageCode$.resx", ReplaceParameters = true });
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

            // The dialog's two inputs: the relabeled class textbox (the
            // resource base name) and the language combo (the LCID of a
            // provisioned language).
            var className = !string.IsNullOrWhiteSpace(input.Class) ? input.Class.Trim() : input.Name?.Trim();
            if (string.IsNullOrWhiteSpace(className))
            {
                result.AddError("--name: required for template 'ResourceString' — the resource class name.");
                return result;
            }
            input.Class = className;
            var language = input.Language?.Trim();
            if (string.IsNullOrWhiteSpace(language))
            {
                result.AddError("--language: required for template 'ResourceString' — the LCID of a language provisioned in the instance (e.g. 1033).");
                return result;
            }
            if (!language.All(char.IsDigit))
            {
                result.AddError($"--language '{language}': invalid. Use the LCID of a language provisioned in the instance (e.g. 1033).");
                return result;
            }
            if (input.Order < 1)
            {
                result.AddError($"--order '{input.Order}': invalid. Use a positive integer.");
                return result;
            }

            // The engine resolves the project file for EVERY item template
            // (--project name, else the nearest at/above the output
            // directory) and errors without one.
            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            if (string.IsNullOrWhiteSpace(request.ProjectFile))
            {
                result.AddError("--project: required for item template 'ResourceString' — run inside a project folder or pass --project <name>.");
                return result;
            }
            Directory.CreateDirectory(outputDirectory);

            // The wizard's replacements: $Class$ (the typed resource name),
            // $PluginOrder$ (empty when the order is 1) and $LanguageCode$
            // (the combo's LCID). The payload itself carries no token — the
            // file name is the only composed part, built through the same
            // replacement the manifest's TargetFileName declares.
            request.Tokens["$Class$"] = className;
            request.Tokens["$PluginOrder$"] = input.Order == 1 ? string.Empty : $"{input.Order}";
            request.Tokens["$LanguageCode$"] = language;
            var manifest = CreateManifest();
            var targetFileName = TokenEngine.ApplyReplacements(manifest.Files[0].TargetFileName, request.Tokens);

            // The resource file is a user file: created when missing, never
            // overwritten unless force (the wizard prompts in Visual
            // Studio; the CLI skips). Byte-faithful to the WIZARD OUTPUT,
            // not the payload marker: the Resource.1033.resx the current
            // wizard produced starts directly with "<?xml" — no BOM (like
            // the Test/UiTest items, unlike the payload-carrying LateBound
            // stubs).
            var payload = await TemplatePayload.ReadContentAsync(manifest.Files[0].ResourceName);
            if (payload == null)
            {
                result.AddError($"resource not found: {manifest.Files[0].ResourceName}");
                return result;
            }
            var fullPath = Path.Combine(outputDirectory, targetFileName);
            var exists = File.Exists(fullPath);
            if (exists && !input.Force)
            {
                result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, "Skipped"));
                return result;
            }
            var content = TokenEngine.ApplyReplacements(payload.Content, request.Tokens);
            await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, content);
            result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, exists ? "Updated" : "Created"));
            return result;
        }

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }
    }
}
