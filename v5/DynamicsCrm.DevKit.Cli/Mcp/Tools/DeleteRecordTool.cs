using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    //[McpServerToolType] // Temporarily disabled - not exposed as MCP tool
    public class DeleteRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public DeleteRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "delete_record", Idempotent = true, Destructive = true, ReadOnly = false),
        Description(
            "Delete a record from Dataverse by entity logical name and record ID. " +
            "WARNING: This operation is permanent and cannot be undone. " +
            "Always confirm with the user before deleting. " +
            "Use get_record first to verify you are deleting the correct record.")]
        public string delete_record(
            [Description("Entity logical name (e.g. 'account', 'contact').")] string entity_name,
            [Description("The record ID (GUID) to delete.")] string record_id)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";
            if (string.IsNullOrWhiteSpace(record_id) || !Guid.TryParse(record_id, out var id))
                return "Error: record_id must be a valid GUID.";

            try
            {
                _serviceClient.Delete(entity_name.Trim().ToLowerInvariant(), id);

                return JsonSerializer.Serialize(new
                {
                    success = true,
                    entity = entity_name,
                    id = id.ToString(),
                    message = "Record deleted successfully."
                });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new
                {
                    success = false,
                    error = $"Failed to delete record: {ex.Message}"
                });
            }
        }
    }
}
