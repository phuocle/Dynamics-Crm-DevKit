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
    public sealed class InspectAutomationTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] PluginOptionKeys =
        [
            "message_name", "type_name", "stage", "mode", "active_only",
            "include_images", "include_config", "download", "assembly_id", "package_id", "package_name"
        ];
        private static readonly string[] WorkflowOptionKeys = ["mode", "trigger_field"];
        private static readonly string[] FlowOptionKeys = ["action", "owner_filter", "status_filter", "minutes_ago"];
        private static readonly string[] BpfOptionKeys = ["include_stages"];
        private static readonly string[] BusinessRuleOptionKeys = [];
        private static readonly string[] MessageOptionKeys = ["include_custom_actions"];

        [McpServerTool(
            Name = "inspect_automation",
            Title = "Inspect plugins, workflows, cloud flows, BPFs, business rules, and SDK messages",
            ReadOnly = true,
            Idempotent = true,
            Destructive = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Inspect Dataverse server-side logic and automation definitions. Read docs://server_logic_guide for filtering and list/detail modes.\n\n" +
            "RESOURCES:\n" +
            "- 'plugins': assemblies, types, steps, images, or download DLL/.nupkg (options.download=true)\n" +
            "- 'workflows': classic background/realtime workflows (id set = detail with decompiled XAML)\n" +
            "- 'flows': Power Automate cloud flows and run history (options.action='runs' with id)\n" +
            "- 'bpfs': Business Process Flows and stages\n" +
            "- 'business_rules': client-side business rules for entity_name (decompiled DSL steps in detail)\n" +
            "- 'messages': SDK messages and legacy workflow Custom Actions (MIGRATION RULE: inspect/convert ONE custom action at a time in detail mode)")]
        public Task<CallToolResult> InvokeAsync(
            McpServer? server = null,
            [Description("Required: 'plugins', 'workflows', 'flows', 'bpfs', 'business_rules', or 'messages'.")] string? resource = null,
            [Description("Entity Display/logical name filter (required for business_rules; 'none'/empty = global for messages).")] string? entity_name = null,
            [Description("GUID for detail mode (workflow_id, flow_id, bpf_id, rule_id; or assembly_id for plugins download).")] string? id = null,
            [Description("Name filter/selector (plugins: assembly_name; workflows/flows: name_filter; bpfs: bpf_name; messages: message_name → detail).")] string? name = null,
            [Description("State filter. Defaults: workflows='active', flows='active', bpfs='all', business_rules='' (all).")] string? status = null,
            [Description("List cap. Defaults: plugins/messages=100, others=50.")] int? max_records = null,
            [Description("Resource-specific options. plugins: {message_name, type_name, stage, mode, active_only, include_images, include_config, download, assembly_id, package_id, package_name}. workflows: {mode, trigger_field}. flows: {action ('list'|'runs'), owner_filter, status_filter, minutes_ago}. bpfs: {include_stages}. messages: {include_custom_actions}.")] JsonObject? options = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error(
                    "resource is required.",
                    "Valid values: 'plugins', 'workflows', 'flows', 'bpfs', 'business_rules', 'messages'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("plugins" or "workflows" or "flows" or "bpfs" or "business_rules" or "messages"))
                return Task.FromResult(Error(
                    $"Invalid resource '{resource.Trim()}'.",
                    "Valid values: 'plugins', 'workflows', 'flows', 'bpfs', 'business_rules', 'messages'."));

            var payload = McpPayload.From(options);
            var allowedKeys = normalizedResource switch
            {
                "plugins" => PluginOptionKeys,
                "workflows" => WorkflowOptionKeys,
                "flows" => FlowOptionKeys,
                "bpfs" => BpfOptionKeys,
                "business_rules" => BusinessRuleOptionKeys,
                _ => MessageOptionKeys
            };
            var keyError = payload.ValidateAllowedKeys(allowedKeys, $"inspect_automation({normalizedResource})", "docs://server_logic_guide");
            if (keyError != null)
                return Task.FromResult(keyError);

            return McpToolInvocation.InvokeAsync(connections, env, async conn =>
            {
                try
                {
                    return normalizedResource switch
                    {
                        "plugins" => await new GetPluginsTool(conn.OrgService).get_plugins(
                            name ?? "",
                            entity_name ?? "",
                            payload.GetString("message_name", ""),
                            payload.GetString("type_name", ""),
                            payload.GetBool("include_images", true),
                            payload.GetBool("include_config", false),
                            payload.GetString("stage", ""),
                            payload.GetString("mode", ""),
                            payload.GetBool("active_only", true),
                            max_records ?? 100,
                            payload.GetBool("download", false),
                            payload.GetString("assembly_id", id ?? ""),
                            server,
                            payload.GetString("package_id", ""),
                            payload.GetString("package_name", "")).ConfigureAwait(false),

                        "workflows" => new GetWorkflowsTool(conn.OrgService).get_workflows(
                            id ?? "",
                            entity_name ?? "",
                            payload.GetString("mode", ""),
                            status ?? "active",
                            payload.GetString("trigger_field", ""),
                            name ?? "",
                            max_records ?? 50),

                        "flows" => new GetFlowsTool(conn.OrgService).get_flows(
                            id ?? "",
                            payload.GetString("action", "list"),
                            name ?? "",
                            payload.GetString("owner_filter", ""),
                            status ?? "active",
                            payload.GetString("status_filter", ""),
                            payload.GetInt("minutes_ago", 1440),
                            max_records ?? 50),

                        "bpfs" => new GetBusinessProcessFlowsTool(conn.OrgService).get_business_process_flows(
                            id,
                            name,
                            entity_name,
                            status ?? "all",
                            payload.GetBool("include_stages", false),
                            max_records ?? 50),

                        "business_rules" => new GetBusinessRulesTool(conn.OrgService).get_business_rules(
                            entity_name ?? "",
                            id ?? "",
                            status ?? "",
                            max_records ?? 50),

                        _ => await new GetMessagesTool(conn.Metadata, conn.OrgService).get_messages(
                            string.IsNullOrWhiteSpace(entity_name) ? "none" : entity_name,
                            name ?? "",
                            payload.GetBool("include_custom_actions", true),
                            max_records ?? 100).ConfigureAwait(false)
                    };
                }
                catch (ArgumentException ex)
                {
                    return Error(ex.Message, "Check options types and retry.");
                }
            }, cancellationToken);
        }
    }
}
