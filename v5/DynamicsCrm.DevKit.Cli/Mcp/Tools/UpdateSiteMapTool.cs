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
using System.Text.Json.Serialization;
using System.Xml;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpdateSiteMapTool
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        public UpdateSiteMapTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "upsert_sitemap", Title = "Create, update, or undo a Model-Driven App SiteMap with backup + XSD validation + publish",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(UpdateSiteMapResult)),
        Description(
            "Create, update, or undo a Model-Driven App's SiteMap XML with automatic backup, XSD validation, and publishing. " +
            "This completes the UI customization trilogy: Forms (upsert_form) → Views (upsert_view) → SiteMap (upsert_sitemap).\n\n" +

            "THREE ACTIONS (controlled by 'action' parameter):\n" +
            "- 'update' (default): Modify SiteMap XML of an existing app. " +
            "Requires app_module_id + sitemapxml.\n" +
            "- 'create': Create a new SiteMap and associate it with an app module. " +
            "Requires app_module_id + sitemapxml. " +
            "The app must NOT already have a SiteMap component.\n" +
            "- 'undo': Restore a SiteMap from a backup file. " +
            "Requires app_module_id + sitemapxml (= path to backup .json file). " +
            "Skips backup (no need), still validates XSD.\n\n" +

            "PARAMETERS:\n" +
            "- action: 'update' (default), 'create', or 'undo' (restore from backup).\n" +
            "- app_module_id (required): GUID of the Model-Driven App. " +
            "Query appmodule table to find IDs.\n" +
            "- sitemapxml: For 'update'/'create': the new SiteMap XML content. " +
            "For 'undo': the file path to the backup .json file.\n" +
            "- validate: Validate against XSD before writing (default: true).\n" +
            "- backup: Save current SiteMap XML to backup before overwriting (default: true). " +
            "Ignored for 'create' and 'undo' (no existing SiteMap to backup).\n" +
            "- auto_publish: Publish the app after changes (default: true).\n\n" +

            "WORKFLOW FOR 'update' (MUST follow this order):\n" +
            "1. Query appmodule to find the app and its SiteMap\n" +
            "2. Read current SiteMap XML\n" +
            "3. Modify as needed (refer to schema://sitemapxml for structure)\n" +
            "4. Call upsert_sitemap with the modified XML\n" +
            "5. Tool auto-handles: backup → validate → update → publish\n" +
            "6. If something breaks: use action='undo' with the backup file path\n\n" +

            "WORKFLOW FOR 'create':\n" +
            "1. Query appmodule to verify the app exists and has NO SiteMap\n" +
            "2. Build SiteMap XML (refer to schema://sitemapxml for structure)\n" +
            "3. Call upsert_sitemap with action='create', app_module_id, and sitemapxml\n" +
            "4. Tool auto-handles: validate → create sitemap record → associate with app → publish\n\n" +

            "WORKFLOW FOR 'undo':\n" +
            "1. Call upsert_sitemap with action='undo', app_module_id, and sitemapxml=<backup file path>\n" +
            "2. Tool auto-handles: read backup → validate XSD → update → publish (no new backup)\n" +
            "3. The backup file path is returned in every update success response\n\n" +

            "WHEN TO USE:\n" +
            "- To create a new SiteMap for an app that doesn't have one\n" +
            "- To add/remove/rearrange navigation areas, groups, and sub-areas\n" +
            "- To add a new entity to app navigation\n" +
            "- To customize app navigation structure\n" +
            "- After creating a new entity that needs to appear in the app\n" +
            "- To undo/rollback a previous SiteMap change using a backup file\n\n" +

            "SAFETY:\n" +
            "- Auto-backup saves current SiteMap XML before ANY modification (update only)\n" +
            "- XSD validation blocks invalid XML from being written\n" +
            "- Undo action restores from backup\n" +
            "- If backup=true and backup fails, update is BLOCKED (fail-safe)\n\n" +

            "TIPS:\n" +
            "- Read schema://sitemapxml for SiteMap XML structure and rules\n" +
            "- SiteMap structure: SiteMap > Area > Group > SubArea\n" +
            "- SubArea Entity attribute links to a Dataverse entity\n" +
            "- Set auto_publish=false when making multiple changes\n" +
            "- Backup files at: .devkit/backups/sitemaps/{appname}_{id}_{timestamp}.sitemap.json\n" +
            "- Use execute_fetchxml to query appmodule table for app IDs")]
        public CallToolResult upsert_sitemap(
            [Description(
                "Action to perform: 'update' (default), 'create', or 'undo' (restore from backup). " +
                "For 'update': modifies SiteMap XML (requires app_module_id + sitemapxml). " +
                "For 'create': creates a new SiteMap and associates with the app (requires app_module_id + sitemapxml). " +
                "For 'undo': restores SiteMap from a backup file (requires app_module_id + sitemapxml as file path)."
            )] string action = "update",
            [Description(
                "GUID of the Model-Driven App (appmodule) whose SiteMap to modify. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use execute_fetchxml on appmodule to find app IDs."
            )] string app_module_id = "",
            [Description(
                "For 'update'/'create': the new SiteMap XML content (must be valid XML). " +
                "For 'undo': the file path to the backup .json file " +
                "(e.g. '.devkit/backups/sitemaps/saleshub_abc123_20260331.sitemap.json'). " +
                "The tool will strip any XML declaration before writing."
            )] string sitemapxml = "",
            [Description(
                "Validate SiteMap XML against XSD schema before writing (default: true). " +
                "Applies to 'update' and 'undo' actions. " +
                "Blocks update if invalid. Set false only if you've already validated."
            )] bool validate = true,
            [Description(
                "Save current SiteMap XML to local backup before overwriting (default: true). " +
                "Ignored for 'create' (no existing SiteMap) and 'undo' (restoring from backup). " +
                "Strongly recommended to keep true. If backup fails, operation is BLOCKED (fail-safe)."
            )] bool backup = true,
            [Description(
                "Publish the app module after changes (default: true). " +
                "Set false if batching multiple changes, then call publish once."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(app_module_id))
                return ErrorResult("Error: app_module_id is required.");

            if (!Guid.TryParse(app_module_id.Trim(), out var appModuleId))
                return ErrorResult($"Error: '{app_module_id}' is not a valid GUID.");

            if (string.IsNullOrWhiteSpace(sitemapxml))
                return ErrorResult("Error: sitemapxml is required.");

            var actionName = (action ?? "update").Trim().ToLowerInvariant();

            try
            {
                switch (actionName)
                {
                    case "create":
                        return CreateSiteMap(appModuleId, sitemapxml.Trim(), validate, auto_publish);

                    case "undo":
                        return UndoSiteMap(appModuleId, sitemapxml.Trim(), validate, auto_publish);

                    default: // "update"
                        return UpdateSiteMapXml(appModuleId, sitemapxml, validate, backup, auto_publish);
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

        // ── Action: create ────────────────────────────────────────────────

        private CallToolResult CreateSiteMap(Guid appModuleId,
            string sitemapxml, bool validate, bool auto_publish)
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
                        StructuredContent = JsonSerializer.SerializeToElement(new UpdateSiteMapResult
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
                if (validationWarnings?.Count > 0)
                {
                    sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                    foreach (var w in validationWarnings)
                        sb.AppendLine($"  - {w}");
                }

                var structured = new UpdateSiteMapResult
                {
                    Action = "created",
                    AppModuleId = appModuleId.ToString(),
                    AppName = appName,
                    SiteMapId = siteMapId.ToString(),
                    Status = published || !auto_publish ? "created" : "created_publish_failed",
                    Validated = validate,
                    ValidationWarnings = validationWarnings,
                    Published = published
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
            string sitemapxml, bool validate, bool backup, bool auto_publish)
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
                        StructuredContent = JsonSerializer.SerializeToElement(new UpdateSiteMapResult
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
            var update = new Entity("sitemap", siteMapId);
            update["sitemapxml"] = newSiteMapXml;
            _serviceClient.Update(update);

            // Step 5: Publish
            var published = TryPublish(auto_publish, appModuleId);

            // Step 6: Return success
            {
                var sb = BuildSuccessText(appName, appModuleId, siteMapId, backupPath, validate, published);
                if (validationWarnings?.Count > 0)
                {
                    sb.AppendLine($"ValidationWarnings: {validationWarnings.Count}");
                    foreach (var w in validationWarnings)
                        sb.AppendLine($"  - {w}");
                }
                sb.AppendLine();
                AppendRollbackInfo(sb, backupPath, appModuleId);

                var structured = new UpdateSiteMapResult
                {
                    Action = "updated",
                    AppModuleId = appModuleId.ToString(),
                    AppName = appName,
                    SiteMapId = siteMapId.ToString(),
                    Status = published || !auto_publish ? "updated" : "updated_publish_failed",
                    Validated = validate,
                    ValidationWarnings = validationWarnings,
                    BackupPath = backupPath,
                    Published = published
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
                        StructuredContent = JsonSerializer.SerializeToElement(new UpdateSiteMapResult
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
                    StructuredContent = JsonSerializer.SerializeToElement(new UpdateSiteMapResult
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
                    StructuredContent = JsonSerializer.SerializeToElement(new UpdateSiteMapResult
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

            var backupData = new SiteMapBackup
            {
                AppName = appName,
                AppModuleId = appModuleId.ToString(),
                SiteMapId = siteMapId.ToString(),
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                SiteMapXml = PrettyPrintXml(currentSiteMapXml)
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true
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
                sb.AppendLine($"  Call upsert_sitemap with action='undo', app_module_id='{appModuleId}', sitemapxml='{backupPath}'");
            }
            else
            {
                sb.AppendLine($"  1. Retrieve the previous SiteMap XML (no backup was created)");
                sb.AppendLine($"  2. Call upsert_sitemap with app_module_id='{appModuleId}' and the original sitemapxml");
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
