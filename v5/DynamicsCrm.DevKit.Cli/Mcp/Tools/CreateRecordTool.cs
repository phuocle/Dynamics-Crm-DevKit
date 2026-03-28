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
    public class CreateRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public CreateRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "create_record", Destructive = false, ReadOnly = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "Create a new record in a Dataverse table. Returns the new record's GUID on success.\n\n" +

            "PARAMETERS:\n" +
            "- entity_name: lowercase logical name of the table (e.g. 'account', 'contact', 'ab_pricelist')\n" +
            "- fields_json: JSON object with field logical names as keys and values matching Dataverse types\n\n" +

            "FIELD VALUE TYPES:\n" +
            "- String/Memo: \"hello\" (string)\n" +
            "- Integer: 42 (number, no decimal)\n" +
            "- Decimal/Double/Money: 99.50 (number with decimal)\n" +
            "- Boolean (Two Option): true or false\n" +
            "- DateTime: \"2025-01-15\" or \"2025-01-15T10:30:00\" (ISO string)\n" +
            "- Lookup: \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\" (GUID string of the referenced record)\n" +
            "- Polymorphic Lookup (Customer/Owner): use \"fieldname@targetentity\" as key, e.g. \"customerid@account\": \"guid\"\n" +
            "- Picklist/Choice: 100000001 (integer option value)\n" +
            "- MultiSelect Picklist: [100000001, 100000002] (array of integers)\n" +
            "- Set field to null: null\n\n" +

            "EXAMPLE:\n" +
            "entity_name: \"account\"\n" +
            "fields_json: {\"name\": \"Contoso Ltd\", \"revenue\": 1000000, \"primarycontactid\": \"a1b2c3d4-...\"}\n\n" +

            "TIPS:\n" +
            "- Use get_entity_metadata to discover field names and types before creating\n" +
            "- Lookup fields need the GUID of the target record — use execute_fetchxml to find it\n" +
            "- Picklist fields need the integer option value — use get_entity_metadata to see available options\n" +
            "- For polymorphic lookups (customerid, ownerid), use the 'field@entity' key syntax")]
        public CallToolResult create_record(
            [Description(
                "Logical name of the entity/table (lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_entities_metadata first."
            )] string entity_name,
            [Description(
                "JSON object with field values. Keys are field logical names (lowercase). " +
                "For polymorphic lookups, use 'fieldname@targetentity' as key. " +
                "Example: {\"name\": \"Contoso\", \"revenue\": 5000, \"primarycontactid\": \"a1b2c3d4-...\"}"
            )] string fields_json)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(fields_json))
                return ErrorResult("Error: fields_json is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            try
            {
                var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fields_json);
                var newId = _serviceClient.Create(entity);

                var structured = new CrudResult { Entity = entityName, Id = newId.ToString(), Status = "created" };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"Created {entityName} {newId}" }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Create failed for {entityName}\nMessage: {ex.Message}\nHint: Use get_entity_metadata to verify field names and types.");
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
