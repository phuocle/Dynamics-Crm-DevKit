using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using NuGet.Packaging;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.ServiceModel;
using System.Threading.Tasks;
using VSLangProj80;

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
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public TaskServer(CommandLineArgs arg, Json json)
        {
            this.Arg = arg;
            ServiceClient = arg.ServiceClient;
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

        public ServiceClient ServiceClient { get; set; }

        public CommandLineArgs Arg { get; set; }

        private JsonServer Json { get; }

        private string CurrentFolder => $"{CurrentDirectory}\\{Json.folder}";

        public async Task<bool> IsValidAsync()
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
            (IsOk, SolutionId, SolutionPrefix) = await XrmHelper.IsExistSolutionAsync(ServiceClient, Json.solution);
            if (!IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            return true;
        }

        private async Task DeployFilesAsync(List<string> files)
        {
            foreach (var file in files)
            {
                if (file.EndsWith(".dll"))
                    await DeployDllAsync(file);
                else if (file.EndsWith(".nupkg"))
                    await DeployPackageAsync(file);
                else
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Not support file extension: {new FileInfo(file).Extension}");
            }
        }

        private async Task DeployDllAsync(string file, DeployFileType deployFileType = DeployFileType.Dll)
        {
            if (deployFileType == DeployFileType.Dll)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, $"{Path.GetFileName(file)}");
            }
            var types = GetTypes(file);
            if (!await IsValidTypesAsync(file, types)) return;
            await DeployFileAsync(file, types, deployFileType);
        }

        private async Task DeployFileAsync(string file, List<TypeInfo> types, DeployFileType deployFileType)
        {
            var dataProviderEvents = new List<DataProviderEvent>();
            var pluginAssemblyId = await DeployAssemblyAsync(file);
            if (pluginAssemblyId == null) return;
            if (Arg?.OnlyUpdateAssembly?.Length > 0) return;
            var sortedTypes = types.OrderBy(type =>
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                if (attributes.Count == 0) return int.MaxValue;
                var pluginType = attributes[0].PluginType;
                return pluginType switch
                {
                    PluginType.Plugin => 0,        // First priority
                    PluginType.CustomAction => 1,  // Second priority
                    PluginType.CustomApi => 2,     // Third priority
                    PluginType.Workflow => 3,      // Fourth priority
                    PluginType.DataProvider => 4,  // Fifth priority
                    _ => int.MaxValue               // Unknown types at the end
                };
            }).ThenBy(type =>
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                return attributes.Count > 0 ? attributes[0].Name : type.FullName;
            }).ToList();
            foreach (var type in sortedTypes)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                if (attributes[0].Unregister)
                {
                    var error = await UnregisterPluginTypeAsync(pluginAssemblyId.Value, type, attributes[0], deployFileType);
                    if (error) return;
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UNREGISTER.Trim());
                    CliLog.Write(ConsoleColor.White, $" Type ", ConsoleColor.Blue, attributes[0].PluginType, " ", ConsoleColor.Cyan, type.FullName);
                    CliLog.WriteLine();
                    continue;
                }
                var pluginTypeId = await DeployPluginTypeAsync(pluginAssemblyId.Value, type, attributes[0], deployFileType);
                if (pluginTypeId == null) return;
                if (IsWorkflowType(type)) continue;
                foreach (var attribute in attributes)
                {
                    switch (attribute.PluginType)
                    {
                        case PluginType.Plugin:
                        case PluginType.CustomAction:
                            var pluginStepId = await DeployPluginStepAsync(pluginTypeId.Value, type, attribute);
                            if (pluginStepId == null) return;
                            if (attribute.PluginType == PluginType.Plugin && HasPluginImage(attribute))
                            {
                                if (IsSupportPluginImage(attribute))
                                {
                                    var pluginImageId = await DeployPluginImageAsync(pluginStepId.Value, attribute);
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
                            await DeployCustomApiStepAsync(pluginTypeId.Value, type.FullName, attribute);
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
                    if (await IsValidDataProviderAsync(dataProviderEvents, dataSource.DataSource))
                    {
                        await RegisterDataProviderAsync(dataProviderEvents, dataSource.DataSource);
                    }
                }
            }
        }

        private async Task<bool> IsValidDataProviderAsync(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var checkDataSource = dataSource.ToLower().StartsWith(SolutionPrefix.ToLower()) ? dataSource : $"{SolutionPrefix?.ToLower()}{dataSource}";
            if (!await IsExistDataSourceAsync($"{checkDataSource}"))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"DataSource {dataSource} with prefix {SolutionPrefix.ToLower()} not exist ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
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
            if (await XrmHelper.IsVirtualTableSupportCRUDAsync(ServiceClient))
            {
                var countCreate = dataProviderEvents.Count(x => x.Message == "Create" && x.DataSource == dataSource);
                if (countCreate != 0 && countCreate != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Create found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
                var countUpdate = dataProviderEvents.Count(x => IsMessageUpdate(x.Message) && x.DataSource == dataSource);
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

        private async Task RegisterDataProviderAsync(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var events = string.Empty;
            var logicalNameDataSource = dataSource.ToLower().StartsWith(SolutionPrefix.ToLower()) ? dataSource.ToLower() : $"{SolutionPrefix?.ToLower()}{dataSource}".ToLower();
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
            if (await XrmHelper.IsVirtualTableSupportCRUDAsync(ServiceClient))
            {
                var create = dataProviderEvents.Where(x => x.Message == "Create" && x.DataSource == dataSource).FirstOrDefault();
                if (create == null)
                    entity.Attributes.Add("createplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
                else
                {
                    entity.Attributes.Add("createplugin", create.PluginTypeId);
                    events += "Create, ";
                }
                var update = dataProviderEvents.Where(x => IsMessageUpdate(x.Message) && x.DataSource == dataSource).FirstOrDefault();
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
            events = string.Join(", ", events.Split(",".ToCharArray()).Select(x => x.Trim()).OrderBy(x => x)).Trim();
            var entityDataProvider = await XrmHelper.GetEntityDataProviderIdAsync(ServiceClient, logicalNameDataSource);
            if (entityDataProvider == null)
            {
                var request = new CreateRequest();
                request.Parameters ??= [];
                request.Target = entity;
                request.Parameters.Add("SuppressDuplicateDetection", true);
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTER.Trim());
                CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, $"{PluginType.DataSource} ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                await ServiceClient.ExecuteAsync(request);
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, $"{PluginType.DataSource} ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                    await ServiceClient.ExecuteAsync(request);
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Type ", ConsoleColor.Blue, $"{PluginType.DataSource} ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                }
            }
        }

        private async Task<bool> IsExistDataSourceAsync(string logicalname)
        {
            var filterExpression = new MetadataFilterExpression();
            logicalname = logicalname.ToLower();
            filterExpression.Conditions.Add(new MetadataConditionExpression("DataProviderId", MetadataConditionOperator.Equals, Guid.Parse("B2112A7E-B26C-42F7-9B63-9A809A9D716F")));
            var propertiesExpression = new MetadataPropertiesExpression(
            [
                "DataProviderId",
                "LogicalName",
                "SchemaName",
                "MetadataId",
                "DisplayName",
                "ExternalName",
                "DisplayCollectionName"
            ]);
            var entityQueryExpression = new EntityQueryExpression
            {
                Criteria = new MetadataFilterExpression()
            };
            entityQueryExpression.Criteria = filterExpression;
            entityQueryExpression.Properties = propertiesExpression;
            var request = new RetrieveMetadataChangesRequest
            {
                Query = entityQueryExpression
            };
            var response = (RetrieveMetadataChangesResponse)await ServiceClient.ExecuteAsync(request);
            foreach (EntityMetadata entityMetadata in response.EntityMetadata)
                if (entityMetadata.LogicalName == logicalname)
                    return true;
            return false;
        }

        private async Task DeployCustomApiStepAsync(Guid pluginTypeId, string pluginTypeName, CrmPluginRegistrationAttribute attribute)
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Custom Api with message {attribute.Message} not found. Assemply deployed, but the deployment of this assembly stopped.");
                return;
            }
            if (rows.Entities[0].GetAttributeValue<EntityReference>("plugintypeid")?.Id.ToString("D") == pluginTypeId.ToString("D"))
            {
                if (attribute.Action == PluginStepOperationEnum.Activate)
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Message ", ConsoleColor.Blue, attribute.PluginType,  " ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type ", ConsoleColor.Cyan, pluginTypeName);
                else
                {
                    var update = new Entity("customapi", rows.Entities[0].Id);
                    update["plugintypeid"] = null;
                    await ServiceClient.UpdateAsync(update);
                }
            }
            else
            {
                if (attribute.Action == PluginStepOperationEnum.Deactivate)
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING.Trim(), " ");
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                    CliLog.Write(ConsoleColor.White, " Message ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type ", ConsoleColor.Cyan, pluginTypeName);
                    CliLog.WriteLine();
                }
                else
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTER.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Message ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, attribute.Message, ConsoleColor.White, " with type ", ConsoleColor.Cyan, pluginTypeName);
                    var update = new Entity("customapi", rows.Entities[0].Id);
                    update["plugintypeid"] = new EntityReference("plugintype", pluginTypeId);
                    await ServiceClient.UpdateAsync(update);
                }
            }
        }

        private async Task<Guid?> DeployPluginImageAsync(Guid pluginStepId, CrmPluginRegistrationAttribute attribute)
        {
            Guid? check = null;
            if (attribute?.Image1Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image1Name, attribute.Image1Alias, attribute.Image1Type, attribute.Image1Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image2Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image2Name, attribute.Image2Alias, attribute.Image2Type, attribute.Image2Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image3Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image3Name, attribute.Image3Alias, attribute.Image3Type, attribute.Image3Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image4Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image4Name, attribute.Image4Alias, attribute.Image4Type, attribute.Image4Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            return check;
        }

        private string GetMessagePropertyName(string message)
        {
            return message.ToLower() switch
            {
                "create" => "Id",
                "createmultiple" => "Ids",
                "updatemultiple" => "Targets",
                "setstate" => "EntityMoniker",
                "setstatedynamicentity" => "EntityMoniker",
                "deliverincoming" => "EmailId",
                "deliverpromote" => "EmailId",
                "send" => "EmailId",
                _ => "Target"
            };
        }

        private async Task<Guid> DeployPluginImageAsync(string message, string imageName, string imageAliasName, ImageTypeEnum imageType, string imageAttributes, Guid pluginStepId, string pluginStepName)
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
                ["messagepropertyname"] = GetMessagePropertyName(message)
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTER.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Image Type ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Cyan, imageAliasName);
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, " ", ConsoleColor.White, "Image Fields: ", ConsoleColor.Green, imageAttributes ?? "*");
                    try
                    {
                        var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                        return response.id;
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} have invalid {imageType} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        else if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} does not support this image type {imageType}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        else
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
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
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Image Type ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Cyan, imageAliasName);
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Image Fields: ", ConsoleColor.Green, imageAttributes ?? "*");
                }
                else
                {
                    if (attributes == null || (attributes != (imageAttributes.Trim() == "*" ? null : imageAttributes) && imageAttributes.Length != 0))
                    {
                        pluginImage["sdkmessageprocessingstepimageid"] = rows.Entities[0].Id;
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Image Type ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Cyan, imageAliasName);
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Image Fields: ", ConsoleColor.Green, imageAttributes ?? "*");
                    }
                    else if (imageAttributes.Length == 0)
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.DELETED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Image Type ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Cyan, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Cyan, imageAliasName);
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Image Fields: ", ConsoleColor.Green, imageAttributes ?? "*");
                        await ServiceClient.DeleteAsync("sdkmessageprocessingstepimage", rows.Entities[0].Id);
                        return Guid.NewGuid();
                    }
                    try
                    {
                        await ServiceClient.UpdateAsync(pluginImage);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} have invalid {imageType} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} does not support this image type {imageType}. Assemply deployed, but the deployment of this assembly stopped.");
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
            return (attribute?.Message?.ToLower()) switch
            {
                "assign" or
                "create" or
                "delete" or
                "deliverincoming" or
                "deliverpromote" or
                "merge" or
                "route" or
                "send" or
                "setstate" or
                "setstatedynamicentity" or
                "update" or
                "createmultiple" or
                "updatemultiple" or
                "executeworkflow" => true,
                _ => false,
            };
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

        private bool IsMessageUpdate(string message)
        {
            return message.ToLower() switch
            {
                "update" or
                "updatemultiple" or
                "onexternalupdated" => true,
                _ => false,
            };
        }

        private async Task<Guid?> DeployPluginStepAsync(Guid pluginTypeId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            if (IsMessageUpdate(attribute?.Message))
            {
                if (attribute?.FilteringAttributes?.Trim().Length == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{type.FullName} The {attribute?.Message} message need provide FilteringAttributes value. Assemply deployed, but the deployment of this assembly stopped.");
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 step name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
            }
            var sdkMessageFilterId = await XrmHelper.GetSdkMessageFilterIdAsync(ServiceClient, attribute.EntityLogicalName, attribute.Message);
            var sdkMessageId = await XrmHelper.GetSdkMessageIdAsync(ServiceClient, attribute.EntityLogicalName, attribute.Message);
            var impersonatingUserId = await XrmHelper.GetImpersonatingUserIdAsync(ServiceClient, attribute.RunAs);
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
                ["supporteddeployment"] = (attribute.Server && attribute.Offline) ? new OptionSetValue(2) : (!attribute.Server && attribute.Offline ? new OptionSetValue(1) : new OptionSetValue(0)),
                ["description"] = attribute.Description
            };

            Guid? pluginStepId;
            if (rows.Entities.Count == 0)
            {
                if (attribute.SecureConfiguration?.Trim().Length > 0)
                {
                    var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                    secureEntity["secureconfig"] = attribute.SecureConfiguration;
                    var sdkmessageprocessingstepsecureconfigid = await ServiceClient.CreateAsync(secureEntity);
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                }
                var request = new CreateRequest
                {
                    Target = pluginStep
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTER.Trim());
                CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name);
                if (attribute.SecureConfiguration.Length > 0)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, " ", ConsoleColor.White, "Secure Configuration: ", ConsoleColor.Green, attribute.SecureConfiguration ?? "*");
                }
                if (attribute.UnSecureConfiguration.Length > 0)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, " ", ConsoleColor.White, "UnSecure Configuration: ", ConsoleColor.Green, attribute.UnSecureConfiguration ?? "*");
                }
                if (IsMessageUpdate(attribute.Message))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, " ", ConsoleColor.White, "Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*");
                }
                try
                {
                    var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                    pluginStepId = response.id;
                }
                catch (FaultException fe)
                {
                    if (fe.Message.Contains("The dependent component Attribute "))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        return null;
                    }
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {attribute.Name} register failed: {fe.Message.TrimEnd(".".ToCharArray())}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                catch (Exception e)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message.TrimEnd(".".ToCharArray())}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
            }
            else
            {
                pluginStepId = rows.Entities[0].Id;
                pluginStep["sdkmessageprocessingstepid"] = pluginStepId.Value;
                var hasChangedPluginStep = false;
                var secureEntity = await XrmHelper.GetSecureEntityAsync(ServiceClient, pluginStepId.Value);
                if (attribute.SecureConfiguration?.Trim().Length == 0 && secureEntity != null)
                {
                    var sdkmessageprocessingstepsecureconfigid = (Guid?)secureEntity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid")?.Value;
                    if (sdkmessageprocessingstepsecureconfigid.HasValue)
                    {
                        await ServiceClient.DeleteAsync("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid.Value);
                        hasChangedPluginStep = true;
                    }
                }
                else if (attribute.SecureConfiguration?.Trim().Length > 0 && secureEntity != null)
                {
                    var sdkmessageprocessingstepsecureconfigid = (Guid?)secureEntity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid")?.Value;
                    if (sdkmessageprocessingstepsecureconfigid.HasValue)
                    {
                        var old = (string)secureEntity.GetAttributeValue<AliasedValue>("s.secureconfig")?.Value;
                        if (old != attribute.SecureConfiguration)
                        {
                            var update = new Entity("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid.Value);
                            update["secureconfig"] = attribute.SecureConfiguration;
                            await ServiceClient.UpdateAsync(update);
                            hasChangedPluginStep = true;
                        }
                    }
                }
                else if (attribute.SecureConfiguration?.Trim().Length > 0 && secureEntity == null)
                {
                    var create = new Entity("sdkmessageprocessingstepsecureconfig");
                    create["secureconfig"] = attribute.SecureConfiguration;
                    var sdkmessageprocessingstepsecureconfigid = await ServiceClient.CreateAsync(secureEntity);
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                    hasChangedPluginStep = true;
                }
                if (!IsChangedPluginStep(hasChangedPluginStep, rows.Entities[0], pluginStep, attribute))
                {
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name);
                        if (attribute.SecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Secure Configuration: ", ConsoleColor.Green, attribute.SecureConfiguration ?? "*");
                        }
                        if (attribute.UnSecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "UnSecure Configuration: ", ConsoleColor.Green, attribute.UnSecureConfiguration ?? "*");
                        }
                        if (IsMessageUpdate(attribute.Message))
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*"); ;
                        }
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                        CliLog.Write(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name);
                        CliLog.WriteLine();
                        if (attribute.SecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Secure Configuration: ", ConsoleColor.Green, attribute.SecureConfiguration ?? "*");
                        }
                        if (attribute.UnSecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "UnSecure Configuration: ", ConsoleColor.Green, attribute.UnSecureConfiguration ?? "*");
                        }
                        if (IsMessageUpdate(attribute.Message))
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*");
                        }
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
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name);
                        if (attribute.SecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Secure Configuration: ", ConsoleColor.Green, attribute.SecureConfiguration ?? "*");
                        }
                        if (attribute.UnSecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "UnSecure Configuration: ", ConsoleColor.Green, attribute.UnSecureConfiguration ?? "*");
                        }
                        if (IsMessageUpdate(attribute.Message))
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*");
                        }
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name);
                        if (attribute.SecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Secure Configuration: ", ConsoleColor.Green, attribute.SecureConfiguration ?? "*");
                        }
                        if (attribute.UnSecureConfiguration.Length > 0)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "UnSecure Configuration: ", ConsoleColor.Green, attribute.UnSecureConfiguration ?? "*");
                        }
                        if (IsMessageUpdate(attribute.Message))
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, SPACE, ConsoleColor.White, "Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*");
                        }
                    }
                    try
                    {
                        await ServiceClient.ExecuteAsync(request);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("The dependent component Attribute "))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
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
                await ServiceClient.UpdateAsync(update);
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name);
            }
            else if (
                rows.Entities.Count > 0 &&
                rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 1 &&
                attribute.Action == PluginStepOperationEnum.Activate)
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(0);
                update["statuscode"] = new OptionSetValue(1);
                await ServiceClient.UpdateAsync(update);
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.ACTIVATED.Trim());
                CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name);
            }
            return pluginStepId;
        }

        private bool IsChangedPluginStep(bool alreadyChanged, Entity _old, Entity _new, CrmPluginRegistrationAttribute attribute)
        {
            if (alreadyChanged) return true;
            _new["statuscode"] = attribute.Action == PluginStepOperationEnum.Activate ? new OptionSetValue(1) : new OptionSetValue(2);
            _new["statecode"] = attribute.Action == PluginStepOperationEnum.Activate ? new OptionSetValue(0) : new OptionSetValue(1);
            var old = ReadFromEntity(_old);
            var @new = ReadFromEntity(_new);
            if (
                old.Name != @new.Name ||
                (old.Configuration ?? string.Empty) != @new.Configuration ||
                (old.Description ?? string.Empty) != (@new.Description ?? String.Empty) ||
                old.Mode.Value != @new.Mode.Value ||
                old.Rank != @new.Rank ||
                old.Stage.Value != @new.Stage.Value ||
                old.AsyncAutoDelete != @new.AsyncAutoDelete ||
                old.StatusCode.Value != @new.StatusCode.Value ||
                old.SdkMessageFilterId?.Id != @new.SdkMessageFilterId?.Id ||
                old.SdkMessageId?.Id != @new.SdkMessageId?.Id ||
                (old.FilteringAttributes ?? string.Empty) != (@new.FilteringAttributes ?? string.Empty) ||
                old.ImpersonatingUserId?.Id != @new.ImpersonatingUserId?.Id ||
                old.SupportedDeployment.Value != @new.SupportedDeployment.Value)
                return true;
            return false;
            static SdkMessageProcessingStep ReadFromEntity(Entity entity)
            {
                return new SdkMessageProcessingStep
                {
                    Name = entity.GetAttributeValue<string>("name"),
                    Configuration = entity.GetAttributeValue<string>("configuration"),
                    Description = entity.GetAttributeValue<string>("description"),
                    Mode = entity.GetAttributeValue<OptionSetValue>("mode"),
                    Rank = entity.GetAttributeValue<int?>("rank"),
                    Stage = entity.GetAttributeValue<OptionSetValue>("stage"),
                    AsyncAutoDelete = entity.GetAttributeValue<bool?>("asyncautodelete"),
                    StatusCode = entity.GetAttributeValue<OptionSetValue>("statuscode"),
                    StateCode = entity.GetAttributeValue<OptionSetValue>("statecode"),
                    SdkMessageFilterId = entity.GetAttributeValue<EntityReference>("sdkmessagefilterid"),
                    SdkMessageId = entity.GetAttributeValue<EntityReference>("sdkmessageid"),
                    FilteringAttributes = entity.GetAttributeValue<string>("filteringattributes"),
                    ImpersonatingUserId = entity.GetAttributeValue<EntityReference>("impersonatinguserid"),
                    SupportedDeployment = entity.GetAttributeValue<OptionSetValue>("supporteddeployment")
                };
            }
        }

        private async Task<bool> UnregisterPluginTypeAsync(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute, DeployFileType deployFileType)
        {
            var fetchData = new
            {
                typename = type.FullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='plugintypeid' />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return false ;
            var pluginTypeId = rows.Entities[0].GetAttributeValue<Guid>("plugintypeid");
            try
            {
                await DeletePluginStepsAsync();
                await ServiceClient.DeleteAsync("plugintype", pluginTypeId);
            }
            catch(FaultException fe)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Unregister {type.FullName} failed: {fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                return true;
            }
            return false;
            async Task DeletePluginStepsAsync()
            {
                var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='sdkmessageprocessingstepid' />
    <attribute name='sdkmessageprocessingstepsecureconfigid' />
    <filter>
      <condition attribute='plugintypeid' operator='eq' value='{pluginTypeId}' />
    </filter>
  </entity>
</fetch>";
                var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
                foreach (var row in rows.Entities)
                {
                    await ServiceClient.DeleteAsync("sdkmessageprocessingstep", row.Id);
                }
            }
        }

        private async Task<Guid?> DeployPluginTypeAsync(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute, DeployFileType deployFileType)
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 type name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (deployFileType == DeployFileType.Nuget)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Type ", ConsoleColor.Blue, attribute.PluginType, ConsoleColor.Cyan, type.FullName);
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
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTER.Trim());
                CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, type.FullName);
                var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
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
                    await ServiceClient.ExecuteAsync(request);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (IsWorkflowType(type))
                {
                    var old = rows.Entities[0].GetAttributeValue<string>("customworkflowactivityinfo");
                    var @new = (await ServiceClient.RetrieveAsync("plugintype", rows.Entities[0].Id, new ColumnSet("customworkflowactivityinfo"))).GetAttributeValue<string>("customworkflowactivityinfo");
                    if (IsEqualsWorkflowType(old, @new))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, ConsoleColor.White, "Type ", ConsoleColor.Blue, attribute.PluginType, " ",ConsoleColor.Cyan, type.FullName);
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, type.FullName);
                    }
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, ConsoleColor.White, "Type ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, type.FullName);
                }
            }
            return rows.Entities[0].Id;
        }

        private bool IsEqualsWorkflowType(string old, string @new)
        {
            return old == @new;
        }

        private async Task<Guid?> DeployAssemblyAsync(string file)
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
            };
            var assemblyAttribute = GetDynamcisCrmDevkitAssemblyAttribute(assembly);
            if (assemblyAttribute != null)
            {
                plugin["sourcetype"] = new OptionSetValue((int)assemblyAttribute.SourceType);
                plugin["isolationmode"] = new OptionSetValue((int)assemblyAttribute.IsolationMode);
            }
            else
            {
                plugin["sourcetype"] = new OptionSetValue(0);
                plugin["isolationmode"] = new OptionSetValue(2);
            }
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.Write(ConsoleColor.White, "|", SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTER.Trim());
                CliLog.WriteLine(ConsoleColor.White, " Assembly ", ConsoleColor.Cyan, assemblyName);
                var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                return response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                if (IsEqualsContent(oldContent, newContent))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.Blue, "Assembly ", ConsoleColor.Cyan, assemblyName);
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Assembly ", ConsoleColor.Cyan, assemblyName);
                    try
                    {
                        await ServiceClient.ExecuteAsync(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        return null;
                    }
                }
            }
            return rows.Entities[0].Id;
        }

        private DynamcisCrmDevkitAssemblyAttribute GetDynamcisCrmDevkitAssemblyAttribute(Assembly assembly)
        {
            var attributeData = CustomAttributeData.GetCustomAttributes(assembly)
                .Where(data => data.AttributeType.FullName.Contains("DynamcisCrmDevkitAssemblyAttribute"))
                .FirstOrDefault();
            var attribute = new DynamcisCrmDevkitAssemblyAttribute();
            var properties = typeof(DynamcisCrmDevkitAssemblyAttribute).GetProperties();
            foreach (var namedArgument in attributeData.NamedArguments)
            {
                string propertyName = namedArgument.MemberName;
                object rawValue = namedArgument.TypedValue.Value;
                var targetProperty = properties.FirstOrDefault(p => p.Name == propertyName);

                if (targetProperty != null)
                {
                    object finalValue = rawValue;
                    if (targetProperty.PropertyType.IsGenericType && targetProperty.PropertyType.GetGenericTypeDefinition() == typeof(Nullable<>))
                    {
                        Type underlyingType = Nullable.GetUnderlyingType(targetProperty.PropertyType);
                        if (underlyingType != null && underlyingType.IsEnum)
                        {
                            finalValue = Enum.ToObject(underlyingType, rawValue);
                        }
                    }
                    else if (targetProperty.PropertyType.IsEnum)
                    {
                        finalValue = Enum.ToObject(targetProperty.PropertyType, rawValue);
                    }
                    targetProperty.SetValue(attribute, finalValue);
                }
            }
            return attribute;
        }

        private bool IsEqualsContent(string oldContent, string newContent)
        {
            return oldContent == newContent;
        }

        private async Task<bool> IsValidTypesAsync(string file, List<TypeInfo> types)
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
            if (!await IsValidTypesWithCDSAsync(types, Path.GetFileNameWithoutExtension(file)))
            {
                return false;
            }
            return true;
        }

        private async Task<bool> IsValidTypesWithCDSAsync(List<TypeInfo> types, string fileNameWithoutExtension)
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

            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
                list.Add(Helper.ConvertAttributeToCrmPluginRegistration(attribute));
            return list;
        }

        private List<string> GetFiles(string folder, List<string> includePatternFiles, List<string> excludePatternFiles)
        {
            var includefiles = new List<string>();
            foreach (var includefile in includePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange([.. Directory.GetFiles(folder, includefile)]);
                }
            }
            foreach (var includefile in includePatternFiles)
            {
                var other = includefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange([.. Directory.GetFiles(folder, other)]);
                }
            }
            var excludefiles = new List<string>();
            foreach (var excludefile in excludePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange([.. Directory.GetFiles(folder, excludefile)]);
                }
            }
            foreach (var excludefile in excludePatternFiles)
            {
                var other = excludefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange([.. Directory.GetFiles(folder, other)]);
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
            types = [.. types.OrderBy(x => x.FullName)];
            return types;
        }

        private Assembly CurrentDomain_ReflectionOnlyAssemblyResolve(object sender, ResolveEventArgs args)
        {
            var parts = args.Name.Split(',');
            Assembly assembly = parts[0] switch
            {
                "Microsoft.Xrm.Sdk" => Assembly.ReflectionOnlyLoad(parts[0].Trim()),
                _ => Assembly.ReflectionOnlyLoad(args.Name),
            };
            return assembly;
        }

        private bool IsWorkflowType(Type type)
        {
            if (type?.FullName == "System.Activities.CodeActivity") return true;
            if (type?.BaseType != null) return IsWorkflowType(type?.BaseType);
            return false;
        }

        //private OptionSetValue GetIsolationMode(string file)
        //{
        //    var types = GetTypes(file);
        //    foreach (var type in types)
        //    {
        //        if (IsWorkflowType(type)) continue;
        //        var attributes = GetCrmPluginRegistrationAttributes(type);
        //        foreach (var attribute in attributes)
        //        {
        //            if (attribute.IsolationMode == IsolationModeEnum.None) return new OptionSetValue(1);
        //        }
        //    }
        //    return new OptionSetValue(2);
        //}

        private async Task DeployPackageAsync(string file)
        {
            using PackageArchiveReader packageArchiveReader = new(file);
            var folder = $"{CurrentFolder}\\DynamicsCrm.DevKit";
            var ok = await DeployNewOrUpdatePackageAsync(packageArchiveReader, file);
            if (ok)
            {
                if (Arg?.OnlyUpdateAssembly?.Length > 0) return;
                ExtractZip(packageArchiveReader, folder);
                var files = Directory.GetFiles(folder).ToList();
                await DeployPackageFilesAsync(files);
            }
        }

        private async Task DeployPackageFilesAsync(List<string> files)
        {
            foreach (var file in files)
            {
                var types = GetTypes(file, files);
                if (types.Count > 0)
                {
                    await DeployDllAsync(file, DeployFileType.Nuget);
                }
            }
        }

        private async Task<bool> DeployNewOrUpdatePackageAsync(PackageArchiveReader packageArchiveReader, string file)
        {
            byte[] inArray = File.ReadAllBytes(file);
            var name = $"{SolutionPrefix}{packageArchiveReader.NuspecReader.GetId()}";
            var newContent = Convert.ToBase64String(inArray);
            var fetchData = new
            {
                name
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, $"{Path.GetFileName(file)}");
                    await ServiceClient.ExecuteAsync(request);
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
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, $"{Path.GetFileName(file)}");
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
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, $"{Path.GetFileName(file)}");
                        await ServiceClient.ExecuteAsync(request);
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
            types = [.. types.OrderBy(x => x.FullName)];
            return types;
        }

        public async Task RunAsync()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");
            if (await IsValidAsync())
            {
                var files = GetFiles(CurrentFolder, Json.includefiles, Json.excludefiles);
                if (files.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any files to deploy");
                }
                else
                {
                    await DeployFilesAsync(files);
                }
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }
    }
}