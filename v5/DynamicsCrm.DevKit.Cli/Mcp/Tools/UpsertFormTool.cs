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
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpsertFormTool
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        public UpsertFormTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "upsert_form", Title = "Update, rename, or undo a form with backup, validation & publish",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertFormResult)),
        Description(
            "Update, rename, or undo a Dataverse form with auto-backup, XSD validation, and publishing.\n\n" +

            "THREE ACTIONS:\n" +
            "- 'update': Modify FormXML. Requires form_id + formxml\n" +
            "- 'rename': Change display name. Requires form_id + form_name\n" +
            "- 'undo': Restore from backup. Requires form_id + formxml (= backup file path)\n\n" +

            "WORKFLOW: get_forms (read) → modify FormXML (follow docs://instructions_for_formxml) → upsert_form (write)\n" +
            "Tool auto-handles: backup → validate XSD → update → publish. Undo path in every response.\n\n" +

            "SAFETY: auto-backup before changes, XSD blocks invalid XML, backup failure blocks update.\n\n" +

            "TIPS:\n" +
            "- Read schema://formxml for XSD. Read docs://instructions_for_formxml for rules\n" +
            "- Set auto_publish=false when batching, then call publish_customizations once")]
        public CallToolResult upsert_form(
            [Description("'update' (default), 'rename', or 'undo'.")] string action = "update",
            [Description("Entity logical name (e.g., 'account').")] string entity_name = "",
            [Description("Form GUID. Use get_forms to find IDs.")] string form_id = "",
            [Description("New name. Required for 'rename' only.")] string form_name = "",
            [Description("For 'update': FormXML. For 'undo': backup file path. Ignored for 'rename'.")] string formxml = "",
            [Description("Validate against XSD before writing (default: true). Blocks if invalid.")] bool validate = true,
            [Description("Backup current FormXML before overwriting (default: true). Backup failure blocks update.")] bool backup = true,
            [Description("Publish after changes (default: true). Set false when batching.")] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(form_id))
                return ErrorResult("Error: form_id is required.");

            if (!Guid.TryParse(form_id.Trim(), out var formId))
                return ErrorResult($"Error: '{form_id}' is not a valid GUID.");

            var entityName = entity_name.Trim().ToLowerInvariant();
            var actionName = (action ?? "update").Trim().ToLowerInvariant();

            try
            {
                switch (actionName)
                {
                    case "rename":
                        return RenameForm(entityName, formId, form_name, backup, auto_publish);

                    case "undo":
                        if (string.IsNullOrWhiteSpace(formxml))
                            return ErrorResult("Error: formxml (backup file path) is required for 'undo' action.");
                        return UndoForm(entityName, formId, formxml.Trim(), validate, auto_publish);

                    case "update":
                        if (string.IsNullOrWhiteSpace(formxml))
                            return ErrorResult("Error: formxml is required for 'update' action.");
                        return UpdateFormXml(entityName, formId, formxml, validate, backup, auto_publish);

                    default:
                        return ErrorResult($"Error: Invalid action '{actionName}'. Must be 'update', 'rename', or 'undo'.");
                }
            }
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] Form {actionName} failed\n" +
                    $"FormId: {formId}\n" +
                    $"Message: {ex.Message}");
            }
        }

        // ── Action: update ─────────────────────────────────────────────────

        private CallToolResult UpdateFormXml(string entityName, Guid formId,
            string formxml, bool validate, bool backup, bool auto_publish)
        {
            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(formId);
            if (currentForm == null)
                return ErrorResult(
                    $"[Error] Form not found\n" +
                    $"FormId: {formId}\n" +
                    $"Tip: Use get_forms with entity_name='{entityName}' to find valid form IDs");

            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {formId}\n" +
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
                    backupPath = SaveBackup(entityName, formId, formName, currentFormXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                        $"FormId: {formId}\n" +
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
                    sb.AppendLine($"FormId: {formId}");
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
                        FormId = formId.ToString(),
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
            var update = new Entity("systemform", formId);
            update["formxml"] = newFormXml;
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
                    var sb = BuildSuccessText(entityName, formId, formName, backupPath, validate, false);
                    sb.AppendLine($"PublishError: {ex.Message}");
                    sb.AppendLine($"Tip: Call publish with entities='{objectTypeCode}' to retry");
                    sb.AppendLine();
                    AppendRollbackInfo(sb, backupPath, formId);

                    var partialResult = new UpsertFormResult
                    {
                        Action = "updated",
                        Entity = entityName,
                        FormId = formId.ToString(),
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
                var sb = BuildSuccessText(entityName, formId, formName, backupPath, validate, published);
                if (validationWarnings?.Count > 0)
                {
                    sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                    foreach (var w in validationWarnings)
                        sb.AppendLine($"  - {w}");
                }
                sb.AppendLine();
                AppendRollbackInfo(sb, backupPath, formId);

                var structured = new UpsertFormResult
                {
                    Action = "updated",
                    Entity = entityName,
                    FormId = formId.ToString(),
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

        // ── Action: rename ─────────────────────────────────────────────────

        private CallToolResult RenameForm(string entityName, Guid formId, string formName,
            bool backup, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(formName))
                return ErrorResult("Error: form_name is required for 'rename' action.");

            formName = formName.Trim();

            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(formId);
            if (currentForm == null)
                return ErrorResult(
                    $"[Error] Form not found\n" +
                    $"FormId: {formId}\n" +
                    $"Tip: Use get_forms with entity_name='{entityName}' to find valid form IDs");

            var oldName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;
            var formType = currentForm.GetAttributeValue<OptionSetValue>("type")?.Value;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {formId}\n" +
                    $"FormEntity: {objectTypeCode}\n" +
                    $"ProvidedEntity: {entityName}\n" +
                    $"Tip: This form belongs to '{objectTypeCode}', not '{entityName}'");

            // Step 2: Check for duplicate name (same entity + same form type, excluding current form)
            var duplicate = FindFormByName(objectTypeCode, formName, formType, excludeFormId: formId);
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
                    backupPath = SaveBackup(entityName, formId, oldName, currentFormXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — rename BLOCKED (fail-safe)\n" +
                        $"FormId: {formId}\n" +
                        $"Message: {ex.Message}");
                }
            }

            // Step 4: Rename
            var update = new Entity("systemform", formId)
            {
                ["name"] = formName
            };
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
            sb.AppendLine($"FormId: {formId}");
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
            AppendRollbackInfo(sb, backupPath, formId);

            var status = published || !auto_publish ? "renamed" : "renamed_publish_failed";

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertFormResult
                {
                    Action = "renamed",
                    Entity = entityName,
                    FormId = formId.ToString(),
                    FormName = formName,
                    Status = status,
                    Validated = false,
                    BackupPath = backupPath,
                    Published = published
                })
            };
        }

        // ── Action: undo ──────────────────────────────────────────────────

        private CallToolResult UndoForm(string entityName, Guid formId,
            string backupFilePath, bool validate, bool auto_publish)
        {
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
            var currentForm = RetrieveForm(formId);
            if (currentForm == null)
                return ErrorResult(
                    $"[Error] Form not found\n" +
                    $"FormId: {formId}\n" +
                    $"Tip: Use get_forms with entity_name='{entityName}' to find valid form IDs");

            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            // Validate entity name matches the form's actual entity
            if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return ErrorResult(
                    $"[Error] Entity mismatch\n" +
                    $"FormId: {formId}\n" +
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
                    sb.AppendLine($"FormId: {formId}");
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
                            FormId = formId.ToString(),
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
            var update = new Entity("systemform", formId);
            update["formxml"] = restoredFormXml;
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
                    sb.AppendLine($"FormId: {formId}");
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
                            FormId = formId.ToString(),
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
                sb.AppendLine($"FormId: {formId}");
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
                        FormId = formId.ToString(),
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

        // ── Helpers ────────────────────────────────────────────────────────

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

        /// <summary>
        /// Validates FormXML against XSD schema using XmlReader-based validation
        /// for better error reporting with line/position info.
        /// Loads FormXml.xsd + Ribbon*.xsd schemas (FormXML can contain ribbon definitions).
        /// Note: Undeclared attributes/elements are treated as warnings (not blocking errors)
        /// because Dataverse evolves faster than the embedded XSD schemas.
        /// </summary>
        private static (List<string> Errors, List<string> Warnings) ValidateFormXml(string formXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetSchemaSet();
                if (schemaSet == null || schemaSet.Count == 0)
                {
                    // Schema not available — skip validation gracefully
                    return (errors, warnings);
                }

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

                    // Undeclared attributes/elements are common in modern Dataverse FormXML
                    // (e.g. headerdensity, showOwnerFields) — treat as warnings, not errors
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

        /// <summary>
        /// Detects XSD validation errors caused by Dataverse schema evolution.
        /// These are attributes or elements that exist in modern Dataverse but are
        /// not yet declared in the embedded XSD schemas. They should be treated
        /// as warnings rather than blocking errors.
        /// </summary>
        private static bool IsSchemaEvolutionError(string message)
        {
            // "The 'headerdensity' attribute is not declared."
            // "The element 'xyz' has invalid child element 'abc'."
            return message.Contains("attribute is not declared") ||
                   message.Contains("is not declared");
        }

        /// <summary>
        /// Loads and caches the XSD schema set: FormXml.xsd + Ribbon*.xsd.
        /// Following AppMaker's pattern of loading all related schemas together
        /// since FormXML can reference Ribbon definitions.
        /// </summary>
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
                sb.AppendLine($"  Call upsert_form with action='undo', form_id='{formId}', formxml='{backupPath}'");
            }
            else
            {
                sb.AppendLine($"  1. Retrieve the previous FormXML (no backup was created)");
                sb.AppendLine($"  2. Call upsert_form with form_id='{formId}' and the original formxml");
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

        private static string PrettyPrintXml(string xml)
        {
            try
            {
                var doc = System.Xml.Linq.XDocument.Parse(xml);
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

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
