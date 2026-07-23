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
    public class GetBusinessProcessFlowsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GetBusinessProcessFlowsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly Dictionary<int, string> StageCategoryMap = new()
        {
            [0] = "Qualify",
            [1] = "Develop",
            [2] = "Propose",
            [3] = "Close",
            [4] = "Identify",
            [5] = "Research",
            [6] = "Resolve",
            [7] = "Approval"
        };

        [McpServerTool(Name = "get_business_process_flows", Title = "List business process flows and stages",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetBpfsResult)),
        Description(
            "Business Process Flows (BPFs) + stages. Each BPF auto-creates its own Dataverse entity (uniqueName = logical name). bpf_id empty = list. Set = detail with stages. BPFs can span multiple entities (Lead → Opportunity); each stage has its own primaryEntity.\n\n" +

            "WHEN TO USE:\n" +
            "- Inspect stage sequence + primary entities for a BPF\n" +
            "- Find BPFs bound to an entity (entity_name filter)\n" +
            "- Resolve BPF unique/logical name for the auto-created entity\n\n" +

            "Fuzzy on bpf_name: 0/multi → tool returns disambiguation list and stops; AI must ask user. 1 → auto-detail.")]
        public CallToolResult get_business_process_flows(
            [Description("GUID → detail. Empty = list.")] string bpf_id = "",
            [Description("Name contains. 1 match → auto-detail.")] string bpf_name = "",
            [Description("Primary entity filter, Display Name or logical name (e.g. 'Lead' or 'lead').")] string entity_name = "",
            [Description("'active' / 'draft' / 'all'.")] string status = "active",
            [Description("List only. Detail always includes.")] bool include_stages = false,
            [Description("1–250.")] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(status))
                status = "active";
            else
                status = status.Trim().ToLowerInvariant();

            if (status != "active" && status != "draft" && status != "all")
                return ErrorResult($"Error: Invalid status '{status}'. Use 'active', 'draft', or 'all'.");

            if (max_records <= 0) max_records = 50;
            if (max_records > 250) max_records = 250;

            try
            {
                if (!string.IsNullOrWhiteSpace(bpf_id))
                {
                    if (!Guid.TryParse(bpf_id.Trim(), out _))
                        return ErrorResult($"Error: '{bpf_id.Trim()}' is not a valid GUID.");

                    return GetDetail(bpf_id.Trim());
                }

                if (!string.IsNullOrWhiteSpace(entity_name))
                {
                    var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_business_process_flows");
                    if (!entityResult.IsSuccess)
                        return ErrorResult($"Error: entity_name '{entity_name.Trim()}': {entityResult.Error}");
                    entity_name = entityResult.Value.LogicalName;
                }

                var bpfs = QueryBpfs(bpf_name, entity_name, status, max_records);

                if (bpfs.Count == 0)
                {
                    var text = "0 Business Process Flows found.";
                    var emptyResult = new GetBpfsResult
                    {
                        TotalCount = 0,
                        Bpfs = []
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = text }],
                        StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                    };
                }

                // Auto-detail if bpf_name matches exactly 1
                if (!string.IsNullOrWhiteSpace(bpf_name) && bpfs.Count == 1)
                    return GetDetail(bpfs[0].Id.ToString());

                return FormatList(bpfs, status, include_stages);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve Business Process Flows: {ex.Message}");
            }
        }

        private List<Entity> QueryBpfs(string bpfName, string entityName, string status, int maxRecords)
        {
            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='category' operator='eq' value='4'/>");
            filters.AppendLine("      <condition attribute='type' operator='eq' value='1'/>");

            if (status == "active")
                filters.AppendLine("      <condition attribute='statecode' operator='eq' value='1'/>");
            else if (status == "draft")
                filters.AppendLine("      <condition attribute='statecode' operator='eq' value='0'/>");

            if (!string.IsNullOrWhiteSpace(bpfName))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(bpfName.Trim())}%'/>");

            // Note: primaryentity is EntityName type (Int32 internally), cannot filter in FetchXML with string.
            // Fetch more records and filter client-side.
            var fetchLimit = !string.IsNullOrWhiteSpace(entityName) ? 250 : maxRecords;

            var fetchXml = $@"<fetch top='{fetchLimit}'>
  <entity name='workflow'>
    <attribute name='workflowid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='description'/>
    <attribute name='primaryentity'/>
    <attribute name='statecode'/>
    <attribute name='statuscode'/>
    <attribute name='ownerid'/>
    <attribute name='ismanaged'/>
    <attribute name='businessprocesstype'/>
    <attribute name='createdon'/>
    <attribute name='modifiedon'/>
    <attribute name='modifiedby'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='name'/>
  </entity>
