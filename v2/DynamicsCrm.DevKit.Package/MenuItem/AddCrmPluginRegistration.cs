using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using DynamicsCrm.DevKit.SdkLogin;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Wizard;
using EnvDTE;
using EnvDTE80;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Package.MenuItem
{
    public class AddCrmPluginRegistration
    {

        public const int CommandAddCrmPluginRegistrationId = 0x0200;
        public static readonly Guid CommandSetAddCrmPluginRegistration = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8be");
        private enum ImageTypeEnum
        {
            PreImage = 0,
            PostImage = 1,
            Both = 2
        }
        private class CrmPluginImage
        {
            public string Name { get; set; }
            public string Alias { get; set; }
            public ImageTypeEnum Type { get; set; }
            public string Attributes { get; set; }
        }

        internal static void BeforeQueryStatus(object sender, DTE dte)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            if (!(dte?.ActiveDocument?.Language?.Equals("CSharp", StringComparison.OrdinalIgnoreCase)) ?? false) return;
            var textDocument = (TextDocument)dte.ActiveDocument.Object();
            var activePoint = textDocument.Selection.ActivePoint;
            var currentClass = dte?.ActiveDocument?.ProjectItem?.FileCodeModel?.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);
            if (currentClass == null) return;
            if (!(currentClass is CodeClass @class)) return;
            if (@class.IsAbstract) return;
            if (!@class.IsCodeType) return;
            if (!HasImplementedPlugin(@class) && !HasImplementedWorkflow(@class)) return;
            if (HasAttributeCrmPluginRegistration(@class)) return;
            menuCommand.Visible = true;
        }

        internal static void Click(DTE dte)
        {
            var textDocument = (TextDocument)dte.ActiveDocument.Object();
            var activePoint = textDocument.Selection.ActivePoint;
            var currentClass = dte.ActiveDocument.ProjectItem.FileCodeModel.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);
            if (!(currentClass is CodeClass @class)) return;
            if (!Utility.SharedProjectExist(dte))
            {
                MessageBox.Show("Please add DynamicsCrm.DevKit Shared project and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (!IsAddReferenceToSharedProject(dte))
            {
                MessageBox.Show("Please add reference DynamicsCrm.DevKit Shared project to current project and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (!IsAddPackagesConfigAndInstall(dte))
            {
                MessageBox.Show("Please install DynamicsCrm.DevKit.Cli from Nuget and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (HasImplementedPlugin(@class))
            {
                var attributes = CrmPluginRegistrationDataForPlugin(dte, currentClass.FullName);
                if (attributes.Count > 0)
                {
                    foreach (var attribute in attributes)
                        @class.AddAttribute("CrmPluginRegistration", attribute);
                    AddImportSharedProjectIfNeed(dte);
                }
                else
                    MessageBox.Show("DynamicsCrm.DevKit not found any plugin step register with this class.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else if (HasImplementedWorkflow(@class))
            {
                var attributes = CrmPluginRegistrationDataForWorkflow(dte, currentClass.FullName);
                if (attributes.Count > 0)
                {
                    foreach (var attribute in attributes)
                        @class.AddAttribute("CrmPluginRegistration", attribute);
                    AddImportSharedProjectIfNeed(dte);
                }
                else
                    MessageBox.Show("DynamicsCrm.DevKit not found any workflow step register with this class.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private static List<string> CrmPluginRegistrationDataForWorkflow(DTE dte, string fullName)
        {
            CrmServiceClient crmServiceClient = null;
            Shared.Models.CrmConnection CrmConnection = null;
            var list = new List<string>();
            var form = new FormConnection2(dte);
            if (form.ShowDialog() == DialogResult.Cancel) return list;
            if (form.Check == "1")
            {
                var loginForm = new FormLogin();
                loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                loginForm.ShowDialog();
                if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                {
                    crmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                }
                else
                {
                    return list;
                }
            }
            else
            {
                CrmConnection = form.CrmConnection;
                crmServiceClient = form.CrmServiceClient;
            }

            if (form.Check == "1")
            {
                var deployText = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.workflow.deploy.debug.bat");
                deployText = deployText
                    .Replace("set CrmConnection=\"$CrmConnectionString$\"\r\n", string.Empty)
                    .Replace("/conn:%CrmConnection%", "/sdklogin:\"yes\"")
                    .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte.ActiveDocument.ProjectItem.ContainingProject.FullName));
                AddDeployBatIfNeed(dte, deployText);
            }
            else
            {
                var crmConnectionString = XrmHelper.BuildConnectionString(CrmConnection);
                var deployText = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.workflow.deploy.debug.bat");
                deployText = deployText
                    .Replace("$CrmConnectionString$", crmConnectionString)
                    .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte.ActiveDocument.ProjectItem.ContainingProject.FullName));
                AddDeployBatIfNeed(dte, deployText);
            }
            var fetchData = new
            {
                ismanaged = "0",
                isworkflowactivity = "1",
                typename = fullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='name' />
    <attribute name='workflowactivitygroupname' />
    <attribute name='description' />
    <attribute name='typename' />
    <attribute name='assemblyname' />
    <attribute name='friendlyname' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='isworkflowactivity' operator='eq' value='{fetchData.isworkflowactivity/*1*/}'/>
      <condition attribute='typename' operator='eq' value='{fetchData.typename/*CustomWorkflow.RetrieveUsers*/}'/>
    </filter>
    <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' alias='a'>
      <attribute name='isolationmode' />
    </link-entity>
  </entity>
</fetch>";

            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return list;
            foreach (var row in rows.Entities)
            {
                var name = row.GetAttributeValue<string>("name");
                var friendlyname = row.GetAttributeValue<string>("friendlyname");
                var description = row.GetAttributeValue<string>("description");
                var workflowactivitygroupname = row.GetAttributeValue<string>("workflowactivitygroupname");
                var isolationMode = GetAliasedValue<OptionSetValue>(row, "a.isolationmode").Value;
                var isolationModeName = isolationMode == 0 ? "IsolationModeEnum.None" : "IsolationModeEnum.Sandbox";
                var attribute = string.Empty;
                attribute += $"\"{name}\"";
                attribute += $", \"{friendlyname}\"";
                attribute += $", \"{description}\"";
                attribute += $", \"{workflowactivitygroupname}\"";
                attribute += $", {isolationModeName}";
                list.Add(attribute);
            }
            return list;

        }

        private static void AddImportSharedProjectIfNeed(DTE dte)
        {
            if (!(dte.ActiveDocument.ProjectItem.FileCodeModel is FileCodeModel2 fileCodeModel2)) return;
            var solutionFullName = dte.Solution.FullName;
            var shareProjectName = Utility.GetSharedProject(dte);
            var foundNamespace = false;
            foreach (var element in fileCodeModel2.CodeElements)
            {
                if (!(element is CodeImport codeImport)) continue;
                if (codeImport.Namespace == shareProjectName)
                {
                    foundNamespace = true;
                    break;
                }
            }
            if (foundNamespace) return;
            fileCodeModel2.AddImport(shareProjectName);
        }

        private static List<CrmPluginImage> GetPluginImages(CrmServiceClient crmServiceClient, string fullName, Guid sdkMessageProcessingStepId)
        {
            var list = new List<CrmPluginImage>();
            var fetchData = new
            {
                ismanaged = "0",
                iscustomizable = "1",
                sdkmessageprocessingstepid = sdkMessageProcessingStepId,
                typename = fullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstepimage'>
    <attribute name='entityalias' />
    <attribute name='name' />
    <attribute name='imagetype' />
    <attribute name='attributes' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable/*1*/}'/>
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid/*87862893-2f3c-e911-a81f-000d3a17c02e*/}'/>
    </filter>
    <link-entity name='sdkmessageprocessingstep' from='sdkmessageprocessingstepid' to='sdkmessageprocessingstepid' link-type='inner' alias='a'>
      <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='inner' alias='b'>
        <filter type='and'>
          <condition attribute='typename' operator='eq' value='{fetchData.typename/*AccountPlugin.PostDeleteAccount*/}'/>
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach (var row in rows.Entities)
            {
                list.Add(new CrmPluginImage
                {
                    Alias = row.GetAttributeValue<string>("entityalias"),
                    Name = row.GetAttributeValue<string>("name"),
                    Attributes = row.GetAttributeValue<string>("attributes"),
                    Type = (ImageTypeEnum)row.GetAttributeValue<OptionSetValue>("imagetype").Value
                });
            }
            return list;
        }

        private static T GetAliasedValue<T>(Entity entity, string name)
        {
            var aliased = entity.GetAttributeValue<AliasedValue>(name);
            if (aliased == null) return default(T);
            if (typeof(T) == typeof(EntityReference) && aliased.Value is Guid)
                return (T)(object)new EntityReference(aliased.EntityLogicalName, (Guid)aliased.Value);
            if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference)
                return (T)(object)((EntityReference)aliased.Value).Id;
            return (T)aliased.Value;
        }

        private static void AddDeployBatIfNeed(DTE dte, string content)
        {
            var deploy = $"{Path.GetDirectoryName(dte.ActiveDocument.ProjectItem.ContainingProject.FullName)}\\deploy.debug.bat";
            if (File.Exists(deploy)) return;
            Utility.ForceWriteAllTextWithoutUTF8(deploy, content);
            dte.ActiveDocument.ProjectItem.ContainingProject.ProjectItems.AddFromFile(deploy);
            dte.ActiveDocument.ProjectItem.ContainingProject.Save();
        }

        private static void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        private static List<string> CrmPluginRegistrationDataForPlugin(DTE dte, string fullName)
        {
            CrmServiceClient crmServiceClient = null;
            Shared.Models.CrmConnection CrmConnection = null;
            var list = new List<string>();
            var form = new FormConnection2(dte);
            if (form.ShowDialog() == DialogResult.Cancel) return list;
            if (form.Check == "1")
            {
                var loginForm = new FormLogin();
                loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                loginForm.ShowDialog();
                if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                {
                    crmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                }
                else
                {
                    return list;
                }
            }
            else
            {
                CrmConnection = form.CrmConnection;
                crmServiceClient = form.CrmServiceClient;
            }
            if (form.Check == "1")
            {
                var deployText = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.plugin.deploy.debug.bat");
                deployText = deployText
                    .Replace("set CrmConnection=\"$CrmConnectionString$\"\r\n", string.Empty)
                    .Replace("/conn:%CrmConnection%", "/sdklogin:\"yes\"")
                    .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte.ActiveDocument.ProjectItem.ContainingProject.FullName));
                AddDeployBatIfNeed(dte, deployText);
            }
            else
            {
                var crmConnectionString = XrmHelper.BuildConnectionString(CrmConnection);
                var deployText = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.plugin.deploy.debug.bat");
                deployText = deployText
                    .Replace("$CrmConnectionString$", crmConnectionString)
                    .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte.ActiveDocument.ProjectItem.ContainingProject.FullName));
                AddDeployBatIfNeed(dte, deployText);
            }

            var fetchData = new
            {
                ismanaged = "0",
                iscustomizable = "1",
                typename = fullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='filteringattributes' />
    <attribute name='name' />
    <attribute name='impersonatinguserid' />
    <attribute name='rank' />
    <attribute name='description' />
    <attribute name='stage' />
    <attribute name='supporteddeployment' />
    <attribute name='componentstate' />
    <attribute name='asyncautodelete' />
    <attribute name='mode' />
    <attribute name='configuration' />
    <attribute name='statecode' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable/*1*/}'/>
    </filter>
    <link-entity name='sdkmessage' from='sdkmessageid' to='sdkmessageid' alias='m'>
      <attribute name='name' />
    </link-entity>
    <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='inner' alias='t'>
      <filter type='and'>
        <condition attribute='typename' operator='eq' value='{fetchData.typename/*AccountPlugin.PostDeleteAccount*/}'/>
      </filter>
      <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' link-type='inner' alias='p'>
        <attribute name='isolationmode' />
      </link-entity>
    </link-entity>
    <link-entity name='sdkmessagefilter' from='sdkmessagefilterid' to='sdkmessagefilterid' link-type='inner' alias='f'>
      <attribute name='primaryobjecttypecode' />
    </link-entity>
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='outer' alias='s'>
      <attribute name='secureconfig' />
    </link-entity>
  </entity>
</fetch>";

            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return list;
            foreach (var row in rows.Entities)
            {
                var message = GetAliasedValue<string>(row, "m.name");
                var entity = GetAliasedValue<string>(row, "f.primaryobjecttypecode");
                var stage = row.GetAttributeValue<OptionSetValue>("stage").Value;
                var stageName = stage == 10 ? "StageEnum.PreValidation" : (stage == 20 ? "StageEnum.PreOperation" : "StageEnum.PostOperation");
                var mode = row.GetAttributeValue<OptionSetValue>("mode").Value;
                var modeName = mode == 0 ? "ExecutionModeEnum.Synchronous" : "ExecutionModeEnum.Asynchronous";
                var filteringAttributes = row.GetAttributeValue<string>("filteringattributes");
                var name = row.GetAttributeValue<string>("name");
                var rank = row.GetAttributeValue<int>("rank");
                var isolationMode = GetAliasedValue<OptionSetValue>(row, "p.isolationmode").Value;
                var isolationModeName = isolationMode == 0 ? "IsolationModeEnum.None" : "IsolationModeEnum.Sandbox";
                var asyncautodelete = row.GetAttributeValue<bool>("asyncautodelete");
                var description = row.GetAttributeValue<string>("description");
                var supportedDeployment = row.GetAttributeValue<OptionSetValue>("supporteddeployment").Value;
                var status = row.GetAttributeValue<OptionSetValue>("statecode").Value;
                var configuration = row.GetAttributeValue<string>("configuration");
                var secureconfig = GetAliasedValue<string>(row, "s.secureconfig");
                var impersonatinguserid = row.GetAttributeValue<EntityReference>("impersonatinguserid");

                var attribute = string.Empty;
                attribute += $"\"{message}\"";
                attribute += $", \"{entity}\"";
                attribute += $", {stageName}";
                attribute += $", {modeName}";
                attribute += $", \"{filteringAttributes}\",\r\n\t";
                attribute += $"\"{name}\"";
                attribute += $", {rank}";
                attribute += $", {isolationModeName},\r\n\t";
                if (asyncautodelete)
                    attribute += $"DeleteAsyncOperation = true, ";
                if (description != null)
                    attribute += $"Description = \"{description}\", ";
                if (supportedDeployment == 2)
                {
                    attribute += $"Server = true, Offline = true, ";
                }
                else if (supportedDeployment == 1)
                {
                    attribute += $"Server = false, Offline = true, ";
                }
                if (status == 1)
                {
                    attribute += $"Action = PluginStepOperationEnum.Deactivate, ";
                }
                if (configuration != null)
                {
                    attribute += $"UnSecureConfiguration = \"{configuration}\", ";
                }
                if (secureconfig != null)
                {
                    attribute += $"SecureConfiguration = \"{secureconfig}\", ";
                }
                if (impersonatinguserid != null)
                {
                    attribute += $"RunAs = \"{impersonatinguserid.Name}\", ";
                }
                if (attribute.EndsWith(", "))
                {
                    attribute = attribute.TrimEnd();
                    attribute += "\r\n\t";
                }
                var images = GetPluginImages(crmServiceClient, fullName, row.Id);
                var image = "Image{0}Name = \"{1}\", Image{0}Alias = \"{2}\", Image{0}Type = ImageTypeEnum.{3}, Image{0}Attributes = \"{4}\",\r\n\t";
                if (images.Count > 0)
                {
                    var i = 1;
                    foreach (var item in images)
                    {
                        attribute += string.Format(image, i, item.Name, item.Alias, item.Type.ToString(), item.Attributes);
                        i++;
                        if (i == 5) break;
                    }
                    attribute = attribute.TrimEnd(",\r\n\t".ToCharArray());
                }
                else
                {
                    attribute += string.Format(image, 1, string.Empty, string.Empty, "PreImage", string.Empty);
                    attribute = attribute.TrimEnd(",\r\n\t".ToCharArray());
                }
                list.Add(attribute);
            }
            return list;
        }

        private static bool IsAddPackagesConfigAndInstall(DTE dte)
        {
            var package = $"{Path.GetDirectoryName(dte.ActiveDocument.ProjectItem.ContainingProject.FullName)}\\packages.config";
            if (!File.Exists(package)) return false;
            var context = File.ReadAllText(package);
            return context.IndexOf("DynamicsCrm.DevKit.Cli") > 0;
        }

        private static bool IsAddReferenceToSharedProject(DTE dte)
        {
            var shareProjectName = Utility.GetSharedProject(dte);
            dte.ActiveDocument.ProjectItem.ContainingProject.Save();
            var content = File.ReadAllText(dte.ActiveDocument.ProjectItem.ContainingProject.FullName);
            return content.IndexOf($"{shareProjectName}.projitems") > 0;
        }

        private static bool HasImplementedPlugin(CodeClass @class)
        {
            foreach (CodeInterface @interface in @class.ImplementedInterfaces)
            {
                if (@interface.FullName == "Microsoft.Xrm.Sdk.IPlugin")
                    return true;
            }
            foreach (var @base in @class.Bases)
            {
                if (!(@base is CodeClass baseClass)) continue;
                if (HasImplementedPlugin(baseClass))
                    return true;
            }
            return false;
        }

        private static bool HasImplementedWorkflow(CodeClass @class)
        {
            foreach (var @base in @class.Bases)
            {
                if (!(@base is CodeClass baseClass)) continue;
                if (baseClass.FullName == "System.Activities.CodeActivity")
                    return true;
                if (HasImplementedWorkflow(baseClass))
                    return true;
            }
            return false;
        }

        private static bool HasAttributeCrmPluginRegistration(CodeClass @class)
        {
            foreach (CodeAttribute attribue in @class.Attributes)
            {
                if (attribue.Name == "CrmPluginRegistration") return true;
            }
            return false;
        }
    }
}
