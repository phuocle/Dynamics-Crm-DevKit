using System.IO;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using System.Linq;
using System;
using DynamicsCrm.DevKit.Cli.Helper;
using System.Reflection;
using System.Collections.Generic;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using DynamicsCrm.DevKit.Shared.Helper;
using System.ServiceModel;
using DynamicsCrm.DevKit.Shared.Extensions;
using System.Activities;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskServer
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[SERVER]";
        private JsonServer json;

        public TaskServer(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .servers.FirstOrDefault(x => x.profile == arguments.Profile);
        }
        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, LOG);
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            if (!IsValid()) return;

            var folder = Path.Combine(currentDirectory, json.folder);
            var files = CliHelper.GetFiles(folder, json.includefiles, json.excludefiles);

            foreach (var file in files)
            {
                var types = GetTypes(file);
                if (types.Count == 0) continue;
                if (!IsValidTypes(types)) continue;
                var pluginAssemblyId = RegisterAssembly(file);
                if (arguments.OnlyUpdateAssembly?.Length > 0) continue;
                if (pluginAssemblyId == Guid.Empty) continue;
                foreach (var type in types)
                {
                    var attributes = GetCrmPluginRegistrationAttributes(type);
                    if (IsCodeActivity(type))
                    {
                        if (attributes.Count() == 1)
                        {
                            RegisterPluginType(pluginAssemblyId, type, attributes[0]);
                        }
                    }
                    else
                    {
                        var pluginTypeId = RegisterPluginType(pluginAssemblyId, type, attributes[0]);
                        if (pluginTypeId == Guid.Empty) continue;
                        foreach(var attribute in attributes)
                        {
                            if (attribute.PluginType == PluginType.Plugin)
                            {
                                var pluginStepId = RegisterPluginStep(pluginTypeId, type, attribute);
                                if (pluginStepId == Guid.Empty) continue;
                                RegisterPluginImage(pluginStepId, type, attribute);
                            }
                        }
                    }

                }
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
        }



        private bool IsCodeActivity(Type type)
        {
            if (type?.Name == typeof(CodeActivity)?.Name) return true;
            if (type?.BaseType != null) return IsCodeActivity(type?.BaseType);
            return false;
        }


        private bool IsValidTypes(List<TypeInfo> types)
        {
            foreach (var type in types)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                if (IsCodeActivity(type))
                {
                    if (attributes.Count() > 1)
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, " Workflow: ", CliLog.ColorRed, type.FullName, CliLog.ColorGreen, " has multi invalid attribute ", CliLog.ColorRed, "CrmPluginRegistration");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        return false;
                    }
                }
                else
                {
                    if (attributes.Count > 1)
                    {
                        var rows = attributes.GroupBy(x => x.PluginType);
                        if (rows.Count() != 1)
                        {
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
                            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, " Plugin: ", CliLog.ColorRed, type.FullName, CliLog.ColorGreen, " has multi invalid attribute ", CliLog.ColorRed, "CrmPluginRegistration");
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
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
                list.Add(attribute.CreateFromData());
            return list;
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution.Length == 0 || json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (!XrmHelper.IsExistSolution(crmServiceClient, json.solution, out var solutionId, out var prefix))
                throw new Exception($"{LOG} solution '{json.solution}' not exist");
            return true;
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

        private bool IsEqualsPluginType(Entity oldEntity, Entity newEntity)
        {
            if (
                oldEntity.GetAttributeValue<string>("name") != newEntity.GetAttributeValue<string>("name") ||
                oldEntity.GetAttributeValue<string>("typename") != newEntity.GetAttributeValue<string>("typename") ||
                oldEntity.GetAttributeValue<string>("friendlyname") != newEntity.GetAttributeValue<string>("friendlyname") ||
                oldEntity.GetAttributeValue<string>("workflowactivitygroupname") != newEntity.GetAttributeValue<string>("workflowactivitygroupname")
               )
                return false;
            return true;
        }

        private bool IsEqualsContentAssembly(string oldContent, string newContent)
        {
            return oldContent == newContent;
        }

        private int GetPrimaryObjectTypeCode(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = entityName.ToLower()
            };
            var response = (RetrieveEntityResponse)crmServiceClient.Execute(request);
            return response.EntityMetadata.ObjectTypeCode ?? 0;
        }

        private EntityReference GetSdkMessageId(string entityLogicalName, string message)
        {
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Count == 0 ? null : new EntityReference("sdkmessage", rows.Entities[0].Id);
        }

        private EntityReference GetSdkMessageFilterId(string entityLogicalName, string message)
        {
            if (entityLogicalName.ToLower() == "none") return null;
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Count == 0 ? null : new EntityReference("sdkmessagefilter", rows.Entities[0].Id);
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
      <condition attribute='fullname' operator='eq' value='{fetchData.fullname/*MOD Administrator*/}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return (Guid?)null;
            return rows.Entities[0].Id;
        }

        private Guid RegisterAssembly(string file)
        {
            var assembly = Assembly.ReflectionOnlyLoadFrom(file);
            var assemblyProperties = assembly.GetName().FullName.Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            var assemblyName = assemblyProperties[0];
            var pluginAssemblyId = Guid.Empty;
            var newContent = Convert.ToBase64String(File.ReadAllBytes(file));
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count == 1)
                {
                    var entity = rows.Entities[0];
                    pluginAssemblyId = entity.Id;
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Found more than 1 plugin assembly name: {assemblyName}");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return Guid.Empty;
                }
            }
            var plugin = new Entity("pluginassembly")
            {
                ["content"] = newContent,
                ["name"] = assemblyProperties[0],
                ["culture"] = assemblyProperties[4],
                ["version"] = assemblyProperties[2],
                ["publickeytoken"] = assemblyProperties[6],
                ["sourcetype"] = new OptionSetValue(0),
                ["isolationmode"] = new OptionSetValue(2)
            };
            if (pluginAssemblyId == Guid.Empty)
            {
                var request = new CreateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", json.solution);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Registering", CliLog.ColorGreen, " Assembly ", CliLog.ColorCyan, assemblyName);
                var response = (CreateResponse)crmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                if (IsEqualsContentAssembly(oldContent, newContent)) {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Assembly ", CliLog.ColorCyan, assemblyName);
                }
                else {
                    plugin["pluginassemblyid"] = pluginAssemblyId;
                    var request = new UpdateRequest
                    {
                        Target = plugin
                    };
                    request.Parameters.Add("SolutionUniqueName", json.solution);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Updating", CliLog.ColorGreen, " Assembly ", CliLog.ColorCyan, assemblyName);
                    try
                    {
                        crmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLine();
                        CliLog.WriteLine();
                        CliLog.WriteLine(ConsoleColor.White, fe.Message);
                        CliLog.WriteLine();
                        CliLog.WriteLine();
                        CliLog.WriteLine(ConsoleColor.Red, $"!!! DEPLOY {LOG} FAILED !!!");
                        throw;
                    }
                }
                return pluginAssemblyId;
            }
        }

        private Guid RegisterPluginType(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            var pluginTypeId = Guid.Empty;
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
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count == 1)
                {
                    var entity = rows.Entities[0];
                    pluginTypeId = entity.Id;
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Found more than 1 plugin type name: {type.FullName}");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return Guid.Empty;
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
            if (pluginTypeId == Guid.Empty)
            {
                var request = new CreateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", json.solution);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Registering ", CliLog.ColorGreen, $"{attribute.PluginType.ToString()} ", CliLog.ColorCyan, $"{type.FullName}");
                var response = (CreateResponse)crmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                pluginType["plugintypeid"] = pluginTypeId;
                if (IsEqualsPluginType(rows.Entities[0], pluginType))
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", "   ", CliLog.ColorGreen, $"{attribute.PluginType.ToString()} ", CliLog.ColorRed, $"{type.FullName}");
                }
                else
                {
                    var request = new UpdateRequest
                    {
                        Target = pluginType
                    };
                    request.Parameters.Add("SolutionUniqueName", json.solution);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Updating ", CliLog.ColorGreen, $"{attribute.PluginType.ToString()} ", CliLog.ColorCyan, $"{type.FullName}");

                    crmServiceClient.Execute(request);
                }
                return pluginTypeId;
            }
        }

        private Guid RegisterPluginStep(Guid pluginTypeId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            var pluginStepId = Guid.Empty;
            if (attribute?.Message?.ToLower() == "update")
            {
                if (attribute?.FilteringAttributes?.Length == 0)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Update message need provide FilteringAttributes value");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return Guid.Empty;
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
    <attribute name='sdkmessageprocessingstepid' />
    <filter type='and'>
      <condition attribute='plugintypeid' operator='eq' value='{fetchData.plugintypeid}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='sdkmessageidname' operator='eq' value='{fetchData.sdkmessageidname}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count == 1)
                {
                    var entity = rows.Entities[0];
                    pluginStepId = entity.Id;
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Found more than 1 plugin step name: {type.FullName}");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return Guid.Empty;
                }
            }
            var sdkMessageFilterId = GetSdkMessageFilterId(attribute.EntityLogicalName, attribute.Message);
            var sdkMessageId = GetSdkMessageId(attribute.EntityLogicalName, attribute.Message);
            var impersonatingUserId = GetImpersonatingUserId(attribute.RunAs);
            if (attribute.ExecutionMode == 0) attribute.DeleteAsyncOperation = false; //when ExecutionModeEnum.Synchronous this field always false;
            var pluginStep = new Entity("sdkmessageprocessingstep")
            {
                ["name"] = attribute.Name,
                ["configuration"] = attribute.UnSecureConfiguration,
                ["description"] = attribute.Description,
                ["mode"] = new OptionSetValue(attribute.ExecutionMode == ExecutionModeEnum.Asynchronous ? 1 : 0),
                ["rank"] = attribute.ExecutionOrder,
                ["stage"] = new OptionSetValue((int)attribute.Stage),
                ["asyncautodelete"] = attribute.DeleteAsyncOperation,
                ["plugintypeid"] = new EntityReference("plugintype", pluginTypeId),
                ["sdkmessagefilterid"] = sdkMessageFilterId,
                ["sdkmessageid"] = sdkMessageId,
                ["filteringattributes"] = attribute.FilteringAttributes.Replace(" ", ""),
                ["impersonatinguserid"] = impersonatingUserId != null ? new EntityReference("systemuser", impersonatingUserId.Value) : null
            };
            int supportDeployment;
            if (attribute.Server && attribute.Offline)
                supportDeployment = 2; // Both
            else if (!attribute.Server && attribute.Offline)
                supportDeployment = 1; // Offline only
            else
                supportDeployment = 0; // Server Only
            pluginStep["supporteddeployment"] = new OptionSetValue(supportDeployment);

            if (pluginStepId == Guid.Empty)
            {
                if (attribute.SecureConfiguration.Length > 0)
                {
                    var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                    secureEntity["secureconfig"] = attribute.SecureConfiguration;
                    var sdkmessageprocessingstepsecureconfigid = crmServiceClient.Create(secureEntity);
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                }
                var request = new CreateRequest
                {
                    Target = pluginStep
                };
                request.Parameters.Add("SolutionUniqueName", json.solution);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "      Registering", CliLog.ColorGreen, $" Step: ", CliLog.ColorCyan, $"{attribute.Name}");
                try
                {
                    var response = (CreateResponse)crmServiceClient.Execute(request);
                    pluginStepId = response.id;
                }
                catch(Exception e)
                {
                    if (e.Message.Contains("The dependent component Attribute "))
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Plugin Step: {attribute.Name} have invalid Image Attribute: {attribute.FilteringAttributes}");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                    }
                    return Guid.Empty;
                }

                if (attribute.Action == PluginStepOperationEnum.Deactivate)
                {
                    var update = new Entity("sdkmessageprocessingstep", pluginStepId);
                    update["statecode"] = new OptionSetValue(1);
                    update["statuscode"] = new OptionSetValue(2);
                    crmServiceClient.Update(update);
                }
            }
            else
            {
                pluginStep["sdkmessageprocessingstepid"] = pluginStepId;
            }
            return pluginStepId;
        }

        private void RegisterPluginImage(Guid pluginStepId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            if (attribute?.Image1Name?.Length > 0 && attribute?.Image1Attributes?.Length > 0)
                RegisterPluginImage(attribute.Message, attribute.Image1Name, attribute.Image1Alias, attribute.Image1Type, attribute.Image1Attributes, pluginStepId, attribute.Name);
            if (attribute?.Image2Name?.Length > 0 && attribute?.Image2Attributes?.Length > 0)
                RegisterPluginImage(attribute.Message, attribute.Image2Name, attribute.Image2Alias, attribute.Image2Type, attribute.Image2Attributes, pluginStepId, attribute.Name);
            if (attribute?.Image3Name?.Length > 0 && attribute?.Image3Attributes?.Length > 0)
                RegisterPluginImage(attribute.Message, attribute.Image3Name, attribute.Image3Alias, attribute.Image3Type, attribute.Image3Attributes, pluginStepId, attribute.Name);
            if (attribute?.Image4Name?.Length > 0 && attribute?.Image4Attributes?.Length > 0)
                RegisterPluginImage(attribute.Message, attribute.Image4Name, attribute.Image4Alias, attribute.Image4Type, attribute.Image4Attributes, pluginStepId, attribute.Name);
        }

        private void RegisterPluginImage(string message, string imageName, string imageAliasName, ImageTypeEnum imageType, string imageAttributes, Guid pluginStepId, string pluginStepName)
        {
            var pluginImageId = Guid.Empty;
            if (imageAliasName.Length == 0) imageAliasName = imageName;
            imageAttributes = imageAttributes.Replace(" ", string.Empty);

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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count == 1)
                {
                    var entity = rows.Entities[0];
                    pluginImageId = entity.Id;
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Found more than 1 plugin image name: {imageName}");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return;
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
            if (pluginImageId == Guid.Empty)
            {
                var request = new CreateRequest
                {
                    Target = pluginImage
                };
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "          Registering", CliLog.ColorGreen, $" Image: ", CliLog.ColorCyan, imageName);
                try
                {
                    crmServiceClient.Execute(request);
                }
                catch(Exception e)
                {
                    if (e.Message.Contains("entity doesn't contain attribute with")){
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Plugin Step: {pluginStepName} have invalid Image Attribute: {imageAttributes}");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                    }
                    else
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Plugin Step: {pluginStepName} does not support: {imageType}");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                    }
                    return;
                }
            }
            else
            {

            }
        }
    }
}
