#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Routing;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public sealed class ManageUiTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] FormKeys =
        [
            "form_type", "include_formxml", "formxml", "operations"
        ];

        private static readonly string[] ViewKeys =
        [
            "is_personal_view", "fetchxml", "layoutxml", "cell_updates_json", "include_layoutjson", "description"
        ];

        private static readonly string[] ChartKeys =
        [
            "chart_type", "group_by_column", "aggregate_column", "aggregate_type", "measures",
            "filter", "presentationdescription", "description", "validate", "publish", "confirmed"
        ];

        private static readonly string[] AppKeys =
        [
            "app", "app_name", "display_name", "unique_name", "description", "icon_webresource",
            "operations", "max_records", "view_ids", "form_ids", "dashboard_ids", "chart_ids"
        ];

        [McpServerTool(
            Name = "manage_ui",
            Title = "Manage Dataverse forms, views, charts, and model-driven apps",
            ReadOnly = false,
            Idempotent = false,
            Destructive = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Manage Model-Driven App UI artifacts: forms & system dashboards, system/personal views, system charts, and model-driven apps (SiteMap navigation + app components).\n\n" +
            "RESOURCES & ACTIONS:\n" +
            "- 'form': list | detail | navigation_list | create | update | rename | undo (read docs://instructions_for_formxml & schema://formxml)\n" +
            "- 'view': list | detail | create | update | rename | set_default | undo (read docs://instructions_for_views & schema://layoutxml)\n" +
            "- 'chart': list | detail | create | update | rename | set_default | undo\n" +
            "- 'app': list | detail (default) | create | update | update_navigation | add_components | remove_components | validate | undo (read docs://instructions_for_manage_app & schema://sitemapxml)\n\n" +
            "Also see docs://schema_tools_guide. For buttons/command bars use manage_commanding.")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'form', 'view', 'chart', or 'app'.")] string? resource = null,
            [Description("Action for the selected resource (e.g. 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'update_navigation', 'add_components', 'remove_components', 'validate', 'undo').")] string? action = null,
            [Description("Entity Display or logical name (omit for system dashboard form_type=0 or app list/create).")] string? entity_name = null,
            [Description("Target GUID: form_id, view_id, chart_id, or app GUID.")] string? id = null,
            [Description("Target name or filter: form_name, view_name, chart_name, or app name/unique_name.")] string? name = null,
            [Description("Unmanaged solution Display or unique name.")] string? solution_name = null,
            [Description("Resource-specific JSON object. form: {form_type, include_formxml, formxml, operations}. view: {is_personal_view, fetchxml, layoutxml, cell_updates_json, include_layoutjson, description}. chart: {chart_type, group_by_column, aggregate_column, aggregate_type, measures, filter, presentationdescription, description, validate, publish, confirmed}. app: {app, app_name, display_name, unique_name, description, icon_webresource, operations, max_records, view_ids, form_ids, dashboard_ids, chart_ids}.")] JsonObject? payload = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error("resource is required.", "Valid values: 'form', 'view', 'chart', 'app'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("form" or "view" or "chart" or "app"))
                return Task.FromResult(Error($"Invalid resource '{resource.Trim()}'.", "Valid values: 'form', 'view', 'chart', 'app'."));

            var p = McpPayload.From(payload);
            var (allowedKeys, docUri) = normalizedResource switch
            {
                "form" => (FormKeys, "docs://instructions_for_formxml"),
                "view" => (ViewKeys, "docs://instructions_for_views"),
                "chart" => (ChartKeys, (string?)null),
                _ => (AppKeys, "docs://instructions_for_manage_app")
            };
            var keyError = p.ValidateAllowedKeys(allowedKeys, $"manage_ui({normalizedResource})", docUri);
            if (keyError != null)
                return Task.FromResult(keyError);

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    switch (normalizedResource)
                    {
                        case "form":
                            return await new ManageFormTool(conn.OrgService, conn.Options, conn.Context).manage_form(
                                server,
                                action ?? "",
                                entity_name ?? "",
                                id ?? "",
                                name ?? "",
                                p.GetInt("form_type", 0),
                                p.GetBool("include_formxml", false),
                                p.GetString("formxml"),
                                p.GetJsonString("operations"),
                                solution_name ?? "").ConfigureAwait(false);

                        case "view":
                            return await new ManageViewTool(conn.OrgService, conn.Options, conn.Context, conn.WebApi).manage_view(
                                server,
                                action ?? "",
                                entity_name ?? "",
                                id ?? "",
                                name ?? "",
                                p.GetBool("is_personal_view", false),
                                p.GetString("fetchxml"),
                                p.GetString("layoutxml"),
                                p.GetJsonString("cell_updates_json"),
                                p.GetBool("include_layoutjson", false),
                                p.GetNullableString("description"),
                                solution_name).ConfigureAwait(false);

                        case "chart":
                            return await new ManageChartTool(conn.OrgService, conn.Options, conn.Context).manage_chart(
                                server,
                                action ?? "",
                                entity_name ?? "",
                                id ?? "",
                                name ?? "",
                                p.GetString("chart_type"),
                                p.GetString("group_by_column"),
                                p.GetString("aggregate_column"),
                                p.GetString("aggregate_type"),
                                p.GetString("measures"),
                                p.GetString("filter"),
                                p.GetString("presentationdescription"),
                                p.GetString("description"),
                                solution_name ?? "",
                                p.GetBool("validate", true),
                                p.GetBool("publish", true),
                                p.GetBool("confirmed", false)).ConfigureAwait(false);

                        default:
                        {
                            var appSelector = !string.IsNullOrWhiteSpace(id)
                                ? id
                                : (!string.IsNullOrWhiteSpace(name) ? name : p.GetString("app"));
                            var appNameFilter = p.HasKey("app_name") ? p.GetString("app_name") : (name ?? "");
                            return await new ManageAppTool(conn.OrgService, conn.Options, conn.Context).manage_app(
                                server,
                                string.IsNullOrWhiteSpace(action) ? "detail" : action,
                                appSelector,
                                appNameFilter,
                                solution_name ?? "",
                                p.GetString("display_name"),
                                p.GetString("unique_name"),
                                p.GetString("description"),
                                p.GetString("icon_webresource"),
                                p.GetJsonString("operations"),
                                p.GetInt("max_records", 100),
                                entity_name ?? "",
                                p.GetStringArray("view_ids"),
                                p.GetStringArray("form_ids"),
                                p.GetStringArray("dashboard_ids"),
                                p.GetStringArray("chart_ids")).ConfigureAwait(false);
                        }
                    }
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, "Check payload types and retry.");
                }
            }, cancellationToken);
        }
    }
}
