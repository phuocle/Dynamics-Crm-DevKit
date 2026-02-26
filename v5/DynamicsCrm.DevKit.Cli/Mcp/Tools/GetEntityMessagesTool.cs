using DynamicsCrm.DevKit.Shared.Services;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public static class GetEntityMessagesTool
    {
        [McpServerTool, Description(
            "Retrieves all available SDK messages (operations) for a specific Dataverse entity. " +
            "Use this after validating the entity exists. Returns a list of messages like Create, Update, Delete, etc. " +
            "The user must choose one of these messages to create a plugin for.")]
        public static async Task<string> get_entity_messages(
            MetadataService metadataService,
            [Description("The logical name of the entity (e.g. 'account', 'contact'). Must be lowercase.")] string entity_logical_name)
        {
            if (string.IsNullOrWhiteSpace(entity_logical_name))
            {
                return JsonSerializer.Serialize(new
                {
                    success = false,
                    error = "Entity logical name is required."
                });
            }

            try
            {
                var messages = await metadataService.GetSdkMessagesAsync(entity_logical_name.Trim().ToLowerInvariant());

                if (messages == null || messages.Count == 0)
                {
                    return JsonSerializer.Serialize(new
                    {
                        success = true,
                        entity = entity_logical_name,
                        messages = Array.Empty<string>(),
                        message = $"No SDK messages found for entity '{entity_logical_name}'."
                    });
                }

                return JsonSerializer.Serialize(new
                {
                    success = true,
                    entity = entity_logical_name,
                    messages = messages.Select(m => m.Name).ToArray(),
                    count = messages.Count,
                    hint = "Ask the user which message they want to create a plugin for."
                });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new
                {
                    success = false,
                    error = $"Failed to retrieve messages for entity '{entity_logical_name}': {ex.Message}"
                });
            }
        }
    }
}
