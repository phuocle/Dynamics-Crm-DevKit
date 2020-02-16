using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using DynamicsCrm.DevKit.Shared.Helper;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    // @"C:\src\github\phuocle\Dynamics-Crm-DevKit\test\Abc.LuckyStar\Abc.LuckyStar.ProxyTypes";
    // /conn:"AuthType=ClientSecret;Url=https://orgcaffa69c.crm5.dynamics.com;ClientId=e31fc7d6-4dce-46e3-8677-04ab0a2968e3;ClientSecret=?-iwRSB0te8o]pHX_yVQLJnUqziB1E0h;" /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"proxytypes" /profile:"DEBUG" /version:"9.1.0.38"
    // /conn:"AuthType=Office365;Url=https://orgcaffa69c.crm5.dynamics.com;Username=dev@pldevkit.onmicrosoft.com;Password=b6+abJ1xam0vxgUEg98P7usY3mJ5IMCVuzElnwzAymo=;" /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"proxytypes" /profile:"DEBUG" /version:"9.1.0.38"

    public class TaskProxyType
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[PROXYTYPES]";
        private JsonProxyType json;

        public TaskProxyType(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .proxytypes.FirstOrDefault(x => x.profile == arguments.Profile);
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "PROXY-TYPES");

            if (!IsValid()) return;
            RunProxyType();

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "PROXY-TYPES");
        }

        private void RunProxyType()
        {
            var path = "\"" + GetParentFolder(currentDirectory) + $@"\packages\Microsoft.CrmSdk.CoreTools.{arguments.Version}\content\bin\coretools\CrmSvcUtil.exe" + "\"";
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Executing CrmSvcUtil");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, "\t" + path);
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, "\t" + CreateCommandArgsLog());
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "");
            var process = new Process
            {
                StartInfo = new ProcessStartInfo(path)
                {
                    Arguments = CreateCommandArgs(),
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                }
            };
            process.Start();
            while (!process.StandardOutput.EndOfStream)
            {
                var line = process.StandardOutput.ReadLine();
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, line);
            }
            process.WaitForExit();
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Executed CrmSvcUtil");
        }

        private string GetParentFolder(string currentDirectory)
        {
            var directory = new DirectoryInfo(currentDirectory);
            return directory.Parent != null ? directory.Parent.FullName : string.Empty;
        }

        private string CreateCommandArgs()
        {
            var command = new StringBuilder();
            command.Append($"/connectionstring:\"{XrmHelper.BuildConnectionString(arguments.Connection)}\" ");
            command.Append($"/nologo ");
            command.Append($"/namespace:{json.@namespace} ");
            command.Append($"/out:{json.output}");
            return command.ToString();
        }

        private string CreateCommandArgsLog()
        {
            var command = new StringBuilder();
            command.Append($"/connectionstring:\"{XrmHelper.BuildConnectionStringLog(arguments.Connection)}\" ");
            command.Append($"/nologo ");
            command.Append($"/namespace:{json.@namespace} ");
            command.Append($"/out:{json.output}");
            return command.ToString();
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.@namespace.Length == 0 || json.@namespace == "???")
                throw new Exception($"{LOG} 'namespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.output.Length == 0 || json.output == "???")
                throw new Exception($"{LOG} 'output' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            return true;
        }
    }
}
