using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit downloadreport' - downloads reports from a solution.
    /// Syntax: devkit downloadreport --conn "..." --json "..." --profile "..."
    /// </summary>
    public class DownloadReportCommand : DevKitCommand<DownloadReportCommandArgs>
    {
        protected override async Task RunTaskAsync(DownloadReportCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.downloadreports == null)
            {
                SpectreLog.ActionError("'downloadreports' section not found in json file");
                return;
            }

            var profile = json.downloadreports.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "downloadreports",
                    ServiceClient = settings.ServiceClient
                };
                var task = new TaskDownloadReport(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'downloadreports' section");
            }
        }
    }
}
