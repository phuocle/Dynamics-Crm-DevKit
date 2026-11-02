using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit new-project' — scaffolds one DevKit PROJECT
    /// template and registers it in the required --solution. Project
    /// templates generate fully offline, so validation requires no
    /// Dataverse connection.
    /// </summary>
    public class NewProjectCommand : DevKitCommand<NewProjectCommandArgs>
    {
        protected override bool IsProfileRequired(NewProjectCommandArgs settings)
        {
            return false;
        }

        protected override bool IsJsonRequired(NewProjectCommandArgs settings)
        {
            return false;
        }

        protected override Task<bool> IsValidAsync(NewProjectCommandArgs settings)
        {
            // 'devkit new-project list' is a catalog print — no args table.
            if (!string.IsNullOrWhiteSpace(settings.List)) return Task.FromResult(true);
            var argRows = new List<string[]>
            {
                new[] { "Arguments: --type", settings.Type },
                new[] { "           --name", settings.Name },
                new[] { "           --solution", settings.Solution },
                new[] { "           --out", settings.Out }
            };
            SpectreLog.WriteTable(argRows);
            return Task.FromResult(true);
        }

        protected override async Task RunTaskAsync(NewProjectCommandArgs settings)
        {
            await TaskNewProject.RunAsync(settings);
        }
    }
}
