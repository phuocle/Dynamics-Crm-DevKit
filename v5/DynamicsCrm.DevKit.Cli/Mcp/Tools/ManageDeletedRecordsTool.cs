using Microsoft.Crm.Sdk.Messages;
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
using System.Net.Http;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageDeletedRecordsTool : McpToolBase
    {
        private const string RecycleBinConfigTable = "recyclebinconfig";
        private const string OrgRowName = "organization";
        private const int MinRetentionDays = 1;
        private const int MaxRetentionDays = 30;
        private const int DefaultRetentionDays = 30;

        private static Guid? _cachedOrganizationEntityId;

        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageDeletedRecordsTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _options = options ?? throw new ArgumentNullException(nameof(options));
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
            "Restore uses the SDK Restore message to move the record from the recycle bin back to the live table. " +
            "Toggle the org-level 'Keep deleted Dataverse records' setting via action='turn' turn='on|off'. " +
            "RELATED: manage_record (live CRUD), execute_webapi (raw), get_audit_history (who deleted).")]
        public CallToolResult manage_deleted_records(
            [Description("Action: 'list' (default) | 'detail' | 'restore' | 'status' | 'turn'.")] string action = "list",
            [Description("Entity Display/logical name. list: required. detail: required. restore: required if record_ids span multiple entities. status: not used. turn: not used.")] string entity_name = "",
            [Description("Single GUID. detail: required. list: not used. restore: optional if record_ids set.")] string record_id = "",
            [Description("Array of GUIDs (preferred for restore). detail/list: not used. restore: alternative to record_id.")] string[] record_ids = null,
            [Description("Search by primary attribute value (contains, case-insensitive). list only. Empty = all deleted records of entity.")] string name_filter = "",
            [Description("Max records. list: default 100, max 5000. detail/restore/status/turn: not used.")] int max_records = 100,
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
                    "restore" => ExecuteRestore(entity_name, record_id, record_ids),
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

        private CallToolResult ExecuteRestore(string entityName, string recordId, string[] recordIds)
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

            if (_options.DryRun)
            {
                var previewResults = guids.Select(g => new RestoreResultEntry
                {
                    RecordId = g,
                    Status = "not_executed",
                    Message = "The record was not restored."
                }).ToList();

                var previewStructured = new ManageDeletedRecordsResult
                {
                    Action = "restore",
                    EntityName = logicalName,
                    EntityDisplayName = displayName,
                    TotalRequested = guids.Count,
                    Restored = 0,
                    Failed = 0,
                    Results = previewResults
                };

                var previewText = $"Would restore {guids.Count} record(s) of {logicalName}.";
                return DryRun(previewText, previewStructured);
            }

            EnsureMutationAllowed();
            var results = new List<RestoreResultEntry>();
            int restored = 0;
            foreach (var g in guids)
            {
                try
                {
                    var restore = new OrganizationRequest("Restore")
                    {
                        Parameters =
                        {
                            ["Target"] = new Entity(logicalName, Guid.Parse(g))
                        }
                    };
                    DataverseMutationExecutor.Execute(_context, _serviceClient, restore);
                    results.Add(new RestoreResultEntry
                    {
                        RecordId = g,
                        Status = "restored",
                        RestoredRecordId = g
                    });
                    restored++;
                }
                catch (Exception ex)
                {
                    results.Add(new RestoreResultEntry
                    {
                        RecordId = g,
                        Status = "failed",
                        Message = ex.Message
                    });
                }
            }

            var failed = results.Count(r => r.Status == "failed");

            var structured = new ManageDeletedRecordsResult
            {
                Action = "restore",
                EntityName = logicalName,
                EntityDisplayName = displayName,
                TotalRequested = guids.Count,
                Restored = restored,
                Failed = failed,
                Results = results
            };

            var text = failed == 0
                ? $"[Success] {logicalName}: Restored {restored}/{guids.Count} record(s)."
                : $"[Partial] {logicalName}: Restored {restored}/{guids.Count} record(s), {failed} failed.";

            return Success(text, structured);
        }

        private CallToolResult ExecuteStatus()
        {
            var orgRow = GetOrgRecycleBinConfigRow();
            bool? isOn;
            if (orgRow == null)
            {
                isOn = null;
            }
            else
            {
                bool isReady = orgRow.GetAttributeValue<bool?>("isreadyforrecyclebin").GetValueOrDefault(false);
                int state = orgRow.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 1;
                isOn = state == 0 && isReady;
            }
            int? currentDays = orgRow?.GetAttributeValue<int?>("cleanupintervalindays");
            int maxDays = GetMaxRetentionDays();

            int enabledTableCount = 0;
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName)
                    }
                }
            };
            enabledTableCount = _serviceClient.RetrieveMultiple(qe).Entities.Count;

            var warnings = new List<string>();
            if (!isOn.HasValue)
            {
                warnings.Add("Org-level RecycleBinConfig row not found -- deleted record keeping may be disabled.");
            }
            if (currentDays.HasValue && currentDays.Value >= MaxRetentionDays)
            {
                warnings.Add($"CleanupIntervalInDays at or near max ({MaxRetentionDays}). Records older than {MaxRetentionDays} days are auto-purged and cannot be restored.");
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

        private CallToolResult ExecuteTurn(string turn, int retentionDays)
        {
            var t = (turn ?? "").Trim().ToLowerInvariant();
            if (t != "on" && t != "off")
            {
                return Error(
                    $"turn='{turn}' is not valid.",
                    "Valid values: turn='on' (enable soft-delete) | turn='off' (disable soft-delete). " +
                    "Both empty and anything other than 'on'/'off' are rejected to avoid accidental toggles.");
            }

            if (_options.DryRun)
            {
                var retentionText = t == "on" ? $" with retention_days={retentionDays}" : "";
                var previewText = $"Would turn soft-delete {t.ToUpperInvariant()}{retentionText}.";
                var previewStructured = new ManageDeletedRecordsResult
                {
                    Action = "turn",
                    NewValue = t == "on",
                    MaxRetentionDays = t == "on" ? retentionDays : (int?)null,
                    CurrentRetentionDays = t == "on" ? retentionDays : (int?)null
                };
                return DryRun(previewText, previewStructured);
            }

            var currentOrgRow = GetOrgRecycleBinConfigRow();
            bool currentIsReady = currentOrgRow?.GetAttributeValue<bool?>("isreadyforrecyclebin").GetValueOrDefault(false) ?? false;
            int currentState = currentOrgRow?.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 1;
            bool currentlyOn = currentState == 0 && currentIsReady;
            bool requestedOn = t == "on";
            if (currentlyOn == requestedOn)
            {
                var stateWord = requestedOn ? "ON" : "OFF";
                var hint = requestedOn
                    ? "Call action='turn' turn='off' first to disable, then re-run with turn='on'."
                    : "Call action='turn' turn='on' first to enable, then re-run with turn='off'.";
                return Error(
                    $"Soft-delete is already {stateWord} at the org level. No state change was made.",
                    $"The org-level 'Keep deleted Dataverse records' feature is currently {stateWord} " +
                    $"(recyclebinconfig[organization].statecode={(currentOrgRow == null ? "(row missing)" : currentState.ToString())}, " +
                    $"isreadyforrecyclebin={(currentOrgRow == null ? "(row missing)" : currentIsReady.ToString())}). " +
                    $"This turn='{t}' request would be a no-op, so it was rejected to avoid unnecessary " +
                    $"DELETE + POST round-trips. {hint}");
            }

            const string requiredRoleName = DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName;
            if (!RoleGateHelper.IsSystemAdministrator(_serviceClient))
            {
                var haveRoles = RoleGateHelper.GetCurrentRoleNames(_serviceClient);
                var haveList = haveRoles.Count > 0
                    ? string.Join(", ", haveRoles)
                    : "(no roles assigned)";
                return Error(
                    $"Action 'turn' requires the '{requiredRoleName}' role. The calling user does not have it.",
                    $"Toggling soft-delete on/off at the org level is destructive (cascades per-table recyclebinconfig rows; turns future Deletes into permanent hard-deletes). " +
                    $"Ask a System Administrator to assign the '{requiredRoleName}' role to your user, then retry. " +
                    $"Current roles on the calling user: {haveList}.");
            }

            int actualRetention = retentionDays;
            if (t == "on")
            {
                if (retentionDays < MinRetentionDays ||
                    retentionDays > MaxRetentionDays)
                {
                    return Error(
                        $"retention_days={retentionDays} out of range.",
                        $"Valid range: {MinRetentionDays}..{MaxRetentionDays}. Default = {DefaultRetentionDays}.");
                }
            }
            else
            {
                actualRetention = DefaultRetentionDays;
            }

            var prevRow = GetOrgRecycleBinConfigRow();
            bool? previousOn;
            if (prevRow == null)
            {
                previousOn = null;
            }
            else
            {
                bool prevIsReady = prevRow.GetAttributeValue<bool?>("isreadyforrecyclebin").GetValueOrDefault(false);
                int prevState = prevRow.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 1;
                previousOn = prevState == 0 && prevIsReady;
            }

            if (t == "on")
            {
                var newId = TurnOn(actualRetention);
                var text = $"[Success] Soft-delete turned ON (new id={newId}, retention={actualRetention} days). Dataverse will provision per-table rows in the background (operationtype=104 'Process Table For RecycleBin').";
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
                var deletedId = TurnOff();
                var text = $"[Success] Soft-delete turned OFF (deleted recyclebinconfig id={deletedId}). Dataverse will cascade-delete per-table rows in the background.";
                var structured = new ManageDeletedRecordsResult
                {
                    Action = "turn",
                    PreviousValue = previousOn,
                    NewValue = false
                };
                return Success(text, structured);
            }
        }

        private Guid? TurnOff()
        {
            EnsureMutationAllowed();
            var row = GetOrgRecycleBinConfigRow();
            if (row == null) return null;
            var id = row.Id;

            var setState = new SetStateRequest
            {
                EntityMoniker = new EntityReference(RecycleBinConfigTable, id),
                State = new OptionSetValue(1),
                Status = new OptionSetValue(2)
            };
                    DataverseMutationExecutor.Execute(_context, _serviceClient, setState);
            return id;
        }

        private string TurnOn(int retentionDays)
        {
            EnsureMutationAllowed();
            if (retentionDays < MinRetentionDays) retentionDays = MinRetentionDays;
            if (retentionDays > MaxRetentionDays) retentionDays = MaxRetentionDays;

            var row = GetOrgRecycleBinConfigRow();
            if (row != null)
            {
                var setState = new SetStateRequest
                {
                    EntityMoniker = new EntityReference(RecycleBinConfigTable, row.Id),
                    State = new OptionSetValue(0),
                    Status = new OptionSetValue(1)
                };
                    DataverseMutationExecutor.Execute(_context, _serviceClient, setState);

                var currentDays = row.GetAttributeValue<int?>("cleanupintervalindays");
                if (!currentDays.HasValue || currentDays.Value != retentionDays)
                {
                    var update = new Entity(RecycleBinConfigTable, row.Id)
                    {
                        ["cleanupintervalindays"] = retentionDays
                    };
                    DataverseMutationExecutor.Update(_context, _serviceClient, update);
                }

                return row.Id.ToString();
            }

            var entityId = GetOrganizationEntityId();

            var payload = "{" +
                "\"cleanupintervalindays\":" + retentionDays.ToString(CultureInfo.InvariantCulture) + "," +
                "\"extensionofrecordid@OData.Community.Display.V1.FormattedValue\":\"OrganizationId\"," +
                "\"extensionofrecordid@odata.bind\":\"entities(" + entityId.ToString() + ")\"" +
                "}";
            var headers = new Dictionary<string, List<string>>
            {
                { "Accept", new List<string> { "application/json" } },
                { "OData-MaxVersion", new List<string> { "4.0" } },
                { "OData-Version", new List<string> { "4.0" } },
                { "Prefer", new List<string> { "return=representation", "odata.include-annotations=\"*\"" } }
            };

            using var resp = DataverseWebApiMutationExecutor.Execute(
                _context,
                _serviceClient,
                HttpMethod.Post,
                "recyclebinconfigs",
                payload,
                headers,
                "application/json");

            var body = resp.Content != null ? resp.Content.ReadAsStringAsync().GetAwaiter().GetResult() : "";
            int code = (int)resp.StatusCode;
            if (code < 200 || code >= 300)
                throw new InvalidOperationException("POST /recyclebinconfigs returned HTTP " + code + ": " + body);

            string newId = "(see response body)";
            if (resp.Headers != null && resp.Headers.TryGetValues("OData-EntityId", out var vals))
            {
                var entId = string.Join("", vals);
                int idx = entId.LastIndexOf('(');
                if (idx > 0 && entId.EndsWith(")"))
                    newId = entId.Substring(idx + 1, entId.Length - idx - 2);
            }
            if (newId == "(see response body)")
            {
                int iStart = body.IndexOf("recyclebinconfigs(", StringComparison.OrdinalIgnoreCase);
                if (iStart >= 0)
                {
                    int iEnd = body.IndexOf(')', iStart);
                    if (iEnd > iStart)
                        newId = body.Substring(iStart + "recyclebinconfigs(".Length, iEnd - iStart - "recyclebinconfigs(".Length);
                }
            }
            if (newId == "(see response body)" && !string.IsNullOrWhiteSpace(body))
            {
                using var doc = JsonDocument.Parse(body);
                if (doc.RootElement.TryGetProperty("recyclebinconfigid", out var idProperty))
                {
                    var idText = idProperty.GetString();
                    if (!string.IsNullOrWhiteSpace(idText))
                        newId = idText;
                }
            }

            return newId;
        }

        private void EnsureMutationAllowed()
        {
            // Keep one fail-closed mutation policy. Action-level _options.DryRun
            // checks are only for producing the preview response; this assertion
            // protects the boundary even if a caller reaches the helper directly.
            _context.AssertMutationAllowed("Manage deleted records mutation");
        }

        private int GetMaxRetentionDays()
        {
            var row = GetOrgRecycleBinConfigRow();
            if (row == null) return MaxRetentionDays;
            int? days = row.GetAttributeValue<int?>("cleanupintervalindays");
            if (!days.HasValue || days.Value < 1) return MaxRetentionDays;
            return Math.Min(days.Value, MaxRetentionDays);
        }

        private Entity GetOrgRecycleBinConfigRow()
        {
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin", "cleanupintervalindays", "statecode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.Equal, OrgRowName)
                    }
                }
            };
            var result = _serviceClient.RetrieveMultiple(qe);
            return result.Entities.Count == 1 ? result.Entities[0] : null;
        }

        private Guid GetOrganizationEntityId()
        {
            if (_cachedOrganizationEntityId.HasValue) return _cachedOrganizationEntityId.Value;
            var qe = new QueryExpression("entity")
            {
                ColumnSet = new ColumnSet("entityid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("logicalname", ConditionOperator.Equal, "organization")
                    }
                }
            };
            var result = _serviceClient.RetrieveMultiple(qe);
            if (result.Entities.Count == 0)
                throw new InvalidOperationException("entity row not found for logicalname='organization'");
            _cachedOrganizationEntityId = result.Entities[0].Id;
            return _cachedOrganizationEntityId.Value;
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
