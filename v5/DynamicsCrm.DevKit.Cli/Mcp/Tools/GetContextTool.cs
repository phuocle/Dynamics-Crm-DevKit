#nullable enable
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
    public sealed class GetContextTool(IMcpConnectionResolver connections) : McpToolBase
    {
        [McpServerTool(
            Name = "get_context",
            Title = "Inspect connection identity, .env groups, or parse Dataverse URL",
            ReadOnly = true,
            Idempotent = true,
            Destructive = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Inspect the active Dataverse identity/runtime, list configured .env connection groups offline, or parse a Dynamics 365/Power Platform URL or GUID.\n\n" +
            "ACTIONS:\n" +
            "- 'whoami' (default): verify live user, org, direct roles, dry-run policy, and DevKit process version/build/SHA\n" +
            "- 'connections': list .env connection groups, aliases, startup selection, and per-group policy without connecting\n" +
            "- 'parse_url': parse a main.aspx, Web API, maker/admin portal, or legacy URL (or raw GUID) into entity + recordId")]
        public Task<CallToolResult> InvokeAsync(
            [Description("'whoami' (default), 'connections' (offline), or 'parse_url'.")] string? action = "whoami",
            [Description("Required for action='parse_url': Dynamics 365 URL, Web API URL, maker portal URL, or raw GUID.")] string? input = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            var normalizedAction = string.IsNullOrWhiteSpace(action)
                ? "whoami"
                : action.Trim().ToLowerInvariant();

            switch (normalizedAction)
            {
                case "connections":
                    if (!string.IsNullOrWhiteSpace(env))
                        return Task.FromResult(Error(
                            "env is not used with action='connections'.",
                            "Call get_context(action='connections') without env to list all configured .env connection groups."));
                    return Task.FromResult(new ConnectionListTool(connections).connection_list());

                case "whoami":
                    return McpToolInvocation.InvokeAsync(connections, env, conn =>
                    {
                        var worker = new WhoAmITool(conn.OrgService, conn.Context, conn.ConnectionInfo)
                        {
                            RoutingEnvId = conn.EnvId
                        };
                        return Task.FromResult(worker.whoami());
                    }, cancellationToken);

                case "parse_url":
                    return McpToolInvocation.InvokeAsync(connections, env, conn =>
                    {
                        var worker = new ParseRecordUrlTool(conn.OrgService);
                        return Task.FromResult(worker.parse_record_url(input ?? ""));
                    }, cancellationToken);

                default:
                    return Task.FromResult(Error(
                        $"Invalid action '{action?.Trim()}'.",
                        "Valid values: 'whoami', 'connections', 'parse_url'."));
            }
        }
    }
}
