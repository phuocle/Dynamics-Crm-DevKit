using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    internal class CliTask
    {
        internal static async Task RunAsync(CommandLineArgs arg)
        {
            var json = SimpleJson.DeserializeObject<Json>(await FileHelper.ReadAllTextAsync(arg.JsonFile));
            switch (arg.Type)
            {
                case nameof(CliType.downloadreports):
                    var downloadreport = new TaskDownloadReport(arg, json.downloadreports.FirstOrDefault(x => x.profile == arg.Profile));
                    await downloadreport.RunAsync();
                    break;
                case nameof(CliType.uploadreports):
                    var uploadreport = new TaskUploadReport(arg, json.uploadreports.FirstOrDefault(x => x.profile == arg.Profile));
                    await uploadreport.RunAsync();
                    break;
                case nameof(CliType.generators):
                    var generator = new TaskGenerator(arg, json.generators.FirstOrDefault(x => x.profile == arg.Profile));
                    await generator.RunAsync();
                    break;
                case nameof(CliType.proxytypes):
                    var proxy = new TaskProxyType(arg, json.proxytypes.FirstOrDefault(x => x.profile == arg.Profile));
                    await proxy.RunAsync();
                    break;
                case nameof(CliType.solutionpackagers):
                    var packager = new TaskSolutionPackager(arg, json.solutionpackagers.FirstOrDefault(x => x.profile == arg.Profile));
                    await packager.RunAsync();
                    break;
                case nameof(CliType.downloadwebresources):
                    var downloadWebResource = new TaskDownloadWebResource(arg, json.downloadwebresources.FirstOrDefault(x => x.profile == arg.Profile));
                    await downloadWebResource.RunAsync();
                    break;
                case nameof(CliType.workflows):
                case nameof(CliType.plugins):
                case nameof(CliType.dataproviders):
                case nameof(CliType.servers):
                    var server = new TaskServer(arg, json);
                    await server.RunAsync();
                    break;
                case nameof(CliType.webresources):
                    var webresource = new TaskWebResource(arg, json.webresources.FirstOrDefault(x => x.profile == arg.Profile));
                    await webresource.RunAsync();
                    break;
                case nameof(CliType.datasources):
                    var dataSource = new TaskDataSource(arg, json.datasources.FirstOrDefault(x => x.profile == arg.Profile));
                    await dataSource.RunAsync();
                    break;
                case nameof(CliType.earlybound):
                    var earlyBound = new TaskEarlyBound(arg, json.earlybound.FirstOrDefault(x => x.profile == arg.Profile));
                    await earlyBound.RunAsync();
                    break;
                default:
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"/type:{arg.Type} not support");
                    break;
            }
        }
    }
}