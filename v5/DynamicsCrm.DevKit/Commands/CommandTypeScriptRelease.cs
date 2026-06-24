using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    /// <summary>
    /// Command to deploy TypeScript file in Release mode (minified without sourcemap)
    /// Only visible for .ts files
    /// </summary>
    [Command(PackageIds.CommandDeployTypeScriptRelease)]
    public class CommandTypeScriptRelease : BaseCommand<CommandTypeScriptRelease>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            // Save current document before processing (equivalent to Ctrl+S)
            await VsixHelper.ExecuteCommandAsync("File.Save");

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
            await TypeScriptBuildHelper.ShowStatusAsync(url, "Connected");

            var sourceFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();

            // Build TypeScript in Release mode (minified)
            var (success, deployFilePath, error) = await TypeScriptBuildHelper.ProcessTypeScriptForDeploymentAsync(sourceFileName, url, isRelease: true);
            if (!success)
            {
                await VS.StatusBar.ClearAsync();
                await TypeScriptBuildHelper.ShowStatusAsync(url, error);
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                return;
            }
            var fullFileName = deployFilePath;

            var solutionFolder = await VsixHelper.GetSolutionFolderAsync();
            var fullFileNameForCrmCandidates = TypeScriptBuildHelper.GetWebResourcePathCandidates(sourceFileName, fullFileName, solutionFolder);
            var fullFileNameForCrm = fullFileNameForCrmCandidates.Count > 0
                ? fullFileNameForCrmCandidates[0]
                : fullFileName.Substring(solutionFolder.Length);
            var deployWebResourceCache = TypeScriptBuildHelper.GetCachedWebResource(fullFileNameForCrmCandidates, out _);

            if (deployWebResourceCache != null && deployWebResourceCache.WebResourceId != Guid.Empty)
            {
                await DeployWebResourceAsync(serviceClient, deployWebResourceCache, fullFileName);
            }
            else
            {
                var deployment = new DeploymentService(serviceClient);
                var webResources = await TypeScriptBuildHelper.GetWebResourcesAsync(deployment, fullFileNameForCrmCandidates);
                var form = new FormWebResource(webResources, fullFileNameForCrm);

                if (form.ShowModal() == true)
                {
                    foreach (var candidate in fullFileNameForCrmCandidates)
                    {
                        CacheHelper.SetWebResourceCache(candidate, form.SelectedWebResource);
                    }
                    await VsixHelper.SaveDynamicsCrmDevKitConfigJsonAsync(form.SelectedWebResource);
                    await DeployWebResourceAsync(serviceClient, form.SelectedWebResource, fullFileName);
                }
                else
                {
                    await VS.StatusBar.ClearAsync();
                    await TypeScriptBuildHelper.ShowStatusAndErrorAsync(url, "No web resource selected for deployment");
                }
            }

            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task DeployWebResourceAsync(ServiceClient serviceClient, DeployWebResource deployWebResource, string fullFileName)
        {
            const int wait = 2;
            var url = serviceClient.ConnectedUrl();

            var deployment = new DeploymentService(serviceClient);

            await TypeScriptBuildHelper.ShowStatusAsync(url, "Deploying (Release) ...");
            var (ok, message) = await deployment.DeployWebResourceAsync(fullFileName, deployWebResource.WebResourceId);

            if (ok)
            {
                await TypeScriptBuildHelper.ShowStatusAsync(url, "Deployed");
                await Helper.DelayAsync(wait);
                await TypeScriptBuildHelper.ShowStatusAsync(url, "Publishing ...");

                var (ok2, message2) = await deployment.PublishWebResourceAsync(deployWebResource.WebResourceId);
                if (ok2)
                {
                    await TypeScriptBuildHelper.ShowStatusAsync(url, $"[{fullFileName}] published (Release) to: [{deployWebResource.WebResource}]");
                }
                else
                {
                    await TypeScriptBuildHelper.ShowStatusAndErrorAsync(url, $"Publishing Failed with message: {message2}");
                }
            }
            else
            {
                await TypeScriptBuildHelper.ShowStatusAndErrorAsync(url, $"Deploying Failed with message: {message}");
            }
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            // Only show for deployable .ts files (excludes *.form.ts and *.webapi.ts)
            this.Command.Visible = ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();
                return TypeScriptBuildHelper.IsDeployableTypeScript(fullFileName);
            });
        }
    }
}
