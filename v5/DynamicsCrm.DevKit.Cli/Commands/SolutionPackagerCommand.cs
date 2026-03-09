using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit legacy-solution' - DEPRECATED, auto-redirects to TaskPacSolutionPackager.
    /// Reads 'solutionpackagers' section from JSON config and runs TaskPacSolutionPackager instead of the removed TaskSolutionPackager.
    /// </summary>
    public class SolutionPackagerCommand : DevKitCommand<PacSolutionPackagerCommandArgs>
    {
        protected override List<string[]> BuildArgRows(PacSolutionPackagerCommandArgs settings)
        {
            return new List<string[]>();
        }

        protected override async Task RunTaskAsync(PacSolutionPackagerCommandArgs settings)
        {
            SpectreLog.ActionWithLevel0("[DEPRECATED]", "'devkit legacy-solution' is deprecated and now auto-redirects to 'devkit solution'.");
            SpectreLog.ActionWithLevel0("[INFO]", "Please update your scripts/CI to use 'devkit solution' directly.");
            SpectreLog.ActionWithLevel0("[INFO]", "The '--version' parameter is no longer needed. PAC CLI is used instead of SolutionPackager.exe.");
            SpectreLog.WriteLine();

            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.solutionpackagers == null)
            {
                SpectreLog.ActionWithLevel0(CliAction.ERROR, "'solutionpackagers' section not found in json file");
                return;
            }

            var profile = json.solutionpackagers.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile == null)
            {
                SpectreLog.ActionWithLevel0(CliAction.ERROR, $"Profile '{settings.Profile}' not found in 'solutionpackagers' section");
                return;
            }

            var args = new CommandLineArgs
            {
                Connection = settings.Connection,
                Json = settings.Json,
                Profile = settings.Profile,
                Type = "solutionpackagers",
                ServiceClient = settings.ServiceClient,
                AuthType = settings.AuthType,
                Url = settings.Url,
                ClientId = settings.ClientId,
                ClientSecret = settings.ClientSecret,
                Username = settings.Username,
                Password = settings.Password,
                Domain = settings.Domain,
                PacProfile = settings.PacProfile
            };

            SpectreLog.ActionWithLevel0("[REDIRECT]", "Running PAC SolutionPackager with solutionpackagers profile...");
            SpectreLog.WriteLine();

            var task = new TaskPacSolutionPackager(args, profile);
            await task.RunAsync();
        }
    }
}
