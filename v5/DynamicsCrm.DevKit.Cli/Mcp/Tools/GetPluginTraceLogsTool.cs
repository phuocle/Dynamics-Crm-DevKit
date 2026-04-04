using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetPluginTraceLogsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetPluginTraceLogsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_plugin_trace_logs", Title = "Query plugin execution trace logs",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Query plugin execution trace logs from Dataverse for debugging. " +
            "Returns log entries with trace output, exception details, and execution timing.\n\n" +

            "TWO MODES:\n" +
            "- record_id PROVIDED: FULL detail (complete messageblock + exceptiondetails, never truncated)\n" +
            "- record_id EMPTY: compact list (metadata only — typename, message, entity, mode, depth, duration)\n\n" +

            "WHEN TO USE:\n" +
            "- Debug a failing plugin or verify plugin execution after deployment\n" +
            "- Trace all plugins for a single request using correlation_id\n\n" +

            "TIPS:\n" +
            "- Plugin Trace Log must be enabled in Dataverse (System Settings > Customization)\n" +
            "- Browse first (no record_id), then get full detail with record_id")]
        public string get_plugin_trace_logs(
            [Description(
                "Specific plugin trace log GUID for full detail. " +
                "When provided, ALL other filters are ignored. Use parse_record_url to extract from a URL."
            )] string record_id = "",
            [Description(
                "Filter by plugin type name (contains match). E.g., 'AccountPlugin'."
            )] string type_name = "",
            [Description(
                "Return logs from last N minutes. Default: 60. Max: 1440 (24h)."
            )] int minutes_ago = 60,
            [Description(
                "Filter by correlation ID (exact GUID) to trace all plugins from one request."
            )] string correlation_id = "",
            [Description(
                "Filter by SDK message: 'Create', 'Update', 'Delete', etc."
            )] string message_name = "",
            [Description(
                "Filter by mode: 'sync' or 'async'. Empty for both."
            )] string mode = "",
            [Description(
                "Max log entries. Default: 50. Max: 200."
            )] int max_records = 50)
        {
            // Detail mode: fetch one specific record with ALL fields
            if (!string.IsNullOrWhiteSpace(record_id))
            {
                if (!Guid.TryParse(record_id.Trim(), out var id))
                    return $"Error: '{record_id}' is not a valid GUID.";

                try
                {
                    var entity = _serviceClient.Retrieve("plugintracelog", id, new ColumnSet(true));
                    return FormatDetailRecord(entity);
                }
                catch (Exception ex)
                {
                    return $"Error: Failed to retrieve plugin trace log: {ex.Message}";
                }
            }

            // List mode: fetch multiple records WITHOUT messageblock/exceptiondetails
            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeLower = mode.Trim().ToLowerInvariant();
                if (modeLower != "sync" && modeLower != "synchronous" && modeLower != "async" && modeLower != "asynchronous")
                    return $"Error: Invalid mode '{mode.Trim()}'. Use 'sync' or 'async'.";
            }

            if (!string.IsNullOrWhiteSpace(correlation_id) && !Guid.TryParse(correlation_id.Trim(), out _))
                return $"Error: '{correlation_id.Trim()}' is not a valid GUID for correlation_id.";

            var requestedMinutesAgo = minutes_ago;
            if (minutes_ago < 1) minutes_ago = 60;
            if (minutes_ago > 1440) minutes_ago = 1440;
            if (max_records < 1) max_records = 50;
            if (max_records > 200) max_records = 200;
            var clampedNote = requestedMinutesAgo != minutes_ago
                ? $"Note: minutes_ago was adjusted from {requestedMinutesAgo} to {minutes_ago} (valid range: 1–1440).\n"
                : "";

            try
            {
                var fetchXml = BuildListFetchXml(type_name, minutes_ago, correlation_id, message_name, mode, max_records);
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

                if (result.Entities.Count == 0)
                    return clampedNote + FormatNoResults(type_name, minutes_ago, correlation_id, message_name, mode);

                return clampedNote + FormatListMode(result.Entities, minutes_ago);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve plugin trace logs: {ex.Message}";
            }
        }

        private static string BuildListFetchXml(string typeName, int minutesAgo, string correlationId, string messageName, string mode, int maxRecords)
        {
            var sb = new StringBuilder(512);
            sb.Append($"<fetch top='{maxRecords}'>");
            sb.Append("<entity name='plugintracelog'>");
            // List mode: metadata columns ONLY — no messageblock/exceptiondetails (token savings)
            sb.Append("<attribute name='plugintracelogid'/>");
            sb.Append("<attribute name='typename'/>");
            sb.Append("<attribute name='messagename'/>");
            sb.Append("<attribute name='primaryentity'/>");
            sb.Append("<attribute name='mode'/>");
            sb.Append("<attribute name='depth'/>");
            sb.Append("<attribute name='performanceexecutionduration'/>");
            sb.Append("<attribute name='correlationid'/>");
            sb.Append("<attribute name='createdon'/>");
            sb.Append("<filter type='and'>");
            var sinceUtc = DateTime.UtcNow.AddMinutes(-minutesAgo).ToString("yyyy-MM-ddTHH:mm:ssZ");
            sb.Append($"<condition attribute='createdon' operator='ge' value='{sinceUtc}'/>");

            if (!string.IsNullOrWhiteSpace(typeName))
                sb.Append($"<condition attribute='typename' operator='like' value='%{EscapeXml(typeName.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(correlationId) && Guid.TryParse(correlationId.Trim(), out _))
                sb.Append($"<condition attribute='correlationid' operator='eq' value='{EscapeXml(correlationId.Trim())}'/>");

            if (!string.IsNullOrWhiteSpace(messageName))
                sb.Append($"<condition attribute='messagename' operator='eq' value='{EscapeXml(messageName.Trim())}'/>");

            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeValue = mode.Trim().ToLowerInvariant() switch
                {
                    "sync" or "synchronous" => "0",
                    "async" or "asynchronous" => "1",
                    _ => null
                };
                if (modeValue != null)
                    sb.Append($"<condition attribute='mode' operator='eq' value='{modeValue}'/>");
            }

            sb.Append("</filter>");
            sb.Append("<order attribute='createdon' descending='true'/>");
            sb.Append("</entity>");
            sb.Append("</fetch>");
            return sb.ToString();
        }

        private static string FormatNoResults(string typeName, int minutesAgo, string correlationId, string messageName, string mode)
        {
            var sb = new StringBuilder(256);
            sb.AppendLine("[PluginTraceLogs] 0 logs found");

            var filters = new List<string>();
            if (!string.IsNullOrWhiteSpace(typeName))
                filters.Add($"typename contains \"{typeName}\"");
            if (!string.IsNullOrWhiteSpace(correlationId))
                filters.Add($"correlationid = \"{correlationId}\"");
            if (!string.IsNullOrWhiteSpace(messageName))
                filters.Add($"message = \"{messageName}\"");
            if (!string.IsNullOrWhiteSpace(mode))
                filters.Add($"mode = \"{mode}\"");
            filters.Add($"last {minutesAgo} minutes");

            sb.AppendLine($"Filters: {string.Join(", ", filters)}");
            sb.AppendLine("Tip: Check if Plugin Trace Log is enabled in System Settings > Customization");
            return sb.ToString();
        }

        private static string FormatListMode(DataCollection<Entity> entities, int minutesAgo)
        {
            var sb = new StringBuilder(entities.Count * 120 + 256);
            sb.AppendLine($"[PluginTraceLogs] {entities.Count} logs (last {minutesAgo} min)");
            sb.AppendLine();
            sb.AppendLine("id\ttypename\tmessage\tentity\tmode\tdepth\tduration\tcreated");

            foreach (var e in entities)
            {
                var id = e.Id.ToString();
                var typeName = e.GetAttributeValue<string>("typename") ?? "";
                var msgName = e.GetAttributeValue<string>("messagename") ?? "";
                var entity = e.GetAttributeValue<string>("primaryentity") ?? "";
                var modeValue = e.GetAttributeValue<OptionSetValue>("mode");
                var modeStr = modeValue?.Value == 0 ? "Sync" : modeValue?.Value == 1 ? "Async" : "";
                var depth = e.GetAttributeValue<int?>("depth")?.ToString() ?? "";
                var duration = e.GetAttributeValue<int?>("performanceexecutionduration");
                var durationStr = duration.HasValue ? $"{duration}ms" : "";
                var created = e.GetAttributeValue<DateTime?>("createdon");
                var createdStr = created?.ToString("yyyy-MM-dd HH:mm:ss") ?? "";

                sb.AppendLine($"{id}\t{EscapeTab(typeName)}\t{EscapeTab(msgName)}\t{EscapeTab(entity)}\t{modeStr}\t{depth}\t{durationStr}\t{createdStr}");
            }

            return sb.ToString();
        }

        private static string FormatDetailRecord(Entity e)
        {
            var sb = new StringBuilder(4096);
            var typeName = e.GetAttributeValue<string>("typename") ?? "";
            sb.AppendLine($"[PluginTraceLog] {typeName}");
            sb.AppendLine($"Id: {e.Id}");
            sb.AppendLine($"Message: {e.GetAttributeValue<string>("messagename") ?? ""}");
            sb.AppendLine($"Entity: {e.GetAttributeValue<string>("primaryentity") ?? ""}");

            var modeValue = e.GetAttributeValue<OptionSetValue>("mode");
            var modeStr = modeValue?.Value == 0 ? "Synchronous" : modeValue?.Value == 1 ? "Asynchronous" : "";
            sb.AppendLine($"Mode: {modeStr}");

            sb.AppendLine($"Depth: {e.GetAttributeValue<int?>("depth")?.ToString() ?? ""}");

            var duration = e.GetAttributeValue<int?>("performanceexecutionduration");
            sb.AppendLine($"Duration: {(duration.HasValue ? $"{duration}ms" : "")}");

            var correlationId = e.GetAttributeValue<Guid?>("correlationid");
            if (correlationId.HasValue)
                sb.AppendLine($"CorrelationId: {correlationId}");

            var created = e.GetAttributeValue<DateTime?>("createdon");
            if (created.HasValue)
                sb.AppendLine($"Created: {created.Value:yyyy-MM-dd HH:mm:ss}");

            // FULL trace output — NEVER truncate
            var messageBlock = e.GetAttributeValue<string>("messageblock") ?? "";
            sb.AppendLine();
            sb.AppendLine("[Trace Output]");
            sb.AppendLine(string.IsNullOrWhiteSpace(messageBlock) ? "(none)" : messageBlock);

            // FULL exception details — NEVER truncate
            var exceptionDetails = e.GetAttributeValue<string>("exceptiondetails") ?? "";
            sb.AppendLine();
            sb.AppendLine("[Exception]");
            sb.AppendLine(string.IsNullOrWhiteSpace(exceptionDetails) ? "(none)" : exceptionDetails);

            return sb.ToString();
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");
    }
}
