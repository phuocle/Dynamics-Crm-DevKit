using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Wizard;
using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Package.MenuItem
{
    public class DeployWebResource2
    {
        public const int CommandDeployWebResourceId = 0x0100;
        public static readonly Guid CommandSetDeployWebResource = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        public const int CommandDeployWebResource2Id = 0x0400;
        public static readonly Guid CommandSetDeployWebResource2 = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8be");

        public const int CommandDeployWebResource3Id = 0x0500;
        public static readonly Guid CommandSetDeployWebResource3 = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        internal static void BeforeQueryStatus(object sender, DTE dte)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            try
            {
                if (dte == null || dte.SelectedItems == null || dte.SelectedItems.Count != 1) return;
                var selectedItem = dte.SelectedItems.Item(1);
                if (selectedItem.ProjectItem == null) return;
                var fileName = selectedItem.ProjectItem.FileNames[0];
                var extension = Path.GetExtension(fileName);
                var allowExtions = new List<string> { ".htm", ".html", ".css", ".js", ".xml", ".png", ".jpg", ".gif", ".xap", ".xsl", "xslt.", ".ico", ".svg", ".resx" };
                if (!allowExtions.Contains(extension)) return;
                menuCommand.Visible = true;
            }
            catch { }
        }

        internal static void ClickNew(DTE dte)
        {
            try
            {
                dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
                if (UtilityPackage.GetCrmServiceClient(dte))
                {
                    var crmServiceClient = (CrmServiceClient)UtilityPackage.GetGlobal("CrmServiceClient", dte);
                    var crmUrl = (string)UtilityPackage.GetGlobal("CrmUrl", dte);

                    UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Connected");

                    var fullFileName = dte.SelectedItems.Item(1).ProjectItem.FileNames[0];
                    var fileName = Path.GetFileName(fullFileName);
                    var solutions = XrmHelper.GetAllSolutions(crmServiceClient);
                    var formItems = new FormItems(CrmItemType.NewWebResource, solutions, fullFileName, crmUrl);
                    formItems.SetWebResourceName(Utility.GetCurrentProjectDirectoryName(dte));
                    if (formItems.ShowDialog() == DialogResult.OK)
                    {
                        var solutionUniqueName = formItems.SolutionUniqueName;
                        var resourceName = formItems.ResourceName;
                        var resourceId = DeployNewWebResource(dte, crmServiceClient, crmUrl, fullFileName, resourceName, solutionUniqueName);
                        AddToCache(dte, fullFileName, resourceId, resourceName);
                    }
                }
                dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
            }
            catch
            {
                UtilityPackage.SetDTEStatusBarAndStopAnimate(dte, "Deploy WebResource failed");
            }
        }

        internal static void Click(DTE dte)
        {
            try
            {
                dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
                if (UtilityPackage.GetCrmServiceClient(dte))
                {
                    var crmServiceClient = (CrmServiceClient)UtilityPackage.GetGlobal("CrmServiceClient", dte);
                    var crmUrl = (string)UtilityPackage.GetGlobal("CrmUrl", dte);
                    UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Connected");
                    var fullFileName = dte.SelectedItems.Item(1).ProjectItem.FileNames[0];
                    var fileName = Path.GetFileName(fullFileName);
                    var resourceId = GetCachedResourceId(fullFileName, dte);
                    if (resourceId != Guid.Empty)
                    {
                        DeployWebResource(dte, crmServiceClient, crmUrl, fullFileName, fileName, resourceId);
                    }
                    else
                    {
                        var resources = GetResources(crmServiceClient, fullFileName);
                        if (resources.Count == 0)
                        {
                            UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] WebResource: {fileName} not found");
                        }
                        else
                        {
                            var formItems = new FormItems(CrmItemType.WebResource, resources, fullFileName, crmUrl);
                            if (formItems.ShowDialog() == DialogResult.OK)
                            {
                                resourceId = formItems.ObjectId;
                                var resourceName = formItems.ResourceName;
                                AddToCache(dte, fullFileName, resourceId, resourceName);
                                DeployWebResource(dte, crmServiceClient, crmUrl, fullFileName, fileName, resourceId);
                            }
                        }
                    }
                }
                dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
            }
            catch
            {
                UtilityPackage.SetDTEStatusBarAndStopAnimate(dte, "Deploy WebResource failed");
            }
        }

        private static void AddToCache(DTE dte, string fullFileName, Guid resourceId, string resourceName)
        {
            var webResources = (List<NameValueGuid>)UtilityPackage.GetGlobal("WebResources", dte);
            if (webResources == null) webResources = new List<NameValueGuid>();
            webResources.Add(new NameValueGuid
            {
                Name = fullFileName,
                Value = resourceId
            });
            UtilityPackage.SetGlobal("WebResources", webResources, dte);
            var selected = DevKitSetting.SelectedWebResources.Where(x => x.FullFileName == fullFileName).FirstOrDefault();
            if (selected != null) DevKitSetting.SelectedWebResources.Remove(selected);
            DevKitSetting.SelectedWebResources.Add(new SavedMappingWebResource
            {
                FullFileName = fullFileName,
                WebResourceName = resourceName
            });
        }

        private static Guid GetCachedResourceId(string fullFileName, DTE dte)
        {
            var webResources = (List<NameValueGuid>)UtilityPackage.GetGlobal("WebResources", dte);
            if (webResources == null) return Guid.Empty;
            var webResource = webResources.Where(x => x.Name == fullFileName).FirstOrDefault();
            if (webResource == null) return Guid.Empty;
            return webResource.Value;
        }

        private static Guid DeployNewWebResource(DTE dte, CrmServiceClient crmServiceClient, string crmUrl, string fullFileName, string webResourceName, string solutionUniqueName)
        {
            var webResourceId = GetWebResource(crmServiceClient, webResourceName);
            var fileName = Path.GetFileNameWithoutExtension(fullFileName);
            if (webResourceId == Guid.Empty)
            {
                webResourceId = DeployNewWebResource(dte, crmServiceClient, fullFileName, webResourceName);
                AddWebResourceToSolution(dte, crmServiceClient, solutionUniqueName, webResourceId, webResourceName);
                PublishWebResource(dte, crmServiceClient, webResourceId, crmUrl, webResourceName, fileName);
            }
            else
            {
                DeployWebResource(dte, crmServiceClient, crmUrl, fullFileName, fileName, webResourceId);
                AddWebResourceToSolution(dte, crmServiceClient, solutionUniqueName, webResourceId, webResourceName);
                PublishWebResource(dte, crmServiceClient, webResourceId, crmUrl, webResourceName, fileName);
            }
            return webResourceId;
        }

        private static void PublishWebResource(DTE dte, CrmServiceClient crmServiceClient, Guid webResourceId, string crmUrl, string webResourceName, string fileName)
        {
            var publishXml = $"<importexportxml><webresources><webresource>{webResourceId}</webresource></webresources></importexportxml>";
            var request = new PublishXmlRequest { ParameterXml = publishXml };
            crmServiceClient.Execute(request);
            UtilityPackage.SetDTEStatusBar(dte, $"Deployed: [{fileName}] to [{webResourceName}]");
        }

        private static Guid DeployNewWebResource(DTE dte, CrmServiceClient crmServiceClient, string fullFileName, string webResourceName)
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
                    var res = (RetrieveProvisionedLanguagesResponse)crmServiceClient.Execute(req);
                    if (res.RetrieveProvisionedLanguages.Contains(languagecode))
                        webResource["languagecode"] = languagecode;
                    else
                    {
                        throw new Exception($"Language code not found: {languagecode}");
                    }
                }
            }
            UtilityPackage.SetDTEStatusBar(dte, $"Created WebResource: [{webResourceName}]");
            return crmServiceClient.Create(webResource);
        }

        private static void AddWebResourceToSolution(DTE dte, CrmServiceClient crmServiceClient, string solutionUniqueName, Guid webResourceId, string webResourceName)
        {
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 61,
                ComponentId = webResourceId,
                SolutionUniqueName = solutionUniqueName
            };
            crmServiceClient.Execute(request);
            UtilityPackage.SetDTEStatusBar(dte, $"[{webResourceName}] Added to solution: [{solutionUniqueName}]");
        }

        private static Guid GetWebResource(CrmServiceClient crmServiceClient, string webResourceName)
        {
            var fetchData = new
            {
                name = webResourceName
            };
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='webresourceid' />
    <filter>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return Guid.Empty;
            return rows.Entities[0].Id;
        }

        private static void DeployWebResource(DTE dte, CrmServiceClient crmServiceClient, string crmUrl, string fullFileName, string fileName, Guid webResourceId)
        {
            var requests = new OrganizationRequestCollection();

            var webResource = new Entity("webresource") { Id = webResourceId };
            var content = File.ReadAllText(fullFileName);
            webResource["content"] = Convert.ToBase64String(Encoding.UTF8.GetBytes(content));
            var request = new UpdateRequest { Target = webResource };
            requests.Add(request);

            var publishXml = $"<importexportxml><webresources><webresource>{webResource.Id}</webresource></webresources></importexportxml>";
            var pubRequest = new PublishXmlRequest { ParameterXml = publishXml };
            requests.Add(pubRequest);

            var multipleRequest = new ExecuteMultipleRequest
            {
                Requests = requests,
                Settings = new ExecuteMultipleSettings
                {
                    ContinueOnError = false,
                    ReturnResponses = true
                }
            };
            UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Updating & Publishing WebResource");
            var multipleResponse = (ExecuteMultipleResponse)crmServiceClient.Execute(multipleRequest);
            foreach (var response in multipleResponse.Responses)
            {
                if (response.Fault == null) continue;
                UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Deploy WebResource failed");
                return;
            }
            var webResourceName = string.Empty;
            var selected = DevKitSetting.SelectedWebResources.Where(x => x.FullFileName == fullFileName).FirstOrDefault();
            if (selected != null) webResourceName = selected.WebResourceName;
            UtilityPackage.SetDTEStatusBar(dte, $"Deployed: [{fileName}] to [{webResourceName}]");
        }

        private static List<NameValueGuid> GetResources(CrmServiceClient crmServiceClient, string fullFileName)
        {
            //fullFileName = C:\src\github\phuocle\Dynamics-Crm-DevKit\test\DownloadWebResources\2.after\WebProject\entities\Lead.js
            var parts = fullFileName.Split(@"\".ToCharArray());
            var condition = string.Empty;
            for(var i = parts.Length - 1; i > 0; i--)
            {
                var value = "/";
                for(var j = i; j < parts.Length; j++)
                {
                    value += parts[j] + "/" ;
                }
                value = value.TrimEnd("/".ToCharArray());
                condition += $"<condition attribute='name' operator='ends-with' value='{value}'/>" + "\r\n";
            }
            var fileNameWithoutExtension = "/" + Path.GetFileNameWithoutExtension(fullFileName) + "/" ;
            condition += $"<condition attribute='name' operator='like' value='%{fileNameWithoutExtension}%'/>" + "\r\n";

            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <filter type='or'>
      {condition}
    </filter>
  </entity>
</fetch>";
            var webResources = new List<NameValueGuid>();
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach(var entity in rows.Entities)
            {
                webResources.Add(new NameValueGuid
                {
                    Name = entity.GetAttributeValue<string>("name") ?? string.Empty,
                    Value = entity.Id
                });
            }
            return webResources;
        }
    }
}
