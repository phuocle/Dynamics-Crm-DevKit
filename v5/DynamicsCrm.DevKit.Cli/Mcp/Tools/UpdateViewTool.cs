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
using System.Xml.Linq;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpdateViewTool
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedLayoutSchemaSet;
        private static XmlSchemaSet _cachedFetchSchemaSet;
        private static readonly object _layoutSchemaLock = new();
        private static readonly object _fetchSchemaLock = new();

        public UpdateViewTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "update_view", Title = "Update a view's LayoutXML/FetchXML with backup, sync validation & publish",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(UpdateViewResult)),
        Description(
            "Update a Dataverse view's LayoutXML and/or FetchXML with automatic backup, sync validation, " +
            "and publishing. This is the safe write companion to get_views (read).\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): Entity logical name (e.g., 'account'). Needed for backup and publishing.\n" +
            "- view_id (required): GUID of the view. Use get_views to find view IDs first.\n" +
            "- layoutxml (required): The new LayoutXML content defining column order and widths.\n" +
            "- fetchxml: The new FetchXML content. Leave empty to keep existing FetchXML unchanged.\n" +
            "- validate: Validate XMLs and check FetchXML<>LayoutXML sync (default: true).\n" +
            "- backup: Save current XMLs to local backup before overwriting (default: true).\n" +
            "- auto_publish: Publish the entity after update (default: true).\n\n" +

            "RETURNS:\n" +
            "- Update status (success/blocked/error)\n" +
            "- Sync validation results\n" +
            "- Backup file paths (for rollback)\n" +
            "- Publish status\n\n" +

            "WORKFLOW (MUST follow this order):\n" +
            "1. Call get_views with view_id to READ the current FetchXML + LayoutXML\n" +
            "2. Modify the XMLs as needed (follow docs://instructions_for_views rules)\n" +
            "3. Call update_view with the modified XMLs\n" +
            "4. Tool auto-handles: backup > validate > sync-check > update > publish\n" +
            "5. If something breaks: use the backup file paths from the response to rollback\n\n" +

            "CRITICAL SYNC RULE:\n" +
            "A view has TWO XML parts that MUST stay in sync:\n" +
            "- Every <attribute name=\"X\"> in FetchXML MUST have a <cell name=\"X\"> in LayoutXML\n" +
            "- Every <cell name=\"X\"> in LayoutXML MUST have an <attribute name=\"X\"> in FetchXML\n" +
            "- The tool validates this automatically and BLOCKS the update if out of sync\n\n" +

            "WHEN TO USE:\n" +
            "- After reading a view with get_views and making modifications\n" +
            "- To add/remove/reorder columns in a view\n" +
            "- To change view filters or sorting\n" +
            "- To adjust column widths\n\n" +

            "WHEN NOT TO USE:\n" +
            "- To read views (use get_views instead)\n" +
            "- To create a NEW view (future create_view tool)\n" +
            "- To rename a view (use execute_webapi: PATCH /savedqueries({id}) with {\"name\": \"New Name\"})\n\n" +

            "SAFETY:\n" +
            "- Auto-backup saves current FetchXML + LayoutXML before ANY modification\n" +
            "- Sync validation blocks mismatched FetchXML/LayoutXML from being written\n" +
            "- XSD validation blocks structurally invalid XML\n" +
            "- Rollback instructions included in every success response\n" +
            "- If backup=true and backup fails, the update is BLOCKED (fail-safe)\n\n" +

            "TIPS:\n" +
            "- Always read the current view first with get_views to understand the structure\n" +
            "- Read docs://instructions_for_views for sync rules and best practices\n" +
            "- The <row id=\"X\"> attribute in LayoutXML must be the primary key field (e.g., accountid)\n" +
            "- The <grid jump=\"X\"> attribute is the clickable link column\n" +
            "- Standard column widths: 100 (narrow), 150 (medium), 200 (wide), 300 (extra wide)\n" +
            "- For related table columns: use entityalias.columnname in LayoutXML <cell name=\"alias.column\">, " +
            "where alias matches the 'alias' attribute on <link-entity> in FetchXML\n" +
            "- If FetchXML has <order attribute=\"X\">, that column MUST also be in LayoutXML cells\n" +
            "- For related entity columns, use <link-entity link-type='outer'> with a unique alias\n" +
            "- Set auto_publish=false when making multiple changes, then call publish_customizations once\n" +
            "- Backup files are at: .devkit/backups/views/{entity}_{viewid}_{timestamp}.{type}.bak")]
        public CallToolResult update_view(
            [Description(
                "Entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_entities_metadata first."
            )] string entity_name,
            [Description(
                "GUID of the view to update. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use get_views to find valid view IDs."
            )] string view_id,
            [Description(
                "The new LayoutXML content defining column order and widths in the grid. " +
                "Must be valid XML. The tool will strip any XML declaration before writing."
            )] string layoutxml,
            [Description(
                "The new FetchXML content. Leave empty to keep existing FetchXML unchanged. " +
                "If provided, must be valid XML. The tool will strip any XML declaration before writing."
            )] string fetchxml = "",
            [Description(
                "Validate LayoutXML/FetchXML and check sync between them (default: true). " +
                "Blocks update if invalid. Set false only if you've already validated."
            )] bool validate = true,
            [Description(
                "Save current FetchXML + LayoutXML to local backup before overwriting (default: true). " +
                "Strongly recommended to keep true. If backup fails, update is BLOCKED (fail-safe)."
            )] bool backup = true,
            [Description(
                "Publish the entity after update (default: true). " +
                "Set false if batching multiple changes, then call publish_customizations once."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(view_id))
                return ErrorResult("Error: view_id is required.");

            if (!Guid.TryParse(view_id.Trim(), out var viewId))
                return ErrorResult($"Error: '{view_id}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(layoutxml))
                return ErrorResult("Error: layoutxml is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();
            var newLayoutXml = StripXmlDeclaration(layoutxml.Trim());
            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml) ? null : StripXmlDeclaration(fetchxml.Trim());

            try
            {
                // Step 1: Retrieve current view
                var currentView = RetrieveView(viewId);
                if (currentView == null)
                    return ErrorResult(
                        $"[Error] View not found\n" +
                        $"ViewId: {viewId}\n" +
                        $"Tip: Use get_views with entity_name='{entityName}' to find valid view IDs");

                var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
                var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
                var viewName = currentView.GetAttributeValue<string>("name") ?? "";
                var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

                // Determine the effective FetchXML for sync validation
                var effectiveFetchXml = newFetchXml ?? currentFetchXml;

                // Step 2: Backup current XMLs
                string fetchBackupPath = null;
                string layoutBackupPath = null;
                if (backup)
                {
                    try
                    {
                        (fetchBackupPath, layoutBackupPath) = SaveBackup(entityName, viewId, viewName, currentFetchXml, currentLayoutXml);
                    }
                    catch (Exception ex)
                    {
                        return ErrorResult(
                            $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                            $"ViewId: {viewId}\n" +
                            $"Message: {ex.Message}\n" +
                            $"Tip: Fix the backup directory permissions or set backup=false (not recommended)");
                    }
                }

                // Step 3: Validate
                if (validate)
                {
                    var allErrors = new List<string>();
                    var allWarnings = new List<string>();

                    // 3a. Validate LayoutXML against XSD
                    var (layoutErrors, layoutWarnings) = ValidateLayoutXml(newLayoutXml);
                    allErrors.AddRange(layoutErrors);
                    allWarnings.AddRange(layoutWarnings);

                    // 3b. Validate FetchXML against XSD (if provided)
                    if (newFetchXml != null)
                    {
                        var (fetchErrors, fetchWarnings) = ValidateFetchXml(newFetchXml);
                        allErrors.AddRange(fetchErrors);
                        allWarnings.AddRange(fetchWarnings);
                    }

                    // 3c. Sync check: FetchXML attributes <-> LayoutXML cells
                    var syncErrors = ValidateSync(effectiveFetchXml, newLayoutXml);
                    allErrors.AddRange(syncErrors);

                    if (allErrors.Count > 0)
                    {
                        var sb = new StringBuilder(512);
                        sb.AppendLine($"[ViewUpdate] BLOCKED — Validation failed");
                        sb.AppendLine($"ViewId: {viewId}");
                        sb.AppendLine($"Errors: {allErrors.Count}");
                        foreach (var error in allErrors)
                            sb.AppendLine($"- {error}");
                        if (allWarnings.Count > 0)
                        {
                            sb.AppendLine($"Warnings: {allWarnings.Count}");
                            foreach (var warning in allWarnings)
                                sb.AppendLine($"- {warning}");
                        }
                        if (fetchBackupPath != null)
                            sb.AppendLine($"Backup: saved (no changes made)");
                        else
                            sb.AppendLine($"Backup: not needed (no changes made)");
                        sb.AppendLine($"Tip: Fix the errors above and retry. Refer to docs://instructions_for_views for rules.");

                        var allIssues = new List<string>(allErrors);
                        if (allWarnings.Count > 0) allIssues.AddRange(allWarnings);

                        var blockedResult = new UpdateViewResult
                        {
                            Entity = entityName,
                            ViewId = viewId.ToString(),
                            ViewName = viewName,
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            FetchXmlBackupPath = fetchBackupPath,
                            LayoutXmlBackupPath = layoutBackupPath,
                            Published = false
                        };
                        return new CallToolResult
                        {
                            Content = [new TextContentBlock { Text = sb.ToString() }],
                            StructuredContent = JsonSerializer.SerializeToElement(blockedResult)
                        };
                    }
                }

                // Step 4: Update view record in Dataverse
                var update = new Entity("savedquery", viewId);
                update["layoutxml"] = newLayoutXml;
                if (newFetchXml != null)
                    update["fetchxml"] = newFetchXml;
                _serviceClient.Update(update);

                // Step 5: Publish entity
                var published = false;
                if (auto_publish)
                {
                    try
                    {
                        var publishRequest = new PublishXmlRequest
                        {
                            ParameterXml = $"<importexportxml><entities><entity>{returnedTypeCode}</entity></entities></importexportxml>"
                        };
                        _serviceClient.Execute(publishRequest);
                        published = true;
                    }
                    catch (Exception ex)
                    {
                        var sb = BuildSuccessText(entityName, viewId, viewName, fetchBackupPath, layoutBackupPath,
                            validate, newFetchXml != null, false);
                        sb.AppendLine($"PublishError: {ex.Message}");
                        sb.AppendLine($"Tip: Call publish_customizations with entities='{returnedTypeCode}' to retry");
                        sb.AppendLine();
                        AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, viewId);

                        var partialResult = new UpdateViewResult
                        {
                            Entity = entityName,
                            ViewId = viewId.ToString(),
                            ViewName = viewName,
                            Status = "updated_publish_failed",
                            Validated = validate,
                            UpdatedParts = newFetchXml != null ? "LayoutXML + FetchXML" : "LayoutXML only",
                            FetchXmlBackupPath = fetchBackupPath,
                            LayoutXmlBackupPath = layoutBackupPath,
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
                    var sb = BuildSuccessText(entityName, viewId, viewName, fetchBackupPath, layoutBackupPath,
                        validate, newFetchXml != null, published);
                    sb.AppendLine();
                    AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, viewId);

                    var structured = new UpdateViewResult
                    {
                        Entity = entityName,
                        ViewId = viewId.ToString(),
                        ViewName = viewName,
                        Status = "updated",
                        Validated = validate,
                        UpdatedParts = newFetchXml != null ? "LayoutXML + FetchXML" : "LayoutXML only",
                        FetchXmlBackupPath = fetchBackupPath,
                        LayoutXmlBackupPath = layoutBackupPath,
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
                    $"[Error] View update failed\n" +
                    $"ViewId: {viewId}\n" +
                    $"Message: {ex.Message}\n" +
                    $"Tip: Use get_views with entity_name='{entityName}' to verify the view exists");
            }
        }

        private Entity RetrieveView(Guid viewId)
        {
            try
            {
                return _serviceClient.Retrieve("savedquery", viewId,
                    new ColumnSet("fetchxml", "layoutxml", "name", "returnedtypecode", "querytype"));
            }
            catch
            {
                return null;
            }
        }

        private static (string FetchBackupPath, string LayoutBackupPath) SaveBackup(
            string entityName, Guid viewId, string viewName, string currentFetchXml, string currentLayoutXml)
        {
            var workingDir = Directory.GetCurrentDirectory();
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "views");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var fetchFile = $"{entityName}_{viewId:N}_{timestamp}.fetchxml.bak";
            var layoutFile = $"{entityName}_{viewId:N}_{timestamp}.layoutxml.bak";
            var fetchBackupPath = Path.Combine(backupDir, fetchFile);
            var layoutBackupPath = Path.Combine(backupDir, layoutFile);

            // Write FetchXML backup
            var sbFetch = new StringBuilder(currentFetchXml.Length + 256);
            sbFetch.AppendLine($"<!-- Backup: {viewName} ({entityName}) -->");
            sbFetch.AppendLine($"<!-- ViewId: {viewId} -->");
            sbFetch.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sbFetch.AppendLine($"<!-- To restore: call update_view with this file's content (excluding comments) -->");
            sbFetch.AppendLine();
            sbFetch.Append(PrettyPrintXml(currentFetchXml));
            File.WriteAllText(fetchBackupPath, sbFetch.ToString(), Encoding.UTF8);

            // Write LayoutXML backup
            var sbLayout = new StringBuilder(currentLayoutXml.Length + 256);
            sbLayout.AppendLine($"<!-- Backup: {viewName} ({entityName}) -->");
            sbLayout.AppendLine($"<!-- ViewId: {viewId} -->");
            sbLayout.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sbLayout.AppendLine($"<!-- To restore: call update_view with this file's content (excluding comments) -->");
            sbLayout.AppendLine();
            sbLayout.Append(PrettyPrintXml(currentLayoutXml));
            File.WriteAllText(layoutBackupPath, sbLayout.ToString(), Encoding.UTF8);

            return (fetchBackupPath, layoutBackupPath);
        }

        private static List<string> ValidateSync(string fetchXml, string layoutXml)
        {
            var errors = new List<string>();

            try
            {
                var fetchDoc = XDocument.Parse(fetchXml);
                var layoutDoc = XDocument.Parse(layoutXml);

                // Extract attribute names from FetchXML (only from main entity, not link-entity)
                var mainEntity = fetchDoc.Root?.Element("entity");
                var fetchAttributes = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                if (mainEntity != null)
                {
                    foreach (var attr in mainEntity.Elements("attribute"))
                    {
                        var name = attr.Attribute("name")?.Value;
                        if (name != null)
                            fetchAttributes.Add(name);
                    }
                }

                // Extract cell names from LayoutXML
                var layoutCells = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                foreach (var cell in layoutDoc.Descendants("cell"))
                {
                    var name = cell.Attribute("name")?.Value;
                    if (name != null)
                        layoutCells.Add(name);
                }

                // Get the primary key from LayoutXML <row id="..."> — exclude from sync check
                var rowId = layoutDoc.Descendants("row")
                    .Select(r => r.Attribute("id")?.Value)
                    .FirstOrDefault();

                // Check FetchXML attributes not in LayoutXML
                foreach (var attr in fetchAttributes)
                {
                    if (string.Equals(attr, rowId, StringComparison.OrdinalIgnoreCase))
                        continue;
                    if (!layoutCells.Contains(attr))
                        errors.Add($"Sync: '{attr}' in FetchXML has no matching <cell> in LayoutXML — column will be fetched but not displayed");
                }

                // Check LayoutXML cells not in FetchXML
                foreach (var cell in layoutCells)
                {
                    if (string.Equals(cell, rowId, StringComparison.OrdinalIgnoreCase))
                        continue;
                    // Skip cells with dots (related entity columns like alias.columnname)
                    if (cell.Contains("."))
                        continue;
                    if (!fetchAttributes.Contains(cell))
                        errors.Add($"Sync: '{cell}' in LayoutXML has no matching <attribute> in FetchXML — column header shows but data is empty");
                }

                // Check <order> attribute columns exist in LayoutXML
                if (mainEntity != null)
                {
                    foreach (var order in mainEntity.Elements("order"))
                    {
                        var orderAttr = order.Attribute("attribute")?.Value;
                        if (orderAttr != null && !layoutCells.Contains(orderAttr) &&
                            !string.Equals(orderAttr, rowId, StringComparison.OrdinalIgnoreCase))
                        {
                            errors.Add($"Sync: <order attribute=\"{orderAttr}\"> in FetchXML but '{orderAttr}' has no <cell> in LayoutXML — sort column must be visible");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                errors.Add($"Sync: Failed to parse XMLs for sync check — {ex.Message}");
            }

            return errors;
        }

        private static (List<string> Errors, List<string> Warnings) ValidateLayoutXml(string layoutXml)
        {
            return ValidateXml(layoutXml, GetLayoutSchemaSet(), "LayoutXML");
        }

        private static (List<string> Errors, List<string> Warnings) ValidateFetchXml(string fetchXml)
        {
            return ValidateXml(fetchXml, GetFetchSchemaSet(), "FetchXML");
        }

        private static (List<string> Errors, List<string> Warnings) ValidateXml(
            string xml, XmlSchemaSet schemaSet, string xmlType)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
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
                        warnings.Add($"{xmlType} Warning: {location}{message}");
                    }
                    else if (e.Severity == XmlSeverityType.Warning)
                    {
                        warnings.Add($"{xmlType} Warning: {location}{message}");
                    }
                    else
                    {
                        errors.Add($"{xmlType} Error: {location}{message}");
                    }
                };

                using var stringReader = new StringReader(xml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                while (xmlReader.Read()) { }
            }
            catch (XmlException xmlEx)
            {
                errors.Add($"{xmlType} Error: XML Parsing Error at Line {xmlEx.LineNumber}, Col {xmlEx.LinePosition}: {xmlEx.Message}");
            }
            catch (Exception ex)
            {
                errors.Add($"{xmlType} Error: Validation failed: {ex.Message}");
            }

            return (errors, warnings);
        }

        private static bool IsSchemaEvolutionError(string message)
        {
            return message.Contains("attribute is not declared") ||
                   message.Contains("is not declared");
        }

        private static XmlSchemaSet GetLayoutSchemaSet()
        {
            if (_cachedLayoutSchemaSet != null) return _cachedLayoutSchemaSet;

            lock (_layoutSchemaLock)
            {
                if (_cachedLayoutSchemaSet != null) return _cachedLayoutSchemaSet;

                var schemas = LoadSchema("LayoutXml.xsd");
                if (schemas != null && schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedLayoutSchemaSet = schemas;
                }

                return _cachedLayoutSchemaSet;
            }
        }

        private static XmlSchemaSet GetFetchSchemaSet()
        {
            if (_cachedFetchSchemaSet != null) return _cachedFetchSchemaSet;

            lock (_fetchSchemaLock)
            {
                if (_cachedFetchSchemaSet != null) return _cachedFetchSchemaSet;

                var schemas = LoadSchema("Fetch.xsd");
                if (schemas != null && schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedFetchSchemaSet = schemas;
                }

                return _cachedFetchSchemaSet;
            }
        }

        private static XmlSchemaSet LoadSchema(string schemaFileName)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var resourceNames = assembly.GetManifestResourceNames();
            var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith(schemaFileName));

            if (resourceName == null) return null;

            using var stream = assembly.GetManifestResourceStream(resourceName);
            if (stream == null) return null;

            var schema = XmlSchema.Read(stream, null);
            if (schema == null) return null;

            var schemas = new XmlSchemaSet();
            schemas.Add(schema);
            return schemas;
        }

        private static StringBuilder BuildSuccessText(
            string entityName, Guid viewId, string viewName,
            string fetchBackupPath, string layoutBackupPath,
            bool validated, bool fetchXmlUpdated, bool published)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[ViewUpdate] {entityName} — {viewName}");
            sb.AppendLine($"ViewId: {viewId}");
            sb.AppendLine($"Status: Updated successfully");
            sb.AppendLine($"Validated: {(validated ? "yes (sync OK)" : "skipped")}");
            sb.AppendLine($"Updated: {(fetchXmlUpdated ? "LayoutXML + FetchXML" : "LayoutXML only")}");
            sb.AppendLine($"Backup:");
            sb.AppendLine($"  {fetchBackupPath ?? "skipped"}");
            sb.AppendLine($"  {layoutBackupPath ?? "skipped"}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            return sb;
        }

        private static void AppendRollbackInfo(StringBuilder sb, string fetchBackupPath, string layoutBackupPath, Guid viewId)
        {
            sb.AppendLine("To rollback this change:");
            if (fetchBackupPath != null && layoutBackupPath != null)
            {
                sb.AppendLine($"1. Read backup files from .devkit/backups/views/");
                sb.AppendLine($"2. Remove the comment lines at the top (<!-- ... -->)");
                sb.AppendLine($"3. Call update_view with the backup contents as layoutxml + fetchxml");
            }
            else
            {
                sb.AppendLine($"1. Retrieve the previous XMLs (no backup was created)");
                sb.AppendLine($"2. Call update_view with view_id='{viewId}' and the original layoutxml + fetchxml");
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
