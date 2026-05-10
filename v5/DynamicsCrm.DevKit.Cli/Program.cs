using DynamicsCrm.DevKit.Cli.Commands;
using Spectre.Console;
using Spectre.Console.Cli;
using System;
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

                // Detect plain mode: --plain flag > NO_COLOR env var > default (rich)
                if (args != null && args.Any(a => a.Equals("--plain", StringComparison.OrdinalIgnoreCase)))
                {
                    SpectreLog.IsPlain = true;
                    // Remove --plain from args so Spectre.Console.Cli doesn't reject it
                    args = args.Where(a => !a.Equals("--plain", StringComparison.OrdinalIgnoreCase)).ToArray();
                }
                else if (!string.IsNullOrEmpty(Environment.GetEnvironmentVariable("NO_COLOR")))
                {
                    SpectreLog.IsPlain = true;
                }


                // Convert legacy /arg:value format to --arg value if needed
                var originalArgs = args;
                args = LegacyArgConverter.Convert(args);

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

                    config.AddCommand<McpCommand>("mcp")
                          .WithDescription("Start MCP server for AI agent integration")
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
    }
}
