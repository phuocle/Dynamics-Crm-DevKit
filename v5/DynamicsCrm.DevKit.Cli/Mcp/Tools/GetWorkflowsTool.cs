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

        [McpServerTool(Name = "get_workflows", Title = "List classic workflows (background and real-time) for a Dataverse entity",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetWorkflowsResult)),
        Description(
            "List classic workflows (background and real-time) for a Dataverse entity.\n" +
            "Returns trigger configuration and execution behavior fields.\n\n" +

            "SCOPE: Classic workflows only (category=0). Does NOT include business rules,\n" +
            "actions, BPFs, or cloud flows -- use dedicated tools for those.\n\n" +

            "PARAMETERS:\n" +
            "- entity_name: Filter by entity (e.g., 'account'). Leave empty for all.\n" +
            "- mode: Filter by execution mode: 'background' or 'realtime'. Leave empty for both.\n" +
            "- active_only: Only return activated workflows (default: true).\n" +
            "- trigger_field: Filter workflows that trigger on a specific field (e.g., 'revenue').\n" +
            "  Searches triggeronupdateattributelist using contains match.\n" +
            "- name_filter: Filter by workflow name (contains match).\n" +
            "- max_records: Maximum records (default: 50, max: 250).\n\n" +

            "RETURNS:\n" +
            "- Table: name, mode, triggers (Create/Delete/Update), update fields,\n" +
            "  pipeline stage, scope, runAs, rank, ondemand, subprocess, status, modified\n" +
            "- Summary: count by mode, trigger type\n\n" +

            "KEY FIELDS EXPLAINED:\n" +
            "- triggeronupdateattributelist: comma-separated field names that trigger on Update.\n" +
            "  'statecode'/'statuscode' in this list = triggered by status change.\n" +
            "  'ownerid' in this list = triggered by record assignment.\n" +
            "- mode: 0=Background (async, queued), 1=Realtime (sync, in pipeline)\n" +
            "- createstage/updatestage/deletestage: pipeline stage (20=Pre, 40=Post).\n" +
            "  Only meaningful for Realtime workflows. Pre-operation can cancel the operation.\n" +
            "- scope: 1=User, 2=BU, 3=Parent:ChildBU, 4=Org\n" +
            "- runas: 0=Owner (workflow owner's privileges), 1=CallingUser (triggering user's privileges)\n" +
            "- rank: execution order when multiple real-time workflows fire on same event (lower=first)\n\n" +

            "WHEN TO USE:\n" +
            "- 'Does field X on entity Y have any workflow triggered?' -> trigger_field='X' + entity_name='Y'\n" +
            "- 'What workflows trigger when a record status changes?' -> trigger_field='statecode'\n" +
            "- 'What workflows trigger when a record is assigned?' -> trigger_field='ownerid'\n" +
            "- 'What real-time (synchronous) workflows exist on this entity?' -> mode='realtime'\n" +
            "- 'What automation runs before a record is created?' -> mode='realtime', check createstage=20\n" +
            "- 'What is the full picture of automation on this entity?' -> combine with get_rules and plugin registrations\n\n" +

            "TIPS:\n" +
            "- Background workflows always run Post-operation (async) -- stage fields are irrelevant\n" +
            "- Realtime workflows with Pre-operation stage can cancel/rollback the operation\n" +
            "- A non-empty triggeronupdateattributelist implies the workflow triggers on Update\n" +
            "- If all trigger booleans are false and update list is empty, check ondemand=true")]
        public CallToolResult get_workflows(
            [Description(
                "Entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "Leave empty for all entities. " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name = "",
            [Description(
                "Filter by execution mode: 'background' (async, queued) or 'realtime' (sync, in pipeline). " +
                "Leave empty to return both modes."
            )] string mode = "",
            [Description(
                "Only return activated workflows. Default: true. " +
                "Set to false to include draft/deactivated workflows."
            )] bool active_only = true,
            [Description(
                "Filter workflows whose triggeronupdateattributelist contains this attribute. " +
                "Examples: 'revenue', 'statecode', 'ownerid'. " +
                "Uses contains match. Leave empty for no field filter."
            )] string trigger_field = "",
            [Description(
                "Filter by workflow name (contains match). " +
                "Example: 'approval'. Leave empty for no name filter."
            )] string name_filter = "",
            [Description(
                "Maximum records to return. Default: 50, max: 250."
            )] int max_records = 50)
        {
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
                    return ErrorResult($"Error: Entity '{entity_name.Trim().ToLowerInvariant()}' not found. Use get_metadata_entities to discover valid entity names.");
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

                return FormatResults(result.Entities, entity_name, trigger_field);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve workflows: {ex.Message}");
            }
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
    <attribute name='uniquename' />
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
    <attribute name='syncworkflowlogonfailure' />
    <attribute name='statecode' />
    <attribute name='statuscode' />
    <attribute name='ismanaged' />
    <attribute name='ownerid' />
    <attribute name='createdby' />
    <attribute name='createdon' />
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
            sb.AppendLine("#\tName\tMode\tTriggers\tUpdateFields\tStage\tScope\tRunAs\tRank\tOnDemand\tSubprocess\tStatus\tModified");

            for (var i = 0; i < workflows.Count; i++)
            {
                var w = workflows[i];
                var triggers = BuildTriggersDisplay(w);
                var updateFields = EscapeTab(w.TriggerOnUpdateFields ?? "-");
                var stage = BuildStageDisplay(w);
                sb.AppendLine($"{i + 1}\t{EscapeTab(w.Name)}\t{w.Mode}\t{triggers}\t{updateFields}\t{stage}\t{w.Scope}\t{w.RunAs}\t{w.Rank}\t{(w.OnDemand ? "Yes" : "No")}\t{(w.Subprocess ? "Yes" : "No")}\t{w.Status}\t{w.ModifiedOn}");
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
