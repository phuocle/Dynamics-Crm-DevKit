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
using System.Net.Http;
using System.ServiceModel;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageViewTool : McpToolBase
    {
        private static readonly object _schemaLock = new();

        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private string _workspaceFolder;

        public ManageViewTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_view", Title = "Manage entity views",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertViewResult)),
        Description(
            "Manage views (savedquery/userquery). Actions: list, detail, create, update, rename, set_default, undo.\n" +
            "SYNC RULE: every FetchXML <attribute> MUST have matching LayoutXML <cell>; mismatch blocks update. querytype: 0=Public, 4=QuickFind, 64=SubGrid.\n" +
            "QuickFind (querytype=4): searchable fields are <condition> in <filter isquickfindfields=\"1\">; <cell> = display only.\n" +
            "Always list/detail BEFORE editing. Pass workspace_folder for backups (saved to .devkit/backups/views/). See docs://instructions_for_views, schema://layoutxml, schema://fetchxml.")]
        public CallToolResult manage_view(
            [Description("'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'."
            )] string action,
            [Description("Entity Display/logical name (Display Name resolved first)."
            )] string entity_name,
            [Description("GUID. Required: detail/update/rename/undo."
            )] string view_id = "",
            [Description("Name contains. 1 match → auto-select; multiple → returns candidates, use view_id."
            )] string view_name = "",
            [Description("0=Public, 1=Lookup, 4=QuickFind, 64=SubGrid. -1=all."
            )] int query_type = -1,
            [Description("List only. Detail always includes XMLs."
            )] bool include_fetchxml = false,
            [Description("Include userquery (personal views)."
            )] bool include_personal = false,
            [Description("update/create: LayoutXML. undo: backup path."
            )] string layoutxml = "",
            [Description("Empty = keep (update) / auto-generate (create). undo: backup path."
            )] string fetchxml = "",
            [Description("XSD + sync check before write."
            )] bool validate = true,
            [Description("Backup before overwrite."
            )] bool backup = true,
            [Description("JSON array of {cell_name, set_attributes, remove_attributes}. Patch cell attrs (imageproviderwebresource, ishidden, …) without rebuilding LayoutXML."
            )] string cell_updates_json = "",
            [Description("Optional workspace folder for backups."
            )] string workspace_folder = "")
        {
            _workspaceFolder = workspace_folder;
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("Error: action is required. Valid values: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.");

                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("Error: entity_name is required.");

                var normalizedAction = action.Trim().ToLowerInvariant();
                var entityName = entity_name.Trim();

                // Early view_id GUID validation for actions that require it
                if (!string.IsNullOrWhiteSpace(view_id) && !Guid.TryParse(view_id.Trim(), out _))
                    return Error($"Error: '{view_id}' is not a valid GUID.");

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_view");
                if (!entityResult.IsSuccess)
                    return Error($"Error: {entityResult.Error}");
                entityName = entityResult.Value.LogicalName;

                return normalizedAction switch
                {
                    "list" => HandleList(entityName, view_name, query_type, include_fetchxml, include_personal),
                    "detail" => HandleDetail(entityName, view_id, view_name),
                    "create" => HandleCreate(entityName, view_name, query_type, layoutxml, fetchxml, validate),
                    "update" => HandleUpdate(entityName, view_id, view_name, query_type, include_personal, layoutxml, fetchxml, validate, backup, cell_updates_json),
                    "rename" => HandleRename(entityName, view_id, view_name, backup),
                    "set_default" => HandleSetDefault(entityName, view_id, view_name),
                    "undo" => HandleUndo(entityName, view_id, layoutxml, fetchxml, validate),
                    _ => Error($"Error: '{action}' is not a valid action. Valid actions: list, detail, create, update, rename, set_default, undo.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Action: list ──────────────────────────────────────────────────

        private CallToolResult HandleList(string entityName, string viewName, int queryType, bool includeFetchXml, bool includePersonal)
        {
            if (!string.IsNullOrWhiteSpace(viewName))
            {
                var nameFilter = viewName.Trim();
                var matchingViews = FindViewsByNameContains(entityName, nameFilter, queryType, includeFetchXml);
                var matchingPersonal = includePersonal
                    ? FindPersonalViewsByNameContains(entityName, nameFilter, queryType, includeFetchXml)
                    : new EntityCollection().Entities;

                if (matchingViews.Count == 0 && matchingPersonal.Count == 0)
                    return Success($"[Views] {entityName} — 0 views found matching '{nameFilter}'", null);
                if (matchingViews.Count == 1 && matchingPersonal.Count == 0)
                {
                    var matchId = matchingViews[0].GetAttributeValue<Guid>("savedqueryid");
                    return HandleDetail(entityName, matchId.ToString(), "");
                }
                if (matchingViews.Count == 0 && matchingPersonal.Count == 1)
                {
                    var matchId = matchingPersonal[0].GetAttributeValue<Guid>("userqueryid");
                    return HandleDetail(entityName, matchId.ToString(), "");
                }
                return Success(FormatViewList(entityName, matchingViews, includeFetchXml, includePersonal, nameFilter, matchingPersonal.Count > 0 ? matchingPersonal : null), null);
            }

            var systemViews = GetSystemViews(entityName, queryType, includeFetchXml);
            var personalViews = includePersonal
                ? GetPersonalViews(entityName, queryType, includeFetchXml)
                : new EntityCollection().Entities;

            if (systemViews.Count == 0 && personalViews.Count == 0)
            {
                var typeHint = queryType >= 0 ? $" with querytype={queryType}" : "";
                return Success($"[Views] {entityName} — 0 views found{typeHint}", null);
            }

            return Success(FormatViewList(entityName, systemViews, includeFetchXml, includePersonal, null, personalViews), null);
        }

        // ── Action: detail ────────────────────────────────────────────────

        private CallToolResult HandleDetail(string entityName, string viewId, string viewName)
        {
            if (string.IsNullOrWhiteSpace(viewId) && string.IsNullOrWhiteSpace(viewName))
                return Error("Error: view_id or view_name is required for 'detail' action.");

            if (!string.IsNullOrWhiteSpace(viewId))
            {
                if (!Guid.TryParse(viewId.Trim(), out var id))
                    return Error($"Error: '{viewId}' is not a valid GUID.");
                var detailText = GetViewDetail(id, entityName);
                return detailText.StartsWith("Error:", StringComparison.OrdinalIgnoreCase)
                    ? Error(detailText)
                    : Success(detailText, null);
            }

            var resolved = ResolveViewByName(entityName, viewName, -1, true, "detail");
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);

            var resolvedDetailText = GetViewDetail(resolved.ViewId, entityName);
            return resolvedDetailText.StartsWith("Error:", StringComparison.OrdinalIgnoreCase)
                ? Error(resolvedDetailText)
                : Success(resolvedDetailText, null);
        }

        // ── Action: create ─────────────────────────────────────────────────

        private CallToolResult HandleCreate(string entityName, string viewName, int queryType,
            string layoutxml, string fetchxml, bool validate)
        {
            if (string.IsNullOrWhiteSpace(viewName))
                return Error("Error: view_name is required for 'create' action.");

            if (string.IsNullOrWhiteSpace(layoutxml))
                return Error("Error: layoutxml is required for 'create' action.");

            viewName = viewName.Trim();
            var effectiveQueryType = queryType >= 0 ? queryType : 0;
            var newLayoutXml = ViewXmlHelper.StripXmlDeclaration(layoutxml.Trim());
            newLayoutXml = EnsureObjectTypeCode(newLayoutXml, entityName);
            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml)
                ? $"<fetch><entity name='{entityName}'><attribute name='{entityName}id'/></entity></fetch>"
                : ViewXmlHelper.StripXmlDeclaration(fetchxml.Trim());

            var fetchNormalization = NormalizeFetchXmlNames(newFetchXml, entityName);
            if (fetchNormalization.Errors.Count > 0)
                return Error(FormatNameResolutionErrors("ViewCreate", entityName, viewName, null, fetchNormalization.Errors));
            newFetchXml = fetchNormalization.Xml;

            var layoutNormalization = NormalizeLayoutXmlNames(newLayoutXml, newFetchXml, entityName);
            if (layoutNormalization.Errors.Count > 0)
                return Error(FormatNameResolutionErrors("ViewCreate", entityName, viewName, null, layoutNormalization.Errors));
            newLayoutXml = layoutNormalization.Xml;

            var duplicate = FindViewByName(entityName, viewName);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("savedqueryid");
                return Error(
                    $"[Error] A view with this name already exists\n" +
                    $"Entity: {entityName}\n" +
                    $"Name: {viewName}\n" +
                    $"ExistingViewId: {dupId}\n" +
                    $"Tip: Choose a different name or use action='update' with the existing view_id");
            }

            if (validate)
            {
                var validationResult = RunValidation(newLayoutXml, newFetchXml, newFetchXml, effectiveQueryType, null);
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
                var fieldErrors = ValidateFieldNames(entityName, newFetchXml);
                if (fieldErrors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[ViewCreate] BLOCKED — Field(s) not found in entity metadata");
                    sb.AppendLine($"Entity: {entityName}");
                    sb.AppendLine($"ViewName: {viewName}");
                    sb.AppendLine($"Errors: {fieldErrors.Count}");
                    foreach (var error in fieldErrors)
                        sb.AppendLine($"- {error}");
                    sb.AppendLine($"Tip: Use get_tables('{entityName}') to list all available fields.");

                    var allIssues = new List<string>(fieldErrors);

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

            var newView = new Entity("savedquery")
            {
                ["name"] = viewName,
                ["returnedtypecode"] = entityName,
                ["querytype"] = effectiveQueryType,
                ["fetchxml"] = newFetchXml,
                ["layoutxml"] = newLayoutXml
            };
            if (_options.DryRun)
                return DryRun($"Would CREATE view '{viewName}' on entity '{entityName}'.", new UpsertViewResult
                {
                    Action = "create",
                    Entity = entityName,
                    ViewName = viewName,
                    Status = "not_executed",
                    Validated = validate,
                    Published = false,
                    CreateMode = "metadata"
                });

            var newViewId = _serviceClient.Create(newView);

            PublishHelper.PublishEntity(_serviceClient, entityName);
            MetadataOperationWaitHelper.WaitAfterFormView();

            var resultSb = new StringBuilder(256);
            resultSb.AppendLine($"[ViewCreate] {entityName} — {viewName}");
            resultSb.AppendLine($"ViewId: {newViewId}");
            resultSb.AppendLine($"Status: Created successfully");
            resultSb.AppendLine($"Validated: {(validate ? "yes (sync OK)" : "skipped")}");
            resultSb.AppendLine("Published: yes");
            var quickFindColumns = AppendQuickFindColumnsSummary(resultSb, effectiveQueryType, newFetchXml);

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = resultSb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                {
                    Action = "created", Entity = entityName, ViewId = newViewId.ToString(), ViewName = viewName,
                    Status = "created", Validated = validate, Published = true,
                    CreateMode = SolutionComponentCreateMode.None.ToString(),
                    QuickFindColumns = quickFindColumns
                })
            };
        }

        // ── Action: update ─────────────────────────────────────────────────

        private CallToolResult HandleUpdate(string entityName, string viewId,
            string viewName, int queryType, bool includePersonal,
            string layoutxml, string fetchxml, bool validate, bool backup,
            string cellUpdatesJson = "")
        {
            if (string.IsNullOrWhiteSpace(viewId) && string.IsNullOrWhiteSpace(viewName))
                return Error("Error: view_id or view_name is required for 'update' action.");

            Guid updateId;
            if (!string.IsNullOrWhiteSpace(viewId))
            {
                if (!Guid.TryParse(viewId.Trim(), out updateId))
                    return Error($"Error: '{viewId}' is not a valid GUID.");
            }
            else
            {
                var resolved = ResolveViewByName(entityName, viewName, queryType, includePersonal, "update");
                if (!string.IsNullOrEmpty(resolved.Error))
                    return Error(resolved.Error);
                updateId = resolved.ViewId;
            }

            var hasLayoutXml = !string.IsNullOrWhiteSpace(layoutxml);
            var hasCellUpdates = !string.IsNullOrWhiteSpace(cellUpdatesJson);

            if (!hasLayoutXml && !hasCellUpdates)
                return Error("Error: at least one of layoutxml or cell_updates_json is required for 'update' action.");

            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml) ? null : ViewXmlHelper.StripXmlDeclaration(fetchxml.Trim());

            var currentView = RetrieveView(updateId);
            if (currentView == null)
                return Error(
                    $"[Error] View not found\n" +
                    $"ViewId: {updateId}\n" +
                    $"Tip: Use manage_view with action='list' and entity_name='{entityName}' to find valid view IDs");

            var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
            var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
            var currentViewName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;
            var currentQueryType = currentView.GetAttributeValue<int>("querytype");

            if (newFetchXml != null)
            {
                var fetchNormalization = NormalizeFetchXmlNames(newFetchXml, entityName);
                if (fetchNormalization.Errors.Count > 0)
                    return Error(FormatNameResolutionErrors("ViewUpdate", entityName, currentViewName, updateId, fetchNormalization.Errors));
                newFetchXml = fetchNormalization.Xml;
            }

            var effectiveFetchXml = newFetchXml ?? currentFetchXml;

            var baseLayoutXml = hasLayoutXml
                ? ViewXmlHelper.StripXmlDeclaration(layoutxml.Trim())
                : currentLayoutXml;

            List<string> cellPatchWarnings = null;
            var usedCellPatch = false;

            if (hasCellUpdates)
            {
                var (instructions, parseError) = ParseCellUpdates(cellUpdatesJson);
                if (parseError != null)
                    return Error(parseError);

                var cellNameErrors = NormalizeCellUpdateNames(instructions, effectiveFetchXml, entityName);
                if (cellNameErrors.Count > 0)
                    return Error(FormatNameResolutionErrors("ViewUpdate", entityName, currentViewName, updateId, cellNameErrors));

                var (patchedXml, patchErrors, patchWarnings) = ViewXmlHelper.ApplyCellAttributeUpdates(baseLayoutXml, instructions);
                if (patchErrors.Count > 0)
                {
                    var sb = new StringBuilder(256);
                    sb.AppendLine($"[ViewUpdate] BLOCKED — Cell patch failed");
                    sb.AppendLine($"ViewId: {updateId}");
                    sb.AppendLine($"Errors: {patchErrors.Count}");
                    foreach (var error in patchErrors)
                        sb.AppendLine($"- {error}");
                    sb.AppendLine($"Tip: Use manage_view action='detail' to see current LayoutXML cells.");
                    return Error(sb.ToString());
                }

                baseLayoutXml = patchedXml;
                usedCellPatch = true;
                if (patchWarnings.Count > 0)
                    cellPatchWarnings = patchWarnings;
            }

            var newLayoutXml = EnsureObjectTypeCode(baseLayoutXml, entityName);
            if (hasLayoutXml)
            {
                var layoutNormalization = NormalizeLayoutXmlNames(newLayoutXml, effectiveFetchXml, entityName);
                if (layoutNormalization.Errors.Count > 0)
                    return Error(FormatNameResolutionErrors("ViewUpdate", entityName, currentViewName, updateId, layoutNormalization.Errors));
                newLayoutXml = layoutNormalization.Xml;
            }

            string fetchBackupPath = null;
            string layoutBackupPath = null;
            if (backup)
            {
                (fetchBackupPath, layoutBackupPath) = ViewBackupHelper.SaveBackup(entityName, updateId, currentViewName, currentFetchXml, currentLayoutXml, _workspaceFolder);
            }

            if (validate)
            {
                var validationResult = RunValidation(newLayoutXml, newFetchXml, effectiveFetchXml,
                    currentQueryType, currentFetchXml);
                if (validationResult != null)
                {
                    return BuildValidationBlockedResult("ViewUpdate", entityName, updateId, currentViewName,
                        validationResult.Value.Errors, validationResult.Value.Warnings,
                        fetchBackupPath, layoutBackupPath, "updated");
                }
            }

            if (validate)
            {
                var fieldErrors = ValidateFieldNames(entityName, effectiveFetchXml);
                if (fieldErrors.Count > 0)
                {
                    return BuildValidationBlockedResult("ViewUpdate", entityName, updateId, currentViewName,
                        fieldErrors, new List<string>(), fetchBackupPath, layoutBackupPath, "updated");
                }
            }

            if (validate && newFetchXml != null)
            {
                var serverError = ValidateFetchXmlExpression(newFetchXml);
                if (serverError != null)
                    return BuildServerValidationBlockedResult("ViewUpdate", entityName, updateId, currentViewName,
                        serverError, fetchBackupPath, layoutBackupPath, "updated");
            }

            var updatedParts = DetermineUpdatedParts(hasLayoutXml, usedCellPatch, newFetchXml != null);

            var isPersonalView = currentView.LogicalName == "userquery";
            var update = new Entity(currentView.LogicalName, updateId);
            update["layoutxml"] = newLayoutXml;
            if (newFetchXml != null)
                update["fetchxml"] = newFetchXml;
            if (!isPersonalView)
                update["returnedtypecode"] = returnedTypeCode;
            if (_options.DryRun)
                return DryRun($"Would UPDATE view '{currentViewName}' ({updateId}) on entity '{entityName}'.", new UpsertViewResult
                {
                    Action = "update",
                    Entity = entityName,
                    ViewId = updateId.ToString(),
                    ViewName = currentViewName,
                    Status = "not_executed",
                    Validated = validate,
                    UpdatedParts = updatedParts,
                    FetchXmlBackupPath = fetchBackupPath,
                    LayoutXmlBackupPath = layoutBackupPath,
                    Published = false
                });
            _serviceClient.Update(update);

            PublishHelper.PublishEntity(_serviceClient, returnedTypeCode);
            MetadataOperationWaitHelper.WaitAfterFormView();

            {
                var sb = ViewBackupHelper.BuildSuccessText(entityName, updateId, currentViewName, fetchBackupPath, layoutBackupPath,
                    validate, newFetchXml != null, true);
                if (cellPatchWarnings?.Count > 0)
                {
                    sb.AppendLine($"CellPatchWarnings: {cellPatchWarnings.Count}");
                    foreach (var w in cellPatchWarnings)
                        sb.AppendLine($"  - {w}");
                }
                var quickFindColumns = AppendQuickFindColumnsSummary(sb, currentQueryType, effectiveFetchXml);
                sb.AppendLine();
                ViewBackupHelper.AppendRollbackInfo(sb, fetchBackupPath, layoutBackupPath, updateId);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                    {
                        Action = "updated", Entity = entityName, ViewId = updateId.ToString(), ViewName = currentViewName,
                        Status = "updated", Validated = validate,
                        UpdatedParts = updatedParts, ValidationWarnings = cellPatchWarnings,
                        FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = true,
                        QuickFindColumns = quickFindColumns
                    })
                };
            }
        }

        private static string DetermineUpdatedParts(bool hasExplicitLayout, bool usedCellPatch, bool hasFetchXml)
        {
            string layoutPart;
            if (usedCellPatch && hasExplicitLayout)
                layoutPart = "LayoutXML (cell patch applied)";
            else if (usedCellPatch)
                layoutPart = "LayoutXML (cell patch)";
            else
                layoutPart = "LayoutXML only";

            return hasFetchXml
                ? layoutPart.Replace(" only", "") + " + FetchXML"
                : layoutPart;
        }

        // ── Action: rename ─────────────────────────────────────────────────

        private CallToolResult HandleRename(string entityName, string viewId, string viewName,
            bool backup)
        {
            if (string.IsNullOrWhiteSpace(viewId))
                return Error("Error: view_id is required for 'rename' action.");
            if (!Guid.TryParse(viewId.Trim(), out var renameId))
                return Error($"Error: '{viewId}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(viewName))
                return Error("Error: view_name is required for 'rename' action.");

            viewName = viewName.Trim();

            var currentView = RetrieveView(renameId);
            if (currentView == null)
                return Error(
                    $"[Error] View not found\n" +
                    $"ViewId: {renameId}\n" +
                    $"Tip: Use manage_view with action='list' and entity_name='{entityName}' to find valid view IDs");

            var oldName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

            var duplicate = FindViewByName(returnedTypeCode, viewName, excludeViewId: renameId);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("savedqueryid");
                return Error(
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
                var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
                var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
                (fetchBackupPath, layoutBackupPath) = ViewBackupHelper.SaveBackup(entityName, renameId, oldName, currentFetchXml, currentLayoutXml, _workspaceFolder);
            }

            var update = new Entity(currentView.LogicalName, renameId) { ["name"] = viewName };
            if (_options.DryRun)
                return DryRun($"Would RENAME view '{oldName}' to '{viewName}' ({renameId}) on entity '{entityName}'.", new UpsertViewResult
                {
                    Action = "rename",
                    Entity = entityName,
                    ViewId = renameId.ToString(),
                    ViewName = viewName,
                    Status = "not_executed",
                    FetchXmlBackupPath = fetchBackupPath,
                    LayoutXmlBackupPath = layoutBackupPath,
                    Published = false
                });
            _serviceClient.Update(update);

            PublishHelper.PublishEntity(_serviceClient, returnedTypeCode);
            MetadataOperationWaitHelper.WaitAfterFormView();

            var sb = new StringBuilder(256);
            sb.AppendLine($"[ViewRename] {entityName}");
            sb.AppendLine($"ViewId: {renameId}");
            sb.AppendLine($"OldName: {oldName}");
            sb.AppendLine($"NewName: {viewName}");
            sb.AppendLine($"Status: Renamed successfully");
            sb.AppendLine("Published: yes");
            if (fetchBackupPath != null)
            {
                sb.AppendLine($"Backup:");
                sb.AppendLine($"  {fetchBackupPath}");
                sb.AppendLine($"  {layoutBackupPath}");
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                {
                    Action = "renamed", Entity = entityName, ViewId = renameId.ToString(), ViewName = viewName,
                    Status = "renamed", Validated = false,
                    FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = true
                })
            };
        }

        // ── Action: set_default ───────────────────────────────────────────

        private CallToolResult HandleSetDefault(string entityName, string viewId, string viewName)
        {
            if (string.IsNullOrWhiteSpace(viewId) && string.IsNullOrWhiteSpace(viewName))
                return Error("Error: view_id or view_name is required for 'set_default' action.");

            Guid targetId;

            if (!string.IsNullOrWhiteSpace(viewId))
            {
                if (!Guid.TryParse(viewId.Trim(), out targetId))
                    return Error($"Error: '{viewId}' is not a valid GUID.");

                var check = TryGetSystemView(targetId);
                if (check == null)
                    return Error(
                        $"[Error] View not found\n" +
                        $"ViewId: {targetId}\n" +
                        $"Tip: Use manage_view with action='list' and entity_name='{entityName}' to find valid view IDs");

                viewName = check.GetAttributeValue<string>("name") ?? targetId.ToString();
                var qt = check.GetAttributeValue<int>("querytype");
                if (qt != 0)
                    return Error(
                        $"[Error] Only Public views (querytype=0) can be set as default\n" +
                        $"ViewId: {targetId}\n" +
                        $"ViewType: {MapQueryType(qt)} ({qt})");
            }
            else
            {
                var resolved = ResolveViewByName(entityName, viewName, 0, false, "set_default");
                if (!string.IsNullOrEmpty(resolved.Error))
                    return Error(resolved.Error);
                targetId = resolved.ViewId;
                viewName = resolved.View.GetAttributeValue<string>("name") ?? targetId.ToString();
            }

            if (_options.DryRun)
                return DryRun($"Would SET DEFAULT view '{viewName}' ({targetId}) on entity '{entityName}'.", new UpsertViewResult
                {
                    Action = "set_default",
                    Entity = entityName,
                    ViewId = targetId.ToString(),
                    ViewName = viewName,
                    Status = "not_executed",
                    Published = false
                });

            var update = new Entity("savedquery", targetId) { ["isdefault"] = true };
            _serviceClient.Update(update);

            PublishHelper.PublishEntity(_serviceClient, entityName);
            MetadataOperationWaitHelper.WaitAfterFormView();

            var sb = new StringBuilder(256);
            sb.AppendLine($"[ViewSetDefault] {entityName} — {viewName}");
            sb.AppendLine($"ViewId: {targetId}");
            sb.AppendLine($"Status: Set as default successfully");
            sb.AppendLine("Published: yes");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new UpsertViewResult
                {
                    Action = "set_default", Entity = entityName, ViewId = targetId.ToString(), ViewName = viewName,
                    Status = "set_default", Validated = false, Published = true
                })
            };
        }

        // ── Action: undo ───────────────────────────────────────────────────

        private CallToolResult HandleUndo(string entityName, string viewId,
            string layoutBackupPathArg, string fetchBackupPathArg, bool validate)
        {
            if (string.IsNullOrWhiteSpace(viewId))
                return Error("Error: view_id is required for 'undo' action.");
            if (!Guid.TryParse(viewId.Trim(), out var undoId))
                return Error($"Error: '{viewId}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(layoutBackupPathArg))
                return Error("Error: layoutxml (layout backup file path) is required for 'undo' action.");

            var layoutBackupPath = layoutBackupPathArg.Trim();
            var fetchBackupPath = string.IsNullOrWhiteSpace(fetchBackupPathArg) ? null : fetchBackupPathArg.Trim();

            if (!File.Exists(layoutBackupPath))
                return Error(
                    $"[Error] Layout backup file not found\n" +
                    $"Path: {layoutBackupPath}\n" +
                    $"Tip: Check the file path. Backup files are at: .devkit/backups/views/");

            string restoredLayoutXml;
            var layoutContent = File.ReadAllText(layoutBackupPath, Encoding.UTF8);
            var strippedLayout = ViewXmlHelper.StripXmlComments(layoutContent);
            if (string.IsNullOrWhiteSpace(strippedLayout))
                return Error(
                    $"[Error] Layout backup file is empty (no LayoutXML content)\n" +
                    $"Path: {layoutBackupPath}\n" +
                    $"Tip: This backup has no LayoutXML to restore. Try an earlier backup.");
            var layoutDoc = XDocument.Parse(strippedLayout);
            restoredLayoutXml = ViewXmlHelper.StripXmlDeclaration(layoutDoc.ToString());
            restoredLayoutXml = EnsureObjectTypeCode(restoredLayoutXml, entityName);

            string restoredFetchXml = null;
            if (fetchBackupPath != null)
            {
                if (!File.Exists(fetchBackupPath))
                    return Error(
                        $"[Error] Fetch backup file not found\n" +
                        $"Path: {fetchBackupPath}\n" +
                        $"Tip: Check the file path. Backup files are at: .devkit/backups/views/");

                var fetchContent = File.ReadAllText(fetchBackupPath, Encoding.UTF8);
                var strippedFetch = ViewXmlHelper.StripXmlComments(fetchContent);
                if (!string.IsNullOrWhiteSpace(strippedFetch))
                {
                    var fetchDoc = XDocument.Parse(strippedFetch);
                    restoredFetchXml = ViewXmlHelper.StripXmlDeclaration(fetchDoc.ToString());
                }
            }

            var currentView = RetrieveView(undoId);
            if (currentView == null)
                return Error(
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
                return DryRun($"Would RESTORE view '{viewName}' ({undoId}) from backup.", new UpsertViewResult
                {
                    Action = "undo",
                    Entity = entityName,
                    ViewId = undoId.ToString(),
                    ViewName = viewName,
                    Status = "not_executed",
                    RestoredFromFetchXmlBackup = fetchBackupPath,
                    RestoredFromLayoutXmlBackup = layoutBackupPath,
                    Published = false
                });
            _serviceClient.Update(update);

            PublishHelper.PublishEntity(_serviceClient, returnedTypeCode);
            MetadataOperationWaitHelper.WaitAfterFormView();

            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[ViewUndo] {entityName} — {viewName}");
                sb.AppendLine($"ViewId: {undoId}");
                sb.AppendLine($"Status: Restored successfully");
                sb.AppendLine($"RestoredFrom: {layoutBackupPath}");
                if (fetchBackupPath != null)
                    sb.AppendLine($"FetchRestoredFrom: {fetchBackupPath}");
                sb.AppendLine($"Validated: {(validate ? "yes" : "skipped")}");
                sb.AppendLine("Published: yes");
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
                        Published = true
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

            AppendQuickFindColumnsSummary(sb, qt, fetchXml);

            if (!string.IsNullOrEmpty(layoutXml))
            {
                var layoutDoc = XDocument.Parse(layoutXml);
                var rowId = layoutDoc.Descendants("row")
                    .Select(r => r.Attribute("id")?.Value)
                    .FirstOrDefault();
                var cells = layoutDoc.Descendants("cell").ToList();
                var visibleCount = 0;
                var hiddenCount = 0;
                var iconCount = 0;
                var columnLines = new List<string>();

                foreach (var cell in cells)
                {
                    var cellName = cell.Attribute("name")?.Value ?? "";
                    var width = cell.Attribute("width")?.Value;
                    var isHidden = cell.Attribute("ishidden")?.Value == "1";
                    var iconWr = cell.Attribute("imageproviderwebresource")?.Value;
                    var iconFn = cell.Attribute("imageproviderfunctionname")?.Value;

                    if (isHidden) hiddenCount++; else visibleCount++;
                    if (iconWr != null || iconFn != null) iconCount++;

                    var parts = new List<string>();
                    if (width != null) parts.Add($"{width}px");
                    if (isHidden) parts.Add("hidden");
                    if (string.Equals(cellName, rowId, StringComparison.OrdinalIgnoreCase)) parts.Add("row key");
                    if (iconWr != null || iconFn != null)
                    {
                        var iconParts = new List<string>();
                        if (iconWr != null) iconParts.Add(iconWr);
                        if (iconFn != null) iconParts.Add(iconFn);
                        parts.Add($"icon: {string.Join(" → ", iconParts)}");
                    }

                    var suffix = parts.Count > 0 ? $" ({string.Join(", ", parts)})" : "";
                    columnLines.Add($"  {cellName}{suffix}");
                }

                var notes = new List<string>();
                if (hiddenCount > 0) notes.Add($"{hiddenCount} hidden");
                if (iconCount > 0) notes.Add($"{iconCount} with custom icon");
                var notesSuffix = notes.Count > 0 ? $" ({string.Join(", ", notes)})" : "";
                sb.AppendLine($"[Columns] {cells.Count} columns{notesSuffix}");
                foreach (var line in columnLines)
                    sb.AppendLine(line);
                sb.AppendLine();
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

        private (Guid ViewId, Entity View, string Error) ResolveViewByName(
            string entityName,
            string viewName,
            int queryType,
            bool includePersonal,
            string actionName)
        {
            if (string.IsNullOrWhiteSpace(viewName))
                return (Guid.Empty, null, $"Error: view_name is required for '{actionName}' action.");

            var nameFilter = viewName.Trim();
            var systemMatches = FindViewsByNameContains(entityName, nameFilter, queryType).ToList();
            var personalMatches = includePersonal
                ? FindPersonalViewsByNameContains(entityName, nameFilter, queryType).ToList()
                : new List<Entity>();

            var matches = PreferExactViewNameMatches(systemMatches.Concat(personalMatches), nameFilter);

            if (matches.Count == 0)
            {
                var typeHint = queryType >= 0 ? $"{MapQueryType(queryType)} " : "";
                var scope = includePersonal ? "view" : "system view";
                return (Guid.Empty, null, $"Error: No {typeHint}{scope} found matching name '{nameFilter}' for entity '{entityName}'.");
            }

            if (matches.Count == 1)
            {
                var match = matches[0];
                return (GetViewId(match), match, null);
            }

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Views] Multiple views match '{nameFilter}' — provide view_id to disambiguate");
            sb.AppendLine();
            sb.AppendLine("viewid\tname\ttype\tsource");
            foreach (var v in matches)
            {
                var name = v.GetAttributeValue<string>("name") ?? "";
                var qt = v.GetAttributeValue<int>("querytype");
                sb.AppendLine($"{GetViewId(v)}\t{EscapeTab(name)}\t{MapQueryType(qt)}\t{GetViewSource(v)}");
            }

            return (Guid.Empty, null, sb.ToString());
        }

        private static List<Entity> PreferExactViewNameMatches(IEnumerable<Entity> views, string nameFilter)
        {
            var matches = views.ToList();
            if (matches.Count <= 1)
                return matches;

            var exactMatches = matches
                .Where(v => string.Equals(v.GetAttributeValue<string>("name")?.Trim(), nameFilter.Trim(), StringComparison.OrdinalIgnoreCase))
                .ToList();

            return exactMatches.Count > 0 ? exactMatches : matches;
        }

        private static Guid GetViewId(Entity view)
        {
            var id = string.Equals(view.LogicalName, "userquery", StringComparison.OrdinalIgnoreCase)
                ? view.GetAttributeValue<Guid>("userqueryid")
                : view.GetAttributeValue<Guid>("savedqueryid");
            return id != Guid.Empty ? id : view.Id;
        }

        private static string GetViewSource(Entity view) =>
            string.Equals(view.LogicalName, "userquery", StringComparison.OrdinalIgnoreCase) ? "personal" : "system";

        // ── Data Helpers ──────────────────────────────────────────────────

        private DataCollection<Entity> FindViewsByNameContains(string entityName, string nameFilter, int queryType, bool includeFetchXml = false)
        {
            var columns = new ColumnSet("savedqueryid", "name", "querytype", "isdefault", "statecode", "ismanaged");
            if (includeFetchXml)
            {
                columns.AddColumn("fetchxml");
                columns.AddColumn("layoutxml");
            }
            var query = new QueryExpression("savedquery")
            {
                ColumnSet = columns
            };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{nameFilter}%");
            if (queryType >= 0)
                query.Criteria.AddCondition("querytype", ConditionOperator.Equal, queryType);
            query.AddOrder("name", OrderType.Ascending);
            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private DataCollection<Entity> FindPersonalViewsByNameContains(string entityName, string nameFilter, int queryType, bool includeFetchXml = false)
        {
            var columns = new ColumnSet("userqueryid", "name", "querytype", "statecode");
            if (includeFetchXml)
            {
                columns.AddColumn("fetchxml");
                columns.AddColumn("layoutxml");
            }
            var query = new QueryExpression("userquery")
            {
                ColumnSet = columns
            };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
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
            var query = new QueryExpression("userquery") { ColumnSet = new ColumnSet(true) };
            query.Criteria.AddCondition("userqueryid", ConditionOperator.Equal, viewId);
            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
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

        private static List<string> ExtractQuickFindColumns(string fetchXml)
        {
            if (string.IsNullOrWhiteSpace(fetchXml))
                return [];

            var fetchDoc = XDocument.Parse(fetchXml);
            var qfFilter = fetchDoc.Descendants("filter")
                .FirstOrDefault(f => f.Attribute("isquickfindfields")?.Value == "1");

            if (qfFilter == null)
                return [];

            return qfFilter.Elements("condition")
                .Select(c => c.Attribute("attribute")?.Value)
                .Where(a => !string.IsNullOrWhiteSpace(a))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        private static List<string> AppendQuickFindColumnsSummary(StringBuilder sb, int queryType, string fetchXml)
        {
            if (queryType != 4)
                return null;

            var findColumns = ExtractQuickFindColumns(fetchXml);
            sb.AppendLine($"[FindColumns] {findColumns.Count} fields (searched when user types in search bar)");
            foreach (var col in findColumns)
                sb.AppendLine($"  {col}");
            if (findColumns.Count == 0)
                sb.AppendLine("  (none — LayoutXML cells are displayed columns only and are not searchable)");
            sb.AppendLine();

            return findColumns.Count > 0 ? findColumns : null;
        }

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
            sb.AppendLine($"Tip: Fix the FetchXML and retry. Read schema://fetchxml for valid FetchXML structure.");

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
            // Web API — transport/auth errors propagate to the main catch (not FetchXML issues).
            var param = System.Net.WebUtility.UrlEncode("'" + fetchXml + "'");
            using var resp = _serviceClient.ExecuteWebRequest(
                HttpMethod.Get, $"ValidateFetchXmlExpression(FetchXml=@p1)?@p1={param}",
                null, new Dictionary<string, List<string>>
                {
                    { "Accept", new List<string> { "application/json" } },
                    { "OData-MaxVersion", new List<string> { "4.0" } },
                    { "OData-Version", new List<string> { "4.0" } }
                });

            if (!resp.IsSuccessStatusCode)
                return $"Web API returned HTTP {(int)resp.StatusCode} {resp.StatusCode}";

            var body = resp.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            if (string.IsNullOrWhiteSpace(body))
                return null;

            using var doc = JsonDocument.Parse(body);
            if (!doc.RootElement.TryGetProperty("ValidationResults", out var vr)
                || !vr.TryGetProperty("Messages", out var msgs)
                || msgs.GetArrayLength() == 0)
                return null;

            var parts = new List<string>();
            foreach (var m in msgs.EnumerateArray())
            {
                var txt = m.TryGetProperty("LocalizedMessageText", out var t) ? t.GetString() : null;
                var sev = m.TryGetProperty("Severity", out var s) ? s.ToString() : "?";
                if (!string.IsNullOrWhiteSpace(txt))
                    parts.Add($"[Severity={sev}] {txt}");
            }
            return parts.Count > 0 ? string.Join("; ", parts) : null;
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

            if (excludeViewId.HasValue)
                query.Criteria.AddCondition("savedqueryid", ConditionOperator.NotEqual, excludeViewId.Value);

            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        // ── Field Name Validation ─────────────────────────────────────

        // Display/logical name normalization for view XML and cell patches.

        private (string Xml, List<string> Errors) NormalizeFetchXmlNames(string fetchXml, string entityName)
        {
            var errors = new List<string>();
            if (string.IsNullOrWhiteSpace(fetchXml)) return (fetchXml, errors);

            XDocument doc;
            doc = XDocument.Parse(fetchXml);

            var mainEntity = ElementsByLocalName(doc.Root, "entity").FirstOrDefault();
            if (mainEntity == null) return (fetchXml, errors);

            var declaredEntityName = mainEntity.Attribute("name")?.Value;
            if (!string.IsNullOrWhiteSpace(declaredEntityName))
            {
                var resolvedEntityName = ResolveEntityInput(declaredEntityName, errors, "FetchXML root entity");
                if (errors.Count > 0)
                    return (fetchXml, errors);

                if (!string.Equals(resolvedEntityName, entityName, StringComparison.OrdinalIgnoreCase))
                {
                    errors.Add($"FetchXML root entity '{declaredEntityName}' resolves to '{resolvedEntityName}', but manage_view entity_name resolves to '{entityName}'.");
                    return (fetchXml, errors);
                }
            }

            mainEntity.SetAttributeValue("name", entityName);
            var aliasEntityMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            var attributeCache = new Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>>(StringComparer.OrdinalIgnoreCase);

            NormalizeFetchEntity(mainEntity, entityName, aliasEntityMap, attributeCache, errors);

            return errors.Count > 0
                ? (fetchXml, errors)
                : (doc.Root.ToString(SaveOptions.DisableFormatting), errors);
        }

        private (string Xml, List<string> Errors) NormalizeLayoutXmlNames(string layoutXml, string effectiveFetchXml, string entityName)
        {
            var errors = new List<string>();
            if (string.IsNullOrWhiteSpace(layoutXml)) return (layoutXml, errors);

            XDocument doc;
            doc = XDocument.Parse(layoutXml);

            var aliasEntityMap = BuildFetchAliasEntityMap(effectiveFetchXml);
            var attributeCache = new Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>>(StringComparer.OrdinalIgnoreCase);

            foreach (var row in DescendantsByLocalName(doc.Root, "row"))
            {
                var id = row.Attribute("id")?.Value;
                if (!string.IsNullOrWhiteSpace(id))
                    row.SetAttributeValue("id", ResolveLayoutFieldReference(id, entityName, aliasEntityMap, attributeCache, errors, "LayoutXML row id"));
            }

            foreach (var cell in DescendantsByLocalName(doc.Root, "cell"))
            {
                var name = cell.Attribute("name")?.Value;
                if (!string.IsNullOrWhiteSpace(name))
                    cell.SetAttributeValue("name", ResolveLayoutFieldReference(name, entityName, aliasEntityMap, attributeCache, errors, "LayoutXML cell"));
            }

            return errors.Count > 0
                ? (layoutXml, errors)
                : (doc.Root.ToString(SaveOptions.DisableFormatting), errors);
        }

        private List<string> NormalizeCellUpdateNames(
            List<CellUpdateInstruction> instructions, string effectiveFetchXml, string entityName)
        {
            var errors = new List<string>();
            var aliasEntityMap = BuildFetchAliasEntityMap(effectiveFetchXml);
            var attributeCache = new Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>>(StringComparer.OrdinalIgnoreCase);

            foreach (var instruction in instructions)
            {
                instruction.CellName = ResolveLayoutFieldReference(
                    instruction.CellName, entityName, aliasEntityMap, attributeCache, errors, "cell_updates_json cell_name");
            }

            return errors;
        }

        private void NormalizeFetchEntity(XElement entityElement, string entityName,
            Dictionary<string, string> aliasEntityMap,
            Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>> attributeCache,
            List<string> errors)
        {
            foreach (var link in ElementsByLocalName(entityElement, "link-entity").ToList())
            {
                var rawLinkEntityName = link.Attribute("name")?.Value;
                if (string.IsNullOrWhiteSpace(rawLinkEntityName))
                {
                    errors.Add("FetchXML link-entity is missing required 'name' attribute.");
                    continue;
                }

                var linkEntityName = ResolveEntityInput(rawLinkEntityName, errors, "FetchXML link-entity name");
                link.SetAttributeValue("name", linkEntityName);

                var alias = link.Attribute("alias")?.Value;
                if (!string.IsNullOrWhiteSpace(alias))
                    aliasEntityMap[alias] = linkEntityName;

                NormalizeXmlAttribute(link, "from", linkEntityName, aliasEntityMap, attributeCache, errors, "FetchXML link-entity from");
                NormalizeXmlAttribute(link, "to", entityName, aliasEntityMap, attributeCache, errors, "FetchXML link-entity to");
                NormalizeFetchEntity(link, linkEntityName, aliasEntityMap, attributeCache, errors);
            }

            foreach (var attr in ElementsByLocalName(entityElement, "attribute"))
                NormalizeXmlAttribute(attr, "name", entityName, aliasEntityMap, attributeCache, errors, "FetchXML attribute");

            foreach (var order in ElementsByLocalName(entityElement, "order"))
                NormalizeXmlAttribute(order, "attribute", entityName, aliasEntityMap, attributeCache, errors, "FetchXML order");

            foreach (var condition in ConditionsOwnedBy(entityElement))
            {
                var targetEntityName = entityName;
                var alias = condition.Attribute("entityname")?.Value;
                if (!string.IsNullOrWhiteSpace(alias) && aliasEntityMap.TryGetValue(alias, out var aliasEntityName))
                    targetEntityName = aliasEntityName;

                NormalizeXmlAttribute(condition, "attribute", targetEntityName, aliasEntityMap, attributeCache, errors, "FetchXML condition");
            }
        }

        private void NormalizeXmlAttribute(XElement element, string attributeName, string entityName,
            Dictionary<string, string> aliasEntityMap,
            Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>> attributeCache,
            List<string> errors,
            string context)
        {
            var value = element.Attribute(attributeName)?.Value;
            if (string.IsNullOrWhiteSpace(value)) return;

            if (TrySplitAliasedField(value, out var alias, out var aliasedFieldName))
            {
                if (!aliasEntityMap.TryGetValue(alias, out var aliasEntityName))
                {
                    errors.Add($"{context}: alias '{alias}' was not found in FetchXML.");
                    return;
                }

                var resolvedAliasedFieldName = ResolveAttributeInput(aliasEntityName, aliasedFieldName, attributeCache, errors, context);
                element.SetAttributeValue(attributeName, $"{alias}.{resolvedAliasedFieldName}");
                return;
            }

            element.SetAttributeValue(attributeName, ResolveAttributeInput(entityName, value, attributeCache, errors, context));
        }

        private string ResolveLayoutFieldReference(string cellName, string entityName,
            Dictionary<string, string> aliasEntityMap,
            Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>> attributeCache,
            List<string> errors,
            string context)
        {
            if (string.IsNullOrWhiteSpace(cellName)) return cellName;
            var trimmed = cellName.Trim();

            if (TrySplitAliasedField(trimmed, out var alias, out var fieldName))
            {
                if (!aliasEntityMap.TryGetValue(alias, out var aliasEntityName))
                {
                    errors.Add($"{context}: alias '{alias}' was not found in FetchXML for '{trimmed}'.");
                    return trimmed;
                }

                var resolvedFieldName = ResolveAttributeInput(aliasEntityName, fieldName, attributeCache, errors, context);
                return $"{alias}.{resolvedFieldName}";
            }

            return ResolveAttributeInput(entityName, trimmed, attributeCache, errors, context);
        }

        private string ResolveEntityInput(string input, List<string> errors, string context)
        {
            var result = DisplayNameFirstResolver.ResolveEntity(_serviceClient, input, "manage_view");
            if (result.IsSuccess) return result.Value.LogicalName;

            errors.Add($"{context}: {result.Error}");
            return input.Trim();
        }

        private string ResolveAttributeInput(string entityName, string input,
            Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>> attributeCache,
            List<string> errors,
            string context)
        {
            var candidates = GetAttributeCandidates(entityName, attributeCache, errors, context);
            if (candidates == null || candidates.Count == 0)
                return input.Trim();

            var result = DisplayNameFirstResolver.Resolve(
                input,
                candidates,
                "[AmbiguousField]",
                "[NotFoundField]",
                $"Tip: Use get_tables(entity_name='{entityName}') to list fields before calling manage_view.",
                "field name");

            if (result.IsSuccess) return result.Value.LogicalName;

            errors.Add($"{context} '{input}' on entity '{entityName}': {result.Error}");
            return input.Trim();
        }

        private List<DisplayNameFirstCandidate<AttributeMetadata>> GetAttributeCandidates(string entityName,
            Dictionary<string, List<DisplayNameFirstCandidate<AttributeMetadata>>> attributeCache,
            List<string> errors,
            string context)
        {
            if (attributeCache.TryGetValue(entityName, out var cached))
                return cached;

            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Attributes,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            var candidates = response.EntityMetadata.Attributes.Select(a => new DisplayNameFirstCandidate<AttributeMetadata>
            {
                Value = a,
                DisplayName = a.DisplayName?.UserLocalizedLabel?.Label,
                LogicalName = a.LogicalName,
                SchemaName = a.SchemaName,
                Id = a.MetadataId,
                Kind = "attribute",
                CanonicalName = a.LogicalName
            }).ToList();

            attributeCache[entityName] = candidates;
            return candidates;
        }

        private static Dictionary<string, string> BuildFetchAliasEntityMap(string fetchXml)
        {
            var aliasEntityMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            if (string.IsNullOrWhiteSpace(fetchXml)) return aliasEntityMap;

            var doc = XDocument.Parse(fetchXml);
            foreach (var link in DescendantsByLocalName(doc.Root, "link-entity"))
            {
                var alias = link.Attribute("alias")?.Value;
                var entityName = link.Attribute("name")?.Value;
                if (!string.IsNullOrWhiteSpace(alias) && !string.IsNullOrWhiteSpace(entityName))
                    aliasEntityMap[alias] = entityName;
            }

            return aliasEntityMap;
        }

        private static bool TrySplitAliasedField(string value, out string alias, out string fieldName)
        {
            alias = null;
            fieldName = null;
            if (string.IsNullOrWhiteSpace(value)) return false;

            var dotIndex = value.IndexOf('.');
            if (dotIndex <= 0 || dotIndex >= value.Length - 1)
                return false;

            alias = value.Substring(0, dotIndex).Trim();
            fieldName = value.Substring(dotIndex + 1).Trim();
            return !string.IsNullOrWhiteSpace(alias) && !string.IsNullOrWhiteSpace(fieldName);
        }

        private static IEnumerable<XElement> ConditionsOwnedBy(XElement owner)
        {
            var ownerIsLink = IsLocalName(owner, "link-entity");
            return DescendantsByLocalName(owner, "condition").Where(condition =>
            {
                var nearestLink = condition.Ancestors().FirstOrDefault(a => IsLocalName(a, "link-entity"));
                return ownerIsLink ? nearestLink == owner : nearestLink == null;
            });
        }

        private static IEnumerable<XElement> ElementsByLocalName(XElement element, string localName) =>
            element?.Elements().Where(e => IsLocalName(e, localName)) ?? Enumerable.Empty<XElement>();

        private static IEnumerable<XElement> DescendantsByLocalName(XElement element, string localName) =>
            element?.Descendants().Where(e => IsLocalName(e, localName)) ?? Enumerable.Empty<XElement>();

        private static bool IsLocalName(XElement element, string localName) =>
            string.Equals(element?.Name.LocalName, localName, StringComparison.OrdinalIgnoreCase);

        private static string FormatNameResolutionErrors(string prefix, string entityName, string viewName, Guid? viewId, List<string> errors)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[{prefix}] BLOCKED -- Name resolution failed");
            sb.AppendLine($"Entity: {entityName}");
            if (!string.IsNullOrWhiteSpace(viewName))
                sb.AppendLine($"ViewName: {viewName}");
            if (viewId.HasValue)
                sb.AppendLine($"ViewId: {viewId.Value}");
            sb.AppendLine($"Errors: {errors.Count}");
            foreach (var error in errors)
                sb.AppendLine($"- {error}");
            sb.AppendLine("Tip: Display Name contains is resolved first, then logical/schema contains. Use a more specific name when matches are ambiguous.");
            return sb.ToString();
        }

        private List<string> ValidateFieldNames(string entityName, string fetchXml)
        {
            var errors = new List<string>();
            XDocument fetchDoc;
            fetchDoc = XDocument.Parse(fetchXml);

            var mainEntity = fetchDoc.Root?.Element("entity");
            if (mainEntity == null)
                return errors;

            var mainFields = ExtractFieldNames(mainEntity);
            var linkEntities = mainEntity.Elements("link-entity").ToList();

            Dictionary<string, AttributeMetadata> attrMap;
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Attributes
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            attrMap = response.EntityMetadata.Attributes
                .ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase);

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

                var missingLink = linkFields.Where(f => !linkMap.ContainsKey(f)).ToList();
                foreach (var f in missingLink)
                    allMissing.Add((f, linkedEntityName));
            }

            if (allMissing.Count == 0)
                return errors;

            foreach (var (field, entity) in allMissing)
            {
                var error = $"'{field}' not found on '{entity}'";
                var map = entity == entityName ? attrMap : linkAttrMaps.GetValueOrDefault(entity);
                if (map != null)
                {
                    var similar = map.Keys
                        .Where(k => k.Contains(field) || field.Contains(k) || LevenshteinClose(k, field))
                        .Take(5)
                        .ToList();
                    if (similar.Count > 0)
                        error += $" (Similar: {string.Join(", ", similar)})";
                }
                errors.Add(error);
            }
            return errors;
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

        // ── Cell Updates Parsing ──────────────────────────────────────────

        private static readonly HashSet<string> ProtectedCellAttributes = new(StringComparer.OrdinalIgnoreCase) { "name" };
        private static readonly HashSet<string> NoRemoveCellAttributes = new(StringComparer.OrdinalIgnoreCase) { "name", "width" };

        private static (List<CellUpdateInstruction> Instructions, string Error) ParseCellUpdates(string cellUpdatesJson)
        {
            List<CellUpdateInstruction> instructions;
            instructions = JsonSerializer.Deserialize<List<CellUpdateInstruction>>(cellUpdatesJson,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            if (instructions == null || instructions.Count == 0)
                return (null, "Error: cell_updates_json is empty or not a JSON array.");

            var seenNames = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);

            for (var i = 0; i < instructions.Count; i++)
            {
                var item = instructions[i];

                if (string.IsNullOrWhiteSpace(item.CellName))
                    return (null, $"Error: cell_updates_json item at index {i} is missing required 'cell_name'.");

                var cellName = item.CellName.Trim();
                item.CellName = cellName;

                if (seenNames.TryGetValue(cellName, out var prevIndex))
                    return (null, $"Error: cell_updates_json has duplicate cell_name '{cellName}' at indices {prevIndex} and {i}.");
                seenNames[cellName] = i;

                var hasSet = item.SetAttributes != null && item.SetAttributes.Count > 0;
                var hasRemove = item.RemoveAttributes != null && item.RemoveAttributes.Count > 0;
                if (!hasSet && !hasRemove)
                    return (null, $"Error: cell_updates_json item '{cellName}' must have at least one of 'set_attributes' or 'remove_attributes'.");

                if (hasSet)
                {
                    foreach (var key in item.SetAttributes.Keys)
                    {
                        if (ProtectedCellAttributes.Contains(key))
                            return (null, $"Error: cell_updates_json cannot set protected attribute '{key}' on cell '{cellName}'.");
                    }
                }

                if (hasRemove)
                {
                    foreach (var key in item.RemoveAttributes)
                    {
                        if (NoRemoveCellAttributes.Contains(key))
                            return (null, $"Error: cell_updates_json cannot remove protected attribute '{key}' from cell '{cellName}'" +
                                (string.Equals(key, "width", StringComparison.OrdinalIgnoreCase) ? " (use set_attributes to resize)." : "."));
                    }
                }
            }

            return (instructions, null);
        }

        private string EnsureObjectTypeCode(string layoutXml, string entityName)
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

        private Entity RetrieveView(Guid viewId)
        {
            var sqQuery = new QueryExpression("savedquery")
            {
                ColumnSet = new ColumnSet("fetchxml", "layoutxml", "name", "returnedtypecode", "querytype")
            };
            sqQuery.Criteria.AddCondition("savedqueryid", ConditionOperator.Equal, viewId);
            var sqResult = _serviceClient.RetrieveMultiple(sqQuery);
            if (sqResult.Entities.Count > 0) return sqResult.Entities[0];

            var uqQuery = new QueryExpression("userquery")
            {
                ColumnSet = new ColumnSet("fetchxml", "layoutxml", "name", "returnedtypecode", "querytype")
            };
            uqQuery.Criteria.AddCondition("userqueryid", ConditionOperator.Equal, viewId);
            var uqResult = _serviceClient.RetrieveMultiple(uqQuery);
            return uqResult.Entities.Count > 0 ? uqResult.Entities[0] : null;
        }
    }
}
