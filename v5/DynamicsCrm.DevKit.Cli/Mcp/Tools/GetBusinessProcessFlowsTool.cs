#nullable enable
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
            "List Business Process Flow definitions or inspect one BPF and its stage definitions.\n\n" +
            "WHEN TO USE:\n" +
            "- Inspect stage categories and primary entities for a BPF\n" +
            "- Find BPFs bound to an entity (entity_name filter)\n" +
            "- Resolve BPF unique/logical name for the auto-created entity\n\n" +
            "RELATED TOOLS:\n" +
            "- get_workflows -> classic workflow definitions (background async + realtime sync)\n" +
            "- get_business_rules -> client-side business rules\n" +
            "- get_flows -> Power Automate cloud flows")]
        public CallToolResult get_business_process_flows(
            [Description("GUID -> detail. Empty = list.")] string? bpf_id = null,
            [Description("Name contains. 1 match -> auto-detail. Omit or pass null to list all.")] string? bpf_name = null,
            [Description("Primary entity filter, Display Name or logical name (e.g. 'Lead' or 'lead').")] string? entity_name = null,
            [Description("Filter by state: 'active' (Draft hidden), 'draft' (only Draft), or 'all' (no filter). Default 'all' returns every BPF regardless of state.")] string status = "all",
            [Description("List only. Detail always includes.")] bool include_stages = false,
            [Description("1-250.")] int max_records = 50)
        {
            try
            {
                // -- Validate --
                // Optional string params are declared `string? ... = null` instead of `string ... = ""`.
                // Rationale: MCP SDK 2.x JSON schema marks non-nullable string params with empty-string
                // defaults as `required`, so MEAI's AIFunctionFactory rejects caller payloads containing
                // an explicit "" before the method body runs (issue modelcontextprotocol/csharp-sdk#830,
                // surfaced to callers as a generic "An error occurred invoking..."). Nullable string
                // params are excluded from the schema `required` array and accept null/omitted values,
                // matching the documented workaround. All downstream code already uses IsNullOrWhiteSpace
                // which treats null and "" identically, so semantics are unchanged.

                var normalizedStatus = (status ?? "").Trim().ToLowerInvariant();
                if (string.IsNullOrEmpty(normalizedStatus))
                    normalizedStatus = "active";

                if (normalizedStatus != "active" && normalizedStatus != "draft" && normalizedStatus != "all")
                    return Error($"Invalid status '{status}'. Use 'active', 'draft', or 'all'.");

                if (max_records <= 0) max_records = 50;
                if (max_records > 250) max_records = 250;

                if (!string.IsNullOrWhiteSpace(bpf_id) && !Guid.TryParse(bpf_id.Trim(), out _))
                    return Error($"'{bpf_id.Trim()}' is not a valid GUID.");

                // -- Resolve entity_name -> logical name --
                string? resolvedEntityName = null;
                if (!string.IsNullOrWhiteSpace(entity_name))
                {
                    var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_business_process_flows");
                    if (!entityResult.IsSuccess)
                        return Error($"entity_name '{entity_name.Trim()}': {entityResult.Error}");
                    resolvedEntityName = entityResult.Value.LogicalName;
                }

                // -- Detail mode by ID --
                if (!string.IsNullOrWhiteSpace(bpf_id))
                    return BuildDetail(bpf_id.Trim());

                // -- List mode --
                var bpfs = QueryBpfs(bpf_name, resolvedEntityName, normalizedStatus, max_records, include_stages);

                // If the caller explicitly searched by bpf_name, an empty result means
                // the BPF does not exist (typo, deleted, or unmanaged-vs-managed mismatch).
                // Surface this as an error so callers can distinguish "no match" from
                // "valid filter that legitimately returned nothing".
                if (bpfs.Count == 0 && !string.IsNullOrWhiteSpace(bpf_name))
                {
                    return Error(
                        $"No Business Process Flow matched bpf_name '{bpf_name.Trim()}'. " +
                        "Hint: Use get_business_process_flows without bpf_name to list available BPFs.");
                }

                if (bpfs.Count == 0)
                {
                    var entityLabel = resolvedEntityName != null ? $" for '{resolvedEntityName}'" : "";
                    var statusLabel = normalizedStatus == "all" ? "" : $" {normalizedStatus}";
                    return Success(
                        $"{statusLabel} BPFs{entityLabel}: 0 found.",
                        new GetBpfsResult
                        {
                            Mode = "list",
                            TotalCount = 0,
                            EntityName = resolvedEntityName
                        });
                }

                // Auto-detail if bpf_name matches exactly 1
                if (!string.IsNullOrWhiteSpace(bpf_name) && bpfs.Count == 1)
                    return BuildDetail(bpfs[0].Id.ToString());

                return BuildList(bpfs, resolvedEntityName, normalizedStatus, include_stages);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // -- List mode --

        private CallToolResult BuildList(List<Entity> entities, string? entityName, string status, bool includeStages)
        {
            var bpfs = entities.Select(MapBpfEntry).ToList();

            // Get stage counts
            var bpfIds = entities.Select(e => e.Id.ToString()).ToList();
            var stageCounts = GetStageCounts(bpfIds);
            foreach (var bpf in bpfs)
                bpf.StageCount = stageCounts.TryGetValue(bpf.WorkflowId, out var count) ? count : 0;

            // Optionally include full stages
            if (includeStages)
            {
                foreach (var bpf in bpfs)
                {
                    var source = entities.FirstOrDefault(e =>
                        string.Equals(e.Id.ToString(), bpf.WorkflowId, StringComparison.OrdinalIgnoreCase));
                    var stages = GetStages(bpf.WorkflowId, source?.GetAttributeValue<string>("clientdata"));
                    // Always assign (including empty list) so callers can rely on
                    // a stable JSON shape: when include_stages=true, every BPF
                    // exposes a "stages" field — never omitted.
                    bpf.Stages = stages ?? new List<BpfStageEntry>();
                }
            }

            var entityLabel = entityName != null ? $" for '{entityName}'" : "";
            var statusLabel = status == "all" ? "" : $" {status}";
            var word = bpfs.Count == 1 ? "BPF" : "BPFs";

            return Success(
                $"{statusLabel} {bpfs.Count} {word}{entityLabel}.",
                new GetBpfsResult
                {
                    Mode = "list",
                    TotalCount = bpfs.Count,
                    EntityName = entityName,
                    Bpfs = bpfs
                });
        }

        // -- Detail mode --

        private CallToolResult BuildDetail(string bpfId)
        {
            var fetchXml = $@"<fetch top='1'>
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
    <attribute name='clientdata'/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{EscapeXml(bpfId)}'/>
      <condition attribute='category' operator='eq' value='4'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return Error($"Business Process Flow '{bpfId}' not found (or not a BPF workflow).",
                    "Use get_business_process_flows without bpf_id to list available BPFs.");

            var entity = result.Entities[0];
            var entry = MapBpfEntry(entity);

            var stages = GetStages(bpfId, entity.GetAttributeValue<string>("clientdata"));
            entry.StageCount = stages.Count;
            if (stages.Count > 0)
                entry.Stages = stages;

            return Success(
                $"BPF '{entry.Name}': {stages.Count} stages.",
                new GetBpfsResult
                {
                    Mode = "detail",
                    TotalCount = 1,
                    Bpf = entry
                });
        }

        // -- Data fetchers (return data, not CallToolResult) --

        private List<Entity> QueryBpfs(string? bpfName, string? entityName, string status, int maxRecords, bool includeStages)
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

            // clientdata carries the visual stage order; only fetch it when stages are requested.
            var clientDataAttribute = includeStages ? "    <attribute name='clientdata'/>\n" : "";

            // Note: primaryentity is EntityName type (Int32 internally), cannot filter in FetchXML with string.
            // With an entity filter the tool must scan EVERY matching BPF page (no top cap);
            // a capped fetch could drop matches that sort past the first page.
            var fetchAll = !string.IsNullOrWhiteSpace(entityName);
            var topAttribute = fetchAll ? "" : $" top='{maxRecords}'";

            var fetchXml = $@"<fetch{topAttribute}>
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
{clientDataAttribute}    <filter type='and'>
{filters}    </filter>
    <order attribute='name'/>
  </entity>
</fetch>";

            List<Entity> entities;
            if (fetchAll)
            {
                entities = new List<Entity>();
                var page = 1;
                string? pagingCookie = null;
                while (true)
                {
                    var pagedFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchXml, page, 5000, pagingCookie);
                    var pageResult = _serviceClient.RetrieveMultiple(new FetchExpression(pagedFetchXml));
                    entities.AddRange(pageResult.Entities);
                    if (!pageResult.MoreRecords || pageResult.Entities.Count == 0)
                        break;
                    pagingCookie = pageResult.PagingCookie;
                    page++;
                }
            }
            else
            {
                entities = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml)).Entities.ToList();
            }

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

        private List<BpfStageEntry> GetStages(string bpfWorkflowId, string? clientData = null)
        {
            // processstage has no sequence column; the true visual stage order lives in
            // the BPF workflow's clientdata (StageStep.stageId == processstageid).
            var stageOrder = ParseStageOrder(clientData);

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
            var stages = result.Entities.Select(e =>
            {
                var categoryValue = e.GetAttributeValue<OptionSetValue>("stagecategory")?.Value;
                return new BpfStageEntry
                {
                    StageId = e.Id.ToString(),
                    StageName = NullIfEmpty(e.GetAttributeValue<string>("stagename")),
                    StageCategory = categoryValue.HasValue && StageCategoryMap.TryGetValue(categoryValue.Value, out var label)
                        ? label
                        : categoryValue.HasValue ? $"Custom ({categoryValue.Value})" : "Unknown",
                    PrimaryEntity = NullIfEmpty(e.GetAttributeValue<string>("primaryentitytypecode"))
                };
            }).ToList();

            return OrderStages(stages, stageOrder);
        }

        // Order stages by the clientdata visual sequence; unknown/missing clientdata
        // falls back to stage name so the output is still deterministic.
        private static List<BpfStageEntry> OrderStages(List<BpfStageEntry> stages, List<Guid> stageOrder)
        {
            if (stages.Count == 0 || stageOrder == null || stageOrder.Count == 0)
                return stages.OrderBy(s => s.StageName, StringComparer.OrdinalIgnoreCase).ToList();

            var orderIndex = new Dictionary<Guid, int>();
            for (var i = 0; i < stageOrder.Count; i++)
                orderIndex.TryAdd(stageOrder[i], i);

            return stages
                .OrderBy(s => Guid.TryParse(s.StageId, out var id) && orderIndex.TryGetValue(id, out var idx)
                    ? idx
                    : int.MaxValue)
                .ThenBy(s => s.StageName, StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        // Walk the workflow clientdata JSON tree and collect StageStep ids in
        // document order (= visual order in the BPF designer).
        private static List<Guid> ParseStageOrder(string? clientData)
        {
            var order = new List<Guid>();
            if (string.IsNullOrWhiteSpace(clientData)) return order;

            try
            {
                using var document = JsonDocument.Parse(clientData);
                CollectStageIds(document.RootElement, order);
            }
            catch (JsonException)
            {
                order.Clear();
            }
            return order;
        }

        private static void CollectStageIds(JsonElement element, List<Guid> order)
        {
            if (element.ValueKind != JsonValueKind.Object) return;

            var isStageStep = element.TryGetProperty("__class", out var className) &&
                className.ValueKind == JsonValueKind.String &&
                className.GetString() is { } classStr &&
                classStr.StartsWith("StageStep:", StringComparison.Ordinal);

            if (isStageStep &&
                element.TryGetProperty("stageId", out var stageId) &&
                Guid.TryParse(stageId.GetString(), out var id))
            {
                order.Add(id);
            }

            if (element.TryGetProperty("steps", out var steps) &&
                steps.ValueKind == JsonValueKind.Object &&
                steps.TryGetProperty("list", out var list) &&
                list.ValueKind == JsonValueKind.Array)
            {
                foreach (var child in list.EnumerateArray())
                    CollectStageIds(child, order);
            }
        }

        private Dictionary<string, int> GetStageCounts(List<string> bpfIds)
        {
            var counts = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
            if (bpfIds.Count == 0) return counts;

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

            return counts;
        }

        // -- Mappers --

        private static BpfEntry MapBpfEntry(Entity e)
        {
            var stateValue = e.GetAttributeValue<OptionSetValue>("statecode")?.Value;
            var bptValue = e.GetAttributeValue<OptionSetValue>("businessprocesstype")?.Value;

            return new BpfEntry
            {
                WorkflowId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                UniqueName = NullIfEmpty(e.GetAttributeValue<string>("uniquename")),
                Description = SanitizeDescription(e.GetAttributeValue<string>("description")),
                PrimaryEntity = e.GetAttributeValue<string>("primaryentity") ?? "",
                Status = stateValue == 1 ? "Active" : "Draft",
                BusinessProcessType = bptValue == 1 ? "Task Flow" : "Business Flow",
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                Owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "",
                CreatedOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd"),
                ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd"),
                ModifiedBy = e.GetAttributeValue<EntityReference>("modifiedby")?.Name
            };
        }

        // -- Utils --

        private static string? SanitizeDescription(string? description)
        {
            if (string.IsNullOrWhiteSpace(description)) return null;
            var trimmed = description!.Trim();
            if (trimmed.Equals("Click to add description", StringComparison.OrdinalIgnoreCase) ||
                trimmed.Equals("Click to add description.", StringComparison.OrdinalIgnoreCase))
                return null;
            return trimmed;
        }

        private static string? NullIfEmpty(string? value) =>
            string.IsNullOrWhiteSpace(value) ? null : value!.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");
    }
}
