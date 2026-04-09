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
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageFormTool
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        private readonly McpDryRunOptions _options;

        public ManageFormTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_form", Title = "Manage entity forms",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertFormResult)),
        Description(
            "Retrieve and modify form definitions for a Dataverse entity.\n\n" +

            "FIVE ACTIONS:\n" +
            "- action='list': List all active forms with name, type, status. Optional: form_type, include_formxml\n" +
            "- action='detail': Full FormXML and metadata for one form. Requires form_id\n" +
            "- action='update': Modify FormXML. Requires form_id + formxml\n" +
            "- action='rename': Change display name. Requires form_id + form_name\n" +
            "- action='undo': Restore from backup. Requires form_id + formxml (= backup file path)\n\n" +

            "WORKFLOW: build_form_xml (build correct FormXML) → manage_form(action='update', formxml=<result>)\n" +
            "Tool auto-handles: backup → validate XSD → update → publish. Undo path in every response.\n\n" +

            "IMPORTANT: To add fields/sections/tabs/events to a form, ALWAYS use build_form_xml first.\n" +
            "build_form_xml auto-resolves classid GUIDs, validates field names, and generates correct XML.\n" +
            "Do NOT manually construct FormXML — use build_form_xml, then pass its output to manage_form(action='update').\n\n" +

            "SAFETY: auto-backup before changes, XSD blocks invalid XML, backup failure blocks update.\n\n" +

            "TIPS:\n" +
            "- form_type=2 for main forms only. FormXML: tabs > columns > sections > rows > cells > controls\n" +
            "- form_name: if exactly 1 match, returns detail automatically\n" +
            "- Read schema://formxml for XSD. Read docs://instructions_for_formxml for rules\n" +
            "- Set auto_publish=false when batching, then call publish_customizations once")]
        public CallToolResult manage_form(
            [Description("The action to perform: 'list', 'detail', 'update', 'rename', or 'undo'."
            )] string action,
            [Description("Entity logical name (e.g., 'account'). Use get_tables if unsure."
            )] string entity_name,
            [Description("GUID of a form. Required for detail/update/rename/undo. Empty for list."
            )] string form_id = "",
            [Description("Filter by name (contains match). 1 match = auto-detail. Ignored if form_id set."
            )] string form_name = "",
            [Description("Filter by type: 2=Main, 5=Mobile, 6=QuickView, 7=QuickCreate. 0 = all."
            )] int form_type = 0,
            [Description("Include FormXML in list mode (default: false). Detail mode always includes it."
            )] bool include_formxml = false,
            [Description("For 'update': FormXML. For 'undo': backup file path. Ignored for list/detail/rename."
            )] string formxml = "",
            [Description("Validate against XSD before writing (default: true). Blocks if invalid."
            )] bool validate = true,
            [Description("Backup current FormXML before overwriting (default: true). Backup failure blocks update."
            )] bool backup = true,
            [Description("Publish after changes (default: true). Set false when batching."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'update', 'rename', 'undo'.");

            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            var normalizedAction = action.Trim().ToLowerInvariant();
            var entityName = entity_name.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(entityName, form_name, form_type, include_formxml),
                    "detail" => HandleDetail(entityName, form_id, form_name),
                    "update" => HandleUpdate(entityName, form_id, formxml, validate, backup, auto_publish),
                    "rename" => HandleRename(entityName, form_id, form_name, backup, auto_publish),
                    "undo" => HandleUndo(entityName, form_id, formxml, validate, auto_publish),
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

        private CallToolResult HandleDetail(string entityName, string formId, string formName)
        {
            if (string.IsNullOrWhiteSpace(formId) && string.IsNullOrWhiteSpace(formName))
                return ErrorResult("Error: form_id or form_name is required for 'detail' action.");

            if (!string.IsNullOrWhiteSpace(formId))
            {
                if (!Guid.TryParse(formId.Trim(), out var id))
                    return ErrorResult($"Error: '{formId}' is not a valid GUID.");
                return GetFormDetailResult(entityName, id);
            }

            // form_name provided, no form_id
            var nameFilter = formName.Trim();
            var query = BuildListQuery(entityName, 0, includeFormXml: false);
            var escapedName = nameFilter.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");

            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
                return ErrorResult($"Error: No form found matching name '{nameFilter}' for entity '{entityName}'.");

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
                return ErrorResult($"Error: No form found with ID '{formId}'.");

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
            string formxml, bool validate, bool backup, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return ErrorResult("Error: form_id is required for 'update' action.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return ErrorResult($"Error: '{formId}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(formxml))
                return ErrorResult("Error: formxml is required for 'update' action.");

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
            var newFormXml = StripXmlDeclaration(formxml.Trim());

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
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[FormUpdate] BLOCKED — Validation failed");
                    sb.AppendLine($"FormId: {id}");
                    sb.AppendLine($"Errors: {errors.Count}");
                    foreach (var error in errors)
                        sb.AppendLine($"- {error}");
                    if (warnings.Count > 0)
                    {
                        sb.AppendLine($"Warnings: {warnings.Count}");
                        foreach (var warning in warnings)
                            sb.AppendLine($"- {warning}");
                    }
                    if (backupPath != null)
                        sb.AppendLine($"Backup: saved (no changes made) — {backupPath}");
                    else
                        sb.AppendLine($"Backup: not needed (no changes made)");
                    sb.AppendLine($"Tip: Fix the FormXML errors above and retry. Refer to schema://formxml for valid structure.");

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
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(blockedResult)
                    };
                }
            }

            // Step 4: Update form record in Dataverse
            var update = new Entity("systemform", id);
            update["formxml"] = newFormXml;
            if (_options.DryRun)
                return DryRunResult($"Would UPDATE FormXML for form '{formName}' ({id}) on entity '{entityName}'.");
            _serviceClient.Update(update);

            // Step 5: Publish entity
            var published = false;
            if (auto_publish)
            {
                try
                {
                    var publishRequest = new PublishXmlRequest
                    {
                        ParameterXml = $"<importexportxml><entities><entity>{objectTypeCode}</entity></entities></importexportxml>"
                    };
                    _serviceClient.Execute(publishRequest);
                    published = true;
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
            bool backup, bool auto_publish)
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
                return DryRunResult($"Would RENAME form '{oldName}' to '{formName}' ({id}) on entity '{entityName}'.");
            _serviceClient.Update(update);

            // Step 5: Publish
            var published = false;
            string publishError = null;
            if (auto_publish)
            {
                try
                {
                    _serviceClient.Execute(new PublishXmlRequest
                    {
                        ParameterXml = $"<importexportxml><entities><entity>{objectTypeCode}</entity></entities></importexportxml>"
                    });
                    published = true;
                }
                catch (Exception ex)
                {
                    publishError = ex.Message;
                }
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

            var status = published || !auto_publish ? "renamed" : "renamed_publish_failed";

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
            string backupFilePath, bool validate, bool auto_publish)
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
                    sb.AppendLine($"Tip: The backup file may be corrupted. Set validate=false to force restore (not recommended).");

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
                return DryRunResult($"Would RESTORE form '{formName}' ({id}) from backup on entity '{entityName}'.");
            _serviceClient.Update(update);

            // Step 5: Publish
            var published = false;
            if (auto_publish)
            {
                try
                {
                    _serviceClient.Execute(new PublishXmlRequest
                    {
                        ParameterXml = $"<importexportxml><entities><entity>{objectTypeCode}</entity></entities></importexportxml>"
                    });
                    published = true;
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
            }

            // Step 6: Return success
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[FormUndo] {entityName} — {formName}");
                sb.AppendLine($"FormId: {id}");
                sb.AppendLine($"Status: Restored successfully");
                sb.AppendLine($"RestoredFrom: {backupFilePath}");
                sb.AppendLine($"Validated: {(validate ? "yes" : "skipped")}");
                sb.AppendLine($"Published: {(published ? "yes" : "no")}");
                if (validationWarnings?.Count > 0)
                {
                    sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                    foreach (var w in validationWarnings)
                        sb.AppendLine($"  - {w}");
                }

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
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

        private static CallToolResult TextResult(string text) => new()
        {
            Content = [new TextContentBlock { Text = text }]
        };

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

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

        private static string SaveBackup(string entityName, Guid formId, string formName, string currentFormXml)
        {
            var workingDir = Directory.GetCurrentDirectory();
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "forms");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{entityName}_{formId:N}_{timestamp}.formxml.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var backupData = new FormBackup
            {
                Entity = entityName,
                FormId = formId.ToString(),
                FormName = formName,
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                FormXml = PrettyPrintXml(currentFormXml)
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true
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
