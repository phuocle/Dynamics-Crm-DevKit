using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
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
            "Plugin trace logs for debugging plugin/custom action. record_id empty = list (filtered, default last 60 min). Set = detail (full messageblock + exceptiondetails). Requires Plugin Trace Log enabled (System Settings > Customization).\n\n" +

            "FILTER SEMANTICS: type_name filters plugintracelog.typename (plugin class/type name), NOT the Dataverse table. Use entity_name to filter logs by primary table/entity.\n\n" +

            "WHEN TO USE:\n" +
            "- Debug failing plugin (list first → detail with record_id for full trace)\n" +
            "- Trace one request across logs (correlation_id)\n" +
            "- Async plugin failures: combine with get_system_jobs")]
        public CallToolResult get_plugin_trace_logs(
            [Description(
                "GUID → detail mode. Empty = list. Use parse_record_url."
            )] string record_id = "",
            [Description(
                "Plugin type name (contains). E.g. 'AccountPlugin'."
            )] string type_name = "",
            [Description(
                "Primary table/entity filter, Display Name or logical name. Filters plugintracelog.primaryentity."
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
                "0 = 60 min default. Max 1440."
            )] int minutes_ago = 0,
            [Description(
                "Max 200."
            )] int max_records = 50)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(record_id))
                    return HandleDetail(record_id);

                return HandleList(type_name, entity_name, minutes_ago, correlation_id, message_name, mode, max_records);
            }
            catch (System.ServiceModel.FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault> fex)
            {
                return ErrorResult($"Error: Dataverse fault: {fex.Detail?.Message ?? fex.Message}");
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: {ex.Message}");
            }
        }

        private CallToolResult HandleList(string typeName, string entityName, int minutesAgo, string correlationId, string messageName, string mode, int maxRecords)
        {
            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeLower = mode.Trim().ToLowerInvariant();
                if (modeLower != "sync" && modeLower != "synchronous" && modeLower != "async" && modeLower != "asynchronous")
                    return ErrorResult($"Error: Invalid mode '{mode.Trim()}'. Use 'sync' or 'async'.");
            }

            if (!string.IsNullOrWhiteSpace(correlationId) && !Guid.TryParse(correlationId.Trim(), out _))
                return ErrorResult($"Error: '{correlationId.Trim()}' is not a valid GUID for correlation_id.");

            if (minutesAgo <= 0) minutesAgo = 60;
            if (minutesAgo > 1440) minutesAgo = 1440;
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 200) maxRecords = 200;

            var primaryEntity = ResolvePrimaryEntity(entityName);
            if (!string.IsNullOrEmpty(primaryEntity.Error))
                return ErrorResult(primaryEntity.Error);

            var fetchXml = BuildListFetchXml(typeName, primaryEntity.LogicalName, minutesAgo, correlationId, messageName, mode, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (result.Entities.Count == 0)
            {
                var text = FormatNoResults(typeName, primaryEntity.LogicalName, minutesAgo, correlationId, messageName, mode);
                var emptyResult = new GetPluginTraceLogsResult
                {
                    Mode = "list",
                    TotalCount = 0,
                    Traces = []
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            return FormatListResults(result.Entities, minutesAgo);
        }

        private CallToolResult HandleDetail(string recordId)
        {
            if (!Guid.TryParse(recordId.Trim(), out var id))
                return ErrorResult($"Error: '{recordId}' is not a valid GUID. Use a plugintracelog ID from list mode.");

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

        private static CallToolResult FormatListResults(DataCollection<Entity> entities, int minutesAgo)
        {
            var traces = new List<PluginTraceLogEntry>();
            var sb = new StringBuilder(entities.Count * 120 + 256);
            sb.AppendLine($"[PluginTraceLogs] {entities.Count} logs (last {minutesAgo} min)");
            sb.AppendLine();
            sb.AppendLine("id\ttypename\tmessage\tentity\tmode\tdepth\tduration\tcreated");

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

                sb.AppendLine($"{e.Id}\t{EscapeTab(typeName)}\t{EscapeTab(msgName)}\t{EscapeTab(entity)}\t{modeStr}\t{depth}\t{durationStr}\t{createdStr}");

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
                    CreatedOn = createdStr
                });
            }

            var structured = new GetPluginTraceLogsResult
            {
                Mode = "list",
                TotalCount = entities.Count,
                Traces = traces
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static CallToolResult FormatDetailResult(Entity e)
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

            var sb = new StringBuilder(4096);
            sb.AppendLine($"[PluginTraceLog] {typeName}");
            sb.AppendLine($"Id: {e.Id}");
            sb.AppendLine($"Message: {msgName}");
            sb.AppendLine($"Entity: {entity}");
            sb.AppendLine($"Mode: {modeStr}");
            sb.AppendLine($"Depth: {depth}");
            sb.AppendLine($"Duration: {durationStr}");
            if (correlationId.HasValue)
                sb.AppendLine($"CorrelationId: {correlationId}");
            if (created.HasValue)
                sb.AppendLine($"Created: {created.Value:yyyy-MM-dd HH:mm:ss}");

            sb.AppendLine();
            sb.AppendLine("[Trace Output]");
            sb.AppendLine(string.IsNullOrWhiteSpace(messageBlock) ? "(none)" : messageBlock);

            sb.AppendLine();
            sb.AppendLine("[Exception]");
            sb.AppendLine(string.IsNullOrWhiteSpace(exceptionDetails) ? "(none)" : exceptionDetails);

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

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private CallToolResult ErrorResult(string message) => Error(message);
    }
}
