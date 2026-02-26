using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
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
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.webresources == null)
            {
                SpectreLog.ActionError("'webresources' section not found in json file");
                return;
            }

            var profile = json.webresources.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "webresources",
                    ServiceClient = settings.ServiceClient
                };
                var task = new TaskWebResource(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'webresources' section");
            }
        }
    }
}
