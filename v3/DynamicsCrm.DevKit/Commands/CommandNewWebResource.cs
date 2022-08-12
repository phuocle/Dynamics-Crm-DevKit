using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandDeployNewWebResource)]
    public class CommandNewWebResource : BaseCommand<CommandNewWebResource>
    {
        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);

            var vsixSessionCache = new VsixSessionCache();
            var serviceCache = vsixSessionCache.GetCrmServiceClient();
            if (serviceCache != null)
            {
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.ConnectedUrl(serviceCache)}]: Connected");
                var fullFileName = VsixHelper.SelectedItem.FullFileName.Substring((await VsixHelper.GetActiveProjectFolderAsync()).Length);
                //var deployWebResourceCache = vsixSessionCache.GetWebResource(fullFileName);
                //if (deployWebResourceCache != null)
                //    await DeployWebResourceAsync(serviceCache, deployWebResourceCache);
                //else
                //{
                //    var webResources = XrmHelper.GetWebResources(serviceCache, fullFileName);
                //    //if (webResources.Count == 0)
                //    //{
                var deployNewWebResource = vsixSessionCache.GetNewWebResource(serviceCache, fullFileName, XrmHelper.GetAllSolutions(serviceCache));
                //    //    if (deployNewWebResource != null) {
                //    //        await DeployNewWebResourceAsync(serviceCache, deployNewWebResource);
                //    //    }
                //    //}
                //    //else
                //    //{
                //    var deployWebResource = vsixSessionCache.GetExistingWebResource(serviceCache, webResources, fullFileName);
                //    if (deployWebResource != null)
                //    {
                //        await DeployWebResourceAsync(serviceCache, deployWebResource);
                //    }
                //    //}
                //}
            }
            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        //private static async Task DeployNewWebResourceAsync(CrmServiceClient service, DeployWebResource deployWebResource)
        //{
        //    var task = new CliWebResource(service);
        //    var fileName = Path.GetFileName(deployWebResource.FullFileName);
        //    var ok = await task.DeployWebResourceAsync(deployWebResource.FullFileName, deployWebResource.WebResourceId);
        //    if (ok)
        //    {
        //        await VS.StatusBar.ShowMessageAsync($"Connected: {XrmHelper.ConnectedUrl(service)}");
        //        await task.PublishWebResourceAsync(deployWebResource.WebResourceId);
        //        await VS.StatusBar.ShowMessageAsync($"Deployed: [{fileName}] to [{deployWebResource.WebResourceName}]");
        //    }
        //    else
        //    {
        //        await VS.StatusBar.ShowMessageAsync($"Connected: {XrmHelper.ConnectedUrl(service)}");
        //    }
        //}

        //private static async Task<bool> PublishWebResourceAsync(CrmServiceClient service, Guid webResourceId)
        //{
        //    return await Task.Run(() => {
        //        try
        //        {
        //            var publishXml = $"<importexportxml><webresources><webresource>{webResourceId}</webresource></webresources></importexportxml>";
        //            var request = new PublishXmlRequest { ParameterXml = publishXml };
        //            var response = (PublishXmlResponse)service.Execute(request);
        //            return true;
        //        }
        //        catch
        //        {
        //            return false;
        //        }
        //    });
        //}

        protected override void BeforeQueryStatus(EventArgs e)
        {
            this.Command.Visible = Utility.IsWebResourceExtension(VsixHelper.SelectedItem.Extension);
        }
    }
}
