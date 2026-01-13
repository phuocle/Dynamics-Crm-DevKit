using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit datasource' - creates data source entities.
    /// Syntax: devkit datasource --conn "..." --json "..." --profile "..."
    /// </summary>
    public class DataSourceCommand : DevKitCommand<DataSourceCommandArgs>
    {
        protected override async Task RunTaskAsync(DataSourceCommandArgs settings)
        {
            var json = SimpleJson.DeserializeObject<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.datasources == null)
            {
                SpectreLog.ActionError("'datasources' section not found in json file");
                return;
            }

            var profile = json.datasources.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "datasources",
                    ServiceClient = settings.ServiceClient
                };
                var task = new TaskDataSource(args, profile);
                await task.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'datasources' section");
            }
        }
    }
}
