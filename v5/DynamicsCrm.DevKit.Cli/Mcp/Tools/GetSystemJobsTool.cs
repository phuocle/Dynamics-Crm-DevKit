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
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetSystemJobsTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;

        public GetSystemJobsTool(IOrganizationService orgService)
        {
            _orgService = orgService;
        }

        private static readonly HashSet<string> ValidStatuses = new(StringComparer.OrdinalIgnoreCase)
        {
            "failed", "succeeded", "waiting", "in_progress", "canceled", "all"
        };

        private static readonly HashSet<string> ValidOperationTypes = new(StringComparer.OrdinalIgnoreCase)
        {
            "plugin", "workflow", "bulk_delete", "import", "goal_rollup", "solution", "all"
        };

        [McpServerTool(Name = "get_system_jobs", Title = "List and inspect system jobs",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetSystemJobsResult)),
        Description(
            "List asynchronous system jobs or inspect one job with its diagnostic messages.\n\n" +
            "WHEN TO USE:\n" +
            "- Debug async failures (list failed → detail for message + friendlyMessage)\n" +
            "- Monitor bulk ops (operation_type='bulk_delete'/'import'/'solution')\n" +
            "- Trace one request (correlation_id across jobs)\n" +
            "- Async plugin failures: combine with get_plugin_trace_logs\n\n" +
            "RELATED TOOLS:\n" +
            "- get_plugin_trace_logs → plugin execution traces (sync + async)\n" +
            "- get_workflows → classic workflow definitions (background + realtime)\n" +
            "- get_flows → Power Automate cloud flows + run history")]
        public CallToolResult get_system_jobs(
            [Description("GUID → detail. Empty = list.")] string record_id = "",
            [Description("Filter by entity Display Name or logical name (e.g. 'Account' or 'account').")] string entity_name = "",
            [Description("failed/succeeded/waiting/in_progress/canceled/all.")] string status = "failed",
            [Description("plugin/workflow/bulk_delete/import/goal_rollup/solution/all.")] string operation_type = "",
            [Description("Name contains.")] string name_filter = "",
            [Description("GUID. Trace one request across jobs.")] string correlation_id = "",
            [Description("0 = 1440 (24h) default. Max 43200.")] int minutes_ago = 0,
            [Description("Max 500.")] int max_records = 50)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(record_id))
                    return HandleDetail(record_id);

                return HandleList(entity_name, status, operation_type, name_filter, correlation_id, minutes_ago, max_records);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleList(string entityName, string status, string operationType, string nameFilter, string correlationId, int minutesAgo, int maxRecords)
        {
            // ── Validation ──────────────────────────────────────────────
            if (minutesAgo < 0) minutesAgo = 1440;
            if (minutesAgo == 0) minutesAgo = 1440;
            if (minutesAgo > 43200) minutesAgo = 43200;
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 500) maxRecords = 500;

            var normalizedStatus = (status ?? "failed").Trim().ToLowerInvariant();
            if (!ValidStatuses.Contains(normalizedStatus))
                return Error($"'{status?.Trim()}' is not a valid status.", "Valid values: failed, succeeded, waiting, in_progress, canceled, all.");

            var normalizedOpType = (operationType ?? "").Trim().ToLowerInvariant();
            if (!string.IsNullOrEmpty(normalizedOpType) && !ValidOperationTypes.Contains(normalizedOpType))
                return Error($"'{operationType?.Trim()}' is not a valid operation_type.", "Valid values: plugin, workflow, bulk_delete, import, goal_rollup, solution, all.");

            if (!string.IsNullOrWhiteSpace(correlationId) && !Guid.TryParse(correlationId.Trim(), out _))
                return Error($"'{correlationId.Trim()}' is not a valid GUID for correlation_id.", "Pass the correlationId GUID copied from a system job entry in list mode.");

            string primaryEntityLogical = null;
            int? primaryEntityTypeCode = null;
            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "get_system_jobs");
                if (!entityResult.IsSuccess)
                    return Error(
                        $"entity_name {entityResult.Error.Split("\r\n")[0]}",
                        "Use get_tables to list entities before calling get_system_jobs.");

                primaryEntityLogical = entityResult.Value.LogicalName;
                primaryEntityTypeCode = ResolveEntityTypeCode(primaryEntityLogical);
                if (primaryEntityTypeCode == null)
                    return Error($"Entity '{entityName.Trim()}' not found.", "Use get_tables to find valid entity names.");
                entityName = primaryEntityLogical;
            }

            // ── Build FetchXML ──────────────────────────────────────────
            var fetchXml = BuildListFetchXml(status, operationType, entityName, primaryEntityTypeCode, nameFilter, correlationId, minutesAgo, maxRecords);
            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));

            var timeScope = FormatTimeScope(minutesAgo);

            if (result.Entities.Count == 0)
            {
                var emptyStructured = new GetSystemJobsResult
                {
                    Mode = "list",
                    TotalCount = 0,
                    TimeScope = timeScope,
                    Status = normalizedStatus == "all" ? null : normalizedStatus,
                    OperationType = NullIfEmpty(normalizedOpType == "all" ? null : normalizedOpType),
                    EntityName = NullIfEmpty(primaryEntityLogical),
                    CorrelationId = NullIfEmpty(correlationId?.Trim()),
                    Jobs = null,
                    Summary = null
                };
                return Success($"0 system jobs ({timeScope}).", emptyStructured);
            }

            // ── Build entries + summary ─────────────────────────────────
            var jobs = new List<SystemJobEntry>(result.Entities.Count);
            var summary = new JobSummary();

            foreach (var e in result.Entities)
            {
                jobs.Add(BuildEntry(e, includeDetail: false));
                var opTypeValue = e.GetAttributeValue<OptionSetValue>("operationtype")?.Value ?? 0;
                switch (opTypeValue)
                {
                    case 1 or 54: summary.Plugin = (summary.Plugin ?? 0) + 1; break;
                    case 10: summary.Workflow = (summary.Workflow ?? 0) + 1; break;
                    case 13 or 23: summary.BulkDelete = (summary.BulkDelete ?? 0) + 1; break;
                    case 5 or 17: summary.Import = (summary.Import ?? 0) + 1; break;
                    case 202 or 203 or 204: summary.Solution = (summary.Solution ?? 0) + 1; break;
                    default: summary.Other = (summary.Other ?? 0) + 1; break;
                }
            }

            var structured = new GetSystemJobsResult
            {
                Mode = "list",
                TotalCount = result.Entities.Count,
                TimeScope = timeScope,
                Status = normalizedStatus == "all" ? null : normalizedStatus,
                OperationType = NullIfEmpty(normalizedOpType == "all" ? null : normalizedOpType),
                EntityName = NullIfEmpty(primaryEntityLogical),
                CorrelationId = NullIfEmpty(correlationId?.Trim()),
                Jobs = jobs,
                Summary = summary
            };

            return Success(BuildListText(structured.TotalCount, timeScope, normalizedStatus, primaryEntityLogical), structured);
        }

        private CallToolResult HandleDetail(string recordId)
        {
            if (!Guid.TryParse(recordId.Trim(), out _))
                return Error($"'{recordId.Trim()}' is not a valid GUID.", "Use an asyncoperation ID from list mode.");

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

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return Error($"System job '{recordId.Trim()}' not found.", "Use get_system_jobs in list mode (record_id empty) to find a valid jobId.");

            var entry = BuildEntry(result.Entities[0], includeDetail: true);
            var structured = new GetSystemJobsResult
            {
                Mode = "detail",
                TotalCount = 1,
                Jobs = [entry]
            };

            return Success(BuildDetailText(entry), structured);
        }

        // ── Entry builder (shared by list + detail) ───────────────────────────
        // Fields verified by probe on org DEVKITV4 (2026-08-06):
        //   operationtype=OptionSetValue → FormattedValues["operationtype"] (e.g. "Calculate Rollup Field", "System Event")
        //   statecode=OptionSetValue → FormattedValues["statecode"] (e.g. "Completed", "Suspended")
        //   statuscode=OptionSetValue → FormattedValues["statuscode"] (e.g. "Succeeded", "Waiting", "Failed")
        //   primaryentitytype=string (logical name, can be empty)
        //   executiontimespan=double (seconds)
        //   friendlymessage/message=Memo (detail only for message)
        //   errorcode=int? (only when failed)
        //   owningextensionid/workflowactivationid/regardingobjectid=EntityReference

        private static SystemJobEntry BuildEntry(Entity e, bool includeDetail)
        {
            var startedOn = e.GetAttributeValue<DateTime?>("startedon");
            var completedOn = e.GetAttributeValue<DateTime?>("completedon");
            var createdOn = e.GetAttributeValue<DateTime?>("createdon");
            var executionTime = e.GetAttributeValue<double?>("executiontimespan");
            var retryCount = e.GetAttributeValue<int?>("retrycount");
            var depth = e.GetAttributeValue<int?>("depth");
            var correlationId = e.GetAttributeValue<Guid?>("correlationid");
            var owner = e.GetAttributeValue<EntityReference>("ownerid");
            var pluginStep = e.GetAttributeValue<EntityReference>("owningextensionid");
            var workflow = e.GetAttributeValue<EntityReference>("workflowactivationid");
            var regarding = e.GetAttributeValue<EntityReference>("regardingobjectid");
            var postponeUntil = e.GetAttributeValue<DateTime?>("postponeuntil");
            var friendlyMessage = e.GetAttributeValue<string>("friendlymessage");
            var message = e.GetAttributeValue<string>("message");
            var primaryEntity = e.GetAttributeValue<string>("primaryentitytype");
            var errorCode = e.GetAttributeValue<int?>("errorcode");

            var entry = new SystemJobEntry
            {
                JobId = e.Id.ToString(),
                Name = NullIfEmpty(e.GetAttributeValue<string>("name")),
                OperationType = NullIfEmpty(e.FormattedValues.Contains("operationtype") ? e.FormattedValues["operationtype"] : null),
                PrimaryEntity = NullIfEmpty(primaryEntity),
                State = NullIfEmpty(e.FormattedValues.Contains("statecode") ? e.FormattedValues["statecode"] : null),
                Status = NullIfEmpty(e.FormattedValues.Contains("statuscode") ? e.FormattedValues["statuscode"] : null),
                MessageName = NullIfEmpty(e.GetAttributeValue<string>("messagename")),
                StartedOn = startedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                CompletedOn = completedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                CreatedOn = createdOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                ExecutionTime = FormatExecutionTime(executionTime),
                RetryCount = retryCount,
                Depth = depth,
                ErrorCode = errorCode,
                CorrelationId = correlationId?.ToString(),
                Owner = NullIfEmpty(owner?.Name),
                PluginStep = NullIfEmpty(pluginStep?.Name),
                WorkflowName = NullIfEmpty(workflow?.Name),
                RegardingRecord = regarding != null ? $"{regarding.LogicalName}/{regarding.Id}" : null,
                PostponeUntil = postponeUntil?.ToString("yyyy-MM-dd HH:mm:ss"),
                FriendlyMessage = NullIfEmpty(friendlyMessage)
            };

            if (includeDetail)
                entry.Message = NullIfEmpty(message);

            return entry;
        }

        // ── FetchXML builder ──────────────────────────────────────────────────

        private static string BuildListFetchXml(string status, string operationType, string entityLogicalName, int? entityTypeCode, string nameFilter, string correlationId, int minutesAgo, int maxRecords)
        {
            var sb = new StringBuilder(640);
            sb.Append($"<fetch top='{maxRecords}'>");
            sb.Append("<entity name='asyncoperation'>");
            sb.Append("<attribute name='asyncoperationid'/>");
            sb.Append("<attribute name='name'/>");
            sb.Append("<attribute name='operationtype'/>");
            sb.Append("<attribute name='primaryentitytype'/>");
            sb.Append("<attribute name='statecode'/>");
            sb.Append("<attribute name='statuscode'/>");
            sb.Append("<attribute name='startedon'/>");
            sb.Append("<attribute name='completedon'/>");
            sb.Append("<attribute name='executiontimespan'/>");
            sb.Append("<attribute name='friendlymessage'/>");
            sb.Append("<attribute name='messagename'/>");
            sb.Append("<attribute name='errorcode'/>");
            sb.Append("<attribute name='ownerid'/>");
            sb.Append("<attribute name='correlationid'/>");
            sb.Append("<filter type='and'>");

            var statusFilter = BuildStatusFilter(status);
            if (!string.IsNullOrEmpty(statusFilter))
                sb.Append(statusFilter);

            var opFilter = BuildOperationTypeFilter(operationType);
            if (!string.IsNullOrEmpty(opFilter))
                sb.Append(opFilter);

            var sinceUtc = DateTime.UtcNow.AddMinutes(-minutesAgo).ToString("yyyy-MM-ddTHH:mm:ssZ");
            // Waiting jobs have startedon=null, so filter on createdon for both 'waiting' and 'all' statuses.
            // 'all' includes waiting jobs, so it must also use createdon to avoid dropping them.
            var normalizedStatusForTime = (status ?? "failed").Trim().ToLowerInvariant();
            var timeAttribute = (normalizedStatusForTime == "waiting" || normalizedStatusForTime == "all")
                ? "createdon"
                : "startedon";
            sb.Append($"<condition attribute='{timeAttribute}' operator='ge' value='{sinceUtc}'/>");

            if (!string.IsNullOrWhiteSpace(entityLogicalName) && entityTypeCode.HasValue)
                sb.Append($"<condition attribute='primaryentitytype' operator='eq' value='{entityTypeCode.Value}'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                sb.Append($"<condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(correlationId) && Guid.TryParse(correlationId.Trim(), out _))
                sb.Append($"<condition attribute='correlationid' operator='eq' value='{EscapeXml(correlationId.Trim())}'/>");

            sb.Append("</filter>");
            // Order by the same attribute used for time filtering — waiting/all use createdon, others use startedon.
            sb.Append($"<order attribute='{timeAttribute}' descending='true'/>");
            sb.Append("</entity>");
            sb.Append("</fetch>");
            return sb.ToString();
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

        // ── Text builders (1 line, concise) ───────────────────────────────────

        private static string BuildListText(int count, string timeScope, string normalizedStatus, string primaryEntity)
        {
            var word = count == 1 ? "job" : "jobs";
            var statusPart = normalizedStatus == "all" ? "" : $"{normalizedStatus} ";
            var entityPart = string.IsNullOrWhiteSpace(primaryEntity) ? "" : $" on {primaryEntity}";
            return $"{count} {statusPart}system {word}{entityPart} ({timeScope}).";
        }

        private static string BuildDetailText(SystemJobEntry entry)
        {
            var sb = new StringBuilder(160);
            sb.Append($"{entry.JobId}");
            if (!string.IsNullOrWhiteSpace(entry.Name))
                sb.Append($". {entry.Name}");
            if (!string.IsNullOrWhiteSpace(entry.OperationType))
                sb.Append($" ({entry.OperationType})");
            if (!string.IsNullOrWhiteSpace(entry.Status) && entry.Status != "Succeeded")
                sb.Append($" — {entry.Status}");
            if (entry.ErrorCode != null)
                sb.Append($". ErrorCode: {entry.ErrorCode}");
            if (!string.IsNullOrWhiteSpace(entry.Message))
                sb.Append(". Error message: available");
            if (!string.IsNullOrWhiteSpace(entry.FriendlyMessage))
                sb.Append(". Friendly message: available");
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

        private static string FormatExecutionTime(double? seconds)
        {
            if (seconds == null || seconds <= 0) return null;
            if (seconds < 1) return $"{seconds * 1000:F0}ms";
            if (seconds < 60) return $"{seconds:F1}s";
            if (seconds < 3600) return $"{(int)(seconds / 60)}m {(int)(seconds % 60)}s";
            return $"{(int)(seconds / 3600)}h {(int)(seconds % 3600 / 60)}m";
        }

        private int? ResolveEntityTypeCode(string entityLogicalName)
        {
            // primaryentitytype on asyncoperation is an int ObjectTypeCode, not a string.
            // Resolve the entity's ObjectTypeCode via RetrieveEntityRequest so we can filter.
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = EntityFilters.Entity
            };
            var response = (RetrieveEntityResponse)_orgService.Execute(request);
            return response.EntityMetadata.ObjectTypeCode;
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");
    }
}
