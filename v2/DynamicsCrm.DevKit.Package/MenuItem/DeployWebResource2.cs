using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using DynamicsCrm.DevKit.SdkLogin;
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
        public static readonly Guid CommandSetDeployWebResource2 = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bd");

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

        private static void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        internal static void Click(DTE dte)
        {
            try
            {
                dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
                var check = UtilityPackage.GetGlobal("CrmServiceClient", dte);
                if (check == null)
                {
                    var form = new FormConnection2(dte);
                    if (form.ShowDialog() == DialogResult.Cancel) return;
                    if (form.Check == "1")
                    {
                        var loginForm = new FormLogin();
                        loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                        loginForm.ShowDialog();
                        if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                        {
                            UtilityPackage.SetGlobal("CrmUrl", XrmHelper.ConnectedUrl(loginForm.CrmConnectionMgr.CrmSvc), dte);
                            UtilityPackage.SetGlobal("CrmServiceClient", loginForm.CrmConnectionMgr.CrmSvc, dte);
                        }
                        else
                        {
                            UtilityPackage.SetDTEStatusBar(dte, "Connection failed", true);
                            return;
                        }
                    }
                    else
                    {
                        UtilityPackage.SetGlobal("CrmUrl", XrmHelper.ConnectedUrl(form.CrmServiceClient), dte);
                        UtilityPackage.SetGlobal("CrmServiceClient", form.CrmServiceClient, dte);
                    }
                }
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
                        UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] WebResource: {fileName} not found", true);
                    }
                    else
                    {
                        var formItems = new FormItems(CrmItemType.WebResouce, resources, fullFileName, crmUrl);
                        if (formItems.ShowDialog() == DialogResult.OK)
                        {
                            resourceId = formItems.ResourceId;
                            var resourceName = formItems.ResourceName;
                            AddToCache(dte, fullFileName, resourceId, resourceName);
                            DeployWebResource(dte, crmServiceClient, crmUrl, fullFileName, fileName, resourceId);
                        }
                    }
                }
            }
            catch
            {
                UtilityPackage.SetDTEStatusBar(dte, "Deploy WebResource failed", true);
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
                UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Deploy WebResource failed", true);
                return;
            }
            var webResouceName = string.Empty;
            var selected = DevKitSetting.SelectedWebResources.Where(x => x.FullFileName == fullFileName).FirstOrDefault();
            if (selected != null) webResouceName = selected.WebResourceName;
            UtilityPackage.SetDTEStatusBar(dte, $"Deployed: [{fileName}] to [{webResouceName}]", true);
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
