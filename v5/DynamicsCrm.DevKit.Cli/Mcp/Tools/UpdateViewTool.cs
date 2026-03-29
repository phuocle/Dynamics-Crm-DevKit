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

        [McpServerTool(Name = "update_view", Title = "Update, create, or rename a view with backup, sync validation & publish",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(UpdateViewResult)),
        Description(
            "Update, create, or rename a Dataverse view (saved query) with automatic backup, " +
            "sync validation, and publishing.\n\n" +

            "THREE ACTIONS (controlled by 'action' parameter):\n" +
            "- 'update' (default): Modify LayoutXML/FetchXML of an existing view. " +
            "Requires view_id + layoutxml.\n" +
            "- 'create': Create a new Public view. " +
            "Requires view_name + entity_name + layoutxml. view_id is ignored.\n" +
            "- 'rename': Change a view's display name. " +
            "Requires view_id + view_name + entity_name. layoutxml is ignored.\n\n" +

            "PARAMETERS:\n" +
            "- action: 'update' (default), 'create', or 'rename'.\n" +
            "- entity_name (required): Entity logical name (e.g., 'account').\n" +
            "- view_id: GUID of the view. Required for 'update' and 'rename'. Ignored for 'create'.\n" +
            "- view_name: Name for the view. Required for 'create' (new name) and 'rename' (new name). " +
            "Ignored for 'update'.\n" +
            "- layoutxml: LayoutXML content. Required for 'update' and 'create'. Ignored for 'rename'.\n" +
            "- fetchxml: FetchXML content. Optional for 'update' (empty = keep existing) and 'create' " +
            "(empty = auto-generate default). Ignored for 'rename'.\n" +
            "- validate: Validate XMLs and check FetchXML<>LayoutXML sync (default: true). " +
            "Applies to 'update' and 'create'.\n" +
            "- backup: Save current XMLs to local backup before overwriting (default: true). " +
            "Applies to 'update' and 'rename'.\n" +
            "- auto_publish: Publish the entity after changes (default: true).\n\n" +

            "WORKFLOW FOR 'update' (MUST follow this order):\n" +
            "1. Call get_views with view_id to READ the current FetchXML + LayoutXML\n" +
            "2. Modify the XMLs as needed (follow docs://instructions_for_views rules)\n" +
            "3. Call update_view with the modified XMLs\n" +
            "4. Tool auto-handles: backup > validate > sync-check > update > publish\n" +
            "5. If something breaks: use the backup file paths from the response to rollback\n\n" +

            "WORKFLOW FOR 'create':\n" +
            "1. Call get_entity_metadata to discover available columns\n" +
            "2. Build LayoutXML with desired columns and FetchXML with desired filters\n" +
            "3. Call update_view with action='create', view_name, layoutxml, and optionally fetchxml\n" +
            "4. Tool auto-handles: duplicate check > validate > sync-check > create > publish\n\n" +

            "WORKFLOW FOR 'rename':\n" +
            "1. Call get_views to find the view_id\n" +
            "2. Call update_view with action='rename', view_id, and view_name\n" +
            "3. Tool auto-handles: duplicate check > backup > rename > publish\n\n" +

            "CRITICAL SYNC RULE (applies to 'update' and 'create'):\n" +
            "A view has TWO XML parts that MUST stay in sync:\n" +
            "- Every <attribute name=\"X\"> in FetchXML MUST have a <cell name=\"X\"> in LayoutXML\n" +
            "- Every <cell name=\"X\"> in LayoutXML MUST have an <attribute name=\"X\"> in FetchXML\n" +
            "- The tool validates this automatically and BLOCKS the operation if out of sync\n\n" +

            "SAFETY:\n" +
            "- Auto-backup saves current FetchXML + LayoutXML before ANY modification (update/rename)\n" +
            "- Sync validation blocks mismatched FetchXML/LayoutXML from being written\n" +
            "- XSD validation blocks structurally invalid XML\n" +
            "- Duplicate name check for 'create' and 'rename' actions\n" +
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
                "Action to perform: 'update' (default), 'create' (new view), or 'rename' (change name). " +
                "For 'update': modifies LayoutXML/FetchXML of existing view (requires view_id + layoutxml). " +
                "For 'create': creates a new Public view (requires view_name + layoutxml; view_id is ignored). " +
                "For 'rename': changes the view name (requires view_id + view_name; layoutxml is ignored)."
            )] string action = "update",
            [Description(
                "Entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_entities_metadata first."
            )] string entity_name = "",
            [Description(
                "GUID of the view to update or rename. " +
                "Required for 'update' and 'rename' actions. Ignored for 'create'. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use get_views to find valid view IDs."
            )] string view_id = "",
            [Description(
                "Name for the view. Required for 'create' (new view name) and 'rename' (new name). " +
                "Ignored for 'update' action."
            )] string view_name = "",
            [Description(
                "The new LayoutXML content defining column order and widths in the grid. " +
                "Required for 'update' and 'create' actions. Ignored for 'rename'. " +
                "Must be valid XML. The tool will strip any XML declaration before writing."
            )] string layoutxml = "",
            [Description(
                "The new FetchXML content. " +
                "For 'update': leave empty to keep existing FetchXML unchanged. " +
                "For 'create': leave empty to auto-generate a default FetchXML for the entity. " +
                "Ignored for 'rename'. " +
                "If provided, must be valid XML. The tool will strip any XML declaration before writing."
            )] string fetchxml = "",
            [Description(
                "Validate LayoutXML/FetchXML and check sync between them (default: true). " +
                "Applies to 'update' and 'create' actions. " +
                "Blocks operation if invalid. Set false only if you've already validated."
            )] bool validate = true,
            [Description(
                "Save current XMLs to local backup before overwriting (default: true). " +
                "Applies to 'update' and 'rename' actions. " +
                "Strongly recommended to keep true. If backup fails, operation is BLOCKED (fail-safe)."
            )] bool backup = true,
            [Description(
                "Publish the entity after changes (default: true). " +
                "Set false if batching multiple changes, then call publish_customizations once."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            var entityName = entity_name.Trim().ToLowerInvariant();
            var actionName = (action ?? "update").Trim().ToLowerInvariant();

            try
            {
                switch (actionName)
                {
                    case "create":
                        return CreateView(entityName, view_name, layoutxml, fetchxml, validate, auto_publish);

                    case "rename":
                        if (string.IsNullOrWhiteSpace(view_id))
                            return ErrorResult("Error: view_id is required for 'rename' action.");
                        if (!Guid.TryParse(view_id.Trim(), out var renameId))
                            return ErrorResult($"Error: '{view_id}' is not a valid GUID.");
                        return RenameView(entityName, renameId, view_name, backup, auto_publish);

                    default: // "update"
                        if (string.IsNullOrWhiteSpace(view_id))
                            return ErrorResult("Error: view_id is required for 'update' action.");
                        if (!Guid.TryParse(view_id.Trim(), out var updateId))
                            return ErrorResult($"Error: '{view_id}' is not a valid GUID.");
                        if (string.IsNullOrWhiteSpace(layoutxml))
                            return ErrorResult("Error: layoutxml is required for 'update' action.");
                        return UpdateViewXml(entityName, updateId, layoutxml, fetchxml, validate, backup, auto_publish);
                }
            }
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] View {actionName} failed\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {ex.Message}");
            }
        }

        // ── Action: update ─────────────────────────────────────────────────

        private CallToolResult UpdateViewXml(string entityName, Guid viewId,
            string layoutxml, string fetchxml, bool validate, bool backup, bool auto_publish)
        {
            var newLayoutXml = StripXmlDeclaration(layoutxml.Trim());
            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml) ? null : StripXmlDeclaration(fetchxml.Trim());

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

                var (layoutErrors, layoutWarnings) = ValidateLayoutXml(newLayoutXml);
                allErrors.AddRange(layoutErrors);
                allWarnings.AddRange(layoutWarnings);

                if (newFetchXml != null)
                {
                    var (fetchErrors, fetchWarnings) = ValidateFetchXml(newFetchXml);
                    allErrors.AddRange(fetchErrors);
                    allWarnings.AddRange(fetchWarnings);
                }

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
                    sb.AppendLine(fetchBackupPath != null ? $"Backup: saved (no changes made)" : $"Backup: not needed (no changes made)");
                    sb.AppendLine($"Tip: Fix the errors above and retry. Refer to docs://instructions_for_views for rules.");

                    var allIssues = new List<string>(allErrors);
                    if (allWarnings.Count > 0) allIssues.AddRange(allWarnings);

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new UpdateViewResult
                        {
                            Action = "updated",
                            Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                            Status = "blocked_validation", Validated = true, ValidationErrors = allIssues,
                            FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
                        })
                    };
                }
            }

            // Step 4: Update view record
            var update = new Entity("savedquery", viewId);
            update["layoutxml"] = newLayoutXml;
            if (newFetchXml != null)
                update["fetchxml"] = newFetchXml;
            _serviceClient.Update(update);

            // Step 5: Publish
            var published = TryPublish(returnedTypeCode, auto_publish);

            if (auto_publish && !published)
            {
                var sb = BuildSuccessText(entityName, viewId, viewName, fetchBackupPath, layoutBackupPath,
                    validate, newFetchXml != null, false);
                sb.AppendLine($"Tip: Call publish_customizations with entities='{returnedTypeCode}' to retry");
                sb.AppendLine();
                AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, viewId);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpdateViewResult
                    {
                        Action = "updated", Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                        Status = "updated_publish_failed", Validated = validate,
                        UpdatedParts = newFetchXml != null ? "LayoutXML + FetchXML" : "LayoutXML only",
                        FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
                    })
                };
            }

            // Step 6: Return success
            {
                var sb = BuildSuccessText(entityName, viewId, viewName, fetchBackupPath, layoutBackupPath,
                    validate, newFetchXml != null, published);
                sb.AppendLine();
                AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, viewId);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpdateViewResult
                    {
                        Action = "updated", Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                        Status = "updated", Validated = validate,
                        UpdatedParts = newFetchXml != null ? "LayoutXML + FetchXML" : "LayoutXML only",
                        FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = published
                    })
                };
            }
        }

        // ── Action: create ─────────────────────────────────────────────────

        private CallToolResult CreateView(string entityName, string viewName,
            string layoutxml, string fetchxml, bool validate, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(viewName))
                return ErrorResult("Error: view_name is required for 'create' action.");

            if (string.IsNullOrWhiteSpace(layoutxml))
                return ErrorResult("Error: layoutxml is required for 'create' action.");

            viewName = viewName.Trim();
            var newLayoutXml = StripXmlDeclaration(layoutxml.Trim());
            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml)
                ? $"<fetch><entity name='{entityName}'><attribute name='{entityName}id'/></entity></fetch>"
                : StripXmlDeclaration(fetchxml.Trim());

            // Step 1: Check for duplicate name
            var duplicate = FindViewByName(entityName, viewName);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("savedqueryid");
                return ErrorResult(
                    $"[Error] A view with this name already exists\n" +
                    $"Entity: {entityName}\n" +
                    $"Name: {viewName}\n" +
                    $"ExistingViewId: {dupId}\n" +
                    $"Tip: Choose a different name or use action='update' with the existing view_id");
            }

            // Step 2: Validate
            if (validate)
            {
                var allErrors = new List<string>();
                var allWarnings = new List<string>();

                var (layoutErrors, layoutWarnings) = ValidateLayoutXml(newLayoutXml);
                allErrors.AddRange(layoutErrors);
                allWarnings.AddRange(layoutWarnings);

                var (fetchErrors, fetchWarnings) = ValidateFetchXml(newFetchXml);
                allErrors.AddRange(fetchErrors);
                allWarnings.AddRange(fetchWarnings);

                var syncErrors = ValidateSync(newFetchXml, newLayoutXml);
                allErrors.AddRange(syncErrors);

                if (allErrors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[ViewCreate] BLOCKED — Validation failed");
                    sb.AppendLine($"Entity: {entityName}");
                    sb.AppendLine($"ViewName: {viewName}");
                    sb.AppendLine($"Errors: {allErrors.Count}");
                    foreach (var error in allErrors)
                        sb.AppendLine($"- {error}");
                    sb.AppendLine($"Tip: Fix the errors above and retry. Refer to docs://instructions_for_views for rules.");

                    var allIssues = new List<string>(allErrors);
                    if (allWarnings.Count > 0) allIssues.AddRange(allWarnings);

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new UpdateViewResult
                        {
                            Action = "created", Entity = entityName, ViewName = viewName,
                            Status = "blocked_validation", Validated = true, ValidationErrors = allIssues, Published = false
                        })
                    };
                }
            }

            // Step 3: Create savedquery record
            var newView = new Entity("savedquery")
            {
                ["name"] = viewName,
                ["returnedtypecode"] = entityName,
                ["querytype"] = 0, // Public (MainApplicationView)
                ["fetchxml"] = newFetchXml,
                ["layoutxml"] = newLayoutXml
            };
            var newViewId = _serviceClient.Create(newView);

            // Step 4: Publish
            var published = TryPublish(entityName, auto_publish);

            // Step 5: Return success
            var resultSb = new StringBuilder(256);
            resultSb.AppendLine($"[ViewCreate] {entityName} — {viewName}");
            resultSb.AppendLine($"ViewId: {newViewId}");
            resultSb.AppendLine($"Status: Created successfully");
            resultSb.AppendLine($"Validated: {(validate ? "yes (sync OK)" : "skipped")}");
            resultSb.AppendLine($"Published: {(published ? "yes" : "no")}");

            var status = published || !auto_publish ? "created" : "created_publish_failed";

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = resultSb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpdateViewResult
                {
                    Action = "created", Entity = entityName, ViewId = newViewId.ToString(), ViewName = viewName,
                    Status = status, Validated = validate, Published = published
                })
            };
        }

        // ── Action: rename ─────────────────────────────────────────────────

        private CallToolResult RenameView(string entityName, Guid viewId, string viewName,
            bool backup, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(viewName))
                return ErrorResult("Error: view_name is required for 'rename' action.");

            viewName = viewName.Trim();

            // Step 1: Retrieve current view
            var currentView = RetrieveView(viewId);
            if (currentView == null)
                return ErrorResult(
                    $"[Error] View not found\n" +
                    $"ViewId: {viewId}\n" +
                    $"Tip: Use get_views with entity_name='{entityName}' to find valid view IDs");

            var oldName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

            // Step 2: Check for duplicate name (excluding current view)
            var duplicate = FindViewByName(returnedTypeCode, viewName, excludeViewId: viewId);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("savedqueryid");
                return ErrorResult(
                    $"[Error] A view with this name already exists\n" +
                    $"Entity: {entityName}\n" +
                    $"Name: {viewName}\n" +
                    $"ExistingViewId: {dupId}\n" +
                    $"Tip: Choose a different name");
            }

            // Step 3: Backup
            string fetchBackupPath = null;
            string layoutBackupPath = null;
            if (backup)
            {
                try
                {
                    var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
                    var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
                    (fetchBackupPath, layoutBackupPath) = SaveBackup(entityName, viewId, oldName, currentFetchXml, currentLayoutXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — rename BLOCKED (fail-safe)\n" +
                        $"ViewId: {viewId}\n" +
                        $"Message: {ex.Message}");
                }
            }

            // Step 4: Rename
            var update = new Entity("savedquery", viewId)
            {
                ["name"] = viewName
            };
            _serviceClient.Update(update);

            // Step 5: Publish
            var published = TryPublish(returnedTypeCode, auto_publish);

            // Step 6: Return success
            var sb = new StringBuilder(256);
            sb.AppendLine($"[ViewRename] {entityName}");
            sb.AppendLine($"ViewId: {viewId}");
            sb.AppendLine($"OldName: {oldName}");
            sb.AppendLine($"NewName: {viewName}");
            sb.AppendLine($"Status: Renamed successfully");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            if (fetchBackupPath != null)
            {
                sb.AppendLine($"Backup:");
                sb.AppendLine($"  {fetchBackupPath}");
                sb.AppendLine($"  {layoutBackupPath}");
            }

            var status = published || !auto_publish ? "renamed" : "renamed_publish_failed";

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpdateViewResult
                {
                    Action = "renamed", Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                    Status = status, Validated = false,
                    FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = published
                })
            };
        }

        // ── Helpers ────────────────────────────────────────────────────────

        private bool TryPublish(string entityName, bool autoPublish)
        {
            if (!autoPublish) return false;
            try
            {
                _serviceClient.Execute(new PublishXmlRequest
                {
                    ParameterXml = $"<importexportxml><entities><entity>{entityName}</entity></entities></importexportxml>"
                });
                return true;
            }
            catch
            {
                return false;
            }
        }

        private Entity FindViewByName(string entityName, string viewName, Guid? excludeViewId = null)
        {
            var query = new QueryExpression("savedquery")
            {
                ColumnSet = new ColumnSet("savedqueryid", "name"),
                TopCount = 1
            };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("name", ConditionOperator.Equal, viewName);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);

            if (excludeViewId.HasValue)
                query.Criteria.AddCondition("savedqueryid", ConditionOperator.NotEqual, excludeViewId.Value);

            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
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
