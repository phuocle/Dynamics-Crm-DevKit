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
            "Retrieve entity metadata (attributes, types, relationships, keys). " +
            "Use to inspect Dataverse schema before creating/updating records.")]
        public async Task<string> get_entity_metadata(
            [Description("Entity logical name (e.g. 'account', 'contact', 'ab_pricelist').")] string entity_name,
            [Description("Optional prefix filter for attributes and relationships (e.g. 'ab_'). Leave empty for all.")] string attribute_prefix = "")
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
