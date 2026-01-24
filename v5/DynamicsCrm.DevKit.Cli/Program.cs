using DynamicsCrm.DevKit.Cli.Commands;
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


                // Convert legacy /arg:value format to --arg value if needed
                var originalArgs = args;
                args = LegacyArgConverter.Convert(args);

                // Show help if no args
                if (args == null || args.Length == 0)
                {
                    SpectreLog.WriteHeader();
                    SpectreLog.WriteHelp();
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
                          .WithDescription("Deploy plugins");

                    config.AddCommand<WorkflowCommand>("workflow")
                          .WithDescription("Deploy workflows");

                    config.AddCommand<DataProviderCommand>("dataprovider")
                          .WithDescription("Deploy data providers");

                    config.AddCommand<WebResourceCommand>("webresource")
                          .WithDescription("Deploy web resources");

                    config.AddCommand<ProxyTypeCommand>("proxytype")
                          .WithDescription("Generate proxy types using CrmSvcUtil");

                    config.AddCommand<ModelBuilderCommand>("modelbuilder")
                          .WithDescription("Generate early-bound entity classes using PAC ModelBuilder");

                    config.AddCommand<SolutionPackagerCommand>("solution")
                          .WithDescription("Extract or pack solutions using SolutionPackager");

                    config.AddCommand<PacSolutionPackagerCommand>("pacsolution")
                          .WithDescription("Extract or pack solutions using PAC CLI");

                    config.AddCommand<DownloadReportCommand>("downloadreport")
                          .WithDescription("Download reports from a solution");

                    config.AddCommand<UploadReportCommand>("uploadreport")
                          .WithDescription("Upload reports to a solution");

                    config.AddCommand<DownloadWebResourceCommand>("downloadwebresource")
                          .WithDescription("Download web resources from a solution");

                    config.AddCommand<DataSourceCommand>("datasource")
                          .WithDescription("Create data source entities");
                });

                var result = await app.RunAsync(args);

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