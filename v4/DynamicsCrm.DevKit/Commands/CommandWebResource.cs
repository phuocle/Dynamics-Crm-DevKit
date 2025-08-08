using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
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
                await VS.StatusBar.ShowMessageAsync($"[{CacheHelper.GetConnectedUrl(serviceClient)}]: Connected");
                var t = string.Empty;

                // TODO: Implement web resource deployment logic
                // This is a placeholder implementation showing how to use the cached ServiceClient
                // var fullFileName = VsixHelper.SelectedItem.FullFileName.Substring((await GetSolutionFolderAsync()).Length);
                // var deployWebResourceCache = vsixSessionCache.GetWebResource(fullFileName);
                // if (deployWebResourceCache != null)
                //     await DeployWebResourceAsync(serviceClient, deployWebResourceCache);
                // else
                // {
                //     var webResources = XrmHelper.GetWebResources(serviceClient, fullFileName);
                //     var deployWebResource = vsixSessionCache.GetExistingWebResource(serviceClient, webResources, fullFileName);
                //     if (deployWebResource != null)
                //     {
                //         await DeployWebResourceAsync(serviceClient, deployWebResource);
                //     }
                // }
            }
            else
            {
                await VS.StatusBar.ShowMessageAsync("Connection failed or cancelled by user");
            }

            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task<string> GetSolutionFolderAsync()
        {
            var solution = await VS.Solutions.GetCurrentSolutionAsync();
            return Path.GetDirectoryName(solution.FullPath);
        }

        //private static async Task DeployWebResourceAsync(ServiceClient service, DeployWebResource deployWebResource)
        //{
        //    await VS.StatusBar.ShowMessageAsync($"Deploying ...");
        //    var ok = await DeployWebResourceAsync(service, deployWebResource.File, deployWebResource.WebResourceId);
        //    await VS.StatusBar.ShowMessageAsync($"Deployed !!!");
        //    if (ok)
        //    {
        //        await VS.StatusBar.ShowMessageAsync($"Publishing ...");
        //        var ok2 = await PublishWebResourceAsync(service, deployWebResource.WebResourceId);
        //        if (ok2)
        //            await VS.StatusBar.ShowMessageAsync($"[{CacheHelper.GetConnectedUrl(service)}]: Deployed/Published [{VsixHelper.SelectedItem.GetPhysicalFile().Name}] to [{deployWebResource.WebResource}]");
        //        else
        //            await VS.StatusBar.ShowMessageAsync($"Publishing failed !!!");
        //    }
        //    else
        //    {
        //        await VS.StatusBar.ShowMessageAsync($"[{CacheHelper.GetConnectedUrl(service)}]: Deploying failed !!!");
        //    }
        //}

        //private static async Task<bool> DeployWebResourceAsync(ServiceClient service, string fullFileName, Guid webResourceId)
        //{
        //    return await Task.Run(async () =>
        //    {
        //        try
        //        {
        //            var solutionFolder = await GetSolutionFolderAsync();
        //            fullFileName = $"{solutionFolder}\\{fullFileName}";
        //            var webResource = new Entity("webresource") { Id = webResourceId };
        //            webResource["content"] = Convert.ToBase64String(File.ReadAllBytes(fullFileName));
        //            var request = new UpdateRequest { Target = webResource };
        //            var response = (UpdateResponse)service.Execute(request);
        //            return true;
        //        }
        //        catch
        //        {
        //            return false;
        //        }
        //    });
        //}

        //private static async Task<bool> PublishWebResourceAsync(ServiceClient service, Guid webResourceId)
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
            this.Command.Visible = Helper.IsWebResourceExtension(VsixHelper.SelectedItem.Extension);
        }
    }
}
