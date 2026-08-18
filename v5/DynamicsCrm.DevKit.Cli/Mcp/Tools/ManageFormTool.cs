using Microsoft.Crm.Sdk.Messages;
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
            "Form definitions for a Dataverse entity. Actions: list (optional form_type/include_formxml); detail (form_id or form_name); update (form_id+operations or form_id+formxml); rename (form_id+form_name); undo (form_id+backup path). Update flow: manage_form(update, operations=[...]) → auto-builds FormXML+backup+validate+import+publish. Operations support manage_tab, manage_section, manage_fields, manage_subgrid, manage_library, manage_event. Safety: auto-backup, XSD validate, backup failure blocks update. See schema://formxml + docs://instructions_for_formxml.\n\n" +
            "OPERATION JSON: when tool action='update', each item in operations needs action='manage_tab|manage_section|manage_fields|manage_subgrid|manage_library|manage_event' plus manage_action='add|update|rename|move|remove|delete' (availability depends on family). For JavaScript events use library_name, event_name, function_name, pass_execution_context. Example: [{\"action\":\"manage_event\",\"manage_action\":\"add\",\"event_name\":\"onload\",\"function_name\":\"Namespace.onLoad\",\"library_name\":\"new_/js/account.js\",\"pass_execution_context\":true}].\n\n" +
            "WHEN TO USE:\n" +
            "- Inspect existing forms (list, detail) before editing\n" +
            "- Apply operations via action=update (recommended) or provide raw formxml (advanced)\n" +
            "- Rename a form, restore from backup (undo)\n\n" +
            "NAME RESOLUTION: entity_name and operation field references accept Display Name or logical/schema name. Display Name contains is resolved first, then logical/schema contains.\n\n" +
            "The AI should pass its current workspace directory to workspace_folder to ensure backups are saved to the user's project.\n\n" +
            "Fuzzy on form_name (contains): 0/multi → tool returns disambiguation list and stops; AI must ask user. 1 → auto-detail.")]
        public CallToolResult manage_form(
            [Description("'list', 'detail', 'update', 'rename', 'undo'.")] string action = "",
            [Description("Entity Display Name or logical name (Display Name is resolved first; e.g. 'Account' or 'account').")] string entity_name = "",
            [Description("GUID. Required: detail/update/rename/undo.")] string form_id = "",
            [Description("Name contains. 1 match → auto-detail. Ignored if form_id set.")] string form_name = "",
            [Description("2=Main, 5=Mobile, 6=QuickView, 7=QuickCreate. 0 = all.")] int form_type = 0,
            [Description("List mode only. Detail always includes.")] bool include_formxml = false,
            [Description("update (advanced/undo): raw FormXML or backup file path (.formxml). Auto-detects. Use 'operations' for recommended flow.")] string formxml = "",
            [Description("update (recommended): JSON array. Example: [{\"action\":\"manage_event\",\"manage_action\":\"add\",\"event_name\":\"onload\",\"function_name\":\"Namespace.onLoad\",\"library_name\":\"new_/js/account.js\",\"pass_execution_context\":true}]. Read docs://instructions_for_formxml.")] string operations = "",
            [Description("XSD validate before write.")] bool validate = true,
            [Description("Backup before overwrite. Failure blocks update.")] bool backup = true,
            [Description("Optional project/workspace folder path to save backups in.")] string workspace_folder = "")
        {
            _workspaceFolder = workspace_folder;
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'update', 'rename', 'undo'.");

            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult(
                    "Error: entity_name is required.\n" +
                    "Use get_tables to find the entity logical name.");

            var normalizedAction = action.Trim().ToLowerInvariant();
            var entityName = entity_name.Trim();
            var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_form");
            if (!entityResult.IsSuccess)
                return ErrorResult($"Error: {entityResult.Error}");
            entityName = entityResult.Value.LogicalName;

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(entityName, form_name, form_type, include_formxml),
                    "detail" => HandleDetail(entityName, form_id, form_name, form_type),
                    "update" => HandleUpdate(entityName, form_id, formxml, operations, validate, backup),
                    "rename" => HandleRename(entityName, form_id, form_name, backup),
                    "undo" => HandleUndo(entityName, form_id, formxml, validate),
                    _ => ErrorResult($"Error: '{action}' is not a valid action. Valid actions: list, detail, update, rename, undo.")
                };
            }
            catch (System.ServiceModel.FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault> fex)
            {
                var fault = fex.Detail;
                var errorDetail = fault != null
                    ? $"{fault.Message} (ErrorCode: 0x{fault.ErrorCode:X8})"
                    : fex.Message;
                if (fault?.InnerFault != null)
                    errorDetail += $" → InnerFault: {fault.InnerFault.Message}";

                return ErrorResult(
                    $"[Error] Form {normalizedAction} failed\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {errorDetail}");
            }
            catch (Exception ex)
            {
                var errorDetail = ex.InnerException != null
                    ? $"{ex.Message} → {ex.InnerException.Message}"
                    : ex.Message;

                return ErrorResult(
                    $"[Error] Form {normalizedAction} failed\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {errorDetail}");
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
                return ErrorResult($"Error: form_type={formType} is not valid. Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.");

            var query = BuildListQuery(entityName, formType, includeFormXml);
            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" with type={formType}" : "";
                return TextResult($"[Forms] {entityName} — 0 forms found{typeHint}");
            }

            return TextResult(FormatFormList(entityName, forms, includeFormXml));
        }

        private CallToolResult FindFormsByName(string entityName, string formName, int formType)
        {
            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return ErrorResult($"Error: form_type={formType} is not valid. Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.");

            var query = BuildListQuery(entityName, formType, includeFormXml: false);
            var escapedName = formName.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");

            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" (type={MapFormType(formType)})" : "";
                return ErrorResult(
                    $"Error: No form found matching '{formName}' for entity '{entityName}'{typeHint}. " +
                    $"Use manage_form with action='list' and entity_name='{entityName}' to list all available forms.");
            }

            if (forms.Count == 1)
                return HandleDetail(entityName, forms[0].GetAttributeValue<Guid>("formid").ToString(), "");

            // Multiple matches — return list for disambiguation
            var sb = new StringBuilder(forms.Count * 120 + 256);
            sb.AppendLine($"[Forms] {entityName} — {forms.Count} forms match '{formName}'. Specify the exact form_id to proceed.");
            sb.AppendLine();
            sb.AppendLine("formid\tname\ttype\tdefault\tactive\tmanaged\tversion");

            foreach (var form in forms)
            {
                var formId = form.GetAttributeValue<Guid>("formid");
                var name = form.GetAttributeValue<string>("name") ?? "";
                var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                var isDefault = form.GetAttributeValue<bool>("isdefault");
                var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
                var isManaged = form.GetAttributeValue<bool>("ismanaged");
                var version = form.GetAttributeValue<int>("version");

                sb.AppendLine($"{formId}\t{EscapeTab(name)}\t{MapFormType(type)}\t{(isDefault ? "yes" : "no")}\t{(activationState == 1 ? "Active" : "Inactive")}\t{(isManaged ? "yes" : "no")}\t{version}");
            }

            return TextResult(sb.ToString());
        }

        // ── Action: detail ────────────────────────────────────────────────

        private CallToolResult HandleDetail(string entityName, string formId, string formName, int formType = 0)
        {
            if (string.IsNullOrWhiteSpace(formId) && string.IsNullOrWhiteSpace(formName))
                return ErrorResult("Error: form_id or form_name is required for 'detail' action.");

            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return ErrorResult($"Error: form_type={formType} is not valid. Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.");

            if (!string.IsNullOrWhiteSpace(formId))
            {
                if (!Guid.TryParse(formId.Trim(), out var id))
                    return ErrorResult($"Error: '{formId}' is not a valid GUID.");
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
                return ErrorResult(
                    $"Error: No form found matching name '{nameFilter}'{typeHint} for entity '{entityName}'.\n" +
                    $"Use manage_form with action='list' and entity_name='{entityName}' to list all available forms.");
            }

            if (forms.Count == 1)
                return GetFormDetailResult(entityName, forms[0].GetAttributeValue<Guid>("formid"));

            // Multiple matches
            var sb = new StringBuilder(256);
            sb.AppendLine($"[Forms] Multiple forms match '{nameFilter}' — provide form_id for detail");
            sb.AppendLine();
            sb.AppendLine("formid\tname\ttype");
            foreach (var form in forms)
            {
                var fid = form.GetAttributeValue<Guid>("formid");
                var name = form.GetAttributeValue<string>("name") ?? "";
                var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                sb.AppendLine($"{fid}\t{EscapeTab(name)}\t{MapFormType(type)}");
            }
            return ErrorResult(sb.ToString());
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
                return ErrorResult(
                    $"Error: No form found with ID '{formId}'.\n" +
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var form = result.Entities[0];
            var objectTypeCode = form.GetAttributeValue<string>("objecttypecode") ?? "";

            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {formId}\n" +
                    $"FormEntity: {objectTypeCode}\n" +
                    $"ProvidedEntity: {entityName}\n" +
                    $"Tip: This form belongs to '{objectTypeCode}', not '{entityName}'");

            return TextResult(FormatFormDetail(form, formId));
        }

        private static string FormatFormDetail(Entity form, Guid formId)
        {
            var name = form.GetAttributeValue<string>("name") ?? "";
            var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            var isDefault = form.GetAttributeValue<bool>("isdefault");
            var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
            var isManaged = form.GetAttributeValue<bool>("ismanaged");
            var version = form.GetAttributeValue<int>("version");
            var description = form.GetAttributeValue<string>("description") ?? "";
            var objectTypeCode = form.GetAttributeValue<string>("objecttypecode") ?? "";
            var publishedOn = form.GetAttributeValue<DateTime?>("publishedon");
            var formXml = form.GetAttributeValue<string>("formxml") ?? "";

            var sb = new StringBuilder(formXml.Length + 512);

            sb.AppendLine($"[Form] {name} ({MapFormType(type)})");
            sb.AppendLine($"FormId: {formId}");
            sb.AppendLine($"Entity: {objectTypeCode}");
            sb.AppendLine($"Type: {MapFormType(type)} ({type})");
            sb.AppendLine($"Default: {(isDefault ? "yes" : "no")}");
            sb.AppendLine($"Active: {(activationState == 1 ? "Active" : "Inactive")}");
            sb.AppendLine($"Managed: {(isManaged ? "yes" : "no")}");
            sb.AppendLine($"Version: {version}");
            if (publishedOn.HasValue)
                sb.AppendLine($"Published: {publishedOn.Value:yyyy-MM-dd HH:mm:ss}");
            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"Description: {description}");

            sb.AppendLine();

            if (!string.IsNullOrEmpty(formXml))
            {
                sb.AppendLine("[FormXML]");
                sb.AppendLine(PrettyPrintXml(formXml));
            }

            return sb.ToString();
        }

        // ── Action: update ────────────────────────────────────────────────

        private CallToolResult HandleUpdate(string entityName, string formId,
            string formxml, string operations, bool validate, bool backup)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return ErrorResult("Error: form_id is required for 'update' action.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return ErrorResult($"Error: '{formId}' is not a valid GUID.");

            var hasOperations = !string.IsNullOrWhiteSpace(operations);
            var hasFormxml    = !string.IsNullOrWhiteSpace(formxml);

            if (!hasOperations && !hasFormxml)
                return ErrorResult(
                    "Error: Provide 'operations' (recommended) or 'formxml' for 'update' action.\n" +
                    "- operations: JSON array of form operations (auto-builds + imports)\n" +
                    "- formxml: raw FormXML string or file path from a previous export\n" +
                    "Read docs://instructions_for_formxml for format and examples.");

            if (hasOperations && hasFormxml)
                return ErrorResult(
                    "Error: Provide either 'operations' or 'formxml', not both.\n" +
                    "- Use 'operations' for recommended inline build+import flow.\n" +
                    "- Use 'formxml' for advanced/undo scenarios only.");

            if (hasOperations)
                return HandleUpdateWithOperations(entityName, id, operations, validate, backup);

            return HandleUpdateWithFormXml(entityName, id, formxml, validate, backup);
        }

        private CallToolResult HandleUpdateWithOperations(string entityName, Guid id,
            string operations, bool validate, bool backup)
        {
            // 1. Parse operations JSON
            List<JsonElement> ops;
            try
            {
                ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
                if (ops == null || ops.Count == 0)
                    return ErrorResult(
                        "Error: operations must be a non-empty JSON array.\n" +
                        "Read docs://instructions_for_formxml for format and examples.");
            }
            catch (JsonException ex)
            {
                return ErrorResult(
                    $"Error: Invalid operations JSON: {ex.Message}\n" +
                    $"Read docs://instructions_for_formxml for format and examples.");
            }

            // 2. Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return ErrorResult(
                    $"[Error] Form not found\n" +
                    $"FormId: {id}\n" +
                    $"Tip: Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs");

            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var formName       = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {id}\nFormEntity: {objectTypeCode}\nProvidedEntity: {entityName}\n" +
                    $"Tip: This form belongs to '{objectTypeCode}', not '{entityName}'");

            if (string.IsNullOrWhiteSpace(currentFormXml))
                return ErrorResult($"Error: Form '{id}' has empty FormXML.");

            // 3. Apply operations via runner
            string modifiedFormXml;
            List<string> opSummaries;
            Dictionary<string, string> classIdMap;
            try
            {
                var runner = new FormXmlOperationsRunner(_serviceClient);
                (modifiedFormXml, opSummaries, classIdMap) = runner.Run(currentFormXml, entityName, ops);
            }
            catch (FormXmlOperationsException fex)
            {
                return ErrorResult(fex.Message);
            }
            catch (InvalidOperationException iex)
            {
                return ErrorResult($"Error: {iex.Message}");
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to apply operations: {ex.Message}");
            }

            // 4. Backup
            string backupPath = null;
            if (backup)
            {
                try { backupPath = SaveBackup(entityName, id, formName, currentFormXml); }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                        $"FormId: {id}\nMessage: {ex.Message}\n" +
                        $"Tip: Fix backup directory permissions or set backup=false (not recommended)");
                }
            }

            // 5. Validate XSD
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateFormXml(modifiedFormXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;
                if (errors.Count > 0)
                {
                    var sbError = new StringBuilder(512);
                    sbError.AppendLine($"[FormUpdate] BLOCKED — Validation failed");
                    sbError.AppendLine($"FormId: {id}");
                    sbError.AppendLine($"Errors: {errors.Count}");
                    foreach (var error in errors)
                        sbError.AppendLine($"- {error}");
                    if (warnings.Count > 0)
                    {
                        sbError.AppendLine($"Warnings: {warnings.Count}");
                        foreach (var warning in warnings)
                            sbError.AppendLine($"- {warning}");
                    }
                    if (backupPath != null)
                        sbError.AppendLine($"Backup: saved (no changes made) — {backupPath}");
                    else
                        sbError.AppendLine($"Backup: not needed (no changes made)");
                    sbError.AppendLine($"Tip: Fix the FormXML errors above and retry. Read schema://formxml for valid structure. Read docs://instructions_for_formxml for FormXML operation format examples.");

                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);

                    var blockedResult = new UpsertFormResult
                    {
                        Action = "updated",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "blocked_validation",
                        Validated = true,
                        ValidationErrors = allIssues,
                        BackupPath = backupPath,
                        Published = false
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sbError.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(blockedResult)
                    };
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

            var published = false;
            try
            {
                DataverseMutationExecutor.Execute(_context, _serviceClient, new PublishXmlRequest
                {
                    ParameterXml = $"<importexportxml><entities><entity>{objectTypeCode}</entity></entities></importexportxml>"
                });
                published = true;

                // Wait for form metadata to propagate after publish
                if (published)
                {
                    MetadataOperationWaitHelper.WaitAfterFormView();
                }
            }
            catch (Exception ex)
            {
                var sb2 = BuildSuccessText(entityName, id, formName, backupPath, validate, false);
                sb2.AppendLine($"PublishError: {ex.Message}");
                sb2.AppendLine($"Tip: Call publish with entities='{objectTypeCode}' to retry");
                sb2.AppendLine();
                AppendRollbackInfo(sb2, backupPath, id);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb2.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertFormResult
                    {
                        Action = "updated", Entity = entityName, FormId = id.ToString(),
                        FormName = formName, Status = "updated_publish_failed",
                        Validated = validate, BackupPath = backupPath, Published = false,
                        OperationsCount = ops.Count, FieldsResolved = classIdMap.Count
                        })
                    };
            }

            // 7. Build success response
            var sb = BuildSuccessText(entityName, id, formName, backupPath, validate, published);
            sb.AppendLine($"OperationsCount: {ops.Count}");
            sb.AppendLine("Operations performed:");
            for (var i = 0; i < opSummaries.Count; i++)
                sb.AppendLine($"  {i + 1}. {opSummaries[i]}");
            if (classIdMap.Count > 0)
            {
                sb.AppendLine("ClassIds resolved:");
                var maxNameLen = classIdMap.Keys.Max(k => k.Length);
                foreach (var kv in classIdMap.OrderBy(k => k.Key))
                    sb.AppendLine($"  {kv.Key.PadRight(maxNameLen)} -> {{{kv.Value}}}");
            }
            if (validationWarnings?.Count > 0)
            {
                sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                foreach (var w in validationWarnings)
                    sb.AppendLine($"  - {w}");
            }
            sb.AppendLine();
            AppendRollbackInfo(sb, backupPath, id);

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertFormResult
                {
                    Action = "updated", Entity = entityName, FormId = id.ToString(),
                    FormName = formName, Status = "updated",
                    Validated = validate, ValidationWarnings = validationWarnings,
                    BackupPath = backupPath, Published = published,
                    OperationsCount = ops.Count, FieldsResolved = classIdMap.Count
                })
            };
        }

        private CallToolResult HandleUpdateWithFormXml(string entityName, Guid id,
            string formxml, bool validate, bool backup)
        {
            // Resolve formxml: if it's a file path, read content from file
            var resolvedFormXml = ResolveFormXmlInput(formxml.Trim());
            if (resolvedFormXml == null)
                return ErrorResult(
                    $"[Error] FormXML file not found\n" +
                    $"Path: {formxml.Trim()}\n" +
                    $"Tip: The file path may have been deleted. Re-run the export or use 'operations' for inline build+import.");

            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return ErrorResult(
                    $"[Error] Form not found\n" +
                    $"FormId: {id}\n" +
                    $"Tip: Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs");

            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {id}\n" +
                    $"FormEntity: {objectTypeCode}\n" +
                    $"ProvidedEntity: {entityName}\n" +
                    $"Tip: This form belongs to '{objectTypeCode}', not '{entityName}'");

            // Strip XML declaration from input
            var newFormXml = StripXmlDeclaration(resolvedFormXml);

            // Step 2: Backup current FormXML
            string backupPath = null;
            if (backup)
            {
                try
                {
                    backupPath = SaveBackup(entityName, id, formName, currentFormXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                        $"FormId: {id}\n" +
                        $"Message: {ex.Message}\n" +
                        $"Tip: Fix the backup directory permissions or set backup=false (not recommended)");
                }
            }

            // Step 3: Validate new FormXML against XSD
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateFormXml(newFormXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;

                if (errors.Count > 0)
                {
                    var sbError = new StringBuilder(512);
                    sbError.AppendLine($"[FormUpdate] BLOCKED — Validation failed");
                    sbError.AppendLine($"FormId: {id}");
                    sbError.AppendLine($"Errors: {errors.Count}");
                    foreach (var error in errors)
                        sbError.AppendLine($"- {error}");
                    if (warnings.Count > 0)
                    {
                        sbError.AppendLine($"Warnings: {warnings.Count}");
                        foreach (var warning in warnings)
                            sbError.AppendLine($"- {warning}");
                    }
                    if (backupPath != null)
                        sbError.AppendLine($"Backup: saved (no changes made) — {backupPath}");
                    else
                        sbError.AppendLine($"Backup: not needed (no changes made)");
                    sbError.AppendLine($"Tip: Fix the FormXML errors above and retry. Read schema://formxml for valid structure. Read docs://instructions_for_formxml for FormXML operation format examples.");

                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);

                    var blockedResult = new UpsertFormResult
                    {
                        Action = "updated",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "blocked_validation",
                        Validated = true,
                        ValidationErrors = allIssues,
                        BackupPath = backupPath,
                        Published = false
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sbError.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(blockedResult)
                    };
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

            // Step 5: Publish entity
            var published = false;
            try
            {
                var publishRequest = new PublishXmlRequest
                {
                    ParameterXml = $"<importexportxml><entities><entity>{objectTypeCode}</entity></entities></importexportxml>"
                };
                DataverseMutationExecutor.Execute(_context, _serviceClient, publishRequest);
                published = true;

                // Wait for form metadata to propagate after publish
                if (published)
                {
                    MetadataOperationWaitHelper.WaitAfterFormView();
                }
            }
            catch (Exception ex)
            {
                // Update succeeded but publish failed — don't error, report it
                var sb = BuildSuccessText(entityName, id, formName, backupPath, validate, false);
                sb.AppendLine($"PublishError: {ex.Message}");
                sb.AppendLine($"Tip: Call publish with entities='{objectTypeCode}' to retry");
                sb.AppendLine();
                AppendRollbackInfo(sb, backupPath, id);

                var partialResult = new UpsertFormResult
                {
                    Action = "updated",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "updated_publish_failed",
                    Validated = validate,
                    BackupPath = backupPath,
                    Published = false
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(partialResult)
                };
            }

            // Step 6: Return success
            {
                var sb = BuildSuccessText(entityName, id, formName, backupPath, validate, published);
                if (validationWarnings?.Count > 0)
                {
                    sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                    foreach (var w in validationWarnings)
                        sb.AppendLine($"  - {w}");
                }
                sb.AppendLine();
                AppendRollbackInfo(sb, backupPath, id);

                var structured = new UpsertFormResult
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
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
        }

        // ── Action: rename ────────────────────────────────────────────────

        private CallToolResult HandleRename(string entityName, string formId, string formName,
            bool backup)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return ErrorResult("Error: form_id is required for 'rename' action.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return ErrorResult($"Error: '{formId}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(formName))
                return ErrorResult("Error: form_name is required for 'rename' action.");

            formName = formName.Trim();

            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return ErrorResult(
                    $"[Error] Form not found\n" +
                    $"FormId: {id}\n" +
                    $"Tip: Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs");

            var oldName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;
            var formType = currentForm.GetAttributeValue<OptionSetValue>("type")?.Value;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {id}\n" +
                    $"FormEntity: {objectTypeCode}\n" +
                    $"ProvidedEntity: {entityName}\n" +
                    $"Tip: This form belongs to '{objectTypeCode}', not '{entityName}'");

            // Step 2: Check for duplicate name (same entity + same form type, excluding current form)
            var duplicate = FindFormByName(objectTypeCode, formName, formType, excludeFormId: id);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("formid");
                return ErrorResult(
                    $"[Error] A form with this name already exists\n" +
                    $"Entity: {entityName}\n" +
                    $"Name: {formName}\n" +
                    $"ExistingFormId: {dupId}\n" +
                    $"Tip: Choose a different name");
            }

            // Step 3: Backup
            string backupPath = null;
            if (backup)
            {
                try
                {
                    var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
                    backupPath = SaveBackup(entityName, id, oldName, currentFormXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — rename BLOCKED (fail-safe)\n" +
                        $"FormId: {id}\n" +
                        $"Message: {ex.Message}");
                }
            }

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

            // Step 5: Publish
            var published = false;
            string publishError = null;
            try
            {
                DataverseMutationExecutor.Execute(_context, _serviceClient, new PublishXmlRequest
                {
                    ParameterXml = $"<importexportxml><entities><entity>{objectTypeCode}</entity></entities></importexportxml>"
                });
                published = true;

                // Wait for form metadata to propagate after publish
                if (published)
                {
                    MetadataOperationWaitHelper.WaitAfterFormView();
                }
            }
            catch (Exception ex)
            {
                publishError = ex.Message;
            }

            // Step 6: Return success
            var sb = new StringBuilder(256);
            sb.AppendLine($"[FormRename] {entityName}");
            sb.AppendLine($"FormId: {id}");
            sb.AppendLine($"OldName: {oldName}");
            sb.AppendLine($"NewName: {formName}");
            sb.AppendLine($"Status: Renamed{(publishError != null ? " (publish failed)" : "")} successfully");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            if (publishError != null)
            {
                sb.AppendLine($"PublishError: {publishError}");
                sb.AppendLine($"Tip: Call publish with entities='{objectTypeCode}' to retry");
            }
            if (backupPath != null)
                sb.AppendLine($"Backup: {backupPath}");
            sb.AppendLine();
            AppendRollbackInfo(sb, backupPath, id);

            var status = published ? "renamed" : "renamed_publish_failed";

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertFormResult
                {
                    Action = "renamed",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = status,
                    Validated = false,
                    BackupPath = backupPath,
                    Published = published
                })
            };
        }

        // ── Action: undo ──────────────────────────────────────────────────

        private CallToolResult HandleUndo(string entityName, string formId,
            string backupFilePath, bool validate)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return ErrorResult("Error: form_id is required for 'undo' action.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return ErrorResult($"Error: '{formId}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(backupFilePath))
                return ErrorResult("Error: formxml (backup file path) is required for 'undo' action.");

            backupFilePath = backupFilePath.Trim();

            // Step 1: Read backup file
            if (!File.Exists(backupFilePath))
                return ErrorResult(
                    $"[Error] Backup file not found\n" +
                    $"Path: {backupFilePath}\n" +
                    $"Tip: Check the file path. Backup files are at: .devkit/backups/forms/");

            string restoredFormXml;
            try
            {
                var json = File.ReadAllText(backupFilePath, Encoding.UTF8);
                var backupData = JsonSerializer.Deserialize<FormBackup>(json);
                if (backupData == null || string.IsNullOrWhiteSpace(backupData.FormXml))
                    return ErrorResult(
                        $"[Error] Backup file is empty or invalid\n" +
                        $"Path: {backupFilePath}\n" +
                        $"Tip: The backup file must be a JSON file with a 'formxml' field");

                restoredFormXml = StripXmlDeclaration(backupData.FormXml.Trim());
            }
            catch (JsonException ex)
            {
                return ErrorResult(
                    $"[Error] Failed to parse backup file as JSON\n" +
                    $"Path: {backupFilePath}\n" +
                    $"Message: {ex.Message}\n" +
                    $"Tip: The backup file must be a valid .formxml.json file");
            }

            // Step 2: Verify the form exists
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return ErrorResult(
                    $"[Error] Form not found\n" +
                    $"FormId: {id}\n" +
                    $"Tip: Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs");

            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {id}\n" +
                    $"FormEntity: {objectTypeCode}\n" +
                    $"ProvidedEntity: {entityName}\n" +
                    $"Tip: This form belongs to '{objectTypeCode}', not '{entityName}'");

            // Step 3: Validate restored FormXML against XSD (no backup, but still validate!)
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateFormXml(restoredFormXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;

                if (errors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[FormUndo] BLOCKED — Backup file failed validation");
                    sb.AppendLine($"FormId: {id}");
                    sb.AppendLine($"BackupFile: {backupFilePath}");
                    sb.AppendLine($"Errors: {errors.Count}");
                    foreach (var error in errors)
                        sb.AppendLine($"- {error}");
                    if (warnings.Count > 0)
                    {
                        sb.AppendLine($"Warnings: {warnings.Count}");
                        foreach (var warning in warnings)
                            sb.AppendLine($"- {warning}");
                    }
                    sb.AppendLine($"Tip: The backup file may be corrupted. Set validate=false to force restore (not recommended). Read schema://formxml for valid FormXML structure.");

                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new UpsertFormResult
                        {
                            Action = "undo",
                            Entity = entityName,
                            FormId = id.ToString(),
                            FormName = formName,
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            RestoredFromBackup = backupFilePath,
                            Published = false
                        })
                    };
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

            // Step 5: Publish
            var published = false;
            try
            {
                DataverseMutationExecutor.Execute(_context, _serviceClient, new PublishXmlRequest
                {
                    ParameterXml = $"<importexportxml><entities><entity>{objectTypeCode}</entity></entities></importexportxml>"
                });
                published = true;

                // Wait for form metadata to propagate after publish
                if (published)
                {
                    MetadataOperationWaitHelper.WaitAfterFormView();
                }
            }
            catch (Exception ex)
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[FormUndo] Restored but publish failed");
                sb.AppendLine($"FormId: {id}");
                sb.AppendLine($"RestoredFrom: {backupFilePath}");
                sb.AppendLine($"PublishError: {ex.Message}");
                sb.AppendLine($"Tip: Call publish with entities='{entityName}' to retry");

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertFormResult
                    {
                        Action = "undo",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "restored_publish_failed",
                        Validated = validate,
                        RestoredFromBackup = backupFilePath,
                        Published = false
                    })
                };
            }

            // Step 6: Return success
            var sb2 = new StringBuilder(256);
            sb2.AppendLine($"[FormUndo] {entityName} — {formName}");
            sb2.AppendLine($"FormId: {id}");
            sb2.AppendLine($"Status: Restored successfully");
            sb2.AppendLine($"RestoredFrom: {backupFilePath}");
            sb2.AppendLine($"Validated: {(validate ? "yes" : "skipped")}");
            sb2.AppendLine($"Published: {(published ? "yes" : "no")}");
            if (validationWarnings?.Count > 0)
            {
                sb2.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                foreach (var w in validationWarnings)
                    sb2.AppendLine($"  - {w}");
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb2.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertFormResult
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
                })
            };
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

        private static string FormatFormList(string entityName, DataCollection<Entity> forms, bool includeFormXml, string header = null)
        {
            var sb = new StringBuilder(forms.Count * 120 + 256);
            sb.AppendLine(header ?? $"[Forms] {entityName} ({forms.Count} forms)");
            sb.AppendLine();
            sb.AppendLine("formid\tname\ttype\tdefault\tactive\tmanaged\tversion");

            foreach (var form in forms)
            {
                var formId = form.GetAttributeValue<Guid>("formid");
                var name = form.GetAttributeValue<string>("name") ?? "";
                var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                var isDefault = form.GetAttributeValue<bool>("isdefault");
                var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
                var isManaged = form.GetAttributeValue<bool>("ismanaged");
                var version = form.GetAttributeValue<int>("version");

                sb.AppendLine($"{formId}\t{EscapeTab(name)}\t{MapFormType(type)}\t{(isDefault ? "yes" : "no")}\t{(activationState == 1 ? "Active" : "Inactive")}\t{(isManaged ? "yes" : "no")}\t{version}");

                if (includeFormXml)
                {
                    var formXml = form.GetAttributeValue<string>("formxml");
                    if (!string.IsNullOrEmpty(formXml))
                    {
                        sb.AppendLine();
                        sb.AppendLine($"[FormXML: {name}]");
                        sb.AppendLine(PrettyPrintXml(formXml));
                        sb.AppendLine();
                    }
                }
            }

            return sb.ToString();
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
            try
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
            catch
            {
                return xml;
            }
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private CallToolResult TextResult(string text) => Success(text, null);

        private CallToolResult ErrorResult(string message) => Error(message);

        // ── Shared Helpers (write actions) ────────────────────────────────

        private Entity RetrieveForm(Guid formId)
        {
            try
            {
                return _serviceClient.Retrieve("systemform", formId,
                    new ColumnSet("formxml", "name", "objecttypecode", "type"));
            }
            catch
            {
                return null;
            }
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
            var workingDir = string.IsNullOrWhiteSpace(_workspaceFolder) ? Directory.GetCurrentDirectory() : _workspaceFolder;
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "forms");
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

        private static StringBuilder BuildSuccessText(
            string entityName, Guid formId, string formName, string backupPath, bool validated, bool published)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[FormUpdate] {entityName} — {formName}");
            sb.AppendLine($"FormId: {formId}");
            sb.AppendLine($"Status: Updated successfully");
            sb.AppendLine($"Validated: {(validated ? "yes" : "skipped")}");
            sb.AppendLine($"Backup: {backupPath ?? "skipped"}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            return sb;
        }

        private static void AppendRollbackInfo(StringBuilder sb, string backupPath, Guid formId)
        {
            sb.AppendLine("To rollback this change:");
            if (backupPath != null)
            {
                sb.AppendLine($"  Call manage_form with action='undo', form_id='{formId}', formxml='{backupPath}'");
            }
            else
            {
                sb.AppendLine($"  1. Retrieve the previous FormXML (no backup was created)");
                sb.AppendLine($"  2. Call manage_form with action='undo', form_id='{formId}' and the original formxml");
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
