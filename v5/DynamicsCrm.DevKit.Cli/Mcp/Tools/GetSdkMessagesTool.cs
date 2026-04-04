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

        [McpServerTool(Name = "get_sdk_messages", Title = "Discover Dataverse SDK messages & Custom Actions",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Discover SDK messages and Custom Actions available for a Dataverse entity.\n\n" +

            "SCOPING:\n" +
            "- Entity-bound: provide entity logical name to get messages for that entity\n" +
            "- Global: use 'none' or empty for unbound messages (WhoAmI, global Custom Actions)\n\n" +

            "WHEN TO USE:\n" +
            "- Discover which SDK messages are available for plugin registration\n" +
            "- Find Custom Actions registered for an entity\n\n" +

            "NOTE: For Custom API full detail (parameters, response properties), use get_custom_apis instead.")]
        public async Task<string> get_sdk_messages(
            [Description(
                "Entity logical name (lowercase). Use 'none' or empty for global messages. " +
                "Use get_metadata_entities to discover names."
            )] string entity_name = "none",
            [Description(
                "true: include Custom Action messages in the results. " +
                "false: exclude Custom Actions (only show SDK messages)."
            )] bool include_custom_actions = true)
        {
            try
            {
                return await MessageDiscoveryHelper.GetMessageMarkdownAsync(
                    _metadataService,
                    entity_name,
                    include_custom_actions);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to load messages for '{entity_name}': {ex.Message}";
            }
        }
    }
}
