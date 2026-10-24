using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit new' - scaffolds DevKit project/item templates
    /// cross-platform through the shared ScaffoldingEngine. Scaffolding a
    /// new project in an empty folder needs neither a profile nor a
    /// DynamicsCrm.DevKit.Cli.json, and most templates generate offline,
    /// so validation requires no Dataverse connection.
    /// </summary>
    public class NewCommand : DevKitCommand<NewCommandArgs>
    {
        protected override bool IsProfileRequired(NewCommandArgs settings)
        {
            return false;
        }

        protected override bool IsJsonRequired(NewCommandArgs settings)
        {
            return false;
        }

        protected override Task<bool> IsValidAsync(NewCommandArgs settings)
        {
            var argRows = new List<string[]>
            {
                new[] { "Arguments: --kind", settings.Kind },
                new[] { "           --type", settings.Type },
                new[] { "           --name", settings.Name },
                new[] { "           --out", settings.Out },
                new[] { "           --offline", settings.Offline ? "true" : "false" },
                new[] { "           --force", settings.Force ? "true" : "false" }
            };
            SpectreLog.WriteTable(argRows);
            return Task.FromResult(true);
        }

        protected override async Task RunTaskAsync(NewCommandArgs settings)
        {
            await TaskNew.RunAsync(settings);
        }
    }
}
