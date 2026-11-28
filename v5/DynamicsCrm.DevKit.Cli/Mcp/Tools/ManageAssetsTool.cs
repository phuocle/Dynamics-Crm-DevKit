#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
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
    public sealed class ManageAssetsTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] WebResourceKeys =
        [
            "display_name", "description", "file_path", "type", "type_filter", "max_records", "include_content"
        ];

        private static readonly string[] ReportKeys =
        [
            "file_path", "description", "language", "name_filter", "max_records",
            "dataset_name", "fetchxml", "entity_name", "output_folder", "prefilter"
        ];

        [McpServerTool(
            Name = "manage_assets",
            Title = "Manage Dataverse web resources and SSRS reports",
            ReadOnly = false,
            Idempotent = false,
            Destructive = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Manage file-backed Dataverse assets: Web Resources (JS, HTML, CSS, XML, PNG, JPG, GIF, XAP, XSL, ICO, SVG, RESX) and SSRS Reports (including local RDL dataset authoring).\n\n" +
            "RESOURCES & ACTIONS:\n" +
            "- 'webresource': list | detail | create | update | delete\n" +
            "- 'report': list | detail | create | download | update | add_dataset | update_dataset (read docs://instructions_for_manage_report & docs://instructions_for_views)")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'webresource' or 'report'.")] string? resource = null,
            [Description("Action: webresource='list'|'detail'|'create'|'update'|'delete'; report='list'|'detail'|'create'|'download'|'update'|'add_dataset'|'update_dataset'.")] string? action = null,
            [Description("Target selector: web_resource_id (GUID/Display/unique name) or report_id (GUID, name, or .rdl filename).")] string? id = null,
            [Description("webresource: unique name (create) or contains filter (list); report: new report name (create) or name_filter (list).")] string? name = null,
            [Description("Unmanaged solution Display or unique name.")] string? solution_name = null,
            [Description("Resource-specific JSON object. webresource: {display_name, description, file_path, type, type_filter, max_records, include_content}. report: {file_path, description, language, name_filter, max_records, dataset_name, fetchxml, entity_name, output_folder, prefilter}.")] JsonObject? payload = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error("resource is required.", "Valid values: 'webresource', 'report'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("webresource" or "report"))
                return Task.FromResult(Error($"Invalid resource '{resource.Trim()}'.", "Valid values: 'webresource', 'report'."));

            var p = McpPayload.From(payload);
            var (allowedKeys, docUri) = normalizedResource == "webresource"
                ? (WebResourceKeys, (string?)null)
                : (ReportKeys, "docs://instructions_for_manage_report");
            var keyError = p.ValidateAllowedKeys(allowedKeys, $"manage_assets({normalizedResource})", docUri);
            if (keyError != null)
                return Task.FromResult(keyError);

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    if (normalizedResource == "webresource")
                    {
                        var includeContent = p.GetBool("include_content", false);
                        var worker = new ManageWebResourceTool(conn.OrgService, conn.Options, conn.Context)
                        {
                            _envId = conn.EnvId
                        };
                        if (includeContent && string.Equals(action?.Trim(), "detail", StringComparison.OrdinalIgnoreCase))
                            worker._workspaceFolder = await WorkspaceFolderHelper.GetAsync(server, cancellationToken).ConfigureAwait(false);

                        return worker.manage_webresource(
                            action ?? "",
                            id ?? "",
                            name ?? "",
                            p.GetString("display_name"),
                            p.GetString("description"),
                            p.GetString("file_path"),
                            p.GetString("type"),
                            solution_name ?? "",
                            p.GetString("type_filter"),
                            p.GetInt("max_records", 50),
                            includeContent);
                    }

                    var nameFilter = p.HasKey("name_filter") ? p.GetString("name_filter") : (name ?? "");
                    return await new ManageReportTool(conn.OrgServiceAsync, conn.Options, conn.Context, conn.ConnectionInfo).manage_report(
                        server,
                        action ?? "",
                        id ?? "",
                        p.GetString("file_path"),
                        name ?? "",
                        p.GetString("description"),
                        p.GetString("language"),
                        solution_name ?? "",
                        nameFilter,
                        p.GetInt("max_records", 50),
                        p.GetString("dataset_name"),
                        p.GetString("fetchxml"),
                        p.GetString("entity_name"),
                        p.GetString("output_folder"),
                        p.GetBool("prefilter", true)).ConfigureAwait(false);
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, "Check payload types and retry.");
                }
            }, cancellationToken);
        }
    }
}
