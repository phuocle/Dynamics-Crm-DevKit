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
            "Get full metadata for one Dataverse entity. " +
            "Returns entity info, attributes, relationships, and keys.")]
        public async Task<string> get_entity_metadata(
            [Description("Entity logical name, for example: account or contact.")] string entity_name,
            [Description("Optional attribute prefix, for example: new_ or msdyn_.")] string attribute_prefix = "")
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ToolResponseFormatter.Error("entity_name is required.");

            try
            {
                var metadata = await _metadataService.FetchEntityMetadataAsync(entity_name.Trim().ToLowerInvariant());
                var payload = MetadataFormatter.ToEntityDetail(metadata, attribute_prefix);
                return ToolResponseFormatter.Success(payload);
            }
            catch (Exception ex)
            {
                return ToolResponseFormatter.Error($"Failed to load metadata for '{entity_name}'", ex);
            }
        }
    }
}
