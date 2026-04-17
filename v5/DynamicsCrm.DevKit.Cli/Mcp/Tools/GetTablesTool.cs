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
    public class GetTablesTool
    {
        private readonly MetadataService _metadataService;

        public GetTablesTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_tables", Title = "Inspect table metadata, columns, and relationships",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve Dataverse entity/table metadata.\n\n" +

            "TWO MODES:\n" +
            "- entity_name EMPTY: summary table of all entities (filter by keyword or custom_only)\n" +
            "- entity_name PROVIDED: full detail — attributes (type, options, required), relationships (1:N, N:1, N:N), alternate keys\n\n" +

            "COMMON NAMES: account, contact, lead, opportunity, incident (Case), systemuser (User), team, annotation (Note)\n\n" +

            "WHEN TO USE:\n" +
            "- Discover entity/attribute names before building FetchXML\n" +
            "- Find join columns, picklist options, required fields, or primary key")]
        public async Task<string> get_tables(
            [Description("Entity logical name for full detail. Empty = list all entities."
            )] string entity_name = "",
            [Description("LIST: keyword filter. DETAIL: prefix filter for attributes/relationships."
            )] string filter = "",
            [Description("LIST only: show only custom entities.")] bool custom_only = false,
            [Description("LIST only: include intersect (N:N) entities.")] bool include_intersect = false)
        {
            try
            {
                var trimmedFilter = string.IsNullOrWhiteSpace(filter) ? "" : filter.Trim();
                if (!string.IsNullOrWhiteSpace(entity_name))
                    return await GetEntityDetail(entity_name.Trim().ToLowerInvariant(), trimmedFilter);

                return await ListAllEntities(trimmedFilter, custom_only, include_intersect);
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
