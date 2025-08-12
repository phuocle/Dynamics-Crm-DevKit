using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
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
            await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
            var serviceClient = await CacheHelper.GetServiceClientAsync();
            if (serviceClient != null)
            {
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.GetConnectedUrl(serviceClient)}] >>> Connected <<<");
                var fullFileName = VsixHelper.SelectedItem.FullFileName.Substring((await VsixHelper.GetSolutionFolderAsync()).Length);
                var deployWebResourceCache = CacheHelper.GetWebResource(fullFileName);
                if (deployWebResourceCache != null)
                    await DeployWebResourceAsync(serviceClient, deployWebResourceCache);
                 else
                 {
                    var webResources = XrmHelper.GetWebResources(serviceClient, fullFileName);
                    var form = new FormWebResource(webResources, fullFileName);
                    var ok = form.ShowModal() ?? false;
                    if (ok)
                    {
                        CacheHelper.SetWebResourceCache(fullFileName, form.SelectedWebResource);
                        await VsixHelper.SaveDynamicsCrmDevKitConfigJsonAsync(form.SelectedWebResource);
                        await DeployWebResourceAsync(serviceClient, form.SelectedWebResource);
                    }
                    else
                    {
                        await VS.MessageBox.ShowErrorAsync("No web resource selected for deployment.");
                    }
                 }
            }
            else
            {
                await VS.MessageBox.ShowErrorAsync("Connection cancelled by user");
            }
            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task DeployWebResourceAsync(ServiceClient serviceClient, DeployWebResource deployWebResource)
        {
            await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.GetConnectedUrl(serviceClient)}] >>> Deploying ... <<<");
            var ok = await XrmHelper.DeployWebResourceAsync(serviceClient, VsixHelper.SelectedItem.FullFileName, deployWebResource.WebResourceId);
            if (ok)
            {
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.GetConnectedUrl(serviceClient)}] >>> Deployed <<<");
                await Helper.DelayAsync(2);
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.GetConnectedUrl(serviceClient)}] >>> Publishing ... <<<");
                var ok2 = await XrmHelper.PublishWebResourceAsync(serviceClient, deployWebResource.WebResourceId);
                if (ok2)
                {
                    await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.GetConnectedUrl(serviceClient)}] >>> Published from: [{VsixHelper.SelectedItem.FullFileName}] to: [{deployWebResource.WebResource}] <<<");
                }
                else
                {
                    await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.GetConnectedUrl(serviceClient)}] >>> Publishing Failed <<<");
                }
            }
            else
            {
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.GetConnectedUrl(serviceClient)}] >>> Deploying Failed <<<");
            }
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            this.Command.Visible = Helper.IsWebResourceExtension(VsixHelper.SelectedItem.Extension);
        }
    }
}
