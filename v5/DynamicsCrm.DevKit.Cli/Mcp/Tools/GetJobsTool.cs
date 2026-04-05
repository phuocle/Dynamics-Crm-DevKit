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
    public class GetJobsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetJobsTool(ServiceClient serviceClient)
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

        [McpServerTool(Name = "get_jobs", Title = "List and inspect system jobs (async operations) for debugging failures",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetJobsResult)),
        Description(
            "List and inspect system jobs (asyncoperation) for debugging async plugin failures, " +
            "workflow errors, bulk operations, imports, and solution operations.\n\n" +

            "TWO MODES:\n" +
            "- job_id EMPTY: list jobs matching filters (default: failed last 24h)\n" +
            "- job_id PROVIDED: full detail including error message and stack trace\n\n" +

            "TIPS:\n" +
            "- For async plugin failures: get_jobs for error + get_plugin_trace_logs for trace output\n" +
            "- Stack trace only shown in detail mode to save tokens")]
        public CallToolResult get_jobs(
            [Description("Job GUID for full detail. All other filters ignored when provided.")] string job_id = "",
            [Description("Filter by entity (e.g., 'account'). Empty = all.")] string entity_name = "",
            [Description("'failed' (default), 'succeeded', 'waiting', 'in_progress', 'canceled', 'all'.")] string status = "failed",
            [Description("'plugin', 'workflow', 'bulk_delete', 'import', 'goal_rollup', 'solution', 'all'. Empty = all.")] string operation_type = "",
            [Description("Filter by name (contains).")] string name_filter = "",
            [Description("Filter by correlation ID (exact GUID).")] string correlation_id = "",
            [Description("Last N minutes. Default: 1440 (24h). Max: 43200.")] int minutes_ago = 1440,
            [Description("Max jobs (1-500). Default: 50.")] int max_records = 50)
        {
            if (max_records <= 0) max_records = 50;
            if (max_records > 500) max_records = 500;
            if (minutes_ago <= 0) minutes_ago = 1440;
            if (minutes_ago > 43200) minutes_ago = 43200;

            var normalizedStatus = (status ?? "failed").Trim().ToLowerInvariant();
            if (!ValidStatuses.Contains(normalizedStatus))
                return ErrorResult($"Error: '{status?.Trim()}' is not a valid status. Valid values: failed, succeeded, waiting, in_progress, canceled, all.");

            var normalizedOpType = (operation_type ?? "").Trim().ToLowerInvariant();
            if (!string.IsNullOrEmpty(normalizedOpType) && !ValidOperationTypes.Contains(normalizedOpType))
                return ErrorResult($"Error: '{operation_type?.Trim()}' is not a valid operation_type. Valid values: plugin, workflow, bulk_delete, import, goal_rollup, solution, all.");

            if (!string.IsNullOrWhiteSpace(correlation_id) && !Guid.TryParse(correlation_id.Trim(), out _))
                return ErrorResult($"Error: '{correlation_id.Trim()}' is not a valid GUID for correlation_id.");

            try
            {
                if (!string.IsNullOrWhiteSpace(job_id))
                {
                    if (!Guid.TryParse(job_id.Trim(), out _))
                        return ErrorResult($"Error: '{job_id.Trim()}' is not a valid GUID.");
                    return GetDetail(job_id.Trim());
                }
                else
                {
                    return GetList(entity_name, status, operation_type, name_filter, correlation_id, minutes_ago, max_records);
                }
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve system jobs: {ex.Message}");
            }
        }

        private CallToolResult GetList(string entityName, string status, string operationType, string nameFilter, string correlationId, int minutesAgo, int maxRecords)
        {
            var fromDate = DateTime.UtcNow.AddMinutes(-minutesAgo).ToString("yyyy-MM-ddTHH:mm:ssZ");
            var filters = new StringBuilder();

            // Status filter
            var statusFilter = BuildStatusFilter(status);
            if (!string.IsNullOrEmpty(statusFilter))
                filters.AppendLine($"      {statusFilter}");

            // Operation type filter
            var opFilter = BuildOperationTypeFilter(operationType);
            if (!string.IsNullOrEmpty(opFilter))
                filters.AppendLine($"      {opFilter}");

            // Time filter
            filters.AppendLine($"      <condition attribute='startedon' operator='ge' value='{fromDate}'/>");

            // Entity filter — resolve logical name to ObjectTypeCode
            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var entityTypeCode = ResolveEntityTypeCode(entityName.Trim().ToLowerInvariant());
                if (entityTypeCode == null)
                    return ErrorResult($"Error: Entity '{entityName.Trim()}' not found. Use get_metadata_entities to find valid entity names.");
                filters.AppendLine($"      <condition attribute='primaryentitytype' operator='eq' value='{entityTypeCode}'/>");
            }

            // Name filter
            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            // Correlation ID filter
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
                var normalizedStatus = (status ?? "failed").Trim().ToLowerInvariant();
                var text = $"0 system jobs found (status={normalizedStatus}, last {FormatTimeLabel(minutesAgo)}).";
                var emptyResult = new GetJobsResult
                {
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

            return FormatListResults(result.Entities, status, minutesAgo);
        }

        private CallToolResult GetDetail(string jobId)
        {
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
      <condition attribute='asyncoperationid' operator='eq' value='{EscapeXml(jobId)}'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return ErrorResult($"Error: System job '{jobId}' not found.");

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

            var structured = new GetJobsResult
            {
                TotalCount = 1,
                Jobs = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static CallToolResult FormatListResults(DataCollection<Entity> entities, string status, int minutesAgo)
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

                // Summary counts
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

            var structured = new GetJobsResult
            {
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
