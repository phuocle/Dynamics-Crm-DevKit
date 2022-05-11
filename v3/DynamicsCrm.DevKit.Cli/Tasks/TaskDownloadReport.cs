using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskDownloadReport : ITask
    {
        public TaskDownloadReport(CommandLineArgs arg, JsonDownloadReport json)
        {
            this.Arg = arg;
            this.Json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
        }
        public CommandLineArgs Arg { get; set; }
        public string CurrentDirectory { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public string TaskType => $"[{nameof(CliType.downloadreports).ToUpper()}]";
        private JsonDownloadReport Json { get; set; }
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
            if (!XrmHelper.IsExistSolution(CrmServiceClient, Json.solution).IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            var folder = Path.Combine(CurrentDirectory, Json.solution);
            if (!Directory.Exists(folder))
                Directory.CreateDirectory(folder);
            else
            {
                var files = Directory.GetFiles(folder, "*.*", SearchOption.AllDirectories);
                if (files.Count() > 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Folder '{folder}' have an exsiting file(s). Please delete all file(s) and try it again.");
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
                var reportFiles = XrmHelper.GetReportsBySolution(CrmServiceClient, Json.solution);
                if (reportFiles.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any reports to download");
                }
                else
                {
                    var totalDownloadFiles = reportFiles.Count;
                    var len = totalDownloadFiles.ToString().Length;
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalDownloadFiles, ConsoleColor.Green, " reports");
                    CliLog.WriteLine(ConsoleColor.White, "|");
                    var i = 1;
                    reportFiles = reportFiles.OrderBy(x => x.Language).ToList();
                    foreach (var reportFile in reportFiles)
                    {
                        var fileName = Path.Combine(CurrentDirectory, Json.solution, reportFile.Language, reportFile.FileName);
                        if (!File.Exists(fileName))
                        {
                            Utility.ForceWriteAllText(fileName, reportFile.Content);
                            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Downloaded, ConsoleColor.White, reportFile.Language, ConsoleColor.Green, " report file name ", ConsoleColor.White, reportFile.FileName, ConsoleColor.Green, " to: ", ConsoleColor.White, ".." + fileName.Substring(CurrentDirectory.Length));
                        }
                        else
                        {
                            var newFileName = Utility.GeNextFileName(fileName);
                            Utility.ForceWriteAllText(newFileName, reportFile.Content);
                            CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.Downloaded, ConsoleColor.White, reportFile.Language, ConsoleColor.Green, " report file name ", ConsoleColor.White, reportFile.FileName, ConsoleColor.Magenta, $" {CliAction.Duplicated}", ConsoleColor.Green, "to: ", ConsoleColor.White, newFileName);
                        }
                        i++;
                    }
                }
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }
    }
}
