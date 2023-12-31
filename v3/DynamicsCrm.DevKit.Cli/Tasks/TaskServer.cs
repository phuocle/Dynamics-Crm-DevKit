using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Entities;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using NuGet.Packaging;
using System;
using System.Activities;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.ServiceModel;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskServer : ITask
    {
        private class DataProviderEvent
        {
            public Guid PluginTypeId { get; set; }

            public string Message { get; set; }

            public string DataSource { get; set; }
        }

        private const string SPACE = "  ";

        public TaskServer(CommandLineArgs arg, Json json)
        {
            this.Arg = arg;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
            switch (arg.Type)
            {
                case nameof(CliType.servers):
                    Json = json.servers.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.servers).ToUpper()}]";
                    break;
                case nameof(CliType.workflows):
                    Json = json.workflows.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.workflows).ToUpper()}]";
                    break;
                case nameof(CliType.plugins):
                    Json = json.plugins.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.plugins).ToUpper()}]";
                    break;
                case nameof(CliType.dataproviders):
                    Json = json.dataproviders.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.dataproviders).ToUpper()}]";
                    break;
            }
        }

        private enum DeployFileType
        {
            Dll,
            Nuget
        }

        public string CurrentDirectory { get; set; }

        public string TaskType { get; set; }

        public CrmServiceClient CrmServiceClient { get; set; }

        public CommandLineArgs Arg { get; set; }

        private JsonServer Json { get; }

        private bool IsOk { get; set; }

        private Guid SolutionId { get; set; }

        private string Prefix { get; set; }

        private string CurrentFolder => $"{CurrentDirectory}\\{Json.folder}";

        public bool IsValid()
        {
            if (Json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.folder == "???" || (Json.folder != null && Json?.folder?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            (IsOk, SolutionId, Prefix) = XrmHelper.IsExistSolution(CrmServiceClient, Json.solution);
            if (!IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                var files = GetFiles(CurrentFolder, Json.includefiles, Json.excludefiles);
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
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }

        private void DeployFiles(List<string> files)
        {
            foreach (var file in files)
            {
                if (file.EndsWith(".dll"))
                    DeployDll(file);
                else if (file.EndsWith(".nupkg"))
                    DeployPackage(file);
                else
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Not support file extension: {new FileInfo(file).Extension}");
            }
        }

        private void DeployDll(string file, DeployFileType deployFileType = DeployFileType.Dll, string nugetFileName = "")
        {
            if (deployFileType == DeployFileType.Dll)
                CliLog.WriteLineWarning(ConsoleColor.Cyan, $"{Path.GetFileName(file)}");
            var types = GetTypes(file);
            if (!IsValidTypes(file, types)) return;
            DeployFile(file, types, deployFileType);
        }

        private void DeployFile(string file, List<TypeInfo> types, DeployFileType deployFileType)
        {
            var dataProviderEvents = new List<DataProviderEvent>();
            var pluginAssemblyId = DeployAssembly(file, deployFileType);
            if (pluginAssemblyId == null) return;
            if (Arg?.OnlyUpdateAssembly?.Length > 0) return;
            foreach (var type in types)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                var pluginTypeId = DeployPluginType(pluginAssemblyId.Value, type, attributes[0], deployFileType);
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
                                    CliLog.WriteLineError(ConsoleColor.Yellow, $"The message {attribute.Message} of {attribute.Name} not support Image. Assemply deployed, but the deployment of this assembly stopped.");
                                    return;
                                }
                            }
                            break;
                        case PluginType.DataProvider:
                            dataProviderEvents.Add(new DataProviderEvent
                            {
                                PluginTypeId = pluginTypeId.Value,
                                Message = attribute.Message,
                                DataSource = attribute.DataSource
                            });
                            break;
                        case PluginType.CustomApi:
                            DeployCustomApiStep(pluginTypeId.Value, type.FullName, attribute);
                            break;
                        default:
                            break;
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

        private bool IsValidDataProvider(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var checkDataSource = dataSource.ToLower().StartsWith(Prefix.ToLower()) ? dataSource : $"{Prefix?.ToLower()}{dataSource}";
            if (!IsExistDataSource($"{checkDataSource}"))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"DataSource {dataSource} with prefix {Prefix.ToLower()} not exist ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            var countRetrieve = dataProviderEvents.Count(x => x.Message == "Retrieve" && x.DataSource == dataSource);
            if (countRetrieve != 0 && countRetrieve != 1)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Retrieve found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            var countRetrieveMultiple = dataProviderEvents.Count(x => x.Message == "RetrieveMultiple" && x.DataSource == dataSource);
            if (countRetrieveMultiple != 0 && countRetrieveMultiple != 1)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message RetrieveMultiple found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            if (IsVirtualTableSupportCRUD())
            {
                var countCreate = dataProviderEvents.Count(x => x.Message == "Create" && x.DataSource == dataSource);
                if (countCreate != 0 && countCreate != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Create found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
                var countUpdate = dataProviderEvents.Count(x => x.Message == "Update" && x.DataSource == dataSource);
                if (countUpdate != 0 && countUpdate != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Update found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
                var countDelete = dataProviderEvents.Count(x => x.Message == "Delete" && x.DataSource == dataSource);
                if (countDelete != 0 && countDelete != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Delete found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
            }
            return true;
        }

        private void RegisterDataProvider(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var events = string.Empty;
            var logicalNameDataSource = dataSource.ToLower().StartsWith(Prefix.ToLower()) ? dataSource.ToLower() : $"{Prefix?.ToLower()}{dataSource}".ToLower();
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
            if (IsVirtualTableSupportCRUD())
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
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, $"DataSource ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                CrmServiceClient.Execute(request);
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
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"DataSource ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                    CrmServiceClient.Execute(request);
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"DataSource ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                }
            }
        }

        private Entity GetEntityDataProviderId(string dataSource)
        {
            var fetchData = new
            {
                datasourcelogicalname = dataSource
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
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return null;
            return rows.Entities[0];
        }

        private bool IsVirtualTableSupportCRUD()
        {
            return CrmServiceClient.ConnectedOrgVersion >= new Version("9.1.0.18950");
        }

        private bool IsExistDataSource(string logicalname)
        {
            var filterExpression = new MetadataFilterExpression();
            logicalname = logicalname.ToLower();
            filterExpression.Conditions.Add(new MetadataConditionExpression("DataProviderId", MetadataConditionOperator.Equals, Guid.Parse("B2112A7E-B26C-42F7-9B63-9A809A9D716F")));
            var propertiesExpression = new MetadataPropertiesExpression(new string[7]
            {
                "DataProviderId",
                "LogicalName",
                "SchemaName",
                "MetadataId",
                "DisplayName",
                "ExternalName",
                "DisplayCollectionName"
            });
            var entityQueryExpression = new EntityQueryExpression();
            entityQueryExpression.Criteria = new MetadataFilterExpression();
            entityQueryExpression.Criteria = filterExpression;
            entityQueryExpression.Properties = propertiesExpression;
            var request = new RetrieveMetadataChangesRequest
            {
                Query = entityQueryExpression
            };
            var response = (RetrieveMetadataChangesResponse)CrmServiceClient.Execute(request);
            foreach (EntityMetadata entityMetadata in response.EntityMetadata)
                if (entityMetadata.LogicalName == logicalname)
                    return true;
            return false;
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
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Custom Api with message {attribute.Message} not found. Assemply deployed, but the deployment of this assembly stopped.");
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing);
                    CliLog.WriteWarning(CliAction.Deactivated.Trim());
                    CliLog.Write(ConsoleColor.White, $" {attribute.PluginType.ToString()} Message: ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type: ", ConsoleColor.Cyan, pluginTypeName);
                    CliLog.WriteLine();
                }
                else
                {
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, $"{attribute.PluginType.ToString()} Message: ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type: ", ConsoleColor.Cyan, pluginTypeName);
                    var update = new Entity("customapi", rows.Entities[0].Id);
                    update["plugintypeid"] = new EntityReference("plugintype", pluginTypeId);
                    CrmServiceClient.Update(update);
                }
            }
        }

        private Guid? DeployPluginImage(Guid pluginStepId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            Guid? check = null;
            if (attribute?.Image1Name?.Length > 0) check = DeployPluginImage(attribute.Message, attribute.Image1Name, attribute.Image1Alias, attribute.Image1Type, attribute.Image1Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image2Name?.Length > 0) check = DeployPluginImage(attribute.Message, attribute.Image2Name, attribute.Image2Alias, attribute.Image2Type, attribute.Image2Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image3Name?.Length > 0) check = DeployPluginImage(attribute.Message, attribute.Image3Name, attribute.Image3Alias, attribute.Image3Type, attribute.Image3Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image4Name?.Length > 0) check = DeployPluginImage(attribute.Message, attribute.Image4Name, attribute.Image4Alias, attribute.Image4Type, attribute.Image4Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            return check;
        }

        private Guid DeployPluginImage(string message, string imageName, string imageAliasName, ImageTypeEnum imageType, string imageAttributes, Guid pluginStepId, string pluginStepName)
        {
            if (imageAliasName.Length == 0) imageAliasName = imageName;
            imageAttributes = imageAttributes?.Replace(" ", string.Empty);
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
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 plugin image name {imageName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return Guid.Empty;
                }
            }
            var pluginImage = new Entity("sdkmessageprocessingstepimage")
            {
                ["name"] = imageName,
                ["imagetype"] = new OptionSetValue((int)imageType),
                ["sdkmessageprocessingstepid"] = new EntityReference("sdkmessageprocessingstep", pluginStepId),
                ["attributes"] = imageAttributes.Trim() == "*" ? null : imageAttributes,
                ["entityalias"] = imageAliasName,
                ["messagepropertyname"] = message == "Create" ? "Id" : "Target"
            };
            if (rows.Entities.Count == 0)
            {
                if (imageName.Length > 0 && imageAttributes.Length == 0)
                {
                    return Guid.NewGuid();
                }
                else
                {
                    var request = new CreateRequest
                    {
                        Target = pluginImage
                    };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    //CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, $"{imageType.ToString()}Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" {imageType.ToString()}Alias: ", ConsoleColor.Cyan, imageAliasName);
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, "Image Type: ", ConsoleColor.Cyan, $"{imageType.ToString()}", ConsoleColor.White, $" Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" Alias: ", ConsoleColor.Cyan, imageAliasName);
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, SPACE, "Image Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, imageAttributes ?? "*", ConsoleColor.Blue, "]");
                    try
                    {
                        var response = (CreateResponse)CrmServiceClient.Execute(request);
                        return response.id;
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {pluginStepName} have invalid {imageType.ToString()} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {pluginStepName} does not support this image type {imageType.ToString()}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return Guid.Empty;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        return Guid.Empty;
                    }
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
                    attributes == (imageAttributes.Trim() == "*" ? null : imageAttributes) &&
                    imagetype == (int)imageType)
                {
                    //CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{imageType.ToString()}Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" {imageType.ToString()}Alias: ", ConsoleColor.Cyan, imageAliasName);
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, "Image Type: ", ConsoleColor.Cyan, $"{imageType.ToString()}", ConsoleColor.White, $" Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" Alias: ", ConsoleColor.Cyan, imageAliasName);
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, "Image Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, imageAttributes ?? "*", ConsoleColor.Blue, "]");
                }
                else
                {
                    if (attributes == null || (attributes != (imageAttributes.Trim() == "*" ? null : imageAttributes) && imageAttributes.Length != 0))
                    {
                        pluginImage["sdkmessageprocessingstepimageid"] = rows.Entities[0].Id;
                        //CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"{imageType.ToString()}Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" {imageType.ToString()}Alias: ", ConsoleColor.Cyan, imageAliasName);
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, "Image Type: ", ConsoleColor.Cyan, $"{imageType.ToString()}", ConsoleColor.White, $" Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" Alias: ", ConsoleColor.Cyan, imageAliasName);
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, SPACE, "Image Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, imageAttributes ?? "*", ConsoleColor.Blue, "]");
                    }
                    else if (imageAttributes.Length == 0)
                    {
                        //CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Deleted, ConsoleColor.White, $"{imageType.ToString()}Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" {imageType.ToString()}Alias: ", ConsoleColor.Cyan, imageAliasName);
                        CliLog.WriteLine(SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Deleted, ConsoleColor.White, "Image Type: ", ConsoleColor.Cyan, $"{imageType.ToString()}", ConsoleColor.White, $" Name: ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $" Alias: ", ConsoleColor.Cyan, imageAliasName);
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, SPACE, "Image Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, imageAttributes ?? "*", ConsoleColor.Blue, "]");
                        CrmServiceClient.Delete("sdkmessageprocessingstepimage", rows.Entities[0].Id);
                        return Guid.NewGuid();
                    }
                    try
                    {
                        CrmServiceClient.Update(pluginImage);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {pluginStepName} have invalid {imageType.ToString()} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {pluginStepName} does not support this image type {imageType.ToString()}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return Guid.Empty;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        return Guid.Empty;
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
            if (attribute?.Image1Name?.Length > 0)
                return true;
            if (attribute?.Image2Name?.Length > 0)
                return true;
            if (attribute?.Image3Name?.Length > 0)
                return true;
            if (attribute?.Image4Name?.Length > 0)
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
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{type.FullName} Update message need provide FilteringAttributes value. Assemply deployed, but the deployment of this assembly stopped.");
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
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 step name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
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
                ["supporteddeployment"] = (attribute.Server && attribute.Offline) ? new OptionSetValue(2/*Both*/) : (!attribute.Server && attribute.Offline ? new OptionSetValue(1/*Offline*/) : new OptionSetValue(0/*Server*/)),
                ["description"] = attribute.Description
            };

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
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, $"Plugin {attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                if (attribute.Message.ToLower() == "update")
                {
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, "Update Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, attribute.FilteringAttributes ?? "*", ConsoleColor.Blue, "]");
                }
                try
                {
                    var response = (CreateResponse)CrmServiceClient.Execute(request);
                    pluginStepId = response.id;
                }
                catch (FaultException fe)
                {
                    if (fe.Message.Contains("The dependent component Attribute "))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                    }
                    return null;
                }
                catch (Exception e)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message} Assemply deployed, but the deployment of this assembly stopped.");
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
                if (!IsChangedPluginStep(hasChangedPluginStep, rows.Entities[0], pluginStep, attribute))
                {
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"Plugin {attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                        if (attribute.Message.ToLower() == "update")
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, "Update Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, attribute.FilteringAttributes ?? "*", ConsoleColor.Blue, "]"); ;
                        }
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green);
                        CliLog.WriteWarning(CliAction.Deactivated.Trim());
                        CliLog.Write(ConsoleColor.White, $" Plugin {attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                        CliLog.WriteLine();
                    }
                }
                else
                {
                    var request = new UpdateRequest
                    {
                        Target = pluginStep
                    };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                    {
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, $"Plugin {attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                        if (attribute.Message.ToLower() == "update")
                        {
                            CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, "Update Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, attribute.FilteringAttributes ?? "*", ConsoleColor.Blue, "]");
                        }
                    }
                    else
                    {
                        CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Updated, CliAction.Deactivated, ConsoleColor.White, $"Plugin {attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                        if (attribute.Message.ToLower() == "update")
                        {
                            CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, "Update Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, attribute.FilteringAttributes ?? "*", ConsoleColor.Blue, "]");
                        }
                    }
                    try
                    {
                        CrmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("The dependent component Attribute "))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Plugin Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return null;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message} Assemply deployed, but the deployment of this assembly stopped.");
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
                    (rows.Entities.Count == 1 && rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 0 && attribute.Action == PluginStepOperationEnum.Deactivate) ||
                    (rows.Entities.Count == 1 && rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == null && attribute.Action == PluginStepOperationEnum.Deactivate)
                )
               )
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(1);
                update["statuscode"] = new OptionSetValue(2);
                CrmServiceClient.Update(update);
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Deactivated, ConsoleColor.White, $"Plugin {attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                if (attribute.Message.ToLower() == "update")
                {
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, "Update Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, attribute.FilteringAttributes ?? "*", ConsoleColor.Blue, "]");
                }
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
                CliLog.WriteLineWarning(SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.Activated, ConsoleColor.White, $"Plugin {attribute.Message} Step: ", ConsoleColor.Cyan, attribute.Name);
                if (attribute.Message.ToLower() == "update")
                {
                    CliLog.WriteLineWarning(SPACE, SPACE, SPACE, SPACE, "Update Fields: ", ConsoleColor.Blue, "[", ConsoleColor.Green, attribute.FilteringAttributes ?? "*", ConsoleColor.Blue, "]");
                }
            }
            return pluginStepId.Value;
        }

        private bool IsChangedPluginStep(bool alreadyChanged, Entity _old, Entity _new, CrmPluginRegistrationAttribute attribute)
        {
            if (alreadyChanged) return true;
            _new["statuscode"] = attribute.Action == PluginStepOperationEnum.Activate ? new OptionSetValue(1) : new OptionSetValue(2);
            _new["statecode"] = attribute.Action == PluginStepOperationEnum.Activate ? new OptionSetValue(0) : new OptionSetValue(1);
            var old = new SdkMessageProcessingStep(_old);
            var @new = new SdkMessageProcessingStep(_new);
            if (
                old.Name != @new.Name ||
                (old.Configuration ?? string.Empty) != @new.Configuration ||
                (old.Description ?? string.Empty) != (@new.Description ?? String.Empty) ||
                old.Mode != @new.Mode ||
                old.Rank != @new.Rank ||
                old.Stage != @new.Stage ||
                old.AsyncAutoDelete != @new.AsyncAutoDelete ||
                old.StatusCode != @new.StatusCode ||
                old.SdkMessageFilterId?.Id != @new.SdkMessageFilterId?.Id ||
                old.SdkMessageId?.Id != @new.SdkMessageId?.Id ||
                (old.FilteringAttributes ?? string.Empty) != (@new.FilteringAttributes ?? string.Empty) ||
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

        private Guid? DeployPluginType(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute, DeployFileType deployFileType)
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
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 type name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (deployFileType == DeployFileType.Nuget)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                    return rows.Entities[0].Id;
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
            if (string.IsNullOrWhiteSpace(attribute.Description))
            {
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
                request.Parameters.Add("SolutionUniqueName", Json.solution);
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
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                try
                {
                    CrmServiceClient.Execute(request);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
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

        private Guid? DeployAssembly(string file, DeployFileType deployFileType)
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
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 plugin assembly name {assemblyName}. Assemply deployed, but the deployment of this assembly stopped.");
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
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.WriteLineWarning(SPACE, ConsoleColor.Green, CliAction.Register, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName);
                var response = (CreateResponse)CrmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                if (IsEqualsContent(oldContent, newContent))
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
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    CliLog.WriteLineWarning(SPACE, ConsoleColor.Green, CliAction.Updated, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName);
                    try
                    {
                        CrmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message}. Assemply deployed, but the deployment of this assembly stopped.");
                        return null;
                    }
                }
            }
            return rows.Entities[0].Id;
        }

        private bool IsEqualsContent(string oldContent, string newContent)
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
            var fetchXml = $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""sdkmessageprocessingstep"">
    <link-entity name=""plugintype"" from=""plugintypeid"" to=""plugintypeid"" alias=""plugintype"">
      <attribute name=""typename"" />
      <link-entity name=""pluginassembly"" from=""pluginassemblyid"" to=""pluginassemblyid"">
        <filter>
          <condition attribute=""name"" operator=""eq"" value=""{fetchData.name}"" />
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";

            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return true;
            foreach (var entity in rows.Entities)
            {
                var typeName = entity.GetAttributeValue<AliasedValue>("plugintype.typename")?.Value.ToString();
                if (types.Count(x => x.FullName == typeName) == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Type: '{typeName}' not found in the assembly file. This type: '{typeName}' already registered to CRM/CDS. Assemply deployed, but the deployment of this assembly stopped.");
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
                list.Add(Utility.ConvertAttributeToCrmPluginRegistration(attribute));
            return list;
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
            var files = includefiles.Where(file => !excludefiles.Contains(file)).Distinct().ToList();
            files.Sort();
            return files;
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
            types = types.OrderBy(x => x.FullName).ToList();
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

        //=========================================================================
        private void DeployPackage(string file)
        {
            using (PackageArchiveReader packageArchiveReader = new PackageArchiveReader(file))
            {
                var folder = $"{CurrentFolder}\\DynamicsCrm.DevKit";
                var ok = DeployNewOrUpdatePackage(packageArchiveReader, file);
                if (ok)
                {
                    if (Arg?.OnlyUpdateAssembly?.Length > 0) return;
                    ExtractZip(packageArchiveReader, folder);
                    var files = Directory.GetFiles(folder).ToList();
                    var fileName = new FileInfo(file).Name;
                    DeployPackageFiles(fileName, files);
                }
            }
        }

        private void DeployPackageFiles(string fileName, List<string> files)
        {
            foreach (var file in files)
            {
                var types = GetTypes(file, files);
                if (types.Count > 0)
                {
                    DeployDll(file, DeployFileType.Nuget, fileName);
                }
            }
        }

        private bool DeployNewOrUpdatePackage(PackageArchiveReader packageArchiveReader, string file)
        {
            byte[] inArray = File.ReadAllBytes(file);
            var name = $"{Prefix}{packageArchiveReader.NuspecReader.GetId()}";
            var newContent = Convert.ToBase64String(inArray);
            var fetchData = new
            {
                name = name
            };
            var fetchXml = $@"
<fetch>
  <entity name='pluginpackage'>
    <attribute name='pluginpackageid' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                try
                {
                    var entity = new Entity("pluginpackage");
                    entity["name"] = name;
                    entity["content"] = newContent;
                    entity["version"] = packageArchiveReader.NuspecReader.GetVersion().ToFullString();
                    var request = new CreateRequest { Target = entity };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    CliLog.WriteLineWarning(ConsoleColor.Cyan, new FileInfo(file).Name);
                    CrmServiceClient.Execute(request);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Package deployed, but the deployment of this package stopped.");
                    return false;
                }
            }
            else
            {
                var entity = rows.Entities[0];
                var oldContent = entity.GetAttributeValue<string>("content");
                if (IsEqualsContent(oldContent, newContent))
                {
                    CliLog.WriteLineWarning(ConsoleColor.Cyan, new FileInfo(file).Name);
                }
                else
                {
                    try
                    {
                        var update = new Entity("pluginpackage");
                        update["pluginpackageid"] = entity.Id;
                        update["content"] = newContent;
                        update["version"] = packageArchiveReader.NuspecReader.GetVersion().ToFullString();
                        var request = new UpdateRequest { Target = update };
                        request.Parameters.Add("SolutionUniqueName", Json.solution);
                        CliLog.WriteLineWarning(ConsoleColor.Cyan, new FileInfo(file).Name);
                        CrmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Package deployed, but the deployment of this package stopped.");
                        return false;
                    }
                }
            }
            return true;
        }

        private void ExtractZip(PackageArchiveReader packageArchiveReader, string folder)
        {
            var libFiles = packageArchiveReader.GetFiles("lib");

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            else
            {
                foreach (FileInfo f in new DirectoryInfo(folder).GetFiles()) { f.Delete(); }
            }
            foreach (var libFile in libFiles)
            {
                var zip = packageArchiveReader.GetEntry(libFile);
                zip.ExtractToFile($"{folder}\\{zip.Name}", true);
            }
        }

        private List<TypeInfo> GetTypes(string file, List<string> files)
        {
            var assemblyFilePath = new FileInfo(file);
            Assembly assembly = null;
            foreach (var f in files)
                assembly = Assembly.ReflectionOnlyLoadFrom(f);
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
            types = types.OrderBy(x => x.FullName).ToList();
            return types;
        }
    }
}