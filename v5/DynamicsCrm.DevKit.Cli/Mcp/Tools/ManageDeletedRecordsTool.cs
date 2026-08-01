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
            "Toggle the org-level 'Keep deleted Dataverse records' setting via action='turn' turn='on|off'. " +
            "RELATED: manage_record (live CRUD), execute_webapi (raw), get_audit_history (who deleted).")]
        public CallToolResult manage_deleted_records(
            [Description("Action: 'list' (default) | 'detail' | 'restore' | 'status' | 'turn'.")] string action = "list",
            [Description("Entity Display/logical name. list: required. detail: required. restore: required if record_ids span multiple entities. status: not used. turn: not used.")] string entity_name = "",
            [Description("Single GUID. detail: required. list: not used. restore: optional if record_ids set.")] string record_id = "",
            [Description("Array of GUIDs (preferred for restore). detail/list: not used. restore: alternative to record_id.")] string[] record_ids = null,
            [Description("Search by primary attribute value (contains, case-insensitive). list only. Empty = all deleted records of entity.")] string name_filter = "",
            [Description("Max records. list: default 100, max 5000. detail/restore/status/turn: not used.")] int max_records = 100,
            [Description("Set false to actually restore. list/detail/status/turn: not used. Default true (safe preview).")] bool dry_run = true,
            [Description("Toggle direction for action='turn': 'on' to enable soft-delete, 'off' to disable. Required when action='turn'.")] string turn = "",
            [Description("Retention days for action='turn' turn='on'. Integer 1..30 inclusive. Default 30. Ignored for turn='off' or other actions.")] int retention_days = 30)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'restore', 'status', 'turn'.");

                var normalized = action.Trim().ToLowerInvariant();
                return normalized switch
                {
                    "list" => ExecuteList(entity_name, name_filter, max_records),
                    "detail" => ExecuteDetail(entity_name, record_id),
                    "restore" => ExecuteRestore(entity_name, record_id, record_ids, dry_run),
                    "status" => ExecuteStatus(),
                    "turn" => ExecuteTurn(turn, retention_days),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'restore', 'status', 'turn'.")
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

        /// <summary>
        /// action='status': reads org-level soft-delete state -- reads the
        /// <c>recyclebinconfig</c> org row (isreadyforrecyclebin +
        /// cleanupintervalindays) and counts how many per-table rows exist
        /// (each table that has soft-delete enabled has its own row whose
        /// name = table logical name).
        /// </summary>
        private CallToolResult ExecuteStatus()
        {
            var orgRow = RecycleBinConfigHelper.GetOrgRecycleBinConfigRow(_serviceClient);
            bool? isOn = orgRow == null
                ? (bool?)null
                : orgRow.GetAttributeValue<bool?>("isreadyforrecyclebin");
            int? currentDays = orgRow?.GetAttributeValue<int?>("cleanupintervalindays");
            int maxDays = RecycleBinConfigHelper.GetMaxRetentionDays(_serviceClient);

            // Count per-table rows (those with name != 'organization').
            int enabledTableCount = 0;
            var qe = new QueryExpression(RecycleBinConfigHelper.RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, RecycleBinConfigHelper.OrgRowName)
                    }
                }
            };
            enabledTableCount = _serviceClient.RetrieveMultiple(qe).Entities.Count;

            var warnings = new List<string>();
            if (!isOn.HasValue)
            {
                warnings.Add("Org-level RecycleBinConfig row not found -- deleted record keeping may be disabled.");
            }
            if (currentDays.HasValue && currentDays.Value >= RecycleBinConfigHelper.MaxRetentionDays)
            {
                warnings.Add($"CleanupIntervalInDays at or near max ({RecycleBinConfigHelper.MaxRetentionDays}). Records older than {RecycleBinConfigHelper.MaxRetentionDays} days are auto-purged and cannot be restored.");
            }

            var structured = new ManageDeletedRecordsResult
            {
                Action = "status",
                SoftDeleteSupported = isOn,
                MaxRetentionDays = maxDays,
                CurrentRetentionDays = currentDays,
                EnabledTableCount = enabledTableCount,
                Warnings = warnings.Count > 0 ? warnings : null
            };

            var text = isOn == true
                ? $"[Success] Soft-delete is ON ({enabledTableCount} table(s), retention={currentDays ?? maxDays} days)."
                : isOn == false
                    ? $"[Success] Soft-delete is OFF (0 tables, retention would be {maxDays} days when enabled)."
                    : "[Success] Soft-delete state UNKNOWN (org row missing).";

            return Success(text, structured);
        }

        /// <summary>
        /// action='turn': toggle the org-level soft-delete setting.
        /// Requires the <c>turn</c> param ("on" or "off"). If a previous
        /// RecycleBin operation is still running (operationtype=104 not yet
        /// Completed), this throws -- call again after Solution History shows
        /// the job as Succeeded/Failed/Canceled.
        /// </summary>
        private CallToolResult ExecuteTurn(string turn, int retentionDays)
        {
            // Validate 'turn' value.
            var t = (turn ?? "").Trim().ToLowerInvariant();
            if (t != "on" && t != "off")
            {
                return Error(
                    $"turn='{turn}' is not valid.",
                    "Valid values: turn='on' (enable soft-delete) | turn='off' (disable soft-delete). " +
                    "Both empty and anything other than 'on'/'off' are rejected to avoid accidental toggles.");
            }

            // Validate retention_days range for turn='on'.
            int actualRetention = retentionDays;
            if (t == "on")
            {
                if (retentionDays < RecycleBinConfigHelper.MinRetentionDays ||
                    retentionDays > RecycleBinConfigHelper.MaxRetentionDays)
                {
                    return Error(
                        $"retention_days={retentionDays} out of range.",
                        $"Valid range: {RecycleBinConfigHelper.MinRetentionDays}..{RecycleBinConfigHelper.MaxRetentionDays}. Default = {RecycleBinConfigHelper.DefaultRetentionDays}.");
                }
            }
            else
            {
                // retention_days is meaningless for turn='off'; ignore user input.
                actualRetention = RecycleBinConfigHelper.DefaultRetentionDays;
            }

            // Snapshot previous state for the response.
            var prevRow = RecycleBinConfigHelper.GetOrgRecycleBinConfigRow(_serviceClient);
            bool? previousOn = prevRow?.GetAttributeValue<bool?>("isreadyforrecyclebin");

            // Do the toggle.
            if (t == "on")
            {
                var newId = RecycleBinConfigHelper.TurnOn(_serviceClient, actualRetention);
                var text = previousOn == true
                    ? $"[Success] Soft-delete was already ON (id={newId}). No state change."
                    : $"[Success] Soft-delete turned ON (new id={newId}, retention={actualRetention} days). Dataverse will provision per-table rows in the background (operationtype=104 'Process Table For RecycleBin').";
                var structured = new ManageDeletedRecordsResult
                {
                    Action = "turn",
                    PreviousValue = previousOn,
                    NewValue = true,
                    MaxRetentionDays = actualRetention,
                    CurrentRetentionDays = actualRetention
                };
                return Success(text, structured);
            }
            else
            {
                var deletedId = RecycleBinConfigHelper.TurnOff(_serviceClient);
                var text = deletedId.HasValue
                    ? $"[Success] Soft-delete turned OFF (deleted recyclebinconfig id={deletedId}). Dataverse will cascade-delete per-table rows in the background."
                    : "[Success] Soft-delete was already OFF (no row to delete). No state change.";
                var structured = new ManageDeletedRecordsResult
                {
                    Action = "turn",
                    PreviousValue = previousOn,
                    NewValue = false
                };
                return Success(text, structured);
            }
        }

        private int GetMaxRetentionDays()
        {
            return RecycleBinConfigHelper.GetMaxRetentionDays(_serviceClient);
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
