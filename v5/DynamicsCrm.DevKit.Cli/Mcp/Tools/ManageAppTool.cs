using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.App;
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
using System.Reflection;
using System.ServiceModel;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public class ManageAppTool : McpToolBase
    {
        private const int EntityComponentType = 1;
        private const int WebResourceComponentType = 61;
        private const int ViewComponentType = 26;
        private const int ChartComponentType = 59;
        private const int SystemFormComponentType = 60;
        private static readonly object[] DashboardFormTypes = [0, 10, 13, 103];
        private const int SvgWebResourceType = 11;
        private const string NotPublishedNextStep =
            "Not published. Run manage_admin(resource='publish', appmodules='<AppModuleId>') when ready.";
        private static readonly Guid DefaultAppIconWebResourceId = new("953b9fac-1e5e-e611-80d6-00155ded156f");
        private static XmlSchemaSet _cachedSiteMapSchemaSet;
        private static readonly object _schemaLock = new();

        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;

        public ManageAppTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context) : this(orgService, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageAppTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_app", Title = "Manage model-driven apps",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageAppResult)),
        Description(
            "List, inspect, create, update, and validate model-driven apps, edit app sitemap navigation, or restore an app from a .app.json backup.\n\n" +
            "WHEN TO USE:\n" +
            "- List/inspect model-driven apps, or create/update app metadata (name, description, icon)\n" +
            "- Apply app-scoped sitemap navigation operations, validate an app, or restore from a .app.json backup (undo) — the result's backupPath points to the pre-change snapshot; pass it as operations to action='undo' to restore\n" +
            "- Add or remove tables, system views, forms, charts, and dashboards using add_components or remove_components. Pass GUIDs or exact names, then check backupPath and published.\n" +
            "- Read docs://instructions_for_manage_app before update_navigation for operation fields, positions, and examples.\n" +
            "- App is resolved by Display Name first, then unique name/GUID; ambiguous Display Names return the candidates\n\n" +
            "RELATED TOOLS:\n" +
            "- inspect_metadata(resource='solution_components') → solution names for create\n" +
            "- manage_admin(resource='publish') → publish other components (manage_ui(resource='app') mutations auto-publish the app)\n" +
            "- execute_webapi → blocked for appmodule/sitemap/appmodulecomponent; use this tool instead")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            McpServer server,
            [Description("'list', 'detail', 'create', 'update', 'update_navigation', 'add_components', 'remove_components', 'validate', or 'undo'.")] string action = "detail",
            [Description("App display name, unique name, or GUID. Required except for list and create.")] string app = "",
            [Description("list only. App display/unique name contains filter.")] string app_name = "",
            [Description("Required for create. Used to resolve the solution publisher prefix.")] string solution_name = "",
            [Description("Required for create. Optional for update.")] string display_name = "",
            [Description("Optional for create. The solution publisher prefix is always prepended (e.g. 'MyApp' with solution all_in_one becomes 'all_MyApp'). If empty, derived from display_name.")] string unique_name = "",
            [Description("Optional for create/update.")] string description = "",
            [Description("Optional app icon web resource name or GUID.")] string icon_webresource = "",
            [Description("update_navigation: JSON array serialized as a string. add_item/update_item targets: entity, url, dashboard_id (alias default_dashboard), or webresource. Dashboard and WebResource items accept icon (SVG web resource name, $webresource: reference, or /WebResources/ path). See docs://instructions_for_manage_app for examples. undo: .app.json backup file path from result.backupPath.")] string operations = "",
            [Description("list only. 1-500.")] int max_records = 100,
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default,
            [Description("add_components/remove_components. Table display or logical name. Required with view_ids, form_ids, or chart_ids. Add ensures the table is in the app when supplied. To remove the table itself, supply entity_name alone.")] string entity_name = "",
            [Description("add_components/remove_components. Array of system view GUIDs or exact names for entity_name.")] string[] view_ids = null,
            [Description("add_components/remove_components. Array of system form GUIDs or exact names for entity_name.")] string[] form_ids = null,
            [Description("add_components/remove_components. Array of system dashboard GUIDs or exact names.")] string[] dashboard_ids = null,
            [Description("add_components/remove_components. Array of system chart GUIDs or exact names for entity_name. Removing default-visible charts explicitly selects the remaining charts. At least one chart must remain.")] string[] chart_ids = null)
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ManageAppTool(conn.OrgService, conn.Options, conn.Context);
                return worker.manage_app(server, action, app, app_name, solution_name, display_name, unique_name, description, icon_webresource, operations, max_records,
                    entity_name, view_ids, form_ids, dashboard_ids, chart_ids);
            }, cancellationToken);
        }

        public async Task<CallToolResult> manage_app(
            McpServer server,
            [Description("'list', 'detail', 'create', 'update', 'update_navigation', 'add_components', 'remove_components', 'validate', or 'undo'.")] string action = "detail",
            [Description("App display name, unique name, or GUID. Required except for list and create.")] string app = "",
            [Description("list only. App display/unique name contains filter.")] string app_name = "",
            [Description("Required for create. Used to resolve the solution publisher prefix.")] string solution_name = "",
            [Description("Required for create. Optional for update.")] string display_name = "",
            [Description("Optional for create. The solution publisher prefix is always prepended (e.g. 'MyApp' with solution all_in_one becomes 'all_MyApp'). If empty, derived from display_name.")] string unique_name = "",
            [Description("Optional for create/update.")] string description = "",
            [Description("Optional app icon web resource name or GUID.")] string icon_webresource = "",
            [Description("update_navigation: JSON array serialized as a string. Dashboard and WebResource add_item/update_item operations accept icon (SVG web resource name, $webresource: reference, or /WebResources/ path). See docs://instructions_for_manage_app for examples. undo: .app.json backup file path from result.backupPath.")] string operations = "",
            [Description("list only. 1-500.")] int max_records = 100,
            string entity_name = "",
            string[] view_ids = null,
            string[] form_ids = null,
            string[] dashboard_ids = null,
            string[] chart_ids = null)
        {
            try
            {
                var normalizedAction = (action ?? "detail").Trim().ToLowerInvariant();

                if (normalizedAction is "update" or "update_navigation" or "add_components" or "remove_components" or "undo")
                    _workspaceFolder = await WorkspaceFolderHelper.GetAsync(server);

                return normalizedAction switch
                {
                    "list" => HandleList(app_name, max_records),
                    "detail" => HandleDetail(app),
                    "create" => HandleCreate(solution_name, display_name, unique_name, description, icon_webresource),
                    "update" => HandleUpdate(app, display_name, description, icon_webresource),
                    "update_navigation" => HandleUpdateNavigation(app, operations),
                    "add_components" or "remove_components" => HandleAppComponents(
                        normalizedAction, app, entity_name, view_ids ?? [], form_ids ?? [], dashboard_ids ?? [], chart_ids ?? []),
                    "validate" => HandleValidate(app),
                    "undo" => HandleUndo(app, operations),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'create', 'update', 'update_navigation', 'add_components', 'remove_components', 'validate', 'undo'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleList(string appNameFilter, int maxRecords)
        {
            maxRecords = Math.Clamp(maxRecords <= 0 ? 100 : maxRecords, 1, 500);

            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description"),
                TopCount = maxRecords,
                Orders = { new OrderExpression("name", OrderType.Ascending) }
            };

            if (!string.IsNullOrWhiteSpace(appNameFilter))
            {
                var filter = appNameFilter.Trim();
                var nameFilter = new FilterExpression(LogicalOperator.Or);
                nameFilter.AddCondition("name", ConditionOperator.Like, $"%{filter}%");
                nameFilter.AddCondition("uniquename", ConditionOperator.Like, $"%{filter}%");
                query.Criteria.AddFilter(nameFilter);
            }

            var apps = RetrieveAppModules(query);
            var entries = apps.Select(appEntity =>
            {
                var appModuleIdUnique = appEntity.GetAttributeValue<Guid?>("appmoduleidunique");
                return new ManageAppListEntryResult
                {
                    AppModuleId = appEntity.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique?.ToString(),
                    Name = appEntity.GetAttributeValue<string>("name"),
                    UniqueName = appEntity.GetAttributeValue<string>("uniquename"),
                    HasSiteMap = appModuleIdUnique.HasValue && HasSiteMap(appModuleIdUnique.Value, appEntity.GetAttributeValue<string>("uniquename")),
                    Description = appEntity.GetAttributeValue<string>("description")
                };
            }).ToList();

            return Success($"Found {entries.Count} model-driven app(s).", new ManageAppResult
            {
                Action = "list",
                Status = "success",
                TotalCount = entries.Count,
                Apps = entries.Count > 0 ? entries : null
            });
        }

        private CallToolResult HandleDetail(string app)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error("app is required for action='detail'. Provide an app display name, unique name, or GUID.",
                    DiscoverAppsHint);

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            var siteMapId = appModuleIdUnique.HasValue
                ? ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"))
                : null;
            var siteMapXml = siteMapId.HasValue ? RetrieveSiteMapXml(siteMapId.Value) : null;
            var navigationTree = FormatNavigationTree(siteMapXml);
            var navigationAreas = ParseNavigationAreas(siteMapXml);
            var appComponents = appModuleIdUnique.HasValue
                ? GetAppComponents(appModuleIdUnique.Value)
                : [];

            var componentRefs = appComponents
                .Select(c => $"{c.GetAttributeValue<OptionSetValue>("componenttype")?.Value}:{c.GetAttributeValue<Guid?>("objectid")}")
                .ToList();
            var appName = appModule.GetAttributeValue<string>("name") ?? appModule.GetAttributeValue<string>("uniquename");

            return Success($"App '{appName}' ({appModule.Id}). SiteMap: {(siteMapId.HasValue ? siteMapId.Value.ToString() : "none")}. Components: {appComponents.Count}. Navigation areas: {navigationAreas.Count}.", new ManageAppResult
            {
                Action = "detail",
                Status = "success",
                AppModuleId = appModule.Id.ToString(),
                AppModuleIdUnique = appModuleIdUnique?.ToString(),
                AppName = appModule.GetAttributeValue<string>("name"),
                UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                Description = appModule.GetAttributeValue<string>("description"),
                SiteMapId = siteMapId?.ToString(),
                NavigationTree = string.IsNullOrWhiteSpace(navigationTree) ? null : navigationTree,
                NavigationAreas = navigationAreas.Count > 0 ? navigationAreas : null,
                AppComponents = componentRefs.Count > 0 ? componentRefs : null
            });
        }

        private CallToolResult HandleCreate(string solutionName, string displayName, string uniqueName,
            string description, string iconWebResource)
        {
            if (string.IsNullOrWhiteSpace(solutionName))
                return Error("solution_name is required for action='create'.",
                    "Provide the unique or display name of the solution that will contain the app.");
            if (string.IsNullOrWhiteSpace(displayName))
                return Error("display_name is required for action='create'.",
                    "Provide the app display name shown to users.");

            var solResult = SolutionResolverHelper.Resolve(_orgService, solutionName.Trim());
            if (!solResult.IsSuccess)
            {
                if (solResult.Status == ResolveStatus.Ambiguous)
                    return Error(solResult.Error.Split("\r\n")[0], "Re-call with a more specific solution_name value.", new ManageAppResult
                    {
                        Action = "create",
                        Status = "blocked_solution_resolution",
                        SolutionMatches = solResult.Candidates?.Select(c => new AppMatchEntry
                        {
                            DisplayName = c.DisplayName ?? "",
                            UniqueName = c.UniqueName ?? "",
                            Id = c.Id?.ToString()
                        }).ToList(),
                        Published = false
                    });
                return Error(solResult.Error.Split("\r\n")[0], "Use inspect_metadata(resource='solution_components') to find valid solution names.");
            }

            var appUniqueName = string.IsNullOrWhiteSpace(uniqueName)
                ? $"{solResult.Prefix}_{SanitizeUniqueName(displayName)}"
                : uniqueName.Trim();
            if (!appUniqueName.StartsWith(solResult.Prefix + "_", StringComparison.OrdinalIgnoreCase))
                appUniqueName = $"{solResult.Prefix}_{SanitizeUniqueName(appUniqueName)}";
            if (appUniqueName.Length > 40)
                appUniqueName = appUniqueName.Substring(0, 40);

            if (AppUniqueNameExists(appUniqueName))
                return Error($"Model-driven app unique_name '{appUniqueName}' already exists.",
                    "Use action='update' to modify the existing app.");

            var iconId = ResolveIconWebResourceId(iconWebResource, out var iconError);
            if (iconError != null)
                return Error(iconError, "Provide an existing image web resource name/GUID (allowed types: png, jpg, gif, svg, ico), or omit icon_webresource to use the default icon.");

            var baseLanguage = McpHelper.GetBaseLanguageCode(_orgService);
            var starterSiteMapXml = BuildStarterSiteMapXml(baseLanguage);
            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(starterSiteMapXml);
            if (xsdErrors.Count > 0)
                return Error("Starter sitemap XML failed XSD validation — app was not created.", "The tool-generated starter sitemap is invalid; report this as a tool bug.", details: new ManageAppResult
                {
                    Action = "create",
                    Status = "blocked_validation",
                    Validated = true,
                    ValidationErrors = xsdErrors,
                    ValidationWarnings = xsdWarnings.Count > 0 ? xsdWarnings : null,
                    Published = false,
                    NextStep = NotPublishedNextStep
                });

            if (_options.DryRun)
                return DryRun(
                    $"Would create app '{displayName.Trim()}' ({appUniqueName}) in solution '{solResult.UniqueName}'. Published: yes.",
                    new ManageAppResult
                    {
                        Action = "create",
                        Status = "not_executed",
                        AppName = displayName.Trim(),
                        UniqueName = appUniqueName,
                        SolutionUniqueName = solResult.UniqueName,
                        Published = false
                    });

            var appModuleIdUnique = Guid.NewGuid();
            var appModule = new Entity("appmodule")
            {
                ["appmoduleidunique"] = appModuleIdUnique,
                ["name"] = displayName.Trim(),
                ["uniquename"] = appUniqueName,
                ["webresourceid"] = iconId,
                ["clienttype"] = 4,
                ["formfactor"] = 1,
                ["isdefault"] = false,
                ["navigationtype"] = new OptionSetValue(0),
                ["publisherid"] = new EntityReference("publisher", solResult.PublisherId)
            };
            if (!string.IsNullOrWhiteSpace(description))
                appModule["description"] = description.Trim();

            var appModuleId = DataverseMutationExecutor.Create(_context, _orgService, appModule);
            var createdApp = RetrieveCreatedApp(appModuleId, appUniqueName);
            appModuleIdUnique = createdApp.GetAttributeValue<Guid>("appmoduleidunique");

            var siteMap = new Entity("sitemap")
            {
                ["sitemapname"] = $"{displayName.Trim()} SiteMap",
                ["sitemapnameunique"] = $"{appUniqueName}SiteMap",
                ["sitemapxml"] = starterSiteMapXml
            };
            var siteMapId = DataverseMutationExecutor.Create(_context, _orgService, siteMap);

            var starterComponents = BuildEntityAppComponents("account");
            starterComponents.Insert(0, new EntityReference("sitemap", siteMapId));
            AddAppComponents(appModuleId, starterComponents);

            var appSolutionResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _orgService, appModuleId, 80, solResult.UniqueName, addRequiredComponents: true);
            var siteMapSolutionResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _orgService, siteMapId, 62, solResult.UniqueName, addRequiredComponents: true);

            var published = PublishAppModule(appModuleId);

            var validation = ValidateApp(appModuleId);

            var addedSolutionComponents = new List<string>();
            if (appSolutionResult.IsAddToSolution) addedSolutionComponents.Add("appmodule");
            if (siteMapSolutionResult.IsAddToSolution) addedSolutionComponents.Add("sitemap");
            if (!string.IsNullOrWhiteSpace(appSolutionResult.AddToSolutionWarning))
                addedSolutionComponents.Add($"appmodule warning: {appSolutionResult.AddToSolutionWarning}");
            if (!string.IsNullOrWhiteSpace(siteMapSolutionResult.AddToSolutionWarning))
                addedSolutionComponents.Add($"sitemap warning: {siteMapSolutionResult.AddToSolutionWarning}");

            var warnings = MergeWarnings(validation.Warnings, xsdWarnings);
            var text = $"Created app '{displayName.Trim()}' ({appUniqueName}) in solution '{solResult.UniqueName}'{(published ? " and published." : ". Publishing failed.")}" +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (warnings?.Count > 0 ? $" {warnings.Count} validation warning(s)." : "");

            return CompleteMutation(text, "created", published, validation, new ManageAppResult
            {
                Action = "create",
                AppModuleId = appModuleId.ToString(),
                AppModuleIdUnique = appModuleIdUnique.ToString(),
                AppName = displayName.Trim(),
                UniqueName = appUniqueName,
                SiteMapId = siteMapId.ToString(),
                SolutionUniqueName = solResult.UniqueName,
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = MergeWarnings(validation.Warnings, xsdWarnings),
                AddedAppComponents = DescribeEntityAppComponents("account", starterComponents, includeSitemap: true),
                AddedSolutionComponents = addedSolutionComponents.Count > 0 ? addedSolutionComponents : null
            });
        }

        private CallToolResult HandleUpdate(string app, string displayName, string description,
            string iconWebResource)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error("app is required for action='update'. Provide an app display name, unique name, or GUID.",
                    DiscoverAppsHint);

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            var hasName = !string.IsNullOrWhiteSpace(displayName);
            var hasDescription = !string.IsNullOrWhiteSpace(description);
            var hasIcon = !string.IsNullOrWhiteSpace(iconWebResource);
            if (!hasName && !hasDescription && !hasIcon)
                return Error("action='update' requires at least one of display_name, description, or icon_webresource.",
                    "Provide the value(s) to change; omitting all three is a no-op.");

            var update = new Entity("appmodule", appModule.Id);
            var changes = new List<string>();
            if (hasName)
            {
                update["name"] = displayName.Trim();
                changes.Add($"name='{displayName.Trim()}'");
            }
            if (hasDescription)
            {
                update["description"] = description.Trim();
                changes.Add("description updated");
            }
            if (hasIcon)
            {
                var iconId = ResolveIconWebResourceId(iconWebResource, out var iconError);
                if (iconError != null)
                    return Error(iconError, "Provide an existing image web resource name/GUID (allowed types: png, jpg, gif, svg, ico), or omit icon_webresource to use the default icon.");
                update["webresourceid"] = iconId;
                changes.Add($"icon_webresource='{iconWebResource.Trim()}'");
            }

            if (_options.DryRun)
                return DryRun(
                    $"Would update app '{appModule.GetAttributeValue<string>("name")}' with: {string.Join(", ", changes)}. Published: yes.",
                    new ManageAppResult
                    {
                        Action = "update",
                        Status = "not_executed",
                        AppModuleId = appModule.Id.ToString(),
                        AppName = appModule.GetAttributeValue<string>("name"),
                        UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                        Published = false
                    });

            // Snapshot only when actually mutating
            var backupPath = SaveAppSnapshot(appModule);

            DataverseMutationExecutor.Update(_context, _orgService, update);
            var published = PublishAppModule(appModule.Id);
            var refreshQuery = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"),
                TopCount = 1
            };
            refreshQuery.Criteria.AddCondition("appmoduleid", ConditionOperator.Equal, appModule.Id);
            var refreshed = RetrieveAppModules(refreshQuery).FirstOrDefault()
                ?? throw new InvalidOperationException($"App '{appModule.Id}' could not be retrieved after update.");
            var validation = ValidateApp(refreshed.Id);

            var text = $"Updated app '{refreshed.GetAttributeValue<string>("name")}' ({refreshed.GetAttributeValue<string>("uniquename")}){(published ? " and published" : "")}: {string.Join(", ", changes)}." +
                (published ? "" : " Publishing failed.") +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (validation.Warnings?.Count > 0 ? $" {validation.Warnings.Count} validation warning(s)." : "");

            return CompleteMutation(text, "updated", published, validation, new ManageAppResult
            {
                Action = "update",
                AppModuleId = refreshed.Id.ToString(),
                AppModuleIdUnique = refreshed.GetAttributeValue<Guid>("appmoduleidunique").ToString(),
                AppName = refreshed.GetAttributeValue<string>("name"),
                UniqueName = refreshed.GetAttributeValue<string>("uniquename"),
                SiteMapId = ResolveSiteMapId(refreshed.GetAttributeValue<Guid>("appmoduleidunique"), refreshed.GetAttributeValue<string>("uniquename"))?.ToString(),
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = validation.Warnings,
                BackupPath = backupPath
            });
        }

        private CallToolResult HandleValidate(string app)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error("app is required for action='validate'. Provide an app display name, unique name, or GUID.",
                    DiscoverAppsHint);

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            var validation = ValidateApp(appModule.Id);
            var text = $"Validated app '{appModule.GetAttributeValue<string>("name")}' ({appModule.Id}): {validation.Status}." +
                (validation.Errors?.Count > 0 ? $" {validation.Errors.Count} error(s)." : "") +
                (validation.Warnings?.Count > 0 ? $" {validation.Warnings.Count} warning(s)." : "");

            return Success(text, new ManageAppResult
            {
                Action = "validate",
                Status = validation.Status,
                AppModuleId = appModule.Id.ToString(),
                AppModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique")?.ToString(),
                AppName = appModule.GetAttributeValue<string>("name"),
                UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = validation.Warnings
            });
        }

        private CallToolResult HandleUpdateNavigation(string app, string operations)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error("app is required for action='update_navigation'. Provide an app display name, unique name, or GUID.",
                    DiscoverAppsHint);
            if (string.IsNullOrWhiteSpace(operations))
                return Error("operations is required for action='update_navigation'.",
                    "Provide a JSON array of navigation operations, e.g. [{\"action\":\"add_group\",\"area\":\"area_default\",\"id\":\"group_x\",\"title\":\"X\"}].");
            if (!operations.TrimStart().StartsWith("["))
                return Error("update_navigation only accepts operation JSON arrays. Raw sitemap XML and backup paths are not supported by this action.",
                    "Pass a JSON array of navigation operations, e.g. [{\"action\":\"add_group\",\"area\":\"area_default\",\"id\":\"group_x\",\"title\":\"X\"}]. To restore from a backup, use action='undo'.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            if (!appModuleIdUnique.HasValue)
                return Error($"App '{appModule.GetAttributeValue<string>("name")}' has no appmoduleidunique.",
                    "The app record is incomplete; re-create it with manage_ui(resource='app', action='create') or fix it in the app designer.");

            var siteMapId = ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"));
            if (!siteMapId.HasValue)
                return Error($"App '{appModule.GetAttributeValue<string>("name")}' has no sitemap component.",
                    "Create the app with manage_ui(resource='app', action='create') so a starter sitemap is generated.");

            var currentSiteMapXml = RetrieveSiteMapXml(siteMapId.Value);
            if (string.IsNullOrWhiteSpace(currentSiteMapXml))
                return Error($"Sitemap '{siteMapId}' has no sitemapxml content.",
                    "The sitemap record is empty; edit it in the app designer or re-create the app with manage_ui(resource='app', action='create').");

            var ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
            if (ops == null || ops.Count == 0)
                return Error("operations must be a non-empty JSON array.",
                    "Provide at least one navigation operation, e.g. [{\"action\":\"add_group\",\"area\":\"area_default\",\"id\":\"group_x\",\"title\":\"X\"}].");

            var (normalizedOps, operationNameErrors) = NormalizeNavigationEntityReferences(ops);
            if (operationNameErrors.Count > 0)
                return Error("Navigation name resolution failed.",
                    "Display Name contains is resolved first, then logical/schema contains. Use a more specific entity value when matches are ambiguous.",
                    new ManageAppResult
                    {
                        Action = "update_navigation",
                        Status = "blocked_entity_resolution",
                        AppModuleId = appModule.Id.ToString(),
                        AppName = appModule.GetAttributeValue<string>("name"),
                        UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                        ValidationErrors = operationNameErrors,
                        Published = false
                    });
            ops = normalizedOps;

            AppNavigationOperationsResult navResult;
            try
            {
                var doc = XDocument.Parse(currentSiteMapXml);
                navResult = AppNavigationOperationsHelper.ApplyOperations(
                    doc, ops, McpHelper.GetBaseLanguageCode(_orgService));
            }
            catch (AppNavigationOperationException ex)
            {
                return string.IsNullOrWhiteSpace(ex.Action)
                    ? Error($"Navigation operation failed: {ex.Message}", ex.Hint)
                    : Error($"Navigation operation '{ex.Action}' failed: {ex.Message}", ex.Hint);
            }

            var entityComponentErrors = new List<string>();
            var entityComponentRefs = new EntityReferenceCollection();
            foreach (var entityName in navResult.AddedEntities.Distinct(StringComparer.OrdinalIgnoreCase))
            {
                try
                {
                    foreach (var component in BuildEntityAppComponents(entityName))
                        entityComponentRefs.Add(component);
                }
                catch (Exception ex)
                {
                    entityComponentErrors.Add($"{entityName}: {ex.Message}");
                }
            }
            if (entityComponentErrors.Count > 0)
                return Error($"Entity validation failed — navigation not updated. {string.Join("; ", entityComponentErrors)}", "Fix the listed entity references and re-call with the same operations.", details: new ManageAppResult
                {
                    Action = "update_navigation",
                    Status = "blocked_entity_validation",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    ValidationErrors = entityComponentErrors,
                    Published = false,
                    NextStep = NotPublishedNextStep
                });

            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(navResult.ModifiedSiteMapXml);
            if (xsdErrors.Count > 0)
                return Error($"Updated sitemap XML failed XSD validation — navigation not updated. {string.Join("; ", xsdErrors)}", "Fix the listed sitemap schema errors in the operations and re-call.", details: new ManageAppResult
                {
                    Action = "update_navigation",
                    Status = "blocked_validation",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    Validated = true,
                    ValidationErrors = xsdErrors,
                    ValidationWarnings = xsdWarnings.Count > 0 ? xsdWarnings : null,
                    Published = false,
                    OperationsCount = ops.Count,
                    NavigationChanged = navResult.HasChanges,
                    ChangedOperations = navResult.ChangedOperations,
                    NoOpOperations = navResult.NoOpOperations,
                    OperationSummaries = navResult.OperationSummaries,
                    NextStep = NotPublishedNextStep
                });

            var iconError = ValidateNavigationIcons(navResult.ItemIconNames);
            if (iconError != null)
                return Error(iconError, "Use the exact name of an existing SVG web resource, its '$webresource:' reference, or its '/WebResources/' path.");

            var pageComponents = new EntityReferenceCollection();
            var addedComponents = new List<string>(navResult.AddedEntities);
            var pageItems = navResult.ComponentItems.Where(item => item.Document != null).ToList();
            if (pageItems.Count > 0)
            {
                var existing = GetAppComponents(appModuleIdUnique.Value)
                    .Select(c => (c.GetAttributeValue<OptionSetValue>("componenttype")?.Value, c.GetAttributeValue<Guid>("objectid")))
                    .ToHashSet();
                var targets = pageItems
                    .Select(item => ((string)item.Attribute("DefaultDashboard"), (string)item.Attribute("Url")))
                    .Distinct();
                bool? supportsWebResourceComponents = null;
                foreach (var (dashboard, url) in targets)
                {
                    var (reference, componentType, error) = ResolveNavigationPage(dashboard, url);
                    if (error != null)
                        return Error(error, "Provide an existing system dashboard GUID or web resource name.");

                    if (!existing.Add((componentType, reference.Id)))
                        continue;
                    // $webresource creates a SiteMap dependency even when the app component type is unavailable.
                    if (componentType == WebResourceComponentType)
                    {
                        supportsWebResourceComponents ??= SupportsWebResourceAppComponents();
                        if (supportsWebResourceComponents == false)
                            continue;
                    }

                    pageComponents.Add(reference);
                    addedComponents.Add($"{reference.LogicalName}:{reference.Id:D}");
                }
            }

            if (_options.DryRun)
            {
                var previewText = $"Would update navigation of app '{appModule.GetAttributeValue<string>("name")}' with {ops.Count} operation(s): {navResult.ChangedOperations} changed, {navResult.NoOpOperations} no-op.";
                return DryRun(previewText, new ManageAppResult
                {
                    Action = "update_navigation",
                    Status = "not_executed",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    Published = false,
                    OperationsCount = ops.Count,
                    NavigationChanged = navResult.HasChanges,
                    ChangedOperations = navResult.ChangedOperations,
                    NoOpOperations = navResult.NoOpOperations,
                    OperationSummaries = navResult.OperationSummaries,
                    AddedAppComponents = addedComponents.Count > 0 ? addedComponents : null
                });
            }

            // Snapshot only when actually mutating
            var backupPath = SaveAppSnapshot(appModule);

            if (!navResult.HasChanges && pageComponents.Count == 0)
            {
                var noOpText = $"No changes for app '{appModule.GetAttributeValue<string>("name")}': all {ops.Count} navigation operation(s) already satisfied — sitemap update and publish skipped.";

                return Success(noOpText, new ManageAppResult
                {
                    Action = "update_navigation",
                    Status = "no_changes",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    BackupPath = backupPath,
                    Validated = true,
                    ValidationWarnings = xsdWarnings.Count > 0 ? xsdWarnings : null,
                    Published = false,
                    OperationsCount = ops.Count,
                    NavigationChanged = false,
                    ChangedOperations = navResult.ChangedOperations,
                    NoOpOperations = navResult.NoOpOperations,
                    OperationSummaries = navResult.OperationSummaries
                });
            }

            // Associate page components first so a retry never sees a new page pointing at a missing component.
            if (pageComponents.Count > 0)
                AddAppComponents(appModule.Id, pageComponents);

            if (navResult.HasChanges)
            {
                var updateSiteMap = new Entity("sitemap", siteMapId.Value)
                {
                    ["sitemapxml"] = navResult.ModifiedSiteMapXml
                };
                DataverseMutationExecutor.Update(_context, _orgService, updateSiteMap);
            }

            if (entityComponentRefs.Count > 0)
                AddAppComponents(appModule.Id, entityComponentRefs);

            var published = PublishHelper.PublishTargeted(_context, _orgService, new PublishTargetedPayload
            {
                AppModuleIds = [appModule.Id],
                SiteMapId = siteMapId.Value
            });

            var validation = ValidateApp(appModule.Id);
            var text = $"Updated navigation of app '{appModule.GetAttributeValue<string>("name")}'{(published ? " and published" : "")}: {navResult.ChangedOperations} changed, {navResult.NoOpOperations} no-op." +
                (published ? "" : " Publishing failed.") +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (MergeWarnings(validation.Warnings, xsdWarnings)?.Count > 0 ? $" {MergeWarnings(validation.Warnings, xsdWarnings).Count} validation warning(s)." : "");

            return CompleteMutation(text, "updated", published, validation, new ManageAppResult
            {
                Action = "update_navigation",
                AppModuleId = appModule.Id.ToString(),
                AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                AppName = appModule.GetAttributeValue<string>("name"),
                UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                SiteMapId = siteMapId.Value.ToString(),
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = MergeWarnings(validation.Warnings, xsdWarnings),
                BackupPath = backupPath,
                NextStep = published ? null : "Publish the app from Power Apps App Designer to apply the saved navigation changes.",
                OperationsCount = ops.Count,
                NavigationChanged = navResult.HasChanges,
                ChangedOperations = navResult.ChangedOperations,
                NoOpOperations = navResult.NoOpOperations,
                OperationSummaries = navResult.OperationSummaries,
                AddedAppComponents = addedComponents.Count > 0 ? addedComponents : null
            });
        }

        private CallToolResult HandleAppComponents(string action, string app, string entityName,
            string[] views, string[] forms, string[] dashboards, string[] charts)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error($"app is required for action='{action}'. Provide an app display name, unique name, or GUID.", DiscoverAppsHint);
            var add = action == "add_components";
            var hasEntity = !string.IsNullOrWhiteSpace(entityName);
            var noSelectors = views.Length + forms.Length + dashboards.Length + charts.Length == 0;
            if (noSelectors && !hasEntity)
                return Error($"At least one component is required for action='{action}'.",
                    "Supply entity_name for a table or view_ids, form_ids, chart_ids, or dashboard_ids as an array of GUIDs or names.");
            if (views.Concat(forms).Concat(dashboards).Concat(charts).Any(string.IsNullOrWhiteSpace))
                return Error("Component selectors must be non-empty GUIDs or names.");
            if (!hasEntity && charts.Length > 0)
                return Error($"entity_name is required with chart_ids for action='{action}'.",
                    "Provide the table display name or logical name.");
            if (!hasEntity && (views.Length > 0 || forms.Length > 0))
                return Error($"entity_name is required with view_ids or form_ids for action='{action}'.",
                    "Provide the table display name or logical name.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            EntityMetadata entityMetadata = null;
            if (hasEntity)
            {
                var resolved = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "manage_ui(resource='app')");
                if (!resolved.IsSuccess)
                    return Error(resolved.Error, "Use inspect_metadata(resource='tables') to find the table's logical name.");
                entityMetadata = resolved.Value;
            }

            var logicalName = entityMetadata?.LogicalName;
            var components = ResolveComponentSelectors(views, logicalName, "view")
                .Concat(ResolveComponentSelectors(forms, logicalName, "form"))
                .Concat(ResolveComponentSelectors(dashboards, logicalName, "dashboard"))
                .Concat(ResolveComponentSelectors(charts, logicalName, "chart"))
                .Distinct().ToList();
            var tableId = entityMetadata?.MetadataId;
            var removeCharts = !add && charts.Length > 0;
            if (hasEntity && (add || noSelectors || removeCharts) && (!tableId.HasValue || tableId == Guid.Empty))
                return Error($"Entity metadata id not found for '{logicalName}'.");
            if (hasEntity && (add || noSelectors))
                components.Insert(0, new AppComponent(EntityComponentType, tableId.Value));
            return ApplyComponentMembership(appModule, components, _ => add,
                new ManageAppResult { Action = action, EntityName = logicalName }, removeCharts ? tableId : null);
        }

        private IEnumerable<AppComponent> ResolveComponentSelectors(string[] selectors, string table, string kind)
        {
            var (logicalName, idAttribute, scopeAttribute, componentType) = kind switch
            {
                "view" => ("savedquery", "savedqueryid", "returnedtypecode", ViewComponentType),
                "chart" => ("savedqueryvisualization", "savedqueryvisualizationid", "primaryentitytypecode", ChartComponentType),
                _ => ("systemform", "formid", "objecttypecode", SystemFormComponentType)
            };
            var isDashboard = kind == "dashboard";
            foreach (var selector in selectors.Select(value => value.Trim()).Distinct(StringComparer.OrdinalIgnoreCase))
            {
                var query = new QueryExpression(logicalName)
                {
                    ColumnSet = new ColumnSet(false),
                    TopCount = 2
                };
                if (Guid.TryParse(selector, out var id))
                    query.Criteria.AddCondition(idAttribute, ConditionOperator.Equal, id);
                else
                    query.Criteria.AddCondition("name", ConditionOperator.Equal, selector);

                if (componentType == SystemFormComponentType)
                    query.Criteria.AddCondition("type", isDashboard ? ConditionOperator.In : ConditionOperator.NotIn, DashboardFormTypes);

                if (table != null)
                {
                    if (isDashboard)
                    {
                        // A dashboard can be scoped to a table or shared across the app.
                        var scope = query.Criteria.AddFilter(LogicalOperator.Or);
                        scope.AddCondition("objecttypecode", ConditionOperator.Equal, table);
                        scope.AddCondition("objecttypecode", ConditionOperator.Null);
                    }
                    else
                        query.Criteria.AddCondition(scopeAttribute, ConditionOperator.Equal, table);
                }

                var matches = _orgService.RetrieveMultiple(query).Entities;
                var tableScope = table == null ? "" : $" for table '{table}'";
                if (isDashboard && table != null)
                    tableScope += " or across the app";
                if (matches.Count == 0)
                    throw new ArgumentException($"System {kind} '{selector}' was not found{tableScope}.");
                if (matches.Count > 1)
                    throw new ArgumentException($"System {kind} name '{selector}' is ambiguous{tableScope}. Use its GUID. Matches: {string.Join(", ", matches.Select(row => row.Id))}.");
                yield return new AppComponent(componentType, matches[0].Id);
            }
        }

        private CallToolResult ApplyComponentMembership(Entity app, IReadOnlyList<AppComponent> scope,
            Func<AppComponent, bool> shouldBePresent, ManageAppResult result, Guid? chartRemovalTableId = null)
        {
            var appIdUnique = app.GetAttributeValue<Guid?>("appmoduleidunique");
            var name = app.GetAttributeValue<string>("name");
            if (!appIdUnique.HasValue)
                return Error($"App '{name}' has no appmoduleidunique.",
                    "The app record is incomplete; re-create it with manage_ui(resource='app', action='create') or fix it in the app designer.");

            var existing = GetAppComponents(appIdUnique.Value);
            var membership = existing.Select(row => new AppComponent(row.GetAttributeValue<OptionSetValue>("componenttype")?.Value ?? 0,
                row.GetAttributeValue<Guid>("objectid"))).ToHashSet();
            var (chartsToKeep, defaultChartsToRemove, chartError) = PlanChartRemoval(chartRemovalTableId, result.EntityName, scope, membership);
            if (chartError != null)
                return chartError;

            var add = scope.Where(component => shouldBePresent(component) && !membership.Contains(component)).Concat(chartsToKeep).ToList();
            var remove = scope.Where(component => !shouldBePresent(component) && membership.Contains(component)).ToList();
            var changes = add.Concat(remove).ToList();
            var removedComponents = remove.Concat(defaultChartsToRemove).Select(component => component.ToString()).ToList();

            result.AppModuleId = app.Id.ToString();
            result.AppModuleIdUnique = appIdUnique.Value.ToString();
            result.AppName = name;
            result.UniqueName = app.GetAttributeValue<string>("uniquename");
            result.OperationsCount = scope.Count + chartsToKeep.Count;
            result.ChangedOperations = changes.Count + defaultChartsToRemove.Count;
            result.NoOpOperations = result.OperationsCount - result.ChangedOperations;
            result.Published = false;

            if (_options.DryRun)
            {
                result.Status = "not_executed";
                result.AddedAppComponents = add.Count > 0 ? add.Select(component => component.ToString()).ToList() : null;
                result.RemovedAppComponents = removedComponents.Count > 0 ? removedComponents : null;
                var preview = defaultChartsToRemove.Count > 0
                    ? $"Would explicitly select {chartsToKeep.Count} remaining chart(s) and remove {removedComponents.Count} component(s) on app '{name}'."
                    : $"Would add {add.Count} and remove {remove.Count} explicit component(s) on app '{name}'.";
                return DryRun(preview, result);
            }

            if (changes.Count == 0)
            {
                result.Status = "no_changes";
                return Success($"App '{name}' already has the requested explicit component membership.", result);
            }

            _context.AssertMutationAllowed(result.Action);
            result.BackupPath = SaveAppSnapshot(app, existing, changes);
            try
            {
                if (add.Count > 0)
                {
                    AddAppComponents(app.Id, new EntityReferenceCollection(add.Select(component => ToComponentReference(component, result.EntityName)).ToList()));
                    result.AddedAppComponents = add.Select(component => component.ToString()).ToList();
                    if (defaultChartsToRemove.Count > 0)
                        result.RemovedAppComponents = defaultChartsToRemove.Select(component => component.ToString()).ToList();
                }
                if (remove.Count > 0)
                {
                    DataverseMutationExecutor.Execute(_context, _orgService, new RemoveAppComponentsRequest
                    {
                        AppId = app.Id,
                        Components = new EntityReferenceCollection(remove.Select(component => ToComponentReference(component, result.EntityName)).ToList())
                    });
                    result.RemovedAppComponents = removedComponents;
                }
            }
            catch (Exception ex)
            {
                var confirmedChanges = (result.AddedAppComponents?.Count ?? 0) + (result.RemovedAppComponents?.Count ?? 0);
                result.ChangedOperations = confirmedChanges;
                result.NextStep = "Inspect the app with manage_ui(resource='app', action='detail') before retrying, or pass backupPath to action='undo'.";
                result.Status = confirmedChanges == 0 ? "component_update_failed" : "component_update_partial";
                var message = $"Component update for app '{name}' failed: {ex.Message}";
                return confirmedChanges == 0 ? Error(message, result.NextStep, details: result) : Partial(message, result);
            }

            var published = PublishAppModule(app.Id);
            var validation = ValidateApp(app.Id);
            result.Validated = true;
            result.ValidationErrors = validation.Errors;
            result.ValidationWarnings = validation.Warnings;
            var summary = defaultChartsToRemove.Count > 0
                ? $"Explicitly selected {chartsToKeep.Count} remaining chart(s) and removed {removedComponents.Count} component(s) on app '{name}'"
                : $"Added {add.Count} and removed {remove.Count} explicit component(s) on app '{name}'";
            var text = summary +
                (published ? " and published." : ". Publishing failed.") +
                (validation.Errors?.Count > 0 ? " Validation failed." : "");
            return CompleteMutation(text, result.Action == "undo" ? "restored" : "updated", published, validation, result);
        }

        private (List<AppComponent> ChartsToKeep, List<AppComponent> DefaultChartsToRemove, CallToolResult Error) PlanChartRemoval(
            Guid? tableId, string table, IReadOnlyList<AppComponent> scope, HashSet<AppComponent> membership)
        {
            if (!tableId.HasValue || !membership.Contains(new AppComponent(EntityComponentType, tableId.Value)))
                return ([], [], null);

            var query = new QueryExpression("savedqueryvisualization") { ColumnSet = new ColumnSet(false) };
            query.Criteria.AddCondition("primaryentitytypecode", ConditionOperator.Equal, table);
            var tableCharts = RetrieveComponentRows(query, "savedqueryvisualizationid")
                .Select(chart => new AppComponent(ChartComponentType, chart.Id)).ToList();
            var explicitCharts = tableCharts.Where(membership.Contains).ToList();
            var requestedRemovals = scope.Where(component => component.Type == ChartComponentType).ToHashSet();
            var visibleCharts = explicitCharts.Count > 0 ? explicitCharts : tableCharts;
            var chartsToRemove = visibleCharts.Where(requestedRemovals.Contains).ToList();
            if (chartsToRemove.Count == 0)
                return ([], [], null);

            var remaining = visibleCharts.Where(chart => !requestedRemovals.Contains(chart)).ToList();

            // An empty chart selection enables all of the table's system charts in Dataverse.
            if (remaining.Count == 0)
                return ([], [], Error($"Cannot remove these charts from '{table}': at least one system chart must remain selected in the app.",
                    "Dataverse displays all system charts when the selection is empty. Keep at least one chart selected."));

            return explicitCharts.Count > 0
                ? ([], [], null)
                : (remaining, chartsToRemove, null);
        }

        private CallToolResult RestoreComponentSnapshot(Entity app, ManageAppSnapshot snapshot, string path)
        {
            var scope = snapshot.ComponentScope.Select(entry => entry?.ToComponent()).ToList();
            if (snapshot.AppComponents == null || scope.Count == 0 || scope.Any(component => !component.HasValue))
                return Error("Backup contains an invalid app component scope.",
                    "Use an unmodified .app.json backup from backupPath of a previous manage_ui(resource='app') mutation.");

            var original = snapshot.AppComponents.Select(entry => entry?.ToComponent()).ToHashSet();
            return ApplyComponentMembership(app, scope.Select(component => component.Value).Distinct().ToList(), component => original.Contains(component),
                new ManageAppResult { Action = "undo", RestoredFromBackup = path });
        }

        private CallToolResult HandleUndo(string app, string operations)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error("app is required for action='undo'. Provide an app display name, unique name, or GUID.",
                    DiscoverAppsHint);
            if (string.IsNullOrWhiteSpace(operations))
                return Error("operations is required for action='undo'.",
                    "Provide the .app.json backup file path from the backupPath of a previous manage_ui(resource='app') mutation.");

            var backupFile = operations.Trim();
            if (backupFile.StartsWith("<", StringComparison.Ordinal))
                return Error("Raw sitemap XML is not supported by manage_ui(resource='app') v1. Use operations or read schema://sitemapxml for reference.",
                    "Pass the .app.json backup file path from the backupPath of a previous manage_ui(resource='app') mutation.");
            if (backupFile.StartsWith("[", StringComparison.Ordinal))
                return Error("undo expects a .app.json backup file path, not a navigation operations JSON array.",
                    "Pass the .app.json backup file path from the backupPath of a previous manage_ui(resource='app') mutation.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            if (!appModuleIdUnique.HasValue)
                return Error($"App '{appModule.GetAttributeValue<string>("name")}' has no appmoduleidunique.",
                    "The app record is incomplete; re-create it with manage_ui(resource='app', action='create') or fix it in the app designer.");

            var backupFullPath = Path.GetFullPath(backupFile);
            var backupExists = File.Exists(backupFullPath);
            var siteMapId = ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"));
            CallToolResult MissingSiteMap() => Error($"App '{appModule.GetAttributeValue<string>("name")}' has no sitemap component.",
                "Create the app with manage_ui(resource='app', action='create') so a starter sitemap is generated.");
            if (!backupExists && !siteMapId.HasValue)
                return MissingSiteMap();
            if (!backupExists)
                return Error($"backup file '{backupFile}' was not found.",
                    "Check the backupPath value returned by the manage_ui(resource='app') call that created the backup.");

            var snapshot = JsonSerializer.Deserialize<ManageAppSnapshot>(
                File.ReadAllText(backupFullPath, Encoding.UTF8),
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            if (snapshot == null || !string.Equals(snapshot.Kind, "manage_app.snapshot", StringComparison.Ordinal))
                return Error("backup file is not a manage_ui(resource='app') snapshot.",
                    "Use a .app.json file written by manage_ui(resource='app') (Kind='manage_app.snapshot').");
            if (!Guid.TryParse(snapshot.AppModuleId, out var backupAppModuleId) || backupAppModuleId != appModule.Id)
                return Error(
                    $"backup app ID does not match current app. BackupAppModuleId: {snapshot.AppModuleId}. CurrentAppModuleId: {appModule.Id}.",
                    "Re-call with the app the backup was taken from, or pick a backup whose appModuleId matches this app.");
            if (snapshot.ComponentScope != null)
                return RestoreComponentSnapshot(appModule, snapshot, backupFullPath);

            if (!siteMapId.HasValue)
                return MissingSiteMap();
            if (string.IsNullOrWhiteSpace(snapshot.SiteMapXml))
                return Error("backup does not contain sitemapxml.",
                    "The backup file is incomplete; use a different .app.json backup from backupPath of a previous manage_ui(resource='app') mutation.");

            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(snapshot.SiteMapXml);
            if (xsdErrors.Count > 0)
                return Error($"Backup sitemap XML failed XSD validation — undo not applied. {string.Join("; ", xsdErrors)}", "The backup's sitemap no longer passes schema validation; use a newer backup or fix the sitemap via update_navigation.", details: new ManageAppResult
                {
                    Action = "undo",
                    Status = "blocked_validation",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    RestoredFromBackup = backupFullPath,
                    Validated = true,
                    ValidationErrors = xsdErrors,
                    ValidationWarnings = xsdWarnings.Count > 0 ? xsdWarnings : null,
                    Published = false,
                    NextStep = NotPublishedNextStep
                });

            if (_options.DryRun)
            {
                var previewText = $"Would restore app '{appModule.GetAttributeValue<string>("name")}' navigation from backup '{backupFullPath}'.";
                return DryRun(previewText, new ManageAppResult
                {
                    Action = "undo",
                    Status = "not_executed",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    RestoredFromBackup = backupFullPath,
                    Published = false
                });
            }

            // Snapshot current state only when actually restoring
            var currentBackupPath = SaveAppSnapshot(appModule);

            DataverseMutationExecutor.Update(_context, _orgService, new Entity("sitemap", siteMapId.Value)
            {
                ["sitemapxml"] = snapshot.SiteMapXml
            });
            var published = PublishAppModule(appModule.Id);

            var validation = ValidateApp(appModule.Id);
            var text = $"Restored app '{appModule.GetAttributeValue<string>("name")}' navigation from backup '{backupFullPath}'{(published ? " and published." : ". Publishing failed.")}" +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (MergeWarnings(validation.Warnings, xsdWarnings)?.Count > 0 ? $" {MergeWarnings(validation.Warnings, xsdWarnings).Count} validation warning(s)." : "");

            return CompleteMutation(text, "restored", published, validation, new ManageAppResult
            {
                Action = "undo",
                AppModuleId = appModule.Id.ToString(),
                AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                AppName = appModule.GetAttributeValue<string>("name"),
                UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                SiteMapId = siteMapId.Value.ToString(),
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = MergeWarnings(validation.Warnings, xsdWarnings),
                BackupPath = currentBackupPath,
                RestoredFromBackup = backupFullPath,
                OperationSummaries = ["Restored sitemap XML from manage_ui(resource='app') snapshot"]
            });
        }

        private const string DiscoverAppsHint = "Use manage_ui(resource='app', action='list') to discover apps.";

        private (Entity AppModule, CallToolResult Error) ResolveApp(string app)
        {
            if (Guid.TryParse(app, out var appModuleId))
            {
                var queryById = new QueryExpression("appmodule")
                {
                    ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"),
                    TopCount = 1
                };
                queryById.Criteria.AddCondition("appmoduleid", ConditionOperator.Equal, appModuleId);
                var match = RetrieveAppModules(queryById).FirstOrDefault();
                return match != null
                    ? (match, null)
                    : (null, Error($"No model-driven app found for GUID '{app}'.", DiscoverAppsHint));
            }

            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"),
                TopCount = 10,
                Criteria = new FilterExpression(LogicalOperator.Or)
            };
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{app}%");
            query.Criteria.AddCondition("uniquename", ConditionOperator.Like, $"%{app}%");
            query.Orders.Add(new OrderExpression("name", OrderType.Ascending));

            var matches = RetrieveAppModules(query);
            if (matches.Count == 0)
                return (null, Error($"No model-driven app found matching '{app}'.", DiscoverAppsHint));

            var result = DisplayNameFirstResolver.Resolve(
                app,
                matches.Select(match => new DisplayNameFirstCandidate<Entity>
                {
                    Value = match,
                    DisplayName = match.GetAttributeValue<string>("name"),
                    UniqueName = match.GetAttributeValue<string>("uniquename"),
                    Id = match.Id,
                    Kind = "app",
                    CanonicalName = match.GetAttributeValue<string>("uniquename")
                }),
                "[AmbiguousApp]",
                "[NotFoundApp]",
                null,
                "app");

            if (result.IsSuccess)
                return (result.Value, null);
            if (result.Status == ResolveStatus.Ambiguous)
                return (null, Error(result.Error.Split("\r\n")[0], "Re-call with a more specific app value.", new ManageAppResult
                {
                    AppMatches = result.Candidates.Select(c => new AppMatchEntry
                    {
                        DisplayName = c.DisplayName ?? "",
                        UniqueName = c.UniqueName ?? "",
                        Id = c.Id?.ToString()
                    }).ToList()
                }));
            return (null, Error(result.Error.Split("\r\n")[0], DiscoverAppsHint));
        }

        private (List<JsonElement> Operations, List<string> Errors) NormalizeNavigationEntityReferences(List<JsonElement> ops)
        {
            var errors = new List<string>();
            var normalizedOps = new List<JsonElement>(ops.Count);

            for (var i = 0; i < ops.Count; i++)
            {
                var op = ops[i];
                var node = JsonNode.Parse(op.GetRawText());
                if (node is not JsonObject obj)
                {
                    normalizedOps.Add(op.Clone());
                    continue;
                }

                var action = GetJsonString(obj, "action")?.Trim().ToLowerInvariant();
                if ((action is "add_item" or "update_item") &&
                    !obj.ContainsKey("url") && !obj.ContainsKey("dashboard_id") &&
                    !obj.ContainsKey("default_dashboard") && !obj.ContainsKey("webresource"))
                {
                    var entity = GetJsonString(obj, "entity");
                    if (!string.IsNullOrWhiteSpace(entity))
                    {
                        var result = DisplayNameFirstResolver.ResolveEntity(_orgService, entity, "manage_ui(resource='app')");
                        if (result.IsSuccess)
                        {
                            obj["entity"] = result.Value.LogicalName;
                            if (action == "add_item" && !HasNavigationLabel(obj))
                            {
                                var displayName = result.Value.DisplayName?.UserLocalizedLabel?.Label;
                                if (!string.IsNullOrWhiteSpace(displayName))
                                    obj["label"] = displayName;
                            }
                        }
                        else
                        {
                            errors.Add($"operations[{i}].entity '{entity}': {result.Error}");
                        }
                    }
                }

                normalizedOps.Add(ToJsonElement(obj));
            }

            return (normalizedOps, errors);
        }

        private static bool HasNavigationLabel(JsonObject obj)
            => !string.IsNullOrWhiteSpace(GetJsonString(obj, "label"))
                || !string.IsNullOrWhiteSpace(GetJsonString(obj, "title"))
                || !string.IsNullOrWhiteSpace(GetJsonString(obj, "name"));

        private static string GetJsonString(JsonObject obj, string propertyName)
        {
            if (obj.TryGetPropertyValue(propertyName, out var node) &&
                node is JsonValue value &&
                value.TryGetValue<string>(out var text))
            {
                return text;
            }
            return null;
        }

        private static JsonElement ToJsonElement(JsonNode node)
        {
            using var doc = JsonDocument.Parse(node.ToJsonString());
            return doc.RootElement.Clone();
        }

        private List<Entity> RetrieveAppModules(QueryExpression query)
        {
            var byId = new Dictionary<Guid, Entity>();
            foreach (var entity in _orgService.RetrieveMultiple(query).Entities)
                byId[entity.Id] = entity;

            try
            {
                var unpublished = (RetrieveUnpublishedMultipleResponse)_orgService.Execute(new RetrieveUnpublishedMultipleRequest
                {
                    Query = query
                });
                foreach (var entity in unpublished.EntityCollection.Entities)
                    byId[entity.Id] = entity;
            }
            catch (Exception ex)
            {
                // Some environments or filters may not support unpublished reads; published results are still useful.
                System.Diagnostics.Debug.WriteLine($"manage_ui(resource='app'): unpublished read skipped: {ex.Message}");
            }

            return byId.Values.ToList();
        }

        private Entity RetrieveCreatedApp(Guid appModuleId, string uniqueName)
        {
            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"),
                TopCount = 1,
                Criteria = new FilterExpression(LogicalOperator.Or)
            };
            query.Criteria.AddCondition("appmoduleid", ConditionOperator.Equal, appModuleId);
            query.Criteria.AddCondition("uniquename", ConditionOperator.Equal, uniqueName);

            return RetrieveAppModules(query).FirstOrDefault()
                ?? throw new InvalidOperationException($"Created app '{uniqueName}' could not be retrieved from published or unpublished appmodule data.");
        }

        private bool HasSiteMap(Guid appModuleIdUnique, string appUniqueName) =>
            ResolveSiteMapId(appModuleIdUnique, appUniqueName).HasValue;

        private bool AppUniqueNameExists(string uniqueName)
        {
            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid"),
                TopCount = 1,
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("uniquename", ConditionOperator.Equal, uniqueName)
                    }
                }
            };
            return RetrieveAppModules(query).Count > 0;
        }

        private Guid? ResolveSiteMapId(Guid appModuleIdUnique, string appUniqueName = null)
        {
            var query = new QueryExpression("appmodulecomponent")
            {
                ColumnSet = new ColumnSet("objectid"),
                TopCount = 1,
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("appmoduleidunique", ConditionOperator.Equal, appModuleIdUnique),
                        new ConditionExpression("componenttype", ConditionOperator.Equal, 62)
                    }
                }
            };

            var component = _orgService.RetrieveMultiple(query).Entities.FirstOrDefault();
            var siteMapId = component?.GetAttributeValue<Guid?>("objectid");
            if (siteMapId.HasValue)
                return siteMapId;

            if (!string.IsNullOrWhiteSpace(appUniqueName))
                return ResolveSiteMapByUniqueName($"{appUniqueName}SiteMap");

            return null;
        }

        private Guid? ResolveSiteMapByUniqueName(string siteMapNameUnique)
        {
            var query = new QueryExpression("sitemap")
            {
                ColumnSet = new ColumnSet("sitemapid"),
                TopCount = 1
            };
            query.Criteria.AddCondition("sitemapnameunique", ConditionOperator.Equal, siteMapNameUnique);

            return _orgService.RetrieveMultiple(query).Entities.FirstOrDefault()?.Id;
        }

        private string RetrieveSiteMapXml(Guid siteMapId)
        {
            var query = new QueryExpression("sitemap")
            {
                ColumnSet = new ColumnSet("sitemapxml"),
                TopCount = 1
            };
            query.Criteria.AddCondition("sitemapid", ConditionOperator.Equal, siteMapId);
            return _orgService.RetrieveMultiple(query).Entities.FirstOrDefault()?.GetAttributeValue<string>("sitemapxml");
        }

        private EntityReference ToComponentReference(AppComponent component, string entityLogicalName)
        {
            var logicalName = component.Type switch
            {
                EntityComponentType => entityLogicalName ?? ResolveEntityLogicalName(component.Id),
                ViewComponentType => "savedquery",
                ChartComponentType => "savedqueryvisualization",
                SystemFormComponentType => "systemform",
                _ => throw new ArgumentException($"Unsupported app component type '{component.Type}'.", nameof(component))
            };
            return new EntityReference(logicalName, component.Id);
        }

        private string ResolveEntityLogicalName(Guid metadataId)
        {
            // Undo snapshots store the component type and ID, without the table name.
            var response = (RetrieveEntityResponse)_orgService.Execute(new RetrieveEntityRequest
            {
                MetadataId = metadataId,
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            });
            return response.EntityMetadata?.LogicalName
                ?? throw new InvalidOperationException($"Entity logical name not found for metadata id '{metadataId}'.");
        }

        private EntityMetadata ResolveEntityMetadata(string entityLogicalName)
        {
            var response = (RetrieveEntityResponse)_orgService.Execute(new RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            });
            return response.EntityMetadata
                ?? throw new InvalidOperationException($"Entity metadata not found for '{entityLogicalName}'.");
        }

        private EntityReferenceCollection BuildEntityAppComponents(string entityLogicalName)
        {
            var metadata = ResolveEntityMetadata(entityLogicalName);
            var metadataId = metadata.MetadataId
                ?? throw new InvalidOperationException($"Entity metadata id not found for '{entityLogicalName}'.");

            var components = new EntityReferenceCollection
            {
                new(entityLogicalName, metadataId)
            };

            return components;
        }

        private void AddAppComponents(Guid appModuleId, EntityReferenceCollection components)
        {
            DataverseMutationExecutor.Execute(_context, _orgService, new AddAppComponentsRequest
            {
                AppId = appModuleId,
                Components = components
            });
        }

        private (EntityReference Reference, int ComponentType, string Error) ResolveNavigationPage(string dashboard, string url)
        {
            if (dashboard != null)
            {
                var id = Guid.Parse(dashboard);
                var query = new QueryExpression("systemform") { ColumnSet = new ColumnSet(false), TopCount = 1 };
                query.Criteria.AddCondition("formid", ConditionOperator.Equal, id);
                query.Criteria.AddCondition("type", ConditionOperator.Equal, 0);
                if (_orgService.RetrieveMultiple(query).Entities.Count == 0)
                    return (null, 0, $"System dashboard '{id:D}' was not found.");
                return (new EntityReference("systemform", id), 60, null);
            }

            var name = url[AppNavigationOperationsHelper.WebResourcePrefix.Length..];
            var resource = FindNavigationWebResource(name, new ColumnSet(false));
            return resource == null
                ? (null, 0, $"Web resource '{name}' was not found.")
                : (resource.ToEntityReference(), WebResourceComponentType, null);
        }

        private string ValidateNavigationIcons(IReadOnlyDictionary<XElement, string> itemIconNames)
        {
            var items = itemIconNames.Where(entry => entry.Key.Document != null)
                .DistinctBy(entry => entry.Value, StringComparer.OrdinalIgnoreCase);
            foreach (var (item, name) in items)
            {
                var iconDescription = item.Attribute("DefaultDashboard") != null ? "Dashboard icon web resource" : "WebResource icon";
                var resource = FindNavigationWebResource(name, new ColumnSet("webresourcetype"));
                if (resource == null)
                    return $"{iconDescription} '{name}' was not found.";
                if (resource.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value != SvgWebResourceType)
                    return $"{iconDescription} '{name}' must be an SVG.";
            }
            return null;
        }

        private Entity FindNavigationWebResource(string name, ColumnSet columns)
        {
            var query = new QueryExpression("webresource") { ColumnSet = columns, TopCount = 1 };
            query.Criteria.AddCondition("name", ConditionOperator.Equal, name);
            return _orgService.RetrieveMultiple(query).Entities.FirstOrDefault();
        }

        private bool SupportsWebResourceAppComponents()
        {
            try
            {
                var response = (RetrieveAttributeResponse)_orgService.Execute(new RetrieveAttributeRequest
                {
                    EntityLogicalName = "appmodulecomponent",
                    LogicalName = "componenttype"
                });
                return response.AttributeMetadata is EnumAttributeMetadata attribute &&
                    attribute.OptionSet?.Options.Any(option => option.Value == WebResourceComponentType) == true;
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                System.Diagnostics.Debug.WriteLine($"manage_ui(resource='app'): app component type metadata unavailable: {ex.Message}");
                return false;
            }
        }

        private Guid ResolveIconWebResourceId(string iconWebResource, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(iconWebResource))
                return DefaultAppIconWebResourceId;

            var trimmed = iconWebResource.Trim();
            Entity icon = null;
            if (Guid.TryParse(trimmed, out var iconId))
            {
                var iconQuery = new QueryExpression("webresource")
                {
                    ColumnSet = new ColumnSet("name", "displayname", "webresourcetype"),
                    TopCount = 1
                };
                iconQuery.Criteria.AddCondition("webresourceid", ConditionOperator.Equal, iconId);
                icon = _orgService.RetrieveMultiple(iconQuery).Entities.FirstOrDefault();
                if (icon == null)
                {
                    error = $"icon_webresource GUID '{trimmed}' was not found.";
                    return Guid.Empty;
                }            }
            else
            {
                var result = DisplayNameFirstResolver.ResolveWebResource(_orgService, trimmed, "manage_ui(resource='app')");
                if (!result.IsSuccess)
                {
                    error = $"icon_webresource '{trimmed}': {result.Error}";
                    return Guid.Empty;
                }
                icon = result.Value;
            }

            var typeCode = icon.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? -1;
            if (!IsImageWebResourceType(typeCode))
            {
                error =
                    $"icon_webresource '{trimmed}' is not an image web resource. " +
                    "Allowed types: png, jpg, gif, svg, ico.";
                return Guid.Empty;
            }

            return icon.Id;
        }

        private static bool IsImageWebResourceType(int typeCode) =>
            typeCode is 5 or 6 or 7 or 10 or SvgWebResourceType;

        private List<Entity> GetAppComponents(Guid appModuleIdUnique)
        {
            var query = new QueryExpression("appmodulecomponent")
            {
                ColumnSet = new ColumnSet("componenttype", "objectid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("appmoduleidunique", ConditionOperator.Equal, appModuleIdUnique)
                    }
                },
                Orders = { new OrderExpression("componenttype", OrderType.Ascending) }
            };

            return RetrieveComponentRows(query, "appmodulecomponentid");
        }

        private List<Entity> RetrieveComponentRows(QueryExpression query, string primaryId)
        {
            query.AddOrder(primaryId, OrderType.Ascending);
            query.PageInfo = new PagingInfo { Count = 5000, PageNumber = 1 };
            var rows = new List<Entity>();
            while (true)
            {
                var page = _orgService.RetrieveMultiple(query);
                rows.AddRange(page.Entities);
                if (!page.MoreRecords)
                    return rows;
                query.PageInfo.PageNumber++;
                query.PageInfo.PagingCookie = page.PagingCookie;
            }
        }

        private static string BuildStarterSiteMapXml(int baseLanguage) => $@"<SiteMap>
  <Area Id=""area_default"" ResourceId=""SitemapDesigner.NewArea"" ShowGroups=""true"">
    <Titles>
      <Title LCID=""{baseLanguage}"" Title=""Workspace"" />
    </Titles>
    <Group Id=""group_default"" ResourceId=""SitemapDesigner.NewGroup"" IsProfile=""false"" ToolTipResourseId=""SitemapDesigner.Unknown"">
      <Titles>
        <Title LCID=""{baseLanguage}"" Title=""Default"" />
      </Titles>
      <SubArea Id=""sa_account"" Entity=""account"">
        <Titles>
          <Title LCID=""{baseLanguage}"" Title=""Accounts"" />
        </Titles>
      </SubArea>
    </Group>
  </Area>
