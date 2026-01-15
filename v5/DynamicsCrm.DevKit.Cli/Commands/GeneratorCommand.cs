using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit generator' - generates form/webapi code.
    /// Syntax: devkit generator --conn "..." --json "..." --profile "..."
    /// </summary>
    public class GeneratorCommand : DevKitCommand<GeneratorCommandArgs>
    {
        protected override async Task RunTaskAsync(GeneratorCommandArgs settings)
        {
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.generators == null)
            {
                SpectreLog.ActionError("'generators' section not found in json file");
                return;
            }

            var profile = json.generators.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                // Create CommandLineArgs for TaskGenerator compatibility
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "generators",
                    ServiceClient = settings.ServiceClient
                };
                var generator = new TaskGenerator(args, profile);
                await generator.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'generators' section");
            }
        }
    }
}
