using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Entities;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Activities;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.ServiceModel;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskServer : ITask
    {
        private const string SPACE = "  ";
        public TaskServer(CommandLineArgs arg, Json json)
        {
            this.Arg = arg;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
            switch (arg.Type)
            {
                case nameof(CliType.servers):
                    JsonServer = json.servers.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.servers).ToUpper()}]";
                    break;
                case nameof(CliType.workflows):
                    JsonServer = json.workflows.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.workflows).ToUpper()}]";
                    break;
                case nameof(CliType.plugins):
                    JsonServer = json.plugins.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.plugins).ToUpper()}]";
                    break;
                case nameof(CliType.dataproviders):
                    JsonServer = json.dataproviders.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.dataproviders).ToUpper()}]";
                    break;
            }
        }
        public string CurrentDirectory { get; set; }
        public string TaskType { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonServer JsonServer { get; }
        private bool IsOk { get; set; }
        private Guid SolutionId { get; set; }
        private string Prefix { get; set; }
        private string CurrentFolder => $"{CurrentDirectory}\\{JsonServer.folder}";
        public bool IsValid()
        {
            if (JsonServer == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (JsonServer.folder == "???" || (JsonServer.folder != null && JsonServer?.folder?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (JsonServer.solution == "???" || (JsonServer.solution != null && JsonServer?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            (IsOk, SolutionId, Prefix) = XrmHelper.IsExistSolution(CrmServiceClient, JsonServer.solution);
            if (!IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{JsonServer.solution}' not exist");
                return false;
            }
            return true;
        }
        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                var files = GetFiles(CurrentFolder, JsonServer.includefiles, JsonServer.excludefiles);
                if (files.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any files to deploy");
                }
                else
                {
                    DeployFiles(files);
                }
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }
        private void DeployFiles(List<string> files)
        {
            foreach (var file in files)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, ConsoleColor.White, $"{Path.GetFileName(file)}");
                var types = GetTypes(file);
                if (!IsValidTypes(file, types)) continue;
                DeployFile(file, types);
            }
        }
        private void DeployFile(string file, List<TypeInfo> types)
        {
            var pluginAssemblyId = DeployAssembly(file);
            if (pluginAssemblyId == null) return;
            if (Arg?.OnlyUpdateAssembly?.Length > 0) return;
            foreach (var type in types)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                var pluginTypeId = DeployPluginType(pluginAssemblyId.Value, type, attributes[0]);
                if (pluginTypeId == null) return;
                if (IsWorkflowType(type)) continue;
                foreach (var attribute in attributes)
                {
                    switch (attribute.PluginType)
                    {
                        case PluginType.Plugin:
                        case PluginType.CustomAction:
                            var pluginStepId = DeployPluginStep(pluginTypeId.Value, type, attribute);
                            if (pluginStepId == null) return;
                            if (attribute.PluginType == PluginType.Plugin && HasPluginImage(attribute))
                            {
                                if (IsSupportPluginImage(attribute))
                                {
                                    var pluginImageId = DeployPluginImage(pluginStepId.Value, type, attribute);
                                    if (pluginImageId == null) return;
                                }
                                else
                                {
                                    CliLog.WriteLineError(ConsoleColor.Yellow, $"The message {attribute.Message} of {attribute.Name} not support Image. Deploy assembly stopped.");
                                    return;
                                }
                            }
                            break;
                        case PluginType.DataProvider:
                            break;
                        case PluginType.CustomApi:
                            DeployCustomApiStep(pluginTypeId.Value, type.FullName, attribute);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        private void DeployCustomApiStep(Guid pluginTypeId, string pluginTypeName, CrmPluginRegistrationAttribute attribute)
        {
            var fetchData = new
            {
                uniquename = attribute.Message
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='customapi'>
    <attribute name='customapiid'/>
    <attribute name='plugintypeid'/>
    <filter type='and'>
      <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
    </filter>
  </entity>
</fetch>
";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Custom Api with message {attribute.Message} not found. Deploy assembly stopped.");
                return;
            }
            if (rows.Entities[0].GetAttributeValue<EntityReference>("plugintypeid")?.Id.ToString("D") == pluginTypeId.ToString("D"))
            {
                if (attribute.Action == PluginStepOperationEnum.Activate)
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{attribute.PluginType.ToString()} Message: ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type: ", ConsoleColor.Cyan, pluginTypeName);
                else
                {
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, CliAction.Deactivated, ConsoleColor.White, $"{attribute.PluginType.ToString()} Message: ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type: ", ConsoleColor.Cyan, pluginTypeName);
                    var update = new Entity("customapi", rows.Entities[0].Id);
                    update["plugintypeid"] = null;
                    CrmServiceClient.Update(update);
                }
            }
            else
            {
                if (attribute.Action == PluginStepOperationEnum.Deactivate)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, CliAction.Deactivated, ConsoleColor.White, $"{attribute.PluginType.ToString()} Message: ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type: ", ConsoleColor.Cyan, pluginTypeName);
                }
                else
                {
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{attribute.PluginType.ToString()} Message: ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type: ", ConsoleColor.Cyan, pluginTypeName);
                    var update = new Entity("customapi", rows.Entities[0].Id);
                    update["plugintypeid"] = new EntityReference("plugintype", pluginTypeId);
                    CrmServiceClient.Update(update);
                }
            }
        }

        private Guid? DeployPluginImage(Guid pluginStepId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            Guid? check = null;
            if (attribute?.Image1Name?.Length > 0 && attribute?.Image1Attributes?.Length > 0)
                check = DeployPluginImage(attribute.Message, attribute.Image1Name, attribute.Image1Alias, attribute.Image1Type, attribute.Image1Attributes, pluginStepId, attribute.Name);
            if (check != null && attribute?.Image2Name?.Length > 0 && attribute?.Image2Attributes?.Length > 0)
                check = DeployPluginImage(attribute.Message, attribute.Image2Name, attribute.Image2Alias, attribute.Image2Type, attribute.Image2Attributes, pluginStepId, attribute.Name);
            if (check != null && attribute?.Image3Name?.Length > 0 && attribute?.Image3Attributes?.Length > 0)
                check = DeployPluginImage(attribute.Message, attribute.Image3Name, attribute.Image3Alias, attribute.Image3Type, attribute.Image3Attributes, pluginStepId, attribute.Name);
            if (check != null && attribute?.Image4Name?.Length > 0 && attribute?.Image4Attributes?.Length > 0)
                check = DeployPluginImage(attribute.Message, attribute.Image4Name, attribute.Image4Alias, attribute.Image4Type, attribute.Image4Attributes, pluginStepId, attribute.Name);
            return check;
        }
        private Guid? DeployPluginImage(string message, string imageName, string imageAliasName, ImageTypeEnum imageType, string imageAttributes, Guid pluginStepId, string pluginStepName)
        {
            if (imageAliasName.Length == 0) imageAliasName = imageName;
            imageAttributes = imageAttributes?.Replace(" ", string.Empty);
            if (imageAttributes?.Trim() == "*") imageAttributes = null;

            var fetchData = new
            {
                name = imageName,
                sdkmessageprocessingstepid = pluginStepId,
                imagetype = (int)imageType
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstepimage'>
    <attribute name='sdkmessageprocessingstepimageid' />
    <attribute name='name' />
    <attribute name='entityalias' />
    <attribute name='attributes' />
    <attribute name='imagetype' />
    <filter type='and'>
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid}'/>
      <condition attribute='imagetype' operator='eq' value='{fetchData.imagetype}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 plugin image name {imageName}. Deploy assembly stopped.");
                    return null;
                }
            }

            var pluginImage = new Entity("sdkmessageprocessingstepimage")
            {
                ["name"] = imageName,
                ["imagetype"] = new OptionSetValue((int)imageType),
                ["sdkmessageprocessingstepid"] = new EntityReference("sdkmessageprocessingstep", pluginStepId),
                ["attributes"] = imageAttributes,
                ["entityalias"] = imageAliasName,
                ["messagepropertyname"] = message == "Create" ? "Id" : "Target"
            };
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = pluginImage
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, $"{imageType.ToString()}: ", ConsoleColor.Cyan, imageName);
                try
                {
                    var response = (CreateResponse)CrmServiceClient.Execute(request);
                    return response.id;
                }
                catch (FaultException fe)
                {
                    if (fe.Message.Contains("entity doesn't contain attribute with"))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {pluginStepName} have invalid {imageType.ToString()} Attribute {imageAttributes}. Deploy assembly stopped.");
                    }
                    return null;
                }
                catch (Exception e)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message}. Deploy assembly stopped.");
                    return null;
                }
            }
            else
            {
                var row = rows.Entities[0];
                var name = row.GetAttributeValue<string>("name");
                var entityalias = row.GetAttributeValue<string>("entityalias");
                var attributes = row.GetAttributeValue<string>("attributes");
                var imagetype = row.GetAttributeValue<OptionSetValue>("imagetype").Value;
                if (name == imageName &&
                    entityalias == imageAliasName &&
                    attributes == imageAttributes &&
                    imagetype == (int)imageType)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{imageType.ToString()}: ", ConsoleColor.Cyan, imageName);
                }
                else
                {
                    if (attributes != imageAttributes && imageAttributes.Length != 0)
                    {
                        pluginImage["sdkmessageprocessingstepimageid"] = rows.Entities[0].Id;
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{imageType.ToString()}: ", ConsoleColor.Cyan, imageName);
                    }
                    else if (imageAttributes.Length == 0)
                    {
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Deleted, ConsoleColor.White, $"{imageType.ToString()}: ", ConsoleColor.Cyan, imageName);
                        CrmServiceClient.Delete("sdkmessageprocessingstepimage", rows.Entities[0].Id);
                        pluginImage["sdkmessageprocessingstepimageid"] = null;
                    }
                    try
                    {
                        CrmServiceClient.Update(pluginImage);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {pluginStepName} have invalid {imageType.ToString()} Attribute {imageAttributes}. Deploy assembly stopped.");
                        }
                        return null;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message}. Deploy assembly stopped.");
                        return null;
                    }
                }
                return rows.Entities[0].Id;
            }
        }
        private bool IsSupportPluginImage(CrmPluginRegistrationAttribute attribute)
        {
            switch (attribute?.Message?.ToLower())
            {
                case "assign":
                case "create":
                case "delete":
                case "deliverincoming":
                case "deliverpromote":
                case "merge":
                case "route":
                case "send":
                case "setstate":
                case "setstatedynamicentity":
                case "update":
                    return true;
                default:
                    return false;
            }
        }
        private bool HasPluginImage(CrmPluginRegistrationAttribute attribute)
        {
            if (attribute?.Image1Name?.Length > 0 && attribute?.Image1Attributes?.Length > 0)
                return true;
            if (attribute?.Image2Name?.Length > 0 && attribute?.Image2Attributes?.Length > 0)
                return true;
            if (attribute?.Image3Name?.Length > 0 && attribute?.Image3Attributes?.Length > 0)
                return true;
            if (attribute?.Image4Name?.Length > 0 && attribute?.Image4Attributes?.Length > 0)
                return true;
            return false;
        }
        private Guid? DeployPluginStep(Guid pluginTypeId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            Guid? pluginStepId = null;
            if (attribute?.Message?.ToLower() == "update")
            {
                if (attribute?.FilteringAttributes?.Trim().Length == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{type.FullName} Update message need provide FilteringAttributes value. Deploy assembly stopped.");
                    return null;
                }
                if (attribute?.FilteringAttributes.Trim() == "*")
                {
                    attribute.FilteringAttributes = null;
                }
            }
            var fetchData = new
            {
                plugintypeid = pluginTypeId,
                name = attribute.Name,
                sdkmessageidname = attribute.Message
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <all-attributes />
    <filter type='and'>
      <condition attribute='plugintypeid' operator='eq' value='{fetchData.plugintypeid}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='sdkmessageidname' operator='eq' value='{fetchData.sdkmessageidname}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 step name {type.FullName}. Deploy assembly stopped.");
                    return null;
                }
            }
            var sdkMessageFilterId = GetSdkMessageFilterId(attribute.EntityLogicalName, attribute.Message);
            var sdkMessageId = GetSdkMessageId(attribute.EntityLogicalName, attribute.Message);
            var impersonatingUserId = GetImpersonatingUserId(attribute.RunAs);
            if (attribute.ExecutionMode == 0) attribute.DeleteAsyncOperation = false;
            var pluginStep = new Entity("sdkmessageprocessingstep")
            {
                ["name"] = attribute.Name,
                ["configuration"] = attribute.UnSecureConfiguration,
                ["mode"] = new OptionSetValue(attribute.ExecutionMode == ExecutionModeEnum.Asynchronous ? 1 : 0),
                ["rank"] = attribute.ExecutionOrder,
                ["stage"] = new OptionSetValue((int)attribute.Stage),
                ["asyncautodelete"] = attribute.DeleteAsyncOperation,
                ["plugintypeid"] = new EntityReference("plugintype", pluginTypeId),
                ["sdkmessagefilterid"] = sdkMessageFilterId,
                ["sdkmessageid"] = sdkMessageId,
                ["filteringattributes"] = attribute.FilteringAttributes?.Replace(" ", ""),
                ["impersonatinguserid"] = impersonatingUserId != null ? new EntityReference("systemuser", impersonatingUserId.Value) : null,
                ["supporteddeployment"] = (attribute.Server && attribute.Offline) ? new OptionSetValue(2/*Both*/) : (!attribute.Server && attribute.Offline ? new OptionSetValue(1/*Offline*/) : new OptionSetValue(0/*Server*/))
            };
            if (string.IsNullOrWhiteSpace(attribute.Description))
            {
                if (rows.Entities.Count == 0 || (rows.Entities.Count > 0 && string.IsNullOrWhiteSpace(rows.Entities[0].GetAttributeValue<string>("description"))))
                {
                    pluginStep["description"] = Const.WindowTitle;
                }
            }
            else
            {
                pluginStep["description"] = attribute.Description;
            }
            if (rows.Entities.Count == 0)
            {
                if (attribute.SecureConfiguration?.Trim().Length > 0)
                {
                    var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                    secureEntity["secureconfig"] = attribute.SecureConfiguration;
                    var sdkmessageprocessingstepsecureconfigid = CrmServiceClient.Create(secureEntity);
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                }
                var request = new CreateRequest
                {
                    Target = pluginStep
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, $"{attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                try
                {
                    var response = (CreateResponse)CrmServiceClient.Execute(request);
                    pluginStepId = response.id;
                }
                catch (FaultException fe)
                {
                    if (fe.Message.Contains("The dependent component Attribute "))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Deploy assembly stopped.");
                    }
                    return null;
                }
                catch (Exception e)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message}. Deploy assembly stopped.");
                    return null;
                }
            }
            else
            {
                pluginStepId = rows.Entities[0].Id;
                pluginStep["sdkmessageprocessingstepid"] = pluginStepId.Value;
                var hasChangedPluginStep = false;
                var secureEntity = GetSecureEntity(pluginStepId.Value);
                if (attribute.SecureConfiguration?.Trim().Length == 0 && secureEntity != null) //delete secure value
                {
                    var sdkmessageprocessingstepsecureconfigid = (Guid?)secureEntity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid")?.Value;
                    if (sdkmessageprocessingstepsecureconfigid.HasValue)
                    {
                        CrmServiceClient.Delete("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid.Value);
                        hasChangedPluginStep = true;
                    }
                }
                else if (attribute.SecureConfiguration?.Trim().Length > 0 && secureEntity != null) //exist secure
                {
                    var sdkmessageprocessingstepsecureconfigid = (Guid?)secureEntity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid")?.Value;
                    if (sdkmessageprocessingstepsecureconfigid.HasValue)
                    {
                        var old = (string)secureEntity.GetAttributeValue<AliasedValue>("s.secureconfig")?.Value;
                        if (old != attribute.SecureConfiguration)
                        {
                            var update = new Entity("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid.Value);
                            update["secureconfig"] = attribute.SecureConfiguration;
                            CrmServiceClient.Update(update);
                            hasChangedPluginStep = true;
                        }
                    }
                }
                else if (attribute.SecureConfiguration?.Trim().Length > 0 && secureEntity == null) //create the secure
                {
                    var create = new Entity("sdkmessageprocessingstepsecureconfig");
                    create["secureconfig"] = attribute.SecureConfiguration;
                    var sdkmessageprocessingstepsecureconfigid = CrmServiceClient.Create(secureEntity);
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                    hasChangedPluginStep = true;
                }
                if (!IsChangedPluginStep(hasChangedPluginStep, rows.Entities[0], pluginStep))
                {
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                    else
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, CliAction.Deactivated, ConsoleColor.White, $"{attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                }
                else
                {
                    var request = new UpdateRequest
                    {
                        Target = pluginStep
                    };
                    request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                    else
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, CliAction.Deactivated, ConsoleColor.White, $"{attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                    try
                    {
                        CrmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("The dependent component Attribute "))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Deploy assembly stopped.");
                        }
                        return null;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message}. Deploy assembly stopped.");
                        return null;
                    }
                }
            }

            if (
                (
                    (rows.Entities.Count == 0) &&
                    (attribute.Action == PluginStepOperationEnum.Deactivate)
                )
                ||
                (
                    (rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 0 && attribute.Action == PluginStepOperationEnum.Deactivate) ||
                    (rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == null && attribute.Action == PluginStepOperationEnum.Deactivate)
                )
               )
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(1);
                update["statuscode"] = new OptionSetValue(2);
                CrmServiceClient.Update(update);
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Deactivated, ConsoleColor.White, $"{attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
            }
            else if (
                rows.Entities.Count > 0 &&
                rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 1 &&
                attribute.Action == PluginStepOperationEnum.Activate)
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(0);
                update["statuscode"] = new OptionSetValue(1);
                CrmServiceClient.Update(update);
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Activated, ConsoleColor.White, $"{attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
            }
            return pluginStepId.Value;
        }
        private bool IsChangedPluginStep(bool alreadyChanged, Entity _old, Entity _new)
        {
            if (alreadyChanged) return true;
            var old = new SdkMessageProcessingStep(_old);
            var @new = new SdkMessageProcessingStep(_new);
            if (
                old.Name != @new.Name ||
                (old.Configuration ?? string.Empty) != @new.Configuration ||
                (old.Description ?? string.Empty) != (@new.Description ?? Const.WindowTitle) ||
                old.Mode != @new.Mode ||
                old.Rank != @new.Rank ||
                old.Stage != @new.Stage ||
                old.AsyncAutoDelete != @new.AsyncAutoDelete ||
                //old.PluginTypeId?.Id != @new.PluginTypeId?.Id ||
                old.SdkMessageFilterId?.Id != @new.SdkMessageFilterId?.Id ||
                old.SdkMessageId?.Id != @new.SdkMessageId?.Id ||
                (old.FilteringAttributes ?? string.Empty) != @new.FilteringAttributes ||
                old.ImpersonatingUserId?.Id != @new.ImpersonatingUserId?.Id ||
                old.SupportedDeployment != @new.SupportedDeployment)
                return true;
            return false;
            ;
        }
        private Entity GetSecureEntity(Guid pluginStepId)
        {
            var fetchData = new
            {
                sdkmessageprocessingstepid = pluginStepId
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='name' />
    <attribute name='sdkmessageprocessingstepid' />
    <filter>
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid}'/>
    </filter>
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='outer' alias='s'>
      <attribute name='secureconfig' />
      <attribute name='sdkmessageprocessingstepsecureconfigid' />
    </link-entity>
  </entity>
</fetch>";

            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return null;
            return rows.Entities[0];
        }
        private Guid? DeployPluginType(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            var fetchData = new
            {
                typename = type.FullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='plugintypeid' />
    <attribute name='name' />
    <attribute name='typename' />
    <attribute name='friendlyname' />
    <attribute name='workflowactivitygroupname' />
    <attribute name='description' />
    <attribute name='customworkflowactivityinfo' />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 type name {type.FullName}. Deploy assembly stopped.");
                    return null;
                }
            }
            var pluginType = new Entity("plugintype");
            if (attribute.PluginType == PluginType.Workflow)
            {
                pluginType["name"] = attribute.Name;
                pluginType["pluginassemblyid"] = new EntityReference("pluginassembly", pluginAssemblyId);
                pluginType["typename"] = type.FullName;
                pluginType["friendlyname"] = attribute.FriendlyName;
                pluginType["workflowactivitygroupname"] = attribute.GroupName;
            }
            else
            {
                pluginType["name"] = type.FullName;
                pluginType["pluginassemblyid"] = new EntityReference("pluginassembly", pluginAssemblyId);
                pluginType["typename"] = type.FullName;
                pluginType["friendlyname"] = type.FullName;
            };
            if (string.IsNullOrWhiteSpace(attribute.Description)) {
                if (rows.Entities.Count == 0 || (rows.Entities.Count > 0 && string.IsNullOrWhiteSpace(rows.Entities[0].GetAttributeValue<string>("description"))))
                {
                    pluginType["description"] = Const.WindowTitle;
                }
            }
            else
            {
                pluginType["description"] = attribute.Description;
            }
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                CliLog.WriteLineWarning(SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                var response = (CreateResponse)CrmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                pluginType["plugintypeid"] = rows.Entities[0].Id;
                var request = new UpdateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                try
                {
                    CrmServiceClient.Execute(request);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message}. Deploy assembly stopped.");
                    return null;
                }
                if (IsWorkflowType(type))
                {
                    var old = rows.Entities[0].GetAttributeValue<string>("customworkflowactivityinfo");
                    var @new = CrmServiceClient.Retrieve("plugintype", rows.Entities[0].Id, new ColumnSet("customworkflowactivityinfo")).GetAttributeValue<string>("customworkflowactivityinfo");
                    if (IsEqualsWorkflowType(old, @new))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                    }
                    else
                    {
                        CliLog.WriteLineWarning(SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                    }
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                }
            }
            return rows.Entities[0].Id;
        }
        private bool IsEqualsWorkflowType(string old, string @new)
        {
            return old == @new;
        }
        private Guid? DeployAssembly(string file)
        {
            var assembly = Assembly.ReflectionOnlyLoadFrom(file);
            var assemblyProperties = assembly.GetName().FullName.Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            var assemblyName = assemblyProperties[0];
            var fetchData = new
            {
                name = assemblyName
            };
            var fetchXml = $@"
<fetch>
  <entity name='pluginassembly'>
    <attribute name='pluginassemblyid' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 plugin assembly name {assemblyName}. Deploy assembly stopped.");
                    return null;
                }
            }
            var newContent = Convert.ToBase64String(File.ReadAllBytes(file));
            var plugin = new Entity("pluginassembly")
            {
                ["content"] = newContent,
                ["name"] = assemblyProperties[0],
                ["culture"] = assemblyProperties[4],
                ["version"] = assemblyProperties[2],
                ["publickeytoken"] = assemblyProperties[6],
                ["sourcetype"] = new OptionSetValue(0),
                ["isolationmode"] = GetIsolationMode(file)
            };
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                CliLog.WriteLineWarning(SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName);
                var response = (CreateResponse)CrmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                if (IsEqualsAssembly(oldContent, newContent))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName);
                    return rows.Entities[0].Id;
                }
                else
                {
                    plugin["pluginassemblyid"] = rows.Entities[0].Id;
                    var request = new UpdateRequest
                    {
                        Target = plugin
                    };
                    request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                    CliLog.WriteLineWarning(SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName);
                    try
                    {
                        CrmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message}. Deploy assembly stopped.");
                        return null;
                    }
                }
            }
            return rows.Entities[0].Id;
        }
        private bool IsEqualsAssembly(string oldContent, string newContent)
        {
            return oldContent == newContent;
        }
        private bool IsValidTypes(string file, List<TypeInfo> types)
        {
            if (types.Count == 0)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Not found any valid types to deploy.");
                return false;
            }
            if (!IsValidTypes(types))
            {
                return false;
            }
            if (!IsValidTypesWithCDS(types, Path.GetFileNameWithoutExtension(file)))
            {
                return false;
            }
            return true;
        }
        private bool IsValidTypesWithCDS(List<TypeInfo> types, string fileNameWithoutExtension)
        {
            var fetchData = new
            {
                name = fileNameWithoutExtension
            };
            var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='typename' />
    <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid'>
      <filter>
        <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return true;
            foreach (var entity in rows.Entities)
            {
                var typeName = entity.GetAttributeValue<string>("typename");
                if (types.Count(x => x.FullName == typeName) == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Type: '{typeName}' not found in the assembly file. This type: '{typeName}' already registered to CRM/CDS. Deploy assembly stopped.");
                    CliLog.WriteLineWarning(ConsoleColor.Yellow, $"If you need to deploy this assembly. Please manually remove this type from Plugin Registration Tool and try it again.");
                    return false;
                }
            }
            return true;
        }
        private bool IsValidTypes(List<TypeInfo> types)
        {
            foreach (var type in types)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                if (attributes.Count() > 1)
                {
                    if (IsWorkflowType(type))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Type '{type.FullName}' has multi attribute CrmPluginRegistration. Deploy stopped.");
                        return false;
                    }
                    else
                    {
                        if (attributes.GroupBy(x => x.PluginType).Count() != 1)
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Type '{type.FullName}' has multi invalid attribute CrmPluginRegistration. Deploy stopped.");
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        private List<CrmPluginRegistrationAttribute> GetCrmPluginRegistrationAttributes(TypeInfo type)
        {
            var list = new List<CrmPluginRegistrationAttribute>();
            var attributes = type.GetCustomAttributesData();
            foreach (var attribute in attributes)
                list.Add(ConvertAttributeToCrmPluginRegistration(attribute));
            return list;
        }
        private CrmPluginRegistrationAttribute ConvertAttributeToCrmPluginRegistration(CustomAttributeData data)
        {
            var attribute = new CrmPluginRegistrationAttribute();
            var arguments = data.ConstructorArguments.ToArray();
            var hasNamedArgumentPluginType = false;
            var isCodeActivity = false;
            var isPlugin = false;
            if (arguments.Length == 8)
            {
                attribute.Message = (string)arguments[0].Value;
                attribute.EntityLogicalName = (string)arguments[1].Value;
                attribute.Stage = (StageEnum)Enum.ToObject(typeof(StageEnum), (int)arguments[2].Value);
                attribute.ExecutionMode = (ExecutionModeEnum)Enum.ToObject(typeof(ExecutionModeEnum), (int)arguments[3].Value);
                attribute.FilteringAttributes = (string)arguments[4].Value;
                attribute.Name = (string)arguments[5].Value;
                attribute.ExecutionOrder = (int)arguments[6].Value;
                attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)arguments[7].Value);
                isPlugin = true;
            }
            else if (arguments.Length == 5)
            {
                attribute.Name = (string)arguments[0].Value;
                attribute.FriendlyName = (string)arguments[1].Value;
                attribute.Description = (string)arguments[2].Value;
                attribute.GroupName = (string)arguments[3].Value;
                attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)arguments[4].Value);
                isCodeActivity = true;
            }
            else if (arguments.Length == 3)
            {
                attribute.Name = (string)arguments[0].Value;
                attribute.Message = (string)arguments[1].Value;
                attribute.PluginType = (PluginType)Enum.ToObject(typeof(PluginType), (int)arguments[2].Value);
            }
            foreach (var namedArgument in data.NamedArguments)
            {
                switch (namedArgument.MemberName)
                {
                    case "RunAs":
                        attribute.RunAs = (string)namedArgument.TypedValue.Value;
                        break;
                    case "FriendlyName":
                        attribute.FriendlyName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "GroupName":
                        attribute.GroupName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Description":
                        attribute.Description = (string)namedArgument.TypedValue.Value;
                        break;
                    case "DeleteAsyncOperation":
                        attribute.DeleteAsyncOperation = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Offline":
                        attribute.Offline = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Server":
                        attribute.Server = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Action":
                        attribute.Action = (PluginStepOperationEnum)Enum.ToObject(typeof(PluginStepOperationEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "IsolationMode":
                        attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Message":
                        attribute.Message = (string)namedArgument.TypedValue.Value;
                        break;
                    case "EntityLogicalName":
                        attribute.EntityLogicalName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "FilteringAttributes":
                        attribute.FilteringAttributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Name":
                        attribute.Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "ExecutionOrder":
                        attribute.ExecutionOrder = (int)namedArgument.TypedValue.Value;
                        break;
                    case "Stage":
                        attribute.Stage = (StageEnum)Enum.ToObject(typeof(StageEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "ExecutionMode":
                        attribute.ExecutionMode = (ExecutionModeEnum)Enum.ToObject(typeof(ExecutionModeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "UnSecureConfiguration":
                        attribute.UnSecureConfiguration = (string)namedArgument.TypedValue.Value;
                        break;
                    case "SecureConfiguration":
                        attribute.SecureConfiguration = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Name":
                        attribute.Image1Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Alias":
                        attribute.Image1Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Type":
                        attribute.Image1Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image1Attributes":
                        attribute.Image1Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Name":
                        attribute.Image2Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Alias":
                        attribute.Image2Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Type":
                        attribute.Image2Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image2Attributes":
                        attribute.Image2Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Name":
                        attribute.Image3Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Alias":
                        attribute.Image3Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Type":
                        attribute.Image3Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image3Attributes":
                        attribute.Image3Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Name":
                        attribute.Image4Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Alias":
                        attribute.Image4Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Type":
                        attribute.Image4Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image4Attributes":
                        attribute.Image4Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "PluginType":
                        hasNamedArgumentPluginType = true;
                        attribute.PluginType = (PluginType)Enum.ToObject(typeof(PluginType), (int)namedArgument.TypedValue.Value);
                        break;
                    case "DataSource":
                        attribute.DataSource = (string)namedArgument.TypedValue.Value;
                        break;
                }
            }
            if (!hasNamedArgumentPluginType)
            {
                if (isCodeActivity || attribute.GroupName.Length > 0) attribute.PluginType = PluginType.Workflow;
                if (isPlugin) attribute.PluginType = PluginType.Plugin;
                if (isPlugin && attribute.EntityLogicalName?.ToLower() == "none") attribute.PluginType = PluginType.CustomAction;
            }
            return attribute;
        }
        private List<string> GetFiles(string folder, List<string> includePatternFiles, List<string> excludePatternFiles)
        {
            var includefiles = new List<string>();
            foreach (var includefile in includePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                }
            }
            foreach (var includefile in includePatternFiles)
            {
                var other = includefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
            }
            var excludefiles = new List<string>();
            foreach (var excludefile in excludePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                }
            }
            foreach (var excludefile in excludePatternFiles)
            {
                var other = excludefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
            }
            return includefiles.Where(file => !excludefiles.Contains(file)).Distinct().ToList();
        }
        private List<TypeInfo> GetTypes(string file)
        {
            var assemblyFilePath = new FileInfo(file);
            Assembly assembly = null;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            assembly = Assembly.ReflectionOnlyLoadFrom(file);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            if (assembly == null) return null;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            var allTypes = assembly.DefinedTypes;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            var types = new List<TypeInfo>();
            foreach (var type in allTypes)
            {
                try
                {
                    var attributes = type?.GetCustomAttributesData();
                    if (attributes.Any(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name))
                        types.Add(type);
                }
                catch { }
            }
            return types;
        }
        private Assembly CurrentDomain_ReflectionOnlyAssemblyResolve(object sender, ResolveEventArgs args)
        {
            Assembly assembly;
            var parts = args.Name.Split(',');
            switch (parts[0])
            {
                case "Microsoft.Xrm.Sdk":
                    assembly = Assembly.ReflectionOnlyLoad(parts[0].Trim());
                    break;
                default:
                    assembly = Assembly.ReflectionOnlyLoad(args.Name);
                    break;
            }
            return assembly;
        }
        private bool IsWorkflowType(Type type)
        {
            if (type?.Name == typeof(CodeActivity)?.Name) return true;
            if (type?.BaseType != null) return IsWorkflowType(type?.BaseType);
            return false;
        }
        private OptionSetValue GetIsolationMode(string file)
        {
            var types = GetTypes(file);
            foreach (var type in types)
            {
                if (IsWorkflowType(type)) continue;
                var attributes = GetCrmPluginRegistrationAttributes(type);
                foreach (var attribute in attributes)
                {
                    if (attribute.IsolationMode == IsolationModeEnum.None) return new OptionSetValue(1);
                }
            }
            return new OptionSetValue(2);
        }
        private EntityReference GetSdkMessageFilterId(string entityLogicalName, string message)
        {
            if (entityLogicalName?.Length == 0 || entityLogicalName?.ToLower() == "none") return null;
            var fetchData = new
            {
                primaryobjecttypecode = GetPrimaryObjectTypeCode(entityLogicalName),
                name = message
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessagefilter'>
    <attribute name='sdkmessagefilterid' />
    <filter type='and'>
      <condition attribute='primaryobjecttypecode' operator='eq' value='{fetchData.primaryobjecttypecode}'/>
    </filter>
    <link-entity name='sdkmessage' from='sdkmessageid' to='sdkmessageid'>
      <filter type='and'>
        <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Count == 0 ? null : new EntityReference("sdkmessagefilter", rows.Entities[0].Id);
        }
        private int? GetPrimaryObjectTypeCode(string entityName)
        {
            if (entityName?.Length == 0) return null;
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = entityName.ToLower()
            };
            var response = (RetrieveEntityResponse)CrmServiceClient.Execute(request);
            return response.EntityMetadata.ObjectTypeCode ?? 0;
        }
        private EntityReference GetSdkMessageId(string entityLogicalName, string message)
        {
            if (entityLogicalName?.Length == 0) return null;
            string fetchXml;
            if (entityLogicalName.ToLower() == "none")
            {
                var fetchData = new
                {
                    name = message
                };
                fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            }
            else
            {
                var fetchData = new
                {
                    name = message,
                    primaryobjecttypecode = GetPrimaryObjectTypeCode(entityLogicalName)
                };
                fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
    <link-entity name='sdkmessagefilter' from='sdkmessageid' to='sdkmessageid'>
      <filter type='and'>
        <condition attribute='primaryobjecttypecode' operator='eq' value='{fetchData.primaryobjecttypecode}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            }
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Count == 0 ? null : new EntityReference("sdkmessage", rows.Entities[0].Id);
        }
        private Guid? GetImpersonatingUserId(string runAs)
        {
            if (runAs.Length == 0) return (Guid?)null;
            var fetchData = new
            {
                fullname = runAs
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemuser'>
    <attribute name='systemuserid' />
    <filter type='and'>
      <condition attribute='fullname' operator='eq' value='{fetchData.fullname}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return (Guid?)null;
            return rows.Entities[0].Id;
        }
    }
}
