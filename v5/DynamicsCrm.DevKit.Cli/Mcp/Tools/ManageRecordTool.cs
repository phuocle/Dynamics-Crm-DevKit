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
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRecordTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ManageRecordTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_record", Title = "Manage a single record (CRUD)",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "CRUD single Dataverse record. Required: entity_name. create: +fields_json (returns GUID). read: +record_id, optional columns. update: +record_id+fields_json (partial supported). delete: +record_id (irreversible, may fail on FK or cascade-delete children). Use get_tables for field names; execute_fetchxml to find lookup GUIDs.\n\n" +

            "LOOKUP / POLYMORPHIC LOOKUP SYNTAX in fields_json:\n" +
            "- Regular lookup (single target): {\"fieldname\": \"guid\"} — target entity resolved from metadata automatically\n" +
            "- Polymorphic lookup (multiple targets, e.g. Customer, Owner, or any custom poly lookup): use 'fieldname@targetentity' key to specify which target entity the GUID belongs to\n" +
            "  Syntax: {\"fieldname@targetentity\": \"guid\"}\n" +
            "  Examples: {\"v5_billto@account\": \"<guid>\"}, {\"v5_billto@contact\": \"<guid>\"}, {\"ownerid@systemuser\": \"<guid>\"}, {\"v5_ref@devkit_custom1\": \"<guid>\"}\n" +
            "- Never use @odata.bind format — use the fieldname@targetentity syntax above\n\n" +

            "WHEN TO USE:\n" +
            "- Create / read / update / delete a single record by GUID\n" +
            "- Partial-update specific fields without rewriting whole record\n" +
            "- Verify a record before destructive changes\n" +
            "- Use create_records instead for bulk (multiple records)")]
        public CallToolResult manage_record(
            [Description(
                "'create', 'read', 'update', 'delete'."
            )] string action,
            [Description(
                "Entity logical name (e.g., 'account')."
            )] string entity_name,
            [Description(
                "GUID. Required: read/update/delete. Empty: create."
            )] string record_id = "",
            [Description(
                "JSON object of field values. Required: create/update. Polymorphic lookup (multiple targets): 'fieldname@targetentity' key to specify target. Examples: {\"v5_billto@account\": \"<guid>\"}, {\"ownerid@systemuser\": \"<guid>\"}, {\"v5_ref@devkit_custom1\": \"<guid>\"}. Regular lookup (single target): {\"fieldname\": \"guid\"}."
            )] string fields_json = "",
            [Description(
                "Read only. Comma-separated columns. Empty = all."
            )] string columns = "")
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'create', 'read', 'update', 'delete'.");

            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            var normalizedAction = action.Trim().ToLowerInvariant();
            var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "manage_record");
            if (!entityResult.IsSuccess)
                return ErrorResult($"Error: {entityResult.Error}");
            var entityName = entityResult.Value.LogicalName;

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
                return ErrorResult(
                    "Error: fields_json is required for 'create'.\n" +
                    "Required: JSON object with field logical names as keys.\n" +
                    "Read docs://data_operations_guide for field type formats and polymorphic lookup syntax.");

            var fieldCount = CountFields(fieldsJson);

            if (_options.DryRun)
                return DryRunResult($"Would CREATE a '{entityName}' record with {fieldCount} fields.");

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
                return ErrorResult($"Error: Create failed for {entityName}\nMessage: {ex.Message}\nHint: Use get_tables to verify field names and types.");
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
                var columnSet = BuildColumnSet(_serviceClient, entityName, columns);
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
                return ErrorResult($"Error: Failed to retrieve record: {ex.Message}\n" +
                    "Hint: Verify the record_id using execute_fetchxml or manage_record with action='read'.");
            }
        }

        private CallToolResult HandleUpdate(string entityName, string recordId, string fieldsJson)
        {
            if (string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id is required for 'update'.");

            if (string.IsNullOrWhiteSpace(fieldsJson))
                return ErrorResult(
                    "Error: fields_json is required for 'update'.\n" +
                    "Required: JSON object with field logical names as keys.\n" +
                    "Read docs://data_operations_guide for field type formats and polymorphic lookup syntax.");

            if (!Guid.TryParse(recordId.Trim(), out var id))
                return ErrorResult($"Error: '{recordId}' is not a valid GUID.");

            var fieldCount = CountFields(fieldsJson);

            if (_options.DryRun)
                return DryRunResult($"Would UPDATE '{entityName}' record {id} with {fieldCount} fields.");

            try
            {
                var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, fieldsJson, id);
                var response = (UpsertResponse)_serviceClient.Execute(new UpsertRequest { Target = entity });
                var wasCreated = response.RecordCreated;
                var status = wasCreated ? "created" : "updated";
                var verb = wasCreated ? "Created (upsert)" : "Updated";

                var structured = new CrudResult
                {
                    Action = wasCreated ? "upsert" : "update",
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
                return ErrorResult($"Error: Update failed for {entityName} {recordId}\nMessage: {ex.Message}\nHint: Use get_tables to verify field names and types.");
            }
        }

        private CallToolResult HandleDelete(string entityName, string recordId)
        {
            if (string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id is required for 'delete'.");

            if (!Guid.TryParse(recordId.Trim(), out var id))
                return ErrorResult($"Error: '{recordId}' is not a valid GUID.");

            if (_options.DryRun)
                return DryRunResult($"Would DELETE '{entityName}' record {id}.");

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

        private static ColumnSet BuildColumnSet(ServiceClient serviceClient, string entityName, string columns)
        {
            if (string.IsNullOrWhiteSpace(columns))
                return new ColumnSet(true);

            var cols = new List<string>();
            foreach (var column in columns.Split(',').Select(c => c.Trim()).Where(c => !string.IsNullOrEmpty(c)))
            {
                var resolved = DisplayNameFirstResolver.ResolveAttribute(serviceClient, entityName, column, "manage_record");
                if (!resolved.IsSuccess)
                    throw new ArgumentException($"Column '{column}': {resolved.Error}");
                cols.Add(resolved.Value.LogicalName);
            }

            return cols.Count > 0 ? new ColumnSet([.. cols]) : new ColumnSet(true);
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

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };
    }
}
