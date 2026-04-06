using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetDebuggingTool
    {
        private readonly ServiceClient _serviceClient;

        public GetDebuggingTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly Dictionary<int, string> OperationTypeMap = new()
        {
            [1] = "Plugin",
            [2] = "BulkEmail",
            [5] = "Import",
            [10] = "Workflow",
            [13] = "BulkDelete",
            [17] = "ImportSubprocess",
            [23] = "BulkDeleteSubprocess",
            [35] = "RecurringSeries",
            [40] = "GoalRollUp",
            [54] = "CustomAction",
            [57] = "RollupField",
            [58] = "MassRollupField",
            [202] = "ExportSolution",
            [203] = "ImportSolution",
            [204] = "PublishAll"
        };

        private static readonly Dictionary<int, string> StatusCodeMap = new()
        {
            [0] = "WaitingForResources",
            [10] = "Waiting",
            [20] = "InProgress",
            [21] = "Pausing",
            [22] = "Canceling",
            [30] = "Succeeded",
            [31] = "Failed",
            [32] = "Canceled"
        };

        private static readonly HashSet<string> ValidStatuses = new(StringComparer.OrdinalIgnoreCase)
        {
            "failed", "succeeded", "waiting", "in_progress", "canceled", "all"
        };

        private static readonly HashSet<string> ValidOperationTypes = new(StringComparer.OrdinalIgnoreCase)
        {
            "plugin", "workflow", "bulk_delete", "import", "goal_rollup", "solution", "all"
        };

        [McpServerTool(Name = "get_debugging", Title = "Query plugin trace logs and system jobs for debugging",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetDebuggingResult)),
        Description(
            "Query plugin trace logs and system jobs (asyncoperation) for debugging plugin failures, " +
            "workflow errors, bulk operations, imports, and solution operations.\n\n" +

            "FOUR ACTIONS:\n" +
            "- action='traces': list plugin trace logs with filters (default: last 60 min)\n" +
            "- action='trace_detail': full detail for one trace log (complete messageblock + exceptiondetails, never truncated). Requires record_id\n" +
            "- action='jobs': list system jobs with filters (default: failed last 24h)\n" +
            "- action='job_detail': full detail for one system job including error message and stack trace. Requires record_id\n\n" +

            "WHEN TO USE:\n" +
            "- Debug a failing plugin: action='traces' to browse, then action='trace_detail' for full output\n" +
            "- Debug async failures: action='jobs' for errors, then action='job_detail' for stack trace\n" +
            "- Trace a single request end-to-end: use correlation_id across both traces and jobs\n\n" +

            "TIPS:\n" +
            "- Plugin Trace Log must be enabled in Dataverse (System Settings > Customization)\n" +
            "- For async plugin failures: action='jobs' for error + action='traces' for trace output\n" +
            "- Browse first (list), then get full detail with record_id")]
        public CallToolResult get_debugging(
            [Description(
                "The action to perform: 'traces', 'trace_detail', 'jobs', or 'job_detail'."
            )] string action,
            [Description(
                "Record GUID for detail actions (trace_detail, job_detail). " +
                "Use parse_record_url to extract from a URL."
            )] string record_id = "",
            [Description(
                "traces only: filter by plugin type name (contains match). E.g., 'AccountPlugin'."
            )] string type_name = "",
            [Description(
                "jobs only: filter by entity (e.g., 'account'). Empty = all."
            )] string entity_name = "",
            [Description(
                "jobs only: 'failed' (default), 'succeeded', 'waiting', 'in_progress', 'canceled', 'all'."
            )] string status = "failed",
            [Description(
                "jobs only: 'plugin', 'workflow', 'bulk_delete', 'import', 'goal_rollup', 'solution', 'all'. Empty = all."
            )] string operation_type = "",
            [Description(
                "jobs only: filter by name (contains)."
            )] string name_filter = "",
            [Description(
                "Filter by correlation ID (exact GUID). Works for both traces and jobs — " +
                "trace a single request end-to-end."
            )] string correlation_id = "",
            [Description(
                "traces only: filter by SDK message: 'Create', 'Update', 'Delete', etc."
            )] string message_name = "",
            [Description(
                "traces only: filter by mode: 'sync' or 'async'. Empty for both."
            )] string mode = "",
            [Description(
                "Time range in minutes. Default: 60 for traces, 1440 (24h) for jobs. " +
                "Max: 1440 for traces, 43200 for jobs."
            )] int minutes_ago = 0,
            [Description(
                "Max results. Default: 50. Max: 200 for traces, 500 for jobs."
            )] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'traces', 'trace_detail', 'jobs', 'job_detail'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "traces" => HandleTraces(type_name, minutes_ago, correlation_id, message_name, mode, max_records),
                    "trace_detail" => HandleTraceDetail(record_id),
                    "jobs" => HandleJobs(entity_name, status, operation_type, name_filter, correlation_id, minutes_ago, max_records),
                    "job_detail" => HandleJobDetail(record_id),
                    _ => ErrorResult($"Error: '{action.Trim()}' is not a valid action. Valid values: 'traces', 'trace_detail', 'jobs', 'job_detail'.")
                };
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

        // ========== TRACES (from GetPluginTraceLogsTool) ==========

        private CallToolResult HandleTraces(string typeName, int minutesAgo, string correlationId, string messageName, string mode, int maxRecords)
        {
            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeLower = mode.Trim().ToLowerInvariant();
                if (modeLower != "sync" && modeLower != "synchronous" && modeLower != "async" && modeLower != "asynchronous")
                    return ErrorResult($"Error: Invalid mode '{mode.Trim()}'. Use 'sync' or 'async'.");
            }

            if (!string.IsNullOrWhiteSpace(correlationId) && !Guid.TryParse(correlationId.Trim(), out _))
                return ErrorResult($"Error: '{correlationId.Trim()}' is not a valid GUID for correlation_id.");

            // Default minutes_ago for traces: 60
            if (minutesAgo <= 0) minutesAgo = 60;
            if (minutesAgo > 1440) minutesAgo = 1440;
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 200) maxRecords = 200;

            var fetchXml = BuildTraceListFetchXml(typeName, minutesAgo, correlationId, messageName, mode, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (result.Entities.Count == 0)
            {
                var text = FormatTraceNoResults(typeName, minutesAgo, correlationId, messageName, mode);
                var emptyResult = new GetDebuggingResult
                {
                    Action = "traces",
                    TotalCount = 0,
                    Traces = []
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            return FormatTraceListResults(result.Entities, minutesAgo);
        }

        private CallToolResult HandleTraceDetail(string recordId)
        {
            if (string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id is required for action='trace_detail'.");

            if (!Guid.TryParse(recordId.Trim(), out var id))
                return ErrorResult($"Error: '{recordId}' is not a valid GUID.");

            var entity = _serviceClient.Retrieve("plugintracelog", id, new ColumnSet(true));
            return FormatTraceDetailResult(entity);
        }

        private static string BuildTraceListFetchXml(string typeName, int minutesAgo, string correlationId, string messageName, string mode, int maxRecords)
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

        private static string FormatTraceNoResults(string typeName, int minutesAgo, string correlationId, string messageName, string mode)
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

        private static CallToolResult FormatTraceListResults(DataCollection<Entity> entities, int minutesAgo)
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

            var structured = new GetDebuggingResult
            {
                Action = "traces",
                TotalCount = entities.Count,
                Traces = traces
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static CallToolResult FormatTraceDetailResult(Entity e)
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

            var structured = new GetDebuggingResult
            {
                Action = "trace_detail",
                TotalCount = 1,
                Traces = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ========== JOBS (from GetSystemJobsTool) ==========

        private CallToolResult HandleJobs(string entityName, string status, string operationType, string nameFilter, string correlationId, int minutesAgo, int maxRecords)
        {
            // Default minutes_ago for jobs: 1440 (24h)
            if (minutesAgo <= 0) minutesAgo = 1440;
            if (minutesAgo > 43200) minutesAgo = 43200;
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 500) maxRecords = 500;

            var normalizedStatus = (status ?? "failed").Trim().ToLowerInvariant();
            if (!ValidStatuses.Contains(normalizedStatus))
                return ErrorResult($"Error: '{status?.Trim()}' is not a valid status. Valid values: failed, succeeded, waiting, in_progress, canceled, all.");

            var normalizedOpType = (operationType ?? "").Trim().ToLowerInvariant();
            if (!string.IsNullOrEmpty(normalizedOpType) && !ValidOperationTypes.Contains(normalizedOpType))
                return ErrorResult($"Error: '{operationType?.Trim()}' is not a valid operation_type. Valid values: plugin, workflow, bulk_delete, import, goal_rollup, solution, all.");

            if (!string.IsNullOrWhiteSpace(correlationId) && !Guid.TryParse(correlationId.Trim(), out _))
                return ErrorResult($"Error: '{correlationId.Trim()}' is not a valid GUID for correlation_id.");

            var fromDate = DateTime.UtcNow.AddMinutes(-minutesAgo).ToString("yyyy-MM-ddTHH:mm:ssZ");
            var filters = new StringBuilder();

            var statusFilter = BuildStatusFilter(status);
            if (!string.IsNullOrEmpty(statusFilter))
                filters.AppendLine($"      {statusFilter}");

            var opFilter = BuildOperationTypeFilter(operationType);
            if (!string.IsNullOrEmpty(opFilter))
                filters.AppendLine($"      {opFilter}");

            filters.AppendLine($"      <condition attribute='startedon' operator='ge' value='{fromDate}'/>");

            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var entityTypeCode = ResolveEntityTypeCode(entityName.Trim().ToLowerInvariant());
                if (entityTypeCode == null)
                    return ErrorResult($"Error: Entity '{entityName.Trim()}' not found. Use get_tables to find valid entity names.");
                filters.AppendLine($"      <condition attribute='primaryentitytype' operator='eq' value='{entityTypeCode}'/>");
            }

            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(correlationId) && Guid.TryParse(correlationId.Trim(), out _))
                filters.AppendLine($"      <condition attribute='correlationid' operator='eq' value='{EscapeXml(correlationId.Trim())}'/>");

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='asyncoperation'>
    <attribute name='asyncoperationid'/>
    <attribute name='name'/>
    <attribute name='operationtype'/>
    <attribute name='primaryentitytype'/>
    <attribute name='statecode'/>
    <attribute name='statuscode'/>
    <attribute name='startedon'/>
    <attribute name='completedon'/>
    <attribute name='executiontimespan'/>
    <attribute name='friendlymessage'/>
    <attribute name='messagename'/>
    <attribute name='errorcode'/>
    <attribute name='ownerid'/>
    <attribute name='correlationid'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='startedon' descending='true'/>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (result.Entities.Count == 0)
            {
                var text = $"0 system jobs found (status={normalizedStatus}, last {FormatTimeLabel(minutesAgo)}).";
                var emptyResult = new GetDebuggingResult
                {
                    Action = "jobs",
                    TotalCount = 0,
                    Jobs = [],
                    Summary = new JobSummary()
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            return FormatJobListResults(result.Entities, status, minutesAgo);
        }

        private CallToolResult HandleJobDetail(string recordId)
        {
            if (string.IsNullOrWhiteSpace(recordId))
                return ErrorResult("Error: record_id is required for action='job_detail'.");

            if (!Guid.TryParse(recordId.Trim(), out _))
                return ErrorResult($"Error: '{recordId.Trim()}' is not a valid GUID.");

            var fetchXml = $@"<fetch>
  <entity name='asyncoperation'>
    <attribute name='asyncoperationid'/>
    <attribute name='name'/>
    <attribute name='operationtype'/>
    <attribute name='primaryentitytype'/>
    <attribute name='statecode'/>
    <attribute name='statuscode'/>
    <attribute name='startedon'/>
    <attribute name='completedon'/>
    <attribute name='createdon'/>
    <attribute name='executiontimespan'/>
    <attribute name='message'/>
    <attribute name='friendlymessage'/>
    <attribute name='messagename'/>
    <attribute name='errorcode'/>
    <attribute name='retrycount'/>
    <attribute name='depth'/>
    <attribute name='correlationid'/>
    <attribute name='ownerid'/>
    <attribute name='owningextensionid'/>
    <attribute name='workflowactivationid'/>
    <attribute name='regardingobjectid'/>
    <attribute name='postponeuntil'/>
    <filter>
      <condition attribute='asyncoperationid' operator='eq' value='{EscapeXml(recordId.Trim())}'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return ErrorResult($"Error: System job '{recordId.Trim()}' not found.");

            var e = result.Entities[0];
            var name = e.GetAttributeValue<string>("name") ?? "";
            var opTypeValue = e.GetAttributeValue<OptionSetValue>("operationtype")?.Value ?? 0;
            var opTypeLabel = MapOperationType(opTypeValue);
            var statusValue = e.GetAttributeValue<OptionSetValue>("statuscode")?.Value ?? 0;
            var statusLabel = MapStatusCode(statusValue);
            var startedOn = e.GetAttributeValue<DateTime?>("startedon");
            var completedOn = e.GetAttributeValue<DateTime?>("completedon");
            var executionTime = e.GetAttributeValue<double?>("executiontimespan");
            var retryCount = e.GetAttributeValue<int?>("retrycount") ?? 0;
            var depth = e.GetAttributeValue<int?>("depth") ?? 0;
            var correlationId = e.GetAttributeValue<Guid?>("correlationid");
            var owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "";
            var pluginStep = e.GetAttributeValue<EntityReference>("owningextensionid")?.Name;
            var workflowName = e.GetAttributeValue<EntityReference>("workflowactivationid")?.Name;
            var regarding = e.GetAttributeValue<EntityReference>("regardingobjectid");
            var friendlyMessage = e.GetAttributeValue<string>("friendlymessage");
            var message = e.GetAttributeValue<string>("message");
            var primaryEntity = e.GetAttributeValue<string>("primaryentitytype") ?? "";
            var errorCode = e.GetAttributeValue<int?>("errorcode");

            var sb = new StringBuilder(2048);
            sb.AppendLine($"[System Job] {EscapeTab(name)}");
            sb.AppendLine();
            sb.AppendLine($"jobId: {e.Id}");
            sb.AppendLine($"name: {name}");
            sb.AppendLine($"operationType: {opTypeLabel} ({opTypeValue})");
            sb.AppendLine($"primaryEntity: {primaryEntity}");
            sb.AppendLine($"status: {statusLabel} ({statusValue})");
            sb.AppendLine($"startedOn: {startedOn?.ToString("yyyy-MM-dd HH:mm:ss") ?? "-"}");
            sb.AppendLine($"completedOn: {completedOn?.ToString("yyyy-MM-dd HH:mm:ss") ?? "-"}");
            sb.AppendLine($"executionTime: {FormatExecutionTime(executionTime)}");
            sb.AppendLine($"retryCount: {retryCount}");
            sb.AppendLine($"depth: {depth}");
            sb.AppendLine($"owner: {owner}");
            if (correlationId.HasValue)
                sb.AppendLine($"correlationId: {correlationId}");
            if (errorCode.HasValue)
                sb.AppendLine($"errorCode: {errorCode}");
            if (!string.IsNullOrEmpty(pluginStep))
                sb.AppendLine($"pluginStep: {pluginStep}");
            if (!string.IsNullOrEmpty(workflowName))
                sb.AppendLine($"workflow: {workflowName}");
            if (regarding != null)
                sb.AppendLine($"regarding: {regarding.LogicalName}/{regarding.Id}{(!string.IsNullOrEmpty(regarding.Name) ? $" ({regarding.Name})" : "")}");

            if (!string.IsNullOrWhiteSpace(friendlyMessage))
            {
                sb.AppendLine();
                sb.AppendLine("[Friendly Message]");
                sb.AppendLine(friendlyMessage.Trim());
            }

            if (!string.IsNullOrWhiteSpace(message))
            {
                sb.AppendLine();
                sb.AppendLine("[Error Message]");
                sb.AppendLine(message.Trim());
            }

            var entry = new SystemJobEntry
            {
                JobId = e.Id.ToString(),
                Name = name,
                OperationType = opTypeLabel,
                PrimaryEntity = NullIfEmpty(primaryEntity),
                Status = statusLabel,
                MessageName = NullIfEmpty(e.GetAttributeValue<string>("messagename")),
                StartedOn = startedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                CompletedOn = completedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                ExecutionTime = FormatExecutionTime(executionTime),
                RetryCount = retryCount,
                Depth = depth,
                ErrorCode = errorCode,
                CorrelationId = correlationId?.ToString(),
                Owner = NullIfEmpty(owner),
                PluginStep = pluginStep,
                WorkflowName = workflowName,
                RegardingRecord = regarding != null ? $"{regarding.LogicalName}/{regarding.Id}" : null,
                FriendlyMessage = NullIfEmpty(friendlyMessage),
                Message = NullIfEmpty(message)
            };

            var structured = new GetDebuggingResult
            {
                Action = "job_detail",
                TotalCount = 1,
                Jobs = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static CallToolResult FormatJobListResults(DataCollection<Entity> entities, string status, int minutesAgo)
        {
            var jobs = new List<SystemJobEntry>();
            var pluginCount = 0;
            var workflowCount = 0;
            var bulkDeleteCount = 0;
            var importCount = 0;
            var solutionCount = 0;
            var otherCount = 0;

            foreach (var e in entities)
            {
                var opTypeValue = e.GetAttributeValue<OptionSetValue>("operationtype")?.Value ?? 0;
                var opTypeLabel = MapOperationType(opTypeValue);
                var statusValue = e.GetAttributeValue<OptionSetValue>("statuscode")?.Value ?? 0;
                var startedOn = e.GetAttributeValue<DateTime?>("startedon");
                var completedOn = e.GetAttributeValue<DateTime?>("completedon");
                var friendlyMessage = e.GetAttributeValue<string>("friendlymessage");

                var entry = new SystemJobEntry
                {
                    JobId = e.Id.ToString(),
                    Name = e.GetAttributeValue<string>("name") ?? "",
                    OperationType = opTypeLabel,
                    PrimaryEntity = NullIfEmpty(e.GetAttributeValue<string>("primaryentitytype")),
                    Status = MapStatusCode(statusValue),
                    MessageName = NullIfEmpty(e.GetAttributeValue<string>("messagename")),
                    StartedOn = startedOn?.ToString("yyyy-MM-dd HH:mm") ?? "",
                    CompletedOn = completedOn?.ToString("yyyy-MM-dd HH:mm"),
                    ExecutionTime = FormatExecutionTime(e.GetAttributeValue<double?>("executiontimespan")),
                    ErrorCode = e.GetAttributeValue<int?>("errorcode"),
                    CorrelationId = e.GetAttributeValue<Guid?>("correlationid")?.ToString(),
                    Owner = NullIfEmpty(e.GetAttributeValue<EntityReference>("ownerid")?.Name),
                    FriendlyMessage = TruncateMessage(friendlyMessage, 100)
                };
                jobs.Add(entry);

                switch (opTypeValue)
                {
                    case 1 or 54: pluginCount++; break;
                    case 10: workflowCount++; break;
                    case 13 or 23: bulkDeleteCount++; break;
                    case 5 or 17: importCount++; break;
                    case 202 or 203 or 204: solutionCount++; break;
                    default: otherCount++; break;
                }
            }

            var normalizedStatus = (status ?? "failed").Trim().ToLowerInvariant();
            var countWord = entities.Count == 1 ? "job" : "jobs";
            var statusLabel = normalizedStatus == "all" ? "" : $"{normalizedStatus} ";

            var sb = new StringBuilder(entities.Count * 200 + 256);
            sb.AppendLine($"[System Jobs] {entities.Count} {statusLabel}{countWord} (last {FormatTimeLabel(minutesAgo)})");
            sb.AppendLine();
            sb.AppendLine("#\tname\toperationType\tentity\tstatus\tstartedOn\tcompletedOn\tmessage");

            for (var i = 0; i < jobs.Count; i++)
            {
                var j = jobs[i];
                sb.AppendLine($"{i + 1}\t{EscapeTab(j.Name)}\t{j.OperationType}\t{j.PrimaryEntity ?? "-"}\t{j.Status}\t{j.StartedOn}\t{j.CompletedOn ?? "-"}\t{EscapeTab(j.FriendlyMessage ?? "-")}");
            }

            sb.AppendLine();
            sb.AppendLine("Summary:");
            if (pluginCount > 0) sb.AppendLine($"  Plugin: {pluginCount}");
            if (workflowCount > 0) sb.AppendLine($"  Workflow: {workflowCount}");
            if (bulkDeleteCount > 0) sb.AppendLine($"  BulkDelete: {bulkDeleteCount}");
            if (importCount > 0) sb.AppendLine($"  Import: {importCount}");
            if (solutionCount > 0) sb.AppendLine($"  Solution: {solutionCount}");
            if (otherCount > 0) sb.AppendLine($"  Other: {otherCount}");

            var structured = new GetDebuggingResult
            {
                Action = "jobs",
                TotalCount = entities.Count,
                Jobs = jobs,
                Summary = new JobSummary
                {
                    Plugin = pluginCount,
                    Workflow = workflowCount,
                    BulkDelete = bulkDeleteCount,
                    Import = importCount,
                    Solution = solutionCount,
                    Other = otherCount
                }
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ========== SHARED HELPERS ==========

        private static string BuildStatusFilter(string status)
        {
            return (status ?? "failed").Trim().ToLowerInvariant() switch
            {
                "failed" => "<condition attribute='statuscode' operator='eq' value='31'/>",
                "succeeded" => "<condition attribute='statuscode' operator='eq' value='30'/>",
                "waiting" => "<filter type='or'>" +
                             "<condition attribute='statuscode' operator='eq' value='0'/>" +
                             "<condition attribute='statuscode' operator='eq' value='10'/>" +
                             "</filter>",
                "in_progress" => "<condition attribute='statuscode' operator='eq' value='20'/>",
                "canceled" => "<condition attribute='statuscode' operator='eq' value='32'/>",
                "all" => "",
                _ => "<condition attribute='statuscode' operator='eq' value='31'/>"
            };
        }

        private static string BuildOperationTypeFilter(string operationType)
        {
            if (string.IsNullOrWhiteSpace(operationType)) return "";
            return operationType.Trim().ToLowerInvariant() switch
            {
                "plugin" => "<filter type='or'>" +
                            "<condition attribute='operationtype' operator='eq' value='1'/>" +
                            "<condition attribute='operationtype' operator='eq' value='54'/>" +
                            "</filter>",
                "workflow" => "<condition attribute='operationtype' operator='eq' value='10'/>",
                "bulk_delete" => "<filter type='or'>" +
                                 "<condition attribute='operationtype' operator='eq' value='13'/>" +
                                 "<condition attribute='operationtype' operator='eq' value='23'/>" +
                                 "</filter>",
                "import" => "<filter type='or'>" +
                            "<condition attribute='operationtype' operator='eq' value='5'/>" +
                            "<condition attribute='operationtype' operator='eq' value='17'/>" +
                            "</filter>",
                "goal_rollup" => "<condition attribute='operationtype' operator='eq' value='40'/>",
                "solution" => "<filter type='or'>" +
                              "<condition attribute='operationtype' operator='eq' value='202'/>" +
                              "<condition attribute='operationtype' operator='eq' value='203'/>" +
                              "<condition attribute='operationtype' operator='eq' value='204'/>" +
                              "</filter>",
                "all" => "",
                _ => ""
            };
        }

        private static string MapOperationType(int value) =>
            OperationTypeMap.TryGetValue(value, out var label) ? label : $"System({value})";

        private static string MapStatusCode(int value) =>
            StatusCodeMap.TryGetValue(value, out var label) ? label : value.ToString();

        private int? ResolveEntityTypeCode(string entityLogicalName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityLogicalName,
                    EntityFilters = EntityFilters.Entity
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                return response.EntityMetadata.ObjectTypeCode;
            }
            catch
            {
                return null;
            }
        }

        private static string FormatExecutionTime(double? seconds)
        {
            if (seconds == null || seconds <= 0) return "-";
            if (seconds < 1) return $"{seconds * 1000:F0}ms";
            if (seconds < 60) return $"{seconds:F1}s";
            if (seconds < 3600) return $"{(int)(seconds / 60)}m {(int)(seconds % 60)}s";
            return $"{(int)(seconds / 3600)}h {(int)(seconds % 3600 / 60)}m";
        }

        private static string FormatTimeLabel(int minutesAgo) => minutesAgo switch
        {
            <= 60 => $"{minutesAgo}m",
            <= 1440 => $"{minutesAgo / 60}h",
            _ => $"{minutesAgo / 1440}d"
        };

        private static string TruncateMessage(string message, int maxLength)
        {
            if (string.IsNullOrWhiteSpace(message)) return null;
            var trimmed = message.Trim().Replace("\r\n", " ").Replace("\n", " ");
            return trimmed.Length <= maxLength ? trimmed : trimmed.Substring(0, maxLength) + "...";
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
