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

            "READ OUTPUT: action='read' returns selected field values in structuredContent.fields and also in text content. Use execute_webapi only when raw OData JSON, annotations, headers, or entity-set URL behavior is specifically needed.\n\n" +

            "LOOKUP / POLYMORPHIC LOOKUP SYNTAX in fields_json:\n" +
            "- Regular lookup (single target): {\"fieldname\": \"guid\"} — target entity resolved from metadata automatically\n" +
            "- Polymorphic lookup (multiple targets, e.g. Customer, Owner, or any custom poly lookup): use 'fieldname@targetentity' key to specify which target entity the GUID belongs to\n" +
            "  Syntax: {\"fieldname@targetentity\": \"guid\"}\n" +
            "  Examples: {\"v5_billto@account\": \"<guid>\"}, {\"v5_billto@contact\": \"<guid>\"}, {\"ownerid@systemuser\": \"<guid>\"}, {\"v5_ref@devkit_custom1\": \"<guid>\"}\n" +
            "- Never use @odata.bind format — use the fieldname@targetentity syntax above\n\n" +

            "ACTIVITY PARTY FIELDS (to, from, cc, bcc, requiredattendees, optionalattendees, organizer, customers, resources):\n" +
            "These fields require a JSON array of party objects (or single object for one participant).\n" +
            "Format: [{\"id\":\"<guid>\",\"type\":\"<entity_logical_name>\"}]\n" +
            "Optional addressused: [{\"id\":\"<guid>\",\"type\":\"contact\",\"addressused\":\"alt@email.com\"}]\n" +
            "Examples:\n" +
            "  \"to\": [{\"id\":\"<guid>\",\"type\":\"contact\"},{\"id\":\"<guid>\",\"type\":\"account\"}]\n" +
            "  \"from\": {\"id\":\"<guid>\",\"type\":\"systemuser\"} (single object auto-wrapped to array)\n" +
            "Do NOT set participationtypemask — Dataverse sets it automatically from the field name.\n\n" +

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
                "JSON object of field values. Required: create/update. Polymorphic lookup: 'fieldname@targetentity' key. Activity party fields (to/from/cc/bcc/requiredattendees/optionalattendees): JSON array of {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Single party auto-wrapped: {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Optional: \"addressused\":\"email\". Regular lookup: {\"fieldname\": \"guid\"}."
            )] string fields_json = "",
            [Description(
                "Read only. Comma-separated columns. Empty = all."
            )] string columns = "",
            [Description(
                "Related Entity Name for associate/disassociate."
            )] string related_entity_name = "",
            [Description(
                "Related Record GUID for associate/disassociate."
            )] string related_record_id = "",
            [Description(
                "N:N Relationship Name for associate/disassociate."
            )] string relationship_name = "")
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.");

            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            var normalizedAction = action.Trim().ToLowerInvariant();
            if (normalizedAction is not ("create" or "read" or "update" or "delete" or "associate" or "disassociate"))
                return ErrorResult($"Error: Invalid action '{action}'. Valid values: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.");

            // Validate record_id early before entity resolution (which requires network)
            if (normalizedAction is "read" or "update" or "delete" or "associate" or "disassociate")
            {
                if (string.IsNullOrWhiteSpace(record_id))
                    return ErrorResult($"Error: record_id is required for '{normalizedAction}'.");
                if (!Guid.TryParse(record_id.Trim(), out _))
                    return ErrorResult($"Error: '{record_id}' is not a valid GUID.");
            }
            if (normalizedAction is "create" or "update")
            {
                if (string.IsNullOrWhiteSpace(fields_json))
                    return ErrorResult(
                        $"Error: fields_json is required for '{normalizedAction}'.\n" +
                        "Required: JSON object with field logical names as keys.\n" +
                        "Read docs://data_operations_guide for field type formats and polymorphic lookup syntax.");
            }
            if (normalizedAction is "associate" or "disassociate")
            {
                if (string.IsNullOrWhiteSpace(related_entity_name))
                    return ErrorResult($"Error: related_entity_name is required for '{normalizedAction}'.");
                if (string.IsNullOrWhiteSpace(related_record_id))
                    return ErrorResult($"Error: related_record_id is required for '{normalizedAction}'.");
                if (string.IsNullOrWhiteSpace(relationship_name))
                    return ErrorResult($"Error: relationship_name is required for '{normalizedAction}'.");
            }
            if (normalizedAction == "create" && !string.IsNullOrWhiteSpace(record_id))
                return ErrorResult("Error: record_id must be empty for 'create'. Use 'update' to modify an existing record.");

            string entityName;
            try
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "manage_record");
                if (!entityResult.IsSuccess)
                    return ErrorResult($"Error: {entityResult.Error}");
                entityName = entityResult.Value.LogicalName;
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to resolve entity '{entity_name}': {ex.Message}");
            }

            return normalizedAction switch
            {
                "create" => HandleCreate(entityName, fields_json, record_id),
                "read" => HandleRead(entityName, record_id, columns),
                "update" => HandleUpdate(entityName, record_id, fields_json),
                "delete" => HandleDelete(entityName, record_id),
                "associate" => HandleAssociate(entityName, record_id, related_entity_name, related_record_id, relationship_name),
                "disassociate" => HandleDisassociate(entityName, record_id, related_entity_name, related_record_id, relationship_name),
                _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.")
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
                    Status = "read",
                    Fields = FormatRecordFields(entity)
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
                _serviceClient.Update(entity);

                var structured = new CrudResult
                {
                    Action = "update",
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

        private CallToolResult HandleAssociate(string entityName, string recordId, string relatedEntityName, string relatedRecordId, string relationshipName)
        {
            if (!Guid.TryParse(recordId.Trim(), out var id1)) return ErrorResult($"Error: '{recordId}' is not a valid GUID.");
            if (!Guid.TryParse(relatedRecordId.Trim(), out var id2)) return ErrorResult($"Error: '{relatedRecordId}' is not a valid GUID.");

            var relatedEntityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, relatedEntityName.Trim(), "manage_record");
            if (!relatedEntityResult.IsSuccess) return ErrorResult($"Error: {relatedEntityResult.Error}");
            string resolvedRelatedEntity = relatedEntityResult.Value.LogicalName;

            if (_options.DryRun)
                return DryRunResult($"Would ASSOCIATE {entityName}({id1}) with {resolvedRelatedEntity}({id2}) via {relationshipName}");

            try
            {
                var relationship = new Relationship(relationshipName.Trim());
                var relatedEntities = new EntityReferenceCollection { new EntityReference(resolvedRelatedEntity, id2) };
                _serviceClient.Associate(entityName, id1, relationship, relatedEntities);

                var structured = new CrudResult { Action = "associate", Entity = entityName, Id = id1.ToString(), Status = "associated" };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"Associated {entityName} {id1} with {resolvedRelatedEntity} {id2}" }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Associate failed: {ex.Message}");
            }
        }

        private CallToolResult HandleDisassociate(string entityName, string recordId, string relatedEntityName, string relatedRecordId, string relationshipName)
        {
            if (!Guid.TryParse(recordId.Trim(), out var id1)) return ErrorResult($"Error: '{recordId}' is not a valid GUID.");
            if (!Guid.TryParse(relatedRecordId.Trim(), out var id2)) return ErrorResult($"Error: '{relatedRecordId}' is not a valid GUID.");

            var relatedEntityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, relatedEntityName.Trim(), "manage_record");
            if (!relatedEntityResult.IsSuccess) return ErrorResult($"Error: {relatedEntityResult.Error}");
            string resolvedRelatedEntity = relatedEntityResult.Value.LogicalName;

            if (_options.DryRun)
                return DryRunResult($"Would DISASSOCIATE {entityName}({id1}) from {resolvedRelatedEntity}({id2}) via {relationshipName}");

            try
            {
                var relationship = new Relationship(relationshipName.Trim());
                var relatedEntities = new EntityReferenceCollection { new EntityReference(resolvedRelatedEntity, id2) };
                _serviceClient.Disassociate(entityName, id1, relationship, relatedEntities);

                var structured = new CrudResult { Action = "disassociate", Entity = entityName, Id = id1.ToString(), Status = "disassociated" };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"Disassociated {entityName} {id1} from {resolvedRelatedEntity} {id2}" }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Disassociate failed: {ex.Message}");
            }
        }

        private static ColumnSet BuildColumnSet(string columns)
        {
            if (string.IsNullOrWhiteSpace(columns))
                return new ColumnSet(true);

            var cols = columns.Split(',')
                .Select(c => c.Trim().ToLowerInvariant())
                .Where(c => !string.IsNullOrEmpty(c))
                .ToArray();
            return cols.Length > 0 ? new ColumnSet(cols) : new ColumnSet(true);
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

            foreach (var field in FormatRecordFields(entity))
                sb.AppendLine($"{field.Key}: {field.Value}");

            return sb.ToString();
        }

        private static Dictionary<string, string> FormatRecordFields(Entity entity)
        {
            return entity.Attributes
                .OrderBy(a => a.Key)
                .ToDictionary(
                    attr => attr.Key,
                    attr => DataverseValueFormatter.FormatValue(entity, attr.Key));
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
