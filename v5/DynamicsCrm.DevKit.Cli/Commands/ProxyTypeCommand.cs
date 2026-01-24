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
    /// Command for 'devkit proxytype' - generates proxy types using CrmSvcUtil.
    /// Syntax: devkit proxytype --conn "..." --json "..." --profile "..."
    /// Optional: --version to specify CrmSdk CoreTools version (auto-detected if not provided)
    /// </summary>
    public class ProxyTypeCommand : DevKitCommand<ProxyTypeCommandArgs>
    {
        protected override List<string[]> BuildArgRows(ProxyTypeCommandArgs settings)
        {
            var rows = new List<string[]>();
            var indent = "           ";
            if (!string.IsNullOrEmpty(settings.Version))
            {
                rows.Add(new[] { $"{indent}[white] --version[/]", $"[cyan]{Markup.Escape(settings.Version)}[/]" });
            }
            else
            {
                rows.Add(new[] { $"{indent}[white] --version[/]", "[grey](auto-detect)[/]" });
            }
            return rows;
        }

        protected override async Task RunTaskAsync(ProxyTypeCommandArgs settings)
        {
            SpectreLog.ActionError("DEPRECATED: This command is deprecated and will be removed in future versions.");
            SpectreLog.WriteLine("[yellow]Please use 'devkit modelbuilder' instead.[/]");
            SpectreLog.WriteLine();

            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.proxytypes == null)
            {
                SpectreLog.ActionError("'proxytypes' section not found in json file");
                return;
            }

            var profile = json.proxytypes.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                // Create CommandLineArgs for TaskProxyType compatibility
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "proxytypes",
                    ServiceClient = settings.ServiceClient,
                    Version = settings.Version,
                    AuthType = settings.AuthType,
                    Url = settings.Url,
                    ClientId = settings.ClientId,
                    ClientSecret = settings.ClientSecret,
                    Username = settings.Username,
                    Password = settings.Password,
                    Domain = settings.Domain,
                    PacProfile = settings.PacProfile
                };
                var proxyType = new TaskProxyType(args, profile);
                await proxyType.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'proxytypes' section");
            }
        }
    }
}
