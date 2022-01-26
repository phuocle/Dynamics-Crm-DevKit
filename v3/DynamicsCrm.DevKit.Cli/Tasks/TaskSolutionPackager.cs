using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

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
        private string SolutionPackagerExe { get; set; }
        private bool IsSdkLogin { get; set; }
        private string Connection { get; set; }
        private string SolutionXmlFile => $"{CurrentDirectory}\\{json.folder}\\{json.solutiontype}\\Other\\Solution.xml";
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
            if (json.type.ToLower() == "Pack".ToLower())
            {
                if (!File.Exists(SolutionXmlFile))
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Invalid folder for Pack solution.");
                    return false;
                }
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
            if (!IsExistSolutionPackager(CurrentDirectory))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Not found CrmSvcUtil.exe file.");
                return false;
            }
            if (json.type.ToLower() == "Extract".ToLower())
            {
                if (!XrmHelper.IsExistSolution(CrmServiceClient, json.solution).IsOk)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{json.solution}' not exist");
                    return false;
                }
            }
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                var solutionZipFile = GetSolutionZipFile();
                if (json.type.ToLower().Trim() == "Pack".ToLower())
                {
                    if (json.solutiontype.ToLower().Trim() == "Both".ToLower())
                    {
                        CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, json.type, ConsoleColor.White, " solution: ", ConsoleColor.Green, json.solution, ConsoleColor.White, " to: ");
                        CliLog.WriteSuccess(ConsoleColor.White, solutionZipFile);
                        CliLog.Write(ConsoleColor.White, " and ");
                        CliLog.WriteSuccess(ConsoleColor.White, $"{Path.GetDirectoryName(solutionZipFile)}\\{Path.GetFileNameWithoutExtension(solutionZipFile)}_managed.zip");
                        CliLog.WriteLine(ConsoleColor.Black, "█");
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, json.type, ConsoleColor.White, " solution: ", ConsoleColor.Green, json.solution, ConsoleColor.White, " to: ");
                        CliLog.WriteSuccess(ConsoleColor.White, solutionZipFile);
                        CliLog.WriteLine(ConsoleColor.Black, "█");
                    }
                }
                else
                {
                }

                RunSolutionPackager(solutionZipFile);
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private void RunSolutionPackager(string solutionZipFile)
        {
            var command = CreateCommandArgs(solutionZipFile);
            var path = "\"" + SolutionPackagerExe + "\"";
            CliLog.WriteLine();
            CliLog.WriteLine(ConsoleColor.White, " " + path + " " + command);
            CliLog.WriteLine();

            var process = new Process
            {
                StartInfo = new ProcessStartInfo(path)
                {
                    Arguments = command,
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
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, line);
            }
            process.WaitForExit();

        }

        private string GetSolutionZipFile()
        {
            if (json.type.ToLower().Trim() == "Extract".ToLower())
            {
                return string.Empty;
            }
            else
            {
                var crmVersion = GetCrmVersionFromSolutionFolder();
                var fileName = FormatSolutionVersionString(json.solution, System.Version.Parse(crmVersion), json.solutiontype);
                var solutionFile = Path.Combine(CurrentDirectory, json.folder, "Solutions-Pack", fileName);
                return solutionFile;
            }
        }

        private string GetCrmVersionFromSolutionFolder()
        {
            string pattern = @"<Version>\d+\.\d+\.\d+\.\d+<\/Version>";
            RegexOptions options = RegexOptions.Multiline;
            foreach (Match m in Regex.Matches(Utility.ReadAllText(SolutionXmlFile), pattern, options))
            {
                var version = m.Value;
                version = version.Replace("<Version>", string.Empty).Replace("</Version>", string.Empty);
                return version;
            }
            return "1.0.0.0";
        }

        private bool IsExistSolutionPackager(string currentDirectory)
        {
            var temp = $@"packages\Microsoft.CrmSdk.CoreTools.{Version}\content\bin\coretools\SolutionPackager.exe";
            SolutionPackagerExe = $@"{currentDirectory}\{temp}";
            if (File.Exists(SolutionPackagerExe))
            {
                return true;
            }
            else
            {
                var parentDirectory = new DirectoryInfo(currentDirectory)?.Parent?.FullName;
                if (parentDirectory == null) return false;
                return IsExistSolutionPackager(parentDirectory);
            }
        }
        private string CreateCommandArgs(string solutionFile)
        {
            var command = new StringBuilder();
            command.Append($"/action:{json.type}");
            command.Append($" /zipfile:\"{solutionFile}\"");
            command.Append($" /folder:\"{CurrentDirectory}\\{json.folder}\\{json.solutiontype}\"");
            command.Append(" /clobber /nologo /localize /allowdelete:Yes /allowwrite:Yes");
            if (json.mapfile != null)
            {
                var map = $"{CurrentDirectory}\\{json.mapfile}";
                if (File.Exists(map))
                {
                    command.Append($" /map:\"{map}\"");
                }
            }
            command.Append($" /log:\"{CurrentDirectory}\\{json.folder}\\log\\{DateTime.Now.ToString("yyyy-MM-dd hh-mm") + "." + json.solutiontype + ".txt"}\"");
            command.Append($" /packagetype:{json.solutiontype}");
            return command.ToString();
        }

        private string FormatSolutionVersionString(string solutionName, Version version, string solutionType)
        {
            var result = new StringBuilder();
            result.Append($"{solutionName}_");
            var build = "00000" + version.Build.ToString();
            build = build.Substring(build.Length - 4);
            result.Append($"{version.Major}.{version.Minor}.{build}.{version.Revision}");
            if (solutionType.ToLower().Trim() == "managed")
                result.Append("_managed");
            result.Append(".zip");
            return result.ToString();
        }
    }
}
