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
    public sealed class InspectDiagnosticsTool(IMcpConnectionResolver connections) : McpToolBase
    {
        private static readonly string[] AuditOptionKeys = ["user_filter", "operation", "attribute_name", "from_date", "to_date"];
        private static readonly string[] PluginTraceOptionKeys = ["type_name", "message_name", "mode"];
        private static readonly string[] SystemJobOptionKeys = ["status", "operation_type", "name_filter"];

        [McpServerTool(
            Name = "inspect_diagnostics",
            Title = "Inspect audit history, plugin trace logs, and async system jobs",
            ReadOnly = true,
            Idempotent = true,
            Destructive = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(JsonObject)),
        Description(
            "Inspect Dataverse runtime diagnostics, execution traces, and audit history.\n\n" +
            "RESOURCES:\n" +
            "- 'audit': browse recent audit events or inspect field-level changes for one record (record_id + entity_name)\n" +
            "- 'plugin_traces': list recent plugin trace logs or inspect one trace by record_id\n" +
            "- 'system_jobs': list asynchronous system jobs (default status='failed') or inspect one job by record_id")]
        public Task<CallToolResult> InvokeAsync(
            [Description("Required: 'audit', 'plugin_traces', or 'system_jobs'.")] string? resource = null,
            [Description("GUID → detail mode (audit record GUID [requires entity_name], plugintracelog GUID, or asyncoperation GUID). Empty = list.")] string? record_id = null,
            [Description("Entity Display/logical name filter (required with record_id for audit).")] string? entity_name = null,
            [Description("Lookback minutes (max 43200). Defaults: audit=1440, plugin_traces=60, system_jobs=1440.")] int? minutes_ago = null,
            [Description("List cap (default 50; max: audit/system_jobs=500, plugin_traces=200).")] int? max_records = null,
            [Description("GUID to trace one request across plugin_traces or system_jobs.")] string? correlation_id = null,
            [Description("Resource-specific filters. audit: {user_filter, operation, attribute_name, from_date, to_date}. plugin_traces: {type_name, message_name, mode ('sync'|'async')}. system_jobs: {status ('failed'|'succeeded'|'waiting'|'in_progress'|'canceled'|'all'), operation_type, name_filter}.")] JsonObject? options = null,
            [Description(McpToolInvocation.EnvDescription)] string? env = null,
            CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(resource))
                return Task.FromResult(Error(
                    "resource is required.",
                    "Valid values: 'audit', 'plugin_traces', 'system_jobs'."));

            var normalizedResource = resource.Trim().ToLowerInvariant();
            if (normalizedResource is not ("audit" or "plugin_traces" or "system_jobs"))
                return Task.FromResult(Error(
                    $"Invalid resource '{resource.Trim()}'.",
                    "Valid values: 'audit', 'plugin_traces', 'system_jobs'."));

            var payload = McpPayload.From(options);
            var allowedKeys = normalizedResource switch
            {
                "audit" => AuditOptionKeys,
                "plugin_traces" => PluginTraceOptionKeys,
                _ => SystemJobOptionKeys
            };
            var keyError = payload.ValidateAllowedKeys(allowedKeys, $"inspect_diagnostics({normalizedResource})");
            if (keyError != null)
                return Task.FromResult(keyError);

            return McpToolInvocation.InvokeAsync(connections, env, conn =>
            {
                try
                {
                    var result = normalizedResource switch
                    {
                        "audit" => new GetAuditHistoryTool(conn.OrgService).get_audit_history(
                            entity_name ?? "",
                            record_id ?? "",
                            minutes_ago ?? 1440,
                            payload.GetString("user_filter", ""),
                            payload.GetString("operation", ""),
                            payload.GetString("attribute_name", ""),
                            max_records ?? 50,
                            payload.GetString("from_date", ""),
                            payload.GetString("to_date", "")),

                        "plugin_traces" => new GetPluginTraceLogsTool(conn.OrgService).get_plugin_trace_logs(
                            record_id ?? "",
                            payload.GetString("type_name", ""),
                            entity_name ?? "",
                            payload.GetString("message_name", ""),
                            payload.GetString("mode", ""),
                            correlation_id ?? "",
                            minutes_ago ?? 0,
                            max_records ?? 50),

                        _ => new GetSystemJobsTool(conn.OrgService).get_system_jobs(
                            record_id ?? "",
                            entity_name ?? "",
                            payload.GetString("status", "failed"),
                            payload.GetString("operation_type", ""),
                            payload.GetString("name_filter", ""),
                            correlation_id ?? "",
                            minutes_ago ?? 0,
                            max_records ?? 50)
                    };
                    return Task.FromResult(result);
                }
                catch (ArgumentException ex)
                {
                    return Task.FromResult(Error(ex.Message, "Check options types and retry."));
                }
            }, cancellationToken);
        }
    }
}
