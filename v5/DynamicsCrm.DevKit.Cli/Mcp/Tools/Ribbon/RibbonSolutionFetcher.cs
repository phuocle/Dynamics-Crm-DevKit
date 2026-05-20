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

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonSolutionFetcher
    {
        private readonly ServiceClient _serviceClient;
        private const string SOLUTION_NAME = "devkit_ribbon";

        public RibbonSolutionFetcher(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public string FetchExistingRibbonDiffXml(string entityName)
        {
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

        private void ResetSolutionToEntity(Guid solutionId, string entityName)
        {
            var metadataId = GetEntityMetadataId(entityName);
            if (metadataId == null)
                return;

            RemoveAllSolutionComponents(solutionId);

            _serviceClient.Execute(new AddSolutionComponentRequest
            {
                ComponentId = metadataId.Value,
                ComponentType = 1,
                SolutionUniqueName = SOLUTION_NAME,
                AddRequiredComponents = false,
                DoNotIncludeSubcomponents = true
            });
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

                _serviceClient.Execute(new RemoveSolutionComponentRequest
                {
                    ComponentId = componentId,
                    ComponentType = componentType.Value,
                    SolutionUniqueName = SOLUTION_NAME
                });
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
