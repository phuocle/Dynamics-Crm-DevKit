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
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using PL.DynamicsCrm.DevKit.Shared;
using Task = System.Threading.Tasks.Task;

namespace PL.DynamicsCrm.DevKit.Package
{
    internal sealed class Command
    {
        public const int CommandId = 0x0100;
        public static readonly Guid CommandSet = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");
        private static IMenuCommandService MenuService;
        private static DTE Dte;

        public static async Task InitializeAsync(AsyncPackage package)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            MenuService = await package.GetServiceAsync((typeof(IMenuCommandService))) as OleMenuCommandService ?? throw new ArgumentNullException(nameof(MenuService));
            Dte = await package.GetServiceAsync(typeof(DTE)) as DTE ?? throw new ArgumentNullException(nameof(Dte));
            var cmdId = new CommandID(CommandSet, CommandId);
            var cmd = new OleMenuCommand((s, e) => Execute(package), cmdId);
            cmd.BeforeQueryStatus += cmd_BeforeQueryStatus;
            MenuService.AddCommand(cmd);
        }

        private static void cmd_BeforeQueryStatus(object sender, EventArgs e)
        {
            var menuCommand = sender as OleMenuCommand;
            var item =  Dte.SelectedItems.Item(1);
            if (item == null) return;
            if (item.Name == null) return;
            var extension = item.Name.Substring(item.Name.LastIndexOf(".") + 1);
            var allowExtions = new List<string>
            {
                "html",
                "htm",
                "js",
                "png",
                "gif",
                "jpg",
                "jpeg",
                "css",
                "ico",
                "xml",
                "xsl",
                "xslt",
                "xap"
            };
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

            var solutionFullName = Dte.Solution.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            if (!File.Exists(devKitCrmConfigFile))
            {
                menuCommand.Visible = false;
                return;
            }
            menuCommand.Visible = true;
        }

        private static void Execute(AsyncPackage package)
        {
            Dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
            var activeDocument = Dte.ActiveDocument;
            var solutionFullName = Dte.Solution.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            Dte.StatusBar.Text = "Read PL.DynamicsCrm.DevKit.json config";
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(Dte);
            var defaultConnection = config.CrmConnections.Where(conn => conn.Name == config.DefaultCrmConnection)
                .FirstOrDefault();
            if (defaultConnection == null)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "Default Crm connection not found!";
                return;
            }
            if (config.SolutionPrefix == null)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "PL.DynamicsCrm.DevKit.json config not found SolutionPrefix data";
                return;
            }
            Dte.StatusBar.Text = "Connecting";
            var check = SharedGlobals.GetGlobal("CrmService", Dte);
            if (check == null)
            {
                try
                {
                    var uri = new Uri(defaultConnection.Url);
                    var clientCredentials = new ClientCredentials();
                    clientCredentials.UserName.UserName = defaultConnection.UserName;
                    clientCredentials.UserName.Password = TryDecryptPassword(defaultConnection.Password);
                    check = new OrganizationServiceProxy(uri, null, clientCredentials, null);
                    SharedGlobals.SetGlobal("CrmService", check, Dte);
                }
                catch
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "Connecting Fail!";
                    return;
                }
            }
            var crmService = (OrganizationServiceProxy)SharedGlobals.GetGlobal("CrmService", Dte);
            Dte.StatusBar.Text = "Connected";
            var fileName = activeDocument.FullName;
            var parts = fileName.Split("\\".ToCharArray());
            var condition = string.Empty;
            for (var i = 1; i < parts.Length; i++)
            {
                var value = $"{config.SolutionPrefix}/{parts[i]}/";
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
            if (rows.Entities.Count == 0)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "Web resource not found!";
                return;
            }

            var webResourceId = rows.Entities[0].Id;
            try
            {
                var emRequest = new ExecuteMultipleRequest
                {
                    Requests = new OrganizationRequestCollection(),
                    Settings = new ExecuteMultipleSettings
                    {
                        ContinueOnError = false,
                        ReturnResponses = true
                    }
                };
                var requests = new OrganizationRequestCollection();
                var publishXml = "<importexportxml><webresources>";
                var webResource = new Entity("webresource") { Id = webResourceId };
                var content = File.ReadAllText(fileName);
                webResource["content"] = EncodeString(content);
                var request = new UpdateRequest { Target = webResource };
                requests.Add(request);
                publishXml += "<webresource>{" + webResource.Id + "}</webresource>";
                publishXml += "</webresources></importexportxml>";
                var pubRequest = new PublishXmlRequest { ParameterXml = publishXml };
                requests.Add(pubRequest);
                emRequest.Requests = requests;
                Dte.StatusBar.Text = "Updating & publishing web resource";
                var emResponse = (ExecuteMultipleResponse)crmService.Execute(emRequest);
                var wasError = false;
                foreach (var responseItem in emResponse.Responses)
                {
                    if (responseItem.Fault == null) continue;
                    wasError = true;
                }
                if (wasError)
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "Error Updating And Publishing Web Resources To CRM. See the Output Window for additional details.";
                    return;
                }
                else
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "Updated And Published Web Resource";
                    Dte.StatusBar.Text = "";
                    return;
                }
            }
            catch (FaultException<OrganizationServiceFault>)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "Updated And Published Web Resource fail";
                return;
            }
            catch
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "Updated And Published Web Resource fail";
                return;
            }
        }

        private static string TryDecryptPassword(string password)
        {
            try
            {
                password = EncryptDecrypt.DecryptString(password);
            }
            catch
            {
            }
            return password;
        }

        private static string EncodeString(string value)
        {
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(value));
        }
    }
}
