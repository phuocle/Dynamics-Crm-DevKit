using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli
{
    internal class CliTask
    {
        internal static void Run(CommandLineArgs arg)
        {
            var json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(arg.JsonFile));
            switch (arg.Type)
            {
                case nameof(CliType.downloadreports):
                    var downloadreport = new TaskDownloadReport(arg, json.downloadreports.FirstOrDefault(x => x.profile == arg.Profile));
                    downloadreport.Run();
                    break;
                case nameof(CliType.uploadreports):
                    var uploadreport = new TaskUploadReport(arg, json.uploadreports.FirstOrDefault(x => x.profile == arg.Profile));
                    uploadreport.Run();
                    break;
                case nameof(CliType.generators):
                    var generator = new TaskGenerator(arg, json.generators.FirstOrDefault(x => x.profile == arg.Profile));
                    generator.Run();
                    break;
                case nameof(CliType.proxytypes):
                    var proxy = new TaskProxyType(arg, json.proxytypes.FirstOrDefault(x => x.profile == arg.Profile));
                    proxy.Run();
                    break;
                case nameof(CliType.solutionpackagers):
                    var packager = new TaskSolutionPackager(arg, json.solutionpackagers.FirstOrDefault(x => x.profile == arg.Profile));
                    packager.Run();
                    break;
                case nameof(CliType.downloadwebresources):
                    var downloadWebResource = new TaskDownloadWebResource(arg, json.downloadwebresources.FirstOrDefault(x => x.profile == arg.Profile));
                    downloadWebResource.Run();
                    break;
                case nameof(CliType.workflows):
                case nameof(CliType.plugins):
                case nameof(CliType.dataproviders):
                case nameof(CliType.servers):
                    var server = new TaskServer(arg, json);
                    server.Run();
                    break;
                case nameof(CliType.webresources):
                    var webresource = new TaskWebResource(arg, json.webresources.FirstOrDefault(x => x.profile == arg.Profile));
                    webresource.Run();
                    break;
            }
        }
    }
}
