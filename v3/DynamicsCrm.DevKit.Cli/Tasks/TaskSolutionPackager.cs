using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskSolutionPackager : ITask
    {
        public TaskSolutionPackager(CommandLineArgs arg, JsonSolutionPackager json)
        {
            this.Arg = arg;
            this.Json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
            Version = arg.Version;
            IsSdkLogin = arg.IsSdkLogin;
            Connection = arg.Connection;
        }
        public CommandLineArgs Arg { get; set; }
        private JsonSolutionPackager Json { get; set; }
        public string CurrentDirectory { get; set; }
        public string TaskType => $"[{nameof(CliType.solutionpackagers).ToUpper()}]";
        public CrmServiceClient CrmServiceClient { get; set; }
        private string Version { get; set; }
        private string SolutionPackagerExe { get; set; }
        private bool IsSdkLogin { get; set; }
        private string Connection { get; set; }
        private string SolutionXmlFile => $"{CurrentDirectory}\\{Json.folder}\\{Json.solutiontype}\\Other\\Solution.xml";
        public bool IsValid()
        {
            if (Json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solutiontype == "???" || (Json.solutiontype != null && Json?.solutiontype?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solutiontype' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solutiontype.ToLower() != "Managed".ToLower() &&
                Json.solutiontype.ToLower() != "Unmanaged".ToLower() &&
                Json.solutiontype.ToLower() != "Both".ToLower())
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solutiontype' should be: 'Managed' or 'Unmanaged' or 'Both'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.folder == "???" || (Json.folder != null && Json?.folder?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type == "???" || (Json.folder != null && Json?.type?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type.ToLower() != "Extract".ToLower() &&
                Json.type.ToLower() != "Pack".ToLower())
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'type' should be: 'Extract' or 'Pack'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.type.ToLower() == "Pack".ToLower())
            {
                if (!File.Exists(SolutionXmlFile))
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Invalid folder for Pack solution.");
                    return false;
                }
            }
            if (Json.mapfile != null && Json.mapfile.Length != 0)
            {
                var mapfile = Path.Combine(CurrentDirectory, Json.mapfile);
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
            if (Json.type.ToLower() == "Extract".ToLower())
            {
                if (!XrmHelper.IsExistSolution(CrmServiceClient, Json.solution).IsOk)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{Json.solution}' not exist");
                    return false;
                }
            }
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                var solutionZipFile = GetSolutionZipFile();
                if (Json.type.ToLower().Trim() == "Pack".ToLower())
                {
                    if (Json.solutiontype.ToLower().Trim() == "Both".ToLower())
                    {
                        CliLog.Write(ConsoleColor.White, "| ", ConsoleColor.Green, $"{Json.type}ing", ConsoleColor.White, " solution: ", ConsoleColor.Green, Json.solution, ConsoleColor.White, " to: ");
                        CliLog.WriteSuccess(ConsoleColor.White, ".." + solutionZipFile.Substring(CurrentDirectory.Length));
                        CliLog.Write(ConsoleColor.White, " and ");
                        var solutionZipFileManaged = $"{Path.GetDirectoryName(solutionZipFile)}\\{ Path.GetFileNameWithoutExtension(solutionZipFile)}_managed.zip";
                        CliLog.WriteSuccess(ConsoleColor.White, ".." + solutionZipFileManaged.Substring(CurrentDirectory.Length));
                        CliLog.WriteLine(ConsoleColor.Black, "█");
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "| ", ConsoleColor.Green, $"{Json.type}ing", ConsoleColor.White, " solution: ", ConsoleColor.Green, Json.solution, ConsoleColor.White, " to: ");
                        CliLog.WriteSuccess(ConsoleColor.White, solutionZipFile);
                        CliLog.WriteLine(ConsoleColor.Black, "█");
                    }
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|");
                    CliLog.Write(ConsoleColor.White, "| ", ConsoleColor.Green, $"{Json.type}ing", ConsoleColor.White, " solution: ", ConsoleColor.Green, Json.solution, ConsoleColor.White, " to: ");
                    CliLog.WriteSuccess(ConsoleColor.White, $"..\\{Json.folder}\\{Json.solutiontype}");
                    CliLog.WriteLine(ConsoleColor.Black, "█");
                }

                RunSolutionPackager(solutionZipFile);
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }

        private void RunSolutionPackager(string solutionZipFile)
        {
            var command = CreateCommandArgs(solutionZipFile);
            var path = "\"" + SolutionPackagerExe + "\"";
            CliLog.WriteLine();
            CliLog.WriteLine();
            CliLog.WriteLine(ConsoleColor.White, path + " " + command);
            CliLog.WriteLine();
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
            if (Json.type.ToLower().Trim() == "Extract".ToLower())
            {
                if (Json.solutiontype.ToLower().Trim() == "Both".ToLower())
                {
                    ExportSolution("Managed");
                    return ExportSolution("Unmanaged");
                }
                else {
                    return ExportSolution(Json.solutiontype);
                }
            }
            else
            {
                var crmVersion = GetCrmVersionFromSolutionFolder();
                var fileName = FormatSolutionVersionString(Json.solution, System.Version.Parse(crmVersion), Json.solutiontype);
                var solutionFile = Path.Combine(CurrentDirectory, Json.folder, "Solutions-Pack", fileName);
                return solutionFile;
            }
        }

        private string ExportSolution(string solutionType)
        {
            var timer = Stopwatch.StartNew();
            var request = new ExportSolutionRequest
            {
                Managed = solutionType.ToLower() == "Managed".ToLower(),
                SolutionName = Json.solution
            };
            var wait = new Thread(() => CliLog.Waiting($"Export {solutionType} solution: {Json.solution} "));
            wait.Start();

            var crmVersion = GetCrmVersionFromInstance();
            var response = (ExportSolutionResponse)CrmServiceClient.Execute(request);

            wait.Abort();
            var fileName = FormatSolutionVersionString(Json.solution, System.Version.Parse(crmVersion), Json.solutiontype);
            var solutionFile = Path.Combine(CurrentDirectory, Json.folder, "Solutions-Extract", fileName);
            if (solutionType.ToLower() == "Managed".ToLower())
                solutionFile = $"{Path.GetDirectoryName(solutionFile)}\\{Path.GetFileNameWithoutExtension(solutionFile)}_managed.zip";
            var tempFile = Utility.WriteTempFile(fileName, response.ExportSolutionFile);
            var dir = Path.GetDirectoryName(solutionFile);
            if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);
            File.Copy(tempFile, solutionFile, true);
            CliLog.Write(ConsoleColor.White, " to: ");
            CliLog.WriteSuccess(ConsoleColor.White, ".." + solutionFile.Substring(CurrentDirectory.Length));
            CliLog.Write(ConsoleColor.White, " take: ");
            CliLog.WriteSuccess(ConsoleColor.White, $"{timer.Elapsed:c}");
            CliLog.WriteLine(ConsoleColor.Black, "█");
            return solutionFile;
        }

        private string GetCrmVersionFromInstance()
        {
            var fetchData = new
            {
                uniquename = Json.solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='solution'>
    <attribute name='version' />
    <filter type='and'>
      <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return "1.0.0.0";
            var solution = rows.Entities[0];
            return solution.GetAttributeValue<string>("version");
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
            command.Append($"/action:{Json.type}");
            command.Append($" /zipfile:\"{solutionFile}\"");
            command.Append($" /folder:\"{CurrentDirectory}\\{Json.folder}\\{Json.solutiontype}\"");
            command.Append(" /clobber /nologo /localize /allowdelete:Yes /allowwrite:Yes");
            if (Json.mapfile != null)
            {
                var map = $"{CurrentDirectory}\\{Json.mapfile}";
                if (File.Exists(map))
                {
                    command.Append($" /map:\"{map}\"");
                }
            }
            command.Append($" /log:\"{CurrentDirectory}\\{Json.folder}\\log\\{DateTime.Now.ToString("yyyy-MM-dd hh-mm") + "." + Json.solutiontype + ".txt"}\"");
            command.Append($" /packagetype:{Json.solutiontype}");
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
