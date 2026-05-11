using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class PublishCustomizationsTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public PublishCustomizationsTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "publish_customizations", Title = "Publish customizations to make changes visible",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(PublishResult)),
        Description(
            "Publish Dataverse metadata changes (entities, attributes, forms, views, option sets, relationships, model-driven apps). Specific publish is faster than PublishAll. Idempotent.\n\n" +

            "WHEN TO USE:\n" +
            "- After upsert_* / execute_webapi metadata changes when auto_publish=false\n" +
            "- After manage_app changes when the user is ready to publish the appmodule\n" +
            "- When user reports changes not showing up\n" +
            "- Batch many changes then publish once at the end")]
        public CallToolResult publish_customizations(
            [Description("Comma-separated entity Display Names or logical names (e.g. 'Account,contact'). Empty with no other targets = PublishAll."
            )] string entities = "",
            [Description("Also publish global option sets."
            )] bool include_global_optionset = false,
            [Description("Also publish sitemap."
            )] bool include_sitemap = false,
            [Description("Comma-separated appmodule GUIDs, Display Names, or unique names for model-driven apps."
            )] string appmodules = "")
        {
            var sw = Stopwatch.StartNew();

            try
            {
                var entitiesProvided = !string.IsNullOrWhiteSpace(entities);
                var entityList = entitiesProvided ? ResolveEntityList(entities) : [];

                if (entitiesProvided && entityList.Count == 0)
                {
                    return ErrorResult(
                        "Error: No valid entity names found after parsing the 'entities' parameter.\n" +
                        "Valid format: comma-separated logical names (e.g., 'account,contact,lead') or leave empty to publish all customizations.");
                }

                var appModulesProvided = !string.IsNullOrWhiteSpace(appmodules);
                var appModuleList = appModulesProvided ? ResolveAppModuleList(appmodules) : [];

                if (appModulesProvided && appModuleList.Count == 0)
                {
                    return ErrorResult(
                        "Error: No valid appmodule values found after parsing the 'appmodules' parameter.\n" +
                        "Valid format: comma-separated appmodule GUIDs, Display Names, or unique names.");
                }

                var hasSpecificTargets = entityList.Count > 0 || appModuleList.Count > 0 || include_global_optionset || include_sitemap;

                if (_options.DryRun)
                {
                    var target = !hasSpecificTargets
                        ? "ALL customizations"
                        : BuildTargetSummary(entityList, appModuleList, include_global_optionset, include_sitemap);
                    return DryRunResult($"Would PUBLISH {target}.");
                }

                if (!hasSpecificTargets)
                {
                    // Use async version to avoid timeout
                    var asyncRequest = new PublishAllXmlAsyncRequest();
                    var asyncResponse = (PublishAllXmlAsyncResponse)_serviceClient.Execute(asyncRequest);
                    sw.Stop();

                    var jobId = asyncResponse.AsyncOperationId;
                    var text = $"[Publish] All customizations (async)\n" +
                               $"Status: Started asynchronously\n" +
                               $"AsyncOperationId: {jobId}\n" +
                               $"Duration: {sw.Elapsed.TotalSeconds:F1}s\n" +
                               $"Note: Use get_system_jobs(record_id=\"{jobId}\") to check publish status.";

                    var structured = new PublishResult
                    {
                        Mode = "all_async",
                        Status = "in_progress",
                        AsyncOperationId = jobId.ToString(),
                        DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1)
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = text }],
                        StructuredContent = JsonSerializer.SerializeToElement(structured)
                    };
                }

                var parameterXml = BuildParameterXml(entityList, appModuleList, include_global_optionset, include_sitemap);
                var request = new PublishXmlRequest { ParameterXml = parameterXml };
                _serviceClient.Execute(request);
                sw.Stop();

                var sb = new StringBuilder();
                sb.AppendLine("[Publish] Specific customizations");
                sb.AppendLine($"Entities: {(entityList.Count == 0 ? "(none)" : string.Join(", ", entityList))}");
                sb.AppendLine($"AppModules: {(appModuleList.Count == 0 ? "(none)" : string.Join(", ", appModuleList))}");
                sb.AppendLine($"GlobalOptionSets: {(include_global_optionset ? "yes" : "no")}");
                sb.AppendLine($"SiteMap: {(include_sitemap ? "yes" : "no")}");
                sb.AppendLine("Status: Published successfully");
                sb.Append($"Duration: {sw.Elapsed.TotalSeconds:F1}s");

                var specificStructured = new PublishResult
                {
                    Mode = "specific",
                    Entities = entityList,
                    EntityCount = entityList.Count,
                    AppModules = appModuleList,
                    AppModuleCount = appModuleList.Count,
                    IncludeGlobalOptionSets = include_global_optionset,
                    IncludeSiteMap = include_sitemap,
                    Status = "published",
                    DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1)
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(specificStructured)
                };
            }
            catch (Exception ex)
            {
                sw.Stop();
                var hasSpecificTargets = !string.IsNullOrWhiteSpace(entities) ||
                    !string.IsNullOrWhiteSpace(appmodules) ||
                    include_global_optionset ||
                    include_sitemap;
                var errorMsg = hasSpecificTargets
                    ? $"Error: Publish failed for {BuildErrorTarget(entities, appmodules, include_global_optionset, include_sitemap)}.\n" +
                      $"Note: Dataverse rejects the entire batch if any entity name is invalid - verify logical names via get_tables.\n" +
                      $"Details: {ex.Message}"
                    : $"Error: PublishAll failed.\n" +
                      $"Details: {ex.Message}";
                return ErrorResult(errorMsg);
            }
        }

        private List<string> ResolveEntityList(string entities)
        {
            var inputs = entities.Split(',')
                .Select(e => e.Trim())
                .Where(e => !string.IsNullOrEmpty(e))
                .ToList();

            var resolvedNames = new List<string>();
            foreach (var input in inputs)
            {
                var resolved = DisplayNameFirstResolver.ResolveEntity(_serviceClient, input, "publish_customizations");
                if (!resolved.IsSuccess)
                    throw new InvalidOperationException($"entities '{input}': {resolved.Error}");

                resolvedNames.Add(resolved.Value.LogicalName);
            }

            return resolvedNames
                .Where(e => !string.IsNullOrWhiteSpace(e))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        private List<string> ResolveAppModuleList(string appModules)
        {
            var inputs = appModules.Split(',')
                .Select(a => a.Trim())
                .Where(a => !string.IsNullOrEmpty(a))
                .ToList();

            var resolvedIds = new List<string>();
            foreach (var input in inputs)
            {
                if (Guid.TryParse(input, out var guid))
                {
                    resolvedIds.Add(guid.ToString("D"));
                    continue;
                }

                var resolved = DisplayNameFirstResolver.ResolveApp(_serviceClient, input, "publish_customizations");
                if (!resolved.IsSuccess)
                    throw new InvalidOperationException($"appmodules '{input}': {resolved.Error}");

                var appId = resolved.Value.GetAttributeValue<Guid>("appmoduleid");
                if (appId == Guid.Empty)
                    appId = resolved.Value.Id;
                if (appId == Guid.Empty)
                    throw new InvalidOperationException($"appmodules '{input}' resolved without an appmoduleid.");

                resolvedIds.Add(appId.ToString("D"));
            }

            return resolvedIds
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        private static string BuildParameterXml(
            List<string> entityList,
            bool includeGlobalOptionSets,
            bool includeSiteMap)
            => BuildParameterXml(entityList, new List<string>(), includeGlobalOptionSets, includeSiteMap);

        private static string BuildParameterXml(
            List<string> entityList,
            List<string> appModuleList,
            bool includeGlobalOptionSets,
            bool includeSiteMap)
        {
            var sb = new StringBuilder();
            sb.Append("<importexportxml>");
            sb.Append("<entities>");
            foreach (var entity in entityList)
            {
                sb.Append($"<entity>{entity}</entity>");
            }
            sb.Append("</entities>");
            if (appModuleList.Count > 0)
            {
                sb.Append("<appmodules>");
                foreach (var appModuleId in appModuleList)
                {
                    sb.Append($"<appmodule>{appModuleId}</appmodule>");
                }
                sb.Append("</appmodules>");
            }
            sb.Append(includeGlobalOptionSets ? "<optionsets><optionset>all</optionset></optionsets>" : "<optionsets />");
            sb.Append(includeSiteMap ? "<sitemaps><sitemap></sitemap></sitemaps>" : "<sitemaps />");
            sb.Append("</importexportxml>");
            return sb.ToString();
        }

        private static string BuildTargetSummary(
            List<string> entityList,
            List<string> appModuleList,
            bool includeGlobalOptionSets,
            bool includeSiteMap)
        {
            var parts = new List<string>();
            if (entityList.Count > 0)
                parts.Add($"{entityList.Count} {(entityList.Count == 1 ? "entity" : "entities")}: {string.Join(", ", entityList)}");
            if (appModuleList.Count > 0)
                parts.Add($"{appModuleList.Count} {(appModuleList.Count == 1 ? "appmodule" : "appmodules")}: {string.Join(", ", appModuleList)}");
            if (includeGlobalOptionSets)
                parts.Add("global option sets");
            if (includeSiteMap)
                parts.Add("sitemap");
            return string.Join("; ", parts);
        }

        private static string BuildErrorTarget(string entities, string appModules, bool includeGlobalOptionSets, bool includeSiteMap)
        {
            var parts = new List<string>();
            if (!string.IsNullOrWhiteSpace(entities))
                parts.Add($"entities '{entities.Trim()}'");
            if (!string.IsNullOrWhiteSpace(appModules))
                parts.Add($"appmodules '{appModules.Trim()}'");
            if (includeGlobalOptionSets)
                parts.Add("global option sets");
            if (includeSiteMap)
                parts.Add("sitemap");
            return parts.Count == 0 ? "specific customizations" : string.Join(", ", parts);
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
    }
}
