using DynamicsCrm.DevKit.Cli.Commands;
using Spectre.Console;
using Spectre.Console.Cli;
using System;
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
                    catch { }
                    SpectreLog.WaitForKeyPress();
                    return 0;
                }

                var app = new CommandApp();
                app.Configure(config =>
                {
                    config.SetApplicationName("devkit");
                    var version = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version;
                    config.SetApplicationVersion($"{version} Build: {DynamicsCrm.DevKit.Shared.Const.Build}");

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
                          .WithDescription("[red]DEPRECATED[/] Use: devkit solution");

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
                          .WithDescription("Start MCP server for AI agent integration");
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