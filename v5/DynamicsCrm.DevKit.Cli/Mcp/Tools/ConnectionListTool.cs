using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public sealed class ConnectionListTool(IMcpConnectionResolver connections) : McpToolBase
    {
        [McpServerTool(Name = "connection_list", Title = "List connection groups, aliases and effective policy",
            ReadOnly = true, Idempotent = true, Destructive = false, UseStructuredContent = true,
            OutputSchemaType = typeof(ConnectionListResult)),
         Description("List configured .env connection groups, aliases, startup selection and effective per-group policy without connecting or authenticating. File changes require restarting the server.\n\n" +
            "WHEN TO USE:\n- Discover connection IDs and aliases before targeting another environment\n- Inspect effective mutation protection and configured versus applied impersonation\n\n" +
            "RELATED TOOLS:\n- get_context(action='whoami') → verify the selected connection's live identity and runtime\n- inspect_metadata(resource='tables') → compare metadata by passing a connection ID or alias as env")]
        public CallToolResult connection_list()
        {
            try
            {
                using var lease = connections.BeginInvocation();
                var groups = connections.ListGroups();
                var labels = groups.Select(g => g.Env + (g.Alias == null ? "" : $" ({g.Alias})") +
                    (g.IsStartupDefault ? " (startup)" : "") + (g.DryRun ? " (dry-run: mutations blocked)" : ""));
                return McpToolResults.Success($"Found {groups.Count} connection group(s): {string.Join(", ", labels)}.",
                    new ConnectionListResult { StartupEnv = connections.StartupEnvId, Groups = groups });
                }
            catch (System.Exception ex) { return ThrowExceptionFriendly(ex); }
        }
    }

    public sealed class ConnectionListResult
    {
        [JsonPropertyName("startupEnv")] public string StartupEnv { get; init; }
        [JsonPropertyName("groups")] public IReadOnlyList<ConnectionGroupInfo> Groups { get; init; }
        [JsonPropertyName("summary")] public string Summary { get; init; }
    }
}
