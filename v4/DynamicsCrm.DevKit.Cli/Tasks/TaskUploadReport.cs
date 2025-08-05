using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskUploadReport : ITask
    {
        public TaskUploadReport(CommandLineArgs arg, JsonUploadReport json)
        {
            this.Arg = arg;
            this.Json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
        }
        public CommandLineArgs Arg { get; set; }
        private JsonUploadReport Json { get; set; }

        public string CurrentDirectory { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public string TaskType => $"[{nameof(CliType.uploadreports).ToUpper()}]";

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
            if (Json.languages.Count == 0 || Json.languages.Count(x => x != "???") == 0)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'languages' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            foreach (var language in Json.languages)
            {
                var folder = Path.Combine(CurrentDirectory, Json.solution, language);
                if (!Directory.Exists(folder))
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Folder does not exist: {folder}");
                    return false;
                }
            }
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");

            if (IsValid())
            {
                foreach (var language in Json.languages)
                {
                    var folder = Path.Combine(CurrentDirectory, Json.solution, language);
                    var files = Directory.GetFiles(folder, "*.rdl", SearchOption.AllDirectories);
                    if (files.Length == 0)
                    {
                        CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any reports to deploy");
                    }
                    else
                    {
                        var totalUploadFiles = files.Length;
                        var len = totalUploadFiles.ToString().Length;
                        CliLog.WriteLine(ConsoleColor.White, "|");
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Blue, totalUploadFiles, " ", ConsoleColor.White, language,  ConsoleColor.Green, " .rdl files");
                        CliLog.WriteLine(ConsoleColor.White, "|");
                        var reportFiles = XrmHelper.GetReportsBySolution(CrmServiceClient, Json.solution);
                        var i = 1;
                        foreach (var file in files)
                        {
                            var fileName = Path.GetFileName(file);
                            var reports = reportFiles.Where(x => x?.Language.ToLower() == language.ToLower() && x.FileName?.ToLower() == fileName?.ToLower());
                            if (reports.Count() != 1)
                            {
                                CliLog.WriteLineError(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, "File ", ConsoleColor.White, file, ConsoleColor.Green, " found ", ConsoleColor.White, reports.Count(), ConsoleColor.Green, (reports.Count() == 0 ? " report file name " : " report(s) file name "), ConsoleColor.White, fileName, ConsoleColor.Green, " with language: ", ConsoleColor.White, language);
                            }
                            else
                            {
                                var report = reports.First();
                                if (Utility.IsTheSame(report.Content, File.ReadAllText(file)))
                                {
                                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, language, ConsoleColor.Green, " report ", ConsoleColor.White, ".." + file.Substring(CurrentDirectory.Length), ConsoleColor.Green, " to ", ConsoleColor.White, fileName, ConsoleColor.Green, " report file name");
                                }
                                else
                                {
                                    XrmHelper.DeployReport(CrmServiceClient, report.ObjectId, file);
                                    CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", i) + ": ", ConsoleColor.Green, CliAction.DEPLOYED, ConsoleColor.White, language, ConsoleColor.Green, " report ", ConsoleColor.White, ".." + file.Substring(CurrentDirectory.Length), ConsoleColor.Green, " to ", ConsoleColor.White, fileName, ConsoleColor.Green, " report file name");
                                }
                            }
                            i++;
                        }
                    }
                }
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }
    }
}
