using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text;

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

        [McpServerTool(Name = "delete_record", Destructive = true, ReadOnly = false),
        Description(
            "Delete a record from a Dataverse table by its GUID.\n\n" +

            "PARAMETERS:\n" +
            "- entity_name: lowercase logical name of the table\n" +
            "- record_id: GUID of the record to delete\n\n" +

            "EXAMPLE:\n" +
            "entity_name: \"account\"\n" +
            "record_id: \"a1b2c3d4-e5f6-7890-abcd-ef1234567890\"\n\n" +

            "WARNING: This operation is PERMANENT and cannot be undone. " +
            "Make sure you have the correct record_id before deleting.\n\n" +

            "TIPS:\n" +
            "- Use execute_fetchxml or get_record to verify the record exists and confirm it is the right one before deleting\n" +
            "- Some records may fail to delete due to dependencies (child records, required lookups, etc.)\n" +
            "- Deleting a parent record may cascade-delete child records depending on relationship configuration")]
        public string delete_record(
            [Description(
                "Logical name of the entity/table (lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity'. " +
                "If unsure, call get_entities_metadata first."
            )] string entity_name,
            [Description(
                "GUID of the record to delete. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use execute_fetchxml or get_record to find the correct ID."
            )] string record_id)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            if (string.IsNullOrWhiteSpace(record_id))
                return "Error: record_id is required.";

            var entityName = entity_name.Trim().ToLowerInvariant();

            if (!Guid.TryParse(record_id.Trim(), out var id))
                return $"Error: '{record_id}' is not a valid GUID.";

            try
            {
                _serviceClient.Delete(entityName, id);

                var sb = new StringBuilder(256);
                sb.AppendLine($"# Record Deleted");
                sb.AppendLine();
                sb.AppendLine("| Property | Value |");
                sb.AppendLine("| --- | --- |");
                sb.AppendLine($"| Entity | {entityName} |");
                sb.AppendLine($"| Id | `{id}` |");
                sb.AppendLine($"| Status | Deleted successfully |");
                return sb.ToString();
            }
            catch (Exception ex)
            {
                var sb = new StringBuilder(512);
                sb.AppendLine("# Error: Delete Failed");
                sb.AppendLine();
                sb.AppendLine($"**Entity**: {entityName}");
                sb.AppendLine($"**Record ID**: `{record_id}`");
                sb.AppendLine();
                sb.AppendLine($"**Error**: {ex.Message}");
                sb.AppendLine();
                sb.AppendLine("**Hint**: Verify the record_id is correct using execute_fetchxml or get_record. " +
                    "The record may have child records or dependencies preventing deletion.");
                return sb.ToString();
            }
        }
    }
}
