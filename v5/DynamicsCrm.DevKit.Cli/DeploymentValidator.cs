using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    public class DeploymentValidator
    {
        private readonly ServiceClient _serviceClient;

        private DeploymentService _deploymentService;
        private DeploymentService Deployment => _deploymentService ??= new DeploymentService(_serviceClient);

        public DeploymentValidator(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public async Task<List<string>> ValidateServerDeploymentAsync(CommandLineArgs args, JsonServer json)
        {
            var issues = new List<string>();

            if (string.IsNullOrEmpty(json.solution) || json.solution == "???")
                issues.Add("'solution' is empty or placeholder '???'");

            if (string.IsNullOrEmpty(json.folder) || json.folder == "???")
                issues.Add("'folder' is empty or placeholder '???'");

            if (!string.IsNullOrEmpty(json.solution) && json.solution != "???")
            {
                var result = await Deployment.IsExistSolutionAsync(json.solution);
                if (!result.IsOk)
                    issues.Add($"Solution '{json.solution}' does not exist in the target environment");
            }

            if (!string.IsNullOrEmpty(json.folder) && json.folder != "???")
            {
                var folder = Path.Combine(args.CurrentDirectory, json.folder);
                if (!Directory.Exists(folder))
                    issues.Add($"Folder '{folder}' does not exist");
                else
                {
                    var files = Helper.GetFiles(folder, json.includefiles ?? ["*.dll"], json.excludefiles ?? []);
                    if (files.Count == 0)
                        issues.Add($"No matching files found in '{folder}'");
                }
            }

            return issues;
        }

        public async Task<List<string>> ValidateWebResourceDeploymentAsync(CommandLineArgs args, JsonWebResource json)
        {
            var issues = new List<string>();

            if (string.IsNullOrEmpty(json.solution) || json.solution == "???")
                issues.Add("'solution' is empty or placeholder '???'");

            if (string.IsNullOrEmpty(json.rootfolder) || json.rootfolder == "???")
                issues.Add("'rootfolder' is empty or placeholder '???'");

            if (!string.IsNullOrEmpty(json.solution) && json.solution != "???")
            {
                var result = await Deployment.IsExistSolutionAsync(json.solution);
                if (!result.IsOk)
                    issues.Add($"Solution '{json.solution}' does not exist in the target environment");
            }

            if (!string.IsNullOrEmpty(json.rootfolder) && json.rootfolder != "???")
            {
                var folder = Path.Combine(args.CurrentDirectory, json.rootfolder);
                if (!Directory.Exists(folder))
                    issues.Add($"Folder '{folder}' does not exist");
                else
                {
                    var files = Helper.GetFiles(folder, json.includefiles ?? ["*.*"], json.excludefiles ?? []);
                    var invalidFiles = files.Where(f => !Helper.IsWebResourceExtension(Path.GetExtension(f))).ToList();
                    if (invalidFiles.Count > 0)
                        issues.Add($"{invalidFiles.Count} file(s) have unsupported web resource extensions");
                }
            }

            return issues;
        }
    }
}
