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
            "Get entity list metadata in compact JSON format. " +
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

                var payload = query
                    .OrderBy(x => x.LogicalName)
                    .Select(MetadataFormatter.ToEntitySummary)
                    .ToList();

                return ToolResponseFormatter.Success(new
                {
                    count = payload.Count,
                    entities = payload
                });
            }
            catch (Exception ex)
            {
                return ToolResponseFormatter.Error("Failed to load entities metadata", ex);
            }
        }
    }
}
