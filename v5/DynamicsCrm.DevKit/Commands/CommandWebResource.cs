using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandDeployWebResource)]
    public class CommandWebResource : BaseCommand<CommandWebResource>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
            var serviceClient = await CacheHelper.GetServiceClientAsync();

            if (serviceClient == null)
            {
                await VS.StatusBar.ClearAsync();
                await VS.MessageBox.ShowErrorAsync("Connection cancelled by user");
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                return;
            }

            var url = serviceClient.ConnectedUrl();
            await ShowStatusAsync(url, "Connected");

            var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();

            // Handle TypeScript files: build first, then deploy the resulting .js file
            var extension = Path.GetExtension(fullFileName).ToLowerInvariant();
            if (extension == ".ts")
            {
                await ShowStatusAsync(url, "Building TypeScript ...");
                var (buildSuccess, jsFilePath, buildError) = await BuildTypeScriptAsync(fullFileName);

                if (!buildSuccess)
                {
                    await VS.StatusBar.ClearAsync();
                    await ShowStatusAndErrorAsync(url, buildError);
                    await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                    return;
                }

                // Use the built JS file for deployment
                fullFileName = jsFilePath;
            }

            var fullFileNameForCrm = fullFileName.Substring((await VsixHelper.GetSolutionFolderAsync()).Length);
            var deployWebResourceCache = CacheHelper.GetWebResource(fullFileNameForCrm);

            if (deployWebResourceCache != null && deployWebResourceCache.WebResourceId != Guid.Empty)
            {
                await DeployWebResourceAsync(serviceClient, deployWebResourceCache, fullFileName);
            }
            else
            {
                var webResources = await XrmHelper.GetWebResourcesAsync(serviceClient, fullFileNameForCrm);
                var form = new FormWebResource(webResources, fullFileNameForCrm);

                if (form.ShowModal() == true)
                {
                    CacheHelper.SetWebResourceCache(fullFileNameForCrm, form.SelectedWebResource);
                    await VsixHelper.SaveDynamicsCrmDevKitConfigJsonAsync(form.SelectedWebResource);
                    await DeployWebResourceAsync(serviceClient, form.SelectedWebResource, fullFileName);
                }
                else
                {
                    await VS.StatusBar.ClearAsync();
                    await ShowStatusAndErrorAsync(url, "No web resource selected for deployment");
                }
            }

            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task DeployWebResourceAsync(ServiceClient serviceClient, DeployWebResource deployWebResource, string fullFileName)
        {
            const int wait = 2;
            var url = serviceClient.ConnectedUrl();

            await ShowStatusAsync(url, "Deploying ...");
            var (ok, message) = await XrmHelper.DeployWebResourceAsync(serviceClient, fullFileName, deployWebResource.WebResourceId);

            if (ok)
            {
                await ShowStatusAsync(url, "Deployed");
                await Helper.DelayAsync(wait);
                await ShowStatusAsync(url, "Publishing ...");

                var (ok2, message2) = await XrmHelper.PublishWebResourceAsync(serviceClient, deployWebResource.WebResourceId);
                if (ok2)
                {
                    await ShowStatusAsync(url, $"[{fullFileName}] published to: [{deployWebResource.WebResource}]");
                }
                else
                {
                    await ShowStatusAndErrorAsync(url, $"Publishing Failed with message: {message2}");
                }
            }
            else
            {
                await ShowStatusAndErrorAsync(url, $"Deploying Failed with message: {message}");
            }
        }

        private static async Task<(bool success, string jsFilePath, string error)> BuildTypeScriptAsync(string tsFilePath)
        {
            var directory = Path.GetDirectoryName(tsFilePath);
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(tsFilePath);

            // Find the project root directory containing package.json
            var projectRoot = directory;
            while (!string.IsNullOrEmpty(projectRoot))
            {
                if (File.Exists(Path.Combine(projectRoot, "package.json")))
                {
                    break;
                }
                projectRoot = Path.GetDirectoryName(projectRoot);
            }

            if (string.IsNullOrEmpty(projectRoot))
            {
                return (false, null, "Could not find package.json in any parent directory");
            }

            var processStartInfo = new ProcessStartInfo
            {
                FileName = "cmd.exe",
                Arguments = $"/c npm run debug {fileNameWithoutExtension}",
                WorkingDirectory = projectRoot,
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true
            };

            using (var process = new Process { StartInfo = processStartInfo })
            {
                var output = new StringBuilder();
                var errorOutput = new StringBuilder();

                process.OutputDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) output.AppendLine(args.Data);
                };
                process.ErrorDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) errorOutput.AppendLine(args.Data);
                };

                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();
                await Task.Run(() => process.WaitForExit());

                if (process.ExitCode == 0)
                {
                    // The .js file is output to the build folder
                    var jsFilePath = Path.Combine(projectRoot, "build", fileNameWithoutExtension + ".js");
                    if (File.Exists(jsFilePath))
                    {
                        return (true, jsFilePath, null);
                    }
                    return (false, null, "Build succeeded but .js file not found");
                }
                else
                {
                    return (false, null, $"TypeScript build failed:\n{errorOutput}\n{output}");
                }
            }
        }

        private static async Task ShowStatusAsync(string url, string message)
        {
            await VS.StatusBar.ShowMessageAsync($"[{url}] >>> {message} <<<");
        }

        private static async Task ShowStatusAndErrorAsync(string url, string message)
        {
            var formattedMessage = $"[{url}] >>> {message} <<<";
            await VS.StatusBar.ShowMessageAsync(formattedMessage);
            await VS.MessageBox.ShowErrorAsync(formattedMessage);
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            this.Command.Visible = ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var extension = await VsixHelper.SelectedItem.GetExtensionAsync();
                return Helper.IsWebResourceExtension(extension);
            });
        }
    }
}
