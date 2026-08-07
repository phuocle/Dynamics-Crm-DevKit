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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetWorkflowsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GetWorkflowsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly HashSet<string> ValidModes = new(StringComparer.OrdinalIgnoreCase)
        {
            "background", "realtime"
        };

        private static readonly HashSet<string> ValidStatuses = new(StringComparer.OrdinalIgnoreCase)
        {
            "active", "draft", "all"
        };

        [McpServerTool(Name = "get_workflows", Title = "List classic workflows",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetWorkflowsResult)),
        Description(
            "Classic workflows (background async + realtime sync) for a Dataverse entity. workflow_id empty = list; set = detail. Classic only — see RELATED TOOLS for modern alternatives.\n\n" +
            "WHEN TO USE:\n" +
            "- Check if a field triggers any workflow (trigger_field + entity_name)\n" +
            "- Find synchronous workflows (mode='realtime'; Pre-op can cancel/rollback)\n" +
            "- Inspect workflow triggers and execution metadata before refactoring/disabling\n\n" +
            "RELATED TOOLS:\n" +
            "- get_business_process_flows → BPF definitions + stages\n" +
            "- get_business_rules → client-side business rules\n" +
            "- get_flows → Power Automate cloud flows + run history\n" +
            "- get_system_jobs → workflow execution results (asyncoperation)")]
        public CallToolResult get_workflows(
            [Description("GUID → detail. Empty = list.")] string workflow_id = "",
            [Description("Entity Display Name or logical name (e.g. 'Account' or 'account'). Empty = all.")] string entity_name = "",
            [Description("'background' / 'realtime'. Empty = both.")] string mode = "",
            [Description("'active' / 'draft' / 'all'. Default: active.")] string status = "active",
            [Description("Update trigger field Display Name or logical name when entity_name is set; otherwise contains filter.")] string trigger_field = "",
            [Description("Name contains. 1 match → auto-detail.")] string name_filter = "",
            [Description("Max 250.")] int max_records = 50)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(workflow_id))
                    return HandleDetail(workflow_id);

                return HandleList(entity_name, mode, status, trigger_field, name_filter, max_records);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── List mode ──────────────────────────────────────────────────────────

        private CallToolResult HandleList(string entityName, string mode, string status, string triggerField, string nameFilter, int maxRecords)
        {
            // ── Validation ──────────────────────────────────────────────
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 250) maxRecords = 250;

            var normalizedMode = (mode ?? "").Trim().ToLowerInvariant();
            if (!string.IsNullOrEmpty(normalizedMode) && !ValidModes.Contains(normalizedMode))
                return Error($"'{mode.Trim()}' is not a valid mode. Valid values: background, realtime.");

            var normalizedStatus = (status ?? "active").Trim().ToLowerInvariant();
            if (!ValidStatuses.Contains(normalizedStatus))
                return Error($"'{status.Trim()}' is not a valid status. Valid values: active, draft, all.");

            int? objectTypeCode = null;
            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName.Trim(), "get_workflows");
                if (!entityResult.IsSuccess)
                    return Error($"entity_name '{entityName.Trim()}': {entityResult.Error}");

                entityName = entityResult.Value.LogicalName;
                objectTypeCode = GetObjectTypeCode(entityName);
                if (objectTypeCode == null)
                    return Error($"Entity '{entityName}' not found. Use get_tables to discover valid entity names.");

                if (!string.IsNullOrWhiteSpace(triggerField))
                {
                    var fieldResult = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entityName, triggerField.Trim(), "get_workflows");
                    if (!fieldResult.IsSuccess)
                        return Error($"trigger_field '{triggerField.Trim()}': {fieldResult.Error}");
                    triggerField = fieldResult.Value.LogicalName;
                }
            }

            // ── Build FetchXML + retrieve ───────────────────────────────
            // When trigger_field is set, we use a server-side like-filter on triggeronupdateattributelist
            // to avoid the fetch-before-filter false-zero bug (match on a later page would be missed).
            var fetchXml = BuildListFetchXml(objectTypeCode, normalizedMode, normalizedStatus, triggerField, nameFilter, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var matchedEntities = result.Entities.ToList();

            if (matchedEntities.Count == 0)
            {
                var emptyStructured = new GetWorkflowsResult
                {
                    Mode = "list",
                    TotalCount = 0,
                    EntityName = NullIfEmpty(entityName),
                    ModeFilter = NullIfEmpty(normalizedMode),
                    StatusFilter = normalizedStatus == "active" ? null : normalizedStatus,
                    TriggerField = NullIfEmpty(triggerField),
                    Summary = null,
                    Workflows = null
                };
                var entityPart = string.IsNullOrWhiteSpace(entityName) ? "" : $" on {entityName}";
                return Success($"[Success] 0 classic workflows{entityPart}.", emptyStructured);
            }

            // Auto-detail: if exactly 1 result with name_filter, switch to detail mode
            if (matchedEntities.Count == 1 && !string.IsNullOrWhiteSpace(nameFilter))
                return HandleDetail(matchedEntities[0].Id.ToString());

            // ── Build entries + summary ─────────────────────────────────
            var workflows = new List<WorkflowEntry>(matchedEntities.Count);
            var summary = new WorkflowSummary();

            foreach (var e in matchedEntities)
            {
                var entry = MapEntity(e, includeDetail: false);
                workflows.Add(entry);

                if (entry.Mode == "Background") summary.BackgroundCount = (summary.BackgroundCount ?? 0) + 1;
                else summary.RealtimeCount = (summary.RealtimeCount ?? 0) + 1;
                if (entry.OnDemand) summary.OnDemandCount = (summary.OnDemandCount ?? 0) + 1;
                if (entry.Subprocess) summary.SubprocessCount = (summary.SubprocessCount ?? 0) + 1;
                if (entry.State == "Activated") summary.ActiveCount = (summary.ActiveCount ?? 0) + 1;
                else if (entry.State == "Draft") summary.DraftCount = (summary.DraftCount ?? 0) + 1;
            }

            var structured = new GetWorkflowsResult
            {
                Mode = "list",
                TotalCount = matchedEntities.Count,
                EntityName = NullIfEmpty(entityName),
                ModeFilter = NullIfEmpty(normalizedMode),
                StatusFilter = normalizedStatus == "active" ? null : normalizedStatus,
                TriggerField = NullIfEmpty(triggerField),
                Summary = summary,
                Workflows = workflows
            };

            return Success(BuildListText(structured), structured);
        }

        // ── Detail mode ────────────────────────────────────────────────────────

        private CallToolResult HandleDetail(string workflowId)
        {
            if (!Guid.TryParse(workflowId.Trim(), out _))
                return Error($"'{workflowId.Trim()}' is not a valid GUID. Use a workflow ID from list mode.");

            var fetchXml = $@"<fetch top='1'>
  <entity name='workflow'>
    <attribute name='workflowid'/>
    <attribute name='workflowidunique'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='primaryentity'/>
    <attribute name='description'/>
    <attribute name='triggeroncreate'/>
    <attribute name='triggerondelete'/>
    <attribute name='triggeronupdateattributelist'/>
    <attribute name='createstage'/>
    <attribute name='updatestage'/>
    <attribute name='deletestage'/>
    <attribute name='mode'/>
    <attribute name='scope'/>
    <attribute name='runas'/>
    <attribute name='rank'/>
    <attribute name='ondemand'/>
    <attribute name='subprocess'/>
    <attribute name='istransacted'/>
    <attribute name='asyncautodelete'/>
    <attribute name='statecode'/>
    <attribute name='statuscode'/>
    <attribute name='ismanaged'/>
    <attribute name='iscustomizable'/>
    <attribute name='businessprocesstype'/>
    <attribute name='ownerid'/>
    <attribute name='createdby'/>
    <attribute name='createdon'/>
    <attribute name='modifiedby'/>
    <attribute name='modifiedon'/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{EscapeXml(workflowId.Trim())}'/>
      <condition attribute='category' operator='eq' value='0'/>
      <condition attribute='type' operator='eq' value='1'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return Error($"Classic workflow '{workflowId.Trim()}' not found. Ensure it is category=0 (classic workflow), not a BPF or modern flow.");

            var entry = MapEntity(result.Entities[0], includeDetail: true);
            var structured = new GetWorkflowsResult
            {
                Mode = "detail",
                TotalCount = 1,
                Workflows = [entry]
            };

            return Success(BuildDetailText(entry), structured);
        }

        // ── Entry builder (shared by list + detail) ───────────────────────────
        // Fields verified by probe on org DEVKITV4 (2026-08-07):
        //   mode=OptionSetValue(0=Background,1=Realtime) → FormattedValues["mode"]
        //   scope=OptionSetValue(1=User,2=BU,3=Parent:ChildBU,4=Org) → FormattedValues["scope"]
        //   runas=OptionSetValue(0=Owner,1=Calling User) → FormattedValues["runas"]
        //   statecode=OptionSetValue(0=Draft,1=Activated) → FormattedValues["statecode"]
        //   statuscode=OptionSetValue(1=Draft,2=Activated) → FormattedValues["statuscode"]
        //   createstage/updatestage/deletestage=OptionSetValue(20=Pre,40=Post) → FormattedValues
        //   primaryentity=string (logical name, e.g. 'account')
        //   triggeronupdateattributelist=string (comma-separated logical names)
        //   iscustomizable=BooleanManagedProperty → .Value
        //   businessprocesstype=OptionSetValue → FormattedValues (null when not BPF-related)
        //   rank=int? (nullable)

        private static WorkflowEntry MapEntity(Entity e, bool includeDetail)
        {
            var modeValue = e.GetAttributeValue<OptionSetValue>("mode")?.Value;
            var scopeValue = e.GetAttributeValue<OptionSetValue>("scope")?.Value;
            var isRealtime = modeValue == 1;

            var entry = new WorkflowEntry
            {
                WorkflowId = e.Id.ToString(),
                WorkflowIdUnique = e.GetAttributeValue<Guid?>("workflowidunique")?.ToString(),
                UniqueName = NullIfEmpty(e.GetAttributeValue<string>("uniquename")),
                Name = NullIfEmpty(e.GetAttributeValue<string>("name")),
                PrimaryEntity = NullIfEmpty(e.GetAttributeValue<string>("primaryentity")),
                Description = SanitizeDescription(e.GetAttributeValue<string>("description")),
                TriggerOnCreate = e.GetAttributeValue<bool>("triggeroncreate"),
                TriggerOnDelete = e.GetAttributeValue<bool>("triggerondelete"),
                TriggerOnUpdateFields = NullIfEmpty(e.GetAttributeValue<string>("triggeronupdateattributelist")),
                CreateStage = isRealtime ? MapStage(e, "createstage") : null,
                UpdateStage = isRealtime ? MapStage(e, "updatestage") : null,
                DeleteStage = isRealtime ? MapStage(e, "deletestage") : null,
                Mode = NullIfEmpty(e.FormattedValues.Contains("mode") ? e.FormattedValues["mode"] : (modeValue == 1 ? "Realtime" : modeValue == 0 ? "Background" : null)),
                Scope = NullIfEmpty(e.FormattedValues.Contains("scope") ? e.FormattedValues["scope"] : MapScope(scopeValue)),
                RunAs = NullIfEmpty(e.FormattedValues.Contains("runas") ? e.FormattedValues["runas"] : null),
                Rank = e.GetAttributeValue<int?>("rank"),
                OnDemand = e.GetAttributeValue<bool>("ondemand"),
                Subprocess = e.GetAttributeValue<bool>("subprocess"),
                IsTransacted = e.GetAttributeValue<bool>("istransacted"),
                AsyncAutoDelete = e.GetAttributeValue<bool>("asyncautodelete"),
                State = NullIfEmpty(e.FormattedValues.Contains("statecode") ? e.FormattedValues["statecode"] : null),
                Status = NullIfEmpty(e.FormattedValues.Contains("statuscode") ? e.FormattedValues["statuscode"] : null),
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                IsCustomizable = e.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value,
                BusinessProcessType = NullIfEmpty(e.FormattedValues.Contains("businessprocesstype") ? e.FormattedValues["businessprocesstype"] : null),
                Owner = NullIfEmpty(e.GetAttributeValue<EntityReference>("ownerid")?.Name),
                ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd"),
                ModifiedBy = NullIfEmpty(e.GetAttributeValue<EntityReference>("modifiedby")?.Name)
            };

            if (includeDetail)
            {
                entry.CreatedBy = NullIfEmpty(e.GetAttributeValue<EntityReference>("createdby")?.Name);
                entry.CreatedOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd");
            }

            return entry;
        }

        // ── FetchXML builder ──────────────────────────────────────────────────

        private static string BuildListFetchXml(int? objectTypeCode, string mode, string status, string triggerField, string nameFilter, int maxRecords)
        {
            var sb = new StringBuilder(640);
            sb.Append($"<fetch top='{maxRecords}'>");
            sb.Append("<entity name='workflow'>");
            sb.Append("<attribute name='workflowid'/>");
            sb.Append("<attribute name='name'/>");
            sb.Append("<attribute name='primaryentity'/>");
            sb.Append("<attribute name='description'/>");
            sb.Append("<attribute name='triggeroncreate'/>");
            sb.Append("<attribute name='triggerondelete'/>");
            sb.Append("<attribute name='triggeronupdateattributelist'/>");
            sb.Append("<attribute name='createstage'/>");
            sb.Append("<attribute name='updatestage'/>");
            sb.Append("<attribute name='deletestage'/>");
            sb.Append("<attribute name='mode'/>");
            sb.Append("<attribute name='scope'/>");
            sb.Append("<attribute name='runas'/>");
            sb.Append("<attribute name='rank'/>");
            sb.Append("<attribute name='ondemand'/>");
            sb.Append("<attribute name='subprocess'/>");
            sb.Append("<attribute name='istransacted'/>");
            sb.Append("<attribute name='asyncautodelete'/>");
            sb.Append("<attribute name='statecode'/>");
            sb.Append("<attribute name='statuscode'/>");
            sb.Append("<attribute name='ismanaged'/>");
            sb.Append("<attribute name='ownerid'/>");
            sb.Append("<attribute name='modifiedby'/>");
            sb.Append("<attribute name='modifiedon'/>");
            sb.Append("<filter type='and'>");

            // Always filter: classic workflow + definition only
            sb.Append("<condition attribute='category' operator='eq' value='0'/>");
            sb.Append("<condition attribute='type' operator='eq' value='1'/>");

            if (objectTypeCode.HasValue)
                sb.Append($"<condition attribute='primaryentity' operator='eq' value='{objectTypeCode.Value}'/>");

            if (!string.IsNullOrEmpty(mode))
            {
                var modeValue = mode == "background" ? "0" : "1";
                sb.Append($"<condition attribute='mode' operator='eq' value='{modeValue}'/>");
            }

            if (status == "active")
                sb.Append("<condition attribute='statecode' operator='eq' value='1'/>");
            else if (status == "draft")
                sb.Append("<condition attribute='statecode' operator='eq' value='0'/>");

            // Server-side trigger_field filter: use like on triggeronupdateattributelist.
            // The field is a comma-separated list of logical names (e.g. "statecode,statuscode").
            // A like-filter on ',fieldname,' after wrapping the field value in commas would be ideal,
            // but FetchXML like on a substring is sufficient for server-side filtering and avoids
            // the fetch-before-filter false-zero bug (match on a later page would be missed).
            if (!string.IsNullOrWhiteSpace(triggerField))
                sb.Append($"<condition attribute='triggeronupdateattributelist' operator='like' value='%{EscapeXml(triggerField.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                sb.Append($"<condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            sb.Append("</filter>");
            sb.Append("<order attribute='primaryentity'/>");
            sb.Append("<order attribute='name'/>");
            sb.Append("</entity>");
            sb.Append("</fetch>");
            return sb.ToString();
        }

        // ── Text builders (1 line, concise) ───────────────────────────────────

        private static string BuildListText(GetWorkflowsResult structured)
        {
            var word = structured.TotalCount == 1 ? "workflow" : "workflows";
            var entityPart = string.IsNullOrWhiteSpace(structured.EntityName) ? "" : $" on {structured.EntityName}";
            var modePart = string.IsNullOrWhiteSpace(structured.ModeFilter) ? "" : $" {structured.ModeFilter}";
            var statusPart = string.IsNullOrWhiteSpace(structured.StatusFilter) ? "" : $" {structured.StatusFilter}";
            var fieldPart = string.IsNullOrWhiteSpace(structured.TriggerField) ? "" : $" (trigger: {structured.TriggerField})";
            return $"[Success] {structured.TotalCount}{modePart}{statusPart} classic {word}{entityPart}{fieldPart}.";
        }

        private static string BuildDetailText(WorkflowEntry entry)
        {
            var sb = new StringBuilder(160);
            sb.Append($"[Success] {entry.WorkflowId}");
            if (!string.IsNullOrWhiteSpace(entry.Name))
                sb.Append($". {entry.Name}");
            if (!string.IsNullOrWhiteSpace(entry.Mode))
                sb.Append($" [{entry.Mode}]");
            if (!string.IsNullOrWhiteSpace(entry.State))
                sb.Append($" — {entry.State}");
            if (!string.IsNullOrWhiteSpace(entry.PrimaryEntity))
                sb.Append($" on {entry.PrimaryEntity}");
            sb.Append('.');
            return sb.ToString();
        }

        // ── Helpers ───────────────────────────────────────────────────────────

        private static string MapStage(Entity e, string attributeName)
        {
            if (!e.FormattedValues.Contains(attributeName))
            {
                var value = e.GetAttributeValue<OptionSetValue>(attributeName)?.Value;
                return value switch { 20 => "Pre", 40 => "Post", _ => null };
            }
            return e.FormattedValues[attributeName];
        }

        private static string MapScope(int? value) => value switch
        {
            1 => "User",
            2 => "Business Unit",
            3 => "Parent:Child Business Units",
            4 => "Organization",
            _ => null
        };

        private static string SanitizeDescription(string description)
        {
            if (string.IsNullOrWhiteSpace(description)) return null;
            var trimmed = description.Trim();
            if (trimmed.Equals("Click to add description", StringComparison.OrdinalIgnoreCase) ||
                trimmed.Equals("Click to add description.", StringComparison.OrdinalIgnoreCase))
                return null;
            return trimmed;
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private int? GetObjectTypeCode(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            return response.EntityMetadata.ObjectTypeCode;
        }
    }
}
