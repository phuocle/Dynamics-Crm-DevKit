using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Security;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class PublishCustomizationsTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public PublishCustomizationsTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
        {
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        // Kept as a small, deterministic formatter for callers that need to
        // inspect the PublishXml payload without connecting to Dataverse.
        private static string BuildParameterXml(List<string> entities, bool includeGlobalOptionSets, bool includeSiteMap)
        {
            var sb = new StringBuilder("<importexportxml><entities>");
            foreach (var entity in entities ?? [])
            {
                if (!string.IsNullOrWhiteSpace(entity))
                    sb.Append("<entity>").Append(SecurityElement.Escape(entity)).Append("</entity>");
            }

            sb.Append("</entities>");
            if (includeGlobalOptionSets)
                sb.Append("<optionsets><optionset>all</optionset></optionsets>");
            else
                sb.Append("<optionsets />");

            sb.Append(includeSiteMap ? "<sitemaps><sitemap /></sitemaps>" : "<sitemaps />");
            return sb.Append("</importexportxml>").ToString();
        }

        [McpServerTool(Name = "publish_customizations", Title = "Publish customizations to make changes visible",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(PublishResult)),
        Description(
            "Publish Dataverse customizations. Pass at least one target (entities/optionset_names/dashboards/webresources/appmodules/include_ribbons/include_sitemap/include_global_optionset) for targeted PublishXml; pass nothing for PublishAll (async, org-wide lock).\n\n" +
            "WHEN TO USE:\n" +
            "- After metadata mutations with auto_publish=false, or when changes are not showing up\n" +
            "- Batch many changes then publish once at the end\n\n" +
            "RELATED TOOLS:\n" +
            "- get_system_jobs → track PublishAll async operation status\n" +
            "- get_tables / manage_app / manage_webresource → discover valid target identifiers")]
        public CallToolResult publish_customizations(
            [Description("Comma-separated entity Display Names or logical names (e.g. 'Account,contact'). Empty with no other targets = PublishAll.")] string entities = "",
            [Description("Comma-separated global option set unique names (e.g. 'new_priority,new_status'). Use instead of include_global_optionset for targeted publish.")] string optionset_names = "",
            [Description("Publish the application (global) ribbon. Entity-level ribbons are covered by 'entities'.")] bool include_ribbons = false,
            [Description("Comma-separated system-form (dashboard) GUIDs to publish.")] string dashboards = "",
            [Description("Comma-separated web resource GUIDs or logical names to publish.")] string webresources = "",
            [Description("Publish ALL global option sets at once. Prefer optionset_names for targeted publish.")] bool include_global_optionset = false,
            [Description("Also publish sitemap.")] bool include_sitemap = false,
            [Description("Comma-separated appmodule GUIDs, Display Names, or unique names for model-driven apps.")] string appmodules = "")
        {
            var sw = Stopwatch.StartNew();

            try
            {
                const string requiredRoleName = DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName;
                if (!RoleGateHelper.IsSystemAdministrator(_orgService))
                {
                    var haveRoles = RoleGateHelper.GetCurrentRoleNames(_orgService);
                    var haveList = haveRoles.Count > 0
                        ? string.Join(", ", haveRoles)
                        : "(no roles assigned)";
                    return Error(
                        $"publish_customizations requires the '{requiredRoleName}' role. The calling user does not have it.",
                        $"Publishing customizations is a destructive org-wide operation (PublishXml/PublishAll acquire locks and make pending metadata changes visible to all users). " +
                        $"Ask a System Administrator to assign the '{requiredRoleName}' role to your user, then retry. " +
                        $"Current roles on the calling user: {haveList}.");
                }

                var entitiesProvided = !string.IsNullOrWhiteSpace(entities);
                var entityList = entitiesProvided ? ResolveEntityList(entities) : null;
                if (entitiesProvided && entityList is null)
                    return Error(
                        $"entities '{entities}': could not be resolved. One or more names were not found by Display Name or Logical/Unique/Schema Name.",
                        "Use get_tables to list entities before calling publish_customizations.");
                entityList ??= [];

                if (entitiesProvided && entityList.Count == 0)
                {
                    return Error(
                        "No valid entity names found after parsing the 'entities' parameter.",
                        "Valid format: comma-separated logical names (e.g., 'account,contact,lead') or leave empty to publish all customizations. Use get_tables to verify logical names.");
                }

                var appModulesProvided = !string.IsNullOrWhiteSpace(appmodules);
                var appModuleList = appModulesProvided ? ResolveAppModuleList(appmodules) : null;
                if (appModulesProvided && appModuleList is null)
                    return Error(
                        $"appmodules '{appmodules}': could not be resolved. One or more values were not found as appmodule GUID, Display Name, or unique name.",
                        "Use manage_app(action='list') to discover valid appmodule identifiers.");
                appModuleList ??= [];

                if (appModulesProvided && appModuleList.Count == 0)
                {
                    return Error(
                        "No valid appmodule values found after parsing the 'appmodules' parameter.",
                        "Valid format: comma-separated appmodule GUIDs, Display Names, or unique names. Use manage_app to discover valid appmodule identifiers.");
                }

                // Named optionsets (targeted, by unique name)
                var optionSetNameList = ParseSimpleList(optionset_names);

                // Dashboard GUIDs
                var dashboardList = ParseGuidList(dashboards);
                if (dashboardList is null)
                    return Error(
                        $"dashboards '{dashboards}': contains a value that is not a valid GUID.",
                        "Provide comma-separated system-form (dashboard) GUIDs, e.g. 'b52daa0a-996f-f111-ab0e-0022480a530f'. Use manage_form or get_solution_components to find valid dashboard IDs.");
                dashboardList ??= [];

                // Web resource GUIDs or logical names
                var webResourceList = ResolveWebResourceList(webresources);
                if (webResourceList is null)
                    return Error(
                        $"webresources '{webresources}': no web resource found with that name.",
                        "Use manage_webresource(action='list') to find valid names.");
                webResourceList ??= [];

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
                    var jobId = PublishHelper.PublishAllAsync(_context, _orgService);
                    sw.Stop();

                    var structured = new PublishResult
                    {
                        Mode = "all_async",
                        Status = "in_progress",
                        AsyncOperationId = jobId.ToString(),
                        DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1)
                    };
                    return Success(
                        $"Published ALL customizations asynchronously (AsyncOperationId {jobId}, {sw.Elapsed.TotalSeconds:F1}s). Use get_system_jobs(record_id=\"{jobId}\") to check status.",
                        structured);
                }

                var payload = new PublishTargetedPayload
                {
                    EntityNames = entityList,
                    AppModuleIds = appModuleList.Select(Guid.Parse).ToList(),
                    OptionSetNames = optionSetNameList,
                    DashboardIds = dashboardList.Select(Guid.Parse).ToList(),
                    WebResourceIds = webResourceList.Select(Guid.Parse).ToList(),
                    IncludeGlobalOptionSets = include_global_optionset,
                    IncludeRibbons = include_ribbons,
                    IncludeSiteMap = include_sitemap
                };
                var published = PublishHelper.PublishTargeted(_context, _orgService, payload, waitSeconds: 20);

                sw.Stop();

                var summary = published
                    ? $"Published {BuildTargetSummary(entityList, appModuleList, include_global_optionset, include_sitemap, include_ribbons, optionSetNameList, dashboardList, webResourceList)} ({sw.Elapsed.TotalSeconds:F1}s)."
                    : $"Publish failed for {BuildTargetSummary(entityList, appModuleList, include_global_optionset, include_sitemap, include_ribbons, optionSetNameList, dashboardList, webResourceList)} after {sw.Elapsed.TotalSeconds:F1}s.";

                var specificStructured = new PublishResult
                {
                    Mode = "specific",
                    Entities = entityList,
                    EntityCount = entityList.Count,
                    AppModules = appModuleList,
                    AppModuleCount = appModuleList.Count,
                    IncludeGlobalOptionSets = include_global_optionset || optionSetNameList.Count > 0,
                    IncludeSiteMap = include_sitemap,
                    Status = published ? "published" : "failed",
                    DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1)
                };
                return published
                    ? Success(summary, specificStructured)
                    : Error(summary,
                        "Dataverse rejected the publish batch — verify the target names via get_tables / manage_app / manage_webresource and retry. If any entity name is invalid the entire batch is rejected.",
                        specificStructured);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        /// <summary>
        /// Resolve entity names. Returns null when any name cannot be resolved —
        /// the caller returns a friendly Error with hint in that case.
        /// </summary>
        private List<string> ResolveEntityList(string entities)
        {
            var inputs = entities.Split(',')
                .Select(e => e.Trim())
                .Where(e => !string.IsNullOrEmpty(e))
                .ToList();

            var resolvedNames = new List<string>();
            foreach (var input in inputs)
            {
                var resolved = DisplayNameFirstResolver.ResolveEntity(_orgService, input, "publish_customizations");
                if (!resolved.IsSuccess)
                    return null;

                resolvedNames.Add(resolved.Value.LogicalName);
            }

            return resolvedNames
                .Where(e => !string.IsNullOrWhiteSpace(e))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        /// <summary>
        /// Resolve appmodules (GUID / Display Name / unique name). Returns null when
        /// any value cannot be resolved — the caller returns a friendly Error with hint.
        /// </summary>
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

                var resolved = DisplayNameFirstResolver.ResolveApp(_orgService, input, "publish_customizations");
                if (!resolved.IsSuccess)
                    return null;

                var appId = resolved.Value.GetAttributeValue<Guid>("appmoduleid");
                if (appId == Guid.Empty)
                    appId = resolved.Value.Id;
                if (appId == Guid.Empty)
                    return null;

                resolvedIds.Add(appId.ToString("D"));
            }

            return resolvedIds
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
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
            return parts.Count == 0 ? "specific customizations" : string.Join("; ", parts);
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

        /// <summary>
        /// Parse a comma-separated list of GUIDs, returning formatted GUID strings.
        /// Returns null when any value is not a valid GUID — the caller returns a
        /// friendly Error with hint in that case.
        /// </summary>
        private static List<string> ParseGuidList(string input)
        {
            if (string.IsNullOrWhiteSpace(input)) return [];
            var result = new List<string>();
            foreach (var raw in input.Split(',').Select(s => s.Trim()).Where(s => !string.IsNullOrEmpty(s)))
            {
                var cleaned = raw.Trim('{', '}');
                if (Guid.TryParse(cleaned, out var guid))
                    result.Add(guid.ToString("D"));
                else
                    return null;
            }
            return result.Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        }

        /// <summary>
        /// Resolve web resources: accept GUIDs or logical names.
        /// For logical names, look up the webresource record to get its ID.
        /// Returns null when a logical name is not found — the caller returns a
        /// friendly Error with hint in that case.
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
                var res = _orgService.RetrieveMultiple(query);
                if (res.Entities.Count == 0)
                    return null;
                result.Add(res.Entities[0].GetAttributeValue<Guid>("webresourceid").ToString("D"));
            }
            return result.Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        }

    }
}
