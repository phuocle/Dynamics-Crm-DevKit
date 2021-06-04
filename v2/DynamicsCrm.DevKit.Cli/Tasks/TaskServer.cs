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
        private class DataProviderEvent
        {
            public Guid PluginTypeId { get; set; }
            public string Message { get; set; }
            public string DataSource { get; set; }
        }

        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[SERVER]";
        private JsonServer json;
        private Guid SolutionId = Guid.Empty;
        private string Prefix = string.Empty;

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
                var dataProviderEvents = new List<DataProviderEvent>();
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
                            if (attribute.PluginType == PluginType.Plugin ||
                                attribute.PluginType == PluginType.CustomAction)
                            {
                                var pluginStepId = RegisterPluginStep(pluginTypeId, type, attribute);
                                if (pluginStepId == Guid.Empty) continue;
                                if (attribute.PluginType == PluginType.Plugin && HasPluginImage(attribute))
                                {
                                    if (IsSupportPluginImage(attribute))
                                    {
                                        RegisterPluginImage(pluginStepId, type, attribute);
                                    }
                                    else
                                    {
                                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"The message {attribute.Message} of {attribute.Name} not support Image");
                                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                                    }
                                }
                            }
                            else if (attribute.PluginType == PluginType.DataProvider)
                            {
                                dataProviderEvents.Add(new DataProviderEvent
                                {
                                    PluginTypeId = pluginTypeId,
                                    Message = attribute.Message,
                                    DataSource = attribute.DataSource
                                });
                            }
                            else if (attribute.PluginType == PluginType.CustomApi)
                            {
                                RegisterCustomApi(pluginTypeId, type.FullName, attribute);
                            }
                        }
                    }

                }
                if (dataProviderEvents.Count > 0)
                {
                    var dataSources = from dataProviderEvent in dataProviderEvents
                                      group dataProviderEvent by dataProviderEvent.DataSource into @group
                                      select new { DataSource = @group.Key };
                    foreach (var dataSource in dataSources)
                    {
                        if (dataSource.DataSource == null) continue;
                        if (IsValidDataProvider(dataProviderEvents, dataSource.DataSource))
                        {
                            RegisterDataProvider(dataProviderEvents, dataSource.DataSource);
                        }
                    }
                }
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
        }

        private bool IsValidDataProvider(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var checkDataSource = dataSource.ToLower().StartsWith(Prefix.ToLower()) ? dataSource : $"{Prefix?.ToLower()}{dataSource}";
            if (!XrmHelper.IsExistDataSource(crmServiceClient, $"{checkDataSource}"))
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"DataSource {dataSource} with prefix {Prefix.ToLower()} not exist ({checkDataSource})");
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                return false;
            }
            var countRetrieve = dataProviderEvents.Count(x => x.Message == "Retrieve" && x.DataSource == dataSource);
            if (countRetrieve != 0 && countRetrieve != 1)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Multiple message Retrieve found with data source {dataSource} ({checkDataSource})");
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                return false;
            }
            var countRetrieveMultiple = dataProviderEvents.Count(x => x.Message == "RetrieveMultiple" && x.DataSource == dataSource);
            if (countRetrieveMultiple != 0 && countRetrieveMultiple != 1)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Multiple message RetrieveMultiple found with data source {dataSource} ({checkDataSource})");
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                return false;
            }
            if (XrmHelper.IsVirtualTableSupportCRUD(crmServiceClient))
            {
                var countCreate = dataProviderEvents.Count(x => x.Message == "Create" && x.DataSource == dataSource);
                if (countCreate != 0 && countCreate != 1)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Multiple message Create found with data source {dataSource} ({checkDataSource})");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return false;
                }
                var countUpdate = dataProviderEvents.Count(x => x.Message == "Update" && x.DataSource == dataSource);
                if (countUpdate != 0 && countUpdate != 1)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Multiple message Update found with data source {dataSource} ({checkDataSource})");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return false;
                }
                var countDelete = dataProviderEvents.Count(x => x.Message == "Delete" && x.DataSource == dataSource);
                if (countDelete != 0 && countDelete != 1)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Multiple message Delete found with data source {dataSource} ({checkDataSource})");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return false;
                }
            }
            return true;
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
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, " Workflow ", CliLog.ColorRed, type.FullName, CliLog.ColorGreen, " has multi invalid attribute ", CliLog.ColorRed, "CrmPluginRegistration");
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
                            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, " Plugin ", CliLog.ColorRed, type.FullName, CliLog.ColorGreen, " has multi invalid attribute ", CliLog.ColorRed, "CrmPluginRegistration");
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
                throw new Exception($"{LOG} 'profile' not found '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution.Length == 0 || json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (!XrmHelper.IsExistSolution(crmServiceClient, json.solution, out var solutionId, out var prefix))
                throw new Exception($"{LOG} solution '{json.solution}' not exist");
            SolutionId = solutionId;
            Prefix = prefix;
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

        private int? GetPrimaryObjectTypeCode(string entityName)
        {
            if (entityName?.Length == 0) return null;
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Count == 0 ? null : new EntityReference("sdkmessage", rows.Entities[0].Id);
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

        private Entity GetSecureEntity(Guid pluginStepId)
        {
            if (pluginStepId == Guid.Empty) return null;
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
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid/*29ed2c38-79c3-eb11-bacc-00224816b7d6*/}'/>
    </filter>
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='outer' alias='s'>
      <attribute name='secureconfig' />
      <attribute name='sdkmessageprocessingstepsecureconfigid' />
    </link-entity>
  </entity>
</fetch>";

            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return null;
            return rows.Entities[0];
        }

        private bool IsChangedPluginStep(Entity check, Entity step)
        {
            foreach (var key in check.Attributes.Keys)
            {
                if (step.Attributes.Contains(key))
                {
                    object checkValue = null;
                    object stepValue = null;
                    if (check.Attributes[key] is OptionSetValue && step.Attributes[key] is OptionSetValue)
                    {
                        checkValue = ((OptionSetValue)check.Attributes[key]).Value;
                        stepValue = ((OptionSetValue)step.Attributes[key]).Value;
                    }
                    else if (check.Attributes[key] is EntityReference && step.Attributes[key] is EntityReference)
                    {
                        checkValue = ((EntityReference)check.Attributes[key]).Id;
                        stepValue = ((EntityReference)step.Attributes[key]).Id;
                    }
                    else
                    {
                        stepValue = step.Attributes[key];
                        checkValue = check.Attributes[key];
                    }
                    if (stepValue?.ToString() != checkValue?.ToString())
                        return true;
                }
            }
            return false;
        }
        private Entity GetEntityDataProviderId(string dataSource)
        {
            var fetchData = new
            {
                datasourcelogicalname = dataSource,
                ismanaged = "0",
                iscustomizable = "1",
                name = dataSource
            };
            var fetchXml = $@"
<fetch>
  <entity name='entitydataprovider'>
    <attribute name='entitydataproviderid' />
    <attribute name='retrievemultipleplugin' />
    <attribute name='createplugin' />
    <attribute name='deleteplugin' />
    <attribute name='updateplugin' />
    <attribute name='retrieveplugin' />
    <filter>
      <condition attribute='datasourcelogicalname' operator='eq' value='{fetchData.datasourcelogicalname}'/>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged}'/>
      <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return null;
            return rows.Entities[0];
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
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Found more than 1 plugin assembly name {assemblyName}");
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
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Registering", CliLog.ColorWhite, " Assembly ", CliLog.ColorCyan, assemblyName);
                var response = (CreateResponse)crmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                if (IsEqualsContentAssembly(oldContent, newContent)) {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, "Assembly ", CliLog.ColorCyan, assemblyName);
                }
                else {
                    plugin["pluginassemblyid"] = pluginAssemblyId;
                    var request = new UpdateRequest
                    {
                        Target = plugin
                    };
                    request.Parameters.Add("SolutionUniqueName", json.solution);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Updating", CliLog.ColorWhite, " Assembly ", CliLog.ColorCyan, assemblyName);
                    try
                    {
                        crmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, fe.Message);
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
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
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Found more than 1 plugin type name {type.FullName}");
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
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Registering ", GetColorByPluginType(attribute.PluginType), $"{attribute.PluginType.ToString()} ", CliLog.ColorCyan, $"{type.FullName}");
                var response = (CreateResponse)crmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                pluginType["plugintypeid"] = pluginTypeId;
                if (IsEqualsPluginType(rows.Entities[0], pluginType))
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", "   ", GetColorByPluginType(attribute.PluginType), $"{attribute.PluginType.ToString()} ", CliLog.ColorCyan, $"{type.FullName}");
                }
                else
                {
                    var request = new UpdateRequest
                    {
                        Target = pluginType
                    };
                    request.Parameters.Add("SolutionUniqueName", json.solution);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Updating ", GetColorByPluginType(attribute.PluginType), $"{attribute.PluginType.ToString()} ", CliLog.ColorCyan, $"{type.FullName}");

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
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Update message need provide FilteringAttributes value");
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
    <all-attributes />
    <filter type='and'>
      <condition attribute='plugintypeid' operator='eq' value='{fetchData.plugintypeid}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='sdkmessageidname' operator='eq' value='{fetchData.sdkmessageidname}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            Entity oldPluginStep = null;
            if (rows.Entities.Count == 0)
            {
                oldPluginStep = new Entity("sdkmessageprocessingstep", Guid.Empty);
            }
            else if (rows.Entities.Count == 1)
            {
                oldPluginStep = rows.Entities[0];
                pluginStepId = oldPluginStep.Id;
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Found more than 1 plugin step name {type.FullName}");
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                return Guid.Empty;
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
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "      Registering", GetColorByPluginType(attribute.PluginType), $" Step ", CliLog.ColorCyan, $"{attribute.Name}");
                try
                {
                    var response = (CreateResponse)crmServiceClient.Execute(request);
                    pluginStepId = response.id;
                }
                catch (Exception e)
                {
                    if (e.Message.Contains("The dependent component Attribute "))
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Plugin Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                    }
                    return Guid.Empty;
                }
            }
            else
            {
                var hasChangedPluginStep = false;
                pluginStep["sdkmessageprocessingstepid"] = pluginStepId;
                var entity = GetSecureEntity(pluginStepId);
                if (entity != null)
                {
                    var secureconfig = entity.GetAttributeValue<AliasedValue>("s.secureconfig");
                    if (secureconfig == null)
                    {
                        if (attribute.SecureConfiguration.Length > 0)
                        {
                            var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                            secureEntity["secureconfig"] = attribute.SecureConfiguration;
                            var sdkmessageprocessingstepsecureconfigid = crmServiceClient.Create(secureEntity);
                            pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                            hasChangedPluginStep = true;
                        }
                    }
                    else
                    {
                        var sdkmessageprocessingstepsecureconfigid = (Guid)entity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid").Value;
                        if (secureconfig.Value.ToString() != attribute.SecureConfiguration)
                        {
                            var update = new Entity("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                            update["secureconfig"] = attribute.SecureConfiguration;
                            crmServiceClient.Update(update);
                            hasChangedPluginStep = true;
                        }
                        else if (attribute.SecureConfiguration.Length == 0)
                        {
                            var update = new Entity("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                            update["secureconfig"] = null;
                            crmServiceClient.Update(update);
                            hasChangedPluginStep = true;
                        }
                    }
                }
                if (!hasChangedPluginStep && !IsChangedPluginStep(oldPluginStep, pluginStep))
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", GetColorByPluginType(attribute.PluginType), $"      Step ", CliLog.ColorCyan, $"{attribute.Name}");
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "      Updating", GetColorByPluginType(attribute.PluginType), $" Step ", CliLog.ColorCyan, $"{attribute.Name}");
                    try
                    {
                        crmServiceClient.Update(pluginStep);
                    }
                    catch (FaultException e)
                    {
                        if (e.Message.Contains("The dependent component Attribute "))
                        {
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
                            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Plugin Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}");
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
                        }
                        return Guid.Empty;
                    }
                }
            }
            if (
                (oldPluginStep?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 0 && attribute.Action == PluginStepOperationEnum.Deactivate) ||
                (oldPluginStep?.GetAttributeValue<OptionSetValue>("statecode")?.Value == null && attribute.Action == PluginStepOperationEnum.Deactivate)
               )
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId);
                update["statecode"] = new OptionSetValue(1);
                update["statuscode"] = new OptionSetValue(2);
                crmServiceClient.Update(update);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "          Deactivated", GetColorByPluginType(attribute.PluginType), $" Step ", CliLog.ColorCyan, $"{attribute.Name}");
            }
            else if (oldPluginStep?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 1 && attribute.Action == PluginStepOperationEnum.Activate)
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId);
                update["statecode"] = new OptionSetValue(0);
                update["statuscode"] = new OptionSetValue(1);
                crmServiceClient.Update(update);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "          Activated", GetColorByPluginType(attribute.PluginType), $" Step ", CliLog.ColorCyan, $"{attribute.Name}");
            }
            return pluginStepId;
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
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Found more than 1 plugin image name {imageName}");
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
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "          Registering", CliLog.ColorBlue, $" Image ", CliLog.ColorCyan, imageName);
                try
                {
                    crmServiceClient.Execute(request);
                }
                catch(Exception e)
                {
                    if (e.Message.Contains("entity doesn't contain attribute with")){
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Plugin Step {pluginStepName} have invalid Image Attribute {imageAttributes}");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                    }
                    else
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Plugin Step: {pluginStepName} does not support {imageType}");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                    }
                    return;
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
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorBlue, $"          Image ", CliLog.ColorCyan, imageName);
                }
                else
                {
                    if (attributes != imageAttributes && imageAttributes.Length != 0)
                    {
                        pluginImage["sdkmessageprocessingstepimageid"] = rows.Entities[0].Id;
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "          Updating", CliLog.ColorBlue, " Image ", CliLog.ColorCyan, $"{imageName}");
                    }
                    else if (imageAttributes.Length == 0)
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "          Deleting", CliLog.ColorBlue, " Image ", CliLog.ColorCyan, $"{imageName}");
                        crmServiceClient.Delete("sdkmessageprocessingstepimage", rows.Entities[0].Id);
                        pluginImage["sdkmessageprocessingstepimageid"] = null;
                    }
                    try
                    {
                        crmServiceClient.Update(pluginImage);
                    }
                    catch (Exception e)
                    {
                        if (e.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
                            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Plugin Step: {pluginStepName} have invalid Image Attribute {imageAttributes}");
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
                        }
                        else
                        {
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
                            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Plugin Step: {pluginStepName} does not support {imageType}");
                            CliLog.WriteLine(CliLog.ColorWhite, "|");
                        }
                    }
                }
            }
        }

        private ConsoleColor GetColorByPluginType(PluginType pluginType)
        {
            if (pluginType == PluginType.DataProvider) return CliLog.ColorMagenta;
            else if (pluginType == PluginType.CustomApi) return CliLog.ColorYellow;
            else if (pluginType == PluginType.Plugin) return CliLog.ColorBlue;
            else if (pluginType == PluginType.CustomAction) return CliLog.ColorDarkGray;
            else return CliLog.ColorGreen;
        }

        private void RegisterDataProvider(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var events = string.Empty;
            var  logicalNameDataSource = dataSource.ToLower().StartsWith(Prefix.ToLower()) ? dataSource.ToLower() : $"{Prefix?.ToLower()}{dataSource}".ToLower();
            var entity = new Entity("entitydataprovider");
            entity.Attributes.Add("name", logicalNameDataSource);
            entity.Attributes.Add("datasourcelogicalname", logicalNameDataSource);
            entity.Attributes.Add("solutionid", SolutionId);
            var retrieve = dataProviderEvents.Where(x => x.Message == "Retrieve" && x.DataSource == dataSource).FirstOrDefault();
            if (retrieve == null)
                entity.Attributes.Add("retrieveplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
            else
            {
                entity.Attributes.Add("retrieveplugin", retrieve.PluginTypeId);
                events += "Retrieve, ";
            }

            var retrievemultiple = dataProviderEvents.Where(x => x.Message == "RetrieveMultiple" && x.DataSource == dataSource).FirstOrDefault();
            if (retrievemultiple == null)
                entity.Attributes.Add("retrievemultipleplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
            else
            {
                entity.Attributes.Add("retrievemultipleplugin", retrievemultiple.PluginTypeId);
                events += "RetrieveMultiple, ";
            }
            if (XrmHelper.IsVirtualTableSupportCRUD(crmServiceClient))
            {
                var create = dataProviderEvents.Where(x => x.Message == "Create" && x.DataSource == dataSource).FirstOrDefault();
                if (create == null)
                    entity.Attributes.Add("createplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
                else
                {
                    entity.Attributes.Add("createplugin", create.PluginTypeId);
                    events += "Create, ";
                }
                var update = dataProviderEvents.Where(x => x.Message == "Update" && x.DataSource == dataSource).FirstOrDefault();
                if (update == null)
                    entity.Attributes.Add("updateplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
                else
                {
                    entity.Attributes.Add("updateplugin", update.PluginTypeId);
                    events += "Update, ";
                }
                var delete = dataProviderEvents.Where(x => x.Message == "Delete" && x.DataSource == dataSource).FirstOrDefault();
                if (delete == null)
                    entity.Attributes.Add("deleteplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
                else
                {
                    entity.Attributes.Add("deleteplugin", delete.PluginTypeId);
                    events += "Delete, ";
                }
            }
            events = events.TrimEnd(", ".ToCharArray());
            var entityDataProvider = GetEntityDataProviderId(logicalNameDataSource);
            if (entityDataProvider == null)
            {
                var request = new CreateRequest();
                if (request.Parameters == null)
                    request.Parameters = new ParameterCollection();
                request.Target = entity;
                request.Parameters.Add("SuppressDuplicateDetection", true);
                request.Parameters.Add("SolutionUniqueName", json.solution);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Registering", CliLog.ColorMagenta, " Data Provider: ", CliLog.ColorCyan, $"{logicalNameDataSource}", CliLog.ColorWhite, " linked with events ", CliLog.ColorCyan, events);
                crmServiceClient.Execute(request);
            }
            else
            {
                var entitydataproviderid = entityDataProvider.GetAttributeValue<Guid?>("entitydataproviderid");
                var retrieveplugin = entityDataProvider.GetAttributeValue<Guid?>("retrieveplugin");
                var retrievemultipleplugin = entityDataProvider.GetAttributeValue<Guid?>("retrievemultipleplugin");
                var createplugin = entityDataProvider.GetAttributeValue<Guid?>("createplugin");
                var deleteplugin = entityDataProvider.GetAttributeValue<Guid?>("deleteplugin");
                var updateplugin = entityDataProvider.GetAttributeValue<Guid?>("updateplugin");
                if (retrievemultipleplugin != entity.GetAttributeValue<Guid>("retrievemultipleplugin") ||
                    retrieveplugin != entity.GetAttributeValue<Guid>("retrieveplugin") ||
                    createplugin != entity.GetAttributeValue<Guid>("createplugin") ||
                    deleteplugin != entity.GetAttributeValue<Guid>("deleteplugin") ||
                    updateplugin != entity.GetAttributeValue<Guid>("updateplugin")
                    )
                {
                    entity.Attributes.Add("entitydataproviderid", entitydataproviderid.Value);
                    var request = new UpdateRequest
                    {
                        Target = entity
                    };
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Updating", CliLog.ColorMagenta, " Data Provider ", CliLog.ColorCyan, $"{logicalNameDataSource}", CliLog.ColorWhite, " linked with events ", CliLog.ColorCyan, events);
                    crmServiceClient.Execute(request);
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorMagenta, "   DataProvider ", CliLog.ColorCyan, $"{logicalNameDataSource}", CliLog.ColorWhite, " linked with events ", CliLog.ColorCyan, events);
                }
            }
        }

        private void RegisterCustomApi(Guid pluginTypeId, string pluginTypeName, CrmPluginRegistrationAttribute attribute)
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR ", CliLog.ColorRed, $"Custom Api with message {attribute.Message} not found");
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                return;
            }
            var entity = rows.Entities[0];
            if (entity.GetAttributeValue<EntityReference>("plugintypeid")?.Id.ToString("D") == pluginTypeId.ToString("D"))
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorYellow, $"      CustomApi ", CliLog.ColorCyan, $"{attribute.Message}", CliLog.ColorWhite, " with type ", CliLog.ColorCyan, pluginTypeName);
            }
            else
            {
                var update = new Entity("customapi", entity.Id);
                update["plugintypeid"] = new EntityReference("plugintype", pluginTypeId);
                crmServiceClient.Update(update);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "      Updating", CliLog.ColorYellow, $" CustomApi ", CliLog.ColorCyan, $"{attribute.Message}", CliLog.ColorWhite, " with type ", CliLog.ColorCyan, pluginTypeName);
            }
        }
    }
}
