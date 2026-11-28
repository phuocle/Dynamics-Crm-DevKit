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
    public class ManageRecordTool : McpToolBase
    {
        private const string SupportedActions = "'create', 'read', 'update', 'delete', 'associate', 'disassociate', 'add_to_solution', 'remove_from_solution', 'list_solutions', 'add_solution_component'";

        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;

        public ManageRecordTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context) : this(orgService, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageRecordTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_record", Title = "Manage a single record (CRUD)",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(CrudResult)),
        Description(
            "Manage a single Dataverse record. Read-only actions are read and list_solutions. Mutations are create, update, delete (irreversible), associate, disassociate, add_to_solution, remove_from_solution, and add_solution_component. Record changes are live immediately.\n\n" +
            "For create, use solution_name to include a supported solution component, such as a connection reference, workflow (cloud flow), or security role, in an unmanaged solution.\n\n" +
            "Use add_to_solution or remove_from_solution with entity_name, record_id, and solution_name to change unmanaged solution membership for an existing connectionreference, workflow, or role. Both preserve the record.\n\n" +
            "Use list_solutions with entity_name and record_id to list managed and unmanaged solutions containing a connectionreference, workflow, or role.\n\n" +
            "Use add_solution_component with record_id (the component GUID or metadata ID), component_type (a name or integer ID), and solution_name to attach an existing unmanaged component to a custom unmanaged solution. Automatic inclusion of required components and subcomponents is disabled.\n\n" +
            "WHEN TO USE:\n" +
            "- Create / read / update / delete a single record by GUID\n" +
            "- Partial-update specific fields without rewriting whole record\n" +
            "- Associate/disassociate two records via an N:N relationship\n" +
            "- Verify a record before destructive changes\n\n" +
            "For field value formats, lookup targets and delete considerations, read docs://data_operations_guide before constructing fields_json.\n\n" +
            "RELATED TOOLS:\n" +
            "- inspect_metadata(resource='tables') → entity/attribute names before building fields_json\n" +
            "- query_data(mode='fetchxml') → find lookup GUIDs and record_id\n" +
            "- manage_data(resource='bulk') → bulk create or update multiple records\n" +
            "- execute_webapi → raw OData JSON/annotations")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            [Description(SupportedActions + ".")] string action = "",
            [Description("Entity logical name (e.g., 'account'). Omit for add_solution_component.")] string entity_name = "",
            [Description("GUID of the primary record. Required for all actions except create, where it must be empty.")] string record_id = "",
            [Description("JSON object of field values. Required: create/update. Polymorphic lookup: 'fieldname@targetentity' key. Activity party fields (to/from/cc/bcc/requiredattendees/optionalattendees): JSON array of {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Single party auto-wrapped: {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Optional: \"addressused\":\"email\". Regular lookup: {\"fieldname\": \"guid\"}.")] string fields_json = "",
            [Description("Read only. Comma-separated columns. Empty = all.")] string columns = "",
            [Description("Related Entity Name for associate/disassociate.")] string related_entity_name = "",
            [Description("Related Record GUID for associate/disassociate.")] string related_record_id = "",
            [Description("N:N Relationship Name for associate/disassociate.")] string relationship_name = "",
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default,
            [Description("Unmanaged solution display or unique name. Required for add_to_solution, remove_from_solution, and add_solution_component. Optional when creating a supported component record.")] string solution_name = null,
            [Description("Required for add_solution_component only. Component type name (e.g., 'workflow', 'connectionreference', or 'role') or integer ID as returned by inspect_metadata(resource='solution_components').")] JsonElement? component_type = null)
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ManageRecordTool(conn.OrgService, conn.Options, conn.Context);
                return System.Threading.Tasks.Task.FromResult(worker.manage_record(action, entity_name, record_id, fields_json, columns, related_entity_name, related_record_id, relationship_name, solution_name, component_type));
            }, cancellationToken);
        }

        public CallToolResult manage_record(
            [Description(SupportedActions + ".")] string action = "",
            [Description("Entity logical name (e.g., 'account'). Omit for add_solution_component.")] string entity_name = "",
            [Description("GUID of the primary record. Required for all actions except create, where it must be empty.")] string record_id = "",
            [Description("JSON object of field values. Required: create/update. Polymorphic lookup: 'fieldname@targetentity' key. Activity party fields (to/from/cc/bcc/requiredattendees/optionalattendees): JSON array of {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Single party auto-wrapped: {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Optional: \"addressused\":\"email\". Regular lookup: {\"fieldname\": \"guid\"}.")] string fields_json = "",
            [Description("Read only. Comma-separated columns. Empty = all.")] string columns = "",
            [Description("Related Entity Name for associate/disassociate.")] string related_entity_name = "",
            [Description("Related Record GUID for associate/disassociate.")] string related_record_id = "",
            [Description("N:N Relationship Name for associate/disassociate.")] string relationship_name = "",
            string solution_name = null,
            JsonElement? component_type = null)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error($"action is required. Valid values: {SupportedActions}.", $"Provide one of: {SupportedActions}.");

                var normalizedAction = action.Trim().ToLowerInvariant();
                if (normalizedAction == "add_solution_component")
                    return HandleAddSolutionComponent(record_id, solution_name, component_type);

                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.", "Use inspect_metadata(resource='tables') to discover entity logical names.");

                var changesSolutionMembership = normalizedAction is "add_to_solution" or "remove_from_solution";
                if (!changesSolutionMembership && normalizedAction is not ("create" or "read" or "update" or "delete" or "associate" or "disassociate" or "list_solutions"))
                    return Error($"Invalid action '{action}'. Valid values: {SupportedActions}.", $"Provide one of: {SupportedActions}.");

                if (!changesSolutionMembership && normalizedAction != "create" && !string.IsNullOrWhiteSpace(solution_name))
                    return Error("solution_name is supported for 'create', 'add_to_solution', 'remove_from_solution', and 'add_solution_component' only.",
                        "Use 'add_to_solution' or 'remove_from_solution' to change solution membership for an existing record.");

                if (changesSolutionMembership && string.IsNullOrWhiteSpace(solution_name))
                    return Error($"solution_name is required for '{normalizedAction}'.", "Provide the display or unique name of an unmanaged solution.");

                if (normalizedAction != "create")
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
                            "Provide a JSON object with field logical names as keys. Use inspect_metadata(resource='tables') for field names and types.");
                }
                if (normalizedAction is "associate" or "disassociate")
                {
                    if (string.IsNullOrWhiteSpace(related_entity_name))
                        return Error($"related_entity_name is required for '{normalizedAction}'.", "Provide the related entity logical name.");
                    if (string.IsNullOrWhiteSpace(related_record_id))
                        return Error($"related_record_id is required for '{normalizedAction}'.", "Provide a GUID for the related record.");
                    if (string.IsNullOrWhiteSpace(relationship_name))
                        return Error($"relationship_name is required for '{normalizedAction}'.", "Provide the N:N relationship schema name. Use inspect_metadata(resource='tables', name=..., detail_level='full') to list relationships.");
                }
                if (normalizedAction == "create" && !string.IsNullOrWhiteSpace(record_id))
                    return Error("record_id must be empty for 'create'. Use 'update' to modify an existing record.", "Omit record_id when creating a new record.");

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, entity_name.Trim(), "manage_data(resource='record')");
                if (!entityResult.IsSuccess)
                    return Error(entityResult.Error, "Use inspect_metadata(resource='tables') to discover valid entity logical/display names.");

                var entityName = entityResult.Value.LogicalName;

                return normalizedAction switch
                {
                    "create" => HandleCreate(entityName, fields_json, solution_name),
                    "read" => HandleRead(entityName, record_id, columns),
                    "update" => HandleUpdate(entityName, record_id, fields_json),
                    "delete" => HandleDelete(entityName, record_id),
                    "associate" => HandleAssociate(entityName, record_id, related_entity_name, related_record_id, relationship_name),
                    "disassociate" => HandleDisassociate(entityName, record_id, related_entity_name, related_record_id, relationship_name),
                    "add_to_solution" or "remove_from_solution" or "list_solutions" => HandleSolutionMembership(normalizedAction, entityName, Guid.Parse(record_id.Trim()), solution_name),
                    _ => Error($"Invalid action '{action}'. Valid values: {SupportedActions}.", $"Provide one of: {SupportedActions}.")
                };
            }
            catch (InvalidFieldKeyException ex)
            {
                return Error(ex.Message, ex.Hint);
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

        private CallToolResult HandleCreate(string entityName, string fieldsJson, string solutionName)
        {
            var fieldCount = CountFields(fieldsJson);
            string solutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solution = SolutionResolverHelper.Resolve(_orgService, solutionName, requireUnmanaged: true);
                if (!solution.IsSuccess)
                    return Error(solution.Error, "Use inspect_metadata(resource='solution_components') to find an unmanaged solution.");

                solutionUniqueName = solution.UniqueName;
            }

            var solutionText = solutionUniqueName == null ? "" : $" in solution '{solutionUniqueName}'";

            if (_options.DryRun)
                return DryRun($"Would CREATE a '{entityName}' record with {fieldCount} field(s){solutionText}.", new CrudResult
                {
                    Action = "create",
                    Entity = entityName,
                    Status = "not_executed",
                    FieldsUpdated = fieldCount
                });

            var entity = EntityParserHelper.ParseFieldsToEntity(_orgService, entityName, fieldsJson);
            Guid newId;
            if (solutionUniqueName == null)
            {
                newId = DataverseMutationExecutor.Create(_context, _orgService, entity);
            }
            else
            {
                var request = new CreateRequest { Target = entity };
                SolutionComponentCreateHelper.ApplySolutionUniqueName(request, solutionUniqueName);
                newId = ((CreateResponse)DataverseMutationExecutor.Execute(_context, _orgService, request)).id;
            }


            var structured = new CrudResult
            {
                Action = "create",
                Entity = entityName,
                Id = newId.ToString(),
                Status = "created",
                FieldsUpdated = fieldCount
            };
            return Success($"Created {entityName} {newId} ({fieldCount} field(s)){solutionText}", structured);
        }

        private CallToolResult HandleAddSolutionComponent(string recordId, string solutionName, JsonElement? typeInput)
        {
            if (!Guid.TryParse(recordId, out var componentId) || componentId == Guid.Empty)
                return Error("record_id must be a non-empty GUID for 'add_solution_component'.",
                    "Pass the component's objectId from inspect_metadata(resource='solution_components') or its Dataverse record GUID.");
            if (string.IsNullOrWhiteSpace(solutionName))
                return Error("solution_name is required for 'add_solution_component'.", "Pass the display or unique name of a custom unmanaged solution.");

            var typeText = typeInput switch
            {
                { ValueKind: JsonValueKind.String } value => value.GetString()?.Trim(),
                { ValueKind: JsonValueKind.Number } value when value.TryGetInt32(out _) => value.GetRawText(),
                _ => null
            };
            if (string.IsNullOrWhiteSpace(typeText))
                return Error("component_type must be a name or integer for 'add_solution_component'.",
                    "Use a name such as 'workflow' or pass the typeId returned by inspect_metadata(resource='solution_components').");

            var solution = SolutionResolverHelper.Resolve(_orgService, solutionName, requireUnmanaged: true, rejectSystemSolutions: true);
            if (!solution.IsSuccess)
                return Error(solution.Error, "Pass the unique name of a custom unmanaged solution.");

            var (componentType, primaryEntityName) = SolutionComponentDefinitions.ResolveType(_orgService, typeText);
            if (componentType == 0)
                return Error($"Component type '{typeText}' is unknown or ambiguous in this environment.",
                    "Use the component's typeId from inspect_metadata(resource='solution_components') in the current environment.");

            var source = FindComponentSource(componentId, componentType, primaryEntityName);
            if (source == null)
                return Error($"Component '{componentId}' of type {componentType} was not found.",
                    "Check both record_id and component_type in the current environment.");
            if (!source.Attributes.TryGetValue("ismanaged", out var managedValue) || managedValue is not bool isManaged || isManaged)
                return Error($"Component '{componentId}' of type {componentType} is managed or could not be verified as unmanaged.",
                    "Pass the GUID of an existing unmanaged component.");

            var target = $"component {componentId} (type {componentType}) to solution '{solution.UniqueName}'";
            var structured = new CrudResult
            {
                Action = "add_solution_component",
                Entity = primaryEntityName,
                Id = componentId.ToString(),
                ComponentType = componentType,
                SolutionName = solution.UniqueName
            };
            if (_options.DryRun)
            {
                structured.Status = "not_executed";
                return DryRun($"Would add {target}.", structured);
            }

            var association = SolutionComponentCreateHelper.AddExistingComponent(_context, _orgService, componentId,
                componentType, solution.UniqueName, addRequiredComponents: false, doNotIncludeSubcomponents: true);
            if (!association.IsAddToSolution)
                return Error($"Failed to add {target}: {association.AddToSolutionWarning}",
                    "Verify that the component is supported and that you have permission to customize the target solution.");

            structured.Status = "added_to_solution";
            return Success($"Added {target}.", structured);
        }

        private Entity FindComponentSource(Guid componentId, int componentType, string primaryEntityName)
        {
            QueryExpression query;
            if (primaryEntityName is "workflow" or "role" or "connectionreference")
            {
                query = new QueryExpression(primaryEntityName);
                query.Criteria.AddCondition(primaryEntityName + "id", ConditionOperator.Equal, componentId);
            }
            else
            {
                // For metadata and other component types, check existing solution memberships.
                // Prefer a managed membership so a Default solution row cannot mask it.
                query = CreateSolutionMembershipQuery(componentId, componentType);
                query.AddOrder("ismanaged", OrderType.Descending);
            }
            query.ColumnSet = new ColumnSet("ismanaged");
            query.TopCount = 1;
            return _orgService.RetrieveMultiple(query).Entities.FirstOrDefault();
        }

        private CallToolResult HandleSolutionMembership(string action, string entityName, Guid recordId, string solutionName)
        {
            if (entityName is not ("connectionreference" or "workflow" or "role"))
                return Error($"'{entityName}' is not supported for '{action}'.", "Use connectionreference, workflow, or role.");
            if (recordId == Guid.Empty)
                return Error($"record_id must be a non-empty GUID for '{action}'.");

            var listing = action == "list_solutions";
            SolutionResolveResult solution = null;
            if (!listing)
            {
                solution = SolutionResolverHelper.Resolve(_orgService, solutionName, requireUnmanaged: true);
                if (!solution.IsSuccess)
                    return Error(solution.Error, "Use inspect_metadata(resource='solution_components') to find an unmanaged solution.");
            }

            var componentType = entityName switch
            {
                "workflow" => 29,
                "role" => 20,
                _ => 0
            };
            if (entityName == "connectionreference")
            {
                var matches = SolutionComponentDefinitions.Get(_orgService)
                    .Where(pair => pair.Value.PrimaryEntityName == entityName)
                    .Select(pair => pair.Key)
                    .Take(2)
                    .ToArray();
                if (matches.Length != 1)
                    return Error($"Could not resolve a unique solution component type for '{entityName}' in this environment.");

                componentType = matches[0];
            }

            // Retrieve by table and ID without reading field values. Dry runs validate the same target.
            if (_orgService.Retrieve(entityName, recordId, new ColumnSet()) == null)
                return Error($"No '{entityName}' record found with ID '{recordId}'.");

            if (listing)
                return ListContainingSolutions(entityName, recordId, componentType);

            var removing = action == "remove_from_solution";
            var direction = removing ? "from" : "to";
            var target = $"'{entityName}' record {recordId} (component type {componentType}) {direction} solution '{solution.UniqueName}'";
            var structured = new CrudResult
            {
                Action = action,
                Entity = entityName,
                Id = recordId.ToString()
            };
            if (_options.DryRun)
            {
                var verb = removing ? "remove" : "add";
                structured.Status = "not_executed";
                return DryRun($"Would {verb} {target}.", structured);
            }

            if (removing)
            {
                SolutionComponentCreateHelper.RemoveExistingComponent(_context, _orgService, recordId, componentType, solution.UniqueName);
                structured.Status = "removed_from_solution";
                return Success($"Removed {target}.", structured);
            }

            var association = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _orgService, recordId, componentType, solution.UniqueName, addRequiredComponents: false);
            if (!association.IsAddToSolution)
                return Error($"Failed to add {target}: {association.AddToSolutionWarning}");

            structured.Status = "added_to_solution";
            return Success($"Added {target}.", structured);
        }

        private CallToolResult ListContainingSolutions(string entityName, Guid recordId, int componentType)
        {
            var query = CreateSolutionMembershipQuery(recordId, componentType);
            query.ColumnSet = new ColumnSet("solutionid", "uniquename", "friendlyname", "version", "ismanaged");
            query.PageInfo = new PagingInfo { Count = 5000, PageNumber = 1 };
            query.AddOrder("uniquename", OrderType.Ascending);
            var publisher = query.AddLink("publisher", "publisherid", "publisherid", JoinOperator.LeftOuter);
            publisher.EntityAlias = "pub";
            publisher.Columns = new ColumnSet("friendlyname");

            var solutions = new List<SolutionInfoEntry>();
            while (true)
            {
                var page = _orgService.RetrieveMultiple(query);
                foreach (var row in page.Entities)
                {
                    solutions.Add(new SolutionInfoEntry
                    {
                        SolutionId = row.Id.ToString(),
                        UniqueName = row.GetAttributeValue<string>("uniquename") ?? "",
                        DisplayName = row.GetAttributeValue<string>("friendlyname") ?? "",
                        Version = row.GetAttributeValue<string>("version") ?? "",
                        IsManaged = row.GetAttributeValue<bool>("ismanaged"),
                        PublisherName = row.GetAttributeValue<AliasedValue>("pub.friendlyname")?.Value as string ?? ""
                    });
                }

                if (!page.MoreRecords)
                    break;
                query.PageInfo.PageNumber++;
                query.PageInfo.PagingCookie = page.PagingCookie;
            }

            return Success($"Found {solutions.Count} solution(s) containing '{entityName}' record {recordId}.", new CrudResult
            {
                Action = "list_solutions",
                Entity = entityName,
                Id = recordId.ToString(),
                Status = "listed",
                Solutions = solutions
            });
        }

        private static QueryExpression CreateSolutionMembershipQuery(Guid componentId, int componentType)
        {
            var query = new QueryExpression("solution");
            var membership = query.AddLink("solutioncomponent", "solutionid", "solutionid", JoinOperator.Exists);
            membership.LinkCriteria.AddCondition("objectid", ConditionOperator.Equal, componentId);
            membership.LinkCriteria.AddCondition("componenttype", ConditionOperator.Equal, componentType);
            return query;
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

            var relatedEntityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, relatedEntityName.Trim(), "manage_data(resource='record')");
            if (!relatedEntityResult.IsSuccess)
                return Error(relatedEntityResult.Error, "Use inspect_metadata(resource='tables') to discover valid related entity names.");
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

            var relatedEntityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, relatedEntityName.Trim(), "manage_data(resource='record')");
            if (!relatedEntityResult.IsSuccess)
                return Error(relatedEntityResult.Error, "Use inspect_metadata(resource='tables') to discover valid related entity names.");
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
                var resolved = DisplayNameFirstResolver.ResolveAttribute(orgService, entityName, column, "manage_data(resource='record')");
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
            using var doc = JsonDocument.Parse(fieldsJson);
            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var prop in doc.RootElement.EnumerateObject())
            {
                // Dry runs skip entity conversion but still validate field keys.
                EntityParserHelper.ParseFieldKey(prop.Name);
                seen.Add(prop.Name);
            }
            return seen.Count;
        }
    }
}
