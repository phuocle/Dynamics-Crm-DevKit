﻿using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using DynamicsCrm.DevKit.Shared.Helper;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskProxyType
    {
        private const string ENVIRONMENT_ENTITIES = "DynamicsCrm.DevKit.CrmSvcUtilExtensions.Entities";
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[PROXY-TYPES]";
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
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, LOG);
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            if (!IsValid()) return;

            CopyFile();

            RunProxyType();

            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
            CliLog.WriteLine(CliLog.ColorWhite, "|");
        }

        private void CopyFile()
        {
            var fileCrmSvcUtil = GetParentFolder(currentDirectory) + $@"\packages\Microsoft.CrmSdk.CoreTools.{arguments.Version}\content\bin\coretools\CrmSvcUtil.exe";
            if (!File.Exists(fileCrmSvcUtil)) return;
            var fileExecuting = Assembly.GetExecutingAssembly().Location;
            var fiFileExecuting = new FileInfo(fileExecuting);
            var fileCrmSvcUtilExtension = Path.Combine(fiFileExecuting.DirectoryName, "DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            if (!File.Exists(fileCrmSvcUtilExtension)) return;
            var fiCrmSvcUtil = new FileInfo(fileCrmSvcUtil);
            var fileToCopy = Path.Combine(fiCrmSvcUtil.DirectoryName, "DynamicsCrm.DevKit.CrmSvcUtilExtensions.dll");
            if (!File.Exists(fileToCopy)) {
                File.Copy(fileCrmSvcUtilExtension, fileToCopy);
            }
        }

        private void RunProxyType()
        {
            var path = "\"" + GetParentFolder(currentDirectory) + $@"\packages\Microsoft.CrmSdk.CoreTools.{arguments.Version}\content\bin\coretools\CrmSvcUtil.exe" + "\"";
            CliLog.Write(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Executing", CliLog.ColorCyan, " CrmSvcUtil");
            if (json.entities == "*" || json.entities.ToLower() == "all")
            {
                CliLog.WriteLine(ConsoleColor.Green, " with ", ConsoleColor.Cyan, "all entities");
            }
            else
            {
                CliLog.WriteLine(ConsoleColor.Green, " with entities filter: ", ConsoleColor.Cyan, json.entities);
            }
            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, " " + path + " " + CreateCommandArgsLog());
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
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                var line = process.StandardOutput.ReadLine();
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, line);
            }
            process.WaitForExit();
        }

        private string GetParentFolder(string currentDirectory)
        {
            var directory = new DirectoryInfo(currentDirectory);
            if (directory.Parent == null) throw new Exception($"{LOG} Not found packages folder");
            if (Directory.Exists($"{directory.Parent.FullName}\\packages")) return directory.Parent.FullName;
            return GetParentFolder(directory.Parent.FullName);
        }

        private string CreateCommandArgs()
        {
            var command = new StringBuilder();
            if (arguments.SdkLogin.Length > 0 && arguments.SdkLogin.ToLower() == "yes")
            {
                command.Append("/interactivelogin ");
            }
            else
            {
                command.Append($"/connectionstring:\"{XrmHelper.BuildConnectionString(arguments.Connection)}\" ");
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
            if (arguments.SdkLogin.Length > 0 && arguments.SdkLogin.ToLower() == "yes")
            {
                command.Append("/interactivelogin ");
            }
            else
            {
                command.Append($"/connectionstring:\"{XrmHelper.BuildConnectionStringLog2(arguments.Connection)}\" ");
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
