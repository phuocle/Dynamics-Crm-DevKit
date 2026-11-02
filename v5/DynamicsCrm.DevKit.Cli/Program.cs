using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared;
using Spectre.Console;
using Spectre.Console.Cli;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    public class Program
    {
        [STAThread]
        public static async Task<int> Main(string[] args)
        {
            try
            {

                // Ensure flushed output for AI agents and correct encoding
                Console.OutputEncoding = System.Text.Encoding.UTF8;
                // Force console width to 8000 to prevent wrapping
                AnsiConsole.Profile.Width = 8000;

                // Detect plain mode: --plain flag > DEVKIT_NO_COLOR in the project
                // .env (searched from the current directory upward to the drive
                // root) > default (rich). Environment variables are never read.
                if (args != null && args.Any(a => a.Equals("--plain", StringComparison.OrdinalIgnoreCase)))
                {
                    SpectreLog.IsPlain = true;
                    // Remove --plain from args so Spectre.Console.Cli doesn't reject it
                    args = args.Where(a => !a.Equals("--plain", StringComparison.OrdinalIgnoreCase)).ToArray();
                }
                else if (IsPlainFromProjectEnvironment())
                {
                    SpectreLog.IsPlain = true;
                }


                // Convert legacy /arg:value format to --arg value if needed
                var originalArgs = args;
                args = LegacyArgConverter.Convert(args);

                // 'devkit new' was removed with the new-project/new-item
                // split (aP: keeping a list-only 'new' serves no purpose —
                // listing lives in 'devkit new-project list' and
                // 'devkit new-item list'). Point old scripts the right way.
                if (args != null && args.Length > 0 && args[0].Equals("new", StringComparison.OrdinalIgnoreCase))
                {
                    SpectreLog.WriteException(new InvalidOperationException("'devkit new' was removed — the scaffold split into 'devkit new-project' and 'devkit new-item'. List templates with 'devkit new-project list' / 'devkit new-item list'."));
                    return 1;
                }

                // `devkit tool` runs in its own lifecycle: no update check, no
                // WaitForKeyPress, parse errors mapped to the branch's exit codes.
                if (args != null && args.Length > 0 && string.Equals(args[0], "tool", StringComparison.OrdinalIgnoreCase))
                {
                    return await Tool.ToolProgram.RunAsync(args);
                }

                var updateTask = UpdateChecker.CheckAsync();

                // Show help if no args or explicit help request
                if (args == null || args.Length == 0 ||
                    (args.Length == 1 && (args[0] == "--help" || args[0] == "-h")))
                {
                    SpectreLog.WriteHeader();
                    SpectreLog.WriteHelp();
                    try
                    {
                        var updateResult = await updateTask;
                        UpdateChecker.ShowNotification(updateResult);
                    }
                    catch { /* best-effort update notification — failure is non-critical */ }
                    SpectreLog.WaitForKeyPress();
                    return 0;
                }

                var app = new CommandApp();
                app.Configure(config =>
                {
                    config.SetApplicationName("devkit");
                    config.SetApplicationVersion($"{DynamicsCrm.DevKit.Shared.Const.Version} Build: {DynamicsCrm.DevKit.Shared.Const.Build}");

                    // Generator command
                    config.AddCommand<GeneratorCommand>("generator")
                          .WithDescription("Generate form/webapi code");

                    // Server commands (plugin/workflow deployment)
                    config.AddCommand<ServerCommand>("server")
                          .WithDescription("Deploy plugins, workflows, dataproviders");

                    config.AddCommand<PluginCommand>("plugin")
                          .WithDescription("[red]DEPRECATED[/] Use: devkit server");

                    config.AddCommand<WorkflowCommand>("workflow")
                          .WithDescription("[red]DEPRECATED[/] Use: devkit server");

                    config.AddCommand<DataProviderCommand>("dataprovider")
                          .WithDescription("[red]DEPRECATED[/] Use: devkit server");

                    config.AddCommand<WebResourceCommand>("webresource")
                          .WithDescription("Deploy web resources");

                    config.AddCommand<ProxyTypeCommand>("proxytype")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit modelbuilder");

                    config.AddCommand<ModelBuilderCommand>("modelbuilder")
                          .WithDescription("Generate early-bound entity classes using PAC ModelBuilder");

                    config.AddCommand<SolutionPackagerCommand>("legacy-solution")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit solution");

                    config.AddCommand<PacSolutionPackagerCommand>("solution")
                          .WithDescription("Extract or pack solutions using PAC CLI");

                    config.AddCommand<DownloadReportCommand>("downloadreport")
                          .WithDescription("Download reports from a solution");

                    config.AddCommand<UploadReportCommand>("uploadreport")
                          .WithDescription("Upload reports to a solution");

                    config.AddCommand<DownloadWebResourceCommand>("downloadwebresource")
                          .WithDescription("Download web resources from a solution");

                    config.AddCommand<DataSourceCommand>("datasource")
                          .WithDescription("Create data source entities");

                    // The 'new' family split (aP): one combined scaffold
                    // command mixed two argument sets and could not own its
                    // requirements — 'devkit new-project' and
                    // 'devkit new-item' scaffold with their own required
                    // arguments, and each lists its own catalog ('list').
                    config.AddCommand<NewProjectCommand>("new-project")
                          .WithDescription("Create a DevKit project template (Shared, Console, Server, ...) in the required solution")
                          .WithExample(new[] { "new-project", "list" })
                          .WithExample(new[] { "new-project", "--type", "Shared", "--name", "Contoso.Shared", "--solution", "MySolution.slnx" });

                    config.AddCommand<NewItemCommand>("new-item")
                          .WithDescription("Create a DevKit item template (LateBound, Plugin, ...) in the required project")
                          .WithExample(new[] { "new-item", "list" })
                          .WithExample(new[] { "new-item", "--type", "LateBound", "--entity", "Account", "--project", "Contoso.Shared" })
                          .WithExample(new[] { "new-item", "--type", "Plugin", "--entity", "Account", "--message", "Update", "--stage", "PreOperation", "--name", "PreAccountUpdate", "--project", "Contoso.Server" });

                    config.AddCommand<McpCommand>("mcp")
                          .WithDescription("Start MCP server for AI agent integration (auth: CLI args > project .env; see --setup-guide)")
                          .WithExample(new[] { "mcp", "--tools" })
                          .WithExample(new[] { "mcp", "--setup-guide" })
                          .WithExample(new[] { "mcp", "--auth", "ClientSecret", "--url", "https://org.crm.dynamics.com", "--clientid", "APP_ID", "--clientsecret", "SECRET" })
                          .WithExample(new[] { "mcp", "--auth", "FromPac", "--pacprofile", "default" })
                          .WithExample(new[] { "mcp", "--auth", "Interactive", "--url", "https://org.crm.dynamics.com" });
                });

                var result = await app.RunAsync(args);

                try
                {
                    var updateResult = await updateTask;
                    UpdateChecker.ShowNotification(updateResult);
                }
                catch
                {
                }

                SpectreLog.WaitForKeyPress();
                return result;
            }
            catch (Exception ex)
            {
                SpectreLog.WriteException(ex);
                SpectreLog.WaitForKeyPress();
                return 1;
            }
        }

        /// <summary>
        /// Plain output is also requested through DEVKIT_NO_COLOR in the project
        /// .env file, found by the same walk-up search as connection values:
        /// from the current directory upward to the drive root. Any non-empty
        /// value enables plain output; OS environment variables are never read.
        /// </summary>
        internal static bool IsPlainFromProjectEnvironment()
        {
            try
            {
                var envFile = ProjectEnvironment.FindFile(Directory.GetCurrentDirectory());
                if (envFile == null) return false;
                var value = ProjectEnvironment.GetValue(ProjectEnvironment.Read(envFile), ProjectEnvironment.NoColor);
                return !string.IsNullOrWhiteSpace(value);
            }
            catch
            {
                return false;
            }
        }
    }
}
