using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Label = Microsoft.Xrm.Sdk.Label;
namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskDataSource(CommandLineArgs arg, JsonDataSource json) : ITask
    {
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        public string TaskType => $"[{nameof(CliType.datasources).ToUpper()}]";
        public CommandLineArgs Arg { get; set; } = arg;
        private JsonDataSource Json { get; set; } = json;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        private string DataSourceName { get; set; }

        private DeploymentService _deploymentService;
        private DeploymentService Deployment => _deploymentService ??= new DeploymentService(ServiceClient);
        private MetadataService _metadataService;
        private MetadataService Metadata => _metadataService ??= new MetadataService(ServiceClient);

        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution.Length == 0 || Json.solution == "???")
            {
                SpectreLog.ActionError("'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.displayname.Length == 0 || Json.displayname == "???")
            {
                SpectreLog.ActionError("'displayname' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.pluralname.Length == 0 || Json.pluralname == "???")
            {
                SpectreLog.ActionError("'pluralname' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.name.Length == 0 || Json.name == "???")
            {
                SpectreLog.ActionError("'name' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            var regex = new Regex("^[a-zA-Z][_a-zA-Z0-9\\s,]*$");
            if (!regex.IsMatch(Json.displayname))
            {
                SpectreLog.ActionError("'displayname' can only contain alpha-numeric and underscore characters.");
                return false;
            }
            if (!regex.IsMatch(Json.pluralname))
            {
                SpectreLog.ActionError("'pluralname' can only contain alpha-numeric and underscore characters.");
                return false;
            }
            if (!regex.IsMatch(Json.name))
            {
                SpectreLog.ActionError("'name' can only contain alpha-numeric and underscore characters.");
                return false;
            }
            if (Json.name.Contains(" "))
            {
                SpectreLog.ActionError("'name' can cannot contain space character.");
                return false;
            }
            (IsOk, SolutionId, SolutionPrefix) = await Deployment.IsExistSolutionAsync(Json.solution);
            if (!IsOk)
            {
                SpectreLog.ActionError($"solution '{Json.solution}' not exist");
                return false;
            }
            DataSourceName = Json.name.ToLower().StartsWith(SolutionPrefix.ToLower()) ? Json.name : $"{SolutionPrefix}{Json.name}";
            if (await Metadata.IsExistDataSourceAsync(DataSourceName))
            {
                SpectreLog.ActionError($"name '{DataSourceName}' exist");
                return false;
            }
            return true;
        }

        public async Task RunAsync()
        {
            SpectreLog.ActionWithLevel0("START");
            SpectreLog.WriteLine();
            if (await IsValidAsync())
            {
                await SpectreLog.WithStatusAsync($"Creating Data Source: {DataSourceName}", async ctx =>
                {
                    await RegisterDataSourceAsync();
                });
                SpectreLog.ActionWithLevel0(CliAction.CREATED, "Data Source", DataSourceName);
            }
            SpectreLog.WriteRequestCounts();
            SpectreLog.WriteLine();
            SpectreLog.ActionWithLevel0("END");
        }

        public async Task RegisterDataSourceAsync()
        {
            var languageCode = await Metadata.GetLanguageCodeAsync();
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
            request.Parameters ??= [];
            if (request.Parameters.ContainsKey("SolutionUniqueName"))
                request.Parameters["SolutionUniqueName"] = Json.solution;
            else
                request.Parameters.Add("SolutionUniqueName", Json.solution);
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (CreateEntityResponse)await ServiceClient.ExecuteAsync(request);
            var entityId = response.EntityId;
            var retrieveEntityRequest = new RetrieveEntityRequest()
            {
                EntityFilters = EntityFilters.All,
                MetadataId = entityId
            };
            XrmHelper.COUNT_ExecuteAsync++;
            EntityMetadata entityMetadata = ((RetrieveEntityResponse)await ServiceClient.ExecuteAsync(retrieveEntityRequest)).EntityMetadata;

            var requestId = new RetrieveAttributeRequest()
            {
                EntityLogicalName = entityMetadata.LogicalName,
                LogicalName = string.Format("{0}id", entityMetadata.LogicalName)
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var attributeMetadataId = ((RetrieveAttributeResponse)await ServiceClient.ExecuteAsync(requestId)).AttributeMetadata;
            attributeMetadataId.ExternalName = $"{DataSourceName}Id";
            var updateRequestId = new UpdateAttributeRequest()
            {
                Attribute = attributeMetadataId,
                EntityName = entityMetadata.LogicalName,
                MergeLabels = false
            };
            XrmHelper.COUNT_ExecuteAsync++;
            await ServiceClient.ExecuteAsync(updateRequestId);
            var requestName = new RetrieveAttributeRequest()
            {
                EntityLogicalName = entityMetadata.LogicalName,
                LogicalName = string.Format("{0}name", DataSourceName.ToLower())
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var attributeMetadataName = ((RetrieveAttributeResponse)await ServiceClient.ExecuteAsync(requestName)).AttributeMetadata;
            attributeMetadataName.ExternalName = $"{DataSourceName}Name";
            var updateRequestName = new UpdateAttributeRequest()
            {
                Attribute = attributeMetadataName,
                EntityName = entityMetadata.LogicalName,
                MergeLabels = false
            };
            XrmHelper.COUNT_ExecuteAsync++;
            await ServiceClient.ExecuteAsync(updateRequestName);

            try
            {
                PublishAllXmlRequest publishAllXmlRequest = new();
                XrmHelper.COUNT_ExecuteAsync++;
                PublishAllXmlResponse publishAllXmlResponse = (PublishAllXmlResponse)await ServiceClient.ExecuteAsync(publishAllXmlRequest);
            }
            catch
            {
            }
        }
    }
}