using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
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
    public class UpsertRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public UpsertRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "upsert_record", Title = "Create, update, or upsert a record",
            Destructive = true, ReadOnly = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "Create, update, or upsert a record in a Dataverse table using a single tool.\n\n" +

            "BEHAVIOR (depends on record_id):\n" +
            "- record_id is EMPTY or omitted → CREATE: a new record is created with an auto-generated ID\n" +
            "- record_id is provided → UPSERT: if a record with that ID exists, it is updated; " +
            "if it does not exist, a new record is created with that ID\n\n" +

            "This means:\n" +
            "- To CREATE a new record: omit record_id (or pass empty string)\n" +
            "- To UPDATE an existing record: pass its record_id (upsert will update it)\n" +
            "- To UPSERT (create-or-update): pass the record_id — the tool handles both cases\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): lowercase logical name of the table (e.g. 'account', 'contact')\n" +
            "- fields_json (required): JSON object with field logical names as keys and values matching Dataverse types\n" +
            "- record_id (optional): GUID of the record. Omit for create, provide for upsert/update\n\n" +

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

            "EXAMPLES:\n" +
            "Create: entity_name=\"account\", fields_json={\"name\": \"Contoso Ltd\", \"revenue\": 1000000}\n" +
            "Update: entity_name=\"account\", record_id=\"a1b2c3d4-...\", fields_json={\"name\": \"Contoso Updated\"}\n" +
            "Upsert: entity_name=\"account\", record_id=\"a1b2c3d4-...\", fields_json={\"name\": \"Contoso\", \"revenue\": 5000}\n\n" +

            "TIPS:\n" +
            "- Use get_metadata_entities to discover field names and types before writing\n" +
            "- Lookup fields need the GUID of the target record — use execute_fetchxml to find it\n" +
            "- Picklist fields need the integer option value — use get_metadata_entities to see available options\n" +
            "- For polymorphic lookups (customerid, ownerid), use the 'field@entity' key syntax\n" +
            "- Only include fields you want to set — partial update is supported when upserting existing records\n" +
            "- Set a field to null to clear its value\n" +
            "- Omit record_id to let Dataverse auto-generate a new GUID\n" +
            "- Useful for idempotent data migration, seeding reference data, or sync scenarios")]
        public CallToolResult upsert_record(
            [Description(
                "Logical name of the entity/table (lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name,
            [Description(
                "JSON object with field values. Keys are field logical names (lowercase). " +
                "For polymorphic lookups, use 'fieldname@targetentity' as key. " +
                "Example: {\"name\": \"Contoso\", \"revenue\": 5000, \"primarycontactid\": \"a1b2c3d4-...\"}"
            )] string fields_json,
            [Description(
                "GUID of the record. Optional. " +
                "If omitted or empty: creates a new record with an auto-generated ID (pure create). " +
                "If provided: upserts — creates the record if it doesn't exist, updates if it does. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'."
            )] string record_id = "")
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(fields_json))
                return ErrorResult("Error: fields_json is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();
            var fieldCount = CountFields(fields_json);

            // Mode: CREATE (no record_id)
            if (string.IsNullOrWhiteSpace(record_id))
            {
                try
                {
                    var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fields_json);
                    var newId = _serviceClient.Create(entity);

                    var structured = new CrudResult
                    {
                        Entity = entityName,
                        Id = newId.ToString(),
                        Status = "created",
                        FieldsUpdated = fieldCount
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = $"Created {entityName} {newId} ({fieldCount} fields)" }],
                        StructuredContent = JsonSerializer.SerializeToElement(structured)
                    };
                }
                catch (Exception ex)
                {
                    return ErrorResult($"Error: Create failed for {entityName}\nMessage: {ex.Message}\nHint: Use get_metadata_entities to verify field names and types.");
                }
            }

            // Mode: UPSERT (record_id provided)
            if (!Guid.TryParse(record_id.Trim(), out var id))
                return ErrorResult($"Error: '{record_id}' is not a valid GUID.");

            try
            {
                var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fields_json, id);
                var response = (UpsertResponse)_serviceClient.Execute(new UpsertRequest { Target = entity });
                var wasCreated = response.RecordCreated;
                var status = wasCreated ? "created" : "updated";
                var verb = wasCreated ? "Created (upsert)" : "Updated (upsert)";

                var structured = new CrudResult
                {
                    Entity = entityName,
                    Id = id.ToString(),
                    Status = status,
                    FieldsUpdated = fieldCount
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"{verb} {entityName} {id} ({fieldCount} fields)" }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Upsert failed for {entityName} {record_id}\nMessage: {ex.Message}\nHint: Use get_metadata_entities to verify field names and types.");
            }
        }

        private static int CountFields(string fieldsJson)
        {
            try
            {
                var doc = JsonDocument.Parse(fieldsJson);
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
