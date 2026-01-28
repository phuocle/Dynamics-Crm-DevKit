using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskUploadReport(CommandLineArgs arg, JsonUploadReport json) : ITask
    {
        public CommandLineArgs Arg { get; set; } = arg;
        private JsonUploadReport Json { get; set; } = json;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        public string TaskType => $"[{nameof(CliType.uploadreports).ToUpper()}]";

        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            var solutionExists = await XrmHelper.IsExistSolutionAsync(ServiceClient, Json.solution);
            if (!solutionExists.IsOk)
            {
                SpectreLog.ActionError($"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            if (Json.languages == null || Json.languages.Count == 0 || Json.languages.Count(x => x != "???") == 0)
            {
                SpectreLog.ActionError($"{TaskType} 'languages' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            foreach (var language in Json.languages)
            {
                var folder = Path.Combine(CurrentDirectory, Json.solution, language);
                if (!Directory.Exists(folder))
                {
                    SpectreLog.ActionError($"Folder does not exist: {folder}");
                    return false;
                }
            }
            return true;
        }

        public async Task RunAsync()
        {
            SpectreLog.WriteLine("START");
            SpectreLog.WriteLine();

            if (await IsValidAsync())
            {
                foreach (var language in Json.languages)
                {
                    var folder = Path.Combine(CurrentDirectory, Json.solution, language);
                    var files = Directory.GetFiles(folder, "*.rdl", SearchOption.AllDirectories);
                    if (files.Length == 0)
                    {
                        SpectreLog.WriteLine("Not found any reports to deploy");
                        SpectreLog.WriteLine();
                    }
                    else
                    {
                        var totalUploadFiles = files.Length;
                        SpectreLog.WriteHighLight("Found: ", $"{totalUploadFiles}", " ", language, " .rdl files");
                        SpectreLog.WriteLine();
                        var reportFiles = await XrmHelper.GetReportsBySolutionAsync(ServiceClient, Json.solution);
                        foreach (var file in files)
                        {
                            var fileName = Path.GetFileName(file);
                            var reports = reportFiles.Where(x => x?.Language.ToLower() == language.ToLower() && x.FileName?.ToLower() == fileName?.ToLower());
                            if (reports.Count() != 1)
                            {
                                var matchCount = reports.Count();
                                var matchText = matchCount == 0 ? " report file name " : " report(s) file name ";
                                SpectreLog.ActionError($"File {file} found {matchCount}{matchText}{fileName} with language: {language}");
                            }
                            else
                            {
                                var report = reports.First();
                                if (Helper.IsTheSame(report.Content, await FileHelper.ReadAllTextAsync(file)))
                                {
                                    SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{language} report", " .." + file.Substring(CurrentDirectory.Length), " to ", fileName, " report file name");
                                }
                                else
                                {
                                    await XrmHelper.DeployReportAsync(ServiceClient, report.ObjectId, file);
                                    SpectreLog.ActionWithLevel1(CliAction.DEPLOYED, $"{language} report", " .." + file.Substring(CurrentDirectory.Length), $" to {fileName} report file name");
                                }
                            }
                        }
                    }
                }
            }

            SpectreLog.WriteLine();
            SpectreLog.WriteLine("END");
        }
    }
}