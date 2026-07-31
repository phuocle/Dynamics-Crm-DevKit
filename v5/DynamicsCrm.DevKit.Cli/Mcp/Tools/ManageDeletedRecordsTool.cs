using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageDeletedRecordsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public ManageDeletedRecordsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "manage_deleted_records",
            Title = "List/detail/restore/check-status of soft-deleted Dataverse records",
            Idempotent = false,
            Destructive = false,
            ReadOnly = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(ManageDeletedRecordsResult)),
        Description(
            "List / detail / restore / status for soft-deleted records. " +
            "Soft-delete = IOrganizationService.Delete (records recoverable for up to MaxRetentionDays, default 30). " +
            "Uses FetchXml datasource='bin' for list/detail (bin exposes only entity attributes â€” no 'deletedon'/'deletedby', use 'modifiedOn' as proxy). " +
            "Restore uses OrganizationRequest('Restore') late-bound. " +
            "RELATED: manage_record (live CRUD), execute_webapi (raw), get_audit_history (who deleted).")]
        public CallToolResult manage_deleted_records(
            [Description("Action: 'list' (default) | 'detail' | 'restore' | 'status'.")] string action = "list",
            [Description("Entity Display/logical name. list: required. detail: required. restore: required if record_ids span multiple entities. status: not used.")] string entity_name = "",
            [Description("Single GUID. detail: required. list: not used. restore: optional if record_ids set.")] string record_id = "",
            [Description("Array of GUIDs (preferred for restore). detail/list: not used. restore: alternative to record_id.")] string[] record_ids = null,
            [Description("Search by primary attribute value (contains, case-insensitive). list only. Empty = all deleted records of entity.")] string name_filter = "",
            [Description("Max records. list: default 100, max 5000. detail/restore/status: not used.")] int max_records = 100,
            [Description("Set false to actually restore. list/detail/status: not used. Default true (safe preview).")] bool dry_run = true)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'restore', 'status'.");

                var normalized = action.Trim().ToLowerInvariant();
                return normalized switch
                {
                    "list" => ExecuteList(entity_name, name_filter, max_records),
                    "detail" => ExecuteDetail(entity_name, record_id),
                    "restore" => ExecuteRestore(entity_name, record_id, record_ids, dry_run),
                    "status" => ExecuteStatus(),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'restore', 'status'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult ExecuteList(string entityName, string nameFilter, int maxRecords)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required when action='list'.",
                    "Pass entity_name (Display Name or logical name, e.g. 'Account' or 'account').");

            if (maxRecords < 1) maxRecords = 100;
            if (maxRecords > 5000) maxRecords = 5000;

            entityName = entityName.Trim();
            nameFilter = nameFilter?.Trim() ?? "";

            var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_deleted_records");
            if (!entityResult.IsSuccess)
                return Error($"entity_name '{entityName}': {entityResult.Error}");
            var logicalName = entityResult.Value.LogicalName;
            var displayName = entityResult.Value.DisplayName?.UserLocalizedLabel?.Label ?? logicalName;
            var primaryKey = entityResult.Value.PrimaryIdAttribute ?? GetPrimaryKeyAttribute(logicalName);
            var primaryName = entityResult.Value.PrimaryNameAttribute ?? GetPrimaryNameAttribute(logicalName);

            var fetchXml = BuildListFetchXml(logicalName, primaryKey, primaryName, nameFilter, maxRecords);
            var ec = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            var maxRetentionDays = GetMaxRetentionDays();

            var records = new List<DeletedRecordEntry>();
            foreach (var e in ec.Entities)
            {
                var modifiedOn = e.GetAttributeValue<DateTime?>("modifiedon");
                var createdOn = e.GetAttributeValue<DateTime?>("createdon");
                var modifiedBy = e.GetAttributeValue<EntityReference>("modifiedby")?.Name;
                var recordName = e.GetAttributeValue<string>(primaryName) ?? "";

                records.Add(new DeletedRecordEntry
                {
                    RecordId = e.Id.ToString(),
                    RecordName = recordName,
                    ModifiedOn = FormatDate(modifiedOn),
                    CreatedOn = FormatDate(createdOn),
                    ModifiedBy = string.IsNullOrEmpty(modifiedBy) ? null : modifiedBy,
                    ExpiresOn = FormatDate(modifiedOn?.AddDays(maxRetentionDays)),
                    CanRestore = true
                });
            }

            var structured = new ManageDeletedRecordsResult
            {
                Action = "list",
                EntityName = logicalName,
                EntityDisplayName = displayName,
                TotalCount = records.Count,
                Records = records.Count > 0 ? records : null
            };

            var text = records.Count == 0
                ? $"[Success] {logicalName}: 0 deleted records."
                : $"[Success] {logicalName}: {records.Count} deleted record(s).";

            return Success(text, structured);
        }

        private static string BuildListFetchXml(string entityLogicalName, string primaryKey, string primaryName, string nameFilter, int top)
        {
            var sb = new StringBuilder();
            sb.AppendLine($"<fetch top='{top}' datasource='bin'>");
            sb.AppendLine($"  <entity name='{entityLogicalName}'>");
            sb.AppendLine($"    <attribute name='{primaryKey}' />");
            sb.AppendLine($"    <attribute name='{primaryName}' />");
            sb.AppendLine($"    <attribute name='createdon' />");
            sb.AppendLine($"    <attribute name='modifiedon' />");
            sb.AppendLine($"    <attribute name='modifiedby' />");
            if (!string.IsNullOrWhiteSpace(nameFilter))
            {
                sb.AppendLine($"    <filter type='and'>");
                sb.AppendLine($"      <condition attribute='{primaryName}' operator='like' value='%{EscapeXml(nameFilter)}%' />");
                sb.AppendLine($"    </filter>");
            }
            sb.AppendLine($"  </entity>");
            sb.AppendLine($"</fetch>");
            return sb.ToString();
        }

        private CallToolResult ExecuteDetail(string entityName, string recordId)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required when action='detail'.",
                    "Pass entity_name (Display Name or logical name, e.g. 'Account' or 'account').");
            if (string.IsNullOrWhiteSpace(recordId))
                return Error("record_id is required when action='detail'.",
                    "Pass a GUID of a soft-deleted record.");
            if (!Guid.TryParse(recordId.Trim(), out _))
                return Error($"'{recordId}' is not a valid GUID.");

            entityName = entityName.Trim();

            var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_deleted_records");
            if (!entityResult.IsSuccess)
                return Error($"entity_name '{entityName}': {entityResult.Error}");
            var logicalName = entityResult.Value.LogicalName;
            var displayName = entityResult.Value.DisplayName?.UserLocalizedLabel?.Label ?? logicalName;

            var primaryKey = entityResult.Value.PrimaryIdAttribute ?? GetPrimaryKeyAttribute(logicalName);
            var primaryName = entityResult.Value.PrimaryNameAttribute ?? GetPrimaryNameAttribute(logicalName);

            var fetchXml = $"<fetch top='1' datasource='bin'>" +
                           $"  <entity name='{logicalName}'>" +
                           $"    <all-attributes />" +
                           $"    <filter type='and'>" +
                           $"      <condition attribute='{primaryKey}' operator='eq' value='{recordId.Trim()}' />" +
                           $"    </filter>" +
                           $"  </entity>" +
                           $"</fetch>";

            EntityCollection ec = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (ec.Entities.Count == 0)
            {
                var notFound = new ManageDeletedRecordsResult
                {
                    Action = "detail",
                    EntityName = logicalName,
                    EntityDisplayName = displayName,
                    RecordId = recordId.Trim(),
                    NotFound = true,
                    NotFoundHint = $"Record not found in the bin. It may be live (not deleted), or it never existed, or the retention window has passed. Try manage_record(action='read', entity_name='{displayName}', record_id='{recordId.Trim()}') to check if it's live."
                };
                return Success($"[Success] {logicalName} {recordId.Trim()}: not found in bin.", notFound);
            }

            var entity = ec.Entities[0];
            var maxRetentionDays = GetMaxRetentionDays();

            var attributes = new Dictionary<string, string>();
            foreach (var kv in entity.Attributes.OrderBy(k => k.Key))
            {
                if (kv.Value == null) continue;
                var formatted = entity.FormattedValues.ContainsKey(kv.Key)
                    ? entity.FormattedValues[kv.Key]
                    : FormatRawValue(kv.Value);
                if (string.IsNullOrEmpty(formatted)) continue;
                attributes[kv.Key] = formatted;
            }

            var modifiedOn = entity.GetAttributeValue<DateTime?>("modifiedon");
            var createdOn = entity.GetAttributeValue<DateTime?>("createdon");
            var recordName = entity.GetAttributeValue<string>(primaryName) ?? "";

            var structured = new ManageDeletedRecordsResult
            {
                Action = "detail",
                EntityName = logicalName,
                EntityDisplayName = displayName,
                RecordId = entity.Id.ToString(),
                RecordName = recordName,
                ModifiedOn = FormatDate(modifiedOn),
                CreatedOn = FormatDate(createdOn),
                ExpiresOn = FormatDate(modifiedOn?.AddDays(maxRetentionDays)),
                TotalCount = 1,
                Attributes = attributes.Count > 0 ? attributes : null
            };

            return Success($"[Success] {logicalName} {entity.Id}: {attributes.Count} attributes from bin.", structured);
        }

        private CallToolResult ExecuteRestore(string entityName, string recordId, string[] recordIds, bool dryRun)
        {
            var guids = new List<string>();
            if (recordIds != null && recordIds.Length > 0)
                guids.AddRange(recordIds.Where(g => !string.IsNullOrWhiteSpace(g)));
            if (guids.Count == 0 && !string.IsNullOrWhiteSpace(recordId))
                guids.Add(recordId.Trim());

            if (guids.Count == 0)
                return Error("record_id or record_ids is required when action='restore'.",
                    "Pass 1+ GUIDs of soft-deleted records (e.g. record_id='abc-...' or record_ids=['abc-...','def-...']).");

            for (int i = 0; i < guids.Count; i++)
            {
                if (!Guid.TryParse(guids[i].Trim(), out _))
                    return Error($"record_ids[{i}] '{guids[i]}' is not a valid GUID.");
                guids[i] = guids[i].Trim();
            }

            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required when action='restore'.",
                    "Pass entity_name (e.g. 'Account' or 'account'). Even when restoring mixed entities, entity_name is required to build the Target Entity.");

            entityName = entityName.Trim();
            var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_deleted_records");
            if (!entityResult.IsSuccess)
                return Error($"entity_name '{entityName}': {entityResult.Error}");
            var logicalName = entityResult.Value.LogicalName;
            var displayName = entityResult.Value.DisplayName?.UserLocalizedLabel?.Label ?? logicalName;

            if (dryRun)
            {
                var previewResults = guids.Select(g => new RestoreResultEntry
                {
                    RecordId = g,
                    Status = "would-restore",
                    Message = "dry_run=true â€” no actual restore performed"
                }).ToList();

                var previewStructured = new ManageDeletedRecordsResult
                {
                    Action = "restore",
                    EntityName = logicalName,
                    EntityDisplayName = displayName,
                    DryRun = true,
                    TotalRequested = guids.Count,
                    Restored = 0,
                    Failed = 0,
                    Results = previewResults
                };

                var previewText = $"[DRY-RUN] Would restore {guids.Count} record(s) of {logicalName}.\nNo changes were made.";
                return Success(previewText, previewStructured);
            }

            var results = new List<RestoreResultEntry>();
            int restored = 0;
            foreach (var g in guids)
            {
                var request = new OrganizationRequest("Restore")
                {
                    Parameters = { { "Target", new Entity(logicalName, Guid.Parse(g)) } }
                };
                var response = _serviceClient.Execute(request);
                var restoredId = response.Results.ContainsKey("id") ? response.Results["id"]?.ToString() : g;
                results.Add(new RestoreResultEntry
                {
                    RecordId = g,
                    Status = "restored",
                    RestoredRecordId = restoredId
                });
                restored++;
            }

            var structured = new ManageDeletedRecordsResult
            {
                Action = "restore",
                EntityName = logicalName,
                EntityDisplayName = displayName,
                DryRun = false,
                TotalRequested = guids.Count,
                Restored = restored,
                Failed = 0,
                Results = results
            };

            var text = $"[Success] {logicalName}: Restored {restored}/{guids.Count} record(s).";

            return Success(text, structured);
        }

        private CallToolResult ExecuteStatus()
        {
            var orgConfig = GetOrgRecycleBinConfig();
            var maxRetentionDays = orgConfig?.CleanupIntervalInDays is int d && d > 0 ? d : 30;
            var softDeleteSupported = orgConfig?.IsReadyForRecycleBin == true;

            var enabledTableCount = CountEnabledTables();

            var structured = new ManageDeletedRecordsResult
            {
                Action = "status",
                SoftDeleteSupported = softDeleteSupported,
                MaxRetentionDays = 30,
                CurrentRetentionDays = maxRetentionDays,
                EnabledTableCount = enabledTableCount,
                DataverseVersion = _serviceClient.ConnectedOrgVersion?.ToString()
            };

            var warnings = new List<string>();
            if (orgConfig == null)
                warnings.Add("Org-level RecycleBinConfig row not found â€” deleted record keeping may be disabled.");
            if (maxRetentionDays >= 30)
                warnings.Add("CleanupIntervalInDays at or near max (30). Records older than 30 days are auto-purged and cannot be restored.");

            if (warnings.Count > 0) structured.Warnings = warnings;

            var text = softDeleteSupported
                ? $"[Success] Soft-delete supported. Retention: {maxRetentionDays} day(s). Enabled tables: {enabledTableCount}."
                : $"[Success] Soft-delete NOT supported on this org (isreadyforrecyclebin=false).";

            return Success(text, structured);
        }


        private sealed class OrgRecycleBinConfig
        {
            public int? CleanupIntervalInDays { get; set; }
            public bool? IsReadyForRecycleBin { get; set; }
        }

        private OrgRecycleBinConfig GetOrgRecycleBinConfig()
        {
            var qe = new QueryExpression("recyclebinconfig")
            {
                ColumnSet = new ColumnSet("cleanupintervalindays", "isreadyforrecyclebin"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions = { new ConditionExpression("name", ConditionOperator.Equal, "organization") }
                },
                TopCount = 1
            };
            var ec = _serviceClient.RetrieveMultiple(qe);
            var row = ec.Entities.FirstOrDefault();
            if (row == null) return null;
            return new OrgRecycleBinConfig
            {
                CleanupIntervalInDays = row.GetAttributeValue<int?>("cleanupintervalindays"),
                IsReadyForRecycleBin = row.GetAttributeValue<bool?>("isreadyforrecyclebin")
            };
        }

        private int GetMaxRetentionDays()
        {
            var c = GetOrgRecycleBinConfig();
            return c?.CleanupIntervalInDays is int d && d > 0 ? d : 30;
        }

        private int CountEnabledTables()
        {
            var fetch = @"<fetch aggregate='true'>
  <entity name='recyclebinconfig'>
    <attribute name='recyclebinconfigid' aggregate='count' alias='count_enabled'/>
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0'/>
      <condition attribute='isreadyforrecyclebin' operator='eq' value='1'/>
    </filter>
  </entity>
</fetch>";
            var ec = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
            var row = ec.Entities.FirstOrDefault();
            if (row != null && row.Attributes.ContainsKey("count_enabled"))
            {
                var aliased = row["count_enabled"] as AliasedValue;
                if (aliased?.Value is int n) return n;
                if (aliased?.Value is long l) return (int)l;
            }
            return 0;
        }

        private static string GetPrimaryKeyAttribute(string entityLogicalName)
        {
            if (entityLogicalName.EndsWith("ies", StringComparison.OrdinalIgnoreCase))
                return entityLogicalName.Substring(0, entityLogicalName.Length - 3) + "yid";
            if (entityLogicalName.EndsWith("s", StringComparison.OrdinalIgnoreCase))
                return entityLogicalName.Substring(0, entityLogicalName.Length - 1) + "id";
            return entityLogicalName + "id";
        }

        private static string GetPrimaryNameAttribute(string entityLogicalName)
        {
            return "name";
        }

        private static string FormatDate(DateTime? dt) =>
            dt.HasValue ? dt.Value.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) : null;

        private static string FormatRawValue(object v)
        {
            if (v == null) return "";
            return v switch
            {
                EntityReference er => string.IsNullOrWhiteSpace(er.Name) ? $"{er.LogicalName}:{er.Id}" : er.Name,
                OptionSetValue osv => osv.Value.ToString(),
                Money m => m.Value.ToString("N2", CultureInfo.InvariantCulture),
                DateTime dt => dt.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture),
                bool b => b ? "Yes" : "No",
                Guid g => g.ToString(),
                _ => v.ToString()
            };
        }

        private static string EscapeXml(string s) =>
            string.IsNullOrEmpty(s) ? s : s.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("\"", "&quot;").Replace("'", "&apos;");
    }
}
