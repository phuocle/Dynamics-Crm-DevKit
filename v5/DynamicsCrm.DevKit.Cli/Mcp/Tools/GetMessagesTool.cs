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

        [McpServerTool(Name = "get_messages", Title = "Discover Dataverse SDK messages & APIs",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Discover SDK messages, Custom Actions, and Custom APIs available for a Dataverse entity. " +
            "Returns a markdown report with counts and categorized message lists.\n\n" +

            "RETURNS:\n" +
            "- Summary table: category (SDK Messages, Custom Actions, Custom APIs) with counts\n" +
            "- SDK Messages list: standard platform messages (Create, Update, Delete, Retrieve, RetrieveMultiple, " +
            "Associate, Disassociate, SetState, Assign, GrantAccess, etc.)\n" +
            "- Custom Actions list: organization-defined actions registered for this entity\n" +
            "- Custom APIs list: custom API messages registered for this entity\n\n" +

            "WHEN TO USE:\n" +
            "- When building plugins and you need to know which messages are available for an entity\n" +
            "- When you need to discover Custom Actions or Custom APIs in the environment\n" +
            "- When registering plugin steps and need to verify message availability\n" +
            "- When exploring what operations can be performed on a specific entity\n\n" +

            "SCOPING:\n" +
            "- Entity-bound: provide the entity logical name (e.g. 'account', 'contact') to get messages specific to that entity\n" +
            "- Global (none-bound): use 'none' or leave empty to get messages not bound to any entity " +
            "(e.g. WhoAmI, RetrieveCurrentOrganization, global Custom Actions)")]
        public async Task<string> get_messages(
            [Description(
                "Entity logical name to get messages for (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "Use 'none' or leave empty for global (none-bound) messages like WhoAmI. " +
                "If unsure of the entity name, call get_entities_metadata first."
            )] string entity_name = "none",
            [Description(
                "true: include Custom Action messages in the results. " +
                "false: exclude Custom Actions (only show SDK messages and Custom APIs)."
            )] bool include_custom_actions = true,
            [Description(
                "true: include Custom API messages in the results. " +
                "false: exclude Custom APIs (only show SDK messages and Custom Actions)."
            )] bool include_custom_apis = true)
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
