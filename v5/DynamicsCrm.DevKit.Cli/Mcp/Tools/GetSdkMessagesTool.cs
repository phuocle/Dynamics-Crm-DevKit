using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetSdkMessagesTool
    {
        private readonly MetadataService _metadataService;

        public GetSdkMessagesTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_sdk_messages", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Get SDK messages with optional Custom Action and Custom API messages. " +
            "Use entity_logical_name='none' (or empty) for global scope.")]
        public async Task<string> get_sdk_messages(
            [Description("Entity logical name. Use 'none' or empty for global scope.")] string entity_logical_name = "none",
            [Description("true: include Custom Action messages.")] bool include_custom_actions = true,
            [Description("true: include Custom API messages.")] bool include_custom_apis = true)
        {
            try
            {
                var payload = await MessageDiscoveryHelper.GetMessagePayloadAsync(
                    _metadataService,
                    entity_logical_name,
                    include_custom_actions,
                    include_custom_apis);

                return ToolResponseFormatter.Success(payload);
            }
            catch (Exception ex)
            {
                return ToolResponseFormatter.Error("Failed to load SDK messages", ex);
            }
        }
    }
}
