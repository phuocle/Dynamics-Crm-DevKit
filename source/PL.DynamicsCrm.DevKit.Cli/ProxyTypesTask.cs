using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    class ProxyTypesTask
    {
        private CrmServiceClient CrmServiceClient { get; }
        private ProxyType ProxyTypeJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }
        private string Url { get; set; }
        private string UserName { get; set; }
        private string Password { get; set; }


        public ProxyTypesTask(CrmServiceClient crmServiceClient, string currentDirectory, ProxyType proxyTypeJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            ProxyTypeJson = proxyTypeJson;
            CurrentDirectory = currentDirectory;
            Version = version;
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START PROXYTYPES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));

            if (ProxyTypeJson.@namespace.Length == 0 || ProxyTypeJson.@namespace == "???")
                throw new Exception("No namespae found in proxy type profile. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            if (ProxyTypeJson.output.Length == 0 || ProxyTypeJson.output == "???")
                throw new Exception("No output found in proxy type profile. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");

            var command = CreateCommandArgs();
            var path = "\"" + GetParentFolder(CurrentDirectory) + $@"\packages\Microsoft.CrmSdk.CoreTools.{Version}\content\bin\coretools\CrmSvcUtil.exe" + "\"";

            CliLog.WriteLine(CliLog.ColorGreen, "Executing CrmSvcUtil");
            CliLog.WriteLine(CliLog.ColorCyan, "\t" + path);
            CliLog.WriteLine(CliLog.ColorCyan, "\t" + HidePassword(command));
            CliLog.WriteLine(CliLog.ColorGreen, "");
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
                CliLog.WriteLine(CliLog.ColorWhite, line);
            }
            process.WaitForExit();
            CliLog.WriteLine(CliLog.ColorGreen, "Executed CrmSvcUtil");

            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END PROXYTYPES TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
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
            command.Append($"/namespace:{ProxyTypeJson.@namespace} ");
            command.Append($"/out:{ProxyTypeJson.output}");
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
            var arr = ProxyTypeJson.connection.Split(';');
            if (arr.Length != 5) throw new Exception("Your password contains ';' charater. PL.DynamicsCrm.DevKit CANNOT parser it.");
            Url = arr[1].Split('=')[1];
            UserName = arr[2].Split('=')[1];
            Password = TryDecryptPassword(arr[3].Split('=')[1] + "==");
        }
    }
}
