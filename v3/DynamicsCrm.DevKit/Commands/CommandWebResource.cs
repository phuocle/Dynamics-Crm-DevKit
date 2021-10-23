using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.CliTasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    public class CommandWebResource
    {
        public const int CommandDeployWebResourceId = 0x0100;
        public static readonly Guid CommandSetDeployWebResource = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        //public const int CommandDeployWebResource2Id = 0x0400;
        //public static readonly Guid CommandSetDeployWebResource2 = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8be");

        //public const int CommandDeployWebResource3Id = 0x0500;
        //public static readonly Guid CommandSetDeployWebResource3 = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        internal static void BeforeQueryStatus(object sender)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = Utility.IsWebResourceExtension(VsixHelper.SelectedItem.Extension);
        }

        internal static async Task ClickDeployWebResourceAsync()
        {
            await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
            var vsixSessionCache = new VsixSessionCache();
            var serviceCache = vsixSessionCache.GetCrmServiceClient();
            if (serviceCache != null)
            {
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.ConnectedUrl(serviceCache)}]: Connected");
                var fullFileName = VsixHelper.SelectedItem.FullFileName;
                var deployWebResourceCache = vsixSessionCache.GetWebResource(fullFileName);
                if (deployWebResourceCache != null)
                    await DeployWebResourceAsync(serviceCache, deployWebResourceCache);
                else
                {
                    var webResources = XrmHelper.GetWebResouces(serviceCache, fullFileName);
                    if (webResources.Count == 0)
                    {
                        var deployNewWebResource = vsixSessionCache.GetNewWebResource(fullFileName);
                        await DeployNewWebResourceAsync(serviceCache, deployNewWebResource);
                    }
                    else
                    {
                        var deployWebResource = vsixSessionCache.GetExistingWebResource(webResources, fullFileName);
                        await DeployWebResourceAsync(serviceCache, deployWebResource);
                    }
                }
            }
            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task DeployWebResourceAsync(CrmServiceClient service, DeployWebResource deployWebResource)
        {
            var task = new CliWebResource(service);
            var fileName = Path.GetFileName(deployWebResource.FullFileName);
            await VS.StatusBar.ShowMessageAsync($"Deploying ...");
            var ok = await task.DeployWebResourceAsync(deployWebResource.FullFileName, deployWebResource.WebResourceId);
            if (ok)
            {
                await VS.StatusBar.ShowMessageAsync($"Deployed !!!");
                await VS.StatusBar.ShowMessageAsync($"Publishing ...");
                var ok2 = await task.PublishWebResourceAsync(deployWebResource.WebResourceId);
                if (ok2)
                    await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.ConnectedUrl(service)}]: Deployed/Published [{fileName}] to [{deployWebResource.WebResourceName}]");
                else
                    await VS.StatusBar.ShowMessageAsync($"Publishing failed !!!");
            }
            else
            {
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.ConnectedUrl(service)}]: Deploying failed !!!");
            }
        }

        private static async Task DeployNewWebResourceAsync(CrmServiceClient service, DeployWebResource deployWebResource)
        {
            var task = new CliWebResource(service);
            var fileName = Path.GetFileName(deployWebResource.FullFileName);
            var ok = await task.DeployWebResourceAsync(deployWebResource.FullFileName, deployWebResource.WebResourceId);
            if (ok)
            {
                await VS.StatusBar.ShowMessageAsync($"Connected: {XrmHelper.ConnectedUrl(service)}");
                await task.PublishWebResourceAsync(deployWebResource.WebResourceId);
                await VS.StatusBar.ShowMessageAsync($"Deployed: [{fileName}] to [{deployWebResource.WebResourceName}]");
            }
            else
            {
                await VS.StatusBar.ShowMessageAsync($"Connected: {XrmHelper.ConnectedUrl(service)}");
            }
        }
    }
}
