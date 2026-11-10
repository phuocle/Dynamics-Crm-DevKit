using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit new-project' — scaffolds one DevKit PROJECT
    /// template and registers it in the required --solution. Like the VSIX
    /// wizard and new-item, project creation connects to Dataverse first.
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

        protected override async Task<bool> IsValidAsync(NewProjectCommandArgs settings)
        {
            // 'devkit new-project list' is a catalog print — no args table.
            if (!string.IsNullOrWhiteSpace(settings.List)) return true;
            var argRows = new List<string[]>
            {
                new[] { "Arguments: --type", settings.Type },
                new[] { "           --name", settings.Name },
                new[] { "           --solution", settings.Solution },
                new[] { "           --out", settings.Out }
            };
            SpectreLog.WriteTable(argRows);
            return await base.IsValidAsync(settings);
        }

        protected override async Task RunTaskAsync(NewProjectCommandArgs settings)
        {
            await TaskNewProject.RunAsync(settings);
        }
    }
}
