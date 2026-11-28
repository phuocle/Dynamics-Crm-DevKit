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
    public sealed class ManageCommandingTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] RibbonKeys =
        [
            "operations", "ribbonxml"
        ];

        private static readonly string[] CommandKeys =
        [
            "location", "app_id", "label", "onclick_type", "javascript_webresource",
            "javascript_function", "font_icon", "icon_webresource", "tooltip_title",
            "tooltip_description", "sequence", "hidden", "app_name", "origin",
            "action_type", "name_filter", "include_rules", "include_children",
            "max_records", "items", "flyout_command_id", "scope", "uniquename"
        ];

        [McpServerTool(
            Name = "manage_commanding",
            Title = "Manage Dataverse classic ribbon buttons and modern command bar actions",
            ReadOnly = false,
            Idempotent = false,
            Destructive = true,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Manage Dataverse command bar buttons via classic RibbonDiffXml ('ribbon') or modern Power Fx appaction ('command').\n\n" +
            "CRITICAL ROUTING GUARDRAIL:\n" +
            "- DEFAULT to resource='ribbon' (classic RibbonDiffXml via devkit-ribbon solution) for ANY generic, classic, Ribbon Workbench, or JavaScript button request.\n" +
            "- Use resource='command' (modern appaction) ONLY when the user EXPLICITLY asks for modern command bar, Power Fx command, appaction, or Command Designer. When in doubt, use 'ribbon'.\n\n" +
            "RESOURCES & ACTIONS:\n" +
            "- 'ribbon': list | buttons | detail | update | undo (read docs://instructions_for_manage_ribbon)\n" +
            "- 'command': list | detail | create | update | delete | hide | show | add_flyout | update_flyout | add_flyout_item | remove_flyout_item | add_split_button | update_split_button (read docs://instructions_for_manage_command)")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'ribbon' (classic RibbonDiffXml — DEFAULT for buttons) or 'command' (modern Power Fx appaction ONLY when explicitly requested).")] string? resource = null,
            [Description("Action for the selected resource (ribbon: list|buttons|detail|update|undo; command: list|detail|create|update|delete|hide|show|add_flyout|update_flyout|add_flyout_item|remove_flyout_item|add_split_button|update_split_button).")] string? action = null,
            [Description("Entity Display or logical name (e.g. 'account').")] string? entity_name = null,
            [Description("command only: appaction GUID (command_id).")] string? id = null,
            [Description("command only: unmanaged solution Display or unique name.")] string? solution_name = null,
            [Description("Resource-specific JSON object. ribbon: {operations, ribbonxml}. command: {location, app_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden, app_name, origin, action_type, name_filter, include_rules, include_children, max_records, items, flyout_command_id, scope, uniquename}.")] JsonObject? payload = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error("resource is required.", "Valid values: 'ribbon' (classic default) or 'command' (modern appaction)."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("ribbon" or "command"))
                return Task.FromResult(Error($"Invalid resource '{resource.Trim()}'.", "Valid values: 'ribbon' (classic default) or 'command' (modern appaction)."));

            var p = McpPayload.From(payload);
            var (allowedKeys, docUri) = normalizedResource == "ribbon"
                ? (RibbonKeys, "docs://instructions_for_manage_ribbon")
                : (CommandKeys, "docs://instructions_for_manage_command");
            var keyError = p.ValidateAllowedKeys(allowedKeys, $"manage_commanding({normalizedResource})", docUri);
            if (keyError != null)
                return Task.FromResult(keyError);

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    if (normalizedResource == "ribbon")
                    {
                        return await new ManageRibbonTool(conn.OrgService, conn.Options, conn.Context).manage_ribbon(
                            server,
                            action ?? "",
                            entity_name ?? "",
                            p.GetJsonString("operations"),
                            p.GetString("ribbonxml")).ConfigureAwait(false);
                    }

                    return new ManageCommandTool(conn.OrgService, conn.Options, conn.Context).manage_command(
                        action ?? "",
                        id ?? "",
                        entity_name ?? "",
                        p.GetString("location"),
                        p.GetString("app_id"),
                        p.GetString("label"),
                        p.GetString("onclick_type"),
                        p.GetString("javascript_webresource"),
                        p.GetString("javascript_function"),
                        p.GetString("font_icon"),
                        p.GetString("icon_webresource"),
                        p.GetString("tooltip_title"),
                        p.GetString("tooltip_description"),
                        p.GetInt("sequence", 0),
                        p.GetBool("hidden", false),
                        p.GetString("app_name"),
                        p.GetString("origin"),
                        p.GetString("action_type"),
                        p.GetString("name_filter"),
                        p.GetBool("include_rules", false),
                        p.GetBool("include_children", false),
                        p.GetInt("max_records", 50),
                        p.GetJsonString("items"),
                        p.GetString("flyout_command_id"),
                        p.GetString("scope"),
                        solution_name ?? "",
                        p.GetString("uniquename"));
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, $"Check payload types and retry. Read {docUri} for details.");
                }
            }, cancellationToken);
        }
    }
}
