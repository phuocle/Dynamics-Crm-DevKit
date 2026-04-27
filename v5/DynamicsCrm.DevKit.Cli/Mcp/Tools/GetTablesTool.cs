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
            "Dataverse entity metadata. entity_name empty = list (filter by keyword/custom_only/names; includes IsAuditEnabled). Set = detail (attributes, relationships, alternate keys).\n\n" +

            "WHEN TO USE:\n" +
            "- Discover entity/attribute names before building FetchXML\n" +
            "- Find join columns, picklist options, required fields, primary key\n" +
            "- Audit settings on a set of entities (use names= with solution entity list)\n\n" +

            "MODE/CONVENTION:\n" +
            "- names= filters by exact logical-name list; filter= uses contains (list) or prefix (detail).")]
        public async Task<string> get_tables(
            [Description("Logical name → detail mode. Empty = list mode."
            )] string entity_name = "",
            [Description("LIST: keyword filter on entity. DETAIL: prefix filter on attributes/relationships."
            )] string filter = "",
            [Description("LIST: only custom entities.")] bool custom_only = false,
            [Description("LIST: include N:N intersect entities.")] bool include_intersect = false,
            [Description("LIST: comma-separated logical names. Overrides filter/custom_only."
            )] string names = "")
        {
            try
            {
                var trimmedFilter = string.IsNullOrWhiteSpace(filter) ? "" : filter.Trim();
                if (!string.IsNullOrWhiteSpace(entity_name))
                    return await GetEntityDetail(entity_name.Trim().ToLowerInvariant(), trimmedFilter);

                return await ListAllEntities(trimmedFilter, custom_only, include_intersect, names);
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

        private async Task<string> ListAllEntities(string filter, bool customOnly, bool includeIntersect, string names)
        {
            var entities = await _metadataService.GetEntitiesMetadataAsync(EntityFilters.Entity);
            var query = entities.AsEnumerable();

            if (!string.IsNullOrWhiteSpace(names))
            {
                var nameSet = names
                    .Split(new[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(n => n.Trim().ToLowerInvariant())
                    .Where(n => !string.IsNullOrEmpty(n))
                    .ToHashSet();
                query = query.Where(x => nameSet.Contains(x.LogicalName));
            }
            else
            {
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
            }

            var sorted = query.OrderBy(x => x.LogicalName);
            return CompactFormatter.FormatEntitySummaryTable(sorted);
        }
    }
}
