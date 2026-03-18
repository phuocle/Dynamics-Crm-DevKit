using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpdateRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public UpdateRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "update_record", Destructive = false, ReadOnly = false),
        Description(
            "Update an existing record in a Dataverse table. Only the fields included in fields_json will be updated; " +
            "other fields remain unchanged (partial update).\n\n" +

            "PARAMETERS:\n" +
            "- entity_name: lowercase logical name of the table\n" +
            "- record_id: GUID of the record to update\n" +
            "- fields_json: JSON object with field logical names as keys — only include fields you want to change\n\n" +

            "FIELD VALUE TYPES (same as create_record):\n" +
            "- String/Memo: \"hello\"\n" +
            "- Integer: 42\n" +
            "- Decimal/Double/Money: 99.50\n" +
            "- Boolean: true or false\n" +
            "- DateTime: \"2025-01-15\" or \"2025-01-15T10:30:00\"\n" +
            "- Lookup: \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\" (GUID string)\n" +
            "- Polymorphic Lookup: use \"fieldname@targetentity\" as key\n" +
            "- Picklist/Choice: 100000001 (integer)\n" +
            "- Clear a field: null\n\n" +

            "EXAMPLE:\n" +
            "entity_name: \"account\"\n" +
            "record_id: \"a1b2c3d4-e5f6-7890-abcd-ef1234567890\"\n" +
            "fields_json: {\"name\": \"Contoso Updated\", \"revenue\": 2000000}\n\n" +

            "TIPS:\n" +
            "- Only include fields you want to change — partial update is supported\n" +
            "- Set a field to null to clear its value\n" +
            "- Use execute_fetchxml or get_record to find the record_id first\n" +
            "- Use get_entity_metadata to verify field names and types")]
        public string update_record(
            [Description(
                "Logical name of the entity/table (lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity'. " +
                "If unsure, call get_entities_metadata first."
            )] string entity_name,
            [Description(
                "GUID of the record to update. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use execute_fetchxml or get_record to find the correct ID."
            )] string record_id,
            [Description(
                "JSON object with fields to update. Only include fields you want to change. " +
                "For polymorphic lookups, use 'fieldname@targetentity' as key. " +
                "Example: {\"name\": \"New Name\", \"revenue\": null}"
            )] string fields_json)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            if (string.IsNullOrWhiteSpace(record_id))
                return "Error: record_id is required.";

            if (string.IsNullOrWhiteSpace(fields_json))
                return "Error: fields_json is required.";

            var entityName = entity_name.Trim().ToLowerInvariant();

            if (!Guid.TryParse(record_id.Trim(), out var id))
                return $"Error: '{record_id}' is not a valid GUID.";

            try
            {
                var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fields_json, id);
                _serviceClient.Update(entity);

                var sb = new StringBuilder(256);
                sb.AppendLine($"# Record Updated");
                sb.AppendLine();
                sb.AppendLine("| Property | Value |");
                sb.AppendLine("| --- | --- |");
                sb.AppendLine($"| Entity | {entityName} |");
                sb.AppendLine($"| Id | `{id}` |");
                sb.AppendLine($"| Fields Updated | {CountFields(fields_json)} |");
                sb.AppendLine($"| Status | Updated successfully |");
                return sb.ToString();
            }
            catch (Exception ex)
            {
                var sb = new StringBuilder(512);
                sb.AppendLine("# Error: Update Failed");
                sb.AppendLine();
                sb.AppendLine($"**Entity**: {entityName}");
                sb.AppendLine($"**Record ID**: `{record_id}`");
                sb.AppendLine();
                sb.AppendLine($"**Error**: {ex.Message}");
                sb.AppendLine();
                sb.AppendLine("**Hint**: Use get_entity_metadata to verify field names and types. " +
                    "Use execute_fetchxml or get_record to verify the record exists.");
                return sb.ToString();
            }
        }

        private static int CountFields(string fieldsJson)
        {
            try
            {
                var doc = System.Text.Json.JsonDocument.Parse(fieldsJson);
                var count = 0;
                foreach (var _ in doc.RootElement.EnumerateObject())
                    count++;
                return count;
            }
            catch
            {
                return 0;
            }
        }
    }
}
