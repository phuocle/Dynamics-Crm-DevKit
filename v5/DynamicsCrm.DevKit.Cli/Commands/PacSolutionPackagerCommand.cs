using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    public class PacSolutionPackagerCommand : DevKitCommand<PacSolutionPackagerCommandArgs>
    {
        protected override List<string[]> BuildArgRows(PacSolutionPackagerCommandArgs settings)
        {
            return new List<string[]>();
        }

        protected override async Task RunTaskAsync(PacSolutionPackagerCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.solutionpackagers == null)
            {
                SpectreLog.ActionError("'solutionpackagers' section not found in json file");
                return;
            }

            var profile = json.solutionpackagers.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "solutionpackagers",
                    ServiceClient = settings.ServiceClient,
                    AuthType = settings.AuthType
                };
                var task = new TaskPacSolutionPackager(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'solutionpackagers' section");
            }
        }
    }
}
