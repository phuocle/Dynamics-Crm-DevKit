using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageFormTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;

        public ManageFormTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_form", Title = "Manage entity forms",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertFormResult)),
        Description(
            "Manage form definitions (systemform) for a Dataverse entity. Actions: 'list', 'detail' (read-only) | 'update', 'rename', 'undo' (mutations — require System Administrator).\n\n" +
            "WHEN TO USE:\n" +
            "- List or inspect forms of an entity (list, detail) before editing\n" +
            "- Apply form operations via action=update (recommended: operations JSON) or raw formxml (advanced/undo)\n" +
            "- Rename a form, or restore a form from a .formxml backup (undo) — the result's backupPath points to the pre-change backup; pass it as formxml to action='undo' to restore\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → entity logical names; manage_view → entity views; publish_customizations → batch publish\n" +
            "- See schema://formxml + docs://instructions_for_formxml for FormXML structure and operation examples")]
        public CallToolResult manage_form(
            [Description("'list', 'detail', 'update', 'rename', 'undo'.")] string action = "",
            [Description("Entity Display Name or logical name (Display Name is resolved first; e.g. 'Account' or 'account').")] string entity_name = "",
            [Description("GUID. Required for detail/update/rename/undo.")] string form_id = "",
            [Description("Name contains filter. 1 match → auto-detail. Ignored if form_id is set.")] string form_name = "",
            [Description("2=Main, 5=Mobile, 6=QuickView, 7=QuickCreate. 0 or omit = all types.")] int form_type = 0,
            [Description("List mode only — include formxml in each entry. Detail always includes formxml.")] bool include_formxml = false,
            [Description("update (advanced) / undo: raw FormXML string or backup file path (.formxml). Auto-detects. Use 'operations' for the recommended flow.")] string formxml = "",
            [Description("update (recommended): JSON array of form operations. Read docs://instructions_for_formxml for format and examples.")] string operations = "",
            [Description("XSD validate FormXML before write.")] bool validate = true,
            [Description("Required for update/rename — current FormXML always backs up to {workspace_folder}/.devkit/manage_form/{entity}/backups/ before overwrite. Pass the workspace folder currently open in the editor, NOT the devkit install folder.")] string workspace_folder = "")
        {
            _workspaceFolder = workspace_folder;
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'update', 'rename', 'undo'.");

                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.", "Use get_tables to find the entity logical name.");

                var normalizedAction = action.Trim().ToLowerInvariant();
                var entityName = entity_name.Trim();
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_form");
                if (!entityResult.IsSuccess)
                    return Error(entityResult.Error);
                entityName = entityResult.Value.LogicalName;

                // Rule12: gate mutation actions (update/rename/undo) behind System Administrator.
                if (normalizedAction is "update" or "rename" or "undo"
                    && RoleGateHelper.EnsureSystemAdministrator(_serviceClient) is { } gate)
                    return gate;

                if (normalizedAction is "update" or "rename" && string.IsNullOrWhiteSpace(workspace_folder))
                    return Error($"workspace_folder is required when action='{normalizedAction}' (backup before overwrite).",
                        "Provide the workspace folder — current FormXML backs up to {workspace_folder}/.devkit/manage_form/{entity}/backups/ before overwrite.");

                return normalizedAction switch
                {
                    "list" => HandleList(entityName, form_name, form_type, include_formxml),
                    "detail" => HandleDetail(entityName, form_id, form_name, form_type),
                    "update" => HandleUpdate(entityName, form_id, formxml, operations, validate),
                    "rename" => HandleRename(entityName, form_id, form_name),
                    "undo" => HandleUndo(entityName, form_id, formxml, validate),
                    _ => Error($"'{action}' is not a valid action.", "Valid actions: list, detail, update, rename, undo.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        // ── Action: list ──────────────────────────────────────────────────

        private CallToolResult HandleList(string entityName, string formName, int formType, bool includeFormXml)
        {
            if (!string.IsNullOrWhiteSpace(formName))
            {
                var nameFilter = formName.Trim();
                return FindFormsByName(entityName, nameFilter, formType);
            }

            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return Error($"form_type={formType} is not valid.", "Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.");

            var query = BuildListQuery(entityName, formType, includeFormXml);
            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" with type={formType}" : "";
                return Success($"No forms found for '{entityName}'{typeHint}.", new UpsertFormResult
                {
                    Action = "list", Entity = entityName, TotalCount = 0, Status = "success"
                });
            }

            var entries = BuildFormListEntries(forms, includeFormXml);
            return Success($"Found {entries.Count} form(s) for '{entityName}'.", new UpsertFormResult
            {
                Action = "list", Entity = entityName, TotalCount = entries.Count,
                Forms = entries, Status = "success"
            });
        }

        private CallToolResult FindFormsByName(string entityName, string formName, int formType)
        {
            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return Error($"form_type={formType} is not valid.", "Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.");

            var query = BuildListQuery(entityName, formType, includeFormXml: false);
            var escapedName = formName.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");

            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" (type={MapFormType(formType)})" : "";
                return Error(
                    $"No form found matching '{formName}' for entity '{entityName}'{typeHint}.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to list all available forms.");
            }

            if (forms.Count == 1)
                return HandleDetail(entityName, forms[0].GetAttributeValue<Guid>("formid").ToString(), "", formType);

            // Multiple matches — return list for disambiguation
            var entries = BuildFormListEntries(forms, includeFormXml: false);
            return Error(
                $"Multiple forms match '{formName}' for '{entityName}' — provide form_id to proceed.",
                "See the 'forms' array in structuredContent for candidate form IDs.",
                new UpsertFormResult
                {
                    Action = "list", Entity = entityName, TotalCount = entries.Count,
                    Forms = entries, Status = "ambiguous"
                });
        }

        private static List<FormListEntry> BuildFormListEntries(DataCollection<Entity> forms, bool includeFormXml)
        {
            var entries = new List<FormListEntry>(forms.Count);
            foreach (var form in forms)
            {
                var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
                var entry = new FormListEntry
                {
                    FormId = form.GetAttributeValue<Guid>("formid").ToString(),
                    FormName = form.GetAttributeValue<string>("name") ?? "",
                    FormType = type,
                    FormTypeName = MapFormType(type),
                    IsDefault = form.GetAttributeValue<bool>("isdefault"),
                    IsActive = activationState == 1,
                    IsManaged = form.GetAttributeValue<bool>("ismanaged"),
                    Version = form.GetAttributeValue<int>("version")
                };
                if (includeFormXml)
                    entry.FormXml = form.GetAttributeValue<string>("formxml");
                entries.Add(entry);
            }
            return entries;
        }

        // ── Action: detail ────────────────────────────────────────────────

        private CallToolResult HandleDetail(string entityName, string formId, string formName, int formType = 0)
        {
            if (string.IsNullOrWhiteSpace(formId) && string.IsNullOrWhiteSpace(formName))
                return Error("form_id or form_name is required when action='detail'.");

            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return Error($"form_type={formType} is not valid.", "Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.");

            if (!string.IsNullOrWhiteSpace(formId))
            {
                if (!Guid.TryParse(formId.Trim(), out var id))
                    return Error($"'{formId}' is not a valid GUID.");
                return GetFormDetailResult(entityName, id);
            }

            // form_name provided, no form_id
            var nameFilter = formName.Trim();
            var query = BuildListQuery(entityName, formType, includeFormXml: false);
            var escapedName = nameFilter.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");

            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" with type '{MapFormType(formType)}'" : "";
                return Error(
                    $"No form found matching name '{nameFilter}'{typeHint} for entity '{entityName}'.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to list all available forms.");
            }

            if (forms.Count == 1)
                return GetFormDetailResult(entityName, forms[0].GetAttributeValue<Guid>("formid"));

            // Multiple matches — return candidates for disambiguation
            var entries = BuildFormListEntries(forms, includeFormXml: false);
            return Error(
                $"Multiple forms match '{nameFilter}' for '{entityName}' — provide form_id for detail.",
                "See the 'forms' array in structuredContent for candidate form IDs.",
                new UpsertFormResult
                {
                    Action = "detail", Entity = entityName, TotalCount = entries.Count,
                    Forms = entries, Status = "ambiguous"
                });
        }

        private CallToolResult GetFormDetailResult(string entityName, Guid formId)
        {
            var query = new QueryExpression("systemform")
            {
                ColumnSet = new ColumnSet(true)
            };
            query.Criteria.AddCondition("formid", ConditionOperator.Equal, formId);

            var result = _serviceClient.RetrieveMultiple(query);

            if (result.Entities.Count == 0)
                return Error(
                    $"No form found with ID '{formId}'.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var form = result.Entities[0];
            var objectTypeCode = form.GetAttributeValue<string>("objecttypecode") ?? "";

            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{formId}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            var name = form.GetAttributeValue<string>("name") ?? "";
            var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            var isDefault = form.GetAttributeValue<bool>("isdefault");
            var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
            var isManaged = form.GetAttributeValue<bool>("ismanaged");
            var version = form.GetAttributeValue<int>("version");
            var description = form.GetAttributeValue<string>("description");
            var formXml = form.GetAttributeValue<string>("formxml") ?? "";

            var text = $"'{name}' ({formId}) on '{objectTypeCode}' — {MapFormType(type)} form, " +
                $"{(activationState == 1 ? "active" : "inactive")}" +
                (isDefault ? ", default" : "") +
                (isManaged ? ", managed" : "") +
                $", version {version}. formxml in structuredContent.";

            return Success(text, new UpsertFormResult
            {
                Action = "detail",
                Entity = objectTypeCode,
                FormId = formId.ToString(),
                FormName = name,
                Status = "success",
                FormType = type,
                FormTypeName = MapFormType(type),
                IsDefault = isDefault,
                IsActive = activationState == 1,
                IsManaged = isManaged,
                Version = version,
                Description = description,
                FormXml = !string.IsNullOrEmpty(formXml) ? PrettyPrintXml(formXml) : null
            });
        }

        // ── Action: update ────────────────────────────────────────────────

        private CallToolResult HandleUpdate(string entityName, string formId,
            string formxml, string operations, bool validate)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return Error("form_id is required when action='update'.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return Error($"'{formId}' is not a valid GUID.");

            var hasOperations = !string.IsNullOrWhiteSpace(operations);
            var hasFormxml    = !string.IsNullOrWhiteSpace(formxml);

            if (!hasOperations && !hasFormxml)
                return Error(
                    "Provide 'operations' (recommended) or 'formxml' for action='update'.",
                    "- operations: JSON array of form operations (auto-builds + imports)\n- formxml: raw FormXML string or file path from a previous export. Read docs://instructions_for_formxml.");

            if (hasOperations && hasFormxml)
                return Error(
                    "Provide either 'operations' or 'formxml', not both.",
                    "Use 'operations' for the recommended inline build+import flow; 'formxml' for advanced/undo scenarios only.");

            if (hasOperations)
                return HandleUpdateWithOperations(entityName, id, operations, validate);

            return HandleUpdateWithFormXml(entityName, id, formxml, validate);
        }

        private CallToolResult HandleUpdateWithOperations(string entityName, Guid id,
            string operations, bool validate)
        {
            // 1. Parse operations JSON (JsonException bubbles to entry catch)
            var ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
            if (ops == null || ops.Count == 0)
                return Error("operations must be a non-empty JSON array.", "Read docs://instructions_for_formxml for format and examples.");

            // 2. Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var formName       = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            if (string.IsNullOrWhiteSpace(currentFormXml))
                return Error($"Form '{id}' has empty FormXML.");

            // 3. Apply operations via runner (exceptions bubble to entry catch)
            var runner = new FormXmlOperationsRunner(_serviceClient);
            var (modifiedFormXml, opSummaries, classIdMap) = runner.Run(currentFormXml, entityName, ops);

            // 4. Backup (fail-safe: exception bubbles to entry catch)
            var backupPath = SaveBackup(entityName, id, formName, currentFormXml);

            // 5. Validate XSD
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateFormXml(modifiedFormXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;
                if (errors.Count > 0)
                {
                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);
                    return Error(
                        $"FormXML validation failed for form '{formName}' ({id}) — {errors.Count} error(s). First: {errors[0]}",
                        "Fix the FormXML errors and retry. Read schema://formxml and docs://instructions_for_formxml.",
                        new UpsertFormResult
                        {
                            Action = "update",
                            Entity = entityName,
                            FormId = id.ToString(),
                            FormName = formName,
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            ValidationWarnings = validationWarnings,
                            BackupPath = backupPath,
                            Published = false,
                            OperationsCount = ops?.Count
                        });
                }
            }

            // 6. Update + Publish
            var updateEntity = new Entity("systemform", id);
            updateEntity["formxml"] = modifiedFormXml;
            if (_options.DryRun)
                return DryRun($"Would UPDATE FormXML (operations) for form '{formName}' ({id}) on entity '{entityName}'.", new UpsertFormResult
                {
                    Action = "update",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "not_executed",
                    Validated = validate,
                    ValidationWarnings = validationWarnings,
                    BackupPath = backupPath,
                    Published = false,
                    OperationsCount = ops?.Count
                });
            DataverseMutationExecutor.Update(_context, _serviceClient, updateEntity);

            // Publish via helper (swallows faults, returns false on failure)
            var published = PublishHelper.PublishEntity(_context, _serviceClient, objectTypeCode);

            if (!published)
                return Partial(
                    $"Updated form '{formName}' ({id}) on '{entityName}' but publish failed — Dataverse rejected the publish.",
                    new UpsertFormResult
                    {
                        Action = "updated", Entity = entityName, FormId = id.ToString(),
                        FormName = formName, Status = "updated_publish_failed",
                        Validated = validate, BackupPath = backupPath, Published = false,
                        OperationsCount = ops.Count, FieldsResolved = classIdMap.Count,
                        ValidationWarnings = validationWarnings
                    });

            // 7. Build success response
            var summary = $"Updated form '{formName}' ({id}) on '{entityName}' — {ops.Count} operation(s)" +
                $", {(validate ? "validated" : "validation skipped")}" +
                $", {(published ? "published" : "publish pending")}" +
                ". Backup saved." +
                (classIdMap.Count > 0 ? $" {classIdMap.Count} field(s) resolved." : "") +
                (validationWarnings?.Count > 0 ? $" {validationWarnings.Count} validation warning(s) (see validationWarnings)." : "");

            return Success(summary, new UpsertFormResult
            {
                Action = "updated", Entity = entityName, FormId = id.ToString(),
                FormName = formName, Status = "updated",
                Validated = validate, ValidationWarnings = validationWarnings,
                BackupPath = backupPath, Published = published,
                OperationsCount = ops.Count, FieldsResolved = classIdMap.Count
            });
        }

        private CallToolResult HandleUpdateWithFormXml(string entityName, Guid id,
            string formxml, bool validate)
        {
            // Resolve formxml: if it's a file path, read content from file
            var resolvedFormXml = ResolveFormXmlInput(formxml.Trim());
            if (resolvedFormXml == null)
                return Error(
                    $"FormXML file not found at '{formxml.Trim()}'.",
                    "The file path may have been deleted. Re-run the export or use 'operations' for inline build+import.");

            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            // Strip XML declaration from input
            var newFormXml = StripXmlDeclaration(resolvedFormXml);

            // Step 2: Backup current FormXML (fail-safe: exception bubbles to entry catch)
            var backupPath = SaveBackup(entityName, id, formName, currentFormXml);

            // Step 3: Validate new FormXML against XSD
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateFormXml(newFormXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;

                if (errors.Count > 0)
                {
                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);
                    return Error(
                        $"FormXML validation failed for form '{formName}' ({id}) — {errors.Count} error(s). First: {errors[0]}",
                        "Fix the FormXML errors and retry. Read schema://formxml and docs://instructions_for_formxml.",
                        new UpsertFormResult
                        {
                            Action = "update",
                            Entity = entityName,
                            FormId = id.ToString(),
                            FormName = formName,
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            ValidationWarnings = validationWarnings,
                            BackupPath = backupPath,
                            Published = false
                        });
                }
            }

            // Step 4: Update form record in Dataverse
            var update = new Entity("systemform", id);
            update["formxml"] = newFormXml;
            if (_options.DryRun)
                return DryRun($"Would UPDATE FormXML for form '{formName}' ({id}) on entity '{entityName}'.", new UpsertFormResult
                {
                    Action = "update",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "not_executed",
                    Validated = validate,
                    BackupPath = backupPath,
                    Published = false
                });
            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            // Step 5: Publish via helper (swallows faults, returns false on failure)
            var published = PublishHelper.PublishEntity(_context, _serviceClient, objectTypeCode);

            if (!published)
                return Partial(
                    $"Updated form '{formName}' ({id}) on '{entityName}' but publish failed — Dataverse rejected the publish.",
                    new UpsertFormResult
                    {
                        Action = "updated",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "updated_publish_failed",
                        Validated = validate,
                        ValidationWarnings = validationWarnings,
                        BackupPath = backupPath,
                        Published = false
                    });

            // Step 6: Return success
            var summary = $"Updated form '{formName}' ({id}) on '{entityName}' — raw FormXML import" +
                $", {(validate ? "validated" : "validation skipped")}" +
                $", {(published ? "published" : "publish pending")}" +
                ". Backup saved." +
                (validationWarnings?.Count > 0 ? $" {validationWarnings.Count} validation warning(s) (see validationWarnings)." : "");

            return Success(summary, new UpsertFormResult
            {
                Action = "updated",
                Entity = entityName,
                FormId = id.ToString(),
                FormName = formName,
                Status = "updated",
                Validated = validate,
                ValidationWarnings = validationWarnings,
                BackupPath = backupPath,
                Published = published
            });
        }

        // ── Action: rename ────────────────────────────────────────────────

        private CallToolResult HandleRename(string entityName, string formId, string formName)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return Error("form_id is required when action='rename'.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return Error($"'{formId}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(formName))
                return Error("form_name is required when action='rename'.");

            formName = formName.Trim();

            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var oldName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;
            var formType = currentForm.GetAttributeValue<OptionSetValue>("type")?.Value;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            // Step 2: Check for duplicate name (same entity + same form type, excluding current form)
            var duplicate = FindFormByName(objectTypeCode, formName, formType, excludeFormId: id);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("formid");
                return Error(
                    $"A form named '{formName}' already exists on '{entityName}' (FormId {dupId}).",
                    "Choose a different name.");
            }

            // Step 3: Backup (fail-safe: exception bubbles to entry catch)
            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var backupPath = SaveBackup(entityName, id, oldName, currentFormXml);

            // Step 4: Rename
            var update = new Entity("systemform", id)
            {
                ["name"] = formName
            };
            if (_options.DryRun)
                return DryRun($"Would RENAME form '{oldName}' to '{formName}' ({id}) on entity '{entityName}'.", new UpsertFormResult
                {
                    Action = "rename",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "not_executed",
                    BackupPath = backupPath,
                    Published = false
                });
            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            // Step 5: Publish via helper (swallows faults, returns false on failure)
            var published = PublishHelper.PublishEntity(_context, _serviceClient, objectTypeCode);

            if (!published)
                return Partial(
                    $"Renamed form '{oldName}' → '{formName}' ({id}) on '{entityName}' but publish failed — Dataverse rejected the publish.",
                    new UpsertFormResult
                    {
                        Action = "renamed",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "renamed_publish_failed",
                        Validated = false,
                        BackupPath = backupPath,
                        Published = false
                    });

            // Step 6: Return success
            var summary = $"Renamed form '{oldName}' → '{formName}' ({id}) on '{entityName}', published" +
                ". Backup saved.";

            return Success(summary, new UpsertFormResult
            {
                Action = "renamed",
                Entity = entityName,
                FormId = id.ToString(),
                FormName = formName,
                Status = "renamed",
                Validated = false,
                BackupPath = backupPath,
                Published = published
            });
        }

        // ── Action: undo ──────────────────────────────────────────────────

        private CallToolResult HandleUndo(string entityName, string formId,
            string backupFilePath, bool validate)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return Error("form_id is required when action='undo'.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return Error($"'{formId}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(backupFilePath))
                return Error("formxml (backup file path) is required when action='undo'.");

            backupFilePath = backupFilePath.Trim();

            // Step 1: Read backup file (JSON parse errors bubble to entry catch)
            if (!File.Exists(backupFilePath))
                return Error(
                    $"Backup file not found at '{backupFilePath}'.",
                    "Backup files are saved at .devkit/manage_form/{entity}/backups/.");

            var json = File.ReadAllText(backupFilePath, Encoding.UTF8);
            var backupData = JsonSerializer.Deserialize<FormBackup>(json);
            if (backupData == null || string.IsNullOrWhiteSpace(backupData.FormXml))
                return Error(
                    $"Backup file '{backupFilePath}' is empty or invalid.",
                    "The backup file must be a JSON file with a 'formxml' field.");

            var restoredFormXml = StripXmlDeclaration(backupData.FormXml.Trim());

            // Step 2: Verify the form exists
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            // Step 3: Validate restored FormXML against XSD (no backup, but still validate!)
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateFormXml(restoredFormXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;

                if (errors.Count > 0)
                {
                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);
                    return Error(
                        $"Backup file failed FormXML validation for form '{formName}' ({id}) — {errors.Count} error(s). First: {errors[0]}",
                        "The backup file may be corrupted. Set validate=false to force restore (not recommended). Read schema://formxml for valid structure.",
                        new UpsertFormResult
                        {
                            Action = "undo",
                            Entity = entityName,
                            FormId = id.ToString(),
                            FormName = formName,
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            ValidationWarnings = validationWarnings,
                            RestoredFromBackup = backupFilePath,
                            Published = false
                        });
                }
            }

            // Step 4: Update form with restored FormXML (NO backup — we're restoring!)
            var update = new Entity("systemform", id);
            update["formxml"] = restoredFormXml;
            if (_options.DryRun)
                return DryRun($"Would RESTORE form '{formName}' ({id}) from backup on entity '{entityName}'.", new UpsertFormResult
                {
                    Action = "undo",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "not_executed",
                    Validated = validate,
                    RestoredFromBackup = backupFilePath,
                    Published = false
                });
            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            // Step 5: Publish via helper (swallows faults, returns false on failure)
            var published = PublishHelper.PublishEntity(_context, _serviceClient, objectTypeCode);

            if (!published)
                return Partial(
                    $"Restored form '{formName}' ({id}) on '{entityName}' from '{backupFilePath}' but publish failed — Dataverse rejected the publish.",
                    new UpsertFormResult
                    {
                        Action = "undo",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "restored_publish_failed",
                        Validated = validate,
                        ValidationWarnings = validationWarnings,
                        RestoredFromBackup = backupFilePath,
                        Published = false
                    });

            // Step 6: Return success
            var summary = $"Restored form '{formName}' ({id}) on '{entityName}' from '{backupFilePath}'" +
                $", {(validate ? "validated" : "validation skipped")}" +
                $", {(published ? "published" : "publish pending")}" +
                (validationWarnings?.Count > 0 ? $" {validationWarnings.Count} validation warning(s) (see validationWarnings)." : "");

            return Success(summary, new UpsertFormResult
            {
                Action = "undo",
                Entity = entityName,
                FormId = id.ToString(),
                FormName = formName,
                Status = "restored",
                Validated = validate,
                ValidationWarnings = validationWarnings,
                RestoredFromBackup = backupFilePath,
                Published = published
            });
        }

        // ── List/Detail Helpers ───────────────────────────────────────────

        private static readonly int[] ValidFormTypes = { 0, 2, 4, 5, 6, 7, 8, 11, 12 };

        private static QueryExpression BuildListQuery(string entityName, int formType, bool includeFormXml)
        {
            var columns = new ColumnSet(
                "formid", "name", "type", "formactivationstate",
                "isdefault", "description", "ismanaged", "version");

            if (includeFormXml)
                columns.AddColumn("formxml");

            var query = new QueryExpression("systemform")
            {
                ColumnSet = columns
            };

            query.Criteria.AddCondition("objecttypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("formactivationstate", ConditionOperator.Equal, 1);

            if (formType != 0)
                query.Criteria.AddCondition("type", ConditionOperator.Equal, formType);

            query.AddOrder("type", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);

            return query;
        }

        private static string MapFormType(int type) => type switch
        {
            0 => "Dashboard",
            2 => "Main",
            4 => "Preview",
            5 => "Mobile",
            6 => "QuickView",
            7 => "QuickCreate",
            8 => "Dialog",
            11 => "MainInteractive",
            12 => "Card",
            _ => $"Other({type})"
        };

        private static string PrettyPrintXml(string xml)
        {
            var doc = XDocument.Parse(xml);
            var settings = new XmlWriterSettings
            {
                Indent = true,
                IndentChars = "  ",
                OmitXmlDeclaration = true
            };
            var sb = new StringBuilder(xml.Length + 256);
            using (var writer = XmlWriter.Create(sb, settings))
            {
                doc.WriteTo(writer);
            }
            return sb.ToString();
        }

        // ── Shared Helpers (write actions) ────────────────────────────────

        private Entity RetrieveForm(Guid formId)
        {
            // RetrieveMultiple never throws on a missing row (Retrieve does) — returns empty set.
            var query = new QueryExpression("systemform")
            {
                ColumnSet = new ColumnSet("formxml", "name", "objecttypecode", "type"),
                TopCount = 1
            };
            query.Criteria.AddCondition("formid", ConditionOperator.Equal, formId);
            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        /// <summary>
        /// Resolves the formxml input: detects whether the input is a file path or inline XML,
        /// reads the file if needed, and returns the raw FormXML string.
        /// Supported file types:
        ///   .formxml.json / .json — backup envelope written by SaveBackup; extracts the "formxml" field.
        ///   .formxml / .xml       — raw FormXML file; returned as-is (temp .formxml files are deleted after read).
        /// Returns null if the path was detected but the file does not exist.
        /// </summary>
        private static string ResolveFormXmlInput(string formxml)
        {
            // Inline XML always starts with '<' — return immediately without any file I/O.
            if (formxml.TrimStart().StartsWith("<"))
                return formxml;

            // Detect whether the value looks like a file path.
            // A path contains a separator character (\, /) or a drive-letter colon (:),
            // or ends with one of the known FormXML file extensions.
            var looksLikePath =
                formxml.Contains('\\') ||
                formxml.Contains('/') ||
                formxml.Contains(':') ||
                formxml.EndsWith(".formxml",      StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".formxml.json", StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".xml",          StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".json",         StringComparison.OrdinalIgnoreCase);

            if (!looksLikePath)
                return formxml; // Treat as raw XML; the XML parser will surface a clear error if invalid.

            // Path detected — verify the file exists before reading.
            if (!File.Exists(formxml))
                return null; // Signals "file not found" to the caller.

            // ── .formxml.json / .json — backup envelope ──────────────────
            // Backup files written by SaveBackup are JSON objects with a "formxml" field.
            // Try to parse as the envelope first; fall through to raw read on failure.
            if (formxml.EndsWith(".formxml.json", StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".json",         StringComparison.OrdinalIgnoreCase))
            {
                try
                {
                    var jsonText = File.ReadAllText(formxml, Encoding.UTF8);
                    var backupData = JsonSerializer.Deserialize<FormBackup>(jsonText);
                    if (backupData != null && !string.IsNullOrWhiteSpace(backupData.FormXml))
                        return backupData.FormXml.Trim();
                    // If FormXml field is missing/empty, fall through to raw read below.
                }
                catch (JsonException)
                {
                    // Not a valid backup JSON — fall through and try reading as raw XML.
                }
                // Backup files are intentionally kept; do not delete them.
                return File.ReadAllText(formxml, Encoding.UTF8).Trim();
            }

            // ── .formxml / .xml — raw FormXML file ───────────────────────
            var content = File.ReadAllText(formxml, Encoding.UTF8).Trim();

            // Delete only bare .formxml temp files (generated by build_form_xml).
            // Do NOT delete .xml or any other extension — those are user files.
            if (formxml.EndsWith(".formxml", StringComparison.OrdinalIgnoreCase))
                try { File.Delete(formxml); } catch { /* best effort cleanup */ }

            return content;
        }

        private Entity FindFormByName(string entityName, string formName, int? formType, Guid? excludeFormId = null)
        {
            var query = new QueryExpression("systemform")
            {
                ColumnSet = new ColumnSet("formid", "name"),
                TopCount = 1
            };
            query.Criteria.AddCondition("objecttypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("name", ConditionOperator.Equal, formName);

            if (formType.HasValue)
                query.Criteria.AddCondition("type", ConditionOperator.Equal, formType.Value);

            if (excludeFormId.HasValue)
                query.Criteria.AddCondition("formid", ConditionOperator.NotEqual, excludeFormId.Value);

            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private string SaveBackup(string entityName, Guid formId, string formName, string currentFormXml)
        {
            var backupDir = Path.Combine(_workspaceFolder, ".devkit", "manage_form", entityName, "backups");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{entityName}_{formId:N}_{timestamp}.formxml.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var prettyXml = PrettyPrintXml(currentFormXml);
            var singleLineXml = prettyXml
                .Replace("\r\n", "").Replace("\n", "").Replace("\r", "");
            singleLineXml = System.Text.RegularExpressions.Regex.Replace(singleLineXml, @">\s+<", "><");

            var backupData = new FormBackup
            {
                Entity = entityName,
                FormId = formId.ToString(),
                FormName = formName,
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                FormXml = singleLineXml
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });

            File.WriteAllText(backupPath, json, Encoding.UTF8);

            return backupPath;
        }

        private static (List<string> Errors, List<string> Warnings) ValidateFormXml(string formXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetSchemaSet();
                if (schemaSet == null || schemaSet.Count == 0)
                    return (errors, warnings);

                var settings = new XmlReaderSettings
                {
                    ValidationType = ValidationType.Schema,
                    Schemas = schemaSet
                };

                settings.ValidationEventHandler += (sender, e) =>
                {
                    var location = "";
                    if (e.Exception?.LineNumber > 0)
                        location = $"Line {e.Exception.LineNumber}, Col {e.Exception.LinePosition}: ";

                    var message = e.Message;

                    if (IsSchemaEvolutionError(message))
                    {
                        warnings.Add($"Warning: {location}{message}");
                    }
                    else if (e.Severity == XmlSeverityType.Warning)
                    {
                        warnings.Add($"Warning: {location}{message}");
                    }
                    else
                    {
                        errors.Add($"Error: {location}{message}");
                    }
                };

                using var stringReader = new StringReader(formXml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                while (xmlReader.Read()) { }
            }
            catch (XmlException xmlEx)
            {
                errors.Add($"Error: XML Parsing Error at Line {xmlEx.LineNumber}, Col {xmlEx.LinePosition}: {xmlEx.Message}");
            }
            catch (Exception ex)
            {
                errors.Add($"Error: Validation failed: {ex.Message}");
            }

            return (errors, warnings);
        }

        private static bool IsSchemaEvolutionError(string message)
        {
            return message.Contains("attribute is not declared") ||
                   message.Contains("is not declared");
        }

        private static XmlSchemaSet GetSchemaSet()
        {
            if (_cachedSchemaSet != null) return _cachedSchemaSet;

            lock (_schemaLock)
            {
                if (_cachedSchemaSet != null) return _cachedSchemaSet;

                var assembly = Assembly.GetExecutingAssembly();
                var resourceNames = assembly.GetManifestResourceNames();

                string[] schemaFiles = ["FormXml.xsd", "RibbonCore.xsd", "RibbonTypes.xsd", "RibbonWSS.xsd"];

                var schemas = new XmlSchemaSet();

                foreach (var schemaFile in schemaFiles)
                {
                    var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith(schemaFile));
                    if (resourceName == null) continue;

                    using var stream = assembly.GetManifestResourceStream(resourceName);
                    if (stream == null) continue;

                    var schema = XmlSchema.Read(stream, null);
                    if (schema != null)
                        schemas.Add(schema);
                }

                if (schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedSchemaSet = schemas;
                }

                return _cachedSchemaSet;
            }
        }

        private static string StripXmlDeclaration(string xml)
        {
            if (xml.StartsWith("<?xml", StringComparison.OrdinalIgnoreCase))
            {
                var endIndex = xml.IndexOf("?>", StringComparison.Ordinal);
                if (endIndex >= 0)
                    return xml.Substring(endIndex + 2).TrimStart();
            }
            return xml;
        }

        // ── Backup model ──────────────────────────────────────────────────

        private sealed class FormBackup
        {
            [JsonPropertyName("entity")]
            public string Entity { get; set; }

            [JsonPropertyName("formId")]
            public string FormId { get; set; }

            [JsonPropertyName("formName")]
            public string FormName { get; set; }

            [JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [JsonPropertyName("formxml")]
            public string FormXml { get; set; }
        }
    }
}
