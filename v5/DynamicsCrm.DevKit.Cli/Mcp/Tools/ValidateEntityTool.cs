using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public static class ValidateEntityTool
    {
        [McpServerTool, Description(
            "Validates whether an entity (table) exists in the connected Dataverse environment. " +
            "Use this tool when a user wants to create a plugin and provides an entity name. " +
            "Returns the logical name and schema name if valid, or an error if the entity does not exist.")]
        public static async Task<string> validate_entity(
            MetadataService metadataService,
            [Description("The entity name to validate (case-insensitive, e.g. 'account', 'Account', 'contact')")] string entity_name)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
            {
                return JsonSerializer.Serialize(new
                {
                    valid = false,
                    error = "You must provide an entity name. What entity do you want to create a plugin for?"
                });
            }

            try
            {
                var logicalName = entity_name.Trim().ToLowerInvariant();
                var metadata = await metadataService.FetchEntityMetadataAsync(logicalName);

                if (metadata == null)
                {
                    return JsonSerializer.Serialize(new
                    {
                        valid = false,
                        error = $"Entity '{entity_name}' does not exist in this Dataverse environment. Please check the entity name and try again."
                    });
                }

                return JsonSerializer.Serialize(new
                {
                    valid = true,
                    logical_name = metadata.LogicalName,
                    schema_name = metadata.SchemaName,
                    display_name = metadata.DisplayName?.UserLocalizedLabel?.Label ?? metadata.SchemaName,
                    object_type_code = metadata.ObjectTypeCode
                });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new
                {
                    valid = false,
                    error = $"Entity '{entity_name}' does not exist or cannot be accessed. Error: {ex.Message}"
                });
            }
        }
    }
}
