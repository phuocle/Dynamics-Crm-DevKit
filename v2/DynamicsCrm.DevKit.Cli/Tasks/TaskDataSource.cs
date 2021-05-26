using System;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using Microsoft.Xrm.Sdk.Messages;
using System.Text.RegularExpressions;
using Microsoft.Xrm.Sdk.Metadata;
using DynamicsCrm.DevKit.Shared.Helper;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    class TaskDataSource
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[DATASOURCE]";
        private JsonDataSource json;
        //private Guid SolutionId = Guid.Empty;
        private string Prefix = string.Empty;
        private string DataSourceName = string.Empty;

        public TaskDataSource(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .datasources.FirstOrDefault(x => x.profile == arguments.Profile);
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "DATA-SOURCE");
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            //json.name = json.name.ToLower();

            if (!IsValid()) return;

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Creating", CliLog.ColorGreen, " Data Source: ", CliLog.ColorCyan, $"{DataSourceName}");
            CliLog.WriteLine(CliLog.ColorWhite, "| ");
            CliLog.Write(CliLog.ColorWhite, "| ");
            var wait = new Thread(ThreadWork.Dot);
            wait.Start();

            RegisterDataSource();

            wait.Abort();

            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, "| ");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Created", CliLog.ColorGreen, " Data Source: ", CliLog.ColorCyan, $"{DataSourceName}");
            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "DATA-SOURCE");
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution.Length == 0 || json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.displayname.Length == 0 || json.displayname == "???")
                throw new Exception($"{LOG} 'displayname' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.pluralname.Length == 0 || json.pluralname == "???")
                throw new Exception($"{LOG} 'pluralname' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.name.Length == 0 || json.name == "???")
                throw new Exception($"{LOG} 'name' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            var regex = new Regex("^[a-zA-Z][_a-zA-Z0-9\\s,]*$");
            if (!regex.IsMatch(json.displayname))
                throw new Exception($"{LOG} 'displayname' can only contain alpha-numeric and underscore characters.");
            if (!regex.IsMatch(json.pluralname))
                throw new Exception($"{LOG} 'pluralname' can only contain alpha-numeric and underscore characters.");
            if (!regex.IsMatch(json.name))
                throw new Exception($"{LOG} 'name' can only contain alpha-numeric and underscore characters.");
            if (json.name.Contains(" "))
                throw new Exception($"{LOG} 'name' can cannot contain space character.");
            if (!XrmHelper.IsExistSolution(crmServiceClient, json.solution, out var solutionId, out var prefix))
                throw new Exception($"{LOG} solution '{json.solution}' not exist");
            //SolutionId = solutionId;
            Prefix = prefix;
            DataSourceName = json.name.ToLower().StartsWith(prefix.ToLower()) ? json.name : $"{Prefix}{json.name}";
            if (XrmHelper.IsExistDataSource(crmServiceClient, DataSourceName))
                throw new Exception($"{LOG} name '{DataSourceName}' exist");
            return true;
        }

        private int GetLanguageCode()
        {
            var fetchXml = $@"
<fetch>
  <entity name='organization'>
    <attribute name='languagecode' />
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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
                    SchemaName= $"{DataSourceName}Name",
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None),
                    MaxLength = 100,
                    DisplayName = new Label(json.displayname, languageCode),
                    ExternalName = json.displayname
                },
                Entity = new EntityMetadata
                {
                    DataProviderId = new Guid?(new Guid("B2112A7E-B26C-42F7-9B63-9A809A9D716F")),
                    IsActivity = new bool?(false),
                    SchemaName = DataSourceName,
                    DisplayName = new Label(json.displayname, languageCode),
                    DisplayCollectionName = new Label(json.pluralname, languageCode),
                    ExternalCollectionName = json.pluralname.Replace(" ", string.Empty),
                    ExternalName = json.displayname.Replace(" ", string.Empty),
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
                request.Parameters["SolutionUniqueName"] = json.solution;
            else
                request.Parameters.Add("SolutionUniqueName", json.solution);
            var response = (CreateEntityResponse)crmServiceClient.Execute(request);
            var entityId = response.EntityId;
            var retrieveEntityRequest = new RetrieveEntityRequest()
            {
                EntityFilters = EntityFilters.All,
                MetadataId = entityId
            };
            EntityMetadata entityMetadata = ((RetrieveEntityResponse)crmServiceClient.Execute(retrieveEntityRequest)).EntityMetadata;

            //Update field Id
            var requestId = new RetrieveAttributeRequest()
            {
                EntityLogicalName = entityMetadata.LogicalName,
                LogicalName = string.Format("{0}id", entityMetadata.LogicalName)
            };
            var attributeMetadataId = ((RetrieveAttributeResponse)crmServiceClient.Execute(requestId)).AttributeMetadata;
            attributeMetadataId.ExternalName = $"{DataSourceName}Id";
            var updateRequestId = new UpdateAttributeRequest()
            {
                Attribute = attributeMetadataId,
                EntityName = entityMetadata.LogicalName,
                MergeLabels = false
            };
            crmServiceClient.Execute(updateRequestId);
            //Update field name
            var requestName = new RetrieveAttributeRequest()
            {
                EntityLogicalName = entityMetadata.LogicalName,
                LogicalName = string.Format("{0}name", DataSourceName.ToLower())
            };
            var attributeMetadataName = ((RetrieveAttributeResponse)crmServiceClient.Execute(requestName)).AttributeMetadata;
            attributeMetadataName.ExternalName = $"{DataSourceName}Name";
            var updateRequestName = new UpdateAttributeRequest()
            {
                Attribute = attributeMetadataName,
                EntityName = entityMetadata.LogicalName,
                MergeLabels = false
            };
            crmServiceClient.Execute(updateRequestName);

            try
            {
                PublishAllXmlRequest publishAllXmlRequest = new PublishAllXmlRequest();
                PublishAllXmlResponse publishAllXmlResponse = (PublishAllXmlResponse) crmServiceClient.Execute(publishAllXmlRequest);
            }
            catch
            {
            }
        }
    }
}
