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
            "List/inspect Dataverse plugin trace logs (plugintracelog). Empty record_id = list (filtered). Set record_id = detail with full messageBlock + exceptionDetails in structured content. Requires Plugin Trace Log enabled (System Settings > Customization).\n\n" +

            "MODES:\n" +
            "- list: newest first; default last 60 min, max 50 (cap 200 / 43200 min = 30 days).\n" +
            "- detail: one log by plugintracelog GUID from list.\n\n" +

            "FILTERS (list only):\n" +
            "- type_name: contains on plugin class/type name (typename) — NOT the table.\n" +
            "- entity_name: primary table/entity (Display Name or logical name → primaryentity).\n" +
            "- message_name: SDK message (Create, Update, Delete, …).\n" +
            "- mode: sync | async.\n" +
            "- correlation_id: one request across logs.\n\n" +

            "OUTPUT:\n" +
            "- Compact text summary.\n" +
            "- Structured traces[] (list metadata; detail also includes messageBlock + exceptionDetails).\n\n" +

            "WHEN TO USE:\n" +
            "- Debug failing plugin/custom action: list → detail(record_id).\n" +
            "- Follow one request via correlation_id.\n" +
            "- Async failures: combine with get_system_jobs.\n\n" +

            "COMMON MISTAKES:\n" +
            "- Do not put table name in type_name; use entity_name for primaryentity.\n" +
            "- record_id must be plugintracelog GUID from list, not a business record GUID.")]
        public CallToolResult get_plugin_trace_logs(
            [Description(
                "plugintracelog GUID → detail. Empty = list. Take id from list mode."
            )] string record_id = "",
            [Description(
                "Plugin type name (contains). E.g. 'AccountPlugin'."
            )] string type_name = "",
            [Description(
                "Primary entity Display/logical name (primaryentity)."
            )] string entity_name = "",
            [Description(
                "SDK message: Create, Update, Delete, etc."
            )] string message_name = "",
            [Description(
                "'sync' / 'async'. Empty = both."
            )] string mode = "",
            [Description(
                "GUID. Trace one request across logs."
            )] string correlation_id = "",
            [Description(
                "0 = 60 min default. Max 43200 (30 days)."
            )] int minutes_ago = 0,
            [Description(
                "Default 50. Max 200."
            )] int max_records = 50)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(record_id))
                    return HandleDetail(record_id);

                return HandleList(type_name, entity_name, minutes_ago, correlation_id, message_name, mode, max_records);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult HandleList(string typeName, string entityName, int minutesAgo, string correlationId, string messageName, string mode, int maxRecords)
        {
            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeLower = mode.Trim().ToLowerInvariant();
                if (modeLower != "sync" && modeLower != "synchronous" && modeLower != "async" && modeLower != "asynchronous")
                    return Error($"Error: Invalid mode '{mode.Trim()}'. Use 'sync' or 'async'.");
            }

            if (!string.IsNullOrWhiteSpace(correlationId) && !Guid.TryParse(correlationId.Trim(), out _))
                return Error($"Error: '{correlationId.Trim()}' is not a valid GUID for correlation_id.");

            if (minutesAgo <= 0) minutesAgo = 60;
            if (minutesAgo > 43200) minutesAgo = 43200;
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 200) maxRecords = 200;

            var primaryEntity = ResolvePrimaryEntity(entityName);
            if (!string.IsNullOrEmpty(primaryEntity.Error))
                return Error(primaryEntity.Error);

            var fetchXml = BuildListFetchXml(typeName, primaryEntity.LogicalName, minutesAgo, correlationId, messageName, mode, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (result.Entities.Count == 0)
            {
                var emptyResult = new GetPluginTraceLogsResult
                {
                    Mode = "list",
                    TotalCount = 0,
                    Traces = []
                };
                var text = FormatNoResults(typeName, primaryEntity.LogicalName, minutesAgo, correlationId, messageName, mode);
                return Success(text, emptyResult);
            }

            return FormatListResults(result.Entities, minutesAgo);
        }

        private CallToolResult HandleDetail(string recordId)
        {
            if (!Guid.TryParse(recordId.Trim(), out var id))
                return Error($"Error: '{recordId}' is not a valid GUID. Use a plugintracelog ID from list mode.");

            var entity = _serviceClient.Retrieve("plugintracelog", id, new ColumnSet(true));
            return FormatDetailResult(entity);
        }

        private (string LogicalName, string Error) ResolvePrimaryEntity(string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return (null, null);

            var resolved = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName.Trim(), "get_plugin_trace_logs");
            if (!resolved.IsSuccess)
                return (null, $"Error: entity_name '{entityName.Trim()}': {resolved.Error}");

            return (resolved.Value.LogicalName, null);
        }

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
            sb.Append("<attribute name='depth'/>");
            sb.Append("<attribute name='performanceexecutionduration'/>");
            sb.Append("<attribute name='correlationid'/>");
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

        private static string FormatNoResults(string typeName, string primaryEntity, int minutesAgo, string correlationId, string messageName, string mode)
        {
            var sb = new StringBuilder(256);
            sb.AppendLine("[PluginTraceLogs] 0 logs found");

            var filters = new List<string>();
            if (!string.IsNullOrWhiteSpace(typeName))
                filters.Add($"typename contains \"{typeName}\"");
            if (!string.IsNullOrWhiteSpace(primaryEntity))
                filters.Add($"primaryentity = \"{primaryEntity}\"");
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

        private CallToolResult FormatListResults(DataCollection<Entity> entities, int minutesAgo)
        {
            var traces = new List<PluginTraceLogEntry>(entities.Count);

            foreach (var e in entities)
            {
                var typeName = e.GetAttributeValue<string>("typename") ?? "";
                var msgName = e.GetAttributeValue<string>("messagename") ?? "";
                var entity = e.GetAttributeValue<string>("primaryentity") ?? "";
                var modeValue = e.GetAttributeValue<OptionSetValue>("mode");
                var modeStr = modeValue?.Value == 0 ? "Sync" : modeValue?.Value == 1 ? "Async" : "";
                var depth = e.GetAttributeValue<int?>("depth") ?? 0;
                var duration = e.GetAttributeValue<int?>("performanceexecutionduration");
                var durationStr = duration.HasValue ? $"{duration}ms" : "";
                var created = e.GetAttributeValue<DateTime?>("createdon");
                var createdStr = created?.ToString("yyyy-MM-dd HH:mm:ss") ?? "";
                var correlationId = e.GetAttributeValue<Guid?>("correlationid");

                traces.Add(new PluginTraceLogEntry
                {
                    Id = e.Id.ToString(),
                    TypeName = typeName,
                    MessageName = NullIfEmpty(msgName),
                    PrimaryEntity = NullIfEmpty(entity),
                    Mode = NullIfEmpty(modeStr),
                    Depth = depth,
                    Duration = NullIfEmpty(durationStr),
                    CorrelationId = correlationId?.ToString(),
                    CreatedOn = NullIfEmpty(createdStr)
                });
            }

            var structured = new GetPluginTraceLogsResult
            {
                Mode = "list",
                TotalCount = entities.Count,
                Traces = traces
            };

            return Success(BuildCompactListText(structured, minutesAgo), structured);
        }

        private CallToolResult FormatDetailResult(Entity e)
        {
            var typeName = e.GetAttributeValue<string>("typename") ?? "";
            var msgName = e.GetAttributeValue<string>("messagename") ?? "";
            var entity = e.GetAttributeValue<string>("primaryentity") ?? "";
            var modeValue = e.GetAttributeValue<OptionSetValue>("mode");
            var modeStr = modeValue?.Value == 0 ? "Synchronous" : modeValue?.Value == 1 ? "Asynchronous" : "";
            var depth = e.GetAttributeValue<int?>("depth") ?? 0;
            var duration = e.GetAttributeValue<int?>("performanceexecutionduration");
            var durationStr = duration.HasValue ? $"{duration}ms" : "";
            var correlationId = e.GetAttributeValue<Guid?>("correlationid");
            var created = e.GetAttributeValue<DateTime?>("createdon");
            var messageBlock = e.GetAttributeValue<string>("messageblock") ?? "";
            var exceptionDetails = e.GetAttributeValue<string>("exceptiondetails") ?? "";

            var entry = new PluginTraceLogEntry
            {
                Id = e.Id.ToString(),
                TypeName = typeName,
                MessageName = NullIfEmpty(msgName),
                PrimaryEntity = NullIfEmpty(entity),
                Mode = NullIfEmpty(modeStr),
                Depth = depth,
                Duration = NullIfEmpty(durationStr),
                CorrelationId = correlationId?.ToString(),
                CreatedOn = created?.ToString("yyyy-MM-dd HH:mm:ss"),
                MessageBlock = NullIfEmpty(messageBlock),
                ExceptionDetails = NullIfEmpty(exceptionDetails)
            };

            var structured = new GetPluginTraceLogsResult
            {
                Mode = "detail",
                TotalCount = 1,
                Traces = [entry]
            };

            return Success(BuildCompactDetailText(entry), structured);
        }

        private static string BuildCompactListText(GetPluginTraceLogsResult result, int minutesAgo)
        {
            var sb = new StringBuilder(128);
            sb.Append($"[PluginTraceLogs] {result.TotalCount} logs (last {minutesAgo} min)");
            if (result.Traces is { Count: > 0 })
            {
                var first = result.Traces[0];
                if (!string.IsNullOrWhiteSpace(first.TypeName))
                    sb.Append($". First: {first.TypeName}");
                if (!string.IsNullOrWhiteSpace(first.MessageName))
                    sb.Append($"/{first.MessageName}");
                if (!string.IsNullOrWhiteSpace(first.PrimaryEntity))
                    sb.Append($" on {first.PrimaryEntity}");
            }
            sb.Append('.');
            return sb.ToString();
        }

        private static string BuildCompactDetailText(PluginTraceLogEntry entry)
        {
            var sb = new StringBuilder(256);
            sb.Append($"[PluginTraceLog] {entry.TypeName}");
            if (!string.IsNullOrWhiteSpace(entry.MessageName))
                sb.Append($". Message: {entry.MessageName}");
            if (!string.IsNullOrWhiteSpace(entry.PrimaryEntity))
                sb.Append($". Entity: {entry.PrimaryEntity}");
            if (!string.IsNullOrWhiteSpace(entry.Mode))
                sb.Append($". Mode: {entry.Mode}");
            sb.Append($". Depth: {entry.Depth}");
            if (!string.IsNullOrWhiteSpace(entry.Duration))
                sb.Append($". Duration: {entry.Duration}");
            if (!string.IsNullOrWhiteSpace(entry.CorrelationId))
                sb.Append($". CorrelationId: {entry.CorrelationId}");
            if (!string.IsNullOrWhiteSpace(entry.CreatedOn))
                sb.Append($". Created: {entry.CreatedOn}");
            sb.Append(string.IsNullOrWhiteSpace(entry.MessageBlock) ? ". Trace: none" : ". Trace: available");
            sb.Append(string.IsNullOrWhiteSpace(entry.ExceptionDetails) ? ". Exception: none" : ". Exception: available");
            sb.Append('.');
            return sb.ToString();
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");
    }
}
