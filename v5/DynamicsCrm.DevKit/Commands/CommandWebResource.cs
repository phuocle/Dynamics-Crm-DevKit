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
    [Command(PackageIds.CommandDeployWebResource)]
    public class CommandWebResource : BaseCommand<CommandWebResource>
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

            var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();

            // Handle TypeScript files: build first, then deploy the resulting .js file
            var (success, deployFilePath, error) = await TypeScriptBuildHelper.ProcessTypeScriptForDeploymentAsync(fullFileName, url);
            if (!success)
            {
                await VS.StatusBar.ClearAsync();
                await TypeScriptBuildHelper.ShowStatusAsync(url, error);
                await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                return;
            }
            fullFileName = deployFilePath;

            var fullFileNameForCrm = fullFileName.Substring((await VsixHelper.GetSolutionFolderAsync()).Length);
            var deployWebResourceCache = CacheHelper.GetWebResource(fullFileNameForCrm);

            if (deployWebResourceCache != null && deployWebResourceCache.WebResourceId != Guid.Empty)
            {
                await DeployWebResourceAsync(serviceClient, deployWebResourceCache, fullFileName);
            }
            else
            {
                var webResources = await new DeploymentService(serviceClient).GetWebResourcesAsync(fullFileNameForCrm);
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
                    await TypeScriptBuildHelper.ShowStatusAndErrorAsync(url, "No web resource selected for deployment");
                }
            }

            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task DeployWebResourceAsync(ServiceClient serviceClient, DeployWebResource deployWebResource, string fullFileName)
        {
            const int wait = 2;
            var url = serviceClient.ConnectedUrl();

            await TypeScriptBuildHelper.ShowStatusAsync(url, "Deploying ...");
            var (ok, message) = await new DeploymentService(serviceClient).DeployWebResourceAsync(fullFileName, deployWebResource.WebResourceId);

            if (ok)
            {
                await TypeScriptBuildHelper.ShowStatusAsync(url, "Deployed");
                await Helper.DelayAsync(wait);
                await TypeScriptBuildHelper.ShowStatusAsync(url, "Publishing ...");

                var (ok2, message2) = await new DeploymentService(serviceClient).PublishWebResourceAsync(deployWebResource.WebResourceId);
                if (ok2)
                {
                    await TypeScriptBuildHelper.ShowStatusAsync(url, $"[{fullFileName}] published to: [{deployWebResource.WebResource}]");
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
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var extension = await VsixHelper.SelectedItem.GetExtensionAsync();
                var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();
                
                // Check if file is a valid web resource extension
                var isVisible = Helper.IsWebResourceExtension(extension);
                
                // For .ts files, exclude *.form.ts and *.webapi.ts (generated files, not deployable)
                if (isVisible && extension.Equals(".ts", StringComparison.OrdinalIgnoreCase))
                {
                    isVisible = TypeScriptBuildHelper.IsDeployableTypeScript(fullFileName);
                }
                
                this.Command.Visible = isVisible;
                
                // Change label for deployable TypeScript files to indicate Debug mode
                if (TypeScriptBuildHelper.IsDeployableTypeScript(fullFileName))
                {
                    this.Command.Text = "Deploy WebResource (Debug)";
                }
                else
                {
                    this.Command.Text = "Deploy WebResource";
                }
            });
        }
    }
}
