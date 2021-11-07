using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    internal class CliTask
    {
        internal static void Run(CommandLineArgs arg)
        {
            var json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(arg.JsonFile));
            switch (arg.Type)
            {
                case nameof(CliType.downloadreports):
                    var downloadreport = new TaskDownloadReport(arg.CrmServiceClient, arg.CurrentDirectory, json.downloadreports.FirstOrDefault(x => x.profile == arg.Profile));
                    downloadreport.Run();
                    break;
            }
        }
    }
}
