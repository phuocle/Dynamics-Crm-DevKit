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
    public class PublishCustomizationsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public PublishCustomizationsTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "publish_customizations", Title = "Publish customizations to make changes visible",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(PublishResult)),
        Description(
            "Publish Dataverse solution components using PublishXmlRequest (targeted, fast) or PublishAllXmlRequest (async, org-wide). Idempotent.\n\n" +

            "TARGETED PUBLISH (recommended): supply at least one of entities/optionset_names/ribbons/dashboards/webresources/include_sitemap/appmodules. Runs PublishXmlRequest — only the listed components are published, no org-wide lock.\n\n" +

            "PUBLISH ALL (fallback): pass no parameters at all. Runs PublishAllXmlAsyncRequest, which is heavy and acquires an org-wide exclusive lock; schedule during off-peak hours.\n\n" +

            "Supported targets for targeted publish:\n" +
            "- entities: comma-separated Display Names or logical names. Publishes entity metadata + forms + views + ribbons for each entity.\n" +
            "- optionset_names: comma-separated global option set unique names (e.g. 'new_priority'). Publishes specific global option sets. Use include_global_optionset=true to publish ALL global option sets instead.\n" +
            "- include_ribbons: true to publish the application ribbon (not entity-level ribbons — those are covered by entities).\n" +
            "- dashboards: comma-separated system-form GUIDs for dashboards to publish.\n" +
            "- webresources: comma-separated web resource GUIDs (or logical names) to publish.\n" +
            "- include_sitemap: true to publish the site map.\n" +
            "- appmodules: comma-separated appmodule GUIDs, Display Names, or unique names for model-driven apps.\n\n" +

            "RIBBON CACHING QUIRK:\n" +
            "While targeted publish (entities=... or include_ribbons=true) is supposed to publish ribbons, Dataverse's internal Ribbon Command cache is notorious for not updating in the UI. If you use targeted publish for ribbons and the changes do not appear, you MUST fall back to PublishAll (pass no parameters) to forcefully rebuild the ribbon cache.\n\n" +

            "WHEN TO USE:\n" +
            "- After upsert_* / execute_webapi metadata changes when auto_publish=false\n" +
            "- After manage_app changes when the user is ready to publish the appmodule\n" +
            "- After manage_web_resource changes\n" +
            "- After manage_ribbons changes (Note: you may need PublishAll for these to 'stick')\n" +
            "- When user reports changes not showing up\n" +
            "- Batch many changes then publish once at the end")]
        public CallToolResult publish_customizations(
            [Description("Comma-separated entity Display Names or logical names (e.g. 'Account,contact'). Empty with no other targets = PublishAll."
            )] string entities = "",
            [Description("Comma-separated global option set unique names to publish specifically (e.g. 'new_priority,new_status'). Use instead of include_global_optionset when you want targeted publish."
            )] string optionset_names = "",
            [Description("Publish the application (global) ribbon. Entity-level ribbons are covered by 'entities'."
            )] bool include_ribbons = false,
            [Description("Comma-separated system-form (dashboard) GUIDs to publish (e.g. 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')."
            )] string dashboards = "",
            [Description("Comma-separated web resource GUIDs or logical names to publish (e.g. 'new_/js/account.js')."
            )] string webresources = "",
            [Description("Publish ALL global option sets at once. Prefer optionset_names for targeted publish."
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

                // Named optionsets (targeted, by unique name)
                var optionSetNameList = ParseSimpleList(optionset_names);

                // Dashboard GUIDs
                var dashboardList = ParseGuidList(dashboards, "dashboards");

                // Web resource GUIDs or logical names
                var webResourceList = ResolveWebResourceList(webresources);

                var hasSpecificTargets = entityList.Count > 0 || appModuleList.Count > 0
                    || include_global_optionset || include_sitemap
                    || include_ribbons || optionSetNameList.Count > 0
                    || dashboardList.Count > 0 || webResourceList.Count > 0;

                if (_options.DryRun)
                {
                    var target = !hasSpecificTargets
                        ? "ALL customizations"
                        : BuildTargetSummary(entityList, appModuleList, include_global_optionset, include_sitemap,
                            include_ribbons, optionSetNameList, dashboardList, webResourceList);
                    return DryRun($"Would PUBLISH {target}.", new PublishResult
                    {
                        Mode = hasSpecificTargets ? "specific" : "all_async",
                        Entities = entityList.Count > 0 ? entityList : null,
                        EntityCount = hasSpecificTargets ? entityList.Count : null,
                        AppModules = appModuleList.Count > 0 ? appModuleList : null,
                        AppModuleCount = hasSpecificTargets ? appModuleList.Count : null,
                        IncludeGlobalOptionSets = include_global_optionset,
                        IncludeSiteMap = include_sitemap,
                        Status = "not_executed",
                        DurationSeconds = 0
                    });
                }

                if (!hasSpecificTargets)
                {
                    // Use async version to avoid timeout
                    var asyncRequest = new PublishAllXmlAsyncRequest();
                    var asyncResponse = (PublishAllXmlAsyncResponse)DataverseMutationExecutor.Execute(_context, _serviceClient, asyncRequest);
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

                var parameterXml = BuildParameterXml(entityList, appModuleList, include_global_optionset, include_sitemap,
                    include_ribbons, optionSetNameList, dashboardList, webResourceList);
                var request = new PublishXmlRequest { ParameterXml = parameterXml };
                DataverseMutationExecutor.Execute(_context, _serviceClient, request);

                // Wait for metadata to propagate after publish
                MetadataOperationWaitHelper.WaitForPropagation();

                sw.Stop();

                var sb = new StringBuilder();
                sb.AppendLine("[Publish] Specific customizations");
                sb.AppendLine($"Entities: {(entityList.Count == 0 ? "(none)" : string.Join(", ", entityList))}");
                sb.AppendLine($"AppModules: {(appModuleList.Count == 0 ? "(none)" : string.Join(", ", appModuleList))}");
                sb.AppendLine($"GlobalOptionSets: {(include_global_optionset ? "all" : optionSetNameList.Count > 0 ? string.Join(", ", optionSetNameList) : "no")}");
                sb.AppendLine($"Ribbons: {(include_ribbons ? "yes" : "no")}");
                sb.AppendLine($"Dashboards: {(dashboardList.Count == 0 ? "(none)" : string.Join(", ", dashboardList))}");
                sb.AppendLine($"WebResources: {(webResourceList.Count == 0 ? "(none)" : string.Join(", ", webResourceList))}");
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
                    IncludeGlobalOptionSets = include_global_optionset || optionSetNameList.Count > 0,
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
            => BuildParameterXml(entityList, new List<string>(), includeGlobalOptionSets, includeSiteMap,
                false, new List<string>(), new List<string>(), new List<string>());

        private static string BuildParameterXml(
            List<string> entityList,
            List<string> appModuleList,
            bool includeGlobalOptionSets,
            bool includeSiteMap,
            bool includeRibbons = false,
            List<string> optionSetNameList = null,
            List<string> dashboardList = null,
            List<string> webResourceList = null)
        {
            var sb = new StringBuilder();
            sb.Append("<importexportxml>");

            // Entities
            sb.Append("<entities>");
            foreach (var entity in entityList)
                sb.Append($"<entity>{entity}</entity>");
            sb.Append("</entities>");

            // App modules
            if (appModuleList?.Count > 0)
            {
                sb.Append("<appmodules>");
                foreach (var appModuleId in appModuleList)
                    sb.Append($"<appmodule>{appModuleId}</appmodule>");
                sb.Append("</appmodules>");
            }

            // Option sets: specific names take precedence; fall back to "all"
            if (optionSetNameList?.Count > 0)
            {
                sb.Append("<optionsets>");
                foreach (var name in optionSetNameList)
                    sb.Append($"<optionset>{name}</optionset>");
                sb.Append("</optionsets>");
            }
            else
            {
                sb.Append(includeGlobalOptionSets
                    ? "<optionsets><optionset>all</optionset></optionsets>"
                    : "<optionsets />");
            }

            // Ribbons (application ribbon)
            if (includeRibbons)
                sb.Append("<ribbons><ribbon /></ribbons>");

            // Dashboards
            if (dashboardList?.Count > 0)
            {
                sb.Append("<dashboards>");
                foreach (var id in dashboardList)
                    sb.Append($"<dashboard>{id}</dashboard>");
                sb.Append("</dashboards>");
            }

            // Web resources
            if (webResourceList?.Count > 0)
            {
                sb.Append("<webresources>");
                foreach (var id in webResourceList)
                    sb.Append($"<webresource>{id}</webresource>");
                sb.Append("</webresources>");
            }

            // Site map
            sb.Append(includeSiteMap ? "<sitemaps><sitemap /></sitemaps>" : "<sitemaps />");

            sb.Append("</importexportxml>");
            return sb.ToString();
        }

        private static string BuildTargetSummary(
            List<string> entityList,
            List<string> appModuleList,
            bool includeGlobalOptionSets,
            bool includeSiteMap,
            bool includeRibbons = false,
            List<string> optionSetNameList = null,
            List<string> dashboardList = null,
            List<string> webResourceList = null)
        {
            var parts = new List<string>();
            if (entityList.Count > 0)
                parts.Add($"{entityList.Count} {(entityList.Count == 1 ? "entity" : "entities")}: {string.Join(", ", entityList)}");
            if (appModuleList.Count > 0)
                parts.Add($"{appModuleList.Count} {(appModuleList.Count == 1 ? "appmodule" : "appmodules")}: {string.Join(", ", appModuleList)}");
            if (optionSetNameList?.Count > 0)
                parts.Add($"optionsets: {string.Join(", ", optionSetNameList)}");
            else if (includeGlobalOptionSets)
                parts.Add("all global option sets");
            if (includeRibbons)
                parts.Add("application ribbon");
            if (dashboardList?.Count > 0)
                parts.Add($"{dashboardList.Count} dashboard(s)");
            if (webResourceList?.Count > 0)
                parts.Add($"{webResourceList.Count} web resource(s)");
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

        /// <summary>Parse a comma-separated list of simple names/values.</summary>
        private static List<string> ParseSimpleList(string input)
        {
            if (string.IsNullOrWhiteSpace(input)) return [];
            return input.Split(',')
                .Select(s => s.Trim())
                .Where(s => !string.IsNullOrEmpty(s))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        /// <summary>Parse a comma-separated list of GUIDs, returning formatted GUID strings.</summary>
        private static List<string> ParseGuidList(string input, string paramName)
        {
            if (string.IsNullOrWhiteSpace(input)) return [];
            var result = new List<string>();
            foreach (var raw in input.Split(',').Select(s => s.Trim()).Where(s => !string.IsNullOrEmpty(s)))
            {
                var cleaned = raw.Trim('{', '}');
                if (Guid.TryParse(cleaned, out var guid))
                    result.Add(guid.ToString("D"));
                else
                    throw new InvalidOperationException($"{paramName} '{raw}' is not a valid GUID.");
            }
            return result.Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        }

        /// <summary>
        /// Resolve web resources: accept GUIDs or logical names.
        /// For logical names, look up the webresource record to get its ID.
        /// </summary>
        private List<string> ResolveWebResourceList(string input)
        {
            if (string.IsNullOrWhiteSpace(input)) return [];
            var result = new List<string>();
            foreach (var raw in input.Split(',').Select(s => s.Trim()).Where(s => !string.IsNullOrEmpty(s)))
            {
                var cleaned = raw.Trim('{', '}');
                if (Guid.TryParse(cleaned, out var guid))
                {
                    result.Add(guid.ToString("D"));
                    continue;
                }
                // Logical name lookup
                var query = new Microsoft.Xrm.Sdk.Query.QueryExpression("webresource")
                {
                    ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet("webresourceid"),
                    TopCount = 1
                };
                query.Criteria.AddCondition("name", Microsoft.Xrm.Sdk.Query.ConditionOperator.Equal, raw);
                var res = _serviceClient.RetrieveMultiple(query);
                if (res.Entities.Count == 0)
                    throw new InvalidOperationException($"webresources '{raw}': no web resource found with that name. Use manage_web_resource(action='list') to find valid names.");
                result.Add(res.Entities[0].GetAttributeValue<Guid>("webresourceid").ToString("D"));
            }
            return result.Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        }

        private CallToolResult ErrorResult(string message) => Error(message);

    }
}
