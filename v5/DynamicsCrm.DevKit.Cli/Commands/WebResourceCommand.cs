using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit webresource' - deploys web resources (--type
    /// upload, the default) or downloads them from a solution (--type
    /// download, moved from 'devkit downloadwebresource').
    /// Syntax: devkit webresource --conn "..." --json "..." --profile "..."
    /// Fast deploy: devkit webresource --file "..." [--webresource "..."]
    /// </summary>
    public class WebResourceCommand : DevKitCommand<WebResourceCommandArgs>
    {
        protected override bool IsProfileRequired(WebResourceCommandArgs settings)
        {
            return NormalizeType(settings?.Type) == "download" || string.IsNullOrEmpty(settings.File);
        }

        protected override bool IsJsonRequired(WebResourceCommandArgs settings)
        {
            return NormalizeType(settings?.Type) == "download" || string.IsNullOrEmpty(settings.File);
        }

        /// <summary>
        /// Type and option-set validation runs BEFORE the connection attempt
        /// (base.IsValidAsync) so a bad --type fails fast with exit 1.
        /// </summary>
        protected override async Task<bool> IsValidAsync(WebResourceCommandArgs settings)
        {
            ValidateTypeAndOptions(settings);
            return await base.IsValidAsync(settings);
        }

        internal void ValidateTypeAndOptions(WebResourceCommandArgs settings)
        {
            var type = NormalizeType(settings.Type);
            if (type == "download")
            {
                if (!string.IsNullOrEmpty(settings.File))
                    throw new DevKitValidationException("--file: not valid for --type download (valid: --json, --profile).");
                if (!string.IsNullOrEmpty(settings.WebResource))
                    throw new DevKitValidationException("--webresource: not valid for --type download (valid: --json, --profile).");
                if (!string.IsNullOrEmpty(settings.WebResourceId))
                    throw new DevKitValidationException("--webresourceid: not valid for --type download (valid: --json, --profile).");
            }
            else
            {
                if (!string.IsNullOrEmpty(settings.WebResourceId))
                {
                    if (!Guid.TryParse(settings.WebResourceId.Trim(), out _))
                        throw new DevKitValidationException($"--webresourceid '{settings.WebResourceId}': not a valid GUID.");
                    if (string.IsNullOrEmpty(settings.File))
                        throw new DevKitValidationException("--webresourceid: requires --file (deploy that single file straight to the web resource id).");
                    if (!string.IsNullOrEmpty(settings.WebResource))
                        throw new DevKitValidationException("use only one: pass either --webresource or --webresourceid, not both.");
                }
            }
        }

        protected override async Task RunTaskAsync(WebResourceCommandArgs settings)
        {
            await RunWebResourceAsync(settings);
        }

        /// <summary>
        /// Shared dispatch — also called by the deprecated
        /// 'devkit downloadwebresource' redirect shim.
        /// </summary>
        internal async Task RunWebResourceAsync(WebResourceCommandArgs settings)
        {
            if (NormalizeType(settings.Type) == "download")
                await RunDownloadAsync(settings);
            else
                await RunUploadAsync(settings);
        }

        protected override List<string[]> BuildArgRows(WebResourceCommandArgs settings)
        {
            var rows = new List<string[]>();
            if (!string.IsNullOrEmpty(settings?.Type)) rows.Add(new[] { "           --type", settings.Type.Trim().ToLowerInvariant() });
            if (!string.IsNullOrEmpty(settings?.File))
            {
                rows.Add(new[] { "           --file", settings.File });
            }
            if (!string.IsNullOrEmpty(settings?.WebResource))
            {
                rows.Add(new[] { "           --webresource", settings.WebResource });
            }
            if (!string.IsNullOrEmpty(settings?.WebResourceId))
            {
                rows.Add(new[] { "           --webresourceid", settings.WebResourceId });
            }
            return rows;
        }

        internal static string NormalizeType(string type)
        {
            var value = (type ?? string.Empty).Trim().ToLowerInvariant();
            if (value != "download") return "upload"; // default — bare 'devkit webresource' keeps its deploy behavior
            return value;
        }

        private async Task RunUploadAsync(WebResourceCommandArgs settings)
        {
            JsonWebResource profile = null;
            if (System.IO.File.Exists(settings.JsonFile))
            {
                var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));
                if (json?.webresources != null)
                {
                    profile = json.webresources.FirstOrDefault(x => x.profile == settings.Profile);
                }
            }

            if (profile == null)
            {
                if (string.IsNullOrEmpty(settings.File))
                {
                    SpectreLog.ActionError($"Profile '{settings.Profile}' not found, and --file is not fully provided for update override.");
                    return;
                }

                // --webresourceid skips the name resolution entirely — no
                // Config.json mapping, no --webresource requirement.
                if (settings.WebResourceId is null && string.IsNullOrEmpty(settings.WebResource))
                {
                    var configDir = TaskWebResource.GetConfigDirectory(null, System.IO.Directory.GetCurrentDirectory(), settings.File);
                    var mapping = TaskWebResource.GetWebResourceMapping(settings.File, configDir, settings.File);
                    if (mapping != null && !string.IsNullOrEmpty(mapping.WebResource))
                    {
                        settings.WebResource = mapping.WebResource;
                    }
                }

                if (settings.WebResourceId is null && string.IsNullOrEmpty(settings.WebResource))
                {
                    SpectreLog.ActionError("--webresource: required when deploying --file without json/profile, or ensure file mapping exists in DynamicsCrm.DevKit.Config.json.");
                    return;
                }
                profile = new JsonWebResource
                {
                    solution = string.Empty,
                    includefiles = new System.Collections.Generic.List<string>(),
                    dependencies = new System.Collections.Generic.List<Dependency>()
                }; // dummy profile
            }

            var args = new CommandLineArgs
            {
                Connection = settings.Connection,
                Json = settings.Json,
                Profile = settings.Profile,
                Type = "webresources",
                ServiceClient = settings.ServiceClient,
                File = settings.File,
                WebResource = settings.WebResource,
                WebResourceId = Guid.TryParse(settings.WebResourceId?.Trim(), out var webResourceId) ? webResourceId : null
            };
            var task = new TaskWebResource(args, profile);
            await task.RunAsync();
        }

        private async Task RunDownloadAsync(WebResourceCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.downloadwebresources == null)
            {
                SpectreLog.ActionError("'downloadwebresources' section not found in json file");
                return;
            }

            var profile = json.downloadwebresources.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "downloadwebresources",
                    ServiceClient = settings.ServiceClient
                };
                var task = new TaskDownloadWebResource(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'downloadwebresources' section");
            }
        }
    }
}
