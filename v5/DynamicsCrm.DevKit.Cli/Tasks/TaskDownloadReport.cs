using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskDownloadReport(CommandLineArgs arg, JsonDownloadReport json) : ITask
    {
        public CommandLineArgs Arg { get; set; } = arg;
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        public string TaskType => $"[{nameof(CliType.downloadreports).ToUpper()}]";
        private JsonDownloadReport Json { get; set; } = json;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }

        private DeploymentService _deploymentService;
        private DeploymentService Deployment => _deploymentService ??= new DeploymentService(ServiceClient);
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
            var solutionExists = await Deployment.IsExistSolutionAsync(Json.solution);
            if (!solutionExists.IsOk)
            {
                SpectreLog.ActionError($"{TaskType} solution '{Json.solution}' not exist");
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
                    SpectreLog.ActionError($"Folder '{folder}' have an exsiting file(s).");
                    SpectreLog.ActionError($"Please delete all file(s) and try it again.");
                    return false;
                }
            }
            return true;
        }

        public async Task RunAsync()
        {
            SpectreLog.ActionWithLevel0("START");
            SpectreLog.WriteLine();
            if (await IsValidAsync())
            {
                var reportFiles = await Deployment.GetReportsBySolutionAsync(Json.solution);
                if (reportFiles.Count == 0)
                {
                    SpectreLog.ActionWithLevel0("Not found any reports to download");
                    SpectreLog.WriteLine();
                }
                else
                {
                    var totalDownloadFiles = reportFiles.Count;
                    var len = totalDownloadFiles.ToString().Length;
                    SpectreLog.WriteHighLight("Found: ", $"{totalDownloadFiles}", " reports");
                    SpectreLog.WriteLine();
                    var i = 1;
                    reportFiles = [.. reportFiles.OrderBy(x => x.Language)];
                    foreach (var reportFile in reportFiles)
                    {
                        var fileName = Path.Combine(CurrentDirectory, Json.solution, reportFile.Language, reportFile.FileName);
                        if (!File.Exists(fileName))
                        {
                            await FileHelper.ForceWriteAllTextAsync(fileName, reportFile.Content);
                            SpectreLog.ActionWithLevel0(CliAction.CREATED, $"{reportFile.FileName} [{reportFile.Language}]", "to:", $"..{fileName.Substring(CurrentDirectory.Length)}");
                        }
                        else
                        {
                            var newFileName = FileHelper.GeNextFileName(fileName);
                            await FileHelper.ForceWriteAllTextAsync(newFileName, reportFile.Content);
                            SpectreLog.ActionWithLevel1(CliAction.DUPLICATED, $"{reportFile.FileName} [{reportFile.Language}]", "to:", $"..{newFileName}");
                        }
                        i++;
                    }
                }
            }
            SpectreLog.WriteLine();
            SpectreLog.ActionWithLevel0("END");
        }
    }
}