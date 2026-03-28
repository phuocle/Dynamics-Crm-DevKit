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
    public class GetEntitiesMetadataTool
    {
        private readonly MetadataService _metadataService;

        public GetEntitiesMetadataTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_entities_metadata", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "List ALL entities (tables) in this Dataverse environment. " +
            "Returns a markdown table with each entity's logicalName, displayName, schemaName, ownershipType, isCustom, isActivity, and isAuditEnabled flag.\n\n" +

            "WHEN TO USE:\n" +
            "- When you don't know the logical name of an entity the user mentions " +
            "(e.g., user says 'Cases' but the logical name is 'incident')\n" +
            "- When you need to find custom entities (they have prefixes like 'new_', 'cr_', 'msdyn_')\n" +
            "- When a FetchXML query fails with 'entity not found' error\n" +
            "- To explore what tables are available in the Dataverse environment\n\n" +

            "COMMON NAME MAPPINGS (displayName -> logicalName):\n" +
            "Account -> account, Contact -> contact, Lead -> lead, " +
            "Opportunity -> opportunity, Case -> incident, Activity -> activitypointer, " +
            "User -> systemuser, Team -> team, Business Unit -> businessunit, " +
            "Note -> annotation, Email -> email, Task -> task, Phone Call -> phonecall, " +
            "Product -> product, Quote -> quote, Order -> salesorder, Invoice -> invoice\n\n" +

            "TIP: After finding the correct logicalName, use get_entity_metadata to get column details before querying.")]
        public async Task<string> get_entities_metadata(
            [Description(
                "Optional keyword to filter entities by logical name or display name. " +
                "Examples: 'account', 'contact', 'msdyn_', 'invoice'. " +
                "Leave empty to return all entities."
            )] string filter = "",
            [Description("true: return only custom entities (non-system). false: return all entities.")] bool custom_only = false,
            [Description("true: include intersect (N:N relationship) entities. false: exclude them (default).")] bool include_intersect = false)
        {
            try
            {
                var entities = await _metadataService.GetEntitiesMetadataAsync(EntityFilters.Entity);
                var query = entities.AsEnumerable();

                if (!include_intersect)
                    query = query.Where(x => x.IsIntersect != true);

                if (custom_only)
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
            catch (Exception ex)
            {
                return $"Error: Failed to load entities metadata: {ex.Message}";
            }
        }
    }
}
