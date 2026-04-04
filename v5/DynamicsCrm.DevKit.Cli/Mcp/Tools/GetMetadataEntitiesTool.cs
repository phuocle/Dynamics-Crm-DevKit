using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetMetadataEntitiesTool
    {
        private readonly MetadataService _metadataService;

        public GetMetadataEntitiesTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_metadata_entities", Title = "Get entity/table metadata (list all or detail one)",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve Dataverse entity/table metadata. TWO MODES based on entity_name:\n\n" +

            "MODE 1 — LIST ALL (entity_name is EMPTY):\n" +
            "Returns a markdown table of ALL entities with logicalName, displayName, ownershipType, isCustom, isActivity.\n" +
            "Use 'filter' to narrow by keyword. Use 'custom_only' to show only custom entities.\n\n" +

            "MODE 2 — DETAIL ONE (entity_name is PROVIDED):\n" +
            "Returns full metadata for a single entity:\n" +
            "1. Entity info: logicalName, displayName, displayCollectionName, entitySetName, primaryIdAttribute, primaryNameAttribute, " +
            "schemaName, ownershipType, isActivity, isCustomEntity, isAuditEnabled, changeTrackingEnabled, objectTypeCode, totalAttributes\n" +
            "2. Attributes table: logicalName, type (Lookup -> targets, Picklist with options, Status, State, MultiSelect, String, Money, DateTime, Boolean, Integer, Decimal, Memo, etc.), " +
            "requiredLevel, isValidForCreate, isValidForUpdate, constraints, displayName\n" +
            "3. Relationships: 1:N (childEntity, childLookupField), N:1 (parentEntity, lookupField), N:N (intersectEntity, entity1, entity2)\n" +
            "4. Alternate Keys: schemaName, displayName, keyAttributes\n\n" +

            "HOW TO USE RELATIONSHIPS IN FETCHXML:\n" +
            "- For N:1 (lookup): <link-entity name='[parentEntity]' from='[parentPrimaryId]' to='[lookupField]'>\n" +
            "  Example: account has N:1 to contact via primarycontactid -> <link-entity name='contact' from='contactid' to='primarycontactid'>\n" +
            "- For 1:N (children): <link-entity name='[childEntity]' from='[childLookupField]' to='[thisPrimaryId]'>\n" +
            "  Example: account 1:N contact -> <link-entity name='contact' from='parentcustomerid' to='accountid'>\n" +
            "- For N:N: chain two link-entity through the intersectEntity\n\n" +

            "COMMON NAME MAPPINGS (displayName -> logicalName):\n" +
            "Account -> account, Contact -> contact, Lead -> lead, " +
            "Opportunity -> opportunity, Case -> incident, Activity -> activitypointer, " +
            "User -> systemuser, Team -> team, Business Unit -> businessunit, " +
            "Note -> annotation, Email -> email, Task -> task, Phone Call -> phonecall, " +
            "Product -> product, Quote -> quote, Order -> salesorder, Invoice -> invoice\n\n" +

            "WHEN TO USE:\n" +
            "- When you don't know the logical name of an entity (leave entity_name empty, use filter)\n" +
            "- Before building any FetchXML query to ensure correct attribute names\n" +
            "- When you need to join entities and need the correct from/to columns\n" +
            "- When you need to know what picklist/choice options are available for filtering\n" +
            "- When you need to find the primary key or primary name field of an entity\n" +
            "- When you need to know which fields are required vs optional for create/update")]
        public async Task<string> get_metadata_entities(
            [Description(
                "Entity logical name (always lowercase). " +
                "When PROVIDED: returns full detail (attributes, relationships, keys) for that entity. " +
                "When EMPTY: returns a summary list of ALL entities (use 'filter' to narrow). " +
                "Common entities: 'account', 'contact', 'lead', 'opportunity', 'incident' (case), " +
                "'systemuser', 'team', 'businessunit', 'task', 'appointment', 'email', 'phonecall'. " +
                "Custom entities typically have a publisher prefix like 'new_', 'cr_', 'msdyn_'."
            )] string entity_name = "",
            [Description(
                "LIST MODE: keyword to filter entities by logical name or display name (e.g. 'account', 'msdyn_'). " +
                "DETAIL MODE: prefix filter for attributes and relationships (e.g. 'ab_', 'msdyn_', 'new_'). " +
                "Leave empty to return all."
            )] string filter = "",
            [Description("LIST MODE only: true to return only custom entities. Ignored in detail mode.")] bool custom_only = false,
            [Description("LIST MODE only: true to include intersect (N:N relationship) entities. Ignored in detail mode.")] bool include_intersect = false)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(entity_name))
                    return await GetEntityDetail(entity_name.Trim().ToLowerInvariant(), filter);

                return await ListAllEntities(filter, custom_only, include_intersect);
            }
            catch (Exception ex)
            {
                var target = string.IsNullOrWhiteSpace(entity_name) ? "entities metadata" : $"metadata for '{entity_name}'";
                return $"Error: Failed to load {target}: {ex.Message}";
            }
        }

        private async Task<string> GetEntityDetail(string entityName, string attributePrefix)
        {
            var metadata = await _metadataService.FetchEntityMetadataAsync(entityName);
            return CompactFormatter.FormatEntityDetail(metadata, attributePrefix);
        }

        private async Task<string> ListAllEntities(string filter, bool customOnly, bool includeIntersect)
        {
            var entities = await _metadataService.GetEntitiesMetadataAsync(EntityFilters.Entity);
            var query = entities.AsEnumerable();

            if (!includeIntersect)
                query = query.Where(x => x.IsIntersect != true);

            if (customOnly)
                query = query.Where(x => x.IsCustomEntity == true);

            if (!string.IsNullOrWhiteSpace(filter))
            {
                var keyword = filter.Trim().ToLowerInvariant();
                query = query.Where(x =>
                    (!string.IsNullOrWhiteSpace(x.LogicalName) && x.LogicalName.ToLowerInvariant().Contains(keyword)) ||
                    (!string.IsNullOrWhiteSpace(x.DisplayName?.UserLocalizedLabel?.Label) &&
                     x.DisplayName.UserLocalizedLabel.Label.ToLowerInvariant().Contains(keyword)));
            }

            var sorted = query.OrderBy(x => x.LogicalName);
            return CompactFormatter.FormatEntitySummaryTable(sorted);
        }
    }
}
