using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.IO;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Description;
using System.Text;
using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Package
{
    internal sealed class Command1
    {
        public const int CommandId = 0x0100;

        public static readonly Guid CommandSet = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");

        private readonly Microsoft.VisualStudio.Shell.Package package;

        private Command1(Microsoft.VisualStudio.Shell.Package package)
        {
            this.package = package ?? throw new ArgumentNullException("package");
            OleMenuCommandService commandService = this.ServiceProvider.GetService(typeof(IMenuCommandService)) as OleMenuCommandService;
            if (commandService != null)
            {
                var menuCommandID = new CommandID(CommandSet, CommandId);
                var menuItem = new OleMenuCommand(MenuItemCallback, menuCommandID);
                menuItem.BeforeQueryStatus += MenuItem_BeforeQueryStatus;
                menuItem.Visible = false;
                commandService.AddCommand(menuItem);
            }
        }

        private void MenuItem_BeforeQueryStatus(object sender, EventArgs e)
        {
            OleMenuCommand menuCommand = sender as OleMenuCommand;
            var dte = (DTE)ServiceProvider.GetService(typeof(DTE));
            SelectedItem item = dte.SelectedItems.Item(1);
            if (item == null) return;
            if (item.Name == null) return;
            var extension = item.Name.Substring(item.Name.LastIndexOf(".") + 1);
            var allowExtions = new List<string> { "html", "htm", "js", "png", "gif", "jpg", "jpeg", "css", "ico", "xml", "xsl", "xslt", "xap" };
            if (!allowExtions.Contains(extension))
            {
                menuCommand.Visible = false;
                return;
            }
            if (item.Name.EndsWith(".intellisense.js"))
            {
                menuCommand.Visible = false;
                return;
            }
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            if (!File.Exists(devKitCrmConfigFile)) {
                menuCommand.Visible = false;
                return;
            }
            menuCommand.Visible = true;
        }

        public static Command1 Instance
        {
            get;
            private set;
        }

        private IServiceProvider ServiceProvider
        {
            get
            {
                return this.package;
            }
        }

        public static void Initialize(Microsoft.VisualStudio.Shell.Package package)
        {
            Instance = new Command1(package);
        }

        private void ShowError(string message)
        {
            VsShellUtilities.ShowMessageBox(ServiceProvider, message, "ERROR", OLEMSGICON.OLEMSGICON_INFO, OLEMSGBUTTON.OLEMSGBUTTON_OK, OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
        }

        private void MenuItemCallback(object sender, EventArgs e)
        {
            var dte = (EnvDTE.DTE)this.ServiceProvider.GetService(typeof(EnvDTE.DTE));
            dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
            var activeDocument = dte.ActiveDocument;
            var solutionFullName = dte.Solution.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";

            dte.StatusBar.Text = "Read PL.DynamicsCrm.DevKit.json config";
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(dte);
            var defaultConnection = config.CrmConnections.Where(conn => conn.Name == config.DefaultCrmConnection).FirstOrDefault();
            if (defaultConnection == null)
            {
                ShowError("Default Crm connection not found!");
                goto CLEAR_STATUS;
            }
            if (string.IsNullOrEmpty(config.SolutionPrefix))
            {
                ShowError("PL.DynamicsCrm.DevKit.json config not found SolutionPrefix data");
                goto CLEAR_STATUS;
            }
            dte.StatusBar.Text = "Connecting ...";
            var check = SharedGlobals.GetGlobal("CrmService", dte);
            if (check == null)
            {
                try
                {
                    var uri = new Uri(defaultConnection.Url);
                    var clientCredentials = new ClientCredentials();
                    clientCredentials.UserName.UserName = defaultConnection.UserName;
                    clientCredentials.UserName.Password = defaultConnection.Password;
                    check = new OrganizationServiceProxy(uri, null, clientCredentials, null);
                    SharedGlobals.SetGlobal("CrmService", check, dte);
                }
                catch
                {
                    ShowError("Connecting Fail!");
                    goto CLEAR_STATUS;
                }
            }
            var crmService = (OrganizationServiceProxy)SharedGlobals.GetGlobal("CrmService", dte);
            dte.StatusBar.Text = "Connected ...";

            var fileName = activeDocument.FullName;
            var parts = fileName.Split("\\".ToCharArray());
            var condition = string.Empty;
            for (var i = 1; i < parts.Length; i++)
            {
                var value = $"{config.SolutionPrefix}/{parts[i]}/";
                for(var j = i + 1; j <parts.Length; j++)
                    value += $"{parts[j]}/";
                if (value.EndsWith("/")) value = value.TrimEnd("/".ToCharArray());
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
            if (rows.Entities.Count == 0)
            {
                ShowError("Web resource not found!");
                goto CLEAR_STATUS;
            }
            var webResourceId = rows.Entities[0].Id;
            try
            {
                ExecuteMultipleRequest emRequest = new ExecuteMultipleRequest
                {
                    Requests = new OrganizationRequestCollection(),
                    Settings = new ExecuteMultipleSettings
                    {
                        ContinueOnError = false,
                        ReturnResponses = true
                    }
                };
                OrganizationRequestCollection requests = new OrganizationRequestCollection();
                string publishXml = "<importexportxml><webresources>";
                Entity webResource = new Entity("webresource") { Id = webResourceId };
                string content = File.ReadAllText(fileName);
                webResource["content"] = EncodeString(content);
                UpdateRequest request = new UpdateRequest { Target = webResource };
                requests.Add(request);
                publishXml += "<webresource>{" + webResource.Id + "}</webresource>";
                publishXml += "</webresources></importexportxml>";
                PublishXmlRequest pubRequest = new PublishXmlRequest { ParameterXml = publishXml };
                requests.Add(pubRequest);
                emRequest.Requests = requests;
                dte.StatusBar.Text = "Updating & publishing web resource...";

                ExecuteMultipleResponse emResponse = (ExecuteMultipleResponse)crmService.Execute(emRequest);
                bool wasError = false;
                foreach (var responseItem in emResponse.Responses)
                {
                    if (responseItem.Fault == null) continue;
                    wasError = true;
                }
                if (wasError)
                {
                    ShowError("Error Updating And Publishing Web Resources To CRM. See the Output Window for additional details.");
                    goto CLEAR_STATUS;
                }
                else
                {
                    dte.StatusBar.Text = "Updated And Published Web Resource";
                    goto CLEAR_STATUS;
                }
            }
            catch (FaultException<OrganizationServiceFault> crmEx)
            {
                ShowError("Error Updating And Publishing Web Resource To CRM: " + crmEx.Message + Environment.NewLine + crmEx.StackTrace);
                goto CLEAR_STATUS;
            }
            catch (Exception ex)
            {
                ShowError("Error Updating And Publishing Web Resource To CRM: " + ex.Message + Environment.NewLine + ex.StackTrace);
            }
CLEAR_STATUS:
            dte.StatusBar.Clear();
            dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
        }

        private string EncodeString(string value)
        {
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(value));
        }
    }
}
