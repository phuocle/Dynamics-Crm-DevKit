using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
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
