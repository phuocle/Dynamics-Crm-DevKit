using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRecordTool
    {
        private readonly ServiceClient _serviceClient;

        public ManageRecordTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "manage_record", Title = "Create, read, update, or delete a single record",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "Perform CRUD operations on a single Dataverse record.\n\n" +

            "FOUR ACTIONS:\n" +
            "- action='create': Create a new record. Requires entity_name + fields_json. Returns new GUID\n" +
            "- action='read': Retrieve a record by ID. Requires entity_name + record_id. Optional: columns\n" +
            "- action='update': Update an existing record. Requires entity_name + record_id + fields_json. Internally uses UpsertRequest for robustness\n" +
            "- action='delete': Permanently delete a record. Requires entity_name + record_id. WARNING: cannot be undone\n\n" +

            "FIELD TYPES (for create/update):\n" +
            "- String: \"hello\", Integer: 42, Decimal/Money: 99.50, Boolean: true/false\n" +
            "- DateTime: \"2025-01-15\" (ISO), Lookup: GUID string, Picklist: integer value\n" +
            "- Polymorphic Lookup: use \"fieldname@targetentity\" as key (e.g., \"customerid@account\")\n" +
            "- MultiSelect: [100000001, 100000002], null to clear a field\n\n" +

            "TIPS:\n" +
            "- Use get_metadata_entities for field names/types. Use execute_fetchxml to find lookup GUIDs\n" +
            "- Partial update supported — only include fields you want to set\n" +
            "- Some records may fail to delete due to dependencies (child records, required lookups)\n" +
            "- Deleting a parent record may cascade-delete child records depending on relationship config")]
        public CallToolResult manage_record(
            [Description(
                "The CRUD action to perform: 'create', 'read', 'update', or 'delete'."
            )] string action,
            [Description(
                "Entity logical name (e.g., 'account'). Required for all actions."
            )] string entity_name,
            [Description(
                "Record GUID. Required for read, update, and delete. Must be empty for create."
            )] string record_id = "",
            [Description(
                "JSON object with field values. Keys are lowercase logical names. Polymorphic: 'field@entity'. " +
                "Required for create and update. Ignored for read and delete."
            )] string fields_json = "",
            [Description(
                "Comma-separated column logical names for 'read' action only. Leave empty for all columns. " +
                "Use get_metadata_entities to discover column names."
            )] string columns = "")
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'create', 'read', 'update', 'delete'.");

            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            var normalizedAction = action.Trim().ToLowerInvariant();
            var entityName = entity_name.Trim().ToLowerInvariant();

            return normalizedAction switch
            {
                "create" => HandleCreate(entityName, fields_json, record_id),
                "read" => HandleRead(entityName, record_id, columns),
                "update" => HandleUpdate(entityName, record_id, fields_json),
                "delete" => HandleDelete(entityName, record_id),
                _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'create', 'read', 'update', 'delete'.")
            };
        }

        private CallToolResult HandleCreate(string entityName, string fieldsJson, string recordId)
        {
            if (!string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id must be empty for 'create'. Use 'update' to modify an existing record.");

            if (string.IsNullOrWhiteSpace(fieldsJson))
                return ErrorResult("Error: fields_json is required for 'create'.");

            var fieldCount = CountFields(fieldsJson);

            try
            {
                var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fieldsJson);
                var newId = _serviceClient.Create(entity);

                var structured = new CrudResult
                {
                    Action = "create",
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

        private CallToolResult HandleRead(string entityName, string recordId, string columns)
        {
            if (string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id is required for 'read'.");

            if (!Guid.TryParse(recordId.Trim(), out var id))
                return ErrorResult($"Error: '{recordId}' is not a valid GUID.");

            try
            {
                var columnSet = BuildColumnSet(columns);
                var entity = _serviceClient.Retrieve(entityName, id, columnSet);
                var text = FormatRecord(entity);

                var structured = new CrudResult
                {
                    Action = "read",
                    Entity = entityName,
                    Id = id.ToString(),
                    Status = "read"
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve record: {ex.Message}");
            }
        }

        private CallToolResult HandleUpdate(string entityName, string recordId, string fieldsJson)
        {
            if (string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id is required for 'update'.");

            if (string.IsNullOrWhiteSpace(fieldsJson))
                return ErrorResult("Error: fields_json is required for 'update'.");

            if (!Guid.TryParse(recordId.Trim(), out var id))
                return ErrorResult($"Error: '{recordId}' is not a valid GUID.");

            var fieldCount = CountFields(fieldsJson);

            try
            {
                var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fieldsJson, id);
                var response = (UpsertResponse)_serviceClient.Execute(new UpsertRequest { Target = entity });
                var wasCreated = response.RecordCreated;
                var status = wasCreated ? "created" : "updated";
                var verb = wasCreated ? "Created (upsert)" : "Updated";

                var structured = new CrudResult
                {
                    Action = "update",
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
                return ErrorResult($"Error: Update failed for {entityName} {recordId}\nMessage: {ex.Message}\nHint: Use get_metadata_entities to verify field names and types.");
            }
        }

        private CallToolResult HandleDelete(string entityName, string recordId)
        {
            if (string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id is required for 'delete'.");

            if (!Guid.TryParse(recordId.Trim(), out var id))
                return ErrorResult($"Error: '{recordId}' is not a valid GUID.");

            try
            {
                _serviceClient.Delete(entityName, id);

                var structured = new CrudResult { Action = "delete", Entity = entityName, Id = id.ToString(), Status = "deleted" };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"Deleted {entityName} {id}" }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Delete failed for {entityName} {recordId}\nMessage: {ex.Message}\nHint: Verify the record_id using execute_fetchxml or manage_record with action='read'.");
            }
        }

        private static ColumnSet BuildColumnSet(string columns)
        {
            if (string.IsNullOrWhiteSpace(columns))
                return new ColumnSet(true);

            var cols = columns
                .Split(',')
                .Select(c => c.Trim().ToLowerInvariant())
                .Where(c => !string.IsNullOrEmpty(c))
                .ToArray();

            return cols.Length > 0 ? new ColumnSet(cols) : new ColumnSet(true);
        }

        private static string FormatRecord(Entity entity)
        {
            var sb = new StringBuilder(entity.Attributes.Count * 60 + 128);

            sb.AppendLine($"[{entity.LogicalName}] {entity.Id}");
            sb.AppendLine();

            foreach (var attr in entity.Attributes.OrderBy(a => a.Key))
            {
                var value = DataverseValueFormatter.FormatValue(entity, attr.Key);
                sb.AppendLine($"{attr.Key}: {value}");
            }

            return sb.ToString();
        }

        private static int CountFields(string fieldsJson)
        {
            try
            {
                var doc = JsonDocument.Parse(fieldsJson);
                var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
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
