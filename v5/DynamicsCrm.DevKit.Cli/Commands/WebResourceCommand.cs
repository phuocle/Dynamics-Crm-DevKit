using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit webresource' - deploys web resources.
    /// Syntax: devkit webresource --conn "..." --json "..." --profile "..."
    /// </summary>
    public class WebResourceCommand : DevKitCommand<WebResourceCommandArgs>
    {
        protected override async Task RunTaskAsync(WebResourceCommandArgs settings)
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
                
                if (string.IsNullOrEmpty(settings.WebResource))
                {
                    SpectreLog.ActionError("--webresource: required when deploying --file without json/profile.");
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
                WebResource = settings.WebResource
            };
            var task = new TaskWebResource(args, profile);
            await task.RunAsync();
        }

        protected override bool IsProfileRequired(WebResourceCommandArgs settings)
        {
            return string.IsNullOrEmpty(settings.File);
        }

        protected override bool IsJsonRequired(WebResourceCommandArgs settings)
        {
            return string.IsNullOrEmpty(settings.File);
        }

        protected override List<string[]> BuildArgRows(WebResourceCommandArgs settings)
        {
            var rows = new List<string[]>();
            if (!string.IsNullOrEmpty(settings.File))
            {
                rows.Add(new[] { "           --file", settings.File });
            }
            if (!string.IsNullOrEmpty(settings.WebResource))
            {
                rows.Add(new[] { "           --webresource", settings.WebResource });
            }
            return rows;
        }
    }
}
