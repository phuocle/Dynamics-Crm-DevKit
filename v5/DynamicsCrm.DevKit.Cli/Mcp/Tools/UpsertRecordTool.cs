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
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "Create, update, or upsert a record in a Dataverse table.\n\n" +

            "BEHAVIOR:\n" +
            "- record_id EMPTY → CREATE with auto-generated ID\n" +
            "- record_id PROVIDED → UPSERT (update if exists, create if not)\n\n" +

            "FIELD TYPES:\n" +
            "- String: \"hello\", Integer: 42, Decimal/Money: 99.50, Boolean: true/false\n" +
            "- DateTime: \"2025-01-15\" (ISO), Lookup: GUID string, Picklist: integer value\n" +
            "- Polymorphic Lookup: use \"fieldname@targetentity\" as key (e.g., \"customerid@account\")\n" +
            "- MultiSelect: [100000001, 100000002], null to clear a field\n\n" +

            "TIPS:\n" +
            "- Use get_metadata_entities for field names/types. Use execute_fetchxml to find lookup GUIDs\n" +
            "- Partial update supported — only include fields you want to set")]
        public CallToolResult upsert_record(
            [Description("Entity logical name (e.g., 'account')."
            )] string entity_name,
            [Description("JSON object with field values. Keys are lowercase logical names. Polymorphic: 'field@entity'."
            )] string fields_json,
            [Description("Record GUID. Empty = create. Provided = upsert (update or create)."
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
                var seen = new System.Collections.Generic.HashSet<string>(StringComparer.OrdinalIgnoreCase);
                foreach (var prop in doc.RootElement.EnumerateObject())
                    seen.Add(prop.Name);
                return seen.Count;
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
