using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetNoneMessagesTool
    {
        private readonly MetadataService _metadataService;

        public GetNoneMessagesTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_none_messages", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Get global none-bound messages. " +
            "Equivalent to get_entity_messages(entity_logical_name='none').")]
        public async Task<string> get_none_messages(
            [Description("true: include Custom Action messages.")] bool include_custom_actions = true,
            [Description("true: include Custom API messages.")] bool include_custom_apis = true)
        {
            try
            {
                var payload = await MessageDiscoveryHelper.GetMessagePayloadAsync(
                    _metadataService,
                    "none",
                    include_custom_actions,
                    include_custom_apis);

                return ToolResponseFormatter.Success(payload);
            }
            catch (Exception ex)
            {
                return ToolResponseFormatter.Error("Failed to load none-bound messages", ex);
            }
        }
    }
}
