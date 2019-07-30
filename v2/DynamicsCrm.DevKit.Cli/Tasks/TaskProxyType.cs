using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskProxyType
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[PROXYTYPES]";
        private JsonProxyType json;
        private string Url { get; set; }
        private string UserName { get; set; }
        private string Password { get; set; }

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
            var command = CreateCommandArgs();
            var path = "\"" + GetParentFolder(currentDirectory) + $@"\packages\Microsoft.CrmSdk.CoreTools.{arguments.Version}\content\bin\coretools\CrmSvcUtil.exe" + "\"";
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Executing CrmSvcUtil");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, "\t" + path);
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorCyan, "\t" + HidePassword(command));
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "");
            var process = new Process
            {
                StartInfo = new ProcessStartInfo(path)
                {
                    Arguments = $"{command}",
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

        private string HidePassword(string command)
        {
            var arr = command.Split(" ".ToArray());
            arr[3] = "/password:******";
            return string.Join(" ", arr);
        }

        private string GetParentFolder(string currentDirectory)
        {
            var directory = new DirectoryInfo(currentDirectory);
            return directory.Parent != null ? directory.Parent.FullName : string.Empty;
        }

        private string CreateCommandArgs()
        {
            ParserConnection();
            var command = new StringBuilder();
            command.Append($"/nologo ");
            command.Append($"/url:{Url} ");
            command.Append($"/username:{UserName} ");
            command.Append($"/password:{Password} ");
            command.Append($"/namespace:{json.@namespace} ");
            command.Append($"/out:{json.output}");
            return command.ToString();
        }

        private string TryDecryptPassword(string password)
        {
            try
            {
                password = EncryptDecrypt.DecryptString(password);
            }
            catch
            {
            }
            return password;
        }

        private void ParserConnection()
        {
            var arr = arguments.Connection.Split(';');
            if (arr.Length != 5) throw new Exception("Your password contains ';' charater. DynamicsCrm.DevKit CANNOT parser it.");
            Url = arr[1].Split('=')[1];
            UserName = arr[2].Split('=')[1];
            var password = arguments.Connection.Substring(arguments.Connection.IndexOf("Password=", StringComparison.Ordinal));
            password = password.Substring("Password=".Length);
            password = password.Substring(0, password.Length - 1);
            password = Utility.TryDecryptPassword(password);
            Password = password;
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
