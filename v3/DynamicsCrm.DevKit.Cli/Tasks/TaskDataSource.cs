using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Text.RegularExpressions;
using System.Threading;
using Label = Microsoft.Xrm.Sdk.Label;
using ParameterCollection = Microsoft.Xrm.Sdk.ParameterCollection;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskDataSource : ITask
    {
        public TaskDataSource(CommandLineArgs arg, JsonDataSource json)
        {
            this.Arg = arg;
            this.Json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
        }
        public string CurrentDirectory { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public string TaskType => $"[{nameof(CliType.datasources).ToUpper()}]";
        public CommandLineArgs Arg { get; set; }
        private JsonDataSource Json { get; set; }
        private bool IsOk { get; set; }
        private Guid SolutionId { get; set; }
        private string Prefix { get; set; }
        private string DataSourceName { get; set; }
        public bool IsValid()
        {
            if (Json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution.Length == 0 || Json.solution == "???")
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.displayname.Length == 0 || Json.displayname == "???")
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'displayname' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.pluralname.Length == 0 || Json.pluralname == "???")
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'pluralname' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.name.Length == 0 || Json.name == "???")
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'name' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            var regex = new Regex("^[a-zA-Z][_a-zA-Z0-9\\s,]*$");
            if (!regex.IsMatch(Json.displayname))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'displayname' can only contain alpha-numeric and underscore characters.");
                return false;
            }
            if (!regex.IsMatch(Json.pluralname))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'pluralname' can only contain alpha-numeric and underscore characters.");
                return false;
            }
            if (!regex.IsMatch(Json.name))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'name' can only contain alpha-numeric and underscore characters.");
                return false;
            }
            if (Json.name.Contains(" "))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'name' can cannot contain space character.");
                return false;
            }
            (IsOk, SolutionId, Prefix) = XrmHelper.IsExistSolution(CrmServiceClient, Json.solution);
            if (!IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            DataSourceName = Json.name.ToLower().StartsWith(Prefix.ToLower()) ? Json.name : $"{Prefix}{Json.name}";
            if (IsExistDataSource(DataSourceName))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} name '{DataSourceName}' exist");
                return false;
            }
            return true;
        }

        private bool IsExistDataSource(string logicalname)
        {
            logicalname = logicalname.ToLower();
            var filterExpression = new MetadataFilterExpression();
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

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");
            if (IsValid())
            {
                var wait = new Thread(() => CliLog.Waiting($"Creating Data Source: {DataSourceName} "));
                wait.Start();
                RegisterDataSource();
                wait.Abort();
                CliLog.WriteLine("");
                CliLog.WriteLine(ConsoleColor.White, "| ", $"Created Data Source: {DataSourceName} ");
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private int GetLanguageCode()
        {
            var fetchXml = $@"
<fetch>
  <entity name='organization'>
    <attribute name='languagecode' />
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return 1033;
            var entity = rows.Entities[0];
            return entity.GetAttributeValue<int?>("languagecode") ?? 1033;
        }

        public void RegisterDataSource()
        {
            var languageCode = GetLanguageCode();
            var propertyFalse = new BooleanManagedProperty(false);
            var propertyTrue = new BooleanManagedProperty(true);

            var request = new CreateEntityRequest
            {
                HasActivities = false,
                PrimaryAttribute = new StringAttributeMetadata
                {
                    SchemaName = $"{DataSourceName}Name",
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None),
                    MaxLength = 100,
                    DisplayName = new Label(Json.displayname, languageCode),
                    ExternalName = Json.displayname
                },
                Entity = new EntityMetadata
                {
                    DataProviderId = new Guid?(new Guid("B2112A7E-B26C-42F7-9B63-9A809A9D716F")),
                    IsActivity = new bool?(false),
                    SchemaName = DataSourceName,
                    DisplayName = new Label(Json.displayname, languageCode),
                    DisplayCollectionName = new Label(Json.pluralname, languageCode),
                    ExternalCollectionName = Json.pluralname.Replace(" ", string.Empty),
                    ExternalName = Json.displayname.Replace(" ", string.Empty),
                    OwnershipType = new OwnershipTypes?(OwnershipTypes.OrganizationOwned),
                    IsAvailableOffline = new bool?(false),
                    Description = new Label(string.Empty, languageCode),
                    IsBusinessProcessEnabled = new bool?(false),
                    IsVisibleInMobile = propertyFalse,
                    IsVisibleInMobileClient = propertyFalse,
                    IsReadOnlyInMobileClient = propertyFalse,
                    IsOfflineInMobileClient = propertyFalse,
                    IsAuditEnabled = propertyFalse,
                    IsSLAEnabled = new bool?(false),
                    IsBPFEntity = new bool?(false),
                    IsDuplicateDetectionEnabled = propertyFalse,
                    IsConnectionsEnabled = propertyFalse,
                    IsActivityParty = new bool?(false),
                    IsReadingPaneEnabled = new bool?(false),
                    IsQuickCreateEnabled = new bool?(false),
                    AutoCreateAccessTeams = new bool?(false),
                    CanCreateCharts = propertyFalse,
                    IsMailMergeEnabled = propertyFalse,
                    ChangeTrackingEnabled = new bool?(false),
                    CanChangeTrackingBeEnabled = propertyFalse,
                    IsEnabledForExternalChannels = new bool?(false),
                    EntityHelpUrlEnabled = new bool?(false),
                    IsCustomizable = propertyTrue,
                    IsRenameable = propertyTrue,
                    IsMappable = propertyFalse,
                    SyncToExternalSearchIndex = new bool?(false),
                    CanEnableSyncToExternalSearchIndex = propertyFalse,
                    CanModifyAdditionalSettings = propertyFalse,
                    CanChangeHierarchicalRelationship = propertyFalse
                }
            };
            if (request.Parameters == null)
                request.Parameters = new ParameterCollection();
            if (request.Parameters.ContainsKey("SolutionUniqueName"))
                request.Parameters["SolutionUniqueName"] = Json.solution;
            else
                request.Parameters.Add("SolutionUniqueName", Json.solution);
            var response = (CreateEntityResponse)CrmServiceClient.Execute(request);
            var entityId = response.EntityId;
            var retrieveEntityRequest = new RetrieveEntityRequest()
            {
                EntityFilters = EntityFilters.All,
                MetadataId = entityId
            };
            EntityMetadata entityMetadata = ((RetrieveEntityResponse)CrmServiceClient.Execute(retrieveEntityRequest)).EntityMetadata;

            //Update field Id
            var requestId = new RetrieveAttributeRequest()
            {
                EntityLogicalName = entityMetadata.LogicalName,
                LogicalName = string.Format("{0}id", entityMetadata.LogicalName)
            };
            var attributeMetadataId = ((RetrieveAttributeResponse)CrmServiceClient.Execute(requestId)).AttributeMetadata;
            attributeMetadataId.ExternalName = $"{DataSourceName}Id";
            var updateRequestId = new UpdateAttributeRequest()
            {
                Attribute = attributeMetadataId,
                EntityName = entityMetadata.LogicalName,
                MergeLabels = false
            };
            CrmServiceClient.Execute(updateRequestId);
            //Update field name
            var requestName = new RetrieveAttributeRequest()
            {
                EntityLogicalName = entityMetadata.LogicalName,
                LogicalName = string.Format("{0}name", DataSourceName.ToLower())
            };
            var attributeMetadataName = ((RetrieveAttributeResponse)CrmServiceClient.Execute(requestName)).AttributeMetadata;
            attributeMetadataName.ExternalName = $"{DataSourceName}Name";
            var updateRequestName = new UpdateAttributeRequest()
            {
                Attribute = attributeMetadataName,
                EntityName = entityMetadata.LogicalName,
                MergeLabels = false
            };
            CrmServiceClient.Execute(updateRequestName);

            try
            {
                PublishAllXmlRequest publishAllXmlRequest = new PublishAllXmlRequest();
                PublishAllXmlResponse publishAllXmlResponse = (PublishAllXmlResponse)CrmServiceClient.Execute(publishAllXmlRequest);
            }
            catch
            {
            }
        }
    }
}