</SiteMap>";

        private static string FormatNavigationTree(string siteMapXml)
        {
            if (string.IsNullOrWhiteSpace(siteMapXml))
                return "";

            try
            {
                var doc = XDocument.Parse(siteMapXml);
                var sb = new StringBuilder();
                foreach (var area in doc.Root?.Elements("Area") ?? [])
                {
                    sb.AppendLine($"Area: {GetTitle(area) ?? area.Attribute("Id")?.Value ?? "(unnamed)"}");
                    foreach (var group in area.Elements("Group"))
                    {
                        sb.AppendLine($"  Group: {GetTitle(group) ?? group.Attribute("Id")?.Value ?? "(unnamed)"}");
                        foreach (var subArea in group.Elements("SubArea"))
                        {
                            var entity = subArea.Attribute("Entity")?.Value;
                            var label = GetTitle(subArea);
                            if (!string.IsNullOrWhiteSpace(entity))
                                sb.AppendLine($"    Entity: {entity}" + (!string.IsNullOrWhiteSpace(label) ? $" ({label})" : ""));
                            else
                                sb.AppendLine($"    Item: {label ?? subArea.Attribute("Id")?.Value ?? "(unnamed)"}");
                        }
                    }
                }
                return sb.ToString().TrimEnd();
            }
            catch (Exception ex)
            {
                return $"- failed to parse sitemap XML: {ex.Message}";
            }
        }

        private static List<ManageAppNavigationAreaResult> ParseNavigationAreas(string siteMapXml)
        {
            if (string.IsNullOrWhiteSpace(siteMapXml))
                return [];

            try
            {
                var doc = XDocument.Parse(siteMapXml);
                return (doc.Root?.Elements("Area") ?? [])
                    .Select(area => new ManageAppNavigationAreaResult
                    {
                        Id = area.Attribute("Id")?.Value,
                        Title = GetTitle(area),
                        Groups = area.Elements("Group")
                            .Select(group => new ManageAppNavigationGroupResult
                            {
                                Id = group.Attribute("Id")?.Value,
                                Title = GetTitle(group),
                                Items = group.Elements("SubArea")
                                    .Select(subArea => new ManageAppNavigationItemResult
                                    {
                                        Id = subArea.Attribute("Id")?.Value,
                                        Title = GetTitle(subArea),
                                        Entity = subArea.Attribute("Entity")?.Value,
                                        Url = subArea.Attribute("Url")?.Value,
                                        DefaultDashboard = subArea.Attribute("DefaultDashboard")?.Value,
                                        Icon = AppNavigationOperationsHelper.GetItemIcon(subArea)
                                    })
                                    .ToList()
                            })
                            .ToList()
                    })
                    .ToList();
            }
            catch (XmlException)
            {
                return [];
            }
        }

        private static string GetTitle(XElement element) =>
            element.Element("Titles")?.Elements("Title").FirstOrDefault()?.Attribute("Title")?.Value;

        private static (List<string> Errors, List<string> Warnings) ValidateSiteMapXml(string siteMapXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetSiteMapSchemaSet();
                if (schemaSet == null || schemaSet.Count == 0)
                    return (errors, warnings);

                var settings = new XmlReaderSettings
                {
                    ValidationType = ValidationType.Schema,
                    Schemas = schemaSet
                };

                settings.ValidationEventHandler += (_, e) =>
                {
                    var location = e.Exception?.LineNumber > 0
                        ? $"Line {e.Exception.LineNumber}, Col {e.Exception.LinePosition}: "
                        : "";
                    var message = $"{location}{e.Message}";
                    if (IsSchemaEvolutionError(e.Message) || e.Severity == XmlSeverityType.Warning)
                        warnings.Add(message);
                    else
                        errors.Add(message);
                };

                using var stringReader = new StringReader(siteMapXml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                while (xmlReader.Read()) { }
            }
            catch (XmlException ex)
            {
                errors.Add($"XML parsing error at Line {ex.LineNumber}, Col {ex.LinePosition}: {ex.Message}");
            }

            return (errors, warnings);
        }

        private static bool IsSchemaEvolutionError(string message) =>
            message.Contains("attribute is not declared") ||
            message.Contains("is not declared");

        private static XmlSchemaSet GetSiteMapSchemaSet()
        {
            if (_cachedSiteMapSchemaSet != null)
                return _cachedSiteMapSchemaSet;

            lock (_schemaLock)
            {
                if (_cachedSiteMapSchemaSet != null)
                    return _cachedSiteMapSchemaSet;

                var schemas = new XmlSchemaSet();
                var assembly = Assembly.GetExecutingAssembly();
                var resourceNames = assembly.GetManifestResourceNames();
                foreach (var schemaFile in new[] { "SiteMap.xsd", "SiteMapType.xsd" })
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
                    _cachedSiteMapSchemaSet = schemas;
                }

                return _cachedSiteMapSchemaSet;
            }
        }

        private AppValidationResult ValidateApp(Guid appModuleId)
        {
            try
            {
                var request = new OrganizationRequest("ValidateApp")
                {
                    ["AppModuleId"] = appModuleId
                };
                var response = _orgService.Execute(request);
                return AppValidationResult.FromResponse(response);
            }
            catch (Exception ex)
            {
                return new AppValidationResult
                {
                    Status = "validation_failed",
                    Errors = [$"ValidateApp failed: {ex.Message}"]
                };
            }
        }

        private string SaveAppSnapshot(Entity appModule, List<Entity> existingComponents = null,
            IReadOnlyList<AppComponent> componentScope = null)
        {
            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            var siteMapId = appModuleIdUnique.HasValue
                ? ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"))
                : null;
            var siteMapXml = siteMapId.HasValue ? RetrieveSiteMapXml(siteMapId.Value) : null;
            var components = existingComponents ?? (appModuleIdUnique.HasValue ? GetAppComponents(appModuleIdUnique.Value) : []);

            var safeName = SanitizeFileName(appModule.GetAttributeValue<string>("name") ?? appModule.GetAttributeValue<string>("uniquename") ?? "app");
            var backupDir = Path.Combine(_workspaceFolder, ".devkit", "manage_app", safeName);
            Directory.CreateDirectory(backupDir);

            var snapshot = JsonSerializer.SerializeToNode(new
            {
                kind = "manage_app.snapshot",
                timestampUtc = DateTime.UtcNow.ToString("O"),
                appModuleId = appModule.Id.ToString(),
                appModuleIdUnique = appModuleIdUnique?.ToString(),
                appName = appModule.GetAttributeValue<string>("name"),
                uniqueName = appModule.GetAttributeValue<string>("uniquename"),
                description = appModule.GetAttributeValue<string>("description"),
                iconWebResourceId = GetGuidAttribute(appModule, "webresourceid")?.ToString(),
                siteMapId = siteMapId?.ToString(),
                appComponents = components.Select(c => new
                {
                    componentType = c.GetAttributeValue<OptionSetValue>("componenttype")?.Value,
                    objectId = c.GetAttributeValue<Guid?>("objectid")?.ToString()
                }).ToList(),
                sitemapxml = siteMapXml
            }).AsObject();
            if (componentScope != null)
                snapshot["componentScope"] = JsonSerializer.SerializeToNode(componentScope.Select(component => new
                {
                    componentType = component.Type,
                    objectId = component.Id
                }));

            var json = JsonSerializer.Serialize(snapshot, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });
            var fileName = $"{appModule.Id:N}_{DateTime.Now:yyyyMMddHHmmss}";
            for (var suffix = 1; ; suffix++)
            {
                var backupPath = Path.Combine(backupDir, suffix == 1 ? $"{fileName}.app.json" : $"{fileName}-{suffix}.app.json");
                FileStream stream;
                try
                {
                    stream = new FileStream(backupPath, FileMode.CreateNew, FileAccess.Write);
                }
                catch (IOException) when (File.Exists(backupPath))
                {
                    continue;
                }
                using (stream)
                using (var writer = new StreamWriter(stream, Encoding.UTF8))
                    writer.Write(json);
                return backupPath;
            }
        }

        private static Guid? GetGuidAttribute(Entity entity, string attributeName)
        {
            if (entity == null || !entity.Attributes.TryGetValue(attributeName, out var value) || value == null)
                return null;
            return value switch
            {
                Guid guid => guid,
                EntityReference entityReference => entityReference.Id,
                _ => null
            };
        }

        private bool PublishAppModule(Guid appModuleId) =>
            PublishHelper.PublishAppModule(_context, _orgService, appModuleId);

        private CallToolResult CompleteMutation(string text, string successStatus, bool published,
            AppValidationResult validation, ManageAppResult result)
        {
            result.Published = published;
            result.Status = published ? validation.StatusForMutation(successStatus) : $"{successStatus}_publish_failed";
            if (published)
                return Success(text, result);

            result.NextStep ??= NotPublishedNextStep;
            return Partial(text, result);
        }

        private static List<string> MergeWarnings(List<string> validationWarnings, List<string> xsdWarnings)
        {
            var merged = new List<string>();
            if (validationWarnings?.Count > 0) merged.AddRange(validationWarnings);
            if (xsdWarnings?.Count > 0) merged.AddRange(xsdWarnings.Select(w => $"SiteMap XSD: {w}"));
            return merged.Count > 0 ? merged : null;
        }

        private static List<string> DescribeEntityAppComponents(string entityLogicalName,
            EntityReferenceCollection components, bool includeSitemap)
        {
            var result = new List<string>();
            if (includeSitemap && components.Any(c => string.Equals(c.LogicalName, "sitemap", StringComparison.OrdinalIgnoreCase)))
                result.Add("sitemap");
            result.Add(entityLogicalName);
            return result;
        }

        private static string SanitizeUniqueName(string value)
        {
            var sb = new StringBuilder();
            foreach (var ch in value ?? "")
            {
                if (char.IsLetterOrDigit(ch))
                    sb.Append(ch);
                else if (ch == '_')
                    sb.Append(ch);
            }
            var result = sb.ToString();
            return string.IsNullOrWhiteSpace(result) ? "App" : result;
        }

        private static string SanitizeFileName(string value)
        {
            var invalid = Path.GetInvalidFileNameChars();
            var chars = (value ?? "app")
                .Select(ch => invalid.Contains(ch) ? '_' : ch)
                .ToArray();
            return new string(chars).Replace(' ', '_').ToLowerInvariant();
        }

        private static string EscapeTable(string value) =>
            (value ?? "").Replace("|", "\\|").Replace("\r", " ").Replace("\n", " ");

        private static string FormatException(Exception exception)
        {
            if (exception?.InnerException == null)
                return exception?.Message ?? "Unknown error";
            return $"{exception.Message}\nInnerException: {exception.InnerException.Message}";
        }

        private static string BuildCreateUpdateText(
            string status,
            string appName,
            string uniqueName,
            Guid appId,
            Guid appUniqueId,
            Guid siteMapId,
            string publisherPrefix,
            string backupPath,
            AppValidationResult validation,
            List<string> xsdWarnings)
        {
            var sb = new StringBuilder($"[ManageApp] {status}\nApp: {appName}\nUniqueName: {uniqueName}\nAppId: {appId}\nAppModuleIdUnique: {appUniqueId}\nSiteMapId: {siteMapId}\nPublisherPrefix: {publisherPrefix}\nBackupSaved: yes");
            sb.Append("\nNextStep: manage_admin(resource='publish')");
            foreach (var error in validation?.Errors ?? []) sb.Append($"\nValidationError: {error}");
            foreach (var warning in validation?.Warnings ?? []) sb.Append($"\nValidationWarning: {warning}");
            foreach (var warning in xsdWarnings ?? []) sb.Append($"\nSiteMap XSD: {warning}");
            return sb.ToString();
        }

        private static string BuildNavigationText(
            string status,
            Entity app,
            Guid appUniqueId,
            Guid siteMapId,
            string backupPath,
            AppValidationResult validation,
            AppNavigationOperationsResult navigation,
            List<string> xsdWarnings,
            bool published,
            bool backupCreated)
        {
            var sb = new StringBuilder($"[ManageAppNavigation] {status}\nApp: {app?.GetAttributeValue<string>("name")}\nAppModuleIdUnique: {appUniqueId}\nSiteMapId: {siteMapId}\nBackupSaved: yes\nPublished: {(published ? "yes" : "no")}");
            if (navigation?.AddedEntities?.Count > 0)
                sb.Append($"\nAddedAppComponents: {string.Join(", ", navigation.AddedEntities)}");
            if (backupCreated) sb.Append("\nBackupCreated: yes");
            foreach (var error in validation?.Errors ?? []) sb.Append($"\nValidationError: {error}");
            foreach (var warning in xsdWarnings ?? []) sb.Append($"\nSiteMap XSD: {warning}");
            return sb.ToString();
        }

        private static string BuildUndoText(
            string status,
            Entity app,
            Guid appUniqueId,
            Guid siteMapId,
            string currentBackupPath,
            string restoredFromBackup,
            AppValidationResult validation,
            List<string> xsdWarnings)
        {
            var sb = new StringBuilder($"[ManageAppUndo] {status}\nApp: {app?.GetAttributeValue<string>("name")}\nAppModuleIdUnique: {appUniqueId}\nSiteMapId: {siteMapId}\nBackupSaved: yes\nRestoredFromBackup: {restoredFromBackup}");
            foreach (var error in validation?.Errors ?? []) sb.Append($"\nValidationError: {error}");
            foreach (var warning in xsdWarnings ?? []) sb.Append($"\nSiteMap XSD: {warning}");
            return sb.ToString();
        }

        private sealed class AppValidationResult
        {
            public string Status { get; set; } = "skipped";
            public List<string> Errors { get; set; }
            public List<string> Warnings { get; set; }
            public bool Validated => Status != "skipped";

            public static AppValidationResult Skipped() => new();

            public string StatusForMutation(string successStatus) =>
                Errors?.Count > 0 ? $"{successStatus}_validation_failed" : successStatus;

            public static AppValidationResult FromResponse(OrganizationResponse response)
            {
                var result = new AppValidationResult { Status = "validated" };
                if (response?.Results == null || !response.Results.Contains("AppValidationResponse"))
                    return result;

                var validationResponse = response.Results["AppValidationResponse"];
                var issues = ExtractValidationIssues(validationResponse);
                if (issues.Errors.Count > 0)
                    result.Errors = issues.Errors;
                if (issues.Warnings.Count > 0)
                    result.Warnings = issues.Warnings;
                result.Status = result.Errors?.Count > 0 ? "validation_failed" : "validated";
                return result;
            }

            private static (List<string> Errors, List<string> Warnings) ExtractValidationIssues(object validationResponse)
            {
                var errors = new List<string>();
                var warnings = new List<string>();
                if (validationResponse == null)
                    return (errors, warnings);

                var issueListProp = validationResponse.GetType().GetProperty("ValidationIssueList");
                var issueList = issueListProp?.GetValue(validationResponse) as System.Collections.IEnumerable;
                if (issueList == null)
                    return (errors, warnings);

                foreach (var issue in issueList)
                {
                    if (issue == null)
                        continue;

                    var issueType = issue.GetType();
                    var errorType = issueType.GetProperty("ErrorType")?.GetValue(issue)?.ToString();
                    var isWarning = string.Equals(errorType, "Warning", StringComparison.OrdinalIgnoreCase);
                    var message = issue as string ?? issueType.GetProperty("Message")?.GetValue(issue)?.ToString();
                    if (string.IsNullOrWhiteSpace(message))
                    {
                        var component = issueType.GetProperty("DisplayName")?.GetValue(issue)?.ToString();
                        if (string.IsNullOrWhiteSpace(component))
                            component = issueType.GetProperty("ParentEntityName")?.GetValue(issue)?.ToString();
                        var errorCode = issueType.GetProperty("CRMErrorCode")?.GetValue(issue) as int?;
                        message = $"Dataverse returned a validation {(isWarning ? "warning" : "error")}" +
                            (string.IsNullOrWhiteSpace(component) ? "" : $" for '{component}'") +
                            (errorCode is null or 0 ? "" : $" (code {errorCode})") +
                            " without a message.";
                    }

                    (isWarning ? warnings : errors).Add(message);
                }
                return (errors, warnings);
            }
        }

        private sealed class ManageAppSnapshot
        {
            public string Kind { get; set; }
            public string AppModuleId { get; set; }
            public string AppModuleIdUnique { get; set; }
            public string AppName { get; set; }
            public string UniqueName { get; set; }
            public string Description { get; set; }
            public string IconWebResourceId { get; set; }
            public string SiteMapId { get; set; }
            public List<ManageAppSnapshotComponent> AppComponents { get; set; }
            public List<ManageAppSnapshotComponent> ComponentScope { get; set; }
            public string SiteMapXml { get; set; }
        }

        private sealed class ManageAppSnapshotComponent
        {
            public int? ComponentType { get; set; }
            public string ObjectId { get; set; }

            public AppComponent? ToComponent() =>
                ComponentType is EntityComponentType or ViewComponentType or ChartComponentType or SystemFormComponentType &&
                Guid.TryParse(ObjectId, out var id) && id != Guid.Empty
                    ? new AppComponent(ComponentType.Value, id)
                    : null;
        }

        private readonly record struct AppComponent(int Type, Guid Id)
        {
            public override string ToString() => $"{Type}:{Id:D}";
        }
    }
}
