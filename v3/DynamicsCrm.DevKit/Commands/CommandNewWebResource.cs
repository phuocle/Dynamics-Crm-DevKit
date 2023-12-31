using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
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
                var fullFileName2 = VsixHelper.SelectedItem.FullFileName.Substring((await VsixHelper.GetSolutionFolderAsync()).Length);
                var deployNewWebResource = vsixSessionCache.GetNewWebResource(serviceCache, fullFileName, fullFileName2, XrmHelper.GetAllSolutions(serviceCache));
                if (deployNewWebResource != null) {
                    await DeploymentNewWebResourceAsync(serviceCache, deployNewWebResource);
                }
                vsixSessionCache.AddWebResourcesToCached(deployNewWebResource);
            }
            await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
        }

        private static async Task DeploymentNewWebResourceAsync(CrmServiceClient service, DeployWebResource deployWebResource)
        {
            await VS.StatusBar.ShowMessageAsync($"Deploying ...");
            var ok = await DeployNewWebResourceAsync(service, deployWebResource);
            await VS.StatusBar.ShowMessageAsync($"Deployed !!!");
            if (ok)
            {
                await VS.StatusBar.ShowMessageAsync($"Publishing ...");
                var ok2 = await PublishWebResourceAsync(service, deployWebResource.WebResourceId);
                if (ok2)
                    await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.ConnectedUrl(service)}]: Deployed/Published [{VsixHelper.SelectedItem.FileName}] to [{deployWebResource.WebResource}]");
                else
                    await VS.StatusBar.ShowMessageAsync($"Publishing failed !!!");
            }
            else
            {
                await VS.StatusBar.ShowMessageAsync($"[{XrmHelper.ConnectedUrl(service)}]: Deploying failed !!!");
            }
        }

        private static async Task<bool> DeployNewWebResourceAsync(CrmServiceClient service, DeployWebResource deployWebResource)
        {
            deployWebResource.WebResourceId = await GetNewWebResourceAsync(service, VsixHelper.SelectedItem.FullFileName, deployWebResource.WebResource);
            await AddWebResourceToSolutionAsync(service, deployWebResource.WebResourceId, deployWebResource.SolutionUniqueName, deployWebResource.WebResource);
            return true;
        }

        private static async Task AddWebResourceToSolutionAsync(CrmServiceClient service, Guid webResourceId, string solutionUniqueName, string webResourceName)
        {
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 61,
                ComponentId = webResourceId,
                SolutionUniqueName = solutionUniqueName
            };
            service.Execute(request);
            await VS.StatusBar.ShowMessageAsync($"[{webResourceName}] Added to solution: [{solutionUniqueName}]");
        }

        private static async Task<Guid> GetNewWebResourceAsync(CrmServiceClient service, string fullFileName, string webResourceName)
        {
            var fileContent = Convert.ToBase64String(File.ReadAllBytes(fullFileName));
            var webResource = new Entity("webresource")
            {
                ["name"] = webResourceName,
                ["displayname"] = webResourceName,
                ["content"] = fileContent
            };
            var webResourceFileInfo = new FileInfo(fullFileName);
            var fileType = WebResourceWebResourceType.ScriptJScript;
            switch (webResourceFileInfo.Extension.ToLower().TrimStart('.'))
            {
                case "html":
                case "htm":
                    fileType = WebResourceWebResourceType.WebpageHtml;
                    break;
                case "js":
                    fileType = WebResourceWebResourceType.ScriptJScript;
                    break;
                case "png":
                    fileType = WebResourceWebResourceType.PngFormat;
                    break;
                case "gif":
                    fileType = WebResourceWebResourceType.GifFormat;
                    break;
                case "jpg":
                case "jpeg":
                    fileType = WebResourceWebResourceType.JpgFormat;
                    break;
                case "css":
                    fileType = WebResourceWebResourceType.StyleSheetCss;
                    break;
                case "ico":
                    fileType = WebResourceWebResourceType.IcoFormat;
                    break;
                case "xml":
                    fileType = WebResourceWebResourceType.DataXml;
                    break;
                case "xsl":
                case "xslt":
                    fileType = WebResourceWebResourceType.StyleSheetXsl;
                    break;
                case "xap":
                    fileType = WebResourceWebResourceType.SilverlightXap;
                    break;
                case "resx":
                    fileType = WebResourceWebResourceType.StringResx;
                    break;
                case "svg":
                    fileType = WebResourceWebResourceType.SvgFormat;
                    break;
            }
            webResource["webresourcetype"] = new OptionSetValue((int)fileType);
            if (fileType == WebResourceWebResourceType.StringResx)
            {
                var fileName = webResourceFileInfo.Name.Substring(0, webResourceFileInfo.Name.Length - webResourceFileInfo.Extension.Length);
                var arr = fileName.Split(".".ToCharArray());
                if (int.TryParse(arr[arr.Length - 1], out var languagecode))
                {
                    var req = new RetrieveProvisionedLanguagesRequest();
                    var res = (RetrieveProvisionedLanguagesResponse)service.Execute(req);
                    if (res.RetrieveProvisionedLanguages.Contains(languagecode))
                    {
                        webResource["languagecode"] = languagecode;
                    }
                    else
                    {
                        throw new Exception($"Language code not found: {languagecode}");
                    }
                }
            }
            var webResourceId = service.Create(webResource);
            await VS.StatusBar.ShowMessageAsync($"Created WebResource: [{webResourceName}]");
            return webResourceId;
        }

        private static async Task<bool> PublishWebResourceAsync(CrmServiceClient service, Guid webResourceId)
        {
            return await Task.Run(() => {
                try
                {
                    var publishXml = $"<importexportxml><webresources><webresource>{webResourceId}</webresource></webresources></importexportxml>";
                    var request = new PublishXmlRequest { ParameterXml = publishXml };
                    var response = (PublishXmlResponse)service.Execute(request);
                    return true;
                }
                catch
                {
                    return false;
                }
            });
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            this.Command.Visible = Utility.IsWebResourceExtension(VsixHelper.SelectedItem.Extension);
        }
    }
}