</fetch>";

            var entities = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml)).Entities.ToList();

            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var normalizedEntity = entityName.Trim().ToLowerInvariant();
                entities = entities
                    .Where(e => string.Equals(e.GetAttributeValue<string>("primaryentity"), normalizedEntity, StringComparison.OrdinalIgnoreCase))
                    .Take(maxRecords)
                    .ToList();
            }

            return entities;
        }

        private CallToolResult GetDetail(string bpfId)
        {
            var fetchXml = $@"<fetch>
  <entity name='workflow'>
    <attribute name='workflowid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='description'/>
    <attribute name='primaryentity'/>
    <attribute name='statecode'/>
    <attribute name='statuscode'/>
    <attribute name='ownerid'/>
    <attribute name='ismanaged'/>
    <attribute name='businessprocesstype'/>
    <attribute name='createdon'/>
    <attribute name='modifiedon'/>
    <attribute name='modifiedby'/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{EscapeXml(bpfId)}'/>
      <condition attribute='category' operator='eq' value='4'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return ErrorResult($"Error: Business Process Flow '{bpfId}' not found (or not a BPF workflow).");

            var entity = result.Entities[0];
            var entry = MapBpfEntry(entity);

            var stages = GetStages(bpfId);
            entry.StageCount = stages.Count;
            entry.Stages = stages;

            var sb = new StringBuilder(512);
            sb.AppendLine($"[Business Process Flow] {entry.Name}");
            sb.AppendLine();
            sb.AppendLine($"workflowId: {entry.WorkflowId}");
            sb.AppendLine($"name: {entry.Name}");
            sb.AppendLine($"uniqueName: {entry.UniqueName}");
            if (!string.IsNullOrEmpty(entry.Description))
                sb.AppendLine($"description: {entry.Description}");
            sb.AppendLine($"primaryEntity: {entry.PrimaryEntity}");
            sb.AppendLine($"status: {entry.Status}");
            sb.AppendLine($"businessProcessType: {entry.BusinessProcessType}");
            sb.AppendLine($"isManaged: {(entry.IsManaged ? "Yes" : "No")}");
            sb.AppendLine($"owner: {entry.Owner}");
            sb.AppendLine($"createdOn: {entry.CreatedOn}");
            sb.AppendLine($"modifiedOn: {entry.ModifiedOn}");
            if (!string.IsNullOrEmpty(entry.ModifiedBy))
                sb.AppendLine($"modifiedBy: {entry.ModifiedBy}");

            sb.AppendLine();

            if (stages.Count > 0)
            {
                var stageWord = stages.Count == 1 ? "stage" : "stages";
                sb.AppendLine($"[Stages] {stages.Count} {stageWord} (ordered)");
                sb.AppendLine();
                sb.AppendLine("#\tstageName\tstageCategory\tprimaryEntity");
                for (var i = 0; i < stages.Count; i++)
                {
                    var s = stages[i];
                    sb.AppendLine($"{i + 1}\t{EscapeTab(s.StageName)}\t{s.StageCategory}\t{s.PrimaryEntity}");
                }
            }
            else
            {
                sb.AppendLine("[Stages] 0");
            }

            var structured = new GetBpfsResult
            {
                TotalCount = 1,
                Bpfs = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult FormatList(List<Entity> entities, string status, bool includeStages)
        {
            var bpfs = entities.Select(MapBpfEntry).ToList();

            // Get stage counts
            var bpfIds = entities.Select(e => e.Id.ToString()).ToList();
            var stageCounts = GetStageCounts(bpfIds);
            foreach (var bpf in bpfs)
            {
                bpf.StageCount = stageCounts.TryGetValue(bpf.WorkflowId, out var count) ? count : 0;
            }

            // Optionally include full stages
            if (includeStages)
            {
                foreach (var bpf in bpfs)
                {
                    bpf.Stages = GetStages(bpf.WorkflowId);
                }
            }

            var statusLabel = status == "all" ? "" : $" {status}";
            var countWord = bpfs.Count == 1 ? "BPF" : "BPFs";

            var sb = new StringBuilder(bpfs.Count * 150 + 256);
            sb.AppendLine($"[Business Process Flows] {bpfs.Count}{statusLabel} {countWord}");
            sb.AppendLine();
            sb.AppendLine("#\tname\tprimaryEntity\tuniqueName\tstageCount\tstatus\tisManaged\tmodifiedOn");

            for (var i = 0; i < bpfs.Count; i++)
            {
                var b = bpfs[i];
                sb.AppendLine($"{i + 1}\t{EscapeTab(b.Name)}\t{b.PrimaryEntity}\t{b.UniqueName}\t{b.StageCount}\t{b.Status}\t{(b.IsManaged ? "Yes" : "No")}\t{b.ModifiedOn}");
            }

            if (includeStages)
            {
                sb.AppendLine();
                foreach (var b in bpfs)
                {
                    if (b.Stages != null && b.Stages.Count > 0)
                    {
                        sb.AppendLine($"[{EscapeTab(b.Name)}] {b.Stages.Count} stages");
                        sb.AppendLine("#\tstageName\tstageCategory\tprimaryEntity");
                        for (var j = 0; j < b.Stages.Count; j++)
                        {
                            var s = b.Stages[j];
                            sb.AppendLine($"{j + 1}\t{EscapeTab(s.StageName)}\t{s.StageCategory}\t{s.PrimaryEntity}");
                        }
                        sb.AppendLine();
                    }
                }
            }

            var structured = new GetBpfsResult
            {
                TotalCount = bpfs.Count,
                Bpfs = bpfs
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private List<BpfStageEntry> GetStages(string bpfWorkflowId)
        {
            try
            {
                var fetchXml = $@"<fetch>
  <entity name='processstage'>
    <attribute name='processstageid'/>
    <attribute name='stagename'/>
    <attribute name='stagecategory'/>
    <attribute name='primaryentitytypecode'/>
    <filter>
      <condition attribute='processid' operator='eq' value='{EscapeXml(bpfWorkflowId)}'/>
    </filter>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return result.Entities.Select(e =>
                {
                    var categoryValue = e.GetAttributeValue<OptionSetValue>("stagecategory")?.Value;
                    return new BpfStageEntry
                    {
                        StageId = e.Id.ToString(),
                        StageName = e.GetAttributeValue<string>("stagename") ?? "",
                        StageCategory = categoryValue.HasValue && StageCategoryMap.TryGetValue(categoryValue.Value, out var label)
                            ? label
                            : categoryValue.HasValue ? $"Custom ({categoryValue.Value})" : "Unknown",
                        StageCategoryValue = categoryValue ?? int.MaxValue,
                        PrimaryEntity = e.GetAttributeValue<string>("primaryentitytypecode") ?? ""
                    };
                })
                .OrderBy(s => s.StageCategoryValue)
                .ToList();
            }
            catch
            {
                return [];
            }
        }

        private Dictionary<string, int> GetStageCounts(List<string> bpfIds)
        {
            var counts = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
            if (bpfIds.Count == 0) return counts;

            try
            {
                var conditions = new StringBuilder();
                foreach (var id in bpfIds)
                    conditions.AppendLine($"        <value>{EscapeXml(id)}</value>");

                var fetchXml = $@"<fetch aggregate='true'>
  <entity name='processstage'>
    <attribute name='processid' alias='processId' groupby='true'/>
    <attribute name='processstageid' alias='stageCount' aggregate='count'/>
    <filter>
      <condition attribute='processid' operator='in'>
{conditions}      </condition>
    </filter>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                foreach (var e in result.Entities)
                {
                    var processIdValue = e.GetAttributeValue<AliasedValue>("processId")?.Value;
                    var processId = processIdValue is EntityReference er ? er.Id.ToString() : processIdValue?.ToString();
                    var count = e.GetAttributeValue<AliasedValue>("stageCount")?.Value;
                    if (processId != null && count is int c)
                        counts[processId] = c;
                }
            }
            catch
            {
                // Fallback: return empty counts
            }

            return counts;
        }

        private static BpfEntry MapBpfEntry(Entity e)
        {
            var stateValue = e.GetAttributeValue<OptionSetValue>("statecode")?.Value;
            var bptValue = e.GetAttributeValue<OptionSetValue>("businessprocesstype")?.Value;

            return new BpfEntry
            {
                WorkflowId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                UniqueName = e.GetAttributeValue<string>("uniquename") ?? "",
                Description = SanitizeDescription(e.GetAttributeValue<string>("description")),
                PrimaryEntity = e.GetAttributeValue<string>("primaryentity") ?? "",
                Status = stateValue == 1 ? "Active" : "Draft",
                BusinessProcessType = bptValue == 1 ? "Task Flow" : "Business Flow",
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                Owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "",
                CreatedOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd") ?? "",
                ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd") ?? "",
                ModifiedBy = e.GetAttributeValue<EntityReference>("modifiedby")?.Name
            };
        }

        private static string SanitizeDescription(string description)
        {
            if (string.IsNullOrWhiteSpace(description)) return null;
            var trimmed = description.Trim();
            if (trimmed.Equals("Click to add description", StringComparison.OrdinalIgnoreCase) ||
                trimmed.Equals("Click to add description.", StringComparison.OrdinalIgnoreCase))
                return null;
            return trimmed;
        }

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private CallToolResult ErrorResult(string message) => Error(message);
    }
}
