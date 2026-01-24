using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit modelbuilder' - generates early-bound entity classes using PAC ModelBuilder.
    /// Syntax: devkit modelbuilder --conn "..." --json "..." --profile "..."
    /// Uses PAC CLI's 'pac modelbuilder build' under the hood
    /// </summary>
    public class ModelBuilderCommand : DevKitCommand<ModelBuilderCommandArgs>
    {
        protected override List<string[]> BuildArgRows(ModelBuilderCommandArgs settings)
        {
            var rows = new List<string[]>();
            // No additional parameters to display for now
            return rows;
        }

        protected override async Task RunTaskAsync(ModelBuilderCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.modelbuilders == null)
            {
                SpectreLog.ActionError("'modelbuilders' section not found in json file");
                return;
            }

            var profile = json.modelbuilders.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                // Create CommandLineArgs for TaskModelBuilder compatibility
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "modelbuilders",
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
                var modelBuilder = new TaskModelBuilder(args, profile);
                await modelBuilder.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'modelbuilders' section");
            }
        }
    }
}
