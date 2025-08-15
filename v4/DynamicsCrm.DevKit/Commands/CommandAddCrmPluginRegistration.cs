using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using EnvDTE80;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandAddCrmPluginRegistration)]
    public class CommandAddCrmPluginRegistration : BaseCommand<CommandAddCrmPluginRegistration>
    {
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

        protected override async Task ExecuteAsync(OleMenuCmdEventArgs e)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var dte = await VS.GetServiceAsync<DTE, DTE>();
            if (dte?.ActiveDocument == null) return;
            var textDocument = (TextDocument)dte?.ActiveDocument?.Object();
            var activePoint = textDocument?.Selection?.ActivePoint;
            var currentClass = dte?.ActiveDocument?.ProjectItem?.FileCodeModel?.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);
            if (currentClass is not CodeClass @class) return;
            var (isSharedProjectExist, sharedProjectName) = await VsixHelper.IsSharedProjectExistAsync();
            if (!isSharedProjectExist)
            {
                await VS.MessageBox.ShowErrorAsync($"Please add DynamicsCrm.DevKit Shared project.", $"Thank you !!!");
                return;
            }
            if (!(await IsAddReferenceToSharedProjectAsync(dte, sharedProjectName)))
            {
                await VS.MessageBox.ShowErrorAsync($"Please add reference {sharedProjectName} Shared project to current project.", $"Thank you !!!");
                return;
            }
            if (!(await IsAddPackagesConfigAndInstallAsync(dte)))
            {
                System.Windows.Clipboard.SetText($"DynamicsCrm.DevKit.Cli");
                await VS.MessageBox.ShowErrorAsync($"Please install DynamicsCrm.DevKit.Cli from Nuget. DynamicsCrm.DevKit.Cli text have been copied to clipboard.", $"Thank you !!!");
                return;
            }
            if (VsixHelper.HasImplementedPlugin(@class))
            {
                var attributes = await CrmPluginRegistrationDataForPluginAsync(dte, currentClass.FullName);
                if (attributes != null)
                {
                    if (attributes.Count > 0)
                    {
                        foreach (var attribute in attributes)
                        {
                            @class.AddAttribute("CrmPluginRegistration", attribute);
                        }
                        await AddImportSharedProjectIfNeedAsync(dte, sharedProjectName);
                    }
                    else
                        await VS.MessageBox.ShowErrorAsync($"DynamicsCrm.DevKit not found any plugin step register with this class.", $"Thank you !!!");
                }
            }
            else if (VsixHelper.HasImplementedWorkflow(@class))
            {
                var attributes = await CrmPluginRegistrationDataForWorkflowAsync(dte, currentClass.FullName);
                if (attributes != null)
                {
                    if (attributes.Count > 0)
                    {
                        foreach (var attribute in attributes)
                        {
                            @class.AddAttribute("CrmPluginRegistration", attribute);
                        }
                        await AddImportSharedProjectIfNeedAsync(dte, sharedProjectName);
                    }
                    else
                        await VS.MessageBox.ShowErrorAsync($"DynamicsCrm.DevKit not found any workflow step register with this class.", $"Thank you !!!");
                }
            }
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            this.Command.Visible = false;
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var dte = await VS.GetServiceAsync<DTE, DTE>();
                if (!(dte?.ActiveDocument?.Language?.Equals("CSharp", StringComparison.OrdinalIgnoreCase)) ?? false) return;
                var textDocument = (TextDocument)dte?.ActiveDocument?.Object();
                var activePoint = textDocument?.Selection?.ActivePoint;
                var currentClass = dte?.ActiveDocument?.ProjectItem?.FileCodeModel?.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);
                if (currentClass == null) return;
                if (currentClass is not CodeClass @class) return;
                if (@class.IsAbstract) return;
                if (!@class.IsCodeType) return;
                if (!VsixHelper.HasImplementedPlugin(@class) && !VsixHelper.HasImplementedWorkflow(@class)) return;
                if (VsixHelper.HasAttributeCrmPluginRegistration(@class)) return;
                this.Command.Visible = true;
            });
        }

        private static async Task<List<string>> CrmPluginRegistrationDataForWorkflowAsync(DTE dte, string fullName)
        {
            var serviceClient = await AddDeployBatFilesAsync(dte);
            if (serviceClient == null) return null;
            var list = new List<string>();
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
                  <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
                  <condition attribute='isworkflowactivity' operator='eq' value='{fetchData.isworkflowactivity}'/>
                  <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
                </filter>
                <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' alias='a'>
                  <attribute name='isolationmode' />
                </link-entity>
              </entity>
            </fetch>";

            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
                attribute += $", PluginType = PluginType.Workflow";
                list.Add(attribute);
            }
            return list;
        }

        private static async Task<ServiceClient> AddDeployBatFilesAsync(DTE dte)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var formConnection = new FormConnection();
            var result = formConnection.ShowModal() ?? false;
            if (!result) return null;
            var plugin_deploy_debug_bat = await Helper.ReadEmbeddedResourceAsync($"{typeof(DevKitPackage).Assembly.GetName().Name}.Resources.plugin.deploy.debug.bat");
            var plugin_deploy_debug_only_bat = await Helper.ReadEmbeddedResourceAsync($"{typeof(DevKitPackage).Assembly.GetName().Name}.Resources.plugin.deploy.debug.only.bat");
            var crmConnectionString = Helper.BuildConnectionString(formConnection.CrmConnection);
            plugin_deploy_debug_bat = plugin_deploy_debug_bat
                .Replace("$CrmConnectionString$", crmConnectionString)
                .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName));
            plugin_deploy_debug_only_bat = plugin_deploy_debug_only_bat
                .Replace("$CrmConnectionString$", crmConnectionString)
                .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName));
            await AddDeployBatFileToProjectAsync(dte, "deploy.debug.bat", plugin_deploy_debug_bat);
            await AddDeployBatFileToProjectAsync(dte, "deploy.debug.only.bat", plugin_deploy_debug_only_bat);
            return formConnection.ServiceClient;
        }

        private static async Task<List<string>> CrmPluginRegistrationDataForPluginAsync(DTE dte, string fullName)
        {
            var serviceClient = await AddDeployBatFilesAsync(dte);
            if (serviceClient == null) return null;
            var list = new List<string>();
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

            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
                attribute += $", \"{filteringAttributes}\",";
                attribute += $"\"{name}\"";
                attribute += $", {rank}";
                attribute += $", {isolationModeName}";
                attribute += $", PluginType = PluginType.Plugin,";
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
                var images = await GetPluginImagesAsync(serviceClient, fullName, row.Id);
                if (images.Count > 0)
                {
                    var image = "Image{0}Name = \"{1}\", Image{0}Alias = \"{2}\", Image{0}Type = ImageTypeEnum.{3}, Image{0}Attributes = \"{4}\",";
                    var i = 1;
                    foreach (var item in images)
                    {
                        attribute += string.Format(image, i, item.Name, item.Alias, item.Type.ToString(), item.Attributes);
                        i++;
                        if (i == 5) break;
                    }
                }
                attribute = attribute.TrimEnd(", ".ToCharArray());
                list.Add(attribute);
            }
            return list;
        }

        private static T GetAliasedValue<T>(Entity entity, string name)
        {
            var aliased = entity.GetAttributeValue<AliasedValue>(name);
            if (aliased == null) return default;
            if (typeof(T) == typeof(EntityReference) && aliased.Value is Guid guid)
                return (T)(object)new EntityReference(aliased.EntityLogicalName, guid);
            if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference reference)
                return (T)(object)reference.Id;
            return (T)aliased.Value;
        }

        private static async Task<List<CrmPluginImage>> GetPluginImagesAsync(ServiceClient serviceClient, string fullName, Guid sdkMessageProcessingStepId)
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
              <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
              <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable}'/>
              <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid}'/>
            </filter>
            <link-entity name='sdkmessageprocessingstep' from='sdkmessageprocessingstepid' to='sdkmessageprocessingstepid' link-type='inner' alias='a'>
              <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='inner' alias='b'>
                <filter type='and'>
                  <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
                </filter>
              </link-entity>
            </link-entity>
          </entity>
        </fetch>";
            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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

        private static async Task AddDeployBatFileToProjectAsync(DTE dte, string fileName, string content)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var deploy = $"{Path.GetDirectoryName(dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName)}\\{fileName}";
            if (File.Exists(deploy)) return;
            await DynamicsCrm.DevKit.Shared.FileHelper.ForceWriteAllTextWithoutUTF8Async(deploy, content);
            dte?.ActiveDocument?.ProjectItem?.ContainingProject?.ProjectItems?.AddFromFile(deploy);
            dte?.ActiveDocument?.ProjectItem?.ContainingProject?.Save();
        }

        private static async Task AddImportSharedProjectIfNeedAsync(DTE dte, string sharedProjectName)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            if (dte?.ActiveDocument?.ProjectItem?.FileCodeModel is not FileCodeModel2 fileCodeModel2) return;
            var foundNamespace = false;
            foreach (var element in fileCodeModel2.CodeElements)
            {
                if (element is not CodeImport codeImport) continue;
                if (codeImport.Namespace == sharedProjectName)
                {
                    foundNamespace = true;
                    break;
                }
            }
            if (foundNamespace) return;
            fileCodeModel2.AddImport(sharedProjectName);
        }

        private static async Task<bool> IsAddReferenceToSharedProjectAsync(DTE dte, string sharedProjectName)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            dte?.ActiveDocument?.ProjectItem?.ContainingProject?.Save();
            var content = await DynamicsCrm.DevKit.Shared.FileHelper.ReadAllTextAsync(dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName);
            return content.IndexOf($"{sharedProjectName}.projitems") > 0;
        }

        private static async Task<bool> IsAddPackagesConfigAndInstallAsync(DTE dte)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var package = $"{Path.GetDirectoryName(dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName)}\\packages.config";
            if (!File.Exists(package)) return false;
            var context = await DynamicsCrm.DevKit.Shared.FileHelper.ReadAllTextAsync(package);
            return context.IndexOf("DynamicsCrm.DevKit.Cli") > 0;
        }
    }
}