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
            "List Dataverse entities in a markdown table. " +
            "Supports text filter, custom-only mode, and intersect include/exclude.")]
        public async Task<string> get_entities_metadata(
            [Description("Optional keyword to match logical name or display name.")] string filter = "",
            [Description("true: return only custom entities.")] bool custom_only = false,
            [Description("true: include intersect entities. false: exclude intersect entities.")] bool include_intersect = false)
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
                return MarkdownFormatter.FormatEntitySummaryTable(sorted);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to load entities metadata: {ex.Message}";
            }
        }
    }
}
