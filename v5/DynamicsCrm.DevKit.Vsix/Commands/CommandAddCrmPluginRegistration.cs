using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using EnvDTE;
using EnvDTE80;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Commands
{
    [Command(PackageIds.CommandAddCrmPluginRegistration)]
    public class CommandAddCrmPluginRegistration : BaseCommand<CommandAddCrmPluginRegistration>
    {
        private static readonly Regex StepNameRegex = new Regex(@"""([^""]+)"",\s*\d+,", RegexOptions.Compiled);
        private static readonly Regex StepIdRegex = new Regex(@"Id\s*=\s*""([^""]+)""", RegexOptions.Compiled);

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
            var sharedProjectName = await VsixHelper.GetSharedProjectAsync();
            if (!(await VsixHelper.IsProjectExistAsync(sharedProjectName)))
            {
                await VS.MessageBox.ShowErrorAsync($"Please add DynamicsCrm.DevKit Shared project.", $"Thank you !!!");
                return;
            }
            if (!(await IsAddReferenceToSharedProjectAsync(dte, sharedProjectName)))
            {
                await VS.MessageBox.ShowErrorAsync($"Please add reference {sharedProjectName} Shared project to current project.", $"Thank you !!!");
                return;
            }
            if (!IsDevKitCliToolInstalled())
            {
                System.Windows.Clipboard.SetText("dotnet tool install -g DynamicsCrm.DevKit.Cli");
                await VS.MessageBox.ShowErrorAsync($"Please install DynamicsCrm.DevKit.Cli as a .NET tool. dotnet tool install -g DynamicsCrm.DevKit.Cli command has been copied to clipboard.", $"Thank you !!!");
                return;
            }

            var hasExistingAttributes = VsixHelper.HasAttributeCrmPluginRegistration(@class);

            if (VsixHelper.HasImplementedPlugin(@class))
            {
                var attributes = await CrmPluginRegistrationDataForPluginAsync(dte, currentClass.FullName);
                if (attributes != null)
                {
                    if (attributes.Count > 0)
                    {
                        if (hasExistingAttributes)
                        {
                            // Update existing attributes with Id
                            await UpdateAttributesWithIdAsync(@class, attributes);
                        }
                        else
                        {
                            // Add new attributes
                            foreach (var attribute in attributes)
                            {
                                @class.AddAttribute("CrmPluginRegistration", attribute);
                            }
                        }
                        await AddImportSharedProjectIfNeedAsync(dte, sharedProjectName);
                    }
                    else
                    {
                        var addPlaceholder = await VS.MessageBox.ShowConfirmAsync(
                            "DynamicsCrm.DevKit did not find any plugin step registered with this class.\r\n\r\nDo you want to add a placeholder CrmPluginRegistration attribute so you can configure it manually?",
                            "Add CrmPluginRegistration?");

                        if (addPlaceholder)
                        {
                            @class.AddAttribute("CrmPluginRegistration", GetPlaceholderPluginRegistrationAttribute(currentClass.FullName));
                            await AddImportSharedProjectIfNeedAsync(dte, sharedProjectName);
                        }
                    }
                }
            }
            else if (VsixHelper.HasImplementedWorkflow(@class))
            {
                var attributes = await CrmPluginRegistrationDataForWorkflowAsync(dte, currentClass.FullName);
                if (attributes != null)
                {
                    if (attributes.Count > 0)
                    {
                        if (hasExistingAttributes)
                        {
                            // Update existing attributes with Id
                            await UpdateAttributesWithIdAsync(@class, attributes);
                        }
                        else
                        {
                            // Add new attributes
                            foreach (var attribute in attributes)
                            {
                                @class.AddAttribute("CrmPluginRegistration", attribute);
                            }
                        }
                        await AddImportSharedProjectIfNeedAsync(dte, sharedProjectName);
                    }
                    else
                        await VS.MessageBox.ShowErrorAsync($"DynamicsCrm.DevKit not found any workflow step register with this class.", $"Thank you !!!");
                }
            }
        }

        private static string GetPlaceholderPluginRegistrationAttribute(string fullName)
        {
            return $"\"???\", \"???\", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, \"\", \"{fullName}\", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin";
        }

        private static async Task UpdateAttributesWithIdAsync(CodeClass @class, List<string> newAttributes)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

            // Parse new attributes to extract Id values keyed by step name
            var idMapping = new Dictionary<string, string>(newAttributes.Count);
            foreach (var attrString in newAttributes)
            {
                var nameMatch = StepNameRegex.Match(attrString);
                var idMatch = StepIdRegex.Match(attrString);

                if (nameMatch.Success && idMatch.Success)
                {
                    idMapping[nameMatch.Groups[1].Value] = idMatch.Groups[1].Value;
                }
            }

            // Update existing attributes
            var attributesToUpdate = new List<CodeAttribute>();
            foreach (CodeAttribute attribute in @class.Attributes)
            {
                if (attribute.Name == "CrmPluginRegistration")
                {
                    attributesToUpdate.Add(attribute);
                }
            }

            foreach (var attribute in attributesToUpdate)
            {
                var attrValue = attribute.Value;
                var match = StepNameRegex.Match(attrValue);

                if (match.Success && idMapping.TryGetValue(match.Groups[1].Value, out var stepId))
                {
                    // Check if Id already exists
                    if (!HasIdArgument(attribute))
                    {
                        // Add Id to the attribute value
                        var newValue = attrValue.TrimEnd(')');
                        if (!newValue.EndsWith(","))
                            newValue += ",";
                        newValue += $" Id = \"{stepId}\")";
                        attribute.Value = newValue;
                    }
                }
            }
        }

        private static bool HasIdArgument(CodeAttribute attribute)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            foreach (CodeElement child in attribute.Children)
            {
                if (child is CodeAttributeArgument arg && arg.Name == "Id")
                {
                    return true;
                }
            }
            return false;
        }

        protected override void BeforeQueryStatus(EventArgs e)
        {
            this.Command.Visible = false;
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                try
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
                    var hasAttributes = VsixHelper.HasAttributeCrmPluginRegistration(@class);
                    if (hasAttributes)
                    {
                        if (AllAttributesHaveId(@class))
                        {
                            return;
                        }
                        this.Command.Text = "Update Crm Plugin Registration";
                        this.Command.Visible = true;
                    }
                    else
                    {
                        this.Command.Text = "Add Crm Plugin Registration";
                        this.Command.Visible = true;
                    }
                }
                catch {  }
            });
        }

        private static bool AllAttributesHaveId(CodeClass @class)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            foreach (CodeAttribute attribute in @class.Attributes)
            {
                if (attribute.Name == "CrmPluginRegistration" && !HasIdArgument(attribute))
                {
                    return false;
                }
            }
            return true;
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
                var pluginTypeId = row.Id;
                var name = row.GetAttributeValue<string>("name");
                var friendlyname = row.GetAttributeValue<string>("friendlyname");
                var description = row.GetAttributeValue<string>("description");
                var workflowactivitygroupname = row.GetAttributeValue<string>("workflowactivitygroupname");
                var isolationMode = DeploymentService.GetAliasedValue<OptionSetValue>(row, "a.isolationmode").Value;
                var isolationModeName = isolationMode == 0 ? "IsolationModeEnum.None" : "IsolationModeEnum.Sandbox";

                var attribute = $"\"{name}\", \"{friendlyname}\", \"{description}\", \"{workflowactivitygroupname}\", {isolationModeName}, PluginType = PluginType.Workflow, Id = \"{pluginTypeId}\"";
                list.Add(attribute);
            }
            return list;
        }

        private static async Task<ServiceClient> AddDeployBatFilesAsync(DTE dte)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var serviceClient = await CacheHelper.GetServiceClientAsync();
            if (serviceClient == null) return null;
            var crmConnection = CacheHelper.GetCrmConnection();
            if (crmConnection == null) return null;
            var plugin_deploy_debug_bat = await Replacement.ReadBatResourceAsync("bat.plugin.deploy.debug.bat", crmConnection);
            var plugin_deploy_debug_only_bat = await Replacement.ReadBatResourceAsync("bat.plugin.deploy.debug.only.bat", crmConnection);
            plugin_deploy_debug_bat = plugin_deploy_debug_bat
                .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName));
            plugin_deploy_debug_only_bat = plugin_deploy_debug_only_bat
                .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName));
            await AddDeployBatFileToProjectAsync(dte, "deploy.debug.bat", plugin_deploy_debug_bat);
            await AddDeployBatFileToProjectAsync(dte, "deploy.debug.only.bat", plugin_deploy_debug_only_bat);
            return serviceClient;
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
                  <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
                  <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable}'/>
                </filter>
                <link-entity name='sdkmessage' from='sdkmessageid' to='sdkmessageid' alias='m'>
                  <attribute name='name' />
                </link-entity>
                <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='inner' alias='t'>
                  <filter type='and'>
                    <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
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
                var stepId = row.Id;
                var message = DeploymentService.GetAliasedValue<string>(row, "m.name");
                var entity = DeploymentService.GetAliasedValue<string>(row, "f.primaryobjecttypecode");
                var stage = row.GetAttributeValue<OptionSetValue>("stage").Value;
                var stageName = stage == 10 ? "StageEnum.PreValidation" : (stage == 20 ? "StageEnum.PreOperation" : "StageEnum.PostOperation");
                var mode = row.GetAttributeValue<OptionSetValue>("mode").Value;
                var modeName = mode == 0 ? "ExecutionModeEnum.Synchronous" : "ExecutionModeEnum.Asynchronous";
                var filteringAttributes = row.GetAttributeValue<string>("filteringattributes");
                var name = row.GetAttributeValue<string>("name");
                var rank = row.GetAttributeValue<int>("rank");
                var isolationMode = DeploymentService.GetAliasedValue<OptionSetValue>(row, "p.isolationmode").Value;
                var isolationModeName = isolationMode == 0 ? "IsolationModeEnum.None" : "IsolationModeEnum.Sandbox";

                var sb = new StringBuilder();
                sb.Append($"\"{message}\", \"{entity}\", {stageName}, {modeName}, \"{filteringAttributes}\", \"{name}\", {rank}, {isolationModeName}, PluginType = PluginType.Plugin, Id = \"{stepId}\"");

                if (row.GetAttributeValue<bool>("asyncautodelete"))
                    sb.Append(", DeleteAsyncOperation = true");

                var description = row.GetAttributeValue<string>("description");
                if (description != null)
                    sb.Append($", Description = \"{description}\"");

                var supportedDeployment = row.GetAttributeValue<OptionSetValue>("supporteddeployment").Value;
                if (supportedDeployment == 2)
                    sb.Append(", Server = true, Offline = true");
                else if (supportedDeployment == 1)
                    sb.Append(", Server = false, Offline = true");

                if (row.GetAttributeValue<OptionSetValue>("statecode").Value == 1)
                    sb.Append(", Action = PluginStepOperationEnum.Deactivate");

                var configuration = row.GetAttributeValue<string>("configuration");
                if (configuration != null)
                    sb.Append($", UnSecureConfiguration = \"{configuration}\"");

                var secureconfig = DeploymentService.GetAliasedValue<string>(row, "s.secureconfig");
                if (secureconfig != null)
                    sb.Append($", SecureConfiguration = \"{secureconfig}\"");

                var impersonatinguserid = row.GetAttributeValue<EntityReference>("impersonatinguserid");
                if (impersonatinguserid != null)
                    sb.Append($", RunAs = \"{impersonatinguserid.Name}\"");

                var images = await GetPluginImagesAsync(serviceClient, fullName, row.Id);
                if (images.Count > 0)
                {
                    for (int i = 0; i < Math.Min(images.Count, 4); i++)
                    {
                        var img = images[i];
                        sb.Append($", Image{i + 1}Name = \"{img.Name}\", Image{i + 1}Alias = \"{img.Alias}\", Image{i + 1}Type = ImageTypeEnum.{img.Type}, Image{i + 1}Attributes = \"{img.Attributes}\"");
                    }
                }

                list.Add(sb.ToString());
            }
            return list;
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
            try
            {
                dte?.ActiveDocument?.ProjectItem?.ContainingProject?.Save();
                var projectPath = dte?.ActiveDocument?.ProjectItem?.ContainingProject?.FullName;
                if (string.IsNullOrEmpty(projectPath) || !File.Exists(projectPath))
                    return false;
                var content = await DynamicsCrm.DevKit.Shared.FileHelper.ReadAllTextAsync(projectPath);
                var checks = new[]
                {
                    $"{sharedProjectName}.projitems",
                    $"\\{sharedProjectName}\\{sharedProjectName}.projitems",
                    $"Include=\"{sharedProjectName}.projitems\"",
                    $"Project=\"{sharedProjectName}.projitems\""
                };
                return checks.Any(check => content.IndexOf(check, StringComparison.OrdinalIgnoreCase) >= 0);
            }
            catch
            {
                return false;
            }
        }

        private static bool IsDevKitCliToolInstalled()
        {
            var toolNames = new[] { "devkit.exe", "devkit.cmd", "devkit.bat", "devkit" };
            var path = Environment.GetEnvironmentVariable("PATH") ?? string.Empty;
            var paths = path.Split(new[] { Path.PathSeparator }, StringSplitOptions.RemoveEmptyEntries).ToList();
            var userProfile = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);

            if (!string.IsNullOrWhiteSpace(userProfile))
            {
                paths.Add(Path.Combine(userProfile, ".dotnet", "tools"));
            }

            foreach (var pathItem in paths.Distinct(StringComparer.OrdinalIgnoreCase))
            {
                foreach (var toolName in toolNames)
                {
                    try
                    {
                        if (File.Exists(Path.Combine(pathItem, toolName)))
                            return true;
                    }
                    catch
                    {
                    }
                }
            }

            return false;
        }
    }
}
