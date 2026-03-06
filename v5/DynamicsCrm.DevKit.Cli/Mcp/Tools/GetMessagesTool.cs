using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetMessagesTool
    {
        private readonly MetadataService _metadataService;

        public GetMessagesTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_messages", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Get SDK messages, Custom Actions, and Custom APIs for an entity. " +
            "Use entity_name='none' or leave empty for global (none-bound) messages.")]
        public async Task<string> get_messages(
            [Description("Entity logical name. Use 'none' or leave empty for global messages.")] string entity_name = "none",
            [Description("true: include Custom Action messages.")] bool include_custom_actions = true,
            [Description("true: include Custom API messages.")] bool include_custom_apis = true)
        {
            try
            {
                return await MessageDiscoveryHelper.GetMessageMarkdownAsync(
                    _metadataService,
                    entity_name,
                    include_custom_actions,
                    include_custom_apis);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to load messages for '{entity_name}': {ex.Message}";
            }
        }
    }
}
