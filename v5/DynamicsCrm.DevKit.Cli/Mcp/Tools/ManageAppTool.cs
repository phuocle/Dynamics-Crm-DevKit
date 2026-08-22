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
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageAppTool : McpToolBase
    {
        private const string NotPublishedNextStep =
            "Not published. Run publish_customizations(appmodules='<AppModuleId>') when ready.";
        private static readonly Guid DefaultAppIconWebResourceId = new("953b9fac-1e5e-e611-80d6-00155ded156f");
        private static XmlSchemaSet _cachedSiteMapSchemaSet;
        private static readonly object _schemaLock = new();

        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;

        public ManageAppTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
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
            "- Apply app-scoped sitemap navigation operations (add_area/add_group/add_item), validate an app, or restore from a .app.json backup (undo)\n" +
            "- App is resolved by Display Name first, then unique name/GUID; ambiguous Display Names return the candidates\n\n" +
            "RELATED TOOLS:\n" +
            "- get_solution_components → solution names for create\n" +
            "- publish_customizations → publish other components (manage_app mutations auto-publish the app)\n" +
            "- execute_webapi → blocked for appmodule/sitemap/appmodulecomponent; use this tool instead")]
        public CallToolResult manage_app(
            [Description("'list', 'detail', 'create', 'update', 'update_navigation', 'validate', or 'undo'.")] string action = "detail",
            [Description("App display name, unique name, or GUID. Required for detail/update/update_navigation/validate/undo.")] string app = "",
            [Description("list only. App display/unique name contains filter.")] string app_name = "",
            [Description("Required for create. Used to resolve the solution publisher prefix.")] string solution_name = "",
            [Description("Required for create. Optional for update.")] string display_name = "",
            [Description("Optional for create. The solution publisher prefix is always prepended (e.g. 'MyApp' with solution all_in_one becomes 'all_MyApp'). If empty, derived from display_name.")] string unique_name = "",
            [Description("Optional for create/update.")] string description = "",
            [Description("Optional app icon web resource name or GUID.")] string icon_webresource = "",
            [Description("JSON array for update_navigation, or backup file path for undo.")] string operations = "",
            [Description("Backup current app snapshot before update/update_navigation/undo when implemented.")] bool backup = true,
            [Description("Optional project/workspace folder path to save backups in.")] string workspace_folder = "",
            [Description("list only. 1-500.")] int max_records = 100)
        {            
            try
            {
                _workspaceFolder = workspace_folder;
                var normalizedAction = (action ?? "detail").Trim().ToLowerInvariant();

                return normalizedAction switch
                {
                    "list" => HandleList(app_name, max_records),
                    "detail" => HandleDetail(app),
                    "create" => HandleCreate(solution_name, display_name, unique_name, description, icon_webresource),
                    "update" => HandleUpdate(app, display_name, description, icon_webresource, backup),
                    "update_navigation" => HandleUpdateNavigation(app, operations, backup),
                    "validate" => HandleValidate(app),
                    "undo" => HandleUndo(app, operations, backup),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'create', 'update', 'update_navigation', 'validate', 'undo'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
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
                Apps = entries.Count > 0 ? entries : null,
                Published = false
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
                AppComponents = componentRefs.Count > 0 ? componentRefs : null,
                Published = false
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

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
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
                return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");
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
                return Error(iconError);

            var baseLanguage = McpHelper.GetBaseLanguageCode(_serviceClient);
            var starterSiteMapXml = BuildStarterSiteMapXml(baseLanguage);
            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(starterSiteMapXml);
            if (xsdErrors.Count > 0)
                return Error("Starter sitemap XML failed XSD validation — app was not created.", details: new ManageAppResult
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

            var appModuleId = DataverseMutationExecutor.Create(_context, _serviceClient, appModule);
            var createdApp = RetrieveCreatedApp(appModuleId, appUniqueName);
            appModuleIdUnique = createdApp.GetAttributeValue<Guid>("appmoduleidunique");

            var siteMap = new Entity("sitemap")
            {
                ["sitemapname"] = $"{displayName.Trim()} SiteMap",
                ["sitemapnameunique"] = $"{appUniqueName}SiteMap",
                ["sitemapxml"] = starterSiteMapXml
            };
            var siteMapId = DataverseMutationExecutor.Create(_context, _serviceClient, siteMap);

            var starterComponents = BuildEntityAppComponents("account");
            starterComponents.Insert(0, new EntityReference("sitemap", siteMapId));
            AddAppComponents(appModuleId, starterComponents);

            var appSolutionResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _serviceClient, appModuleId, 80, solResult.UniqueName, addRequiredComponents: true);
            var siteMapSolutionResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _serviceClient, siteMapId, 62, solResult.UniqueName, addRequiredComponents: true);

            PublishAppModule(appModuleId);

            var validation = ValidateApp(appModuleId);

            var addedSolutionComponents = new List<string>();
            if (appSolutionResult.IsAddToSolution) addedSolutionComponents.Add("appmodule");
            if (siteMapSolutionResult.IsAddToSolution) addedSolutionComponents.Add("sitemap");
            if (!string.IsNullOrWhiteSpace(appSolutionResult.AddToSolutionWarning))
                addedSolutionComponents.Add($"appmodule warning: {appSolutionResult.AddToSolutionWarning}");
            if (!string.IsNullOrWhiteSpace(siteMapSolutionResult.AddToSolutionWarning))
                addedSolutionComponents.Add($"sitemap warning: {siteMapSolutionResult.AddToSolutionWarning}");

            var warnings = MergeWarnings(validation.Warnings, xsdWarnings);
            var text = $"Created app '{displayName.Trim()}' ({appUniqueName}) in solution '{solResult.UniqueName}' and published." +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (warnings?.Count > 0 ? $" {warnings.Count} validation warning(s)." : "");

            return Success(text, new ManageAppResult
            {
                Action = "create",
                Status = validation.StatusForMutation("created"),
                AppModuleId = appModuleId.ToString(),
                AppModuleIdUnique = appModuleIdUnique.ToString(),
                AppName = displayName.Trim(),
                UniqueName = appUniqueName,
                SiteMapId = siteMapId.ToString(),
                SolutionUniqueName = solResult.UniqueName,
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = MergeWarnings(validation.Warnings, xsdWarnings),
                Published = true,
                AddedAppComponents = DescribeEntityAppComponents("account", starterComponents, includeSitemap: true),
                AddedSolutionComponents = addedSolutionComponents.Count > 0 ? addedSolutionComponents : null
            });
        }

        private CallToolResult HandleUpdate(string app, string displayName, string description,
            string iconWebResource, bool backup)
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
                    return Error(iconError);
                update["webresourceid"] = iconId;
                changes.Add($"icon_webresource='{iconWebResource.Trim()}'");
            }

            string backupPath = null;
            if (backup)
                backupPath = SaveAppSnapshot(appModule);

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
                        BackupPath = backupPath,
                        Published = false
                    });

            DataverseMutationExecutor.Update(_context, _serviceClient, update);
            PublishAppModule(appModule.Id);
            var refreshQuery = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"),
                TopCount = 1
            };
            refreshQuery.Criteria.AddCondition("appmoduleid", ConditionOperator.Equal, appModule.Id);
            var refreshed = RetrieveAppModules(refreshQuery).FirstOrDefault()
                ?? throw new InvalidOperationException($"App '{appModule.Id}' could not be retrieved after update.");
            var validation = ValidateApp(refreshed.Id);

            var text = $"Updated app '{refreshed.GetAttributeValue<string>("name")}' ({refreshed.GetAttributeValue<string>("uniquename")}) and published: {string.Join(", ", changes)}." +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (validation.Warnings?.Count > 0 ? $" {validation.Warnings.Count} validation warning(s)." : "");

            return Success(text, new ManageAppResult
            {
                Action = "update",
                Status = validation.StatusForMutation("updated"),
                AppModuleId = refreshed.Id.ToString(),
                AppModuleIdUnique = refreshed.GetAttributeValue<Guid>("appmoduleidunique").ToString(),
                AppName = refreshed.GetAttributeValue<string>("name"),
                UniqueName = refreshed.GetAttributeValue<string>("uniquename"),
                SiteMapId = ResolveSiteMapId(refreshed.GetAttributeValue<Guid>("appmoduleidunique"), refreshed.GetAttributeValue<string>("uniquename"))?.ToString(),
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = validation.Warnings,
                BackupPath = backupPath,
                Published = true
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
                ValidationWarnings = validation.Warnings,
                Published = false
            });
        }

        private CallToolResult HandleUpdateNavigation(string app, string operations, bool backup)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error("app is required for action='update_navigation'. Provide an app display name, unique name, or GUID.",
                    DiscoverAppsHint);
            if (string.IsNullOrWhiteSpace(operations))
                return Error("operations is required for action='update_navigation'.",
                    "Provide a JSON array of navigation operations, e.g. [{\"action\":\"add_group\",\"area\":\"area_default\",\"id\":\"group_x\",\"title\":\"X\"}].");
            if (!operations.TrimStart().StartsWith("["))
                return Error("update_navigation only accepts operation JSON arrays. Raw sitemap XML and backup paths are not supported by this action.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            if (!appModuleIdUnique.HasValue)
                return Error($"App '{appModule.GetAttributeValue<string>("name")}' has no appmoduleidunique.");

            var siteMapId = ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"));
            if (!siteMapId.HasValue)
                return Error($"App '{appModule.GetAttributeValue<string>("name")}' has no sitemap component.",
                    "Create the app with manage_app(action='create') so a starter sitemap is generated.");

            var currentSiteMapXml = RetrieveSiteMapXml(siteMapId.Value);
            if (string.IsNullOrWhiteSpace(currentSiteMapXml))
                return Error($"Sitemap '{siteMapId}' has no sitemapxml content.");

            var ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
            if (ops == null || ops.Count == 0)
                return Error("operations must be a non-empty JSON array.");

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
                    doc, ops, McpHelper.GetBaseLanguageCode(_serviceClient));
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
                return Error($"Entity validation failed — navigation not updated. {string.Join("; ", entityComponentErrors)}", details: new ManageAppResult
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
                return Error($"Updated sitemap XML failed XSD validation — navigation not updated. {string.Join("; ", xsdErrors)}", details: new ManageAppResult
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

            string backupPath = null;
            if (backup)
                backupPath = SaveAppSnapshot(appModule);

            if (_options.DryRun)
            {
                var previewText = $"Would update navigation of app '{appModule.GetAttributeValue<string>("name")}' with {ops.Count} operation(s): {navResult.ChangedOperations} changed, {navResult.NoOpOperations} no-op." +
                    (backupPath != null ? $" Backup: {backupPath}." : "");
                return DryRun(previewText, new ManageAppResult
                {
                    Action = "update_navigation",
                    Status = "not_executed",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    BackupPath = backupPath,
                    Published = false,
                    OperationsCount = ops.Count,
                    NavigationChanged = navResult.HasChanges,
                    ChangedOperations = navResult.ChangedOperations,
                    NoOpOperations = navResult.NoOpOperations,
                    OperationSummaries = navResult.OperationSummaries,
                    AddedAppComponents = navResult.AddedEntities.Count > 0 ? navResult.AddedEntities : null
                });
            }

            if (!navResult.HasChanges)
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

            var updateSiteMap = new Entity("sitemap", siteMapId.Value)
            {
                ["sitemapxml"] = navResult.ModifiedSiteMapXml
            };
            DataverseMutationExecutor.Update(_context, _serviceClient, updateSiteMap);

            if (entityComponentRefs.Count > 0)
                AddAppComponents(appModule.Id, entityComponentRefs);

            PublishAppModule(appModule.Id);

            var validation = ValidateApp(appModule.Id);
            var text = $"Updated navigation of app '{appModule.GetAttributeValue<string>("name")}' and published: {navResult.ChangedOperations} changed, {navResult.NoOpOperations} no-op." +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (MergeWarnings(validation.Warnings, xsdWarnings)?.Count > 0 ? $" {MergeWarnings(validation.Warnings, xsdWarnings).Count} validation warning(s)." : "");

            return Success(text, new ManageAppResult
            {
                Action = "update_navigation",
                Status = validation.StatusForMutation("updated"),
                AppModuleId = appModule.Id.ToString(),
                AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                AppName = appModule.GetAttributeValue<string>("name"),
                UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                SiteMapId = siteMapId.Value.ToString(),
                Validated = true,
                ValidationErrors = validation.Errors,
                ValidationWarnings = MergeWarnings(validation.Warnings, xsdWarnings),
                BackupPath = backupPath,
                Published = true,
                OperationsCount = ops.Count,
                NavigationChanged = navResult.HasChanges,
                ChangedOperations = navResult.ChangedOperations,
                NoOpOperations = navResult.NoOpOperations,
                OperationSummaries = navResult.OperationSummaries,
                AddedAppComponents = navResult.AddedEntities.Count > 0 ? navResult.AddedEntities : null
            });
        }

        private CallToolResult HandleUndo(string app, string operations, bool backup)
        {
            if (string.IsNullOrWhiteSpace(app))
                return Error("app is required for action='undo'. Provide an app display name, unique name, or GUID.",
                    DiscoverAppsHint);
            if (string.IsNullOrWhiteSpace(operations))
                return Error("operations is required for action='undo'.",
                    "Provide the .app.json backup file path from the backupPath of a previous manage_app mutation.");

            var backupFile = operations.Trim();
            if (backupFile.StartsWith("<", StringComparison.Ordinal))
                return Error("Raw sitemap XML is not supported by manage_app v1. Use operations or read schema://sitemapxml for reference.");
            if (backupFile.StartsWith("[", StringComparison.Ordinal))
                return Error("undo expects a .app.json backup file path, not a navigation operations JSON array.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return resolveError;

            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            if (!appModuleIdUnique.HasValue)
                return Error($"App '{appModule.GetAttributeValue<string>("name")}' has no appmoduleidunique.");

            var siteMapId = ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"));
            if (!siteMapId.HasValue)
                return Error($"App '{appModule.GetAttributeValue<string>("name")}' has no sitemap component.",
                    "Create the app with manage_app(action='create') so a starter sitemap is generated.");

            var backupFullPath = Path.GetFullPath(backupFile);
            if (!File.Exists(backupFullPath))
                return Error($"backup file '{backupFile}' was not found.",
                    "Check the backupPath value returned by the manage_app call that created the backup.");

            var snapshot = JsonSerializer.Deserialize<ManageAppSnapshot>(
                File.ReadAllText(backupFullPath, Encoding.UTF8),
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            if (snapshot == null || !string.Equals(snapshot.Kind, "manage_app.snapshot", StringComparison.Ordinal))
                return Error("backup file is not a manage_app snapshot.");
            if (!Guid.TryParse(snapshot.AppModuleId, out var backupAppModuleId) || backupAppModuleId != appModule.Id)
                return Error(
                    $"backup app ID does not match current app. BackupAppModuleId: {snapshot.AppModuleId}. CurrentAppModuleId: {appModule.Id}.");
            if (string.IsNullOrWhiteSpace(snapshot.SiteMapXml))
                return Error("backup does not contain sitemapxml.");

            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(snapshot.SiteMapXml);
            if (xsdErrors.Count > 0)
                return Error($"Backup sitemap XML failed XSD validation — undo not applied. {string.Join("; ", xsdErrors)}", details: new ManageAppResult
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

            string currentBackupPath = null;
            if (backup)
                currentBackupPath = SaveAppSnapshot(appModule);

            if (_options.DryRun)
            {
                var previewText = $"Would restore app '{appModule.GetAttributeValue<string>("name")}' navigation from backup '{backupFullPath}'." +
                    (currentBackupPath != null ? $" Current state backed up to: {currentBackupPath}." : "");
                return DryRun(previewText, new ManageAppResult
                {
                    Action = "undo",
                    Status = "not_executed",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    BackupPath = currentBackupPath,
                    RestoredFromBackup = backupFullPath,
                    Published = false
                });
            }

            DataverseMutationExecutor.Update(_context, _serviceClient, new Entity("sitemap", siteMapId.Value)
            {
                ["sitemapxml"] = snapshot.SiteMapXml
            });
            PublishAppModule(appModule.Id);

            var validation = ValidateApp(appModule.Id);
            var text = $"Restored app '{appModule.GetAttributeValue<string>("name")}' navigation from backup '{backupFullPath}' and published." +
                (validation.Errors?.Count > 0 ? " Validation failed." : "") +
                (MergeWarnings(validation.Warnings, xsdWarnings)?.Count > 0 ? $" {MergeWarnings(validation.Warnings, xsdWarnings).Count} validation warning(s)." : "");

            return Success(text, new ManageAppResult
            {
                Action = "undo",
                Status = validation.StatusForMutation("restored"),
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
                Published = true,
                OperationSummaries = ["Restored sitemap XML from manage_app snapshot"]
            });
        }

        private const string DiscoverAppsHint = "Use manage_app(action='list') to discover apps.";

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

                var action = GetJsonString(obj, "action");
                if (string.Equals(action, "add_item", StringComparison.OrdinalIgnoreCase))
                {
                    var entity = GetJsonString(obj, "entity");
                    if (!string.IsNullOrWhiteSpace(entity))
                    {
                        var result = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity, "manage_app");
                        if (result.IsSuccess)
                        {
                            obj["entity"] = result.Value.LogicalName;
                            if (!HasNavigationLabel(obj))
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
            foreach (var entity in _serviceClient.RetrieveMultiple(query).Entities)
                byId[entity.Id] = entity;

            try
            {
                var unpublished = (RetrieveUnpublishedMultipleResponse)_serviceClient.Execute(new RetrieveUnpublishedMultipleRequest
                {
                    Query = query
                });
                foreach (var entity in unpublished.EntityCollection.Entities)
                    byId[entity.Id] = entity;
            }
            catch (Exception ex)
            {
                // Some environments or filters may not support unpublished reads; published results are still useful.
                System.Diagnostics.Debug.WriteLine($"manage_app: unpublished read skipped: {ex.Message}");
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

            var component = _serviceClient.RetrieveMultiple(query).Entities.FirstOrDefault();
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

            return _serviceClient.RetrieveMultiple(query).Entities.FirstOrDefault()?.Id;
        }

        private string RetrieveSiteMapXml(Guid siteMapId)
        {
            var query = new QueryExpression("sitemap")
            {
                ColumnSet = new ColumnSet("sitemapxml"),
                TopCount = 1
            };
            query.Criteria.AddCondition("sitemapid", ConditionOperator.Equal, siteMapId);
            return _serviceClient.RetrieveMultiple(query).Entities.FirstOrDefault()?.GetAttributeValue<string>("sitemapxml");
        }

        private Guid ResolveEntityMetadataId(string entityLogicalName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            return response.EntityMetadata.MetadataId
                ?? throw new InvalidOperationException($"Entity metadata id not found for '{entityLogicalName}'.");
        }

        private EntityMetadata ResolveEntityMetadata(string entityLogicalName)
        {
            var response = (RetrieveEntityResponse)_serviceClient.Execute(new RetrieveEntityRequest
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
            DataverseMutationExecutor.Execute(_context, _serviceClient, new AddAppComponentsRequest
            {
                AppId = appModuleId,
                Components = components
            });
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
                icon = _serviceClient.RetrieveMultiple(iconQuery).Entities.FirstOrDefault();
                if (icon == null)
                {
                    error = $"icon_webresource GUID '{trimmed}' was not found.";
                    return Guid.Empty;
                }            }
            else
            {
                var result = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, trimmed, "manage_app");
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
            typeCode is 5 or 6 or 7 or 10 or 11;

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

            return _serviceClient.RetrieveMultiple(query).Entities.ToList();
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
                                        Url = subArea.Attribute("Url")?.Value
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
                var response = _serviceClient.Execute(request);
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

        private string SaveAppSnapshot(Entity appModule)
        {
            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            var siteMapId = appModuleIdUnique.HasValue
                ? ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"))
                : null;
            var siteMapXml = siteMapId.HasValue ? RetrieveSiteMapXml(siteMapId.Value) : null;
            var components = appModuleIdUnique.HasValue ? GetAppComponents(appModuleIdUnique.Value) : [];

            var workingDir = string.IsNullOrWhiteSpace(_workspaceFolder) ? Directory.GetCurrentDirectory() : _workspaceFolder;
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "apps");
            Directory.CreateDirectory(backupDir);

            var safeName = SanitizeFileName(appModule.GetAttributeValue<string>("name") ?? appModule.GetAttributeValue<string>("uniquename") ?? "app");
            var backupPath = Path.Combine(backupDir, $"{safeName}_{appModule.Id:N}_{DateTime.Now:yyyyMMddHHmmss}.app.json");

            var snapshot = new
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
            };

            var json = JsonSerializer.Serialize(snapshot, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });
            File.WriteAllText(backupPath, json, Encoding.UTF8);
            return backupPath;
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

        private void PublishAppModule(Guid appModuleId)
        {
            PublishHelper.PublishAppModule(_context, _serviceClient, appModuleId);
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
            var sb = new StringBuilder($"[ManageApp] {status}\nApp: {appName}\nUniqueName: {uniqueName}\nAppId: {appId}\nAppModuleIdUnique: {appUniqueId}\nSiteMapId: {siteMapId}\nPublisherPrefix: {publisherPrefix}\nBackupPath: {backupPath}");
            sb.Append("\nNextStep: publish_customizations");
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
            var sb = new StringBuilder($"[ManageAppNavigation] {status}\nApp: {app?.GetAttributeValue<string>("name")}\nAppModuleIdUnique: {appUniqueId}\nSiteMapId: {siteMapId}\nBackupPath: {backupPath}\nPublished: {(published ? "yes" : "no")}");
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
            var sb = new StringBuilder($"[ManageAppUndo] {status}\nApp: {app?.GetAttributeValue<string>("name")}\nAppModuleIdUnique: {appUniqueId}\nSiteMapId: {siteMapId}\nBackupPath: {currentBackupPath}\nRestoredFromBackup: {restoredFromBackup}");
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
                    var message = issue.GetType().GetProperty("Message")?.GetValue(issue)?.ToString()
                        ?? issue.ToString();
                    var errorType = issue.GetType().GetProperty("ErrorType")?.GetValue(issue)?.ToString();
                    if (string.Equals(errorType, "Warning", StringComparison.OrdinalIgnoreCase))
                        warnings.Add(message);
                    else
                        errors.Add(message);
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
            public string SiteMapXml { get; set; }
        }

        private sealed class ManageAppSnapshotComponent
        {
            public int? ComponentType { get; set; }
            public string ObjectId { get; set; }
        }
    }
}
