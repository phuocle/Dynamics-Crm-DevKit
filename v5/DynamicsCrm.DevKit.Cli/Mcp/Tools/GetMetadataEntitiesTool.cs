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
            "Retrieve Dataverse entity/table metadata.\n\n" +

            "TWO MODES:\n" +
            "- entity_name EMPTY: summary table of all entities (filter by keyword or custom_only)\n" +
            "- entity_name PROVIDED: full detail — attributes (type, options, required), relationships (1:N, N:1, N:N), alternate keys\n\n" +

            "RELATIONSHIPS IN FETCHXML:\n" +
            "- N:1: <link-entity name='[parent]' from='[parentPK]' to='[lookupField]'>\n" +
            "- 1:N: <link-entity name='[child]' from='[childLookup]' to='[thisPK]'>\n" +
            "- N:N: chain two link-entity through intersectEntity\n\n" +

            "COMMON NAMES: Account=account, Contact=contact, Lead=lead, Opportunity=opportunity, " +
            "Case=incident, User=systemuser, Team=team, Note=annotation\n\n" +

            "WHEN TO USE:\n" +
            "- Discover entity/attribute names before building FetchXML\n" +
            "- Find join columns, picklist options, required fields, or primary key")]
        public async Task<string> get_metadata_entities(
            [Description("Entity logical name for full detail. Empty = list all entities."
            )] string entity_name = "",
            [Description("LIST: keyword filter. DETAIL: prefix filter for attributes/relationships."
            )] string filter = "",
            [Description("LIST only: show only custom entities.")] bool custom_only = false,
            [Description("LIST only: include intersect (N:N) entities.")] bool include_intersect = false)
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
