using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;

namespace DynamicsCrm.DevKit.Package.MenuItem
{
    public class DeployWebResource
    {
        public const int CommandDeployWebResourceId = 0x0100;
        public static readonly Guid CommandSetDeployWebResource = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        internal static void BeforeQueryStatus(object sender, DTE dte)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            var item = dte.SelectedItems.Item(1);
            if (item == null || item.Name == null) return;
            var extension = item.Name.Substring(item.Name.LastIndexOf(".") + 1);
            var allowExtions = new List<string> { "html", "htm", "js", "png", "gif", "jpg", "jpeg", "css", "ico", "xml", "xsl", "xslt", "xap" };
            if (!allowExtions.Contains(extension)) return;
            if (item.Name.EndsWith(".intellisense.js")) return;
            var solutionFullName = dte.Solution.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var jsonFile = $"{fInfo.DirectoryName}\\DynamicsCrm.DevKit.Cli.json";
            if (!File.Exists(jsonFile)) return;
            menuCommand.Visible = true;
        }

        internal static void Click(DTE dte)
        {
            try
            {
                dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
                var config = UtilityPackage.IsValid(dte);
                if (config == null) return;
                UtilityPackage.SetDTEStatusBar(dte, " !!! Read DynamicsCrm.DevKit.Cli.json config !!! ");
                var check = UtilityPackage.GetGlobal("CrmService", dte);
                if (check == null)
                {
                    var connection = UtilityPackage.IsConnection(config.CrmConnection);
                    if (connection == null)
                    {
                        UtilityPackage.SetDTEStatusBar(dte, " !!! Connection Dynamics CRM  failed !!! ", true);
                        return;
                    }
                    UtilityPackage.SetGlobal("CrmService", connection, dte);
                }
                var crmService = (IOrganizationService)UtilityPackage.GetGlobal("CrmService", dte);
                UtilityPackage.SetDTEStatusBar(dte, " !!! Connected Dynamics CRM !!! ");
                var webResourceId = IsFoundWebResource(dte, crmService, config.JsonWebResource.prefix);
                if (webResourceId == Guid.Empty)
                {
                    UtilityPackage.SetDTEStatusBar(dte, " !!! WebResource not found !!! ", true);
                    return;
                }
                var requests = new OrganizationRequestCollection();

                var webResource = new Entity("webresource") { Id = webResourceId };
                var content = File.ReadAllText(dte.ActiveDocument.FullName);
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
                UtilityPackage.SetDTEStatusBar(dte, " !!! Updating & publishing WebResource !!! ");
                var multipleResponse = (ExecuteMultipleResponse)crmService.Execute(multipleRequest);
                foreach (var response in multipleResponse.Responses)
                {
                    if (response.Fault == null) continue;
                    UtilityPackage.SetDTEStatusBar(dte, " !!! Deploy WebResource failed !!! ", true);
                    return;
                }
                UtilityPackage.SetDTEStatusBar(dte, " !!! Deploy WebResource succeeded !!! ", true);
            }
            catch
            {
                UtilityPackage.SetDTEStatusBar(dte," !!! Deploy WebResource failed !!! ", true);
            }
        }

        private static Guid IsFoundWebResource(DTE dte, IOrganizationService crmService, string prefix)
        {
            var fileName = dte.ActiveDocument.FullName;
            var parts = fileName.Split("\\".ToCharArray());
            var condition = string.Empty;
            for (var i = 1; i < parts.Length; i++)
            {
                var value = $"{prefix}/{parts[i]}/";
                for (var j = i + 1; j < parts.Length; j++)
                    value += $"{parts[j]}/";
                if (value.EndsWith("/")) value = value.TrimEnd("/".ToCharArray());
                if (value.StartsWith("/")) value = value.Substring(1);
                condition += $"<condition attribute='name' operator='ends-with' value='{value}'/>";
            }
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <filter type='or'>
      {condition}
    </filter>
  </entity>
</fetch>";
            var rows = crmService.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return Guid.Empty;
            return rows.Entities[0].Id;
        }
    }
}
