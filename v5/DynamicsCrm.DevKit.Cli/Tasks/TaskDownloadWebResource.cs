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
    public class TaskDownloadWebResource(CommandLineArgs arg, JsonDownloadWebResource json) : ITask
    {
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public string TaskType => $"[{nameof(CliType.downloadwebresources).ToUpper()}]";
        public IOrganizationServiceAsync2 OrgServiceAsync { get; set; } = arg.ServiceClient;
        public CommandLineArgs Arg { get; set; } = arg;
        private JsonDownloadWebResource Json { get; set; } = json;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }

        private DeploymentService _deploymentService;
        private DeploymentService Deployment => _deploymentService ??= new DeploymentService(OrgServiceAsync);
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
                var webResourcesFiles = await Deployment.GetWebResourcesBySolutionAsync(Json.solution);
                if (webResourcesFiles.Count == 0)
                {
                    SpectreLog.ActionWithLevel0("Not found any webresource to download");
                    SpectreLog.WriteLine();
                }
                else
                {
                    var totalDownloadFiles = webResourcesFiles.Count;
                    var len = totalDownloadFiles.ToString().Length;
                    SpectreLog.WriteHighLight("Found: ", $"{totalDownloadFiles}", " webresources");
                    SpectreLog.WriteLine();
                    var i = 1;
                    foreach (var webResourceFile in webResourcesFiles)
                    {
                        var fileName = Path.Combine(CurrentDirectory, Json.solution, webResourceFile.FileName);
                        var directoryName = Path.GetDirectoryName(fileName);
                        if (!Directory.Exists(directoryName)) Directory.CreateDirectory(directoryName ?? throw new InvalidOperationException());
                        byte[] decode = Convert.FromBase64String(webResourceFile.Content);
                        File.WriteAllBytes(fileName, decode);
                        SpectreLog.ActionWithLevel1(CliAction.DOWNLOADED, webResourceFile.FileName, "to:", $"..{fileName.Substring(CurrentDirectory.Length)}");
                        i++;
                    }
                }
            }
            SpectreLog.WriteRequestCounts();
            SpectreLog.WriteLine();
            SpectreLog.ActionWithLevel0("END");
        }
    }
}