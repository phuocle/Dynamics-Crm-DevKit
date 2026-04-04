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
    public class GetFlowsTool
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

        [McpServerTool(Name = "get_flows", Title = "List and inspect Power Automate cloud flows and their run history",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetFlowsResult)),
        Description(
            "List and inspect Power Automate cloud flows (category=5 in the workflow table) " +
            "and their run history from the flowsession table.\n\n" +

            "THREE MODES:\n" +
            "- flow_id EMPTY + action='list': list all cloud flows matching filters\n" +
            "- flow_id PROVIDED + action='list': detail for a single flow + last 5 runs\n" +
            "- flow_id PROVIDED + action='runs': extended run history with filtering\n\n" +

            "PARAMETERS:\n" +
            "- flow_id: GUID of a specific cloud flow. When provided with action='list': shows detail + recent runs. " +
            "When provided with action='runs': shows extended run history. When empty: list mode.\n" +
            "- action: 'list' (default) or 'runs'. 'runs' requires flow_id.\n" +
            "- name_filter: Filter flows by name (contains match). Only used in list mode.\n" +
            "- owner_filter: Filter by owner display name (contains match). Only used in list mode.\n" +
            "- status: 'active' (default), 'draft', 'suspended', or 'all'.\n" +
            "- status_filter: For runs mode: 'succeeded', 'failed', 'running', 'cancelled'. Empty = all.\n" +
            "- minutes_ago: For runs mode: return runs from last N minutes. Default: 1440 (24h). Max: 43200 (30 days).\n" +
            "- max_records: Maximum results (1-250, default 50).\n\n" +

            "RETURNS:\n" +
            "- List mode: TSV table of flows with name, status, owner, isManaged, modifiedOn\n" +
            "- Detail mode: Key-value metadata + last 5 runs table\n" +
            "- Runs mode: Extended run history table with summary counts\n\n" +

            "WHEN TO USE:\n" +
            "- 'List all active Power Automate cloud flows'\n" +
            "- 'Show details of a specific cloud flow'\n" +
            "- 'What flows failed in the last 24 hours?' -> action='runs' + status_filter='failed'\n" +
            "- 'Show run history for flow X' -> action='runs' + flow_id\n" +
            "- 'Which flows are owned by John?' -> owner_filter='John'\n" +
            "- 'Are there any suspended flows?' -> status='suspended'\n\n" +

            "RELATIONSHIP TO OTHER TOOLS:\n" +
            "- get_workflows: classic workflows only (category=0) -- use get_flows for cloud flows (category=5)\n" +
            "- get_rules: business rules only (category=2) -- no overlap\n" +
            "- get_histories: audit trail (field-level changes) -- different from flow run history\n\n" +

            "TIPS:\n" +
            "- Cloud flows are stored in the 'workflow' entity with category=5\n" +
            "- Run history is stored in the 'flowsession' entity\n" +
            "- Only definition records (type=1) are returned, not activations or templates\n" +
            "- Detail mode automatically includes the last 5 runs for quick overview")]
        public CallToolResult get_flows(
            [Description(
                "GUID of a specific cloud flow. When provided with action='list': shows detail + last 5 runs. " +
                "When provided with action='runs': shows extended run history. " +
                "When empty: list mode. Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'."
            )] string flow_id = "",
            [Description(
                "'list' (default) or 'runs'. " +
                "'list' with empty flow_id = list all flows. " +
                "'list' with flow_id = detail for one flow + last 5 runs. " +
                "'runs' requires flow_id = extended run history with filtering."
            )] string action = "list",
            [Description(
                "Filter flows by name (contains match). " +
                "Only used in list mode. Example: 'Sync Accounts'."
            )] string name_filter = "",
            [Description(
                "Filter by owner display name (contains match). " +
                "Only used in list mode. Example: 'John Smith'."
            )] string owner_filter = "",
            [Description(
                "Filter by flow status: 'active' (on), 'draft' (off), 'suspended', or 'all'. " +
                "Default: 'active'."
            )] string status = "active",
            [Description(
                "For runs mode: filter by run status. " +
                "Values: 'succeeded', 'failed', 'running', 'cancelled', 'waiting', 'paused', 'skipped', 'suspended'. " +
                "Empty = all statuses."
            )] string status_filter = "",
            [Description(
                "For runs mode: return runs from the last N minutes. " +
                "Default: 1440 (24 hours). Max: 43200 (30 days)."
            )] int minutes_ago = 1440,
            [Description(
                "Maximum results to return (1-250). Default: 50."
            )] int max_records = 50)
        {
            var normalizedAction = (action ?? "list").Trim().ToLowerInvariant();
            if (normalizedAction != "list" && normalizedAction != "runs")
                return ErrorResult($"Error: Invalid action '{action?.Trim()}'. Use 'list' or 'runs'.");

            if (normalizedAction == "runs" && string.IsNullOrWhiteSpace(flow_id))
                return ErrorResult("Error: action='runs' requires flow_id.");

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
                        return GetRuns(flow_id.Trim(), status_filter, minutes_ago, max_records);
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
                return ErrorResult($"Error: Cloud flow '{flowId}' not found (or not a cloud flow).");

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
                return ErrorResult($"Error: Cloud flow '{flowId}' not found (or not a cloud flow).");

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
                Waiting = runs.Count(r => r.Status == "Waiting")
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
