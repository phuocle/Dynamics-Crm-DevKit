using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

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

        [McpServerTool(Name = "update_record", Destructive = false, ReadOnly = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
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
        public CallToolResult update_record(
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
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(record_id))
                return ErrorResult("Error: record_id is required.");

            if (string.IsNullOrWhiteSpace(fields_json))
                return ErrorResult("Error: fields_json is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            if (!Guid.TryParse(record_id.Trim(), out var id))
                return ErrorResult($"Error: '{record_id}' is not a valid GUID.");

            try
            {
                var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fields_json, id);
                _serviceClient.Update(entity);

                var fieldCount = CountFields(fields_json);
                var structured = new CrudResult
                {
                    Entity = entityName,
                    Id = id.ToString(),
                    Status = "updated",
                    FieldsUpdated = fieldCount
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"Updated {entityName} {id} ({fieldCount} fields)" }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Update failed for {entityName} {record_id}\nMessage: {ex.Message}\nHint: Use execute_fetchxml or get_record to verify the record exists.");
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
