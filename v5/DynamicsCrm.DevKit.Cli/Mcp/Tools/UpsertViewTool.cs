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
    public class UpsertViewTool
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedLayoutSchemaSet;
        private static XmlSchemaSet _cachedFetchSchemaSet;
        private static readonly object _layoutSchemaLock = new();
        private static readonly object _fetchSchemaLock = new();

        public UpsertViewTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "upsert_view", Title = "Update, create, rename, or undo a view with backup, sync validation & publish",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertViewResult)),
        Description(
            "Update, create, rename, or undo a Dataverse view (saved query) with auto-backup, sync validation, and publishing.\n\n" +

            "FOUR ACTIONS:\n" +
            "- 'update': Modify LayoutXML/FetchXML. Requires view_id + layoutxml\n" +
            "- 'create': New Public view. Requires view_name + entity_name + layoutxml\n" +
            "- 'rename': Change display name. Requires view_id + view_name\n" +
            "- 'undo': Restore from backup files. Requires view_id + layoutxml (= backup path)\n\n" +

            "WORKFLOW: get_views (read) → modify XMLs (follow docs://instructions_for_views) → upsert_view (write)\n" +
            "Tool auto-handles: backup → validate XSD → sync-check → update → publish. Undo path in every response.\n\n" +

            "SYNC RULE: Every <attribute> in FetchXML MUST have a matching <cell> in LayoutXML and vice versa. Tool validates and blocks if out of sync.\n\n" +

            "SAFETY: auto-backup before changes, sync+XSD validation blocks invalid XML, backup failure blocks update.\n\n" +

            "TIPS:\n" +
            "- Read docs://instructions_for_views for sync rules. Read schema://layoutxml + schema://fetchxml for XSD\n" +
            "- Set auto_publish=false when batching, then call publish_customizations once")]
        public CallToolResult upsert_view(
            [Description("'update' (default), 'create', 'rename', or 'undo'.")] string action = "update",
            [Description("Entity logical name (e.g., 'account').")] string entity_name = "",
            [Description("View GUID. Required for 'update'/'rename'. Use get_views to find IDs.")] string view_id = "",
            [Description("View name. Required for 'create'/'rename'.")] string view_name = "",
            [Description("For 'update'/'create': LayoutXML. For 'undo': layout backup path. Ignored for 'rename'.")] string layoutxml = "",
            [Description("FetchXML. Empty = keep existing (update) or auto-generate (create). For 'undo': fetch backup path.")] string fetchxml = "",
            [Description("Validate XMLs and check FetchXML<>LayoutXML sync (default: true). Blocks if invalid.")] bool validate = true,
            [Description("Backup current XMLs before overwriting (default: true). Backup failure blocks update.")] bool backup = true,
            [Description("Publish after changes (default: true). Set false when batching.")] bool auto_publish = true)
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

                    case "undo":
                        if (string.IsNullOrWhiteSpace(view_id))
                            return ErrorResult("Error: view_id is required for 'undo' action.");
                        if (!Guid.TryParse(view_id.Trim(), out var undoId))
                            return ErrorResult($"Error: '{view_id}' is not a valid GUID.");
                        if (string.IsNullOrWhiteSpace(layoutxml))
                            return ErrorResult("Error: layoutxml (layout backup file path) is required for 'undo' action.");
                        return UndoView(entityName, undoId, layoutxml.Trim(), string.IsNullOrWhiteSpace(fetchxml) ? null : fetchxml.Trim(), validate, auto_publish);

                    case "update":
                        if (string.IsNullOrWhiteSpace(view_id))
                            return ErrorResult("Error: view_id is required for 'update' action.");
                        if (!Guid.TryParse(view_id.Trim(), out var updateId))
                            return ErrorResult($"Error: '{view_id}' is not a valid GUID.");
                        if (string.IsNullOrWhiteSpace(layoutxml))
                            return ErrorResult("Error: layoutxml is required for 'update' action.");
                        return UpdateViewXml(entityName, updateId, layoutxml, fetchxml, validate, backup, auto_publish);

                    default:
                        return ErrorResult($"Error: '{actionName}' is not a valid action. Valid actions: update, create, rename, undo.");
                }
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
                    $"[Error] View {actionName} failed\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {errorDetail}");
            }
            catch (Exception ex)
            {
                var errorDetail = ex.InnerException != null
                    ? $"{ex.Message} → {ex.InnerException.Message}"
                    : ex.Message;

                return ErrorResult(
                    $"[Error] View {actionName} failed\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {errorDetail}");
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

                // Quick Find validation: check isquickfindfields preservation and field types
                var queryType = currentView.GetAttributeValue<int>("querytype");
                if (queryType == 4 && newFetchXml != null)
                {
                    var qfErrors = ValidateQuickFindPreservation(currentFetchXml, newFetchXml);
                    allErrors.AddRange(qfErrors);
                }

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
                        StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                        {
                            Action = "updated",
                            Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                            Status = "blocked_validation", Validated = true, ValidationErrors = allIssues,
                            FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
                        })
                    };
                }
            }

            // Step 4: Validate FetchXML via Dataverse (server-side validation)
            if (validate && newFetchXml != null)
            {
                var fetchValidationError = ValidateFetchXmlExpression(newFetchXml);
                if (fetchValidationError != null)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[ViewUpdate] BLOCKED — FetchXML validation failed (server-side)");
                    sb.AppendLine($"ViewId: {viewId}");
                    sb.AppendLine($"Error: {fetchValidationError}");
                    sb.AppendLine($"Tip: Fix the FetchXML and retry.");

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                        {
                            Action = "updated", Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                            Status = "blocked_validation", Validated = true,
                            ValidationErrors = [fetchValidationError],
                            FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
                        })
                    };
                }
            }

            // Step 5: Update view record
            var isPersonalView = currentView.LogicalName == "userquery";
            var update = new Entity(currentView.LogicalName, viewId);
            update["layoutxml"] = newLayoutXml;
            if (newFetchXml != null)
                update["fetchxml"] = newFetchXml;
            if (!isPersonalView)
                update["returnedtypecode"] = returnedTypeCode;
            _serviceClient.Update(update);

            // Step 6: Publish
            var published = TryPublish(returnedTypeCode, auto_publish);

            if (auto_publish && !published)
            {
                var sb = BuildSuccessText(entityName, viewId, viewName, fetchBackupPath, layoutBackupPath,
                    validate, newFetchXml != null, false);
                sb.AppendLine($"Tip: Call publish with entities='{returnedTypeCode}' to retry");
                sb.AppendLine();
                AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, viewId);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                    {
                        Action = "updated", Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                        Status = "updated_publish_failed", Validated = validate,
                        UpdatedParts = newFetchXml != null ? "LayoutXML + FetchXML" : "LayoutXML only",
                        FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
                    })
                };
            }

            // Step 7: Return success
            {
                var sb = BuildSuccessText(entityName, viewId, viewName, fetchBackupPath, layoutBackupPath,
                    validate, newFetchXml != null, published);
                sb.AppendLine();
                AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, viewId);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
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
                        StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
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
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
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
            var update = new Entity(currentView.LogicalName, viewId)
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
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                {
                    Action = "renamed", Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                    Status = status, Validated = false,
                    FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = published
                })
            };
        }

        // ── Action: undo ───────────────────────────────────────────────────

        private CallToolResult UndoView(string entityName, Guid viewId,
            string layoutBackupPath, string fetchBackupPath, bool validate, bool auto_publish)
        {
            // Step 1: Read layout backup file (required)
            if (!File.Exists(layoutBackupPath))
                return ErrorResult(
                    $"[Error] Layout backup file not found\n" +
                    $"Path: {layoutBackupPath}\n" +
                    $"Tip: Check the file path. Backup files are at: .devkit/backups/views/");

            string restoredLayoutXml;
            try
            {
                var layoutContent = File.ReadAllText(layoutBackupPath, Encoding.UTF8);
                var strippedLayout = StripXmlComments(layoutContent);
                if (string.IsNullOrWhiteSpace(strippedLayout))
                    return ErrorResult(
                        $"[Error] Layout backup file is empty (no LayoutXML content)\n" +
                        $"Path: {layoutBackupPath}\n" +
                        $"Tip: This backup has no LayoutXML to restore. Try an earlier backup.");
                var layoutDoc = XDocument.Parse(strippedLayout);
                restoredLayoutXml = StripXmlDeclaration(layoutDoc.ToString());
            }
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] Failed to parse layout backup file\n" +
                    $"Path: {layoutBackupPath}\n" +
                    $"Message: {ex.Message}\n" +
                    $"Tip: The backup file must contain valid LayoutXML");
            }

            // Step 2: Read fetch backup file (optional)
            string restoredFetchXml = null;
            if (fetchBackupPath != null)
            {
                if (!File.Exists(fetchBackupPath))
                    return ErrorResult(
                        $"[Error] Fetch backup file not found\n" +
                        $"Path: {fetchBackupPath}\n" +
                        $"Tip: Check the file path. Backup files are at: .devkit/backups/views/");

                try
                {
                    var fetchContent = File.ReadAllText(fetchBackupPath, Encoding.UTF8);
                    var strippedFetch = StripXmlComments(fetchContent);
                    if (string.IsNullOrWhiteSpace(strippedFetch))
                    {
                        // Backup was empty (view had no FetchXML) — skip fetch restore
                        restoredFetchXml = null;
                    }
                    else
                    {
                        var fetchDoc = XDocument.Parse(strippedFetch);
                        restoredFetchXml = StripXmlDeclaration(fetchDoc.ToString());
                    }
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Failed to parse fetch backup file\n" +
                        $"Path: {fetchBackupPath}\n" +
                        $"Message: {ex.Message}\n" +
                        $"Tip: The backup file must contain valid FetchXML");
                }
            }

            // Step 3: Verify view exists
            var currentView = RetrieveView(viewId);
            if (currentView == null)
                return ErrorResult(
                    $"[Error] View not found\n" +
                    $"ViewId: {viewId}\n" +
                    $"Tip: Use get_views with entity_name='{entityName}' to find valid view IDs");

            var viewName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

            // Step 4: Validate restored XMLs
            List<string> validationWarnings = null;
            if (validate)
            {
                var allErrors = new List<string>();
                var allWarnings = new List<string>();

                var (layoutErrors, layoutWarnings) = ValidateLayoutXml(restoredLayoutXml);
                allErrors.AddRange(layoutErrors);
                allWarnings.AddRange(layoutWarnings);

                if (restoredFetchXml != null)
                {
                    var (fetchErrors, fetchWarnings) = ValidateFetchXml(restoredFetchXml);
                    allErrors.AddRange(fetchErrors);
                    allWarnings.AddRange(fetchWarnings);

                    var syncErrors = ValidateSync(restoredFetchXml, restoredLayoutXml);
                    allErrors.AddRange(syncErrors);
                }

                validationWarnings = allWarnings.Count > 0 ? allWarnings : null;

                if (allErrors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[ViewUndo] BLOCKED — Backup file(s) failed validation");
                    sb.AppendLine($"ViewId: {viewId}");
                    sb.AppendLine($"LayoutBackup: {layoutBackupPath}");
                    if (fetchBackupPath != null)
                        sb.AppendLine($"FetchBackup: {fetchBackupPath}");
                    sb.AppendLine($"Errors: {allErrors.Count}");
                    foreach (var error in allErrors)
                        sb.AppendLine($"- {error}");
                    if (allWarnings.Count > 0)
                    {
                        sb.AppendLine($"Warnings: {allWarnings.Count}");
                        foreach (var warning in allWarnings)
                            sb.AppendLine($"- {warning}");
                    }
                    sb.AppendLine($"Tip: The backup file(s) may be corrupted. Set validate=false to force restore (not recommended).");

                    var allIssues = new List<string>(allErrors);
                    if (allWarnings.Count > 0) allIssues.AddRange(allWarnings);

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                        {
                            Action = "undo",
                            Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                            Status = "blocked_validation", Validated = true, ValidationErrors = allIssues,
                            RestoredFromLayoutXmlBackup = layoutBackupPath,
                            RestoredFromFetchXmlBackup = fetchBackupPath,
                            Published = false
                        })
                    };
                }
            }

            // Step 5: Validate FetchXML server-side (if provided)
            if (validate && restoredFetchXml != null)
            {
                var fetchValidationError = ValidateFetchXmlExpression(restoredFetchXml);
                if (fetchValidationError != null)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[ViewUndo] BLOCKED — FetchXML validation failed (server-side)");
                    sb.AppendLine($"ViewId: {viewId}");
                    sb.AppendLine($"Error: {fetchValidationError}");
                    sb.AppendLine($"Tip: The backup FetchXML may reference entities/fields that no longer exist. Set validate=false to force restore.");

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                        {
                            Action = "undo", Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                            Status = "blocked_validation", Validated = true,
                            ValidationErrors = [fetchValidationError],
                            RestoredFromLayoutXmlBackup = layoutBackupPath,
                            RestoredFromFetchXmlBackup = fetchBackupPath,
                            Published = false
                        })
                    };
                }
            }

            // Step 6: Update view record (NO backup — we're restoring!)
            var isPersonalView = currentView.LogicalName == "userquery";
            var update = new Entity(currentView.LogicalName, viewId);
            update["layoutxml"] = restoredLayoutXml;
            if (restoredFetchXml != null)
                update["fetchxml"] = restoredFetchXml;
            if (!isPersonalView)
                update["returnedtypecode"] = returnedTypeCode;
            _serviceClient.Update(update);

            // Step 7: Publish
            var published = TryPublish(returnedTypeCode, auto_publish);

            if (auto_publish && !published)
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[ViewUndo] Restored but publish failed");
                sb.AppendLine($"ViewId: {viewId}");
                sb.AppendLine($"RestoredFrom: {layoutBackupPath}");
                if (fetchBackupPath != null)
                    sb.AppendLine($"FetchRestoredFrom: {fetchBackupPath}");
                sb.AppendLine($"PublishError: Publish failed after successful restore");
                sb.AppendLine($"Tip: Call publish with entities='{entityName}' to retry");

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                    {
                        Action = "undo",
                        Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                        Status = "restored_publish_failed", Validated = validate,
                        RestoredFromLayoutXmlBackup = layoutBackupPath,
                        RestoredFromFetchXmlBackup = fetchBackupPath,
                        Published = false
                    })
                };
            }

            // Step 8: Return success
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[ViewUndo] {entityName} — {viewName}");
                sb.AppendLine($"ViewId: {viewId}");
                sb.AppendLine($"Status: Restored successfully");
                sb.AppendLine($"RestoredFrom: {layoutBackupPath}");
                if (fetchBackupPath != null)
                    sb.AppendLine($"FetchRestoredFrom: {fetchBackupPath}");
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
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                    {
                        Action = "undo",
                        Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                        Status = "restored", Validated = validate,
                        ValidationWarnings = validationWarnings,
                        RestoredFromLayoutXmlBackup = layoutBackupPath,
                        RestoredFromFetchXmlBackup = fetchBackupPath,
                        Published = published
                    })
                };
            }
        }

        // ── Helpers ────────────────────────────────────────────────────────

        /// <summary>
        /// Calls Dataverse ValidateFetchXmlExpression to validate FetchXML server-side.
        /// Returns null if valid, or an error message string if invalid.
        /// </summary>
        private string ValidateFetchXmlExpression(string fetchXml)
        {
            try
            {
                var request = new OrganizationRequest("ValidateFetchXmlExpression");
                request["FetchXml"] = fetchXml;
                _serviceClient.Execute(request);
                return null; // Valid
            }
            catch (Exception ex)
            {
                // SDK deserialization error for ValidateFetchXmlExpressionResult
                // means the server accepted the FetchXML but the SDK can't deserialize the response.
                // Treat as valid — the FetchXML was processed successfully server-side.
                if (ex.Message.Contains("ValidateFetchXmlExpressionResult") ||
                    ex.InnerException?.Message?.Contains("ValidateFetchXmlExpressionResult") == true)
                {
                    return null;
                }
                return ex.Message;
            }
        }

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
            // Try system view (savedquery) first
            try
            {
                return _serviceClient.Retrieve("savedquery", viewId,
                    new ColumnSet("fetchxml", "layoutxml", "name", "returnedtypecode", "querytype"));
            }
            catch { }

            // Fallback to personal view (userquery)
            try
            {
                var query = new QueryExpression("userquery")
                {
                    ColumnSet = new ColumnSet("fetchxml", "layoutxml", "name", "returnedtypecode", "querytype")
                };
                query.Criteria.AddCondition("userqueryid", ConditionOperator.Equal, viewId);
                var result = _serviceClient.RetrieveMultiple(query);
                return result.Entities.Count > 0 ? result.Entities[0] : null;
            }
            catch
            {
                return null;
            }
        }

        // ── Quick Find validation ──────────────────────────────────────────

        /// <summary>
        /// Checks that the isquickfindfields filter is not accidentally removed from a Quick Find view.
        /// Returns errors (blocking) if the filter was present in current but missing in new.
        /// </summary>
        private static List<string> ValidateQuickFindPreservation(string currentFetchXml, string newFetchXml)
        {
            var errors = new List<string>();
            try
            {
                var currentHasQF = currentFetchXml.Contains("isquickfindfields");
                var newHasQF = newFetchXml.Contains("isquickfindfields");

                if (currentHasQF && !newHasQF)
                {
                    errors.Add(
                        "QuickFind: The isquickfindfields filter was REMOVED from FetchXML. " +
                        "This will BREAK the search bar for all users. Quick Find views MUST have a " +
                        "<filter type=\"or\" isquickfindfields=\"1\"> block. " +
                        "Restore the filter and retry.");
                }
            }
            catch (Exception ex)
            {
                errors.Add($"QuickFind: Failed to check isquickfindfields preservation — {ex.Message}");
            }
            return errors;
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
            sbFetch.AppendLine($"<!-- To restore: call upsert_view with this file's content (excluding comments) -->");
            sbFetch.AppendLine();
            if (!string.IsNullOrWhiteSpace(currentFetchXml))
                sbFetch.Append(PrettyPrintXml(currentFetchXml));
            else
                sbFetch.Append("<!-- (empty — no FetchXML on this view) -->");
            File.WriteAllText(fetchBackupPath, sbFetch.ToString(), Encoding.UTF8);

            // Write LayoutXML backup
            var sbLayout = new StringBuilder(currentLayoutXml.Length + 256);
            sbLayout.AppendLine($"<!-- Backup: {viewName} ({entityName}) -->");
            sbLayout.AppendLine($"<!-- ViewId: {viewId} -->");
            sbLayout.AppendLine($"<!-- Timestamp: {DateTime.Now:yyyy-MM-dd HH:mm:ss} -->");
            sbLayout.AppendLine($"<!-- To restore: call upsert_view with this file's content (excluding comments) -->");
            sbLayout.AppendLine();
            if (!string.IsNullOrWhiteSpace(currentLayoutXml))
                sbLayout.Append(PrettyPrintXml(currentLayoutXml));
            else
                sbLayout.Append("<!-- (empty — no LayoutXML on this view) -->");
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

                // Extract link-entity aliases from FetchXML
                var linkAliases = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                if (mainEntity != null)
                {
                    foreach (var link in mainEntity.Descendants("link-entity"))
                    {
                        var alias = link.Attribute("alias")?.Value;
                        if (alias != null)
                            linkAliases.Add(alias);
                    }
                }

                // Check LayoutXML cells not in FetchXML
                foreach (var cell in layoutCells)
                {
                    if (string.Equals(cell, rowId, StringComparison.OrdinalIgnoreCase))
                        continue;
                    // Dotted cells reference related entity columns (alias.columnname)
                    if (cell.Contains("."))
                    {
                        var alias = cell.Substring(0, cell.IndexOf('.'));
                        if (!linkAliases.Contains(alias))
                            errors.Add($"Sync: '{cell}' in LayoutXML references alias '{alias}' but no <link-entity alias=\"{alias}\"> exists in FetchXML");
                        continue;
                    }
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
                sb.AppendLine($"3. Call upsert_view with the backup contents as layoutxml + fetchxml");
            }
            else
            {
                sb.AppendLine($"1. Retrieve the previous XMLs (no backup was created)");
                sb.AppendLine($"2. Call upsert_view with view_id='{viewId}' and the original layoutxml + fetchxml");
            }
        }

        /// <summary>
        /// Strips XML comment lines (<!-- ... -->) from backup file content,
        /// returning only the actual XML content (or empty if none).
        /// </summary>
        private static string StripXmlComments(string content)
        {
            var sb = new StringBuilder(content.Length);
            foreach (var line in content.Split('\n'))
            {
                var trimmed = line.Trim();
                if (trimmed.StartsWith("<!--") && trimmed.EndsWith("-->"))
                    continue;
                if (!string.IsNullOrWhiteSpace(trimmed))
                    sb.AppendLine(line.TrimEnd('\r'));
            }
            return sb.ToString().Trim();
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
