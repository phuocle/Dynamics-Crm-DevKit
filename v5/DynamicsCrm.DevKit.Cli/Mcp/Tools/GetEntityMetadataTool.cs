using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetEntityMetadataTool
    {
        private readonly MetadataService _metadataService;

        public GetEntityMetadataTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_entity_metadata", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve full metadata for a single Dataverse entity/table. " +
            "Call this BEFORE writing FetchXML to discover correct attribute names and relationships. " +
            "Call this AFTER a failed execute_fetchxml to find the correct column names.\n\n" +

            "RETURNS:\n" +
            "1. Entity info: logicalName, displayName, displayCollectionName (plural display name), entitySetName (for Web API), primaryIdAttribute, primaryNameAttribute, " +
            "schemaName, ownershipType, isActivity, isCustomEntity, isAuditEnabled, changeTrackingEnabled, objectTypeCode, totalAttributes\n" +
            "2. Attributes table (all columns): logicalName (use this in FetchXML), type " +
            "(Lookup -> targets, Picklist with options, Status, State, MultiSelect, String, Money, DateTime, Boolean, Integer, Decimal, Memo, etc.), " +
            "requiredLevel (Required/Recommended), isValidForCreate, isValidForUpdate, " +
            "constraints (maxLength for strings, min..max for numbers, precision for decimals, true/false labels for booleans), displayName\n" +
            "3. Relationships:\n" +
            "   - 1:N (this entity is parent): childEntity, childLookupField, schemaName\n" +
            "   - N:1 (this entity is child): parentEntity, lookupField, schemaName\n" +
            "   - N:N: intersectEntity, entity1, entity2, schemaName\n" +
            "4. Alternate Keys: schemaName, displayName, keyAttributes\n\n" +

            "HOW TO USE RELATIONSHIPS IN FETCHXML:\n" +
            "- For N:1 (lookup): <link-entity name='[parentEntity]' from='[parentPrimaryId]' to='[lookupField]'>\n" +
            "  Example: account has N:1 to contact via primarycontactid -> <link-entity name='contact' from='contactid' to='primarycontactid'>\n" +
            "- For 1:N (children): <link-entity name='[childEntity]' from='[childLookupField]' to='[thisPrimaryId]'>\n" +
            "  Example: account 1:N contact -> <link-entity name='contact' from='parentcustomerid' to='accountid'>\n" +
            "- For N:N: chain two link-entity through the intersectEntity\n\n" +

            "WHEN TO USE:\n" +
            "- Before building any FetchXML query to ensure correct attribute names\n" +
            "- When you need to join entities and need the correct from/to columns\n" +
            "- When you need to know what picklist/choice options are available for filtering\n" +
            "- When you need to find the primary key or primary name field of an entity\n" +
            "- When you need to know which fields are required vs optional for create/update")]
        public async Task<string> get_entity_metadata(
            [Description(
                "The logical name of the entity (always lowercase). " +
                "Common entities: 'account', 'contact', 'lead', 'opportunity', 'incident' (case), " +
                "'systemuser', 'team', 'businessunit', 'task', 'appointment', 'email', 'phonecall'. " +
                "Custom entities typically have a publisher prefix like 'new_', 'cr_', 'msdyn_'. " +
                "If unsure, call get_entities_metadata first to find the correct logical name."
            )] string entity_name,
            [Description(
                "Optional prefix filter for attributes and relationships (e.g. 'ab_', 'msdyn_', 'new_'). " +
                "When provided, only attributes and relationships matching this prefix are returned. " +
                "Leave empty to return all attributes and relationships."
            )] string attribute_prefix = "")
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            try
            {
                var metadata = await _metadataService.FetchEntityMetadataAsync(entity_name.Trim().ToLowerInvariant());
                return MarkdownFormatter.FormatEntityDetail(metadata, attribute_prefix);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to load metadata for '{entity_name}': {ex.Message}";
            }
        }
    }
}
