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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetFlowsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GetFlowsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly Dictionary<int, string> FlowSessionStatusMap = new()
        {
            [0] = "NotSpecified",
            [1] = "Paused",
            [2] = "Running",
            [3] = "Waiting",
            [4] = "Succeeded",
            [5] = "Skipped",
            [6] = "Suspended",
            [7] = "Cancelled",
            [8] = "Failed"
        };

        [McpServerTool(Name = "get_flows", Title = "List Power Automate cloud flows and run history",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetFlowsResult)),
        Description(
            "Power Automate cloud flows + run history. Modes: no flow_id = list (filtered); flow_id + action='list' = detail + last 5 runs; flow_id + action='runs' = extended run history. For classic (category=0) workflows use get_workflows.\n\n" +

            "WHEN TO USE:\n" +
            "- List flows by name/owner/status\n" +
            "- Inspect a specific flow + recent runs\n" +
            "- Drill into run history with status_filter (debug failures)\n\n" +

            "Fuzzy on name_filter / owner_filter: 0/multi → tool returns disambiguation list and stops; AI must ask user. 1 → auto.")]
        public CallToolResult get_flows(
            [Description("GUID. Empty = list. Set: action determines detail vs runs.")] string flow_id = "",
            [Description("'list' or 'runs'. 'runs' needs flow_id.")] string action = "list",
            [Description("list only. Name contains.")] string name_filter = "",
            [Description("list only. Owner contains.")] string owner_filter = "",
            [Description("'active' / 'draft' / 'suspended' / 'all'.")] string status = "active",
            [Description("runs only: succeeded/failed/running/cancelled/waiting/paused/skipped/suspended.")] string status_filter = "",
            [Description("runs only. Max 43200.")] int minutes_ago = 1440,
            [Description("1–250.")] int max_records = 50)
        {
            var normalizedAction = (action ?? "list").Trim().ToLowerInvariant();
            if (normalizedAction != "list" && normalizedAction != "runs")
                return ErrorResult($"Error: Invalid action '{action?.Trim()}'. Use 'list' or 'runs'.");

            if (normalizedAction == "runs" && string.IsNullOrWhiteSpace(flow_id))
                return ErrorResult(
                    "Error: action='runs' requires flow_id.\n" +
                    "Provide a valid flow GUID as flow_id.");

            if (!string.IsNullOrWhiteSpace(status))
            {
                var s = status.Trim().ToLowerInvariant();
                if (s != "active" && s != "draft" && s != "suspended" && s != "all")
                    return ErrorResult($"Error: Invalid status '{status.Trim()}'. Use 'active', 'draft', 'suspended', or 'all'.");
            }

            if (max_records <= 0) max_records = 50;
            if (max_records > 250) max_records = 250;

            if (minutes_ago <= 0) minutes_ago = 1440;
            if (minutes_ago > 43200) minutes_ago = 43200;

            try
            {
                if (!string.IsNullOrWhiteSpace(flow_id))
                {
                    if (!Guid.TryParse(flow_id.Trim(), out _))
                        return ErrorResult($"Error: '{flow_id.Trim()}' is not a valid GUID.");

                    if (normalizedAction == "runs")
                    {
                        if (!string.IsNullOrWhiteSpace(status_filter) && !ValidStatusFilters.Contains(status_filter.Trim()))
                            return ErrorResult($"Error: Invalid status_filter '{status_filter.Trim()}'. Use 'succeeded', 'failed', 'running', 'cancelled', 'waiting', 'paused', 'skipped', or 'suspended'.");
                        return GetRuns(flow_id.Trim(), status_filter, minutes_ago, max_records);
                    }
                    else
                        return GetDetail(flow_id.Trim());
                }
                else
                {
                    return GetList(name_filter, owner_filter, status, max_records);
                }
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve cloud flows: {ex.Message}");
            }
        }

        private CallToolResult GetList(string nameFilter, string ownerFilter, string status, int maxRecords)
        {
            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='category' operator='eq' value='5'/>");
            filters.AppendLine("      <condition attribute='type' operator='eq' value='1'/>");

            var normalizedStatus = (status ?? "active").Trim().ToLowerInvariant();
            if (normalizedStatus == "active")
                filters.AppendLine("      <condition attribute='statecode' operator='eq' value='1'/>");
            else if (normalizedStatus == "draft")
                filters.AppendLine("      <condition attribute='statecode' operator='eq' value='0'/>");
            else if (normalizedStatus == "suspended")
                filters.AppendLine("      <condition attribute='statecode' operator='eq' value='2'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='workflow'>
    <attribute name='workflowid'/>
    <attribute name='name'/>
    <attribute name='description'/>
    <attribute name='statecode'/>
    <attribute name='statuscode'/>
    <attribute name='ownerid'/>
    <attribute name='ismanaged'/>
    <attribute name='createdon'/>
    <attribute name='modifiedon'/>
    <attribute name='modifiedby'/>
    <attribute name='uniquename'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='name'/>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var entities = result.Entities.ToList();

            if (!string.IsNullOrWhiteSpace(ownerFilter))
            {
                var filter = ownerFilter.Trim();
                entities = entities.Where(e =>
                {
                    var owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name;
                    return owner != null && owner.IndexOf(filter, StringComparison.OrdinalIgnoreCase) >= 0;
                }).ToList();
            }

            if (entities.Count == 0)
            {
                var text = "0 cloud flows found.";
                var emptyResult = new GetFlowsResult
                {
                    TotalCount = 0,
                    Action = "list",
                    Flows = []
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            var flows = entities.Select(MapFlowEntry).ToList();

            var statusLabel = normalizedStatus == "all" ? "" : $" {normalizedStatus}";
            var countWord = entities.Count == 1 ? "flow" : "flows";

            var sb = new StringBuilder(entities.Count * 120 + 128);
            sb.AppendLine($"[Cloud Flows] {entities.Count}{statusLabel} {countWord}");
            sb.AppendLine();
            sb.AppendLine("#\tname\tstatus\towner\tisManaged\tmodifiedOn");

            for (var i = 0; i < flows.Count; i++)
            {
                var f = flows[i];
                sb.AppendLine($"{i + 1}\t{EscapeTab(f.Name)}\t{f.Status}\t{EscapeTab(f.Owner)}\t{(f.IsManaged ? "Yes" : "No")}\t{f.ModifiedOn}");
            }

            var structured = new GetFlowsResult
            {
                TotalCount = flows.Count,
                Action = "list",
                Flows = flows
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult GetDetail(string flowId)
        {
            var fetchXml = $@"<fetch>
  <entity name='workflow'>
    <all-attributes/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{EscapeXml(flowId)}'/>
      <condition attribute='category' operator='eq' value='5'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return ErrorResult(
                    $"Error: Cloud flow '{flowId}' not found (or not a cloud flow).\n" +
                     "Use get_flows without flow_id to list available flows.");
            var entity = result.Entities[0];
            var entry = MapFlowEntry(entity);
            entry.Description = NullIfEmpty(entity.GetAttributeValue<string>("description"));
            entry.CreatedOn = entity.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd");
            entry.UniqueName = NullIfEmpty(entity.GetAttributeValue<string>("uniquename"));
            entry.ModifiedBy = entity.GetAttributeValue<EntityReference>("modifiedby")?.Name;

            // Get last 5 runs
            var runs = GetRecentRuns(flowId, 5);

            var sb = new StringBuilder(512);
            sb.AppendLine($"[Cloud Flow] {entry.Name}");
            sb.AppendLine();
            sb.AppendLine($"workflowId: {entry.WorkflowId}");
            sb.AppendLine($"name: {entry.Name}");
            if (!string.IsNullOrEmpty(entry.Description))
                sb.AppendLine($"description: {entry.Description}");
            sb.AppendLine($"status: {entry.Status}");
            sb.AppendLine($"owner: {entry.Owner}");
            sb.AppendLine($"isManaged: {(entry.IsManaged ? "Yes" : "No")}");
            if (!string.IsNullOrEmpty(entry.UniqueName))
                sb.AppendLine($"uniqueName: {entry.UniqueName}");
            if (!string.IsNullOrEmpty(entry.CreatedOn))
                sb.AppendLine($"createdOn: {entry.CreatedOn}");
            sb.AppendLine($"modifiedOn: {entry.ModifiedOn}");
            if (!string.IsNullOrEmpty(entry.ModifiedBy))
                sb.AppendLine($"modifiedBy: {entry.ModifiedBy}");

            sb.AppendLine();

            if (runs.Count > 0)
            {
                sb.AppendLine($"[Recent Runs] last {runs.Count} runs");
                sb.AppendLine();
                sb.AppendLine("#\tstartedOn\tcompletedOn\tstatus\tduration\terrorMessage");
                for (var i = 0; i < runs.Count; i++)
                {
                    var r = runs[i];
                    sb.AppendLine($"{i + 1}\t{r.StartedOn}\t{r.CompletedOn ?? "-"}\t{r.Status}\t{r.Duration ?? "-"}\t{EscapeTab(r.ErrorMessage ?? "-")}");
                }
            }
            else
            {
                sb.AppendLine("[Recent Runs] 0");
            }

            var structured = new GetFlowsResult
            {
                TotalCount = 1,
                Action = "detail",
                Flows = [entry],
                Runs = runs.Count > 0 ? runs : null
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult GetRuns(string flowId, string statusFilter, int minutesAgo, int maxRecords)
        {
            // First get the flow name
            var flowName = GetFlowName(flowId);
            if (flowName == null)
                return ErrorResult(
                    $"Error: Cloud flow '{flowId}' not found (or not a cloud flow).\n" +
                     "Use get_flows without flow_id to list available flows.");

            var fromDate = DateTime.UtcNow.AddMinutes(-minutesAgo).ToString("o");
            var statusCondition = BuildStatusFilter(statusFilter);

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='flowsession'>
    <attribute name='flowsessionid'/>
    <attribute name='name'/>
    <attribute name='startedon'/>
    <attribute name='completedon'/>
    <attribute name='statuscode'/>
    <attribute name='errorcode'/>
    <attribute name='errormessage'/>
    <attribute name='runduration'/>
    <attribute name='triggertype'/>
    <filter type='and'>
      <condition attribute='regardingobjectid' operator='eq' value='{EscapeXml(flowId)}'/>
      <condition attribute='startedon' operator='ge' value='{fromDate}'/>
      {statusCondition}
    </filter>
    <order attribute='startedon' descending='true'/>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var runs = result.Entities.Select(MapRunEntry).ToList();

            var summary = new FlowRunSummary
            {
                Succeeded = runs.Count(r => r.Status == "Succeeded"),
                Failed = runs.Count(r => r.Status == "Failed"),
                Running = runs.Count(r => r.Status == "Running"),
                Cancelled = runs.Count(r => r.Status == "Cancelled"),
                Waiting = runs.Count(r => r.Status == "Waiting"),
                Paused = runs.Count(r => r.Status == "Paused"),
                Skipped = runs.Count(r => r.Status == "Skipped"),
                Suspended = runs.Count(r => r.Status == "Suspended"),
                NotSpecified = runs.Count(r => r.Status == "NotSpecified")
            };

            var timeLabel = minutesAgo switch
            {
                <= 60 => $"last {minutesAgo}m",
                <= 1440 => $"last {minutesAgo / 60}h",
                _ => $"last {minutesAgo / 1440}d"
            };

            var sb = new StringBuilder(runs.Count * 150 + 256);
            sb.AppendLine($"[Flow Runs] {EscapeTab(flowName)} ({timeLabel})");
            sb.AppendLine();

            if (runs.Count > 0)
            {
                sb.AppendLine("#\tflowSessionId\tstartedOn\tcompletedOn\tstatus\tduration\terrorCode\terrorMessage");
                for (var i = 0; i < runs.Count; i++)
                {
                    var r = runs[i];
                    sb.AppendLine($"{i + 1}\t{r.FlowSessionId}\t{r.StartedOn}\t{r.CompletedOn ?? "-"}\t{r.Status}\t{r.Duration ?? "-"}\t{EscapeTab(r.ErrorCode ?? "-")}\t{EscapeTab(r.ErrorMessage ?? "-")}");
                }
            }
            else
            {
                sb.AppendLine("0 runs found.");
            }

            sb.AppendLine();
            sb.AppendLine("Summary:");
            sb.AppendLine($"  Total: {runs.Count}");
            sb.AppendLine($"  Succeeded: {summary.Succeeded}");
            sb.AppendLine($"  Failed: {summary.Failed}");
            sb.AppendLine($"  Running: {summary.Running}");
            sb.AppendLine($"  Cancelled: {summary.Cancelled}");
            sb.AppendLine($"  Waiting: {summary.Waiting}");
            if (summary.Paused > 0) sb.AppendLine($"  Paused: {summary.Paused}");
            if (summary.Skipped > 0) sb.AppendLine($"  Skipped: {summary.Skipped}");
            if (summary.Suspended > 0) sb.AppendLine($"  Suspended: {summary.Suspended}");
            if (summary.NotSpecified > 0) sb.AppendLine($"  NotSpecified: {summary.NotSpecified}");

            var structured = new GetFlowsResult
            {
                TotalCount = runs.Count,
                Action = "runs",
                Runs = runs,
                RunSummary = summary
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private List<FlowRunEntry> GetRecentRuns(string flowId, int count)
        {
            try
            {
                var fetchXml = $@"<fetch top='{count}'>
  <entity name='flowsession'>
    <attribute name='flowsessionid'/>
    <attribute name='startedon'/>
    <attribute name='completedon'/>
    <attribute name='statuscode'/>
    <attribute name='errorcode'/>
    <attribute name='errormessage'/>
    <attribute name='runduration'/>
    <filter>
      <condition attribute='regardingobjectid' operator='eq' value='{EscapeXml(flowId)}'/>
    </filter>
    <order attribute='startedon' descending='true'/>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return result.Entities.Select(MapRunEntry).ToList();
            }
            catch
            {
                return [];
            }
        }

        private string GetFlowName(string flowId)
        {
            try
            {
                var fetchXml = $@"<fetch>
  <entity name='workflow'>
    <attribute name='name'/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{EscapeXml(flowId)}'/>
      <condition attribute='category' operator='eq' value='5'/>
    </filter>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return result.Entities.Count > 0
                    ? result.Entities[0].GetAttributeValue<string>("name")
                    : null;
            }
            catch
            {
                return null;
            }
        }

        private static CloudFlowEntry MapFlowEntry(Entity e)
        {
            var stateValue = e.GetAttributeValue<OptionSetValue>("statecode")?.Value;

            return new CloudFlowEntry
            {
                WorkflowId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                Status = stateValue switch
                {
                    0 => "Draft",
                    1 => "Active",
                    2 => "Suspended",
                    _ => "Unknown"
                },
                Owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "",
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd") ?? ""
            };
        }

        private static FlowRunEntry MapRunEntry(Entity e)
        {
            var statusValue = e.GetAttributeValue<OptionSetValue>("statuscode")?.Value ?? 0;
            var startedOn = e.GetAttributeValue<DateTime?>("startedon");
            var completedOn = e.GetAttributeValue<DateTime?>("completedon");

            return new FlowRunEntry
            {
                FlowSessionId = e.Id.ToString(),
                StartedOn = startedOn?.ToString("yyyy-MM-dd HH:mm:ss") ?? "",
                CompletedOn = completedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                Status = FlowSessionStatusMap.TryGetValue(statusValue, out var s) ? s : statusValue.ToString(),
                Duration = FormatDuration(startedOn, completedOn),
                ErrorCode = NullIfEmpty(e.GetAttributeValue<string>("errorcode")),
                ErrorMessage = NullIfEmpty(e.GetAttributeValue<string>("errormessage")),
                TriggerType = NullIfEmpty(e.GetAttributeValue<string>("triggertype"))
            };
        }

        private static string FormatDuration(DateTime? started, DateTime? completed)
        {
            if (started == null || completed == null) return null;
            var duration = completed.Value - started.Value;
            if (duration.TotalSeconds < 1) return "<1s";
            if (duration.TotalMinutes < 1) return $"{(int)duration.TotalSeconds}s";
            if (duration.TotalHours < 1) return $"{(int)duration.TotalMinutes}m {duration.Seconds}s";
            return $"{(int)duration.TotalHours}h {duration.Minutes}m";
        }

        private static readonly HashSet<string> ValidStatusFilters = new(StringComparer.OrdinalIgnoreCase)
        {
            "succeeded", "failed", "running", "cancelled", "waiting", "paused", "skipped", "suspended"
        };

        private static string BuildStatusFilter(string statusFilter)
        {
            if (string.IsNullOrWhiteSpace(statusFilter)) return "";
            return statusFilter.Trim().ToLowerInvariant() switch
            {
                "succeeded" => "<condition attribute='statuscode' operator='eq' value='4'/>",
                "failed" => "<condition attribute='statuscode' operator='eq' value='8'/>",
                "running" => "<condition attribute='statuscode' operator='eq' value='2'/>",
                "cancelled" => "<condition attribute='statuscode' operator='eq' value='7'/>",
                "waiting" => "<condition attribute='statuscode' operator='eq' value='3'/>",
                "paused" => "<condition attribute='statuscode' operator='eq' value='1'/>",
                "skipped" => "<condition attribute='statuscode' operator='eq' value='5'/>",
                "suspended" => "<condition attribute='statuscode' operator='eq' value='6'/>",
                _ => ""
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
