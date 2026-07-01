using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit downloadwebresource' - downloads web resources from a solution.
    /// Syntax: devkit downloadwebresource --conn "..." --json "..." --profile "..."
    /// </summary>
    public class DownloadWebResourceCommand : DevKitCommand<DownloadWebResourceCommandArgs>
    {
        protected override async Task RunTaskAsync(DownloadWebResourceCommandArgs settings)
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
