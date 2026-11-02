using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Item handler for the BatFile item template (VSIX
    /// 13.BatFileItemTemplate, the "DevKit files" item): copies ONE utility
    /// file picked from the wizard's static combo into the project — a
    /// deploy/generator bat (with the CLI connection arguments embedded),
    /// the webresource JavaScript library (devkit.js + devkit.d.ts) or the
    /// plugin managed-identity set (ps1 + config + readme).
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ItemTemplates.BatFile.
    ///
    /// The dialog is FormPlugin with the entity combo relabeled "File" and
    /// filled with SIX static choices (FormPlugin.Connection_Connected —
    /// no org call): devkit.js, download.reports.bat, upload.reports.bat,
    /// download.webresources.bat, deploy.datasource.bat and
    /// Plugin-Managed-Identity.ps1. The combo is the dialog's only input —
    /// the message, stage and execution combos, the class textbox and the
    /// template panel are all hidden, so there is no class, order or
    /// custom T4 prompt and the pick needs no metadata.
    ///
    /// The payload folder carries five one-token placeholders (batfile.bat
    /// = $batfile.bat$, devkit.js = $devkit.js$, devkit.d.ts =
    /// $devkit.d.ts$, Plugin-Managed-Identity-Config.json =
    /// $config.json$ and Plugin-Managed-Identity.md = $mdfile$); the
    /// wizard fills the matching tokens from the Shared embedded resources
    /// and ShouldAddProjectItem (BatFile.ShouldAdd) writes only the pick's
    /// subset — batfile.bat is renamed to the pick itself ($batfilename$,
    /// the managed-identity pick turning it into
    /// Plugin-Managed-Identity.ps1). The handler replicates exactly that:
    /// payload replacement over the pick's files, the four bats through
    /// TokenEngine.ApplyCliConnectionArgs (the wizard's
    /// Replacement.ApplyCliConnectionArgs twin) so the connection
    /// arguments ride in when the connection is explicit — a
    /// UseProjectEnvironment connection (the CLI's .env-only runs, the
    /// wizard's DynamicsCrm.DevKit.json connections) emits no arguments
    /// and the bat picks the project .env up at runtime, exactly the
    /// wizard's byte output. The wizard's self-replacements
    /// (content.Replace("$batfile.bat$", content)) are no-ops — the
    /// resources carry no such literals — and are not replicated.
    ///
    /// All five payload placeholders are UTF-8 without BOM; the wizard
    /// output is signature-free as well EXCEPT the readme md — Visual
    /// Studio saves the .md item output with a UTF-8 signature (fresh
    /// wizard ground truth 2026-10-31), which the handler writes through.
    /// </summary>
    public sealed class BatFileItemTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// The wizard's combo choices, in FormPlugin.Connection_Connected
        /// order (the XrmEntity LogicalName is the file name and the
        /// wizard's $batfilename$ value).
        /// </summary>
        public static readonly string[] UtilityFiles =
        {
            "devkit.js",
            "download.reports.bat",
            "upload.reports.bat",
            "download.webresources.bat",
            "deploy.datasource.bat",
            "Plugin-Managed-Identity.ps1",
        };

        public string TemplateId
        {
            get { return ItemType.BatFile.ToString(); }
        }

        /// <summary>
        /// The payload declarations, mirroring the five file entries of
        /// BatFileItemTemplate.vstemplate: the one-token placeholders with
        /// the vstemplate's names (batfile.bat carries the variable
        /// $batfilename$ target, the other four are fixed names — the
        /// handler writes only the pick's subset).
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ItemType.BatFile.ToString(),
                Kind = TemplateKind.Item,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.BatFile.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "batfile.bat", TargetFileName = "$batfilename$", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "devkit.js", TargetFileName = "devkit.js", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "devkit.d.ts", TargetFileName = "devkit.d.ts", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Plugin-Managed-Identity-Config.json", TargetFileName = "Plugin-Managed-Identity-Config.json", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Plugin-Managed-Identity.md", TargetFileName = "Plugin-Managed-Identity.md", ReplaceParameters = true });
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

            // The dialog's single input: the relabeled "File" combo — the
            // pick IS the output file name (the wizard's $batfilename$).
            var fileName = input.Name?.Trim();
            if (string.IsNullOrWhiteSpace(fileName))
            {
                result.AddError("--name: required for template 'BatFile' — the utility file to add.");
                return result;
            }
            var canonical = UtilityFiles.FirstOrDefault(x => string.Equals(x, fileName, StringComparison.OrdinalIgnoreCase));
            if (canonical == null)
            {
                result.AddError($"--name '{fileName}': unknown — the wizard offers one of: {string.Join(", ", UtilityFiles)}.");
                return result;
            }

            // The engine resolves the project file for EVERY item template
            // (--project name, else the nearest at/above the output
            // directory) and errors without one.
            var outputDirectory = ResolveOutputDirectory(input.OutputDirectory);
            if (string.IsNullOrWhiteSpace(request.ProjectFile))
            {
                result.AddError("--project: required for item template 'BatFile' — run inside a project folder or pass --project <name>.");
                return result;
            }
            Directory.CreateDirectory(outputDirectory);

            // The wizard's replacements: $batfilename$ names the batfile.bat
            // payload and each pick's content token carries the resource
            // content (the bats with the connection args embedded, like the
            // wizard dialog's connection).
            request.Tokens["$batfilename$"] = canonical;
            foreach (var file in FilesForPick(canonical))
            {
                var payload = await TemplatePayload.ReadContentAsync(file.ResourceName);
                if (payload == null)
                {
                    result.AddError($"resource not found: {file.ResourceName}");
                    return result;
                }
                var content = await TemplatePayload.ReadSharedResourceAsync(file.SharedResource);
                if (content == null)
                {
                    result.AddError($"resource not found: {file.SharedResource}");
                    return result;
                }
                if (file.IsBat)
                {
                    content = TokenEngine.ApplyCliConnectionArgs(content, input.CrmConnection);
                }
                request.Tokens[file.Token] = content;

                var targetFileName = TokenEngine.ApplyReplacements(file.TargetFileName, request.Tokens);
                var fullPath = Path.Combine(outputDirectory, targetFileName);
                var exists = File.Exists(fullPath);
                if (exists && !input.Force)
                {
                    // A user file: created when missing, never overwritten
                    // unless force, each decided on its own — a rerun
                    // completes the missing ones.
                    result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, "Skipped"));
                    continue;
                }
                var output = TokenEngine.ApplyReplacements(payload.Content, request.Tokens);
                if (payload.HasBom || file.WriteWithBom)
                {
                    await FileHelper.ForceWriteAllTextAsync(fullPath, output);
                }
                else
                {
                    await FileHelper.ForceWriteAllTextWithoutUTF8Async(fullPath, output);
                }
                result.Files.Add(new ScaffoldFileResult(targetFileName, fullPath, exists ? "Updated" : "Created"));
            }
            return result;
        }

        /// <summary>
        /// The pick's files, in vstemplate order with the wizard's
        /// ShouldAddProjectItem filter applied: a bat pick is the renamed
        /// batfile.bat payload alone, the devkit.js pick is the JavaScript
        /// library pair (batfile.bat excluded — IsDevkitJs) and the
        /// managed-identity pick is the renamed batfile.bat (the ps1) plus
        /// the config json and the readme md.
        /// </summary>
        private static IEnumerable<UtilityFile> FilesForPick(string pick)
        {
            var prefix = TemplatePayload.Prefix(TemplateKind.Item, ItemType.BatFile.ToString());
            switch (pick)
            {
                case "devkit.js":
                    yield return new UtilityFile { ResourceName = prefix + "devkit.js", TargetFileName = "devkit.js", Token = "$devkit.js$", SharedResource = "js.devkit.js" };
                    yield return new UtilityFile { ResourceName = prefix + "devkit.d.ts", TargetFileName = "devkit.d.ts", Token = "$devkit.d.ts$", SharedResource = "js.devkit.d.ts" };
                    break;
                case "Plugin-Managed-Identity.ps1":
                    yield return new UtilityFile { ResourceName = prefix + "batfile.bat", TargetFileName = "$batfilename$", Token = "$batfile.bat$", SharedResource = "ManagedIdentity.Plugin-Managed-Identity.ps1" };
                    yield return new UtilityFile { ResourceName = prefix + "Plugin-Managed-Identity-Config.json", TargetFileName = "Plugin-Managed-Identity-Config.json", Token = "$config.json$", SharedResource = "ManagedIdentity.Plugin-Managed-Identity-Config.json" };
                    yield return new UtilityFile { ResourceName = prefix + "Plugin-Managed-Identity.md", TargetFileName = "Plugin-Managed-Identity.md", Token = "$mdfile$", SharedResource = "ManagedIdentity.Plugin-Managed-Identity.md", WriteWithBom = true };
                    break;
                default:
                    // The four deploy/generator bats — the pick names the
                    // bat resource ("bat.download.reports.bat", ...).
                    yield return new UtilityFile { ResourceName = prefix + "batfile.bat", TargetFileName = "$batfilename$", Token = "$batfile.bat$", SharedResource = "bat." + pick, IsBat = true };
                    break;
            }
        }

        private sealed class UtilityFile
        {
            public string ResourceName { get; set; }
            public string TargetFileName { get; set; }

            /// <summary>
            /// The replacement token the payload placeholder carries and
            /// the wizard's RunStarted fills.
            /// </summary>
            public string Token { get; set; }

            /// <summary>
            /// The Shared embedded resource the content comes from (the
            /// wizard's ReadBatResourceAsync / ReadEmbeddedResourceAsync
            /// argument).
            /// </summary>
            public string SharedResource { get; set; }

            /// <summary>
            /// The wizard reads the four bats through
            /// Replacement.ReadBatResourceAsync — the CLI connection
            /// arguments embedded (everything else is read raw).
            /// </summary>
            public bool IsBat { get; set; }

            /// <summary>
            /// Wizard-output ground truth (2026-10-31, fresh VSIX):
            /// Visual Studio saves the .md item output with a UTF-8
            /// signature — the only one of the five payload targets that
            /// carries a BOM (the payload placeholders themselves have
            /// none; .json/.js/.d.ts/.ps1/.bat stay signature-free).
            /// </summary>
            public bool WriteWithBom { get; set; }
        }

        private static string ResolveOutputDirectory(string outputDirectory)
        {
            return string.IsNullOrWhiteSpace(outputDirectory)
                ? Directory.GetCurrentDirectory()
                : Path.GetFullPath(outputDirectory);
        }
    }
}
