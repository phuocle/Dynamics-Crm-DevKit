using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskSolutionPackager : ITask
    {
        public TaskSolutionPackager(CommandLineArgs arg, JsonSolutionPackager json)
        {
            this.Arg = arg;
            this.json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
            Version = arg.Version;
            IsSdkLogin = arg.IsSdkLogin;
            Connection = arg.Connection;
        }
        public CommandLineArgs Arg { get; set; }
        private JsonSolutionPackager json { get; set; }


        public string CurrentDirectory { get; set; }
        public string TaskType => $"[{nameof(CliType.solutionpackagers).ToUpper()}]";
        public CrmServiceClient CrmServiceClient { get; set; }
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
            if (json.solution == "???" || (json.solution != null && json?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.solutiontype == "???" || (json.solutiontype != null && json?.solutiontype?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solutiontype' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.solutiontype.ToLower() != "Managed".ToLower() &&
                json.solutiontype.ToLower() != "Unmanaged".ToLower() &&
                json.solutiontype.ToLower() != "Both".ToLower())
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solutiontype' should be: 'Managed' or 'Unmanaged' or 'Both'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.folder == "???" || (json.folder != null && json?.folder?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.type == "???" || (json.folder != null && json?.type?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.type.ToLower() != "Extract".ToLower() &&
                json.type.ToLower() != "Pack".ToLower())
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' should be: 'Extract' or 'Pack'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.mapfile != null && json.mapfile.Length != 0)
            {
                var mapfile = Path.Combine(CurrentDirectory, json.mapfile);
                if (!File.Exists(mapfile))
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} mapfile '{mapfile}' not exist");
                    return false;
                }
            }
            if (!IsExistCrmSvcUtil(CurrentDirectory))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Not found CrmSvcUtil.exe file.");
                return false;
            }
            if (!XrmHelper.IsExistSolution(CrmServiceClient, json.solution).IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{json.solution}' not exist");
                return false;
            }
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {

            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
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
    }
}
