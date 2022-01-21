using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskProxyType : ITask
    {
        private const string ENVIRONMENT_ENTITIES = "DynamicsCrm.DevKit.CrmSvcUtilExtensions.Entities";
        public TaskProxyType(CrmServiceClient crmServiceClient, string currentDirectory, JsonProxyType json, string version, bool isSdkLogin, string connection)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            this.json = json;
            Version = version;
            IsSdkLogin = isSdkLogin;
            Connection = connection;
        }

        public string CurrentDirectory { get; set; }

        public string TaskType => $"[{nameof(CliType.proxytypes).ToUpper()}]";

        public CrmServiceClient CrmServiceClient { get; set; }

        private JsonProxyType json { get; set; }
        private string Version { get; set; }
        private string CrmSvcUtil { get; set; }
        private bool IsSdkLogin { get; set; }
        private string Connection { get; set; }

        public bool IsValid()
        {
            if (json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.@namespace == "???" || (json.@namespace != null && json?.@namespace?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'namespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.output == "???" || (json.output != null && json?.output?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'output' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (!IsExistCrmSvcUtil(CurrentDirectory))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Not found CrmSvcUtil.exe file.");
                return false;
            }
            return true;
        }

        private bool IsExistCrmSvcUtil(string currentDirectory)
        {
            var temp = $@"packages\Microsoft.CrmSdk.CoreTools.{Version}\content\bin\coretools\CrmSvcUtil.exe";
            CrmSvcUtil = $@"{currentDirectory}\{temp}";
            if (File.Exists(CrmSvcUtil))
            {
                return true;
            }
            else
            {
                var parentDirectory = new DirectoryInfo(currentDirectory)?.Parent?.FullName;
                if (parentDirectory == null) return false;
                return IsExistCrmSvcUtil(parentDirectory);
            }
        }

        private string GetParentFolder(string currentDirectory)
        {
            var directory = new DirectoryInfo(CurrentDirectory);
            if (directory.Parent == null) return null;
            if (Directory.Exists($"{directory.Parent.FullName}\\packages")) return directory.Parent.FullName;
            return GetParentFolder(directory.Parent.FullName);
        }


        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                CopyFile();
                RunProxyType();
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private void CopyFile()
        {
            var fileExecuting = Assembly.GetExecutingAssembly().Location;
            var fiFileExecuting = new FileInfo(fileExecuting);
            var fileCrmSvcUtilExtension = Path.Combine(fiFileExecuting.DirectoryName, "DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            if (!File.Exists(fileCrmSvcUtilExtension)) throw new Exception("Not found DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            var fiCrmSvcUtil = new FileInfo(CrmSvcUtil);
            var fileToCopy = Path.Combine(fiCrmSvcUtil.DirectoryName, "DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            if (!File.Exists(fileToCopy))File.Copy(fileCrmSvcUtilExtension, fileToCopy);
        }

        private void RunProxyType()
        {
            var path = "\"" + CrmSvcUtil + "\"";
            CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, "Executing", ConsoleColor.White, " CrmSvcUtil");
            if (json.entities == "*" || json.entities.ToLower() == "all")
            {
                CliLog.WriteLine(ConsoleColor.Green, " with ", ConsoleColor.White, "all entities");
            }
            else
            {
                CliLog.WriteLine(ConsoleColor.Green, " with entities filter: ", ConsoleColor.White, json.entities);
            }
            CliLog.WriteLine();
            CliLog.WriteLine(ConsoleColor.White, " " + path + " " + CreateCommandArgsLog());
            CliLog.WriteLine();
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
            if (json.entities != null && json.entities.Length > 0)
            {
                if (json.entities != "*" && json.entities.ToLower() != "all")
                {
                    process.StartInfo.EnvironmentVariables.Add(ENVIRONMENT_ENTITIES, string.Join(",", json.entities));
                }
            }

            process.Start();

            while (!process.StandardOutput.EndOfStream)
            {
                CliLog.WriteLine(ConsoleColor.White, "|");
                var line = process.StandardOutput.ReadLine();
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, line);
            }
            process.WaitForExit();
        }

        private string CreateCommandArgs()
        {
            var command = new StringBuilder();
            if (IsSdkLogin)
            {
                command.Append("/interactivelogin ");
            }
            else
            {
                command.Append($"/connectionstring:\"{XrmHelper.BuildConnectionString(Connection)}\" ");
            }
            command.Append($"/nologo ");
            command.Append($"/SuppressGeneratedCodeAttribute ");
            command.Append($"/generateActions ");
            command.Append($"/namespace:\"{json.@namespace}\" ");
            if (json.entities != null && json.entities.Length > 0)
            {
                if (json.entities != "*" && json.entities.ToLower() != "all")
                {
                    command.Append($"/codewriterfilter:\"DynamicsCrm.DevKit.CrmSvcUtilExtensions.CodeWriterFilter,DynamicsCrm.DevKit.CrmSvcUtilExtensions\" ");
                }
            }
            command.Append($"/out:\"{json.output}\"");
            return command.ToString();
        }

        private string CreateCommandArgsLog()
        {
            var command = new StringBuilder();
            if (IsSdkLogin)
            {
                command.Append("/interactivelogin ");
            }
            else
            {
                command.Append($"/connectionstring:\"{XrmHelper.BuildConnectionStringLog(Connection)}\" ");
            }
            if (json.entities != null && json.entities.Length > 0)
            {
                if (json.entities != "*" && json.entities.ToLower() != "all")
                {
                    command.Append($"/codewriterfilter:\"DynamicsCrm.DevKit.CrmSvcUtilExtensions.CodeWriterFilter,DynamicsCrm.DevKit.CrmSvcUtilExtensions\" ");
                }
            }
            command.Append($"/nologo ");
            command.Append($"/SuppressGeneratedCodeAttribute ");
            command.Append($"/generateActions ");
            command.Append($"/namespace:\"{json.@namespace}\" ");
            command.Append($"/out:\"{json.output}\"");
            return command.ToString();
        }

    }
}
