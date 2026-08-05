using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonSolutionFetcher
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpExecutionContext _context;
        private const string SOLUTION_NAME = "devkit_ribbon";

        public RibbonSolutionFetcher(ServiceClient serviceClient, McpExecutionContext context)
        {
            _serviceClient = serviceClient ?? throw new ArgumentNullException(nameof(serviceClient));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public string FetchExistingRibbonDiffXml(string entityName)
        {
            _context.AssertMutationAllowed("prepare the ribbon solution for export");
            var solutionId = GetSolutionId();
            if (solutionId == null)
                return RibbonXmlHelpers.GetEmptyRibbonDiffXml();

            try
            {
                ResetSolutionToEntity(solutionId.Value, entityName);

                var exportReq = new ExportSolutionRequest
                {
                    SolutionName = SOLUTION_NAME,
                    Managed = false
                };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                var zipBytes = exportResp.ExportSolutionFile;

                using var ms = new MemoryStream(zipBytes);
                using var archive = new ZipArchive(ms, ZipArchiveMode.Read);

                var customizationsEntry = archive.Entries
                    .FirstOrDefault(e => e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));

                if (customizationsEntry == null)
                    throw new InvalidOperationException("Exported solution does not contain customizations.xml.");

                using var entryStream = customizationsEntry.Open();
                var doc = XDocument.Load(entryStream);

                var entityNode = doc.Descendants("Entity")
                    .FirstOrDefault(e =>
                    {
                        var nameEl = e.Element("Name");
                        return nameEl != null && string.Equals(
                            nameEl.Value, entityName, StringComparison.OrdinalIgnoreCase);
                    });

                if (entityNode != null)
                {
                    var ribbonDiffEl = entityNode.Element("RibbonDiffXml");
                    if (ribbonDiffEl != null)
                        return ribbonDiffEl.ToString();
                }
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(
                    $"Failed to export existing '{SOLUTION_NAME}' RibbonDiffXml for '{entityName}'. " +
                    "Update is blocked to prevent overwriting existing ribbon customizations with an empty RibbonDiffXml.",
                    ex);
            }

            return RibbonXmlHelpers.GetEmptyRibbonDiffXml();
        }

        /// <summary>
        /// Reads the published ribbon through RetrieveEntityRibbonRequest. This is
        /// deliberately separate from FetchExistingRibbonDiffXml because exporting
        /// the devkit solution requires destructive component reset operations.
        /// </summary>
        public string ReadRibbonWithoutMutation(string entityName, RibbonLocationFilters filter = RibbonLocationFilters.Form)
        {
            var response = (RetrieveEntityRibbonResponse)_serviceClient.Execute(new RetrieveEntityRibbonRequest
            {
                EntityName = entityName,
                RibbonLocationFilter = filter
            });
            if (response?.CompressedEntityXml == null || response.CompressedEntityXml.Length == 0)
                return RibbonXmlHelpers.GetEmptyRibbonDiffXml();

            using var input = new MemoryStream(response.CompressedEntityXml);
            using var zip = new ZipArchive(input, ZipArchiveMode.Read);
            var entry = zip.GetEntry("RibbonXml.xml");
            if (entry == null)
                return RibbonXmlHelpers.GetEmptyRibbonDiffXml();
            using var reader = new StreamReader(entry.Open());
            return reader.ReadToEnd();
        }

        private void ResetSolutionToEntity(Guid solutionId, string entityName)
        {
            _context.AssertMutationAllowed("reset ribbon solution components");
            var metadataId = GetEntityMetadataId(entityName);
            if (metadataId == null)
                return;

            RemoveAllSolutionComponents(solutionId);

            SolutionComponentCreateHelper.AddExistingComponent(
                _context,
                _serviceClient,
                metadataId.Value,
                1,
                SOLUTION_NAME,
                addRequiredComponents: false,
                doNotIncludeSubcomponents: true);
        }

        private Guid? GetEntityMetadataId(string entityName)
        {
            var response = (RetrieveEntityResponse)_serviceClient.Execute(new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            });

            return response.EntityMetadata.MetadataId;
        }

        private void RemoveAllSolutionComponents(Guid solutionId)
        {
            var query = new QueryExpression("solutioncomponent")
            {
                NoLock = true,
                ColumnSet = new ColumnSet("objectid", "componenttype"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("solutionid", ConditionOperator.Equal, solutionId)
                    }
                }
            };

            foreach (var component in _serviceClient.RetrieveMultiple(query).Entities)
            {
                var componentId = component.GetAttributeValue<Guid>("objectid");
                var componentType = component.GetAttributeValue<OptionSetValue>("componenttype")?.Value;
                if (componentId == Guid.Empty || !componentType.HasValue)
                    continue;

                SolutionComponentCreateHelper.RemoveExistingComponent(
                    _context,
                    _serviceClient,
                    componentId,
                    componentType.Value,
                    SOLUTION_NAME);
            }
        }

        private Guid? GetSolutionId()
        {
            var fetch = $@"<fetch top='1'>
                <entity name='solution'>
                    <attribute name='solutionid'/>
                    <filter>
                        <condition attribute='uniquename' operator='eq' value='{SOLUTION_NAME}'/>
                    </filter>
                </entity>
            </fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
            return result.Entities.Count > 0 ? result.Entities[0].Id : null;
        }
    }
}
