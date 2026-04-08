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
    public class GetWorkflowsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetWorkflowsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_workflows", Title = "List classic workflows",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetWorkflowsResult)),
        Description(
            "List and inspect classic workflows (background and real-time) for a Dataverse entity.\n\n" +

            "TWO MODES:\n" +
            "- workflow_id EMPTY: list workflows matching filters\n" +
            "- workflow_id PROVIDED: full detail for a single workflow (description, solution, dependencies)\n\n" +

            "SCOPE: Classic workflows only (category=0). Use get_business_rules, get_custom_apis, get_business_process_flows, get_flows for others.\n\n" +

            "KEY FIELDS:\n" +
            "- triggeronupdateattributelist: fields triggering on Update. 'statecode' = status change, 'ownerid' = assignment\n" +
            "- mode: 0=Background (async), 1=Realtime (sync). Stages (20=Pre, 40=Post) only for Realtime\n" +
            "- scope: 1=User, 2=BU, 3=Parent:ChildBU, 4=Org. runas: 0=Owner, 1=Caller\n\n" +

            "WHEN TO USE:\n" +
            "- Check if a field triggers any workflow: trigger_field + entity_name\n" +
            "- Find realtime/synchronous workflows: mode='realtime'\n\n" +

            "TIPS:\n" +
            "- Background workflows always run Post-operation (async)\n" +
            "- Realtime Pre-operation can cancel/rollback the operation\n" +
            "- If name_filter matches exactly 1 workflow, auto-switches to detail mode")]
        public CallToolResult get_workflows(
            [Description("Workflow GUID for detail mode. Empty = list mode."
            )] string workflow_id = "",
            [Description("Entity logical name (e.g., 'account'). Empty = all entities."
            )] string entity_name = "",
            [Description("'background' (async) or 'realtime' (sync). Empty = both."
            )] string mode = "",
            [Description("Only activated workflows. Default: true."
            )] bool active_only = true,
            [Description("Filter by update trigger field (contains match, e.g., 'revenue', 'statecode')."
            )] string trigger_field = "",
            [Description("Filter by name (contains match). If exactly 1 match, returns detail."
            )] string name_filter = "",
            [Description("Max records. Default: 50, max: 250."
            )] int max_records = 50)
        {
            // Detail mode by ID
            if (!string.IsNullOrWhiteSpace(workflow_id))
            {
                if (!Guid.TryParse(workflow_id.Trim(), out var wfId))
                    return ErrorResult($"Error: Invalid workflow_id '{workflow_id.Trim()}'. Must be a GUID.");
                try
                {
                    return GetWorkflowDetail(wfId);
                }
                catch (Exception ex)
                {
                    return ErrorResult($"Error: Failed to retrieve workflow: {ex.Message}");
                }
            }

            if (!string.IsNullOrWhiteSpace(mode))
            {
                var m = mode.Trim().ToLowerInvariant();
                if (m != "background" && m != "realtime")
                    return ErrorResult($"Error: Invalid mode '{mode.Trim()}'. Use 'background' or 'realtime'.");
            }

            if (max_records <= 0) max_records = 50;
            if (max_records > 250) max_records = 250;

            int? objectTypeCode = null;
            if (!string.IsNullOrWhiteSpace(entity_name))
            {
                objectTypeCode = GetObjectTypeCode(entity_name.Trim().ToLowerInvariant());
                if (objectTypeCode == null)
                    return ErrorResult($"Error: Entity '{entity_name.Trim().ToLowerInvariant()}' not found. Use get_tables to discover valid entity names.");
            }

            try
            {
                var fetchXml = BuildFetchXml(objectTypeCode, mode, active_only, trigger_field, name_filter, max_records);
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

                if (result.Entities.Count == 0)
                {
                    var label = string.IsNullOrWhiteSpace(entity_name) ? "any entity" : $"'{entity_name.Trim().ToLowerInvariant()}'";
                    var text = $"0 classic workflows found for {label}.";
                    var emptyResult = new GetWorkflowsResult
                    {
                        TotalCount = 0,
                        EntityName = string.IsNullOrWhiteSpace(entity_name) ? null : entity_name.Trim().ToLowerInvariant(),
                        Summary = new WorkflowSummary(),
                        Workflows = []
                    };
                    return new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = text }],
                        StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                    };
                }

                // Auto-detail: if exactly 1 result, switch to detail mode
                if (result.Entities.Count == 1 && !string.IsNullOrWhiteSpace(name_filter))
                    return GetWorkflowDetail(result.Entities[0].Id);

                return FormatResults(result.Entities, entity_name, trigger_field);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve workflows: {ex.Message}");
            }
        }

        private CallToolResult GetWorkflowDetail(Guid workflowId)
        {
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
    <attribute name='ismanaged'/>
    <attribute name='iscustomizable'/>
    <attribute name='businessprocesstype'/>
    <attribute name='ownerid'/>
    <attribute name='createdby'/>
    <attribute name='createdon'/>
    <attribute name='modifiedby'/>
    <attribute name='modifiedon'/>
    <filter>
      <condition attribute='workflowid' operator='eq' value='{workflowId}'/>
      <condition attribute='category' operator='eq' value='0'/>
      <condition attribute='type' operator='eq' value='1'/>
    </filter>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
                return ErrorResult($"Error: Classic workflow '{workflowId}' not found. Ensure it is category=0 (classic workflow).");

            var e = result.Entities[0];
            var entry = MapEntity(e);
            var uniqueName = e.GetAttributeValue<string>("uniquename") ?? "";
            var workflowIdUnique = e.GetAttributeValue<Guid?>("workflowidunique")?.ToString() ?? "";
            var isCustomizable = e.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value;
            var businessProcessType = e.GetAttributeValue<OptionSetValue>("businessprocesstype")?.Value;
            var createdBy = e.GetAttributeValue<EntityReference>("createdby")?.Name ?? "";
            var createdOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd") ?? "";
            var description = e.GetAttributeValue<string>("description");

            var sb = new StringBuilder(1024);
            sb.AppendLine($"[Classic Workflow] {entry.Name}");
            sb.AppendLine();
            sb.AppendLine($"workflowId: {workflowId}");
            sb.AppendLine($"workflowIdUnique: {workflowIdUnique}");
            if (!string.IsNullOrWhiteSpace(uniqueName))
                sb.AppendLine($"uniqueName: {uniqueName}");
            sb.AppendLine($"primaryEntity: {entry.PrimaryEntity}");
            sb.AppendLine($"mode: {entry.Mode}");
            sb.AppendLine($"scope: {entry.Scope}");
            sb.AppendLine($"runAs: {entry.RunAs}");
            sb.AppendLine($"rank: {entry.Rank}");
            sb.AppendLine($"status: {entry.Status}");
            sb.AppendLine($"isManaged: {(entry.IsManaged ? "Yes" : "No")}");
            if (isCustomizable.HasValue)
                sb.AppendLine($"isCustomizable: {(isCustomizable.Value ? "Yes" : "No")}");
            sb.AppendLine($"onDemand: {(entry.OnDemand ? "Yes" : "No")}");
            sb.AppendLine($"subprocess: {(entry.Subprocess ? "Yes" : "No")}");
            sb.AppendLine($"isTransacted: {(entry.IsTransacted ? "Yes" : "No")}");
            sb.AppendLine($"asyncAutoDelete: {(entry.AsyncAutoDelete ? "Yes" : "No")}");
            if (businessProcessType.HasValue)
                sb.AppendLine($"businessProcessType: {businessProcessType.Value}");

            if (!string.IsNullOrWhiteSpace(description))
            {
                sb.AppendLine();
                sb.AppendLine($"[Description]");
                sb.AppendLine(description.Trim());
            }

            sb.AppendLine();
            sb.AppendLine("[Triggers]");
            var triggers = BuildTriggersDisplay(entry);
            sb.AppendLine($"triggers: {triggers}");
            if (!string.IsNullOrEmpty(entry.TriggerOnUpdateFields))
                sb.AppendLine($"updateFields: {entry.TriggerOnUpdateFields}");
            sb.AppendLine($"stage: {BuildStageDisplay(entry)}");

            sb.AppendLine();
            sb.AppendLine("[Audit]");
            sb.AppendLine($"createdBy: {createdBy}");
            sb.AppendLine($"createdOn: {createdOn}");
            sb.AppendLine($"modifiedBy: {entry.ModifiedBy}");
            sb.AppendLine($"modifiedOn: {entry.ModifiedOn}");
            sb.AppendLine($"owner: {entry.Owner}");

            var structured = new GetWorkflowsResult
            {
                TotalCount = 1,
                EntityName = entry.PrimaryEntity,
                Workflows = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static string BuildFetchXml(int? objectTypeCode, string mode, bool activeOnly, string triggerField, string nameFilter, int maxRecords)
        {
            var filters = new StringBuilder();

            // Always filter: classic workflow + definition only
            filters.AppendLine("      <condition attribute='category' operator='eq' value='0' />");
            filters.AppendLine("      <condition attribute='type' operator='eq' value='1' />");

            if (objectTypeCode.HasValue)
                filters.AppendLine($"      <condition attribute='primaryentity' operator='eq' value='{objectTypeCode.Value}' />");

            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeValue = mode.Trim().ToLowerInvariant() == "background" ? "0" : "1";
                filters.AppendLine($"      <condition attribute='mode' operator='eq' value='{modeValue}' />");
            }

            if (activeOnly)
                filters.AppendLine("      <condition attribute='statecode' operator='eq' value='1' />");

            if (!string.IsNullOrWhiteSpace(triggerField))
                filters.AppendLine($"      <condition attribute='triggeronupdateattributelist' operator='like' value='%{EscapeXml(triggerField.Trim().ToLowerInvariant())}%' />");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%' />");

            return $@"<fetch top='{maxRecords}'>
  <entity name='workflow'>
    <attribute name='workflowid' />
    <attribute name='name' />
    <attribute name='primaryentity' />
    <attribute name='description' />
    <attribute name='triggeroncreate' />
    <attribute name='triggerondelete' />
    <attribute name='triggeronupdateattributelist' />
    <attribute name='createstage' />
    <attribute name='updatestage' />
    <attribute name='deletestage' />
    <attribute name='mode' />
    <attribute name='scope' />
    <attribute name='runas' />
    <attribute name='rank' />
    <attribute name='ondemand' />
    <attribute name='subprocess' />
    <attribute name='istransacted' />
    <attribute name='asyncautodelete' />
    <attribute name='statecode' />
    <attribute name='ismanaged' />
    <attribute name='ownerid' />
    <attribute name='modifiedby' />
    <attribute name='modifiedon' />
    <filter type='and'>
{filters}    </filter>
    <order attribute='primaryentity' />
    <order attribute='name' />
  </entity>
</fetch>";
        }

        private static CallToolResult FormatResults(DataCollection<Entity> entities, string entityName, string triggerField)
        {
            var workflows = new List<WorkflowEntry>();
            var backgroundCount = 0;
            var realtimeCount = 0;
            var onDemandCount = 0;
            var subprocessCount = 0;

            foreach (var e in entities)
            {
                var entry = MapEntity(e);
                workflows.Add(entry);

                if (entry.Mode == "Background") backgroundCount++;
                else realtimeCount++;
                if (entry.OnDemand) onDemandCount++;
                if (entry.Subprocess) subprocessCount++;
            }

            var entityLabel = string.IsNullOrWhiteSpace(entityName) ? "" : $" for {entityName.Trim().ToLowerInvariant()}";
            var fieldLabel = string.IsNullOrWhiteSpace(triggerField) ? "" : $" (trigger_field='{triggerField.Trim().ToLowerInvariant()}')";
            var countWord = entities.Count == 1 ? "workflow" : "workflows";

            // Compact text
            var sb = new StringBuilder(entities.Count * 200 + 256);
            sb.AppendLine($"[Workflows] {entities.Count} classic {countWord}{entityLabel}{fieldLabel}");
            sb.AppendLine();
            sb.AppendLine("#\tName\tEntity\tMode\tTriggers\tUpdateFields\tStage\tScope\tRunAs\tRank\tOnDemand\tSubprocess\tOwner\tStatus\tModified");

            for (var i = 0; i < workflows.Count; i++)
            {
                var w = workflows[i];
                var triggers = BuildTriggersDisplay(w);
                var updateFields = EscapeTab(w.TriggerOnUpdateFields ?? "-");
                var stage = BuildStageDisplay(w);
                sb.AppendLine($"{i + 1}\t{EscapeTab(w.Name)}\t{w.PrimaryEntity}\t{w.Mode}\t{triggers}\t{updateFields}\t{stage}\t{w.Scope}\t{w.RunAs}\t{w.Rank}\t{(w.OnDemand ? "Yes" : "No")}\t{(w.Subprocess ? "Yes" : "No")}\t{EscapeTab(w.Owner)}\t{w.Status}\t{w.ModifiedOn}");
            }

            sb.AppendLine();
            sb.AppendLine("Summary:");
            sb.AppendLine($"  Background: {backgroundCount}");
            sb.AppendLine($"  Real-time: {realtimeCount}");
            sb.AppendLine($"  On-demand: {onDemandCount}");
            sb.AppendLine($"  Subprocess: {subprocessCount}");

            var structured = new GetWorkflowsResult
            {
                TotalCount = entities.Count,
                EntityName = string.IsNullOrWhiteSpace(entityName) ? null : entityName.Trim().ToLowerInvariant(),
                Summary = new WorkflowSummary
                {
                    BackgroundCount = backgroundCount,
                    RealtimeCount = realtimeCount,
                    OnDemandCount = onDemandCount,
                    SubprocessCount = subprocessCount
                },
                Workflows = workflows
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static WorkflowEntry MapEntity(Entity e)
        {
            var modeValue = e.GetAttributeValue<OptionSetValue>("mode")?.Value;
            var scopeValue = e.GetAttributeValue<OptionSetValue>("scope")?.Value;
            var runAsValue = e.GetAttributeValue<OptionSetValue>("runas")?.Value;
            var stateValue = e.GetAttributeValue<OptionSetValue>("statecode")?.Value;

            var isRealtime = modeValue == 1;

            return new WorkflowEntry
            {
                WorkflowId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                PrimaryEntity = e.GetAttributeValue<string>("primaryentity") ?? "",
                Description = SanitizeDescription(e.GetAttributeValue<string>("description")),
                TriggerOnCreate = e.GetAttributeValue<bool>("triggeroncreate"),
                TriggerOnDelete = e.GetAttributeValue<bool>("triggerondelete"),
                TriggerOnUpdateFields = NullIfEmpty(e.GetAttributeValue<string>("triggeronupdateattributelist")),
                CreateStage = isRealtime ? MapStage(e.GetAttributeValue<OptionSetValue>("createstage")?.Value) : null,
                UpdateStage = isRealtime ? MapStage(e.GetAttributeValue<OptionSetValue>("updatestage")?.Value) : null,
                DeleteStage = isRealtime ? MapStage(e.GetAttributeValue<OptionSetValue>("deletestage")?.Value) : null,
                Mode = modeValue == 0 ? "Background" : "Realtime",
                Scope = MapScope(scopeValue),
                RunAs = runAsValue == 0 ? "Owner" : "Caller",
                Rank = e.GetAttributeValue<int>("rank"),
                OnDemand = e.GetAttributeValue<bool>("ondemand"),
                Subprocess = e.GetAttributeValue<bool>("subprocess"),
                IsTransacted = e.GetAttributeValue<bool>("istransacted"),
                AsyncAutoDelete = e.GetAttributeValue<bool>("asyncautodelete"),
                Status = stateValue == 1 ? "Active" : "Draft",
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                Owner = e.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "",
                ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd") ?? "",
                ModifiedBy = e.GetAttributeValue<EntityReference>("modifiedby")?.Name ?? ""
            };
        }

        private static string BuildTriggersDisplay(WorkflowEntry w)
        {
            var parts = new List<string>();
            if (w.TriggerOnCreate) parts.Add("Create");
            if (!string.IsNullOrEmpty(w.TriggerOnUpdateFields)) parts.Add("Update");
            if (w.TriggerOnDelete) parts.Add("Delete");
            return parts.Count > 0 ? string.Join(", ", parts) : "-";
        }

        private static string BuildStageDisplay(WorkflowEntry w)
        {
            if (w.Mode == "Background") return "Post(async)";
            var parts = new List<string>();
            if (w.TriggerOnCreate && w.CreateStage != null) parts.Add($"Create:{w.CreateStage}");
            if (!string.IsNullOrEmpty(w.TriggerOnUpdateFields) && w.UpdateStage != null) parts.Add($"Update:{w.UpdateStage}");
            if (w.TriggerOnDelete && w.DeleteStage != null) parts.Add($"Delete:{w.DeleteStage}");
            return parts.Count > 0 ? string.Join(", ", parts) : "-";
        }

        private static string MapStage(int? value) => value switch
        {
            20 => "Pre",
            40 => "Post",
            _ => null
        };

        private static string MapScope(int? value) => value switch
        {
            1 => "User",
            2 => "BU",
            3 => "Parent:ChildBU",
            4 => "Org",
            _ => "Unknown"
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

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private int? GetObjectTypeCode(string entityName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
