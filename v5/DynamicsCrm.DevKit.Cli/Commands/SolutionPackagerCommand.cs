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
    /// Command for 'devkit solution' - manages solution packager operations (Extract/Pack).
    /// Syntax: devkit solution --conn "..." --json "..." --profile "..."
    /// Optional: --version to specify CrmSdk CoreTools version (auto-detected if not provided)
    /// </summary>
    public class SolutionPackagerCommand : DevKitCommand<SolutionPackagerCommandArgs>
    {
        protected override List<string[]> BuildArgRows(SolutionPackagerCommandArgs settings)
        {
            var rows = new List<string[]>();
            var indent = "           ";
            if (!string.IsNullOrEmpty(settings.Version))
            {
                rows.Add(new[] { $"{indent}[white]--version[/]", $"[cyan]{Markup.Escape(settings.Version)}[/]" });
            }
            else
            {
                rows.Add(new[] { $"{indent}[white]--version[/]", "[grey](auto-detect)[/]" });
            }
            return rows;
        }

        protected override async Task RunTaskAsync(SolutionPackagerCommandArgs settings)
        {
            SpectreLog.ActionWithLevel0("[DEPRECATED]", "This command is deprecated and will be removed in future versions.");
            SpectreLog.ActionWithLevel0("[WARNING]", "Please use 'devkit solution' instead.");
            SpectreLog.WriteLine();

            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.solutionpackagers == null)
            {
                SpectreLog.ActionWithLevel0(CliAction.ERROR, "'solutionpackagers' section not found in json file");
                return;
            }

            var profile = json.solutionpackagers.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                // Create CommandLineArgs for TaskSolutionPackager compatibility
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "solutionpackagers",
                    ServiceClient = settings.ServiceClient,
                    Version = settings.Version,
                    AuthType = settings.AuthType
                };
                var solutionPackager = new TaskSolutionPackager(args, profile);
                await solutionPackager.RunAsync();
            }
            else
            {
                SpectreLog.ActionWithLevel0(CliAction.ERROR, $"Profile '{settings.Profile}' not found in 'solutionpackagers' section");
            }
        }
    }
}
