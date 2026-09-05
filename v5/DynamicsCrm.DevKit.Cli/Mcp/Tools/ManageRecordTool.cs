using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
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
    public class ManageRecordTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageRecordTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
        {
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_record", Title = "Manage a single record (CRUD)",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "CRUD a single Dataverse record. Actions: 'read' (read-only) | 'create', 'update', 'delete' (IRREVERSIBLE), 'associate', 'disassociate' (mutations). Record changes are live immediately — no publish needed.\n\n" +
            "WHEN TO USE:\n" +
            "- Create / read / update / delete a single record by GUID\n" +
            "- Partial-update specific fields without rewriting whole record\n" +
            "- Associate/disassociate two records via an N:N relationship\n" +
            "- Verify a record before destructive changes\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → entity/attribute names before building fields_json\n" +
            "- execute_fetchxml → find lookup GUIDs and record_id\n" +
            "- create_records → bulk create multiple records\n" +
            "- execute_webapi → raw OData JSON/annotations")]
        public CallToolResult manage_record(
            [Description("'create', 'read', 'update', 'delete', 'associate', 'disassociate'.")] string action = "",
            [Description("Entity logical name (e.g., 'account').")] string entity_name = "",
            [Description("GUID. Required: read/update/delete. Empty: create.")] string record_id = "",
            [Description("JSON object of field values. Required: create/update. Polymorphic lookup: 'fieldname@targetentity' key. Activity party fields (to/from/cc/bcc/requiredattendees/optionalattendees): JSON array of {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Single party auto-wrapped: {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Optional: \"addressused\":\"email\". Regular lookup: {\"fieldname\": \"guid\"}.")] string fields_json = "",
            [Description("Read only. Comma-separated columns. Empty = all.")] string columns = "",
            [Description("Related Entity Name for associate/disassociate.")] string related_entity_name = "",
            [Description("Related Record GUID for associate/disassociate.")] string related_record_id = "",
            [Description("N:N Relationship Name for associate/disassociate.")] string relationship_name = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required. Valid values: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.", "Provide one of: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.");

                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.", "Use get_tables to discover entity logical names.");

                var normalizedAction = action.Trim().ToLowerInvariant();
                if (normalizedAction is not ("create" or "read" or "update" or "delete" or "associate" or "disassociate"))
                    return Error($"Invalid action '{action}'. Valid values: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.", "Provide one of: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.");

                if (normalizedAction is "read" or "update" or "delete" or "associate" or "disassociate")
                {
                    if (string.IsNullOrWhiteSpace(record_id))
                        return Error($"record_id is required for '{normalizedAction}'.", $"Provide a GUID for the {normalizedAction} action.");
                    if (!Guid.TryParse(record_id.Trim(), out _))
                        return Error($"'{record_id}' is not a valid GUID.", "Provide a GUID in the format '00000000-0000-0000-0000-000000000000'.");
                }
                if (normalizedAction is "create" or "update")
                {
                    if (string.IsNullOrWhiteSpace(fields_json))
                        return Error(
                            $"fields_json is required for '{normalizedAction}'.",
                            "Provide a JSON object with field logical names as keys. Use get_tables for field names and types.");
                }
                if (normalizedAction is "associate" or "disassociate")
                {
                    if (string.IsNullOrWhiteSpace(related_entity_name))
                        return Error($"related_entity_name is required for '{normalizedAction}'.", "Provide the related entity logical name.");
                    if (string.IsNullOrWhiteSpace(related_record_id))
                        return Error($"related_record_id is required for '{normalizedAction}'.", "Provide a GUID for the related record.");
                    if (string.IsNullOrWhiteSpace(relationship_name))
                        return Error($"relationship_name is required for '{normalizedAction}'.", "Provide the N:N relationship schema name. Use get_tables(entity_name=..., detail_level='full') to list relationships.");
                }
                if (normalizedAction == "create" && !string.IsNullOrWhiteSpace(record_id))
                    return Error("record_id must be empty for 'create'. Use 'update' to modify an existing record.", "Omit record_id when creating a new record.");

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, entity_name.Trim(), "manage_record");
                if (!entityResult.IsSuccess)
                    return Error(entityResult.Error, "Use get_tables to discover valid entity logical/display names.");

                var entityName = entityResult.Value.LogicalName;

                return normalizedAction switch
                {
                    "create" => HandleCreate(entityName, fields_json),
                    "read" => HandleRead(entityName, record_id, columns),
                    "update" => HandleUpdate(entityName, record_id, fields_json),
                    "delete" => HandleDelete(entityName, record_id),
                    "associate" => HandleAssociate(entityName, record_id, related_entity_name, related_record_id, relationship_name),
                    "disassociate" => HandleDisassociate(entityName, record_id, related_entity_name, related_record_id, relationship_name),
                    _ => Error($"Invalid action '{action}'. Valid values: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.", "Provide one of: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'.")
                };
            }
            catch (AmbiguousFieldException ex)
            {
                return Error(ex.Message,
                    "Re-call with a more specific fields_json key value.",
                    new
                    {
                        attributeMatches = ex.Candidates.Select(c => new
                        {
                            displayName = c.DisplayName,
                            logicalName = c.LogicalName,
                            schemaName = c.SchemaName
                        }).ToList()
                    });
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleCreate(string entityName, string fieldsJson)
        {
            var fieldCount = CountFields(fieldsJson);

            if (_options.DryRun)
                return DryRun($"Would CREATE a '{entityName}' record with {fieldCount} field(s).", new CrudResult
                {
                    Action = "create",
                    Entity = entityName,
                    Status = "not_executed",
                    FieldsUpdated = fieldCount
                });

            var entity = EntityParserHelper.ParseFieldsToEntity(_orgService, entityName, fieldsJson);
            var newId = DataverseMutationExecutor.Create(_context, _orgService, entity);

            var structured = new CrudResult
            {
                Action = "create",
                Entity = entityName,
                Id = newId.ToString(),
                Status = "created",
                FieldsUpdated = fieldCount
            };
            return Success($"Created {entityName} {newId} ({fieldCount} field(s))", structured);
        }

        private CallToolResult HandleRead(string entityName, string recordId, string columns)
        {
            var id = Guid.Parse(recordId.Trim());

            var columnSet = BuildColumnSet(_orgService, entityName, columns);
            var entity = _orgService.Retrieve(entityName, id, columnSet);
            var text = FormatRecord(entity);

            var structured = new CrudResult
            {
                Action = "read",
                Entity = entityName,
                Id = id.ToString(),
                Status = "read",
                Fields = FormatRecordFields(entity)
            };
            return Success(text, structured);
        }

        private CallToolResult HandleUpdate(string entityName, string recordId, string fieldsJson)
        {
            var id = Guid.Parse(recordId.Trim());
            var fieldCount = CountFields(fieldsJson);

            if (_options.DryRun)
                return DryRun($"Would UPDATE '{entityName}' record {id} with {fieldCount} field(s).", new CrudResult
                {
                    Action = "update",
                    Entity = entityName,
                    Id = id.ToString(),
                    Status = "not_executed",
                    FieldsUpdated = fieldCount
                });

            var entity = EntityParserHelper.ParseFieldsToEntity(_orgService, entityName, fieldsJson, id);
            DataverseMutationExecutor.Update(_context, _orgService, entity);

            var structured = new CrudResult
            {
                Action = "update",
                Entity = entityName,
                Id = id.ToString(),
                Status = "updated",
                FieldsUpdated = fieldCount
            };
            return Success($"Updated {entityName} {id} ({fieldCount} field(s))", structured);
        }

        private CallToolResult HandleDelete(string entityName, string recordId)
        {
            var id = Guid.Parse(recordId.Trim());

            if (_options.DryRun)
                return DryRun($"Would DELETE '{entityName}' record {id}.", new CrudResult
                {
                    Action = "delete",
                    Entity = entityName,
                    Id = id.ToString(),
                    Status = "not_executed"
                });

            DataverseMutationExecutor.Delete(_context, _orgService, entityName, id);

            var structured = new CrudResult { Action = "delete", Entity = entityName, Id = id.ToString(), Status = "deleted" };
            return Success($"Deleted {entityName} {id}", structured);
        }

        private CallToolResult HandleAssociate(string entityName, string recordId, string relatedEntityName, string relatedRecordId, string relationshipName)
        {
            var id1 = Guid.Parse(recordId.Trim());
            var id2 = Guid.Parse(relatedRecordId.Trim());

            var relatedEntityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, relatedEntityName.Trim(), "manage_record");
            if (!relatedEntityResult.IsSuccess)
                return Error(relatedEntityResult.Error, "Use get_tables to discover valid related entity names.");
            var resolvedRelatedEntity = relatedEntityResult.Value.LogicalName;

            if (_options.DryRun)
                return DryRun($"Would ASSOCIATE {entityName}({id1}) with {resolvedRelatedEntity}({id2}) via {relationshipName}.", new CrudResult
                {
                    Action = "associate",
                    Entity = entityName,
                    Id = id1.ToString(),
                    Status = "not_executed"
                });

            var relationship = new Relationship(relationshipName.Trim());
            var relatedEntities = new EntityReferenceCollection { new EntityReference(resolvedRelatedEntity, id2) };
            DataverseMutationExecutor.Associate(_context, _orgService, entityName, id1, relationship, relatedEntities);

            var structured = new CrudResult { Action = "associate", Entity = entityName, Id = id1.ToString(), Status = "associated" };
            return Success($"Associated {entityName} {id1} with {resolvedRelatedEntity} {id2}", structured);
        }

        private CallToolResult HandleDisassociate(string entityName, string recordId, string relatedEntityName, string relatedRecordId, string relationshipName)
        {
            var id1 = Guid.Parse(recordId.Trim());
            var id2 = Guid.Parse(relatedRecordId.Trim());

            var relatedEntityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, relatedEntityName.Trim(), "manage_record");
            if (!relatedEntityResult.IsSuccess)
                return Error(relatedEntityResult.Error, "Use get_tables to discover valid related entity names.");
            var resolvedRelatedEntity = relatedEntityResult.Value.LogicalName;

            if (_options.DryRun)
                return DryRun($"Would DISASSOCIATE {entityName}({id1}) from {resolvedRelatedEntity}({id2}) via {relationshipName}.", new CrudResult
                {
                    Action = "disassociate",
                    Entity = entityName,
                    Id = id1.ToString(),
                    Status = "not_executed"
                });

            var relationship = new Relationship(relationshipName.Trim());
            var relatedEntities = new EntityReferenceCollection { new EntityReference(resolvedRelatedEntity, id2) };
            DataverseMutationExecutor.Disassociate(_context, _orgService, entityName, id1, relationship, relatedEntities);

            var structured = new CrudResult { Action = "disassociate", Entity = entityName, Id = id1.ToString(), Status = "disassociated" };
            return Success($"Disassociated {entityName} {id1} from {resolvedRelatedEntity} {id2}", structured);
        }

        private static ColumnSet BuildColumnSet(IOrganizationService orgService, string entityName, string columns)
        {
            if (string.IsNullOrWhiteSpace(columns))
                return new ColumnSet(true);

            var cols = new List<string>();
            foreach (var column in columns.Split(',').Select(c => c.Trim()).Where(c => !string.IsNullOrEmpty(c)))
            {
                var resolved = DisplayNameFirstResolver.ResolveAttribute(orgService, entityName, column, "manage_record");
                if (!resolved.IsSuccess)
                    throw new ArgumentException($"Column '{column}': {resolved.Error}", "columns");
                cols.Add(resolved.Value.LogicalName);
            }

            return cols.Count > 0 ? new ColumnSet([.. cols]) : new ColumnSet(true);
        }

        private static string FormatRecord(Entity entity)
        {
            var sb = new StringBuilder(entity.Attributes.Count * 60 + 128);

            sb.AppendLine(entity.Id.ToString());
            sb.AppendLine();

            foreach (var field in FormatRecordFields(entity))
            {
                if (entity.Attributes.TryGetValue(field.Key, out var raw) && raw is Guid rawGuid && rawGuid == entity.Id)
                    continue;
                sb.AppendLine($"{field.Key}: {field.Value}");
            }

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
            var doc = JsonDocument.Parse(fieldsJson);
            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var prop in doc.RootElement.EnumerateObject())
                seen.Add(prop.Name);
            return seen.Count;
        }
    }
}
