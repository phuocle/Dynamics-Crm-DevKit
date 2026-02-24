using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit uploadreport' - uploads reports to a solution.
    /// Syntax: devkit uploadreport --conn "..." --json "..." --profile "..."
    /// </summary>
    public class UploadReportCommand : DevKitCommand<UploadReportCommandArgs>
    {
        protected override bool SupportsDryRun => true;

        protected override async Task RunTaskAsync(UploadReportCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.uploadreports == null)
            {
                SpectreLog.ActionError("'uploadreports' section not found in json file");
                return;
            }

            var profile = json.uploadreports.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "uploadreports",
                    ServiceClient = settings.ServiceClient
                };
                var task = new TaskUploadReport(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'uploadreports' section");
            }
        }
    }
}
