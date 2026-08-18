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
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;

        public ManageViewTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_view", Title = "Manage entity views",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertViewResult)),
        Description(
            "Manage views (savedquery/userquery). Actions: 'list', 'detail' (read-only) | 'create', 'update', 'rename', 'set_default', 'undo' (mutations).\n\n" +
            "WHEN TO USE:\n" +
            "- List or inspect views of an entity (system savedquery or personal userquery, scoped by is_personal_view; use detail for XML)\n" +
            "- Create/update a view from FetchXML — grid columns are auto-generated from it (follow attribute order, width by data type); patch cell attributes, rename, set the default public view\n" +
            "- Restore a view from a .fetchxml.bak backup file written by update/rename/undo (undo)\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → column logical names for FetchXML attributes/conditions\n" +
            "- execute_fetchxml → test a FetchXML before putting it into a view\n" +
            "- manage_form → entity forms; publish_customizations → batch publish; execute_webapi → raw savedquery access\n\n" +
            "Created views are always Public (querytype=0). QuickFind views: searchable fields are <condition> in <filter isquickfindfields=\"1\">; grid columns are display only. " +
            "Always list/detail BEFORE editing. workspace_folder is REQUIRED for update/rename/undo — current view XML is backed up to {workspace_folder}/.devkit/backups/views/ before overwrite. See docs://instructions_for_views, schema://fetchxml.")]
        public CallToolResult manage_view(
            [Description("'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.")] string action = "",
            [Description("Entity Display/logical name (Display Name resolved first).")] string entity_name = "",
            [Description("GUID. Required: detail/update/rename/undo.")] string view_id = "",
            [Description("Name contains. 1 match → auto-select; multiple → returns candidates, use view_id.")] string view_name = "",
            [Description("false = system views (savedquery), true = personal views (userquery) — scopes list and view_name resolution.")] bool is_personal_view = false,
            [Description("create/update: FetchXML — grid columns are auto-generated from it (follow attribute order, width by data type). undo: .fetchxml.bak backup file path from .devkit/backups/views/.")] string fetchxml = "",
            [Description("JSON array of {cell_name, set_attributes, remove_attributes}. Patch cell attrs (imageproviderwebresource, ishidden, …) without changing the FetchXML.")] string cell_updates_json = "",
            [Description("Required for update/rename/undo — current view XML is backed up to {workspace_folder}/.devkit/backups/views/ before overwrite.")] string workspace_folder = "")
        {            
            try
            {
                _workspaceFolder = workspace_folder;
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.");

                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.");

                var normalizedAction = action.Trim().ToLowerInvariant();
                var entityName = entity_name.Trim();

                if (!string.IsNullOrWhiteSpace(view_id) && !Guid.TryParse(view_id.Trim(), out _))
                    return Error($"'{view_id}' is not a valid GUID.");

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_view");
                if (!entityResult.IsSuccess)
                    return Error(entityResult.Error);
                entityName = entityResult.Value.LogicalName;

                if ((normalizedAction is "update" or "rename" or "undo") && string.IsNullOrWhiteSpace(workspace_folder))
                    return Error($"workspace_folder is required when action='{normalizedAction}' — current view XML is backed up to {{workspace_folder}}/.devkit/backups/views/ before overwrite.");

                return normalizedAction switch
                {
                    "list" => HandleList(entityName, view_name, is_personal_view),
                    "detail" => HandleDetail(entityName, view_id, view_name, is_personal_view),
                    "create" => HandleCreate(entityName, view_name, fetchxml),
                    "update" => HandleUpdate(entityName, view_id, view_name, is_personal_view, fetchxml, cell_updates_json),
                    "rename" => HandleRename(entityName, view_id, view_name),
                    "set_default" => HandleSetDefault(entityName, view_id, view_name),
                    "undo" => HandleUndo(entityName, view_id, fetchxml),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }


        private CallToolResult HandleList(string entityName, string viewName, bool isPersonalView)
        {
            var empty = new EntityCollection().Entities;
            if (!string.IsNullOrWhiteSpace(viewName))
            {
                var nameFilter = viewName.Trim();
                var matchingViews = isPersonalView ? empty : FindViewsByNameContains(entityName, nameFilter);
                var matchingPersonal = isPersonalView ? FindPersonalViewsByNameContains(entityName, nameFilter) : empty;

                if (matchingViews.Count == 0 && matchingPersonal.Count == 0)
                    return Success($"No views found for '{entityName}' matching '{nameFilter}'.", new UpsertViewResult
                    {
                        Action = "list", Entity = entityName, TotalCount = 0, Status = "success"
                    });
                if (matchingViews.Count == 1 && matchingPersonal.Count == 0)
                {
                    var matchId = matchingViews[0].GetAttributeValue<Guid>("savedqueryid");
                    return HandleDetail(entityName, matchId.ToString(), "", false);
                }
                if (matchingViews.Count == 0 && matchingPersonal.Count == 1)
                {
                    var matchId = matchingPersonal[0].GetAttributeValue<Guid>("userqueryid");
                    return HandleDetail(entityName, matchId.ToString(), "", true);
                }

                var matchingEntries = BuildViewListEntries(matchingViews, matchingPersonal);
                return Success($"Found {matchingEntries.Count} views for '{entityName}' matching '{nameFilter}'.", new UpsertViewResult
                {
                    Action = "list", Entity = entityName, TotalCount = matchingEntries.Count,
                    Views = matchingEntries.Count > 0 ? matchingEntries : null, Status = "success"
                });
            }

            var systemViews = isPersonalView ? empty : GetSystemViews(entityName);
            var personalViews = isPersonalView ? GetPersonalViews(entityName) : empty;

            if (systemViews.Count == 0 && personalViews.Count == 0)
            {
                return Success($"No {(isPersonalView ? "personal" : "system")} views found for '{entityName}'.", new UpsertViewResult
                {
                    Action = "list", Entity = entityName, TotalCount = 0, Status = "success"
                });
            }

            var entries = BuildViewListEntries(systemViews, personalViews);
            var summary = isPersonalView
                ? $"Found {personalViews.Count} personal views for '{entityName}'."
                : $"Found {systemViews.Count} system views for '{entityName}'.";
            return Success(summary, new UpsertViewResult
            {
                Action = "list", Entity = entityName, TotalCount = entries.Count,
                Views = entries.Count > 0 ? entries : null, Status = "success"
            });
        }

        private static List<ViewListEntry> BuildViewListEntries(DataCollection<Entity> systemViews, DataCollection<Entity> personalViews)
        {
            var entries = new List<ViewListEntry>(systemViews.Count + personalViews.Count);
            foreach (var view in systemViews)
                entries.Add(ToViewListEntry(view));
            foreach (var view in personalViews)
                entries.Add(ToViewListEntry(view));
            return entries;
        }

        private static ViewListEntry ToViewListEntry(Entity view)
        {
            var isSystem = string.Equals(view.LogicalName, "savedquery", StringComparison.OrdinalIgnoreCase);
            var qt = view.GetAttributeValue<int?>("querytype");
            var description = view.GetAttributeValue<string>("description");
            return new ViewListEntry
            {
                ViewId = GetViewId(view).ToString(),
                ViewName = view.GetAttributeValue<string>("name") ?? "",
                QueryType = qt,
                QueryTypeName = qt.HasValue ? MapQueryType(qt.Value) : null,
                IsDefault = isSystem ? view.GetAttributeValue<bool?>("isdefault") : null,
                IsActive = (view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0) == 0,
                IsManaged = isSystem ? view.GetAttributeValue<bool?>("ismanaged") : null,
                Source = isSystem ? "system" : "personal",
                Description = string.IsNullOrWhiteSpace(description) ? null : description
            };
        }


        private CallToolResult HandleDetail(string entityName, string viewId, string viewName, bool isPersonalView)
        {
            if (string.IsNullOrWhiteSpace(viewId) && string.IsNullOrWhiteSpace(viewName))
                return Error("view_id or view_name is required when action='detail'.");

            Guid id;
            if (!string.IsNullOrWhiteSpace(viewId))
            {
                if (!Guid.TryParse(viewId.Trim(), out id))
                    return Error($"'{viewId}' is not a valid GUID.");
            }
            else
            {
                var resolved = ResolveViewByName(entityName, viewName, isPersonalView, "detail");
                if (!string.IsNullOrEmpty(resolved.Error))
                    return Error(resolved.Error, details: resolved.Candidates);
                id = resolved.ViewId;
            }

            var view = isPersonalView ? TryGetPersonalView(id) : TryGetSystemView(id);
            if (view == null)
                return Error($"No {(isPersonalView ? "personal" : "system")} view found with ID '{id}'.",
                    $"Use manage_view action='list' entity_name='{entityName}' to find valid view IDs.");

            return BuildViewDetailResult(view);
        }


        private CallToolResult HandleCreate(string entityName, string viewName, string fetchxml)
        {
            if (string.IsNullOrWhiteSpace(viewName))
                return Error("view_name is required when action='create'.");

            viewName = viewName.Trim();

            var meta = RetrieveEntityMetadata(entityName);
            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml)
                ? $"<fetch><entity name='{entityName}'><attribute name='{meta.PrimaryIdAttribute}'/><attribute name='{meta.PrimaryNameAttribute}'/></entity></fetch>"
                : ViewXmlHelper.StripXmlDeclaration(fetchxml.Trim());

            var fetchNormalization = NormalizeFetchXmlNames(newFetchXml, entityName);
            if (fetchNormalization.Errors.Count > 0)
                return Error(NameResolutionMessage("create", entityName, fetchNormalization.Errors),
                    NameResolutionHint, new { errors = fetchNormalization.Errors });
            newFetchXml = fetchNormalization.Xml;
            newFetchXml = EnsureLayoutBuildableFetchXml(newFetchXml, meta);

            var duplicate = FindViewByName(entityName, viewName);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("savedqueryid");
                return Error(
                    $"A view named '{viewName}' already exists on '{entityName}' (view_id={dupId}).",
                    "Choose a different name or use action='update' with the existing view_id.");
            }

            var (fetchErrors, fetchWarnings) = ViewXmlHelper.ValidateFetchXml(newFetchXml);
            if (fetchErrors.Count > 0)
                return Error(
                    $"CREATE view '{viewName}' on '{entityName}' blocked — {fetchErrors.Count} validation error(s). First: {fetchErrors[0]}",
                    ValidationFailedHint,
                    new UpsertViewResult
                    {
                        Action = "create", Entity = entityName, ViewName = viewName,
                        Status = "blocked_validation", Validated = true,
                        ValidationErrors = fetchErrors,
                        ValidationWarnings = fetchWarnings.Count > 0 ? fetchWarnings : null, Published = false
                    });

            var fieldErrors = ValidateFieldNames(entityName, newFetchXml);
            if (fieldErrors.Count > 0)
                return Error(
                    $"CREATE view '{viewName}' on '{entityName}' blocked — {fieldErrors.Count} field(s) not found in entity metadata. First: {fieldErrors[0]}",
                    $"Use get_tables('{entityName}') to list all available fields.",
                    new UpsertViewResult
                    {
                        Action = "create", Entity = entityName, ViewName = viewName,
                        Status = "blocked_validation", Validated = true, ValidationErrors = fieldErrors, Published = false
                    });

            var serverError = ValidateFetchXmlExpression(newFetchXml);
            if (serverError != null)
                return Error(
                    $"CREATE view '{viewName}' on '{entityName}' blocked — FetchXML failed server-side validation. {serverError}",
                    ServerValidationHint,
                    BuildBlockedValidationDto("create", entityName, Guid.Empty, viewName,
                        [serverError], null, null, null));

            var layout = BuildLayoutXmlFromFetch(entityName, newFetchXml, meta);
            if (layout.Error != null)
                return Error($"CREATE view '{viewName}' on '{entityName}' blocked — {layout.Error}");
            var newLayoutXml = layout.Xml;

            var syncErrors = ViewXmlHelper.ValidateSync(newFetchXml, newLayoutXml);
            if (syncErrors.Count > 0)
                return Error(
                    $"CREATE view '{viewName}' on '{entityName}' blocked — generated layout failed sync check ({syncErrors.Count} error(s)). First: {syncErrors[0]}",
                    ValidationFailedHint,
                    BuildBlockedValidationDto("create", entityName, Guid.Empty, viewName,
                        syncErrors, null, null, null));

            var newView = new Entity("savedquery")
            {
                ["name"] = viewName,
                ["returnedtypecode"] = entityName,
                ["querytype"] = 0,
                ["fetchxml"] = newFetchXml,
                ["layoutxml"] = newLayoutXml
            };
            if (_options.DryRun)
                return DryRun($"Would CREATE view '{viewName}' on entity '{entityName}' — {layout.ColumnCount} columns auto-generated from FetchXML.", new UpsertViewResult
                {
                    Action = "create",
                    Entity = entityName,
                    ViewName = viewName,
                    Status = "not_executed",
                    Validated = true,
                    Published = false,
                    CreateMode = "metadata",
                    FetchXml = newFetchXml,
                    LayoutXml = newLayoutXml
                });

            var newViewId = DataverseMutationExecutor.Create(_context, _serviceClient, newView);

            var published = PublishHelper.PublishEntity(_context, _serviceClient, entityName);

            var text = $"Created view '{viewName}' ({newViewId}) on '{entityName}' — Public view, {layout.ColumnCount} columns auto-generated from FetchXML" +
                ", validated (client + server), published.";

            return Success(text, new UpsertViewResult
            {
                Action = "created", Entity = entityName, ViewId = newViewId.ToString(), ViewName = viewName,
                Status = "created", Validated = true, Published = published,
                CreateMode = SolutionComponentCreateMode.None.ToString(),
                FetchXml = newFetchXml,
                LayoutXml = newLayoutXml
            });
        }


        private CallToolResult HandleUpdate(string entityName, string viewId,
            string viewName, bool isPersonalView,
            string fetchxml,
            string cellUpdatesJson = "")
        {
            if (string.IsNullOrWhiteSpace(viewId) && string.IsNullOrWhiteSpace(viewName))
                return Error("view_id or view_name is required when action='update'.");

            Guid updateId;
            if (!string.IsNullOrWhiteSpace(viewId))
            {
                if (!Guid.TryParse(viewId.Trim(), out updateId))
                    return Error($"'{viewId}' is not a valid GUID.");
            }
            else
            {
                var resolved = ResolveViewByName(entityName, viewName, isPersonalView, "update");
                if (!string.IsNullOrEmpty(resolved.Error))
                    return Error(resolved.Error, details: resolved.Candidates);
                updateId = resolved.ViewId;
            }

            var hasCellUpdates = !string.IsNullOrWhiteSpace(cellUpdatesJson);

            if (!hasCellUpdates && string.IsNullOrWhiteSpace(fetchxml))
                return Error("at least one of fetchxml or cell_updates_json is required when action='update' — LayoutXML is always auto-generated from fetchxml.");

            var newFetchXml = string.IsNullOrWhiteSpace(fetchxml) ? null : ViewXmlHelper.StripXmlDeclaration(fetchxml.Trim());

            var currentView = RetrieveView(updateId);
            if (currentView == null)
                return Error(
                    $"View not found (view_id={updateId}).",
                    $"Use manage_view action='list' entity_name='{entityName}' to find valid view IDs.");

            var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
            var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
            var currentViewName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;
            var currentQueryType = currentView.GetAttributeValue<int>("querytype");

            if (newFetchXml != null)
            {
                var fetchNormalization = NormalizeFetchXmlNames(newFetchXml, entityName);
                if (fetchNormalization.Errors.Count > 0)
                    return Error(NameResolutionMessage("update", entityName, fetchNormalization.Errors),
                        NameResolutionHint, new { errors = fetchNormalization.Errors });
                newFetchXml = fetchNormalization.Xml;
            }

            var effectiveFetchXml = newFetchXml ?? currentFetchXml;

            var regenerateLayout = newFetchXml != null && !hasCellUpdates;

            string newLayoutXml;
            List<string> cellPatchWarnings = null;
            var usedCellPatch = false;

            if (regenerateLayout)
            {
                var meta = RetrieveEntityMetadata(returnedTypeCode);
                newFetchXml = EnsureLayoutBuildableFetchXml(newFetchXml, meta);
                effectiveFetchXml = newFetchXml;

                {
                    var serverError = ValidateFetchXmlExpression(newFetchXml);
                    if (serverError != null)
                        return Error(
                            $"UPDATE view '{currentViewName}' ({updateId}) on '{entityName}' blocked — FetchXML failed server-side validation. {serverError}",
                            ServerValidationHint,
                            BuildBlockedValidationDto("update", entityName, updateId, currentViewName,
                                [serverError], null, null, null));
                }

                var built = BuildLayoutXmlFromFetch(returnedTypeCode, newFetchXml, meta);
                if (built.Error != null)
                    return Error($"UPDATE view '{currentViewName}' ({updateId}) on '{entityName}' blocked — {built.Error}");
                newLayoutXml = built.Xml;
            }
            else
            {
                var baseLayoutXml = currentLayoutXml;

                if (hasCellUpdates)
                {
                    var (instructions, parseError) = ParseCellUpdates(cellUpdatesJson);
                    if (parseError != null)
                        return Error(parseError);

                    var cellNameErrors = NormalizeCellUpdateNames(instructions, effectiveFetchXml, entityName);
                    if (cellNameErrors.Count > 0)
                        return Error(NameResolutionMessage("update", entityName, cellNameErrors),
                            NameResolutionHint, new { errors = cellNameErrors });

                    var (patchedXml, patchErrors, patchWarnings) = ViewXmlHelper.ApplyCellAttributeUpdates(baseLayoutXml, instructions);
                    if (patchErrors.Count > 0)
                        return Error(
                            $"UPDATE view '{currentViewName}' ({updateId}) blocked — cell patch failed ({patchErrors.Count} error(s)). First: {patchErrors[0]}",
                            "Use manage_view action='detail' to see current LayoutXML cells.",
                            new { errors = patchErrors });

                    baseLayoutXml = patchedXml;
                    usedCellPatch = true;
                    if (patchWarnings.Count > 0)
                        cellPatchWarnings = patchWarnings;
                }

                newLayoutXml = EnsureObjectTypeCode(baseLayoutXml, entityName);
            }

            string fetchBackupPath;
            string layoutBackupPath;
            (fetchBackupPath, layoutBackupPath) = ViewBackupHelper.SaveBackup(entityName, updateId, currentViewName, currentFetchXml, currentLayoutXml, _workspaceFolder);

            {
                var validationResult = RunValidation(newLayoutXml, newFetchXml, effectiveFetchXml,
                    currentQueryType, currentFetchXml);
                if (validationResult != null)
                    return Error(
                        $"UPDATE view '{currentViewName}' ({updateId}) on '{entityName}' blocked — {validationResult.Value.Errors.Count} validation error(s). First: {validationResult.Value.Errors[0]}",
                        ValidationFailedHint,
                        BuildBlockedValidationDto("update", entityName, updateId, currentViewName,
                            validationResult.Value.Errors, validationResult.Value.Warnings,
                            fetchBackupPath, layoutBackupPath));
            }

            {
                var fieldErrors = ValidateFieldNames(entityName, effectiveFetchXml);
                if (fieldErrors.Count > 0)
                    return Error(
                        $"UPDATE view '{currentViewName}' ({updateId}) on '{entityName}' blocked — {fieldErrors.Count} field(s) not found in entity metadata. First: {fieldErrors[0]}",
                        $"Use get_tables('{entityName}') to list all available fields.",
                        BuildBlockedValidationDto("update", entityName, updateId, currentViewName,
                            fieldErrors, null, fetchBackupPath, layoutBackupPath));
            }

            if (newFetchXml != null && !regenerateLayout)
            {
                var serverError = ValidateFetchXmlExpression(newFetchXml);
                if (serverError != null)
                    return Error(
                        $"UPDATE view '{currentViewName}' ({updateId}) on '{entityName}' blocked — FetchXML failed server-side validation. {serverError}",
                        ServerValidationHint,
                        BuildBlockedValidationDto("update", entityName, updateId, currentViewName,
                            [serverError], null, fetchBackupPath, layoutBackupPath));
            }

            var updatedParts = DetermineUpdatedParts(usedCellPatch, newFetchXml != null, regenerateLayout);

            var isPersonal = currentView.LogicalName == "userquery";
            var update = new Entity(currentView.LogicalName, updateId);
            update["layoutxml"] = newLayoutXml;
            if (newFetchXml != null)
                update["fetchxml"] = newFetchXml;
            if (!isPersonal)
                update["returnedtypecode"] = returnedTypeCode;
            if (_options.DryRun)
                return DryRun($"Would UPDATE view '{currentViewName}' ({updateId}) on entity '{entityName}'.", new UpsertViewResult
                {
                    Action = "update",
                    Entity = entityName,
                    ViewId = updateId.ToString(),
                    ViewName = currentViewName,
                    Status = "not_executed",
                    Validated = true,
                    UpdatedParts = updatedParts,
                    FetchXmlBackupPath = fetchBackupPath,
                    LayoutXmlBackupPath = layoutBackupPath,
                    Published = false
                });
            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            var published = PublishHelper.PublishEntity(_context, _serviceClient, returnedTypeCode);

            var quickFindColumns = currentQueryType == 4 ? ExtractQuickFindColumns(effectiveFetchXml) : null;

            var text = $"Updated view '{currentViewName}' ({updateId}) on '{entityName}' — {updatedParts}" +
                ", validated, published." +
                " Backup saved (see fetchXmlBackupPath/layoutXmlBackupPath)." +
                (quickFindColumns?.Count > 0 ? $" {quickFindColumns.Count} find columns (see quickFindColumns)." : "") +
                (cellPatchWarnings?.Count > 0 ? $" {cellPatchWarnings.Count} cell patch warning(s) (see validationWarnings)." : "");

            return Success(text, new UpsertViewResult
            {
                Action = "updated", Entity = entityName, ViewId = updateId.ToString(), ViewName = currentViewName,
                Status = "updated", Validated = true,
                UpdatedParts = updatedParts, ValidationWarnings = cellPatchWarnings,
                FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = published,
                QuickFindColumns = quickFindColumns?.Count > 0 ? quickFindColumns : null
            });
        }

        private static string DetermineUpdatedParts(bool usedCellPatch, bool hasFetchXml, bool regeneratedLayout)
        {
            string layoutPart;
            if (regeneratedLayout)
                layoutPart = "LayoutXML (regenerated from FetchXML)";
            else if (usedCellPatch)
                layoutPart = "LayoutXML (cell patch)";
            else
                layoutPart = "LayoutXML only";

            return hasFetchXml
                ? layoutPart.Replace(" only", "") + " + FetchXML"
                : layoutPart;
        }


        private CallToolResult HandleRename(string entityName, string viewId, string viewName)
        {
            if (string.IsNullOrWhiteSpace(viewId))
                return Error("view_id is required when action='rename'.");
            if (!Guid.TryParse(viewId.Trim(), out var renameId))
                return Error($"'{viewId}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(viewName))
                return Error("view_name is required when action='rename'.");

            viewName = viewName.Trim();

            var currentView = RetrieveView(renameId);
            if (currentView == null)
                return Error(
                    $"View not found (view_id={renameId}).",
                    $"Use manage_view action='list' entity_name='{entityName}' to find valid view IDs.");

            var oldName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

            var duplicate = FindViewByName(returnedTypeCode, viewName, excludeViewId: renameId);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("savedqueryid");
                return Error(
                    $"A view named '{viewName}' already exists on '{entityName}' (view_id={dupId}).",
                    "Choose a different name.");
            }

            var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
            var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
            var (fetchBackupPath, layoutBackupPath) = ViewBackupHelper.SaveBackup(entityName, renameId, oldName, currentFetchXml, currentLayoutXml, _workspaceFolder);

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
            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            var published = PublishHelper.PublishEntity(_context, _serviceClient, returnedTypeCode);

            var text = $"Renamed view '{oldName}' to '{viewName}' ({renameId}) on '{entityName}', published." +
                " Backup saved (see fetchXmlBackupPath/layoutXmlBackupPath).";

            return Success(text, new UpsertViewResult
            {
                Action = "renamed", Entity = entityName, ViewId = renameId.ToString(), ViewName = viewName,
                Status = "renamed", Validated = false,
                FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = true
            });
        }


        private CallToolResult HandleSetDefault(string entityName, string viewId, string viewName)
        {
            if (string.IsNullOrWhiteSpace(viewId) && string.IsNullOrWhiteSpace(viewName))
                return Error("view_id or view_name is required when action='set_default'.");

            Guid targetId;

            if (!string.IsNullOrWhiteSpace(viewId))
            {
                if (!Guid.TryParse(viewId.Trim(), out targetId))
                    return Error($"'{viewId}' is not a valid GUID.");

                var check = TryGetSystemView(targetId);
                if (check == null)
                    return Error(
                        $"View not found (view_id={targetId}).",
                        $"Use manage_view action='list' entity_name='{entityName}' to find valid view IDs.");

                viewName = check.GetAttributeValue<string>("name") ?? targetId.ToString();
                var qt = check.GetAttributeValue<int>("querytype");
                if (qt != 0)
                    return Error($"Only Public views (querytype=0) can be set as default — view {targetId} is {MapQueryType(qt)} (querytype={qt}).");
            }
            else
            {
                var resolved = ResolveViewByName(entityName, viewName, false, "set_default");
                if (!string.IsNullOrEmpty(resolved.Error))
                    return Error(resolved.Error, details: resolved.Candidates);
                targetId = resolved.ViewId;
                viewName = resolved.View.GetAttributeValue<string>("name") ?? targetId.ToString();
            }

            // Dataverse allows multiple isdefault=true at data level (UI enforces one) —
            // clear previous Public defaults of this entity so exactly one remains.
            var prevQuery = new QueryExpression("savedquery") { ColumnSet = new ColumnSet("savedqueryid") };
            prevQuery.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            prevQuery.Criteria.AddCondition("querytype", ConditionOperator.Equal, 0);
            prevQuery.Criteria.AddCondition("isdefault", ConditionOperator.Equal, true);
            prevQuery.Criteria.AddCondition("savedqueryid", ConditionOperator.NotEqual, targetId);
            var previousDefaults = _serviceClient.RetrieveMultiple(prevQuery).Entities;

            if (_options.DryRun)
                return DryRun($"Would SET DEFAULT view '{viewName}' ({targetId}) on entity '{entityName}'" +
                    (previousDefaults.Count > 0 ? $", clearing {previousDefaults.Count} previous default(s)." : "."), new UpsertViewResult
                {
                    Action = "set_default",
                    Entity = entityName,
                    ViewId = targetId.ToString(),
                    ViewName = viewName,
                    Status = "not_executed",
                    ClearedPreviousDefaults = previousDefaults.Count > 0 ? previousDefaults.Count : null,
                    Published = false
                });

            foreach (var prev in previousDefaults)
                DataverseMutationExecutor.Update(_context, _serviceClient, new Entity("savedquery", prev.Id) { ["isdefault"] = false });

            var update = new Entity("savedquery", targetId) { ["isdefault"] = true };
            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            var published = PublishHelper.PublishEntity(_context, _serviceClient, entityName);

            var clearedText = previousDefaults.Count > 0 ? $", cleared {previousDefaults.Count} previous default(s)" : "";
            return Success($"Set default view for '{entityName}' to '{viewName}' ({targetId}){clearedText}, published.", new UpsertViewResult
            {
                Action = "set_default", Entity = entityName, ViewId = targetId.ToString(), ViewName = viewName,
                Status = "set_default", Validated = false,
                ClearedPreviousDefaults = previousDefaults.Count > 0 ? previousDefaults.Count : null,
                Published = published
            });
        }


        private CallToolResult HandleUndo(string entityName, string viewId,
            string backupPathArg)
        {
            if (string.IsNullOrWhiteSpace(viewId))
                return Error("view_id is required when action='undo'.");
            if (!Guid.TryParse(viewId.Trim(), out var undoId))
                return Error($"'{viewId}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(backupPathArg))
                return Error("fetchxml (.fetchxml.bak backup file path) is required when action='undo'.",
                    "Backup files are at: .devkit/backups/views/ — LayoutXML is regenerated from the FetchXML backup.");

            var fetchBackupPath = backupPathArg.Trim();
            if (!fetchBackupPath.EndsWith(".fetchxml.bak", StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Backup file must end with .fetchxml.bak: '{fetchBackupPath}'.",
                    "Backup files are at: .devkit/backups/views/ — LayoutXML is regenerated from the FetchXML backup.");

            if (!File.Exists(fetchBackupPath))
                return Error(
                    $"Fetch backup file not found: '{fetchBackupPath}'.",
                    "Check the file path. Backup files are at: .devkit/backups/views/");

            var fetchContent = File.ReadAllText(fetchBackupPath, Encoding.UTF8);
            var strippedFetch = ViewXmlHelper.StripXmlComments(fetchContent);
            if (string.IsNullOrWhiteSpace(strippedFetch))
                return Error(
                    $"Fetch backup file is empty (no FetchXML content): '{fetchBackupPath}'.",
                    "This backup has no FetchXML to restore. Try an earlier backup.");
            var fetchDoc = XDocument.Parse(strippedFetch);
            var restoredFetchXml = ViewXmlHelper.StripXmlDeclaration(fetchDoc.ToString());

            var currentView = RetrieveView(undoId);
            if (currentView == null)
                return Error(
                    $"View not found (view_id={undoId}).",
                    $"Use manage_view action='list' entity_name='{entityName}' to find valid view IDs.");

            var viewName = currentView.GetAttributeValue<string>("name") ?? "";
            var returnedTypeCode = currentView.GetAttributeValue<string>("returnedtypecode") ?? entityName;

            var undoMeta = RetrieveEntityMetadata(returnedTypeCode);
            restoredFetchXml = EnsureLayoutBuildableFetchXml(restoredFetchXml, undoMeta);
            var undoLayout = BuildLayoutXmlFromFetch(returnedTypeCode, restoredFetchXml, undoMeta);
            if (undoLayout.Error != null)
                return Error($"UNDO view '{viewName}' ({undoId}) on '{entityName}' blocked — {undoLayout.Error}");
            var restoredLayoutXml = undoLayout.Xml;

            List<string> validationWarnings = null;
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
                    return Error(
                        $"UNDO view '{viewName}' ({undoId}) on '{entityName}' blocked — backup file(s) failed validation ({allErrors.Count} error(s)). First: {allErrors[0]}",
                        "The backup file(s) may be corrupted — fix the XML in the backup file or use an earlier backup.",
                        BuildBlockedValidationDto("undo", entityName, undoId, viewName,
                            allErrors, allWarnings, null, null,
                            restoredFetchBackup: fetchBackupPath));
            }

            {
                var serverError = ValidateFetchXmlExpression(restoredFetchXml);
                if (serverError != null)
                    return Error(
                        $"UNDO view '{viewName}' ({undoId}) on '{entityName}' blocked — FetchXML failed server-side validation. {serverError}",
                        ServerValidationHint,
                        BuildBlockedValidationDto("undo", entityName, undoId, viewName,
                            [serverError], null, null, null,
                            restoredFetchBackup: fetchBackupPath));
            }

            var currentFetchXml = currentView.GetAttributeValue<string>("fetchxml") ?? "";
            var currentLayoutXml = currentView.GetAttributeValue<string>("layoutxml") ?? "";
            var (preFetchBackupPath, preLayoutBackupPath) = ViewBackupHelper.SaveBackup(entityName, undoId, viewName, currentFetchXml, currentLayoutXml, _workspaceFolder);

            var isPersonalView = currentView.LogicalName == "userquery";
            var update = new Entity(currentView.LogicalName, undoId);
            update["layoutxml"] = restoredLayoutXml;
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
                    FetchXmlBackupPath = preFetchBackupPath,
                    LayoutXmlBackupPath = preLayoutBackupPath,
                    Published = false
                });
            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            var published = PublishHelper.PublishEntity(_context, _serviceClient, returnedTypeCode);

            var text = $"Restored view '{viewName}' ({undoId}) on '{entityName}' from FetchXML backup — LayoutXML regenerated" +
                ", validated, published." +
                " Pre-restore state backed up (see fetchXmlBackupPath/layoutXmlBackupPath)." +
                (validationWarnings?.Count > 0 ? $" {validationWarnings.Count} validation warning(s) (see validationWarnings)." : "");

            return Success(text, new UpsertViewResult
            {
                Action = "undo",
                Entity = entityName, ViewId = undoId.ToString(), ViewName = viewName,
                Status = "restored", Validated = true,
                ValidationWarnings = validationWarnings,
                RestoredFromFetchXmlBackup = fetchBackupPath,
                FetchXmlBackupPath = preFetchBackupPath,
                LayoutXmlBackupPath = preLayoutBackupPath,
                Published = published
            });
        }


        private CallToolResult BuildViewDetailResult(Entity view)
        {
            var isSystem = view.LogicalName == "savedquery";
            var viewId = GetViewId(view);
            var name = view.GetAttributeValue<string>("name") ?? "";
            var qt = view.GetAttributeValue<int>("querytype");
            var isActive = (view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0) == 0;
            var description = view.GetAttributeValue<string>("description");
            var fetchXml = view.GetAttributeValue<string>("fetchxml") ?? "";
            var layoutXml = view.GetAttributeValue<string>("layoutxml") ?? "";
            var layoutJson = view.GetAttributeValue<string>("layoutjson");
            var conditionalFormatting = view.GetAttributeValue<string>("conditionalformatting");

            var columns = ParseViewColumns(layoutXml);
            var hiddenCount = columns?.Count(c => c.IsHidden) ?? 0;

            var entityLogical = view.GetAttributeValue<string>("returnedtypecode") ?? "";
            var text = $"'{name}' ({viewId}) on '{entityLogical}' — {MapQueryType(qt)} view, " +
                $"{(isSystem ? "system" : "personal")}" +
                (isSystem && view.GetAttributeValue<bool>("isdefault") ? ", default" : "") +
                $", {(isActive ? "active" : "inactive")}" +
                (columns != null ? $", {columns.Count} columns" + (hiddenCount > 0 ? $" ({hiddenCount} hidden)" : "") : "") +
                ". fetchxml/layoutxml in structuredContent.";

            return Success(text, new UpsertViewResult
            {
                Action = "detail",
                Entity = entityLogical,
                ViewId = viewId.ToString(),
                ViewName = name,
                Status = "success",
                QueryType = qt,
                QueryTypeName = MapQueryType(qt),
                IsActive = isActive,
                IsDefault = isSystem ? view.GetAttributeValue<bool>("isdefault") : null,
                IsManaged = isSystem ? view.GetAttributeValue<bool>("ismanaged") : null,
                Source = isSystem ? "system" : "personal",
                Description = string.IsNullOrWhiteSpace(description) ? null : description,
                Columns = columns,
                FetchXml = string.IsNullOrEmpty(fetchXml) ? null : fetchXml,
                LayoutXml = string.IsNullOrEmpty(layoutXml) ? null : layoutXml,
                LayoutJson = string.IsNullOrWhiteSpace(layoutJson) ? null : layoutJson,
                ConditionalFormatting = string.IsNullOrWhiteSpace(conditionalFormatting) ? null : conditionalFormatting,
                QuickFindColumns = qt == 4 ? ExtractQuickFindColumns(fetchXml) : null
            });
        }

        private static List<ViewColumnEntry> ParseViewColumns(string layoutXml)
        {
            if (string.IsNullOrEmpty(layoutXml))
                return null;

            var cells = XDocument.Parse(layoutXml).Descendants("cell")
                .Select(cell => new ViewColumnEntry
                {
                    Name = cell.Attribute("name")?.Value ?? "",
                    Width = cell.Attribute("width")?.Value,
                    IsHidden = cell.Attribute("ishidden")?.Value == "1",
                    ImageProviderWebResource = cell.Attribute("imageproviderwebresource")?.Value,
                    ImageProviderFunctionName = cell.Attribute("imageproviderfunctionname")?.Value
                })
                .ToList();

            return cells.Count > 0 ? cells : null;
        }

        private (Guid ViewId, Entity View, string Error, List<ViewListEntry> Candidates) ResolveViewByName(
            string entityName,
            string viewName,
            bool isPersonalView,
            string actionName)
        {
            if (string.IsNullOrWhiteSpace(viewName))
                return (Guid.Empty, null, $"view_name is required for '{actionName}' action.", null);

            var nameFilter = viewName.Trim();
            var systemMatches = isPersonalView
                ? new List<Entity>()
                : FindViewsByNameContains(entityName, nameFilter).ToList();
            var personalMatches = isPersonalView
                ? FindPersonalViewsByNameContains(entityName, nameFilter).ToList()
                : new List<Entity>();

            var matches = PreferExactViewNameMatches(systemMatches.Concat(personalMatches), nameFilter);

            if (matches.Count == 0)
            {
                var scope = isPersonalView ? "personal view" : "system view";
                return (Guid.Empty, null,
                    $"No {scope} found matching name '{nameFilter}' for entity '{entityName}'.", null);
            }

            if (matches.Count == 1)
            {
                var match = matches[0];
                return (GetViewId(match), match, null, null);
            }

            var candidates = matches.Select(v => ToViewListEntry(v)).ToList();
            return (Guid.Empty, null,
                $"Multiple views match '{nameFilter}' on '{entityName}' — provide view_id to disambiguate.", candidates);
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


        private DataCollection<Entity> FindViewsByNameContains(string entityName, string nameFilter)
        {
            var columns = new ColumnSet("savedqueryid", "name", "querytype", "isdefault", "statecode", "ismanaged");
            var query = new QueryExpression("savedquery")
            {
                ColumnSet = columns
            };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{nameFilter}%");
            query.AddOrder("name", OrderType.Ascending);
            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private DataCollection<Entity> FindPersonalViewsByNameContains(string entityName, string nameFilter)
        {
            var columns = new ColumnSet("userqueryid", "name", "querytype", "statecode");
            var query = new QueryExpression("userquery")
            {
                ColumnSet = columns
            };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{nameFilter}%");
            query.AddOrder("name", OrderType.Ascending);
            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private DataCollection<Entity> GetSystemViews(string entityName)
        {
            var columns = new ColumnSet(
                "savedqueryid", "name", "querytype", "isdefault",
                "statecode", "ismanaged", "description");

            var query = new QueryExpression("savedquery") { ColumnSet = columns };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.AddOrder("querytype", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);
            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private DataCollection<Entity> GetPersonalViews(string entityName)
        {
            var columns = new ColumnSet(
                "userqueryid", "name", "querytype", "statecode", "description");

            var query = new QueryExpression("userquery") { ColumnSet = columns };
            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
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

        private const string ValidationFailedHint = "Fix the validation errors and retry. Rules: docs://instructions_for_views.";
        private const string ServerValidationHint = "Fix the FetchXML and retry. Read schema://fetchxml for valid FetchXML structure.";
        private const string NameResolutionHint = "Display Name contains is resolved first, then logical/schema contains. Use a more specific name when matches are ambiguous.";

        private static string NameResolutionMessage(string actionName, string entityName, List<string> errors) =>
            $"manage_view action='{actionName}' blocked on '{entityName}' — name resolution failed ({errors.Count} error(s)). First: {errors[0]}";

        private static UpsertViewResult BuildBlockedValidationDto(string action, string entityName, Guid viewId, string viewName,
            List<string> errors, List<string> warnings, string fetchBackupPath, string layoutBackupPath,
            string restoredFetchBackup = null)
        {
            var allIssues = new List<string>(errors);
            if (warnings != null && warnings.Count > 0) allIssues.AddRange(warnings);

            var result = new UpsertViewResult
            {
                Action = action, Entity = entityName,
                ViewId = viewId != Guid.Empty ? viewId.ToString() : null, ViewName = viewName,
                Status = "blocked_validation", Validated = true,
                ValidationErrors = allIssues.Count > 0 ? allIssues : null,
                FetchXmlBackupPath = fetchBackupPath, LayoutXmlBackupPath = layoutBackupPath, Published = false
            };
            if (restoredFetchBackup != null) result.RestoredFromFetchXmlBackup = restoredFetchBackup;
            return result;
        }

        private string ValidateFetchXmlExpression(string fetchXml)
        {
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
                $"Hint: Use get_tables(entity_name='{entityName}') to list fields before calling manage_view.",
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


        private static readonly HashSet<string> ProtectedCellAttributes = new(StringComparer.OrdinalIgnoreCase) { "name" };
        private static readonly HashSet<string> NoRemoveCellAttributes = new(StringComparer.OrdinalIgnoreCase) { "name", "width" };

        private static (List<CellUpdateInstruction> Instructions, string Error) ParseCellUpdates(string cellUpdatesJson)
        {
            List<CellUpdateInstruction> instructions;
            instructions = JsonSerializer.Deserialize<List<CellUpdateInstruction>>(cellUpdatesJson,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            if (instructions == null || instructions.Count == 0)
                return (null, "cell_updates_json is empty or not a JSON array.");

            var seenNames = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);

            for (var i = 0; i < instructions.Count; i++)
            {
                var item = instructions[i];

                if (string.IsNullOrWhiteSpace(item.CellName))
                    return (null, $"cell_updates_json item at index {i} is missing required 'cell_name'.");

                var cellName = item.CellName.Trim();
                item.CellName = cellName;

                if (seenNames.TryGetValue(cellName, out var prevIndex))
                    return (null, $"cell_updates_json has duplicate cell_name '{cellName}' at indices {prevIndex} and {i}.");
                seenNames[cellName] = i;

                var hasSet = item.SetAttributes != null && item.SetAttributes.Count > 0;
                var hasRemove = item.RemoveAttributes != null && item.RemoveAttributes.Count > 0;
                if (!hasSet && !hasRemove)
                    return (null, $"cell_updates_json item '{cellName}' must have at least one of 'set_attributes' or 'remove_attributes'.");

                if (hasSet)
                {
                    foreach (var key in item.SetAttributes.Keys)
                    {
                        if (ProtectedCellAttributes.Contains(key))
                            return (null, $"cell_updates_json cannot set protected attribute '{key}' on cell '{cellName}'.");
                    }
                }

                if (hasRemove)
                {
                    foreach (var key in item.RemoveAttributes)
                    {
                        if (NoRemoveCellAttributes.Contains(key))
                            return (null, $"cell_updates_json cannot remove protected attribute '{key}' from cell '{cellName}'" +
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

        private EntityMetadata RetrieveEntityMetadata(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity | EntityFilters.Attributes
            };
            return ((RetrieveEntityResponse)_serviceClient.Execute(request)).EntityMetadata;
        }

        private static string EnsureLayoutBuildableFetchXml(string fetchXml, EntityMetadata meta)
        {
            var doc = XDocument.Parse(fetchXml);
            var mainEntity = doc.Root?.Element("entity");
            if (mainEntity == null)
                return fetchXml;

            var usedAliases = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var link in mainEntity.Elements("link-entity"))
            {
                var alias = link.Attribute("alias")?.Value;
                if (!string.IsNullOrWhiteSpace(alias))
                {
                    usedAliases.Add(alias);
                    continue;
                }
                if (!link.Elements("attribute").Any())
                    continue;

                var linkName = link.Attribute("name")?.Value ?? "link";
                var candidate = linkName;
                var i = 1;
                while (!usedAliases.Add(candidate))
                    candidate = linkName + ++i;
                link.SetAttributeValue("alias", candidate);
            }

            var primaryId = meta?.PrimaryIdAttribute;
            var hasDisplayColumn =
                mainEntity.Elements("attribute").Any(a =>
                {
                    var n = a.Attribute("name")?.Value;
                    return !string.IsNullOrWhiteSpace(n) && !string.Equals(n, primaryId, StringComparison.OrdinalIgnoreCase);
                })
                || mainEntity.Elements("link-entity").Any(l => l.Elements("attribute").Any());

            if (!hasDisplayColumn && !string.IsNullOrWhiteSpace(meta?.PrimaryNameAttribute))
                mainEntity.AddFirst(new XElement("attribute", new XAttribute("name", meta.PrimaryNameAttribute)));

            return doc.Root.ToString(SaveOptions.DisableFormatting);
        }

        private (string Xml, int ColumnCount, string Error) BuildLayoutXmlFromFetch(string entityName, string fetchXml, EntityMetadata mainMeta)
        {
            var doc = XDocument.Parse(fetchXml);
            var mainEntity = doc.Root?.Element("entity");
            if (mainEntity == null)
                return (null, 0, "FetchXML has no <entity> element.");

            mainMeta ??= RetrieveEntityMetadata(entityName);
            var primaryId = mainMeta.PrimaryIdAttribute ?? entityName + "id";
            var primaryName = mainMeta.PrimaryNameAttribute ?? primaryId;
            var attrMap = mainMeta.Attributes?.ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase)
                ?? new Dictionary<string, AttributeMetadata>(StringComparer.OrdinalIgnoreCase);

            var cells = new List<XElement>();

            foreach (var attr in mainEntity.Elements("attribute"))
            {
                var name = attr.Attribute("name")?.Value;
                if (string.IsNullOrWhiteSpace(name) || string.Equals(name, primaryId, StringComparison.OrdinalIgnoreCase))
                    continue;
                attrMap.TryGetValue(name, out var am);
                cells.Add(BuildCell(name, GetColumnWidth(am, name, primaryName), disableSorting: false));
            }

            foreach (var link in mainEntity.Elements("link-entity"))
            {
                var linkAttrs = link.Elements("attribute").ToList();
                if (linkAttrs.Count == 0)
                    continue;

                var alias = link.Attribute("alias")?.Value;
                var linkName = link.Attribute("name")?.Value;
                if (string.IsNullOrWhiteSpace(alias) || string.IsNullOrWhiteSpace(linkName))
                    return (null, 0, $"link-entity '{linkName}' has attributes but no alias — cannot build LayoutXML cells.");

                var linkMeta = RetrieveEntityMetadata(linkName);
                var linkMap = linkMeta.Attributes?.ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase)
                    ?? new Dictionary<string, AttributeMetadata>(StringComparer.OrdinalIgnoreCase);
                foreach (var attr in linkAttrs)
                {
                    var name = attr.Attribute("name")?.Value;
                    if (string.IsNullOrWhiteSpace(name))
                        continue;
                    linkMap.TryGetValue(name, out var am);
                    cells.Add(BuildCell($"{alias}.{name}", GetColumnWidth(am, name, null), disableSorting: true));
                }
            }

            if (cells.Count == 0)
                return (null, 0, "FetchXML has no displayable columns — cannot build LayoutXML.");

            var grid = new XElement("grid",
                new XAttribute("name", "resultset"),
                mainMeta.ObjectTypeCode.HasValue ? new XAttribute("object", mainMeta.ObjectTypeCode.Value) : null,
                new XAttribute("jump", primaryName),
                new XAttribute("select", "1"),
                new XAttribute("icon", "1"),
                new XAttribute("preview", "1"),
                new XElement("row",
                    new XAttribute("name", "result"),
                    new XAttribute("id", primaryId),
                    cells));

            return (grid.ToString(SaveOptions.DisableFormatting), cells.Count, null);
        }

        private static XElement BuildCell(string name, int width, bool disableSorting)
        {
            var cell = new XElement("cell",
                new XAttribute("name", name),
                new XAttribute("width", width));
            if (disableSorting)
                cell.SetAttributeValue("disableSorting", "1");
            return cell;
        }

        private static int GetColumnWidth(AttributeMetadata attr, string logicalName, string primaryName)
        {
            if (primaryName != null && string.Equals(logicalName, primaryName, StringComparison.OrdinalIgnoreCase))
                return 300;
            if (attr is StringAttributeMetadata sm)
            {
                if (sm.Format == StringFormat.Phone)
                    return 100;
                if (sm.Format == StringFormat.Email || sm.Format == StringFormat.Url)
                    return 200;
                return 150;
            }
            return attr?.AttributeType switch
            {
                AttributeTypeCode.Boolean => 75,
                AttributeTypeCode.Integer or AttributeTypeCode.BigInt => 125,
                AttributeTypeCode.Decimal or AttributeTypeCode.Double or AttributeTypeCode.Money => 125,
                AttributeTypeCode.DateTime => 150,
                AttributeTypeCode.Lookup or AttributeTypeCode.Customer or AttributeTypeCode.Owner => 150,
                AttributeTypeCode.Picklist or AttributeTypeCode.State or AttributeTypeCode.Status => 125,
                AttributeTypeCode.Memo => 250,
                AttributeTypeCode.Uniqueidentifier => 250,
                _ => 150
            };
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
