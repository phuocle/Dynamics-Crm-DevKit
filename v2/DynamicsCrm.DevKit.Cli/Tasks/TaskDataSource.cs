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
using Microsoft.Xrm.Sdk.Metadata.Query;
using System.Collections.ObjectModel;
using DynamicsCrm.DevKit.Shared.Helper;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    class TaskDataSource
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[DATASOURCE]";
        private JsonDataSource json;

        public TaskDataSource(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            // /conn:"AuthType=ClientSecret;Url=https://dev-devkit.crm5.dynamics.com;ClientId=e31fc7d6-4dce-46e3-8677-04ab0a2968e3;ClientSecret=?-iwRSB0te8o]pHX_yVQLJnUqziB1E0h;" /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"datasources" /profile:"DEBUG"

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
            CliLog.WriteLine();

            json.name = json.name.ToLower();

            if (!IsValid()) return;

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Creating", CliLog.ColorGreen, " Data Source: ", CliLog.ColorCyan, $"{json.prefix}{json.name}");

            RegisterDataSource();

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Created", CliLog.ColorGreen, " Data Source: ", CliLog.ColorCyan, $"{json.prefix}{json.name}");

            CliLog.WriteLine();
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
            json.prefix = prefix;
            if (XrmHelper.IsExistDataSource(crmServiceClient, $"{json.prefix}{json.name}"))
                throw new Exception($"{LOG} name '{json.name}' exist");
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
                    SchemaName= $"{json.prefix}name",
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None),
                    MaxLength = 100,
                    DisplayName = new Label(json.displayname, languageCode),
                    ExternalName = json.displayname
                },
                Entity = new EntityMetadata
                {
                    DataProviderId = new Guid?(new Guid("B2112A7E-B26C-42F7-9B63-9A809A9D716F")),
                    IsActivity = new bool?(false),
                    SchemaName = string.Format("{0}{1}", (object)json.prefix, (object)json.name),
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
            EntityMetadata entityMetadata = ((RetrieveEntityResponse)crmServiceClient.Execute((OrganizationRequest)retrieveEntityRequest)).EntityMetadata;
            RetrieveAttributeRequest attributeRequest1 = new RetrieveAttributeRequest()
            {
                EntityLogicalName = entityMetadata.SchemaName,
                LogicalName = string.Format("{0}id", (object)entityMetadata.SchemaName)
            };
            AttributeMetadata attributeMetadata2 = ((RetrieveAttributeResponse)crmServiceClient.Execute((OrganizationRequest)attributeRequest1)).AttributeMetadata;
            attributeMetadata2.ExternalName = json.displayname;
            UpdateAttributeRequest attributeRequest2 = new UpdateAttributeRequest()
            {
                Attribute = attributeMetadata2,
                EntityName = entityMetadata.SchemaName,
                MergeLabels = false
            };
             crmServiceClient.Execute((OrganizationRequest)attributeRequest2);
            try
            {
                PublishAllXmlRequest publishAllXmlRequest = new PublishAllXmlRequest();
                PublishAllXmlResponse publishAllXmlResponse = (PublishAllXmlResponse) crmServiceClient.Execute((OrganizationRequest)publishAllXmlRequest);
            }
            catch
            {
            }
        }
    }
}
