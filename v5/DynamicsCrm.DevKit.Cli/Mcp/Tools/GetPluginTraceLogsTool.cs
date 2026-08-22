using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetPluginTraceLogsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GetPluginTraceLogsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_plugin_trace_logs", Title = "List and inspect plugin trace logs",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetPluginTraceLogsResult)),
        Description(
            "List recent plugin trace logs or inspect one trace with diagnostic details.\n\n" +
            "WHEN TO USE:\n" +
            "- Diagnose synchronous or asynchronous plugin execution\n" +
            "- Correlate traces by entity, message, plugin type, or request ID\n\n" +
            "RELATED TOOLS:\n" +
            "- get_plugins → plugin registrations and steps\n" +
            "- get_system_jobs → asynchronous job failures")]
        public CallToolResult get_plugin_trace_logs(
            [Description("plugintracelog GUID → detail. Empty = list.")] string record_id = "",
            [Description("Plugin type name (contains). NOT table name.")] string type_name = "",
            [Description("Primary entity Display/logical name.")] string entity_name = "",
            [Description("SDK message: Create, Update, Delete, etc.")] string message_name = "",
            [Description("'sync' / 'async'. Empty = both.")] string mode = "",
            [Description("GUID. Trace one request across logs.")] string correlation_id = "",
            [Description("0 = 60 min default. Max 43200 (30d).")] int minutes_ago = 0,
            [Description("Default 50. Max 200.")] int max_records = 50)
        {
            try
            {
                // ── Validation ──────────────────────────────────────────────
                if (!string.IsNullOrWhiteSpace(record_id))
                {
                    // Detail mode
                    if (!Guid.TryParse(record_id.Trim(), out var detailId))
                        return Error($"'{record_id}' is not a valid GUID. Use a plugintracelog ID from list mode.");

                    var detailQuery = new QueryExpression("plugintracelog")
                    {
                        TopCount = 1,
                        ColumnSet = new ColumnSet(
                            "typename", "messagename", "primaryentity", "mode", "operationtype",
                            "depth", "performanceexecutionduration", "correlationid", "pluginstepid",
                            "requestid", "issystemcreated", "createdon", "messageblock", "exceptiondetails")
                    };
                    detailQuery.Criteria.AddCondition("plugintracelogid", ConditionOperator.Equal, detailId);
                    var detailResult = _serviceClient.RetrieveMultiple(detailQuery);
                    if (detailResult.Entities.Count == 0)
                        return Error($"Plugin trace log '{detailId}' not found.",
                            "Use get_plugin_trace_logs in list mode to find a valid record_id.");
                    var detailEntity = detailResult.Entities[0];
                    var detailEntry = BuildEntry(detailEntity, includeDetail: true);
                    var detailStructured = new GetPluginTraceLogsResult
                    {
                        Mode = "detail",
                        TotalCount = 1,
                        Traces = [detailEntry]
                    };
                    return Success(BuildDetailText(detailEntry), detailStructured);
                }

                // List mode
                if (!string.IsNullOrWhiteSpace(mode))
                {
                    var modeLower = mode.Trim().ToLowerInvariant();
                    if (modeLower != "sync" && modeLower != "synchronous" && modeLower != "async" && modeLower != "asynchronous")
                        return Error($"Invalid mode '{mode.Trim()}'.", "Use 'sync' or 'async'.");
                }

                if (!string.IsNullOrWhiteSpace(correlation_id) && !Guid.TryParse(correlation_id.Trim(), out _))
                    return Error($"'{correlation_id.Trim()}' is not a valid GUID for correlation_id.");

                if (minutes_ago < 0) minutes_ago = 60;
                if (minutes_ago == 0) minutes_ago = 60;
                if (minutes_ago > 43200) minutes_ago = 43200;
                if (max_records <= 0) max_records = 50;
                if (max_records > 200) max_records = 200;

                string primaryEntityLogical = null;
                if (!string.IsNullOrWhiteSpace(entity_name))
                {
                    var resolved = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_plugin_trace_logs");
                    if (!resolved.IsSuccess)
                        return Error($"entity_name '{entity_name.Trim()}': {resolved.Error}");
                    primaryEntityLogical = resolved.Value.LogicalName;
                }

                // ── Fetch ───────────────────────────────────────────────────
                var fetchXml = BuildListFetchXml(type_name, primaryEntityLogical, minutes_ago, correlation_id, message_name, mode, max_records);
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

                var timeScope = FormatTimeScope(minutes_ago);

                if (result.Entities.Count == 0)
                {
                    var emptyStructured = new GetPluginTraceLogsResult
                    {
                        Mode = "list",
                        TotalCount = 0,
                        TimeScope = timeScope,
                        EntityName = NullIfEmpty(primaryEntityLogical),
                        Traces = null
                    };
                    return Success($"0 plugin trace logs ({timeScope}).", emptyStructured);
                }

                // ── Build entries ───────────────────────────────────────────
                var traces = new List<PluginTraceLogEntry>(result.Entities.Count);
                foreach (var e in result.Entities)
                    traces.Add(BuildEntry(e, includeDetail: false));

                var structured = new GetPluginTraceLogsResult
                {
                    Mode = "list",
                    TotalCount = result.Entities.Count,
                    TimeScope = timeScope,
                    EntityName = NullIfEmpty(primaryEntityLogical),
                    Traces = traces
                };

                return Success(BuildListText(structured.TotalCount, timeScope, primaryEntityLogical), structured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Entry builder (shared by list + detail) ───────────────────────────
        // Fields verified by Program.cs --probe-trace:
        //   mode=OptionSetValue(0=Sync,1=Async) → FormattedValues["mode"]
        //   operationtype=OptionSetValue(0=Unknown,1=Plug-in,2=Workflow Activity) → FormattedValues["operationtype"]
        //   issystemcreated=Boolean → FormattedValues["issystemcreated"]
        //   depth=int, performanceexecutionduration=int
        //   correlationid/pluginstepid/requestid=Guid
        //   messageblock/exceptiondetails=Memo (detail only)

        private static PluginTraceLogEntry BuildEntry(Entity e, bool includeDetail)
        {
            var entry = new PluginTraceLogEntry
            {
                Id = e.Id.ToString(),
                TypeName = e.GetAttributeValue<string>("typename") ?? "",
                MessageName = NullIfEmpty(e.GetAttributeValue<string>("messagename")),
                PrimaryEntity = NullIfEmpty(e.GetAttributeValue<string>("primaryentity")),
                Mode = NullIfEmpty(e.FormattedValues.Contains("mode") ? e.FormattedValues["mode"] : null),
                OperationType = NullIfEmpty(e.FormattedValues.Contains("operationtype") ? e.FormattedValues["operationtype"] : null),
                Depth = e.GetAttributeValue<int?>("depth"),
                DurationMs = e.GetAttributeValue<int?>("performanceexecutionduration"),
                CorrelationId = e.GetAttributeValue<Guid?>("correlationid")?.ToString(),
                PluginStepId = e.GetAttributeValue<Guid?>("pluginstepid")?.ToString(),
                RequestId = e.GetAttributeValue<Guid?>("requestid")?.ToString(),
                IsSystemCreated = NullIfEmpty(e.FormattedValues.Contains("issystemcreated") ? e.FormattedValues["issystemcreated"] : null),
                CreatedOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd HH:mm:ss")
            };

            if (includeDetail)
            {
                entry.MessageBlock = NullIfEmpty(e.GetAttributeValue<string>("messageblock"));
                entry.ExceptionDetails = NullIfEmpty(e.GetAttributeValue<string>("exceptiondetails"));
            }

            return entry;
        }

        // ── FetchXML builder ──────────────────────────────────────────────────

        private static string BuildListFetchXml(string typeName, string primaryEntity, int minutesAgo, string correlationId, string messageName, string mode, int maxRecords)
        {
            var sb = new StringBuilder(512);
            sb.Append($"<fetch top='{maxRecords}'>");
            sb.Append("<entity name='plugintracelog'>");
            sb.Append("<attribute name='plugintracelogid'/>");
            sb.Append("<attribute name='typename'/>");
            sb.Append("<attribute name='messagename'/>");
            sb.Append("<attribute name='primaryentity'/>");
            sb.Append("<attribute name='mode'/>");
            sb.Append("<attribute name='operationtype'/>");
            sb.Append("<attribute name='depth'/>");
            sb.Append("<attribute name='performanceexecutionduration'/>");
            sb.Append("<attribute name='correlationid'/>");
            sb.Append("<attribute name='pluginstepid'/>");
            sb.Append("<attribute name='requestid'/>");
            sb.Append("<attribute name='issystemcreated'/>");
            sb.Append("<attribute name='createdon'/>");
            sb.Append("<filter type='and'>");
            var sinceUtc = DateTime.UtcNow.AddMinutes(-minutesAgo).ToString("yyyy-MM-ddTHH:mm:ssZ");
            sb.Append($"<condition attribute='createdon' operator='ge' value='{sinceUtc}'/>");

            if (!string.IsNullOrWhiteSpace(typeName))
                sb.Append($"<condition attribute='typename' operator='like' value='%{EscapeXml(typeName.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(primaryEntity))
                sb.Append($"<condition attribute='primaryentity' operator='eq' value='{EscapeXml(primaryEntity.Trim())}'/>");

            if (!string.IsNullOrWhiteSpace(correlationId) && Guid.TryParse(correlationId.Trim(), out _))
                sb.Append($"<condition attribute='correlationid' operator='eq' value='{EscapeXml(correlationId.Trim())}'/>");

            if (!string.IsNullOrWhiteSpace(messageName))
                sb.Append($"<condition attribute='messagename' operator='eq' value='{EscapeXml(messageName.Trim())}'/>");

            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeLower = mode.Trim().ToLowerInvariant();
                var modeValue = modeLower == "sync" || modeLower == "synchronous" ? 0 : 1;
                sb.Append($"<condition attribute='mode' operator='eq' value='{modeValue}'/>");
            }

            sb.Append("</filter>");
            sb.Append("<order attribute='createdon' descending='true'/>");
            sb.Append("</entity>");
            sb.Append("</fetch>");
            return sb.ToString();
        }

        // ── Text builders (1 line, concise) ───────────────────────────────────

        private static string BuildListText(int count, string timeScope, string primaryEntity)
        {
            var word = count == 1 ? "log" : "logs";
            var entityPart = string.IsNullOrWhiteSpace(primaryEntity) ? "" : $" on {primaryEntity}";
            return $"{count} plugin trace {word}{entityPart} ({timeScope}).";
        }

        private static string BuildDetailText(PluginTraceLogEntry entry)
        {
            var sb = new StringBuilder(128);
            sb.Append($"{entry.Id}");
            if (!string.IsNullOrWhiteSpace(entry.MessageName))
                sb.Append($". {entry.MessageName}");
            if (!string.IsNullOrWhiteSpace(entry.PrimaryEntity))
                sb.Append($" on {entry.PrimaryEntity}");
            if (!string.IsNullOrWhiteSpace(entry.Mode))
                sb.Append($" ({entry.Mode})");
            sb.Append(string.IsNullOrWhiteSpace(entry.MessageBlock) ? ". Trace: none" : ". Trace: available");
            sb.Append(string.IsNullOrWhiteSpace(entry.ExceptionDetails) ? ". Exception: none" : ". Exception: available");
            sb.Append('.');
            return sb.ToString();
        }

        // ── Time scope formatter ──────────────────────────────────────────────

        private static string FormatTimeScope(int minutesAgo)
        {
            if (minutesAgo >= 1440 && minutesAgo % 1440 == 0)
                return $"last {minutesAgo / 1440}d";
            if (minutesAgo >= 60 && minutesAgo % 60 == 0)
                return $"last {minutesAgo / 60}h";
            return $"last {minutesAgo}min";
        }

        // ── Utils ─────────────────────────────────────────────────────────────

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");
    }
}
