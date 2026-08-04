using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
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
        private string _workspaceFolder;

        public ManageAppTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_app", Title = "Manage model-driven apps",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageAppResult)),
        Description(
            "Model-driven app management. Actions: list, detail, create, update, update_navigation, validate, undo.\n" +
            "Supports safe app creation/update, app-scoped sitemap navigation operations, validation, and undo from manage_app snapshots.\n\n" +
            "RULES:\n" +
            "- Use this tool for model-driven app metadata and navigation tasks.\n" +
            "- Never use execute_webapi to create or update appmodule, sitemap, or appmodulecomponent records.\n" +
            "- update_navigation publishes the app so immediate readback sees the updated navigation. Other mutating actions return a next step to publish separately.\n\n" +
            "NAVIGATION IDEMPOTENCY: use action='detail' for readback/confirmation. update_navigation mutates. add_area/add_group/add_item are partially idempotent and report no-op operations; if all operations are no-op, the tool skips sitemap update and publish.\n\n" +
            "NAME RESOLUTION: app, icon_webresource, solution_name, and add_item entity values resolve Display Name contains first, then unique/logical/schema contains.\n\n" +
            "The AI should pass its current workspace directory to workspace_folder to ensure backups are saved to the user's project.\n\n" +
            "See docs://instructions_for_manage_app for the operation workflow and examples.")]
        public CallToolResult manage_app(
            [Description("'list', 'detail', 'create', 'update', 'update_navigation', 'validate', or 'undo'.")] string action = "detail",
            [Description("App display name, unique name, or GUID. Required for detail/update/update_navigation/validate/undo.")] string app = "",
            [Description("list only. App display/unique name contains filter.")] string app_name = "",
            [Description("Required for create. Used to resolve the solution publisher prefix.")] string solution_name = "",
            [Description("Required for create. Optional for update.")] string display_name = "",
            [Description("Optional for create. If empty, derived from display_name and solution publisher prefix.")] string unique_name = "",
            [Description("Optional for create/update.")] string description = "",
            [Description("Optional app icon web resource name or GUID.")] string icon_webresource = "",
            [Description("JSON array for update_navigation, or backup file path for undo.")] string operations = "",
            [Description("Backup current app snapshot before update/update_navigation/undo when implemented.")] bool backup = true,
            [Description("Optional project/workspace folder path to save backups in.")] string workspace_folder = "",
            [Description("list only. 1-500.")] int max_records = 100)
        {
            _workspaceFolder = workspace_folder;
            var normalizedAction = (action ?? "detail").Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(app_name, max_records),
                    "detail" => HandleDetail(app),
                    "create" => HandleCreate(solution_name, display_name, unique_name, description, icon_webresource),
                    "update" => HandleUpdate(app, display_name, description, icon_webresource, backup),
                    "update_navigation" => HandleUpdateNavigation(app, operations, backup),
                    "validate" => HandleValidate(app),
                    "undo" => HandleUndo(app, operations, backup),
                    _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update', 'update_navigation', 'validate', 'undo'.")
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: manage_app failed: {FormatException(ex)}");
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
            var sb = new StringBuilder(512);
            sb.AppendLine($"[ManageAppList] {apps.Count} app(s) found");
            sb.AppendLine();
            sb.AppendLine("| App Name | Unique Name | App ID | Has SiteMap | Description |");
            sb.AppendLine("|----------|-------------|--------|-------------|-------------|");

            foreach (var appEntity in apps)
            {
                var appModuleIdUnique = appEntity.GetAttributeValue<Guid?>("appmoduleidunique");
                var hasSiteMap = appModuleIdUnique.HasValue && HasSiteMap(appModuleIdUnique.Value, appEntity.GetAttributeValue<string>("uniquename"));
                sb.AppendLine(
                    $"| {EscapeTable(appEntity.GetAttributeValue<string>("name"))} " +
                    $"| {EscapeTable(appEntity.GetAttributeValue<string>("uniquename"))} " +
                    $"| {appEntity.Id} " +
                    $"| {(hasSiteMap ? "Yes" : "No")} " +
                    $"| {EscapeTable(appEntity.GetAttributeValue<string>("description"))} |");
            }

            return StructuredResult(sb.ToString(), new ManageAppResult
            {
                Action = "list",
                Status = "success",
                Published = false
            });
        }

        private CallToolResult HandleDetail(string app)
        {
            if (string.IsNullOrWhiteSpace(app))
                return ErrorResult(
                    "Error: app is required for action='detail'.\n" +
                    "Provide an app display name, unique name, or GUID.\n" +
                    "Tip: Use manage_app(action='list') to discover apps.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

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

            var sb = new StringBuilder(512);
            sb.AppendLine($"[ManageAppDetail] {appModule.GetAttributeValue<string>("name") ?? appModule.GetAttributeValue<string>("uniquename")}");
            sb.AppendLine($"AppModuleId: {appModule.Id}");
            sb.AppendLine($"AppModuleIdUnique: {appModuleIdUnique}");
            sb.AppendLine($"UniqueName: {appModule.GetAttributeValue<string>("uniquename")}");
            sb.AppendLine($"Description: {appModule.GetAttributeValue<string>("description")}");
            sb.AppendLine($"SiteMapId: {(siteMapId.HasValue ? siteMapId.Value.ToString() : "(none)")}");
            sb.AppendLine($"Published: no");
            sb.AppendLine();
            sb.AppendLine("[Components]");
            if (appComponents.Count == 0)
            {
                sb.AppendLine("- none found");
            }
            else
            {
                foreach (var component in appComponents)
                {
                    var type = component.GetAttributeValue<OptionSetValue>("componenttype")?.Value;
                    var objectId = component.GetAttributeValue<Guid?>("objectid");
                    sb.AppendLine($"- componenttype={type}, objectid={objectId}");
                }
            }
            sb.AppendLine();
            sb.AppendLine("[Navigation]");
            sb.AppendLine(string.IsNullOrWhiteSpace(navigationTree) ? "- no sitemap navigation found" : navigationTree);

            return StructuredResult(sb.ToString(), new ManageAppResult
            {
                Action = "detail",
                Status = "success",
                AppModuleId = appModule.Id.ToString(),
                AppModuleIdUnique = appModuleIdUnique?.ToString(),
                AppName = appModule.GetAttributeValue<string>("name"),
                UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                SiteMapId = siteMapId?.ToString(),
                NavigationTree = string.IsNullOrWhiteSpace(navigationTree) ? null : navigationTree,
                NavigationAreas = navigationAreas.Count > 0 ? navigationAreas : null,
                Published = false
            });
        }

        private CallToolResult HandleCreate(string solutionName, string displayName, string uniqueName,
            string description, string iconWebResource)
        {
            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult("Error: solution_name is required for action='create'.");
            if (string.IsNullOrWhiteSpace(displayName))
                return ErrorResult("Error: display_name is required for action='create'.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
            if (!solResult.IsSuccess)
                return ErrorResult($"[Error] {solResult.Error}\nTip: Use get_solution_components to find valid solution names.");

            var appUniqueName = string.IsNullOrWhiteSpace(uniqueName)
                ? $"{solResult.Prefix}_{SanitizeUniqueName(displayName)}"
                : uniqueName.Trim();
            if (!appUniqueName.StartsWith(solResult.Prefix + "_", StringComparison.OrdinalIgnoreCase))
                appUniqueName = $"{solResult.Prefix}_{SanitizeUniqueName(appUniqueName)}";
            if (appUniqueName.Length > 40)
                appUniqueName = appUniqueName.Substring(0, 40);

            if (AppUniqueNameExists(appUniqueName))
                return ErrorResult($"Error: Model-driven app unique_name '{appUniqueName}' already exists. Use action='update' to modify it.");

            var iconId = ResolveIconWebResourceId(iconWebResource, out var iconError);
            if (iconError != null)
                return ErrorResult(iconError);

            var baseLanguage = McpHelper.GetBaseLanguageCode(_serviceClient);
            var starterSiteMapXml = BuildStarterSiteMapXml(baseLanguage);
            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(starterSiteMapXml);
            if (xsdErrors.Count > 0)
            {
                var sb = new StringBuilder();
                sb.AppendLine("[ManageAppCreate] BLOCKED - starter sitemap XML failed XSD validation");
                foreach (var error in xsdErrors)
                    sb.AppendLine($"- {error}");
                foreach (var warning in xsdWarnings)
                    sb.AppendLine($"- {warning}");
                return StructuredResult(sb.ToString(), new ManageAppResult
                {
                    Action = "create",
                    Status = "blocked_validation",
                    Validated = true,
                    ValidationErrors = xsdErrors,
                    ValidationWarnings = xsdWarnings.Count > 0 ? xsdWarnings : null,
                    Published = false,
                    NextStep = NotPublishedNextStep
                });
            }

            if (_options.DryRun)
                return DryRun(
                    $"Would create app '{displayName.Trim()}' ({appUniqueName}) in solution '{solResult.UniqueName}'. Published: no. NextStep: {NotPublishedNextStep}",
                    new ManageAppResult
                    {
                        Action = "create",
                        Status = "not_executed",
                        AppName = displayName.Trim(),
                        UniqueName = appUniqueName,
                        SolutionUniqueName = solResult.UniqueName,
                        Published = false,
                        NextStep = NotPublishedNextStep
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

            var appModuleId = _serviceClient.Create(appModule);
            var createdApp = RetrieveCreatedApp(appModuleId, appUniqueName);
            appModuleIdUnique = createdApp.GetAttributeValue<Guid>("appmoduleidunique");

            var siteMap = new Entity("sitemap")
            {
                ["sitemapname"] = $"{displayName.Trim()} SiteMap",
                ["sitemapnameunique"] = $"{appUniqueName}SiteMap",
                ["sitemapxml"] = starterSiteMapXml
            };
            var siteMapId = _serviceClient.Create(siteMap);

            var starterComponents = BuildEntityAppComponents("account");
            starterComponents.Insert(0, new EntityReference("sitemap", siteMapId));
            AddAppComponents(appModuleId, starterComponents);

            var appSolutionResult = SolutionComponentCreateHelper.AddExistingComponent(
                _serviceClient, appModuleId, 80, solResult.UniqueName, addRequiredComponents: true);
            var siteMapSolutionResult = SolutionComponentCreateHelper.AddExistingComponent(
                _serviceClient, siteMapId, 62, solResult.UniqueName, addRequiredComponents: true);

            var validation = ValidateApp(appModuleId);

            var addedSolutionComponents = new List<string>();
            if (appSolutionResult.IsAddToSolution) addedSolutionComponents.Add("appmodule");
            if (siteMapSolutionResult.IsAddToSolution) addedSolutionComponents.Add("sitemap");
            if (!string.IsNullOrWhiteSpace(appSolutionResult.AddToSolutionWarning))
                addedSolutionComponents.Add($"appmodule warning: {appSolutionResult.AddToSolutionWarning}");
            if (!string.IsNullOrWhiteSpace(siteMapSolutionResult.AddToSolutionWarning))
                addedSolutionComponents.Add($"sitemap warning: {siteMapSolutionResult.AddToSolutionWarning}");

            var text = BuildCreateUpdateText(
                "Created",
                displayName.Trim(),
                appUniqueName,
                appModuleId,
                appModuleIdUnique,
                siteMapId,
                solResult.UniqueName,
                null,
                validation,
                xsdWarnings);

            return StructuredResult(text, new ManageAppResult
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
                Published = false,
                AddedAppComponents = DescribeEntityAppComponents("account", starterComponents, includeSitemap: true),
                AddedSolutionComponents = addedSolutionComponents.Count > 0 ? addedSolutionComponents : null,
                NextStep = PublishAppModuleNextStep(appModuleId)
            });
        }

        private CallToolResult HandleUpdate(string app, string displayName, string description,
            string iconWebResource, bool backup)
        {
            if (string.IsNullOrWhiteSpace(app))
                return ErrorResult("Error: app is required for action='update'. Provide an app display name, unique name, or GUID.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

            var hasName = !string.IsNullOrWhiteSpace(displayName);
            var hasDescription = !string.IsNullOrWhiteSpace(description);
            var hasIcon = !string.IsNullOrWhiteSpace(iconWebResource);
            if (!hasName && !hasDescription && !hasIcon)
                return ErrorResult("Error: action='update' requires at least one of display_name, description, or icon_webresource.");

            string backupPath = null;
            if (backup)
            {
                try { backupPath = SaveAppSnapshot(appModule); }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed - update BLOCKED\n" +
                        $"AppModuleId: {appModule.Id}\n" +
                        $"Message: {ex.Message}\n" +
                        $"Tip: Fix backup permissions or retry with backup=false.");
                }
            }

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
                    return ErrorResult(iconError);
                update["webresourceid"] = iconId;
                changes.Add($"icon_webresource='{iconWebResource.Trim()}'");
            }

            if (_options.DryRun)
                return DryRun(
                    $"Would update app '{appModule.GetAttributeValue<string>("name")}' with: {string.Join(", ", changes)}. Published: no. NextStep: {NotPublishedNextStep}",
                    new ManageAppResult
                    {
                        Action = "update",
                        Status = "not_executed",
                        AppModuleId = appModule.Id.ToString(),
                        AppName = appModule.GetAttributeValue<string>("name"),
                        UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                        BackupPath = backupPath,
                        Published = false,
                        NextStep = NotPublishedNextStep
                    });

            _serviceClient.Update(update);
            var refreshed = _serviceClient.Retrieve("appmodule", appModule.Id,
                new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"));
            var validation = ValidateApp(refreshed.Id);

            var text = BuildCreateUpdateText(
                "Updated",
                refreshed.GetAttributeValue<string>("name"),
                refreshed.GetAttributeValue<string>("uniquename"),
                refreshed.Id,
                refreshed.GetAttributeValue<Guid>("appmoduleidunique"),
                ResolveSiteMapId(refreshed.GetAttributeValue<Guid>("appmoduleidunique"), refreshed.GetAttributeValue<string>("uniquename")),
                null,
                backupPath,
                validation,
                null);
            if (changes.Count > 0)
                text += $"Changes: {string.Join(", ", changes)}\n";

            return StructuredResult(text, new ManageAppResult
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
                Published = false,
                NextStep = PublishAppModuleNextStep(refreshed.Id)
            });
        }

        private CallToolResult HandleValidate(string app)
        {
            if (string.IsNullOrWhiteSpace(app))
                return ErrorResult("Error: app is required for action='validate'. Provide an app display name, unique name, or GUID.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

            var validation = ValidateApp(appModule.Id);
            var sb = new StringBuilder(256);
            sb.AppendLine($"[ManageAppValidate] {appModule.GetAttributeValue<string>("name")}");
            sb.AppendLine($"AppModuleId: {appModule.Id}");
            sb.AppendLine($"Status: {validation.Status}");
            sb.AppendLine($"Published: no");
            foreach (var error in validation.Errors ?? [])
                sb.AppendLine($"- Error: {error}");
            foreach (var warning in validation.Warnings ?? [])
                sb.AppendLine($"- Warning: {warning}");

            return StructuredResult(sb.ToString(), new ManageAppResult
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
                return ErrorResult("Error: app is required for action='update_navigation'. Provide an app display name, unique name, or GUID.");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult("Error: operations is required for action='update_navigation'. Provide a JSON array of navigation operations.");
            if (!operations.TrimStart().StartsWith("["))
                return ErrorResult("Error: update_navigation only accepts operation JSON arrays. Raw sitemap XML and backup paths are not supported by this action.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            if (!appModuleIdUnique.HasValue)
                return ErrorResult($"Error: App '{appModule.GetAttributeValue<string>("name")}' has no appmoduleidunique.");

            var siteMapId = ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"));
            if (!siteMapId.HasValue)
                return ErrorResult(
                    $"Error: App '{appModule.GetAttributeValue<string>("name")}' has no sitemap component.\n" +
                    "Tip: Create the app with manage_app(action='create') so a starter sitemap is generated.");

            var currentSiteMapXml = RetrieveSiteMapXml(siteMapId.Value);
            if (string.IsNullOrWhiteSpace(currentSiteMapXml))
                return ErrorResult($"Error: Sitemap '{siteMapId}' has no sitemapxml content.");

            List<JsonElement> ops;
            try
            {
                ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
                if (ops == null || ops.Count == 0)
                    return ErrorResult("Error: operations must be a non-empty JSON array.");
            }
            catch (JsonException ex)
            {
                return ErrorResult($"Error: Invalid operations JSON: {ex.Message}");
            }

            var (normalizedOps, operationNameErrors) = NormalizeNavigationEntityReferences(ops);
            if (operationNameErrors.Count > 0)
                return ErrorResult(FormatNavigationNameResolutionErrors(operationNameErrors));
            ops = normalizedOps;

            string backupPath = null;
            if (backup)
            {
                try { backupPath = SaveAppSnapshot(appModule); }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed - update_navigation BLOCKED\n" +
                        $"AppModuleId: {appModule.Id}\n" +
                        $"SiteMapId: {siteMapId}\n" +
                        $"Message: {ex.Message}\n" +
                        $"Tip: Fix backup permissions or retry with backup=false.");
                }
            }

            AppNavigationOperationsResult navResult;
            try
            {
                var doc = XDocument.Parse(currentSiteMapXml);
                navResult = AppNavigationOperationsHelper.ApplyOperations(
                    doc, ops, McpHelper.GetBaseLanguageCode(_serviceClient));
            }
            catch (AppNavigationOperationException ex)
            {
                return ErrorResult($"Error in navigation operation '{ex.Action}': {ex.Message}");
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to apply navigation operations: {ex.Message}");
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
            {
                var sb = new StringBuilder();
                sb.AppendLine("[ManageAppNavigation] BLOCKED - entity validation failed");
                foreach (var error in entityComponentErrors)
                    sb.AppendLine($"- {error}");
                if (backupPath != null)
                    sb.AppendLine($"Backup: {backupPath}");
                return StructuredResult(sb.ToString(), new ManageAppResult
                {
                    Action = "update_navigation",
                    Status = "blocked_entity_validation",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    BackupPath = backupPath,
                    ValidationErrors = entityComponentErrors,
                    Published = false,
                    NextStep = NotPublishedNextStep
                });
            }

            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(navResult.ModifiedSiteMapXml);
            if (xsdErrors.Count > 0)
            {
                var sb = new StringBuilder();
                sb.AppendLine("[ManageAppNavigation] BLOCKED - sitemap XML failed XSD validation");
                foreach (var error in xsdErrors)
                    sb.AppendLine($"- {error}");
                foreach (var warning in xsdWarnings)
                    sb.AppendLine($"- {warning}");
                if (backupPath != null)
                    sb.AppendLine($"Backup: {backupPath}");

                return StructuredResult(sb.ToString(), new ManageAppResult
                {
                    Action = "update_navigation",
                    Status = "blocked_validation",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    BackupPath = backupPath,
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
            }

            if (_options.DryRun)
            {
                var previewText = BuildNavigationText(
                    "Would update",
                    appModule,
                    appModuleIdUnique.Value,
                    siteMapId.Value,
                    backupPath,
                    AppValidationResult.Skipped(),
                    navResult,
                    xsdWarnings);
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
                    AddedAppComponents = navResult.AddedEntities.Count > 0 ? navResult.AddedEntities : null,
                    NextStep = NotPublishedNextStep
                });
            }

            if (!navResult.HasChanges)
            {
                var noOpText = BuildNavigationText(
                    "No changes",
                    appModule,
                    appModuleIdUnique.Value,
                    siteMapId.Value,
                    backupPath,
                    AppValidationResult.Skipped(),
                    navResult,
                    xsdWarnings,
                    published: false,
                    includeNextStep: false);
                noOpText += "No sitemap update or publish was run because every navigation operation was already satisfied.\n";
                noOpText += "Use manage_app(action='detail') for readback/confirmation.\n";

                return StructuredResult(noOpText, new ManageAppResult
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
            _serviceClient.Update(updateSiteMap);

            if (entityComponentRefs.Count > 0)
                AddAppComponents(appModule.Id, entityComponentRefs);

            PublishAppModule(appModule.Id);

            var validation = ValidateApp(appModule.Id);
            var text = BuildNavigationText(
                "Updated",
                appModule,
                appModuleIdUnique.Value,
                siteMapId.Value,
                backupPath,
                validation,
                navResult,
                xsdWarnings,
                published: true);

            return StructuredResult(text, new ManageAppResult
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
                return ErrorResult("Error: app is required for action='undo'. Provide an app display name, unique name, or GUID.");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult("Error: operations is required for action='undo'. Provide a .app.json backup file path.");

            var backupFile = operations.Trim();
            if (backupFile.StartsWith("<", StringComparison.Ordinal))
                return ErrorResult("Raw sitemap XML is not supported by manage_app v1. Use operations or read schema://sitemapxml for reference.");
            if (backupFile.StartsWith("[", StringComparison.Ordinal))
                return ErrorResult("Error: undo expects a .app.json backup file path, not a navigation operations JSON array.");

            var (appModule, resolveError) = ResolveApp(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

            var appModuleIdUnique = appModule.GetAttributeValue<Guid?>("appmoduleidunique");
            if (!appModuleIdUnique.HasValue)
                return ErrorResult($"Error: App '{appModule.GetAttributeValue<string>("name")}' has no appmoduleidunique.");

            var siteMapId = ResolveSiteMapId(appModuleIdUnique.Value, appModule.GetAttributeValue<string>("uniquename"));
            if (!siteMapId.HasValue)
                return ErrorResult(
                    $"Error: App '{appModule.GetAttributeValue<string>("name")}' has no sitemap component.\n" +
                    "Tip: Create the app with manage_app(action='create') so a starter sitemap is generated.");

            ManageAppSnapshot snapshot;
            var backupFullPath = Path.GetFullPath(backupFile);
            try
            {
                if (!File.Exists(backupFullPath))
                    return ErrorResult($"Error: backup file '{backupFile}' was not found.");

                snapshot = JsonSerializer.Deserialize<ManageAppSnapshot>(
                    File.ReadAllText(backupFullPath, Encoding.UTF8),
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: failed to read manage_app backup '{backupFile}': {ex.Message}");
            }

            if (snapshot == null || !string.Equals(snapshot.Kind, "manage_app.snapshot", StringComparison.Ordinal))
                return ErrorResult("Error: backup file is not a manage_app snapshot.");
            if (!Guid.TryParse(snapshot.AppModuleId, out var backupAppModuleId) || backupAppModuleId != appModule.Id)
                return ErrorResult(
                    $"Error: backup app ID does not match current app.\n" +
                    $"BackupAppModuleId: {snapshot.AppModuleId}\n" +
                    $"CurrentAppModuleId: {appModule.Id}");
            if (string.IsNullOrWhiteSpace(snapshot.SiteMapXml))
                return ErrorResult("Error: backup does not contain sitemapxml.");

            string currentBackupPath = null;
            if (backup)
            {
                try { currentBackupPath = SaveAppSnapshot(appModule); }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed - undo BLOCKED\n" +
                        $"AppModuleId: {appModule.Id}\n" +
                        $"SiteMapId: {siteMapId}\n" +
                        $"Message: {ex.Message}\n" +
                        $"Tip: Fix backup permissions or retry with backup=false.");
                }
            }

            var (xsdErrors, xsdWarnings) = ValidateSiteMapXml(snapshot.SiteMapXml);
            if (xsdErrors.Count > 0)
            {
                var sb = new StringBuilder();
                sb.AppendLine("[ManageAppUndo] BLOCKED - backup sitemap XML failed XSD validation");
                foreach (var error in xsdErrors)
                    sb.AppendLine($"- {error}");
                foreach (var warning in xsdWarnings)
                    sb.AppendLine($"- {warning}");
                if (currentBackupPath != null)
                    sb.AppendLine($"CurrentBackup: {currentBackupPath}");

                return StructuredResult(sb.ToString(), new ManageAppResult
                {
                    Action = "undo",
                    Status = "blocked_validation",
                    AppModuleId = appModule.Id.ToString(),
                    AppModuleIdUnique = appModuleIdUnique.Value.ToString(),
                    AppName = appModule.GetAttributeValue<string>("name"),
                    UniqueName = appModule.GetAttributeValue<string>("uniquename"),
                    SiteMapId = siteMapId.Value.ToString(),
                    BackupPath = currentBackupPath,
                    RestoredFromBackup = backupFullPath,
                    Validated = true,
                    ValidationErrors = xsdErrors,
                    ValidationWarnings = xsdWarnings.Count > 0 ? xsdWarnings : null,
                    Published = false,
                    NextStep = NotPublishedNextStep
                });
            }

            if (_options.DryRun)
            {
                var previewText = BuildUndoText(
                    "Would restore",
                    appModule,
                    appModuleIdUnique.Value,
                    siteMapId.Value,
                    currentBackupPath,
                    backupFullPath,
                    AppValidationResult.Skipped(),
                    xsdWarnings);

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
                    Published = false,
                    NextStep = NotPublishedNextStep
                });
            }

            _serviceClient.Update(new Entity("sitemap", siteMapId.Value)
            {
                ["sitemapxml"] = snapshot.SiteMapXml
            });

            var validation = ValidateApp(appModule.Id);
            var text = BuildUndoText(
                "Restored",
                appModule,
                appModuleIdUnique.Value,
                siteMapId.Value,
                currentBackupPath,
                backupFullPath,
                validation,
                xsdWarnings);

            return StructuredResult(text, new ManageAppResult
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
                Published = false,
                OperationSummaries = ["Restored sitemap XML from manage_app snapshot"],
                NextStep = PublishAppModuleNextStep(appModule.Id)
            });
        }

        private (Entity AppModule, string Error) ResolveApp(string app)
        {
            if (Guid.TryParse(app, out var appModuleId))
            {
                try
                {
                    return (_serviceClient.Retrieve("appmodule", appModuleId,
                        new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid")), null);
                }
                catch
                {
                    var queryById = new QueryExpression("appmodule")
                    {
                        ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"),
                        TopCount = 1
                    };
                    queryById.Criteria.AddCondition("appmoduleid", ConditionOperator.Equal, appModuleId);
                    var unpublished = RetrieveAppModules(queryById).FirstOrDefault();
                    return unpublished != null
                        ? (unpublished, null)
                        : (null, $"[Error] No model-driven app found for GUID '{app}'.");
                }
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
                return (null, $"[Error] No model-driven app found matching '{app}'. Use manage_app(action='list') to discover apps.");

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
                "Tip: Use manage_app(action='list') to discover apps.",
                "app");

            return result.IsSuccess
                ? (result.Value, null)
                : (null, result.Error);
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

        private static string FormatNavigationNameResolutionErrors(List<string> errors)
        {
            var sb = new StringBuilder();
            sb.AppendLine("[ManageAppNavigation] BLOCKED - name resolution failed");
            sb.AppendLine($"Errors: {errors.Count}");
            foreach (var error in errors)
                sb.AppendLine($"- {error}");
            sb.AppendLine("Tip: Display Name contains is resolved first, then logical/schema contains. Use a more specific entity value when matches are ambiguous.");
            return sb.ToString();
        }

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
            catch
            {
                // Some environments or filters may not support unpublished reads; published results are still useful.
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
            try
            {
                var siteMap = _serviceClient.Retrieve("sitemap", siteMapId, new ColumnSet("sitemapxml"));
                return siteMap.GetAttributeValue<string>("sitemapxml");
            }
            catch
            {
                return null;
            }
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
            _serviceClient.Execute(new AddAppComponentsRequest
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
                try
                {
                    icon = _serviceClient.Retrieve("webresource", iconId,
                        new ColumnSet("name", "displayname", "webresourcetype"));
                }
                catch
                {
                    error = $"Error: icon_webresource GUID '{trimmed}' was not found.";
                    return Guid.Empty;
                }
            }
            else
            {
                var result = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, trimmed, "manage_app");
                if (!result.IsSuccess)
                {
                    error = $"Error: icon_webresource '{trimmed}': {result.Error}";
                    return Guid.Empty;
                }
                icon = result.Value;
            }

            var typeCode = icon.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? -1;
            if (!IsImageWebResourceType(typeCode))
            {
                error =
                    $"Error: icon_webresource '{trimmed}' is not an image web resource. " +
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
            catch
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
            catch (Exception ex)
            {
                errors.Add($"Validation failed: {ex.Message}");
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

        private static string BuildCreateUpdateText(string verb, string appName, string uniqueName,
            Guid appModuleId, Guid appModuleIdUnique, Guid? siteMapId, string solutionUniqueName,
            string backupPath, AppValidationResult validation, List<string> xsdWarnings)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[ManageApp] {verb}: {appName}");
            sb.AppendLine($"AppModuleId: {appModuleId}");
            sb.AppendLine($"AppModuleIdUnique: {appModuleIdUnique}");
            sb.AppendLine($"UniqueName: {uniqueName}");
            if (siteMapId.HasValue) sb.AppendLine($"SiteMapId: {siteMapId}");
            if (!string.IsNullOrWhiteSpace(solutionUniqueName)) sb.AppendLine($"Solution: {solutionUniqueName}");
            if (!string.IsNullOrWhiteSpace(backupPath)) sb.AppendLine($"Backup: {backupPath}");
            sb.AppendLine($"Validated: {(validation.Validated ? "yes" : "skipped")}");
            foreach (var error in validation.Errors ?? [])
                sb.AppendLine($"ValidationError: {error}");
            foreach (var warning in MergeWarnings(validation.Warnings, xsdWarnings) ?? [])
                sb.AppendLine($"ValidationWarning: {warning}");
            sb.AppendLine("Published: no");
            sb.AppendLine($"NextStep: {PublishAppModuleNextStep(appModuleId)}");
            return sb.ToString();
        }

        private static string BuildNavigationText(string verb, Entity appModule, Guid appModuleIdUnique,
            Guid siteMapId, string backupPath, AppValidationResult validation,
            AppNavigationOperationsResult navResult, List<string> xsdWarnings, bool published = false,
            bool includeNextStep = true)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[ManageAppNavigation] {verb}: {appModule.GetAttributeValue<string>("name")}");
            sb.AppendLine($"AppModuleId: {appModule.Id}");
            sb.AppendLine($"AppModuleIdUnique: {appModuleIdUnique}");
            sb.AppendLine($"UniqueName: {appModule.GetAttributeValue<string>("uniquename")}");
            sb.AppendLine($"SiteMapId: {siteMapId}");
            if (!string.IsNullOrWhiteSpace(backupPath)) sb.AppendLine($"Backup: {backupPath}");
            sb.AppendLine($"Operations: {navResult.OperationSummaries.Count}");
            sb.AppendLine($"NavigationChanged: {(navResult.HasChanges ? "yes" : "no")}");
            sb.AppendLine($"ChangedOperations: {navResult.ChangedOperations}");
            sb.AppendLine($"NoOpOperations: {navResult.NoOpOperations}");
            foreach (var summary in navResult.OperationSummaries)
                sb.AppendLine($"  - {summary}");
            if (navResult.AddedEntities.Count > 0)
                sb.AppendLine($"AddedAppComponents: {string.Join(", ", navResult.AddedEntities)}");
            sb.AppendLine($"Validated: {(validation.Validated ? "yes" : "skipped")}");
            foreach (var error in validation.Errors ?? [])
                sb.AppendLine($"ValidationError: {error}");
            foreach (var warning in MergeWarnings(validation.Warnings, xsdWarnings) ?? [])
                sb.AppendLine($"ValidationWarning: {warning}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            if (!published && includeNextStep)
                sb.AppendLine($"NextStep: {PublishAppModuleNextStep(appModule.Id)}");
            return sb.ToString();
        }

        private static string BuildUndoText(string verb, Entity appModule, Guid appModuleIdUnique,
            Guid siteMapId, string backupPath, string restoredFromBackup,
            AppValidationResult validation, List<string> xsdWarnings)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[ManageAppUndo] {verb}: {appModule.GetAttributeValue<string>("name")}");
            sb.AppendLine($"AppModuleId: {appModule.Id}");
            sb.AppendLine($"AppModuleIdUnique: {appModuleIdUnique}");
            sb.AppendLine($"UniqueName: {appModule.GetAttributeValue<string>("uniquename")}");
            sb.AppendLine($"SiteMapId: {siteMapId}");
            sb.AppendLine($"RestoredFromBackup: {restoredFromBackup}");
            if (!string.IsNullOrWhiteSpace(backupPath)) sb.AppendLine($"CurrentBackup: {backupPath}");
            sb.AppendLine($"Validated: {(validation.Validated ? "yes" : "skipped")}");
            foreach (var error in validation.Errors ?? [])
                sb.AppendLine($"ValidationError: {error}");
            foreach (var warning in MergeWarnings(validation.Warnings, xsdWarnings) ?? [])
                sb.AppendLine($"ValidationWarning: {warning}");
            sb.AppendLine("Published: no");
            sb.AppendLine($"NextStep: {PublishAppModuleNextStep(appModule.Id)}");
            return sb.ToString();
        }

        private static string PublishAppModuleNextStep(Guid appModuleId)
        {
            return $"Not published. Run publish_customizations(appmodules='{appModuleId:D}') when ready.";
        }

        private void PublishAppModule(Guid appModuleId)
        {
            var parameterXml = $"<importexportxml><appmodules><appmodule>{appModuleId:D}</appmodule></appmodules></importexportxml>";
            _serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
            MetadataOperationWaitHelper.WaitForPropagation();
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

        private static string EscapeTable(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return "";
            return value.Replace("|", "\\|").Replace("\r", " ").Replace("\n", " ");
        }

        private static string FormatException(Exception ex)
        {
            if (ex is FaultException<OrganizationServiceFault> faultException)
            {
                var fault = faultException.Detail;
                var message = fault?.Message ?? faultException.Message;
                if (fault?.ErrorCode != 0)
                    message += $" (ErrorCode: {fault.ErrorCode})";
                if (fault?.InnerFault != null)
                    message += $" InnerFault: {fault.InnerFault.Message}";
                return message;
            }

            return ex.InnerException == null
                ? ex.Message
                : $"{ex.Message} InnerException: {ex.InnerException.Message}";
        }

        private CallToolResult ErrorResult(string message) => Error(message);

        private CallToolResult StructuredResult(string text, ManageAppResult structured) => Success(text, structured);

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
