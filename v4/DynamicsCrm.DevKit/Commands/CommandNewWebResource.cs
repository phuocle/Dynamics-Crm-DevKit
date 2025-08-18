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
    [Command(PackageIds.CommandDeployNewWebResource)]
    public class CommandNewWebResource : BaseCommand<CommandNewWebResource>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
            var serviceClient = await CacheHelper.GetServiceClientAsync();
            if (serviceClient != null)
            {
                await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Connected <<<");
                var solutions = await XrmHelper.GetSolutionsAsync(serviceClient);
                var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();
                var fullFileNameForCrm = fullFileName.Substring((await VsixHelper.GetSolutionFolderAsync()).Length);
                var form = new FormWebResource(true, fullFileNameForCrm, solutions);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    var webResourceId = await DeployNewWebResourceAsync(serviceClient, form.SelectedNewWebResource, fullFileName);
                    form.SelectedNewWebResource.WebResourceId = webResourceId;
                    var update = form.SelectedNewWebResource;
                    update.WebResourceId = webResourceId;
                    CacheHelper.SetWebResourceCache(fullFileNameForCrm, update);
                    await VsixHelper.SaveDynamicsCrmDevKitConfigJsonAsync(update);
                }
                else
                {
                    await VS.StatusBar.ClearAsync();
                    await VS.MessageBox.ShowErrorAsync($"[{serviceClient.ConnectedUrl()}] >>> No web resource selected for deployment <<<");
                }
            }
            else
            {
                await VS.StatusBar.ClearAsync();
                await VS.MessageBox.ShowErrorAsync($"[{serviceClient.ConnectedUrl()}] >>> Connection cancelled by user <<<");
            }
            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task<Guid> DeployNewWebResourceAsync(ServiceClient serviceClient, DeployWebResource deployWebResource, string fullFileName)
        {
            int wait = 2;
            await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Deploying ... <<<");
            var (webResouceId, message) = await XrmHelper.DeployNewWebResourceAsync(serviceClient, fullFileName, deployWebResource.WebResource);
            if (webResouceId != Guid.Empty)
            {
                await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Deployed <<<");
                await Helper.DelayAsync(wait);
                await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Adding to solution ... <<<");
                await Helper.DelayAsync(wait);
                await XrmHelper.AddWebResourceToSolutionAsync(serviceClient, webResouceId, deployWebResource.SolutionUniqueName);
                await Helper.DelayAsync(wait);
                await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Added to solution <<<");
                await Helper.DelayAsync(wait);
                await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Publishing ... <<<");
                var (ok2, message2) = await XrmHelper.PublishWebResourceAsync(serviceClient, webResouceId);
                if (ok2)
                {
                    await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> [{fullFileName}] published to: [{deployWebResource.WebResource}] <<<");
                }
                else
                {
                    await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Publishing Failed with message: {message2} <<<");
                    await VS.MessageBox.ShowErrorAsync($"[{serviceClient.ConnectedUrl()}] >>> Publishing Failed with message: {message2} <<<");
                }
            }
            else
            {
                await VS.StatusBar.ShowMessageAsync($"[{serviceClient.ConnectedUrl()}] >>> Deploying Failed with message: {message} <<<");
                await VS.MessageBox.ShowErrorAsync($"[{serviceClient.ConnectedUrl()}] >>> Deploying Failed with message: {message} <<<");
            }
            return webResouceId;
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
