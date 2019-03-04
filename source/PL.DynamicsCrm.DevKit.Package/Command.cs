using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.IO;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Description;
using System.Text;
using System.Windows.Forms;
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
        public const int CommandWebResourceId = 0x0100;
        public const int CommandPluginId = 0x0200;
        public static readonly Guid CommandSetWebResource = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");
        public static readonly Guid CommandSetPlugin = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8be");

        private static IMenuCommandService MenuService;
        private static DTE Dte;

        public static async Task InitializeAsync(AsyncPackage package)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            MenuService = await package.GetServiceAsync((typeof(IMenuCommandService))) as OleMenuCommandService ?? throw new ArgumentNullException(nameof(MenuService));
            Dte = await package.GetServiceAsync(typeof(DTE)) as DTE ?? throw new ArgumentNullException(nameof(Dte));

            var cmdWebResourceId = new CommandID(CommandSetWebResource, CommandWebResourceId);
            var cmdWebResource = new OleMenuCommand((s, e) => ExecuteWebResource(package), cmdWebResourceId);
            cmdWebResource.BeforeQueryStatus += CommandWebResource_BeforeQueryStatus;
            MenuService.AddCommand(cmdWebResource);

            var cmdPluginId = new CommandID(CommandSetPlugin, CommandPluginId);
            var cmdPlugin = new OleMenuCommand((s, e) => ExecutePlugin(package), cmdPluginId);
            cmdPlugin.BeforeQueryStatus += CommandPlugin_BeforeQueryStatus;
            MenuService.AddCommand(cmdPlugin);
        }

        private static void CommandPlugin_BeforeQueryStatus(object sender, EventArgs e)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            if (!(Dte.ActiveDocument.Language.Equals("CSharp", StringComparison.OrdinalIgnoreCase))) return;
            var textDocument = (TextDocument)Dte.ActiveDocument.Object();
            var activePoint = textDocument.Selection.ActivePoint;
            var currentClass = Dte.ActiveDocument.ProjectItem.FileCodeModel.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);
            if (!(currentClass is CodeClass @class)) return;
            if (!IsImplementedInterface(@class)) return;
            if (HasAttributeCrmPluginRegistration(@class)) return;
            menuCommand.Visible = true;
        }

        private static bool HasAttributeCrmPluginRegistration(CodeClass @class)
        {
            foreach(CodeAttribute attribue in @class.Attributes)
            {
                if (attribue.Name == "CrmPluginRegistration") return true;
            }
            return false;
        }

        private static bool IsImplementedInterface(CodeClass @class)
        {
            foreach (CodeInterface @interface in @class.ImplementedInterfaces)
            {
                if (@interface.FullName == "Microsoft.Xrm.Sdk.IPlugin") return true;
            }
            foreach (var @base in @class.Bases)
            {
                if (!(@base is CodeClass baseClass)) continue;
                if (IsImplementedInterface(baseClass)) return true;
            }
            return false;
        }

        private static bool IsImplementedAttribute(CodeClass @class)
        {
            if (@class.Attributes.Count == 0) return false;
            foreach(CodeAttribute attribute in @class.Attributes){
                var t = string.Empty;
            }
            return true;
        }

        private static bool IsAddReferenceToSharedProject()
        {
            var projects = (object[])Dte.ActiveSolutionProjects;
            if (projects.Count() == 0) return false;
            var project = (Project)projects[0];
            var solutionFullName = Dte.Solution.FullName;
            var shareProjectName = Utility.GetSharedProject(solutionFullName);
            var content = File.ReadAllText(project.FullName);
            return content.IndexOf($"{shareProjectName}.projitems") > 0;
        }

        private static bool IsAddPackagesConfigAndInstall()
        {
            var projects = (object[])Dte.ActiveSolutionProjects;
            if (projects.Count() == 0) return false;
            var project = (Project)projects[0];
            var package = $"{Path.GetDirectoryName(project.FullName)}\\packages.config";
            if (!File.Exists(package)) return false;
            var context = File.ReadAllText(package);
            return context.IndexOf("PL.DynamicsCrm.DevKit.Cli") > 0;
        }


        private static void ExecutePlugin(AsyncPackage package)
        {
            var textDocument = (TextDocument)Dte.ActiveDocument.Object();
            var activePoint = textDocument.Selection.ActivePoint;
            var currentClass = Dte.ActiveDocument.ProjectItem.FileCodeModel.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);

            if (!(currentClass is CodeClass @class)) return;
            if (!Utility.SharedProjectExist(Dte))
            {
                MessageBox.Show("Please add shared project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (!IsAddReferenceToSharedProject())
            {
                MessageBox.Show("Please add reference shared project to current project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if(!IsAddPackagesConfigAndInstall())
            {
                MessageBox.Show("Please install PL.DynamicsCrm.DevKit.Cli from Nuget and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            @class.AddAttribute("CrmPluginRegistration", CrmPluginRegistrationData());
        }

        private static string CrmPluginRegistrationData()
        {
            return "ABCDEF";
        }

        private static void CommandWebResource_BeforeQueryStatus(object sender, EventArgs e)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            var item =  Dte.SelectedItems.Item(1);
            if (item == null || item.Name == null) return;
            var extension = item.Name.Substring(item.Name.LastIndexOf(".") + 1);
            var allowExtions = new List<string> { "html", "htm", "js", "png", "gif", "jpg", "jpeg", "css", "ico", "xml", "xsl", "xslt", "xap" };
            if (!allowExtions.Contains(extension)) return;
            if (item.Name.EndsWith(".intellisense.js")) return;
            var solutionFullName = Dte.Solution.FullName;
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            if (!File.Exists(devKitCrmConfigFile)) return;
            menuCommand.Visible = true;
        }

        private static void ExecuteWebResource(AsyncPackage package)
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
                Dte.StatusBar.Text = "";
                MessageBox.Show("Default Crm connection not found!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (config.SolutionPrefix == null)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "";
                MessageBox.Show("PL.DynamicsCrm.DevKit.json config not found SolutionPrefix data", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
                    Dte.StatusBar.Text = "";
                    MessageBox.Show("Connecting Fail!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
                Dte.StatusBar.Text = "";
                MessageBox.Show("Web resource not found!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
                    Dte.StatusBar.Text = "";
                    MessageBox.Show("Error Updating And Publishing Web Resources To CRM.See the Output Window for additional details.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
                else
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "Updated And Published Web Resource";
                    return;
                }
            }
            catch (FaultException<OrganizationServiceFault>)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "";
                MessageBox.Show("Updated And Published Web Resource fail.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            catch
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "";
                MessageBox.Show("Updated And Published Web Resource fail.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

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
