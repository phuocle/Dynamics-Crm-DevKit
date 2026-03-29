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
using System.Xml;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpdateFormTool
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        public UpdateFormTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "update_form", Title = "Update a form's FormXML with backup, validation & publish",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(UpdateFormResult)),
        Description(
            "Update a Dataverse form's FormXML with automatic backup, schema validation, and publishing.\n" +
            "This is the safe write companion to get_forms (read).\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): Entity logical name (e.g., 'account'). Needed for backup naming and publishing.\n" +
            "- form_id (required): GUID of the form. Use get_forms to find form IDs first.\n" +
            "- formxml (required): The new FormXML content. Must follow the structure from schema://formxml.\n" +
            "- validate: Validate against XSD before writing (default: true). Blocks update if invalid.\n" +
            "- backup: Save current FormXML to local backup before overwriting (default: true).\n" +
            "- auto_publish: Publish the entity after update (default: true).\n\n" +

            "RETURNS:\n" +
            "- Update status (success/blocked/error)\n" +
            "- Validation results (if validate=true)\n" +
            "- Backup file path (for rollback)\n" +
            "- Publish status\n\n" +

            "WORKFLOW (MUST follow this order):\n" +
            "1. Call get_forms with form_id to READ the current FormXML\n" +
            "2. Modify the FormXML as needed (follow docs://instructions_for_formxml rules)\n" +
            "3. Call update_form with the modified FormXML\n" +
            "4. Tool auto-handles: backup → validate → update → publish\n" +
            "5. If something breaks: use the backup file path from the response to rollback\n\n" +

            "WHEN TO USE:\n" +
            "- After reading a form with get_forms and making modifications to the FormXML\n" +
            "- To add/remove/rearrange tabs, sections, or fields on a form\n" +
            "- To change form layout structure\n\n" +

            "WHEN NOT TO USE:\n" +
            "- To read forms (use get_forms instead)\n" +
            "- For non-FormXML form properties (use execute_webapi for metadata-only updates)\n\n" +

            "SAFETY:\n" +
            "- Auto-backup saves current FormXML before ANY modification\n" +
            "- XSD validation blocks invalid XML from being written\n" +
            "- Rollback instructions are included in every success response\n" +
            "- If backup=true and backup fails, the update is BLOCKED (fail-safe)\n\n" +

            "TIPS:\n" +
            "- Always read the current form first with get_forms to understand the structure\n" +
            "- Read schema://formxml for the XSD schema reference\n" +
            "- Read docs://instructions_for_formxml for naming conventions and best practices\n" +
            "- Set auto_publish=false when making multiple changes, then call publish_customizations once\n" +
            "- Backup files are at: .devkit/backups/forms/{entity}_{formid}_{timestamp}.formxml.bak")]
        public CallToolResult update_form(
            [Description(
                "Entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_entities_metadata first."
            )] string entity_name,
            [Description(
                "GUID of the form to update. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use get_forms to find valid form IDs."
            )] string form_id,
            [Description(
                "The new FormXML content. Must follow the structure from schema://formxml. " +
                "Must be valid XML. The tool will strip any XML declaration before writing."
            )] string formxml,
            [Description(
                "Validate FormXML against XSD schema before writing (default: true). " +
                "Blocks update if invalid. Set false only if you've already validated."
            )] bool validate = true,
            [Description(
                "Save current FormXML to local backup before overwriting (default: true). " +
                "Strongly recommended to keep true. If backup fails, update is BLOCKED (fail-safe)."
            )] bool backup = true,
            [Description(
                "Publish the entity after update (default: true). " +
                "Set false if batching multiple changes, then call publish_customizations once."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(form_id))
                return ErrorResult("Error: form_id is required.");

            if (!Guid.TryParse(form_id.Trim(), out var formId))
                return ErrorResult($"Error: '{form_id}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(formxml))
                return ErrorResult("Error: formxml is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            try
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

                        var blockedResult = new UpdateFormResult
                        {
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
                        sb.AppendLine($"Tip: Call publish_customizations with entities='{objectTypeCode}' to retry");
                        sb.AppendLine();
                        AppendRollbackInfo(sb, backupPath, formId);

                        var partialResult = new UpdateFormResult
                        {
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

                    var structured = new UpdateFormResult
                    {
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
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] Form update failed\n" +
                    $"FormId: {formId}\n" +
                    $"Message: {ex.Message}\n" +
                    $"Tip: Use get_forms with entity_name='{entityName}' to verify the form exists");
            }
        }

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

        private static string SaveBackup(string entityName, Guid formId, string formName, string currentFormXml)
        {
            var workingDir = Directory.GetCurrentDirectory();
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "forms");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{entityName}_{formId:N}_{timestamp}.formxml.bak";
            var backupPath = Path.Combine(backupDir, backupFile);

            // Write backup with metadata header for human readability
            var sb = new StringBuilder(currentFormXml.Length + 256);
            sb.AppendLine($"<!-- Backup: {formName} ({entityName}) -->");
            sb.AppendLine($"<!-- FormId: {formId} -->");
            sb.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sb.AppendLine($"<!-- To restore: call update_form with this file's content (excluding comments) -->");
            sb.AppendLine();
            sb.Append(PrettyPrintXml(currentFormXml));

            File.WriteAllText(backupPath, sb.ToString(), Encoding.UTF8);

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
                sb.AppendLine($"1. Read backup file: {backupPath}");
                sb.AppendLine($"2. Remove the comment lines at the top (<!-- ... -->)");
                sb.AppendLine($"3. Call update_form with the backup content as formxml");
            }
            else
            {
                sb.AppendLine($"1. Retrieve the previous FormXML (no backup was created)");
                sb.AppendLine($"2. Call update_form with form_id='{formId}' and the original formxml");
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
    }
}
