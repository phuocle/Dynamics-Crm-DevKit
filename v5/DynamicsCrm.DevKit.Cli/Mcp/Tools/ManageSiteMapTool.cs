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
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageSiteMapTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        public ManageSiteMapTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_sitemap", Title = "Manage app site map",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageSiteMapResult)),
        Description(
            "SiteMap XML for Model-Driven Apps. Actions:\n" +
            "- list: optional app_name filter\n" +
            "- detail: app required\n" +
            "- update (recommended): app + operations (auto-builds + imports)\n" +
            "- update (advanced): app + sitemapxml (raw XML)\n" +
            "- create (recommended): app + operations\n" +
            "- create (advanced): app + sitemapxml (when no existing SiteMap)\n" +
            "- undo: app + sitemapxml (= backup path)\n\n" +

            "Operations (12): add_area|add_group|add_subarea; remove_area|remove_group|remove_subarea; update_area|update_group|update_subarea; move_area|move_group|move_subarea.\n\n" +

            "Auto: backup → XSD validate → publish. Backup failure blocks update. See schema://sitemapxml.\n\n" +

            "WHEN TO USE:\n" +
            "- Inspect current SiteMap (list/detail)\n" +
            "- Apply operations via action=update (recommended)\n" +
            "- Restore from backup (action=undo)\n\n" +

            "Fuzzy on app (display name + GUID): 0/multi → tool returns disambiguation list and stops; AI must ask user. 1 → auto-resolve.")]
        public CallToolResult manage_sitemap(
            [Description("'list', 'detail', 'update' (default), 'create', or 'undo'.")] string action = "update",
            [Description("Display name or GUID (fuzzy). Required: detail/update/create/undo.")] string app = "",
            [Description("JSON array of SiteMap operations for update/create (recommended). See schema://sitemapxml for format.")] string operations = "",
            [Description("update/create (advanced): raw SiteMap XML. undo: backup path. Mutually exclusive with operations.")] string sitemapxml = "",
            [Description("list only. Name contains.")] string app_name = "",
            [Description("XSD validate before write.")] bool validate = true,
            [Description("Backup before overwrite.")] bool backup = true,
            [Description("Publish after. false when batching.")] bool auto_publish = true)
        {
            var actionName = (action ?? "update").Trim().ToLowerInvariant();

            // List and detail don't require sitemapxml
            if (actionName == "list")
                return ListApps(app_name);
            if (actionName == "detail")
            {
                if (string.IsNullOrWhiteSpace(app))
                    return ErrorResult(
                        "Error: app is required for action='detail'.\n" +
                        "Provide: app display name or GUID.\n" +
                        "Tip: Use action='list' to find available apps and their IDs.");
                return DetailApp(app.Trim());
            }

            // For update/create/undo: resolve app name → GUID
            if (string.IsNullOrWhiteSpace(app))
                return ErrorResult(
                    $"Error: app is required for action='{actionName}'.\n" +
                    $"Provide: app display name or GUID.\n" +
                    $"Tip: Use action='list' to find available apps and their IDs.");

            var (appModuleId, resolvedAppName, resolveError) = ResolveAppModule(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

            // ── undo: requires sitemapxml only ────────────────────────────
            if (actionName == "undo")
            {
                if (!string.IsNullOrWhiteSpace(operations))
                    return ErrorResult(
                        "Error: 'operations' is not applicable for action='undo'.\n" +
                        "For undo, provide sitemapxml=<backup_file_path> from .devkit/backups/sitemaps/.");
                if (string.IsNullOrWhiteSpace(sitemapxml))
                    return ErrorResult(
                        "Error: sitemapxml is required for action='undo'.\n" +
                        "Provide the backup file path from .devkit/backups/sitemaps/.");
                try { return UndoSiteMap(appModuleId, sitemapxml.Trim(), validate, auto_publish); }
                catch (Exception ex) { return ErrorResult($"[Error] SiteMap undo failed\nAppModuleId: {appModuleId}\nMessage: {ex.Message}"); }
            }

            // ── update / create: operations XOR sitemapxml ────────────────
            var hasOps = !string.IsNullOrWhiteSpace(operations);
            var hasXml = !string.IsNullOrWhiteSpace(sitemapxml);

            if (hasOps && hasXml)
                return ErrorResult(
                    $"Error: Provide either 'operations' (recommended) or 'sitemapxml', not both.\n" +
                    $"- operations: JSON array for auto-build (recommended)\n" +
                    $"- sitemapxml: raw XML string (advanced)");

            if (!hasOps && !hasXml)
                return ErrorResult(
                    $"Error: Provide 'operations' (recommended) or 'sitemapxml' for action='{actionName}'.\n" +
                    $"- operations: JSON array, e.g. [{{\"action\":\"add_area\",\"label\":\"Sales\"}}]\n" +
                    $"- sitemapxml: raw SiteMap XML string\n" +
                    $"Read schema://sitemapxml for SiteMap XML structure and operation format.");

            // ── operations path: build XML inline ─────────────────────────
            if (hasOps)
            {
                List<JsonElement> ops;
                try
                {
                    ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
                    if (ops == null || ops.Count == 0)
                        return ErrorResult(
                            "Error: operations must be a non-empty JSON array.\n" +
                            "Example: [{\"action\":\"add_area\",\"label\":\"Sales\"}].\n" +
                            "Read schema://sitemapxml for SiteMap XML structure and operation format.");
                }
                catch (JsonException ex)
                {
                    return ErrorResult(
                        $"Error: Invalid operations JSON: {ex.Message}\n" +
                        "Expected a JSON array of operation objects, each with an 'action' field.\n" +
                        "Read schema://sitemapxml for SiteMap XML structure and operation format.");
                }

                string currentSiteMapXml;
                if (actionName == "update")
                {
                    var (_, _, xml, retrieveError) = RetrieveAppSiteMap(appModuleId);
                    if (retrieveError != null) return ErrorResult(retrieveError);
                    currentSiteMapXml = xml;
                }
                else // create
                {
                    currentSiteMapXml = "<SiteMap></SiteMap>";
                }

                XDocument siteMapDoc;
                try { siteMapDoc = XDocument.Parse(currentSiteMapXml); }
                catch (Exception ex) { return ErrorResult($"Error: Failed to parse current SiteMap XML: {ex.Message}"); }

                var lcid = McpHelper.GetBaseLanguageCode(_serviceClient);

                string modifiedXml;
                List<string> opSummaries;
                try
                {
                    (modifiedXml, opSummaries) = SiteMapXmlOperationsHelper.ApplyOperations(siteMapDoc, ops, lcid);
                }
                catch (SiteMapOperationException ex)
                {
                    return ErrorResult($"Error in operation '{ex.Action}': {ex.InnerMessage}");
                }
                catch (InvalidOperationException ex)
                {
                    return ErrorResult($"Error: {ex.Message}");
                }
                catch (Exception ex)
                {
                    return ErrorResult($"Error: Failed to apply operations: {ex.Message}");
                }

                try
                {
                    return actionName == "update"
                        ? UpdateSiteMapXml(appModuleId, modifiedXml, validate, backup, auto_publish, opSummaries)
                        : CreateSiteMap(appModuleId, modifiedXml, validate, auto_publish, opSummaries);
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
                        $"[Error] SiteMap {actionName} failed\nAppModuleId: {appModuleId}\nMessage: {errorDetail}");
                }
                catch (Exception ex)
                {
                    var errorDetail = ex.InnerException != null
                        ? $"{ex.Message} → {ex.InnerException.Message}"
                        : ex.Message;
                    return ErrorResult(
                        $"[Error] SiteMap {actionName} failed\nAppModuleId: {appModuleId}\nMessage: {errorDetail}");
                }
            }

            // ── sitemapxml path: existing flow ────────────────────────────
            var resolvedSiteMapXml = ResolveSiteMapXmlInput(sitemapxml.Trim());
            if (resolvedSiteMapXml == null)
                return ErrorResult(
                    $"[Error] SiteMapXml file not found\n" +
                    $"Path: {sitemapxml.Trim()}\n" +
                    $"Tip: The provided file path does not exist.");

            try
            {
                switch (actionName)
                {
                    case "update":
                        return UpdateSiteMapXml(appModuleId, resolvedSiteMapXml, validate, backup, auto_publish);

                    case "create":
                        return CreateSiteMap(appModuleId, resolvedSiteMapXml.Trim(), validate, auto_publish);

                    default:
                        return ErrorResult($"Error: Invalid action '{action}'. Valid actions: 'list', 'detail', 'update', 'create', 'undo'.");
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
                    $"[Error] SiteMap {actionName} failed\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"Message: {errorDetail}");
            }
            catch (Exception ex)
            {
                var errorDetail = ex.InnerException != null
                    ? $"{ex.Message} → {ex.InnerException.Message}"
                    : ex.Message;

                return ErrorResult(
                    $"[Error] SiteMap {actionName} failed\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"Message: {errorDetail}");
            }
        }

        // ── App Name Resolution ───────────────────────────────────────────

        private (Guid AppModuleId, string AppName, string Error) ResolveAppModule(string app)
        {
            if (Guid.TryParse(app, out var appGuid))
            {
                try
                {
                    var entity = _serviceClient.Retrieve("appmodule", appGuid,
                        new ColumnSet("name", "uniquename"));
                    var name = entity.GetAttributeValue<string>("name")
                        ?? entity.GetAttributeValue<string>("uniquename") ?? "";
                    return (appGuid, name, null);
                }
                catch
                {
                    return (Guid.Empty, null,
                        $"[Error] App module not found for GUID '{app}'\n" +
                        "Tip: Use manage_sitemap(action='list') to find valid apps.");
                }
            }

            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "name", "uniquename"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.Like, $"%{app}%")
                    }
                }
            };

            var results = _serviceClient.RetrieveMultiple(query).Entities;
            if (results.Count == 0)
                return (Guid.Empty, null,
                    $"[Error] No app found matching '{app}'\n" +
                    "Tip: Use manage_sitemap(action='list') to see all available apps.");

            if (results.Count > 1)
            {
                var exact = results.FirstOrDefault(e =>
                    string.Equals(e.GetAttributeValue<string>("name"), app, StringComparison.OrdinalIgnoreCase));
                if (exact != null)
                    return (exact.Id, exact.GetAttributeValue<string>("name"), null);

                var sb = new StringBuilder();
                sb.AppendLine($"[Error] Multiple apps match '{app}'. Please specify exact name or GUID:");
                foreach (var e in results)
                    sb.AppendLine($"  - {e.GetAttributeValue<string>("name")} ({e.Id})");
                return (Guid.Empty, null, sb.ToString());
            }

            return (results[0].Id, results[0].GetAttributeValue<string>("name"), null);
        }

        // ── Action: list ──────────────────────────────────────────────────

        private CallToolResult ListApps(string appNameFilter)
        {
            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "name", "uniquename", "appmoduleidunique"),
                Orders = { new OrderExpression("name", OrderType.Ascending) }
            };

            if (!string.IsNullOrWhiteSpace(appNameFilter))
            {
                query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{appNameFilter}%");
            }

            var apps = _serviceClient.RetrieveMultiple(query).Entities;
            if (apps.Count == 0)
            {
                var filterMsg = string.IsNullOrWhiteSpace(appNameFilter) ? "" : $" matching '{appNameFilter}'";
                return ErrorResult($"No Model-Driven Apps found{filterMsg}.");
            }

            var sb = new StringBuilder(512);
            sb.AppendLine($"[SiteMapList] {apps.Count} app(s) found");
            sb.AppendLine();
            sb.AppendLine("| App Name | App ID | Has SiteMap |");
            sb.AppendLine("|----------|--------|-------------|");

            foreach (var a in apps)
            {
                var name = a.GetAttributeValue<string>("name") ?? a.GetAttributeValue<string>("uniquename") ?? "?";
                var appId = a.Id;
                var appIdUnique = a.GetAttributeValue<Guid>("appmoduleidunique");

                var hasSiteMap = false;
                try
                {
                    var componentQuery = new QueryExpression("appmodulecomponent")
                    {
                        ColumnSet = new ColumnSet("objectid"),
                        Criteria = new FilterExpression
                        {
                            Conditions =
                            {
                                new ConditionExpression("appmoduleidunique", ConditionOperator.Equal, appIdUnique),
                                new ConditionExpression("componenttype", ConditionOperator.Equal, 62)
                            }
                        }
                    };
                    hasSiteMap = _serviceClient.RetrieveMultiple(componentQuery).Entities.Count > 0;
                }
                catch { /* ignore */ }

                sb.AppendLine($"| {name} | {appId} | {(hasSiteMap ? "Yes" : "No")} |");
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }]
            };
        }

        // ── Action: detail ────────────────────────────────────────────────

        private CallToolResult DetailApp(string app)
        {
            var (appModuleId, appName, resolveError) = ResolveAppModule(app);
            if (resolveError != null)
                return ErrorResult(resolveError);

            var (_, siteMapId, currentSiteMapXml, error) = RetrieveAppSiteMap(appModuleId);
            if (error != null)
                return ErrorResult(error);

            var prettyXml = PrettyPrintXml(currentSiteMapXml);
            var sb = new StringBuilder(512);
            sb.AppendLine($"[SiteMapDetail] {appName}");
            sb.AppendLine($"AppModuleId: {appModuleId}");
            sb.AppendLine($"SiteMapId: {siteMapId}");
            sb.AppendLine();
            sb.AppendLine(prettyXml);

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageSiteMapResult
                {
                    Action = "detail",
                    AppModuleId = appModuleId.ToString(),
                    AppName = appName,
                    SiteMapId = siteMapId.ToString(),
                    Status = "success"
                })
            };
        }

        // ── Action: create ────────────────────────────────────────────────

        private CallToolResult CreateSiteMap(Guid appModuleId,
            string sitemapxml, bool validate, bool auto_publish, List<string> opSummaries = null)
        {
            // Step 1: Retrieve app module and check it does NOT already have a SiteMap
            Entity appModule;
            try
            {
                appModule = _serviceClient.Retrieve("appmodule", appModuleId,
                    new ColumnSet("uniquename", "name", "appmoduleidunique"));
            }
            catch
            {
                return ErrorResult(
                    $"[Error] App module not found\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"Tip: Use execute_fetchxml to query appmodule table for valid app IDs.");
            }

            var appName = appModule.GetAttributeValue<string>("name") ?? appModule.GetAttributeValue<string>("uniquename") ?? "";
            var appModuleIdUnique = appModule.GetAttributeValue<Guid>("appmoduleidunique");

            // Check for existing SiteMap component (componenttype=62)
            var componentQuery = new QueryExpression("appmodulecomponent")
            {
                ColumnSet = new ColumnSet("objectid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("appmoduleidunique", ConditionOperator.Equal, appModuleIdUnique),
                        new ConditionExpression("componenttype", ConditionOperator.Equal, 62)
                    }
                }
            };

            var existingComponents = _serviceClient.RetrieveMultiple(componentQuery).Entities;
            if (existingComponents.Count > 0)
            {
                var existingSiteMapId = existingComponents[0].GetAttributeValue<Guid>("objectid");
                return ErrorResult(
                    $"[Error] App '{appName}' already has a SiteMap component\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"ExistingSiteMapId: {existingSiteMapId}\n" +
                    $"Tip: Use action='update' to modify the existing SiteMap instead.");
            }

            // Step 2: Strip XML declaration and validate
            var newSiteMapXml = StripXmlDeclaration(sitemapxml);

            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateSiteMapXml(newSiteMapXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;

                if (errors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[SiteMapCreate] BLOCKED — Validation failed");
                    sb.AppendLine($"AppModuleId: {appModuleId}");
                    sb.AppendLine($"Errors: {errors.Count}");
                    foreach (var e in errors)
                        sb.AppendLine($"- {e}");
                    if (warnings.Count > 0)
                    {
                        sb.AppendLine($"Warnings: {warnings.Count}");
                        foreach (var w in warnings)
                            sb.AppendLine($"- {w}");
                    }
                    sb.AppendLine($"Tip: Fix the SiteMap XML errors above and retry. Refer to schema://sitemapxml for valid structure.");

                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new ManageSiteMapResult
                        {
                            Action = "created",
                            AppModuleId = appModuleId.ToString(),
                            AppName = appName,
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            Published = false
                        })
                    };
                }
            }

            // Step 3: Create the SiteMap record
            if (_options.DryRun)
                return DryRunResult($"Would CREATE SiteMap for app '{appName}' ({appModuleId}).");

            var siteMapEntity = new Entity("sitemap");
            siteMapEntity["sitemapxml"] = newSiteMapXml;
            var siteMapId = _serviceClient.Create(siteMapEntity);

            // Step 4: Associate the SiteMap with the App Module via AddAppComponents
            try
            {
                var addComponentRequest = new Microsoft.Crm.Sdk.Messages.AddAppComponentsRequest
                {
                    AppId = appModuleIdUnique,
                    Components = new EntityReferenceCollection
                    {
                        new EntityReference("sitemap", siteMapId)
                    }
                };
                _serviceClient.Execute(addComponentRequest);
            }
            catch (Exception ex)
            {
                // Clean up: delete the orphaned SiteMap record
                try { _serviceClient.Delete("sitemap", siteMapId); } catch { /* best effort */ }
                return ErrorResult(
                    $"[Error] SiteMap created but failed to associate with app '{appName}'\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"SiteMapId: {siteMapId} (cleaned up)\n" +
                    $"Message: {ex.Message}\n" +
                    $"Tip: Verify the app module exists and supports SiteMap components.");
            }

            // Step 5: Publish
            var published = TryPublish(auto_publish, appModuleId);

            // Step 6: Return success
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[SiteMapCreate] {appName}");
                sb.AppendLine($"AppModuleId: {appModuleId}");
                sb.AppendLine($"SiteMapId: {siteMapId}");
                sb.AppendLine($"Status: Created and associated successfully");
                sb.AppendLine($"Validated: {(validate ? "yes" : "skipped")}");
                sb.AppendLine($"Published: {(published ? "yes" : "no")}");
                if (opSummaries?.Count > 0)
                {
                    sb.AppendLine($"Operations: {opSummaries.Count}");
                    foreach (var s in opSummaries)
                        sb.AppendLine($"  - {s}");
                }
                if (validationWarnings?.Count > 0)
                {
                    sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                    foreach (var w in validationWarnings)
                        sb.AppendLine($"  - {w}");
                }

                var structured = new ManageSiteMapResult
                {
                    Action = "created",
                    AppModuleId = appModuleId.ToString(),
                    AppName = appName,
                    SiteMapId = siteMapId.ToString(),
                    Status = published || !auto_publish ? "created" : "created_publish_failed",
                    Validated = validate,
                    ValidationWarnings = validationWarnings,
                    Published = published,
                    OperationsCount = opSummaries?.Count,
                    OperationSummaries = opSummaries?.Count > 0 ? opSummaries : null
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
        }

        // ── Action: update ─────────────────────────────────────────────────

        private CallToolResult UpdateSiteMapXml(Guid appModuleId,
            string sitemapxml, bool validate, bool backup, bool auto_publish, List<string> opSummaries = null)
        {
            // Step 1: Retrieve app module and its SiteMap
            var (appName, siteMapId, currentSiteMapXml, error) = RetrieveAppSiteMap(appModuleId);
            if (error != null)
                return ErrorResult(error);

            // Strip XML declaration from input
            var newSiteMapXml = StripXmlDeclaration(sitemapxml.Trim());

            // Step 2: Backup current SiteMap XML
            string backupPath = null;
            if (backup)
            {
                try
                {
                    backupPath = SaveBackup(appName, appModuleId, siteMapId, currentSiteMapXml);
                }
                catch (Exception ex)
                {
                    return ErrorResult(
                        $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                        $"AppModuleId: {appModuleId}\n" +
                        $"SiteMapId: {siteMapId}\n" +
                        $"Message: {ex.Message}\n" +
                        $"Tip: Fix the backup directory permissions or set backup=false (not recommended)");
                }
            }

            // Step 3: Validate new SiteMap XML against XSD
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateSiteMapXml(newSiteMapXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;

                if (errors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[SiteMapUpdate] BLOCKED — Validation failed");
                    sb.AppendLine($"AppModuleId: {appModuleId}");
                    sb.AppendLine($"SiteMapId: {siteMapId}");
                    sb.AppendLine($"Errors: {errors.Count}");
                    foreach (var e in errors)
                        sb.AppendLine($"- {e}");
                    if (warnings.Count > 0)
                    {
                        sb.AppendLine($"Warnings: {warnings.Count}");
                        foreach (var w in warnings)
                            sb.AppendLine($"- {w}");
                    }
                    if (backupPath != null)
                        sb.AppendLine($"Backup: saved (no changes made) — {backupPath}");
                    else
                        sb.AppendLine($"Backup: not needed (no changes made)");
                    sb.AppendLine($"Tip: Fix the SiteMap XML errors above and retry. Refer to schema://sitemapxml for valid structure.");

                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new ManageSiteMapResult
                        {
                            Action = "updated",
                            AppModuleId = appModuleId.ToString(),
                            AppName = appName,
                            SiteMapId = siteMapId.ToString(),
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            BackupPath = backupPath,
                            Published = false
                        })
                    };
                }
            }

            // Step 4: Update SiteMap record in Dataverse
            if (_options.DryRun)
                return DryRunResult($"Would UPDATE SiteMap for app '{appName}' ({appModuleId}).");

            var update = new Entity("sitemap", siteMapId);
            update["sitemapxml"] = newSiteMapXml;
            _serviceClient.Update(update);

            // Step 5: Publish
            var published = TryPublish(auto_publish, appModuleId);

            // Step 6: Return success
            {
                var sb = BuildSuccessText(appName, appModuleId, siteMapId, backupPath, validate, published);
                if (opSummaries?.Count > 0)
                {
                    sb.AppendLine($"Operations: {opSummaries.Count}");
                    foreach (var s in opSummaries)
                        sb.AppendLine($"  - {s}");
                }
                if (validationWarnings?.Count > 0)
                {
                    sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                    foreach (var w in validationWarnings)
                        sb.AppendLine($"  - {w}");
                }
                sb.AppendLine();
                AppendRollbackInfo(sb, backupPath, appModuleId);

                var structured = new ManageSiteMapResult
                {
                    Action = "updated",
                    AppModuleId = appModuleId.ToString(),
                    AppName = appName,
                    SiteMapId = siteMapId.ToString(),
                    Status = published || !auto_publish ? "updated" : "updated_publish_failed",
                    Validated = validate,
                    ValidationWarnings = validationWarnings,
                    BackupPath = backupPath,
                    Published = published,
                    OperationsCount = opSummaries?.Count,
                    OperationSummaries = opSummaries?.Count > 0 ? opSummaries : null
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
        }

        // ── Action: undo ──────────────────────────────────────────────────

        private CallToolResult UndoSiteMap(Guid appModuleId,
            string backupFilePath, bool validate, bool auto_publish)
        {
            // Step 1: Read backup file
            if (!File.Exists(backupFilePath))
                return ErrorResult(
                    $"[Error] Backup file not found\n" +
                    $"Path: {backupFilePath}\n" +
                    $"Tip: Check the file path. Backup files are at: .devkit/backups/sitemaps/");

            string restoredSiteMapXml;
            try
            {
                var json = File.ReadAllText(backupFilePath, Encoding.UTF8);
                var backupData = JsonSerializer.Deserialize<SiteMapBackup>(json);
                if (backupData == null || string.IsNullOrWhiteSpace(backupData.SiteMapXml))
                    return ErrorResult(
                        $"[Error] Backup file is empty or invalid\n" +
                        $"Path: {backupFilePath}\n" +
                        $"Tip: The backup file must be a JSON file with a 'sitemapxml' field");

                restoredSiteMapXml = StripXmlDeclaration(backupData.SiteMapXml.Trim());
            }
            catch (JsonException ex)
            {
                return ErrorResult(
                    $"[Error] Failed to parse backup file as JSON\n" +
                    $"Path: {backupFilePath}\n" +
                    $"Message: {ex.Message}\n" +
                    $"Tip: The backup file must be a valid .sitemap.json file");
            }

            // Step 2: Retrieve app module and its SiteMap
            var (appName, siteMapId, _, error) = RetrieveAppSiteMap(appModuleId);
            if (error != null)
                return ErrorResult(error);

            // Step 3: Validate restored SiteMap XML against XSD
            List<string> validationWarnings = null;
            if (validate)
            {
                var (errors, warnings) = ValidateSiteMapXml(restoredSiteMapXml);
                validationWarnings = warnings.Count > 0 ? warnings : null;

                if (errors.Count > 0)
                {
                    var sb = new StringBuilder(512);
                    sb.AppendLine($"[SiteMapUndo] BLOCKED — Backup file failed validation");
                    sb.AppendLine($"AppModuleId: {appModuleId}");
                    sb.AppendLine($"BackupFile: {backupFilePath}");
                    sb.AppendLine($"Errors: {errors.Count}");
                    foreach (var e in errors)
                        sb.AppendLine($"- {e}");
                    if (warnings.Count > 0)
                    {
                        sb.AppendLine($"Warnings: {warnings.Count}");
                        foreach (var w in warnings)
                            sb.AppendLine($"- {w}");
                    }
                    sb.AppendLine($"Tip: The backup file may be corrupted. Set validate=false to force restore (not recommended).");

                    var allIssues = new List<string>(errors);
                    if (warnings.Count > 0) allIssues.AddRange(warnings);

                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = sb.ToString() }],
                        StructuredContent = JsonSerializer.SerializeToElement(new ManageSiteMapResult
                        {
                            Action = "undo",
                            AppModuleId = appModuleId.ToString(),
                            AppName = appName,
                            SiteMapId = siteMapId.ToString(),
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            RestoredFromBackup = backupFilePath,
                            Published = false
                        })
                    };
                }
            }

            // Step 4: Update SiteMap with restored XML (NO backup — we're restoring!)
            if (_options.DryRun)
                return DryRunResult($"Would RESTORE SiteMap for app '{appName}' ({appModuleId}) from backup.");

            var update = new Entity("sitemap", siteMapId);
            update["sitemapxml"] = restoredSiteMapXml;
            _serviceClient.Update(update);

            // Step 5: Publish
            var published = TryPublish(auto_publish, appModuleId);

            if (auto_publish && !published)
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[SiteMapUndo] Restored but publish failed");
                sb.AppendLine($"AppModuleId: {appModuleId}");
                sb.AppendLine($"SiteMapId: {siteMapId}");
                sb.AppendLine($"RestoredFrom: {backupFilePath}");
                sb.AppendLine($"Tip: Call publish with include_sitemap=true to retry");

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(new ManageSiteMapResult
                    {
                        Action = "undo",
                        AppModuleId = appModuleId.ToString(),
                        AppName = appName,
                        SiteMapId = siteMapId.ToString(),
                        Status = "restored_publish_failed",
                        Validated = validate,
                        RestoredFromBackup = backupFilePath,
                        Published = false
                    })
                };
            }

            // Step 6: Return success
            {
                var sb = new StringBuilder(256);
                sb.AppendLine($"[SiteMapUndo] {appName}");
                sb.AppendLine($"AppModuleId: {appModuleId}");
                sb.AppendLine($"SiteMapId: {siteMapId}");
                sb.AppendLine($"Status: Restored successfully");
                sb.AppendLine($"RestoredFrom: {backupFilePath}");
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
                    StructuredContent = JsonSerializer.SerializeToElement(new ManageSiteMapResult
                    {
                        Action = "undo",
                        AppModuleId = appModuleId.ToString(),
                        AppName = appName,
                        SiteMapId = siteMapId.ToString(),
                        Status = "restored",
                        Validated = validate,
                        ValidationWarnings = validationWarnings,
                        RestoredFromBackup = backupFilePath,
                        Published = published
                    })
                };
            }
        }

        // ── Helpers ────────────────────────────────────────────────────────

        /// <summary>
        /// Retrieves the app module and its associated SiteMap via appmodulecomponent (componenttype=62).
        /// Returns (appName, siteMapId, currentSiteMapXml, errorMessage).
        /// </summary>
        private (string AppName, Guid SiteMapId, string SiteMapXml, string Error) RetrieveAppSiteMap(Guid appModuleId)
        {
            // Retrieve app module
            Entity appModule;
            try
            {
                appModule = _serviceClient.Retrieve("appmodule", appModuleId,
                    new ColumnSet("uniquename", "name", "appmoduleidunique"));
            }
            catch
            {
                return (null, Guid.Empty, null,
                    $"[Error] App module not found\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"Tip: Use execute_fetchxml to query appmodule table for valid app IDs. " +
                    $"Example: <fetch><entity name='appmodule'><attribute name='appmoduleid'/>" +
                    $"<attribute name='name'/><attribute name='uniquename'/></entity></fetch>");
            }

            var appName = appModule.GetAttributeValue<string>("name") ?? appModule.GetAttributeValue<string>("uniquename") ?? "";
            var appModuleIdUnique = appModule.GetAttributeValue<Guid>("appmoduleidunique");

            // Get SiteMap via appmodulecomponent (componenttype=62 is Sitemap)
            // Note: appmoduleidunique lookup on appmodulecomponent references the
            // appmoduleidunique field on appmodule, NOT appmoduleid
            var componentQuery = new QueryExpression("appmodulecomponent")
            {
                ColumnSet = new ColumnSet("objectid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("appmoduleidunique", ConditionOperator.Equal, appModuleIdUnique),
                        new ConditionExpression("componenttype", ConditionOperator.Equal, 62)
                    }
                }
            };

            var components = _serviceClient.RetrieveMultiple(componentQuery).Entities;
            if (components.Count == 0)
            {
                return (appName, Guid.Empty, null,
                    $"[Error] No SiteMap component found for app '{appName}'\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"Tip: This app may not have a classic SiteMap. Modern apps use the app designer.");
            }

            var siteMapId = components[0].GetAttributeValue<Guid>("objectid");

            // Retrieve the actual SiteMap record
            Entity sitemap;
            try
            {
                sitemap = _serviceClient.Retrieve("sitemap", siteMapId,
                    new ColumnSet("sitemapxml", "sitemapname"));
            }
            catch
            {
                return (appName, Guid.Empty, null,
                    $"[Error] SiteMap record not found\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    $"SiteMapId: {siteMapId}\n" +
                    $"Tip: The sitemap component references ID {siteMapId} but the record doesn't exist.");
            }

            var siteMapXml = sitemap.GetAttributeValue<string>("sitemapxml") ?? "";

            return (appName, siteMapId, siteMapXml, null);
        }

        private bool TryPublish(bool autoPublish, Guid appModuleId)
        {
            if (!autoPublish) return false;
            try
            {
                // Step 1: Publish sitemap customizations
                _serviceClient.Execute(new PublishXmlRequest
                {
                    ParameterXml = "<importexportxml><sitemaps><sitemap></sitemap></sitemaps></importexportxml>"
                });

                // Step 2: Publish the App Module itself (required for changes to appear in the app)
                _serviceClient.Execute(new PublishXmlRequest
                {
                    ParameterXml = $"<importexportxml><appmodules><appmodule>{appModuleId}</appmodule></appmodules></importexportxml>"
                });

                return true;
            }
            catch
            {
                return false;
            }
        }

        private static string SaveBackup(string appName, Guid appModuleId, Guid siteMapId, string currentSiteMapXml)
        {
            var workingDir = Directory.GetCurrentDirectory();
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "sitemaps");
            Directory.CreateDirectory(backupDir);

            var safeName = SanitizeFileName(appName);
            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{safeName}_{appModuleId:N}_{timestamp}.sitemap.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var prettyXml = PrettyPrintXml(currentSiteMapXml);
            var singleLineXml = prettyXml
                .Replace("\r\n", "").Replace("\n", "").Replace("\r", "");
            singleLineXml = System.Text.RegularExpressions.Regex.Replace(singleLineXml, @">\s+<", "><");

            var backupData = new SiteMapBackup
            {
                AppName = appName,
                AppModuleId = appModuleId.ToString(),
                SiteMapId = siteMapId.ToString(),
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                SiteMapXml = singleLineXml
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });

            File.WriteAllText(backupPath, json, Encoding.UTF8);

            return backupPath;
        }

        /// <summary>
        /// Validates SiteMap XML against XSD schema (SiteMap.xsd + SiteMapType.xsd).
        /// Undeclared attributes/elements are treated as warnings (Dataverse evolves faster than embedded XSD).
        /// </summary>
        private static (List<string> Errors, List<string> Warnings) ValidateSiteMapXml(string siteMapXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetSchemaSet();
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

                using var stringReader = new StringReader(siteMapXml);
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

        private static bool IsSchemaEvolutionError(string message)
        {
            return message.Contains("attribute is not declared") ||
                   message.Contains("is not declared");
        }

        /// <summary>
        /// Loads and caches the XSD schema set: SiteMap.xsd + SiteMapType.xsd.
        /// </summary>
        private static XmlSchemaSet GetSchemaSet()
        {
            if (_cachedSchemaSet != null) return _cachedSchemaSet;

            lock (_schemaLock)
            {
                if (_cachedSchemaSet != null) return _cachedSchemaSet;

                var assembly = Assembly.GetExecutingAssembly();
                var resourceNames = assembly.GetManifestResourceNames();

                string[] schemaFiles = ["SiteMap.xsd", "SiteMapType.xsd"];

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
            string appName, Guid appModuleId, Guid siteMapId, string backupPath, bool validated, bool published)
        {
            var sb = new StringBuilder(512);
            sb.AppendLine($"[SiteMapUpdate] {appName}");
            sb.AppendLine($"AppModuleId: {appModuleId}");
            sb.AppendLine($"SiteMapId: {siteMapId}");
            sb.AppendLine($"Status: Updated successfully");
            sb.AppendLine($"Validated: {(validated ? "yes" : "skipped")}");
            sb.AppendLine($"Backup: {backupPath ?? "skipped"}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            return sb;
        }

        private static void AppendRollbackInfo(StringBuilder sb, string backupPath, Guid appModuleId)
        {
            sb.AppendLine("To rollback this change:");
            if (backupPath != null)
            {
                sb.AppendLine($"  Call manage_sitemap with action='undo', app_module_id='{appModuleId}', sitemapxml='{backupPath}'");
            }
            else
            {
                sb.AppendLine($"  1. Retrieve the previous SiteMap XML (no backup was created)");
                sb.AppendLine($"  2. Call manage_sitemap with app_module_id='{appModuleId}' and the original sitemapxml");
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

        /// <summary>
        /// Resolves the sitemapxml input: if it's a file path ending in .sitemap, reads the file content.
        /// If it's inline XML, returns as-is. Returns null if the file path doesn't exist.
        /// </summary>
        private static string ResolveSiteMapXmlInput(string sitemapxml)
        {
            // Detect file path: must end with .sitemap and NOT start with '<' (which means inline XML)
            if (!sitemapxml.TrimStart().StartsWith("<") && sitemapxml.EndsWith(".sitemap", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(sitemapxml))
                    return null;

                var content = File.ReadAllText(sitemapxml, Encoding.UTF8).Trim();

                // Clean up temp file after reading
                try { File.Delete(sitemapxml); } catch { /* best effort cleanup */ }

                return content;
            }

            // Inline XML — return as-is
            return sitemapxml;
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

        private static string SanitizeFileName(string name)
        {
            if (string.IsNullOrWhiteSpace(name)) return "unknown";
            var invalidChars = Path.GetInvalidFileNameChars();
            var sanitized = new StringBuilder(name.Length);
            foreach (var c in name)
            {
                sanitized.Append(invalidChars.Contains(c) ? '_' : c);
            }
            return sanitized.ToString().ToLowerInvariant().Replace(' ', '_');
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

        // ── Backup model ──────────────────────────────────────────────────

        private sealed class SiteMapBackup
        {
            [JsonPropertyName("appName")]
            public string AppName { get; set; }

            [JsonPropertyName("appModuleId")]
            public string AppModuleId { get; set; }

            [JsonPropertyName("sitemapId")]
            public string SiteMapId { get; set; }

            [JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [JsonPropertyName("sitemapxml")]
            public string SiteMapXml { get; set; }
        }
    }
}
