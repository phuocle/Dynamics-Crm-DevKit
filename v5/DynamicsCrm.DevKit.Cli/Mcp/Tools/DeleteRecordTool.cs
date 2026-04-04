using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class DeleteRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public DeleteRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "delete_record", Title = "Delete a record",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "Delete a record from a Dataverse table by its GUID.\n\n" +

            "WARNING: PERMANENT and cannot be undone. Verify the record with execute_fetchxml or get_record first.\n\n" +

            "TIPS:\n" +
            "- Some records may fail to delete due to dependencies (child records, required lookups)\n" +
            "- Deleting a parent record may cascade-delete child records depending on relationship config")]
        public CallToolResult delete_record(
            [Description(
                "Entity logical name (lowercase). Use get_metadata_entities to discover names."
            )] string entity_name,
            [Description(
                "GUID of the record to delete."
            )] string record_id)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(record_id))
                return ErrorResult("Error: record_id is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            if (!Guid.TryParse(record_id.Trim(), out var id))
                return ErrorResult($"Error: '{record_id}' is not a valid GUID.");

            try
            {
                _serviceClient.Delete(entityName, id);

                var structured = new CrudResult { Entity = entityName, Id = id.ToString(), Status = "deleted" };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"Deleted {entityName} {id}" }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Delete failed for {entityName} {record_id}\nMessage: {ex.Message}\nHint: Verify the record_id using execute_fetchxml or get_record.");
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
