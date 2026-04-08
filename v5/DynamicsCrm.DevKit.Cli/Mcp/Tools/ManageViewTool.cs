using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageViewTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ManageViewTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_view", Title = "Manage entity views",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertViewResult)),
        Description(
            "Retrieve view (saved query) definitions for a Dataverse entity.\n\n" +

            "SIX ACTIONS:\n" +
            "- action='list': List all active views with name, type, status. Optional: query_type, include_fetchxml, include_personal\n" +
            "- action='detail': Full FetchXML, LayoutXML, and metadata for one view. Requires view_id\n" +
            "- action='create': New Public view. Requires view_name + entity_name + layoutxml\n" +
            "- action='update': Modify LayoutXML/FetchXML. Requires view_id + layoutxml\n" +
            "- action='rename': Change display name. Requires view_id + view_name\n" +
            "- action='undo': Restore from backup files. Requires view_id + layoutxml (= backup path)\n\n" +

            "WORKFLOW: manage_view(list) → modify XMLs (follow docs://instructions_for_views) → manage_view(update)\n" +
            "Tool auto-handles: backup → validate XSD → sync-check → update → publish. Undo path in every response.\n\n" +

            "SYNC RULE: Every <attribute> in FetchXML MUST have a matching <cell> in LayoutXML and vice versa. Tool validates and blocks if out of sync.\n\n" +

            "SAFETY: auto-backup before changes, sync+XSD validation blocks invalid XML, backup failure blocks update.\n\n" +

            "TIPS:\n" +
            "- querytype: 0=Public (user sees), 4=QuickFind (search columns), 64=SubGrid\n" +
            "- view_name: if exactly 1 match, returns detail automatically\n" +
            "- Read docs://instructions_for_views for sync rules. Read schema://layoutxml + schema://fetchxml for XSD\n" +
            "- Set auto_publish=false when batching, then call publish_customizations once")]
        public CallToolResult manage_view(
            [Description("The action to perform: 'list', 'detail', 'create', 'update', 'rename', or 'undo'."
            )] string action,
            [Description("Entity logical name (e.g., 'account'). Use get_tables if unsure."
            )] string entity_name,
            [Description("GUID of a view. Required for detail/update/rename/undo. Empty for list/create."
            )] string view_id = "",
            [Description("Filter by name (contains match). 1 match = auto-detail. Ignored if view_id set."
            )] string view_name = "",
            [Description("Filter by type: 0=Public, 1=Lookup, 4=QuickFind, 64=SubGrid. -1 = all."
            )] int query_type = -1,
            [Description("Include FetchXML/LayoutXML in list mode (default: false). Detail mode always includes."
            )] bool include_fetchxml = false,
            [Description("Include personal views (userquery) owned by current user. Default: false."
            )] bool include_personal = false,
            [Description("For 'update'/'create': LayoutXML. For 'undo': layout backup path. Ignored for list/detail/rename."
            )] string layoutxml = "",
            [Description("FetchXML. Empty = keep existing (update) or auto-generate (create). For 'undo': fetch backup path."
            )] string fetchxml = "",
            [Description("Validate XMLs and check FetchXML<>LayoutXML sync (default: true). Blocks if invalid."
            )] bool validate = true,
            [Description("Backup current XMLs before overwriting (default: true). Backup failure blocks update."
            )] bool backup = true,
            [Description("Publish after changes (default: true). Set false when batching."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'create', 'update', 'rename', 'undo'.");

            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            var normalizedAction = action.Trim().ToLowerInvariant();
            var entityName = entity_name.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(entityName, view_name, query_type, include_fetchxml, include_personal),
                    "detail" => HandleDetail(entityName, view_id, view_name),
                    "create" => HandleCreate(entityName, view_name, layoutxml, fetchxml, validate, auto_publish),
                    "update" => HandleUpdate(entityName, view_id, layoutxml, fetchxml, validate, backup, auto_publish),
                    "rename" => HandleRename(entityName, view_id, view_name, backup, auto_publish),
                    "undo" => HandleUndo(entityName, view_id, layoutxml, fetchxml, validate, auto_publish),
                    _ => ErrorResult($"Error: '{action}' is not a valid action. Valid actions: list, detail, create, update, rename, undo.")
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
                    $"[Error] View {normalizedAction} failed\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {errorDetail}");
            }
            catch (Exception ex)
            {
                var errorDetail = ex.InnerException != null
                    ? $"{ex.Message} → {ex.InnerException.Message}"
                    : ex.Message;

                return ErrorResult(
                    $"[Error] View {normalizedAction} failed\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {errorDetail}");
            }
        }

        // ── Action: list ──────────────────────────────────────────────────

        private CallToolResult HandleList(string entityName, string viewName, int queryType, bool includeFetchXml, bool includePersonal)
        {
            if (!string.IsNullOrWhiteSpace(viewName))
            {
                var nameFilter = viewName.Trim();
                var matchingViews = FindViewsByNameContains(entityName, nameFilter, queryType);
                if (matchingViews.Count == 0)
                    return TextResult($"[Views] {entityName} — 0 views found matching '{nameFilter}'");
                if (matchingViews.Count == 1)
                {
                    var matchId = matchingViews[0].GetAttributeValue<Guid>("savedqueryid");
                    return HandleDetail(entityName, matchId.ToString(), "");
                }
                return TextResult(FormatViewList(entityName, matchingViews, includeFetchXml, includePersonal, nameFilter));
            }

            var systemViews = GetSystemViews(entityName, queryType, includeFetchXml);
            var personalViews = includePersonal
                ? GetPersonalViews(entityName, queryType, includeFetchXml)
                : new EntityCollection().Entities;

            if (systemViews.Count == 0 && personalViews.Count == 0)
            {
                var typeHint = queryType >= 0 ? $" with querytype={queryType}" : "";
                return TextResult($"[Views] {entityName} — 0 views found{typeHint}");
            }

            return TextResult(FormatViewList(entityName, systemViews, includeFetchXml, includePersonal, null, personalViews));
        }

        // ── Action: detail ────────────────────────────────────────────────

        private CallToolResult HandleDetail(string entityName, string viewId, string viewName)
        {
            if (string.IsNullOrWhiteSpace(viewId) && string.IsNullOrWhiteSpace(viewName))
                return ErrorResult("Error: view_id or view_name is required for 'detail' action.");

            if (!string.IsNullOrWhiteSpace(viewId))
            {
                if (!Guid.TryParse(viewId.Trim(), out var id))
                    return ErrorResult($"Error: '{viewId}' is not a valid GUID.");
                return TextResult(GetViewDetail(id, entityName));
            }

            var nameFilter = viewName.Trim();
            var matches = FindViewsByNameContains(entityName, nameFilter, -1);
            if (matches.Count == 0)
                return ErrorResult($"Error: No view found matching name '{nameFilter}' for entity '{entityName}'.");
            if (matches.Count == 1)
            {
                var matchId = matches[0].GetAttributeValue<Guid>("savedqueryid");
                return TextResult(GetViewDetail(matchId, entityName));
            }

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Views] Multiple views match '{nameFilter}' — provide view_id for detail");
            sb.AppendLine();
            sb.AppendLine("viewid\tname\ttype");
            foreach (var v in matches)
            {
                var vid = v.GetAttributeValue<Guid>("savedqueryid");
                var name = v.GetAttributeValue<string>("name") ?? "";
                var qt = v.GetAttributeValue<int>("querytype");
                sb.AppendLine($"{vid}\t{EscapeTab(name)}\t{MapQueryType(qt)}");
            }
            return ErrorResult(sb.ToString());
        }

        // ── Action: create ─────────────────────────────────────────────────

        private CallToolResult HandleCreate(string entityName, string viewName,
            string layoutxml, string fetchxml, bool validate, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(viewName))
                return ErrorResult("Error: view_name is required for 'create' action.");

            if (string.IsNullOrWhiteSpace(layoutxml))
                return ErrorResult("Error: layoutxml is required for 'create' action.");

            viewName = viewName.Trim();
            var newLayoutXml = ViewXmlHelper.StripXmlDeclaration(layoutxml.Trim());
            newLayoutXml = EnsureObjectTypeCode(newLayoutXml, entityName);
            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml)
                ? $"<fetch><entity name='{entityName}'><attribute name='{entityName}id'/></entity></fetch>"
                : ViewXmlHelper.StripXmlDeclaration(fetchxml.Trim());

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

            if (validate)
            {
                var validationResult = RunValidation(newLayoutXml, newFetchXml, newFetchXml, -1, null);
                if (validationResult != null)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[ViewCreate] BLOCKED — Validation failed");
                    sb.AppendLine($"Entity: {entityName}");
                    sb.AppendLine($"ViewName: {viewName}");
                    sb.AppendLine($"Errors: {validationResult.Value.Errors.Count}");
                    foreach (var error in validationResult.Value.Errors)
                        sb.AppendLine($"- {error}");
                    sb.AppendLine($"Tip: Fix the errors above and retry. Refer to docs://instructions_for_views for rules.");

                    var allIssues = new List<string>(validationResult.Value.Errors);
                    if (validationResult.Value.Warnings.Count > 0) allIssues.AddRange(validationResult.Value.Warnings);

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

            if (validate)
            {
                var fieldError = ValidateFieldNames(entityName, newFetchXml, "ViewCreate");
                if (fieldError != null) return fieldError;
            }

            var newView = new Entity("savedquery")
            {
                ["name"] = viewName,
                ["returnedtypecode"] = entityName,
                ["querytype"] = 0,
                ["fetchxml"] = newFetchXml,
                ["layoutxml"] = newLayoutXml
            };
            if (_options.DryRun)
                return DryRunResult($"Would CREATE view '{viewName}' on entity '{entityName}'.");

            var newViewId = _serviceClient.Create(newView);

            var published = TryPublish(entityName, auto_publish);

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

        // ── Action: update ─────────────────────────────────────────────────

        private CallToolResult HandleUpdate(string entityName, string viewId,
            string layoutxml, string fetchxml, bool validate, bool backup, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(viewId))
                return ErrorResult("Error: view_id is required for 'update' action.");
            if (!Guid.TryParse(viewId.Trim(), out var updateId))
                return ErrorResult($"Error: '{viewId}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(layoutxml))
                return ErrorResult("Error: layoutxml is required for 'update' action.");

            var newLayoutXml = ViewXmlHelper.StripXmlDeclaration(layoutxml.Trim());
            newLayoutXml = EnsureObjectTypeCode(newLayoutXml, entityName);
            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml) ? null : ViewXmlHelper.StripXmlDeclaration(fetchxml.Trim());

            var currentView = RetrieveView(updateId);
            if (currentView == null)
                return ErrorResult(
                    $"[Error] View not found\n" +
                    $"ViewId: {updateId}\n" +
                    $"Tip: Use manage_view with action='list' and entity_name='{entityName}' to find valid view IDs");

            var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
            var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
            var viewName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;
            var effectiveFetchXml = newFetchXml ?? currentFetchXml;

            string fetchBackupPath = null;
            string layoutBackupPath = null;
            if (backup)
            {
                try
                {
                    (fetchBackupPath, layoutBackupPath) = ViewBackupHelper.SaveBackup(entityName, updateId, viewName, currentFetchXml, currentLayoutXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                        $"ViewId: {updateId}\n" +
                        $"Message: {ex.Message}\n" +
                        $"Tip: Fix the backup directory permissions or set backup=false (not recommended)");
                }
            }

            if (validate)
            {
                var validationResult = RunValidation(newLayoutXml, newFetchXml, effectiveFetchXml,
                    currentView.GetAttributeValue<int>("querytype"), currentFetchXml);
                if (validationResult != null)
                {
                    return BuildValidationBlockedResult("ViewUpdate", entityName, updateId, viewName,
                        validationResult.Value.Errors, validationResult.Value.Warnings,
                        fetchBackupPath, layoutBackupPath, "updated");
                }
            }

            if (validate)
            {
                var fieldError = ValidateFieldNames(entityName, effectiveFetchXml, "ViewUpdate");
                if (fieldError != null) return fieldError;
            }

            if (validate && newFetchXml != null)
            {
                var serverError = ValidateFetchXmlExpression(newFetchXml);
                if (serverError != null)
                    return BuildServerValidationBlockedResult("ViewUpdate", entityName, updateId, viewName,
                        serverError, fetchBackupPath, layoutBackupPath, "updated");
            }

            var isPersonalView = currentView.LogicalName == "userquery";
            var update = new Entity(currentView.LogicalName, updateId);
            update["layoutxml"] = newLayoutXml;
            if (newFetchXml != null)
                update["fetchxml"] = newFetchXml;
            if (!isPersonalView)
                update["returnedtypecode"] = returnedTypeCode;
            if (_options.DryRun)
                return DryRunResult($"Would UPDATE view '{viewName}' ({updateId}) on entity '{entityName}'.");
            _serviceClient.Update(update);

            var published = TryPublish(returnedTypeCode, auto_publish);

            if (auto_publish && !published)
            {
                var sb = ViewBackupHelper.BuildSuccessText(entityName, updateId, viewName, fetchBackupPath, layoutBackupPath,
                    validate, newFetchXml != null, false);
                sb.AppendLine($"Tip: Call publish with entities='{returnedTypeCode}' to retry");
                sb.AppendLine();
                ViewBackupHelper.AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, updateId);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                    {
                        Action = "updated", Entity = entityName, ViewId = updateId.ToString(), ViewName = viewName,
                        Status = "updated_publish_failed", Validated = validate,
                        UpdatedParts = newFetchXml != null ? "LayoutXML + FetchXML" : "LayoutXML only",
                        FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
                    })
                };
            }

            {
                var sb = ViewBackupHelper.BuildSuccessText(entityName, updateId, viewName, fetchBackupPath, layoutBackupPath,
                    validate, newFetchXml != null, published);
                sb.AppendLine();
                ViewBackupHelper.AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, updateId);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                    {
                        Action = "updated", Entity = entityName, ViewId = updateId.ToString(), ViewName = viewName,
                        Status = "updated", Validated = validate,
                        UpdatedParts = newFetchXml != null ? "LayoutXML + FetchXML" : "LayoutXML only",
                        FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = published
                    })
                };
            }
        }

        // ── Action: rename ─────────────────────────────────────────────────

        private CallToolResult HandleRename(string entityName, string viewId, string viewName,
            bool backup, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(viewId))
                return ErrorResult("Error: view_id is required for 'rename' action.");
            if (!Guid.TryParse(viewId.Trim(), out var renameId))
                return ErrorResult($"Error: '{viewId}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(viewName))
                return ErrorResult("Error: view_name is required for 'rename' action.");

            viewName = viewName.Trim();

            var currentView = RetrieveView(renameId);
            if (currentView == null)
                return ErrorResult(
                    $"[Error] View not found\n" +
                    $"ViewId: {renameId}\n" +
                    $"Tip: Use manage_view with action='list' and entity_name='{entityName}' to find valid view IDs");

            var oldName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

            var duplicate = FindViewByName(returnedTypeCode, viewName, excludeViewId: renameId);
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

            string fetchBackupPath = null;
            string layoutBackupPath = null;
            if (backup)
            {
                try
                {
                    var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
                    var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
                    (fetchBackupPath, layoutBackupPath) = ViewBackupHelper.SaveBackup(entityName, renameId, oldName, currentFetchXml, currentLayoutXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — rename BLOCKED (fail-safe)\n" +
                        $"ViewId: {renameId}\n" +
                        $"Message: {ex.Message}");
                }
            }

            var update = new Entity(currentView.LogicalName, renameId) { ["name"] = viewName };
            if (_options.DryRun)
                return DryRunResult($"Would RENAME view '{oldName}' to '{viewName}' ({renameId}) on entity '{entityName}'.");
            _serviceClient.Update(update);

            var published = TryPublish(returnedTypeCode, auto_publish);

            var sb = new StringBuilder(256);
            sb.AppendLine($"[ViewRename] {entityName}");
            sb.AppendLine($"ViewId: {renameId}");
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
                    Action = "renamed", Entity = entityName, ViewId = renameId.ToString(), ViewName = viewName,
                    Status = status, Validated = false,
                    FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = published
                })
            };
        }

        // ── Action: undo ───────────────────────────────────────────────────

        private CallToolResult HandleUndo(string entityName, string viewId,
            string layoutBackupPathArg, string fetchBackupPathArg, bool validate, bool auto_publish)
        {
            if (string.IsNullOrWhiteSpace(viewId))
                return ErrorResult("Error: view_id is required for 'undo' action.");
            if (!Guid.TryParse(viewId.Trim(), out var undoId))
                return ErrorResult($"Error: '{viewId}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(layoutBackupPathArg))
                return ErrorResult("Error: layoutxml (layout backup file path) is required for 'undo' action.");

            var layoutBackupPath = layoutBackupPathArg.Trim();
            var fetchBackupPath = string.IsNullOrWhiteSpace(fetchBackupPathArg) ? null : fetchBackupPathArg.Trim();

            if (!File.Exists(layoutBackupPath))
                return ErrorResult(
                    $"[Error] Layout backup file not found\n" +
                    $"Path: {layoutBackupPath}\n" +
                    $"Tip: Check the file path. Backup files are at: .devkit/backups/views/");

            string restoredLayoutXml;
            try
            {
                var layoutContent = File.ReadAllText(layoutBackupPath, Encoding.UTF8);
                var strippedLayout = ViewXmlHelper.StripXmlComments(layoutContent);
                if (string.IsNullOrWhiteSpace(strippedLayout))
                    return ErrorResult(
                        $"[Error] Layout backup file is empty (no LayoutXML content)\n" +
                        $"Path: {layoutBackupPath}\n" +
                        $"Tip: This backup has no LayoutXML to restore. Try an earlier backup.");
                var layoutDoc = XDocument.Parse(strippedLayout);
                restoredLayoutXml = ViewXmlHelper.StripXmlDeclaration(layoutDoc.ToString());
                restoredLayoutXml = EnsureObjectTypeCode(restoredLayoutXml, entityName);
            }
            catch (Exception ex)
            {
                return ErrorResult(
                    $"[Error] Failed to parse layout backup file\n" +
                    $"Path: {layoutBackupPath}\n" +
                    $"Message: {ex.Message}\n" +
                    $"Tip: The backup file must contain valid LayoutXML");
            }

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
                    var strippedFetch = ViewXmlHelper.StripXmlComments(fetchContent);
                    if (!string.IsNullOrWhiteSpace(strippedFetch))
                    {
                        var fetchDoc = XDocument.Parse(strippedFetch);
                        restoredFetchXml = ViewXmlHelper.StripXmlDeclaration(fetchDoc.ToString());
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

            var currentView = RetrieveView(undoId);
            if (currentView == null)
                return ErrorResult(
                    $"[Error] View not found\n" +
                    $"ViewId: {undoId}\n" +
                    $"Tip: Use manage_view with action='list' and entity_name='{entityName}' to find valid view IDs");

            var viewName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

            List<string> validationWarnings = null;
            if (validate)
            {
                var allErrors = new List<string>();
                var allWarnings = new List<string>();

                var (layoutErrors, layoutWarnings) = ViewXmlHelper.ValidateLayoutXml(restoredLayoutXml);
                allErrors.AddRange(layoutErrors);
                allWarnings.AddRange(layoutWarnings);

                if (restoredFetchXml != null)
                {
                    var (fetchErrors, fetchWarnings) = ViewXmlHelper.ValidateFetchXml(restoredFetchXml);
                    allErrors.AddRange(fetchErrors);
                    allWarnings.AddRange(fetchWarnings);

                    var syncErrors = ViewXmlHelper.ValidateSync(restoredFetchXml, restoredLayoutXml);
                    allErrors.AddRange(syncErrors);
                }

                validationWarnings = allWarnings.Count > 0 ? allWarnings : null;

                if (allErrors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[ViewUndo] BLOCKED — Backup file(s) failed validation");
                    sb.AppendLine($"ViewId: {undoId}");
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
                            Entity = entityName, ViewId = undoId.ToString(), ViewName = viewName,
                            Status = "blocked_validation", Validated = true, ValidationErrors = allIssues,
                            RestoredFromLayoutXmlBackup = layoutBackupPath,
                            RestoredFromFetchXmlBackup = fetchBackupPath,
                            Published = false
                        })
                    };
                }
            }

            if (validate && restoredFetchXml != null)
            {
                var serverError = ValidateFetchXmlExpression(restoredFetchXml);
                if (serverError != null)
                    return BuildServerValidationBlockedResult("ViewUndo", entityName, undoId, viewName,
                        serverError, null, null, "undo",
                        layoutBackupPath, fetchBackupPath);
            }

            var isPersonalView = currentView.LogicalName == "userquery";
            var update = new Entity(currentView.LogicalName, undoId);
            update["layoutxml"] = restoredLayoutXml;
            if (restoredFetchXml != null)
                update["fetchxml"] = restoredFetchXml;
            if (!isPersonalView)
                update["returnedtypecode"] = returnedTypeCode;
            if (_options.DryRun)
                return DryRunResult($"Would RESTORE view '{viewName}' ({undoId}) from backup.");
            _serviceClient.Update(update);

            var published = TryPublish(returnedTypeCode, auto_publish);

            if (auto_publish && !published)
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[ViewUndo] Restored but publish failed");
                sb.AppendLine($"ViewId: {undoId}");
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
                        Entity = entityName, ViewId = undoId.ToString(), ViewName = viewName,
                        Status = "restored_publish_failed", Validated = validate,
                        RestoredFromLayoutXmlBackup = layoutBackupPath,
                        RestoredFromFetchXmlBackup = fetchBackupPath,
                        Published = false
                    })
                };
            }

            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[ViewUndo] {entityName} — {viewName}");
                sb.AppendLine($"ViewId: {undoId}");
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
                        Entity = entityName, ViewId = undoId.ToString(), ViewName = viewName,
                        Status = "restored", Validated = validate,
                        ValidationWarnings = validationWarnings,
                        RestoredFromLayoutXmlBackup = layoutBackupPath,
                        RestoredFromFetchXmlBackup = fetchBackupPath,
                        Published = published
                    })
                };
            }
        }

        // ── View Detail Formatter ─────────────────────────────────────────

        private string GetViewDetail(Guid viewId, string entityName)
        {
            var view = TryGetSystemView(viewId) ?? TryGetPersonalView(viewId);

            if (view == null)
                return $"Error: No view found with ID '{viewId}'.";

            var isSystem = view.LogicalName == "savedquery";
            var name = view.GetAttributeValue<string>("name") ?? "";
            var qt = view.GetAttributeValue<int>("querytype");
            var stateCode = view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;
            var description = view.GetAttributeValue<string>("description") ?? "";
            var fetchXml = view.GetAttributeValue<string>("fetchxml") ?? "";
            var layoutXml = view.GetAttributeValue<string>("layoutxml") ?? "";
            var layoutJson = view.GetAttributeValue<string>("layoutjson") ?? "";
            var conditionalFormatting = view.GetAttributeValue<string>("conditionalformatting") ?? "";

            var sb = new StringBuilder(fetchXml.Length + layoutXml.Length + 1024);

            sb.AppendLine($"[View] {name} ({MapQueryType(qt)})");
            sb.AppendLine($"ViewId: {viewId}");
            sb.AppendLine($"Source: {(isSystem ? "System (savedquery)" : "Personal (userquery)")}");
            sb.AppendLine($"Type: {MapQueryType(qt)} ({qt})");
            sb.AppendLine($"Active: {(stateCode == 0 ? "yes" : "no")}");

            if (isSystem)
            {
                var isDefault = view.GetAttributeValue<bool>("isdefault");
                var isManaged = view.GetAttributeValue<bool>("ismanaged");
                var returnedTypeCode = view.GetAttributeValue<string>("returnedtypecode") ?? "";
                sb.AppendLine($"Entity: {returnedTypeCode}");
                sb.AppendLine($"Default: {(isDefault ? "yes" : "no")}");
                sb.AppendLine($"Managed: {(isManaged ? "yes" : "no")}");
            }
            else
            {
                var returnedTypeCode = view.GetAttributeValue<string>("returnedtypecode") ?? "";
                sb.AppendLine($"Entity: {returnedTypeCode}");
            }

            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"Description: {description}");

            sb.AppendLine();

            if (qt == 4 && !string.IsNullOrEmpty(fetchXml))
            {
                try
                {
                    var fetchDoc = XDocument.Parse(fetchXml);
                    var qfFilter = fetchDoc.Descendants("filter")
                        .FirstOrDefault(f => f.Attribute("isquickfindfields")?.Value == "1");

                    if (qfFilter != null)
                    {
                        var findColumns = qfFilter.Elements("condition")
                            .Select(c => c.Attribute("attribute")?.Value)
                            .Where(a => a != null)
                            .ToList();

                        if (findColumns.Count > 0)
                        {
                            sb.AppendLine($"[FindColumns] {findColumns.Count} fields (searched when user types in search bar)");
                            foreach (var col in findColumns)
                                sb.AppendLine($"  {col}");
                            sb.AppendLine();
                        }
                    }
                }
                catch { }
            }

            if (!string.IsNullOrEmpty(layoutXml))
            {
                try
                {
                    var layoutDoc = XDocument.Parse(layoutXml);
                    var rowId = layoutDoc.Descendants("row")
                        .Select(r => r.Attribute("id")?.Value)
                        .FirstOrDefault();
                    var cells = layoutDoc.Descendants("cell").ToList();
                    var visibleCount = 0;
                    var hiddenCount = 0;
                    var columnLines = new List<string>();

                    foreach (var cell in cells)
                    {
                        var cellName = cell.Attribute("name")?.Value ?? "";
                        var width = cell.Attribute("width")?.Value;
                        var isHidden = cell.Attribute("ishidden")?.Value == "1";

                        if (isHidden) hiddenCount++; else visibleCount++;

                        var parts = new List<string>();
                        if (width != null) parts.Add($"{width}px");
                        if (isHidden) parts.Add("hidden");
                        if (string.Equals(cellName, rowId, StringComparison.OrdinalIgnoreCase)) parts.Add("row key");

                        var suffix = parts.Count > 0 ? $" ({string.Join(", ", parts)})" : "";
                        columnLines.Add($"  {cellName}{suffix}");
                    }

                    var hiddenNote = hiddenCount > 0 ? $" ({hiddenCount} hidden)" : "";
                    sb.AppendLine($"[Columns] {cells.Count} columns{hiddenNote}");
                    foreach (var line in columnLines)
                        sb.AppendLine(line);
                    sb.AppendLine();
                }
                catch { }
            }

            if (!string.IsNullOrEmpty(fetchXml))
            {
                sb.AppendLine("[FetchXML]");
                sb.AppendLine(ViewXmlHelper.PrettyPrintXml(fetchXml));
                sb.AppendLine();
            }

            if (!string.IsNullOrEmpty(layoutXml))
            {
                sb.AppendLine("[LayoutXML]");
                sb.AppendLine(ViewXmlHelper.PrettyPrintXml(layoutXml));
            }

            if (!string.IsNullOrEmpty(layoutJson))
            {
                sb.AppendLine();
                sb.AppendLine("[LayoutJSON]");
                sb.AppendLine(layoutJson);
            }

            if (!string.IsNullOrEmpty(conditionalFormatting))
            {
                sb.AppendLine();
                sb.AppendLine("[ConditionalFormatting]");
                sb.AppendLine(ViewXmlHelper.PrettyPrintXml(conditionalFormatting));
            }

            return sb.ToString();
        }

        // ── List Formatter ────────────────────────────────────────────────

        private string FormatViewList(string entityName, DataCollection<Entity> systemViews, bool includeFetchXml, bool includePersonal, string nameFilter, DataCollection<Entity> personalViews = null)
        {
            var totalSystem = systemViews.Count;
            var totalPersonal = personalViews?.Count ?? 0;

            var sb = new StringBuilder((totalSystem + totalPersonal) * 120 + 256);

            if (totalSystem > 0)
            {
                var filterNote = nameFilter != null ? $" matching '{nameFilter}'" : "";
                var personalNote = includePersonal ? " system" : "";
                var viewLabel = totalSystem == 1 ? "view" : "views";
                sb.AppendLine($"[Views] {entityName} ({totalSystem}{personalNote} {viewLabel}{filterNote})");
                sb.AppendLine();
                sb.AppendLine("viewid\tname\ttype\tdefault\tactive\tmanaged");

                foreach (var view in systemViews)
                {
                    var viewId = view.GetAttributeValue<Guid>("savedqueryid");
                    var name = view.GetAttributeValue<string>("name") ?? "";
                    var qt = view.GetAttributeValue<int>("querytype");
                    var isDefault = view.GetAttributeValue<bool>("isdefault");
                    var stateCode = view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;
                    var isManaged = view.GetAttributeValue<bool>("ismanaged");

                    sb.AppendLine($"{viewId}\t{EscapeTab(name)}\t{MapQueryType(qt)}\t{(isDefault ? "yes" : "no")}\t{(stateCode == 0 ? "Active" : "Inactive")}\t{(isManaged ? "yes" : "no")}");

                    if (includeFetchXml)
                        AppendViewXml(sb, name, view.GetAttributeValue<string>("fetchxml"), view.GetAttributeValue<string>("layoutxml"));
                }
            }

            if (totalPersonal > 0)
            {
                if (totalSystem > 0) sb.AppendLine();

                var personalLabel = totalPersonal == 1 ? "view" : "views";
                sb.AppendLine($"[Personal Views] {entityName} ({totalPersonal} {personalLabel})");
                sb.AppendLine();
                sb.AppendLine("viewid\tname\ttype\tactive");

                foreach (var view in personalViews)
                {
                    var viewId = view.GetAttributeValue<Guid>("userqueryid");
                    var name = view.GetAttributeValue<string>("name") ?? "";
                    var qt = view.GetAttributeValue<int>("querytype");
                    var stateCode = view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;

                    sb.AppendLine($"{viewId}\t{EscapeTab(name)}\t{MapQueryType(qt)}\t{(stateCode == 0 ? "Active" : "Inactive")}");

                    if (includeFetchXml)
                        AppendViewXml(sb, name, view.GetAttributeValue<string>("fetchxml"), view.GetAttributeValue<string>("layoutxml"));
                }
            }

            return sb.ToString();
        }

        // ── Data Helpers ──────────────────────────────────────────────────

        private DataCollection<Entity> FindViewsByNameContains(string entityName, string nameFilter, int queryType)
        {
            var query = new QueryExpression("savedquery")
            {
                ColumnSet = new ColumnSet("savedqueryid", "name", "querytype", "isdefault", "statecode", "ismanaged")
            };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{nameFilter}%");
            if (queryType >= 0)
                query.Criteria.AddCondition("querytype", ConditionOperator.Equal, queryType);
            query.AddOrder("name", OrderType.Ascending);
            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private DataCollection<Entity> GetSystemViews(string entityName, int queryType, bool includeFetchXml)
        {
            var columns = new ColumnSet(
                "savedqueryid", "name", "querytype", "isdefault",
                "statecode", "ismanaged", "description");

            if (includeFetchXml)
            {
                columns.AddColumn("fetchxml");
                columns.AddColumn("layoutxml");
            }

            var query = new QueryExpression("savedquery") { ColumnSet = columns };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);
            if (queryType >= 0)
                query.Criteria.AddCondition("querytype", ConditionOperator.Equal, queryType);
            query.AddOrder("querytype", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);
            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private DataCollection<Entity> GetPersonalViews(string entityName, int queryType, bool includeFetchXml)
        {
            var columns = new ColumnSet(
                "userqueryid", "name", "querytype", "statecode", "description");

            if (includeFetchXml)
            {
                columns.AddColumn("fetchxml");
                columns.AddColumn("layoutxml");
            }

            var query = new QueryExpression("userquery") { ColumnSet = columns };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);
            if (queryType >= 0)
                query.Criteria.AddCondition("querytype", ConditionOperator.Equal, queryType);
            query.AddOrder("querytype", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);
            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private Entity TryGetSystemView(Guid viewId)
        {
            var query = new QueryExpression("savedquery") { ColumnSet = new ColumnSet(true) };
            query.Criteria.AddCondition("savedqueryid", ConditionOperator.Equal, viewId);
            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private Entity TryGetPersonalView(Guid viewId)
        {
            try
            {
                var query = new QueryExpression("userquery") { ColumnSet = new ColumnSet(true) };
                query.Criteria.AddCondition("userqueryid", ConditionOperator.Equal, viewId);
                var result = _serviceClient.RetrieveMultiple(query);
                return result.Entities.Count > 0 ? result.Entities[0] : null;
            }
            catch { return null; }
        }

        // ── Static Helpers ────────────────────────────────────────────────

        private static void AppendViewXml(StringBuilder sb, string viewName, string fetchXml, string layoutXml)
        {
            if (string.IsNullOrEmpty(fetchXml) && string.IsNullOrEmpty(layoutXml))
                return;

            sb.AppendLine();
            if (!string.IsNullOrEmpty(fetchXml))
            {
                sb.AppendLine($"[FetchXML: {viewName}]");
                sb.AppendLine(ViewXmlHelper.PrettyPrintXml(fetchXml));
            }
            if (!string.IsNullOrEmpty(layoutXml))
            {
                sb.AppendLine($"[LayoutXML: {viewName}]");
                sb.AppendLine(ViewXmlHelper.PrettyPrintXml(layoutXml));
            }
            sb.AppendLine();
        }

        private static string MapQueryType(int queryType) => queryType switch
        {
            0 => "Public",
            1 => "Lookup",
            2 => "AdvancedSearch",
            4 => "QuickFind",
            64 => "SubGrid",
            131072 => "Custom",
            _ => $"Other({queryType})"
        };

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

        // ── Shared Validation Helpers ─────────────────────────────────────

        private struct ValidationResult
        {
            public List<string> Errors;
            public List<string> Warnings;
        }

        private static ValidationResult? RunValidation(string newLayoutXml, string newFetchXml,
            string effectiveFetchXml, int queryType, string currentFetchXml)
        {
            var allErrors = new List<string>();
            var allWarnings = new List<string>();

            var (layoutErrors, layoutWarnings) = ViewXmlHelper.ValidateLayoutXml(newLayoutXml);
            allErrors.AddRange(layoutErrors);
            allWarnings.AddRange(layoutWarnings);

            if (newFetchXml != null)
            {
                var (fetchErrors, fetchWarnings) = ViewXmlHelper.ValidateFetchXml(newFetchXml);
                allErrors.AddRange(fetchErrors);
                allWarnings.AddRange(fetchWarnings);
            }

            var syncErrors = ViewXmlHelper.ValidateSync(effectiveFetchXml, newLayoutXml);
            allErrors.AddRange(syncErrors);

            if (queryType == 4 && newFetchXml != null && currentFetchXml != null)
            {
                var qfErrors = ViewXmlHelper.ValidateQuickFindPreservation(currentFetchXml, newFetchXml);
                allErrors.AddRange(qfErrors);
            }

            if (allErrors.Count > 0)
                return new ValidationResult { Errors = allErrors, Warnings = allWarnings };

            return null;
        }

        private static CallToolResult BuildValidationBlockedResult(string prefix, string entityName, Guid viewId, string viewName,
            List<string> errors, List<string> warnings, string fetchBackupPath, string layoutBackupPath, string action)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[{prefix}] BLOCKED — Validation failed");
            sb.AppendLine($"ViewId: {viewId}");
            sb.AppendLine($"Errors: {errors.Count}");
            foreach (var error in errors)
                sb.AppendLine($"- {error}");
            if (warnings.Count > 0)
            {
                sb.AppendLine($"Warnings: {warnings.Count}");
                foreach (var warning in warnings)
                    sb.AppendLine($"- {warning}");
            }
            sb.AppendLine(fetchBackupPath != null ? $"Backup: saved (no changes made)" : $"Backup: not needed (no changes made)");
            sb.AppendLine($"Tip: Fix the errors above and retry. Refer to docs://instructions_for_views for rules.");

            var allIssues = new List<string>(errors);
            if (warnings.Count > 0) allIssues.AddRange(warnings);

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                {
                    Action = action, Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                    Status = "blocked_validation", Validated = true, ValidationErrors = allIssues,
                    FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
                })
            };
        }

        private static CallToolResult BuildServerValidationBlockedResult(string prefix, string entityName, Guid viewId, string viewName,
            string error, string fetchBackupPath, string layoutBackupPath, string action,
            string restoredLayoutBackup = null, string restoredFetchBackup = null)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[{prefix}] BLOCKED — FetchXML validation failed (server-side)");
            sb.AppendLine($"ViewId: {viewId}");
            sb.AppendLine($"Error: {error}");
            sb.AppendLine($"Tip: Fix the FetchXML and retry.");

            var result = new UpsertViewResult
            {
                Action = action, Entity = entityName, ViewId = viewId.ToString(), ViewName = viewName,
                Status = "blocked_validation", Validated = true,
                ValidationErrors = [error],
                FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
            };
            if (restoredLayoutBackup != null) result.RestoredFromLayoutXmlBackup = restoredLayoutBackup;
            if (restoredFetchBackup != null) result.RestoredFromFetchXmlBackup = restoredFetchBackup;

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(result)
            };
        }

        private string ValidateFetchXmlExpression(string fetchXml)
        {
            try
            {
                var request = new OrganizationRequest("ValidateFetchXmlExpression");
                request["FetchXml"] = fetchXml;
                _serviceClient.Execute(request);
                return null;
            }
            catch (Exception ex)
            {
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
            catch { return false; }
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

        // ── Field Name Validation ─────────────────────────────────────

        private CallToolResult ValidateFieldNames(string entityName, string fetchXml, string prefix)
        {
            XDocument fetchDoc;
            try
            {
                fetchDoc = XDocument.Parse(fetchXml);
            }
            catch
            {
                return null;
            }

            var mainEntity = fetchDoc.Root?.Element("entity");
            if (mainEntity == null)
                return null;

            var mainFields = ExtractFieldNames(mainEntity);
            var linkEntities = mainEntity.Elements("link-entity").ToList();

            Dictionary<string, AttributeMetadata> attrMap;
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Attributes
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                attrMap = response.EntityMetadata.Attributes
                    .ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase);
            }
            catch (Exception ex)
            {
                return ErrorResult($"[{prefix}] BLOCKED — Failed to retrieve metadata for entity '{entityName}': {ex.Message}");
            }

            var allMissing = new List<(string Field, string Entity)>();

            var missingMain = mainFields.Where(f => !attrMap.ContainsKey(f)).ToList();
            foreach (var f in missingMain)
                allMissing.Add((f, entityName));

            var linkAttrMaps = new Dictionary<string, Dictionary<string, AttributeMetadata>>(StringComparer.OrdinalIgnoreCase);
            foreach (var le in linkEntities)
            {
                var linkedEntityName = le.Attribute("name")?.Value;
                if (string.IsNullOrEmpty(linkedEntityName))
                    continue;

                var linkFields = ExtractFieldNames(le);
                if (linkFields.Count == 0)
                    continue;

                if (!linkAttrMaps.TryGetValue(linkedEntityName, out var linkMap))
                {
                    try
                    {
                        var linkRequest = new RetrieveEntityRequest
                        {
                            LogicalName = linkedEntityName,
                            EntityFilters = EntityFilters.Attributes
                        };
                        var linkResponse = (RetrieveEntityResponse)_serviceClient.Execute(linkRequest);
                        linkMap = linkResponse.EntityMetadata.Attributes
                            .ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase);
                        linkAttrMaps[linkedEntityName] = linkMap;
                    }
                    catch
                    {
                        continue;
                    }
                }

                var missingLink = linkFields.Where(f => !linkMap.ContainsKey(f)).ToList();
                foreach (var f in missingLink)
                    allMissing.Add((f, linkedEntityName));
            }

            if (allMissing.Count == 0)
                return null;

            var sb = new StringBuilder();
            sb.AppendLine($"[{prefix}] BLOCKED — Field(s) not found in entity metadata");
            foreach (var (field, entity) in allMissing)
            {
                sb.AppendLine($"- '{field}' not found on '{entity}'");
                var map = entity == entityName ? attrMap : linkAttrMaps.GetValueOrDefault(entity);
                if (map != null)
                {
                    var similar = map.Keys
                        .Where(k => k.Contains(field) || field.Contains(k) || LevenshteinClose(k, field))
                        .Take(5)
                        .ToList();
                    if (similar.Count > 0)
                        sb.AppendLine($"  Similar: {string.Join(", ", similar)}");
                }
            }
            sb.AppendLine($"\nTip: Use get_tables('{entityName}') to list all available fields.");
            return ErrorResult(sb.ToString());
        }

        private static HashSet<string> ExtractFieldNames(XElement entityElement)
        {
            var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var attr in entityElement.Elements("attribute"))
            {
                var name = attr.Attribute("name")?.Value;
                if (!string.IsNullOrEmpty(name))
                    names.Add(name);
            }
            foreach (var cond in entityElement.Descendants("condition"))
            {
                var name = cond.Attribute("attribute")?.Value;
                if (!string.IsNullOrEmpty(name))
                    names.Add(name);
            }
            foreach (var order in entityElement.Elements("order"))
            {
                var name = order.Attribute("attribute")?.Value;
                if (!string.IsNullOrEmpty(name))
                    names.Add(name);
            }
            return names;
        }

        private static bool LevenshteinClose(string a, string b)
        {
            if (Math.Abs(a.Length - b.Length) > 3) return false;
            var dist = 0;
            var len = Math.Min(a.Length, b.Length);
            for (var i = 0; i < len; i++)
                if (char.ToLowerInvariant(a[i]) != char.ToLowerInvariant(b[i]))
                    dist++;
            dist += Math.Abs(a.Length - b.Length);
            return dist <= 2;
        }

        private string EnsureObjectTypeCode(string layoutXml, string entityName)
        {
            try
            {
                var doc = XDocument.Parse(layoutXml);
                var grid = doc.Root;
                if (grid?.Name.LocalName != "grid" || grid.Attribute("object") != null)
                    return layoutXml;

                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Entity
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                var otc = response.EntityMetadata.ObjectTypeCode;
                if (otc.HasValue)
                {
                    grid.SetAttributeValue("object", otc.Value);
                    return grid.ToString(SaveOptions.DisableFormatting);
                }
                return layoutXml;
            }
            catch
            {
                return layoutXml;
            }
        }

        private Entity RetrieveView(Guid viewId)
        {
            try
            {
                return _serviceClient.Retrieve("savedquery", viewId,
                    new ColumnSet("fetchxml", "layoutxml", "name", "returnedtypecode", "querytype"));
            }
            catch { }

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
            catch { return null; }
        }
    }
}
