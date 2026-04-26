using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap;
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
using System.Text;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class BuildSiteMapXmlTool
    {
        private readonly ServiceClient _serviceClient;

        public BuildSiteMapXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "build_sitemap_xml", Title = "Build SiteMap XML with areas, groups, and subareas",
            Destructive = false, ReadOnly = true, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(BuildSiteMapXmlResult)),
        Description(
            "Build modified SiteMap XML for a Model-Driven App (areas/groups/subareas). " +
            "READ-ONLY — returns XML; use manage_sitemap(action='update') to apply.\n\n" +
            "12 OPERATIONS (pass as JSON array in 'operations'):\n" +
            "- add_area: label req. Optional: id, icon, show_groups, groups[]\n" +
            "- add_group: area+label req. Optional: id, is_profile, subareas[]\n" +
            "- add_subarea: area+group+(entity or url) req. Optional: id, label, icon, pass_params, default_dashboard, vector_icon, client\n" +
            "- remove_area: area req.\n" +
            "- remove_group: area+group req.\n" +
            "- remove_subarea: area+group+subarea req.\n" +
            "- update_area: area req. Optional: label, icon, show_groups\n" +
            "- update_group: area+group req. Optional: label, is_profile\n" +
            "- update_subarea: area+group+subarea req. Optional: label, entity, url, icon, pass_params, default_dashboard, vector_icon, client\n" +
            "- move_area: area+position req.\n" +
            "- move_group: area+group+position req.\n" +
            "- move_subarea: area+group+subarea+position req.\n\n" +
            "position values: 'first', 'last', 'after:<id>'. Auto-generates IDs (area_, group_, sa_). Fuzzy lookup by ID or label.\n" +
            "Read schema://sitemapxml for SiteMap XML structure and rules.")]
        public CallToolResult build_sitemap_xml(
            [Description("Model-Driven App name (fuzzy match) or GUID. Resolves to app_module_id and retrieves current SiteMap XML.")] string app,
            [Description("JSON array of operation objects. Each requires 'action' + operation-specific fields (see tool description for required/optional fields per action).\n" +
                "Example: [{\"action\":\"add_subarea\",\"area\":\"Sales\",\"group\":\"Customers\",\"entity\":\"account\"}]")] string operations)
        {
            // Step 1: Validate inputs
            if (string.IsNullOrWhiteSpace(app))
                return ErrorResult("Error: app is required. Provide app display name or GUID.");
            if (string.IsNullOrWhiteSpace(operations))
                return ErrorResult(
                    "Error: operations is required.\n" +
                    "Provide a non-empty JSON array, e.g. [{\"action\":\"add_area\",\"label\":\"Sales\"}].\n" +
                    "Read schema://sitemapxml for SiteMap XML structure and operation format.");

            // Step 2: Resolve app name/GUID to app module
            var (appModuleId, appName, resolveError) = ResolveAppModule(app.Trim());
            if (resolveError != null)
                return ErrorResult(resolveError);

            // Step 3: Retrieve current SiteMap XML
            var (siteMapXml, retrieveError) = RetrieveCurrentSiteMapXml(appModuleId, appName);
            if (retrieveError != null)
                return ErrorResult(retrieveError);

            // Step 4: Parse operations JSON
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

            // Step 5: Parse SiteMap XML in shell — preserves exact original error text
            System.Xml.Linq.XDocument siteMapDoc;
            try
            {
                siteMapDoc = System.Xml.Linq.XDocument.Parse(siteMapXml);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to parse current SiteMap XML: {ex.Message}");
            }

            // Step 6: Resolve LCID once, pass to helper
            var lcid = McpHelper.GetBaseLanguageCode(_serviceClient);

            // Step 7: Apply operations via helper
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

            // Step 8: Save to temp file (avoids AI truncation)
            var tempDir = Path.Combine(Directory.GetCurrentDirectory(), ".devkit", "modified_sitemaps");
            Directory.CreateDirectory(tempDir);
            var tempFileName = $"{appModuleId:N}.sitemap";
            var tempFilePath = Path.Combine(tempDir, tempFileName);
            File.WriteAllText(tempFilePath, modifiedXml, Encoding.UTF8);

            // Step 9: Build response
            var resultSb = new StringBuilder(256);
            resultSb.AppendLine($"[BuildSiteMapXml] {appName}");
            resultSb.AppendLine($"AppModuleId: {appModuleId}");
            resultSb.AppendLine($"Operations: {opSummaries.Count}");
            foreach (var s in opSummaries)
                resultSb.AppendLine($"  - {s}");
            resultSb.AppendLine();
            resultSb.AppendLine($"SiteMapXml saved to: {tempFilePath}");
            resultSb.AppendLine();
            resultSb.AppendLine($"Next step: manage_sitemap(action='update', app='{appName}', sitemapxml='{tempFilePath}')");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = resultSb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new BuildSiteMapXmlResult
                {
                    AppModuleId = appModuleId.ToString(),
                    AppName = appName,
                    Status = "success",
                    OperationsCount = opSummaries.Count,
                    OperationSummaries = opSummaries,
                    SiteMapXmlPath = tempFilePath
                })
            };
        }

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

        private (string SiteMapXml, string Error) RetrieveCurrentSiteMapXml(Guid appModuleId, string appName)
        {
            Entity appModule;
            try
            {
                appModule = _serviceClient.Retrieve("appmodule", appModuleId,
                    new ColumnSet("appmoduleidunique"));
            }
            catch
            {
                return (null, $"[Error] Failed to retrieve app module '{appName}' ({appModuleId})");
            }

            var appModuleIdUnique = appModule.GetAttributeValue<Guid>("appmoduleidunique");

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
                return (null,
                    $"[Error] No SiteMap component found for app '{appName}'\n" +
                    $"AppModuleId: {appModuleId}\n" +
                    "Tip: This app may not have a classic SiteMap. Use manage_sitemap(action='create') first.");

            var siteMapId = components[0].GetAttributeValue<Guid>("objectid");

            Entity sitemap;
            try
            {
                sitemap = _serviceClient.Retrieve("sitemap", siteMapId,
                    new ColumnSet("sitemapxml"));
            }
            catch
            {
                return (null,
                    $"[Error] SiteMap record not found (ID: {siteMapId})\n" +
                    $"App: '{appName}' ({appModuleId})");
            }

            var xml = sitemap.GetAttributeValue<string>("sitemapxml");
            if (string.IsNullOrWhiteSpace(xml))
                return (null,
                    $"[Error] SiteMap XML is empty for app '{appName}'\n" +
                    "Tip: Use manage_sitemap(action='create') to initialize a SiteMap.");

            return (xml, null);
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
