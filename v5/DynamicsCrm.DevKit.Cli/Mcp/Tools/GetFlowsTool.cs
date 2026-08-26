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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
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

        private const int PagingPageSize = 5000;

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
            "RELATED TOOLS:\n" +
            "- get_workflows → classic workflows (category=0)\n" +
            "- get_business_process_flows → BPF definitions + stages\n" +
            "- get_business_rules → client-side business rules")]
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
            try
            {
            var normalizedAction = (action ?? "list").Trim().ToLowerInvariant();
            if (normalizedAction != "list" && normalizedAction != "runs")
                return Error($"Invalid action '{action?.Trim()}'.",
                    "Use 'list' or 'runs'.");

            if (normalizedAction == "runs" && string.IsNullOrWhiteSpace(flow_id))
                return Error("action='runs' requires flow_id.",
                    "Provide a valid flow GUID as flow_id.");

            if (!string.IsNullOrWhiteSpace(status))
            {
                var s = status.Trim().ToLowerInvariant();
                if (s != "active" && s != "draft" && s != "suspended" && s != "all")
                    return Error($"Invalid status '{status.Trim()}'.",
                        "Use 'active', 'draft', 'suspended', or 'all'.");
            }

            if (max_records <= 0) max_records = 50;
            if (max_records > 250) max_records = 250;

            if (minutes_ago <= 0) minutes_ago = 1440;
            if (minutes_ago > 43200) minutes_ago = 43200;

                if (!string.IsNullOrWhiteSpace(flow_id))
                {
                    if (!Guid.TryParse(flow_id.Trim(), out _))
                        return Error($"'{flow_id.Trim()}' is not a valid GUID.",
                            "GUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.");

                    if (normalizedAction == "runs")
                    {
                        if (!string.IsNullOrWhiteSpace(status_filter) && !ValidStatusFilters.Contains(status_filter.Trim()))
                            return Error($"Invalid status_filter '{status_filter.Trim()}'.",
                                "Use 'succeeded', 'failed', 'running', 'cancelled', 'waiting', 'paused', 'skipped', or 'suspended'.");
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
                return ThrowException(ex);
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

            // Owner is polymorphic (user/team), so apply that filter client-side.
            // Do not cap the server result before filtering or a valid owner match can be lost.
            var topAttribute = string.IsNullOrWhiteSpace(ownerFilter) ? $" top='{maxRecords}'" : "";
            var fetchXml = $@"<fetch{topAttribute}>
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

            List<Entity> entities;
            if (!string.IsNullOrWhiteSpace(ownerFilter))
            {
                // A single RetrieveMultiple only returns one page; page through every
                // page so owner matches on later pages are not dropped (false zero).
                var filter = ownerFilter.Trim();
                var matched = new List<Entity>();
                var page = 1;
                string pagingCookie = null;
                while (matched.Count < maxRecords)
                {
                    var pagedFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchXml, page, PagingPageSize, pagingCookie);
                    var pageResult = _serviceClient.RetrieveMultiple(new FetchExpression(pagedFetchXml));

                    foreach (var e in pageResult.Entities)
                    {
                        var owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name;
                        if (owner != null && owner.IndexOf(filter, StringComparison.OrdinalIgnoreCase) >= 0)
                            matched.Add(e);
                    }

                    if (!pageResult.MoreRecords || pageResult.Entities.Count == 0)
                        break;

                    pagingCookie = pageResult.PagingCookie;
                    page++;
                }
                entities = matched;
            }
            else
            {
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                entities = result.Entities.ToList();
            }

            if (entities.Count == 0)
            {
                return Success("0 cloud flows found.", new GetFlowsResult
                {
                    TotalCount = 0,
                    Action = "list"
                });
            }

            var flows = entities.Select(MapFlowEntry).ToList();

            var statusLabel = normalizedStatus == "all" ? "" : $" {normalizedStatus}";
            var countWord = entities.Count == 1 ? "flow" : "flows";

            var structured = new GetFlowsResult
            {
                TotalCount = flows.Count,
                Action = "list",
                Flows = flows
            };

            return Success($"{entities.Count}{statusLabel} {countWord} found.", structured);
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
                return Error($"Cloud flow '{flowId}' not found (or not a cloud flow).",
                    "Use get_flows without flow_id to list available flows.");
            var entity = result.Entities[0];
            var entry = MapFlowEntry(entity);
            entry.Description = NullIfEmpty(entity.GetAttributeValue<string>("description"));
            entry.CreatedOn = entity.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd");
            entry.UniqueName = NullIfEmpty(entity.GetAttributeValue<string>("uniquename"));
            entry.ModifiedBy = entity.GetAttributeValue<EntityReference>("modifiedby")?.Name;

            // Get last 5 runs
            var runs = GetRecentRuns(flowId, 5);

            var structured = new GetFlowsResult
            {
                TotalCount = 1,
                Action = "detail",
                Flows = [entry],
                Runs = runs.Count > 0 ? runs : null
            };

            var runWord = runs.Count == 1 ? "run" : "runs";
            return Success($"{entry.Name}: detail + {runs.Count} recent {runWord}.", structured);
        }

        private CallToolResult GetRuns(string flowId, string statusFilter, int minutesAgo, int maxRecords)
        {
            var flowName = GetFlowName(flowId);
            if (flowName == null)
                return Error($"Cloud flow '{flowId}' not found (or not a cloud flow).",
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

            var structured = new GetFlowsResult
            {
                TotalCount = runs.Count,
                Action = "runs",
                Runs = runs.Count > 0 ? runs : null,
                RunSummary = summary
            };

            var runWord = runs.Count == 1 ? "run" : "runs";
            return Success($"{flowName} ({timeLabel}): {runs.Count} {runWord}.", structured);
        }

        private List<FlowRunEntry> GetRecentRuns(string flowId, int count)
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

        private string GetFlowName(string flowId)
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
                Owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name,
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd")
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
                StartedOn = startedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
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
    }
}
