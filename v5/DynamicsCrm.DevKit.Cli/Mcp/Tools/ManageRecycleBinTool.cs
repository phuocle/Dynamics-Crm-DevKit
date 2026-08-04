using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRecycleBinTool : McpToolBase
    {
        private const int MaxParallelism = 52;
        private const int RequestBatchSize = 100;
        private const int RequestBatchParallelism = 4;
        private const int DefaultPageSize = 10;
        private const int MaxPageSize = 100;
        private const string RecycleBinConfigTable = "recyclebinconfig";
        private const string EntityLogicalName = RecycleBinConfigTable;
        private const string OrgRowName = "organization";
        private const int InheritRetentionSentinel = -1;
        private const int HardCapRetentionDays = 30;

        private readonly ServiceClient _serviceClient;

        private sealed class RecycleBinConfigEntry
        {
            public Guid Id { get; set; }
            public string LogicalName { get; set; }
            public string DisplayName { get; set; }
            public bool IsReadyForRecycleBin { get; set; }
            public int StateCode { get; set; }
            public int? CleanupIntervalInDays { get; set; }
        }

        private sealed class RecycleBinOrgConfig
        {
            public Guid? Id { get; set; }
            public bool? IsReadyForRecycleBin { get; set; }
            public int? CleanupIntervalInDays { get; set; }
        }

        public ManageRecycleBinTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "manage_recycle_bin",
            Title = "List and bulk-configure per-table soft-delete (Recycle Bin) readiness flags",
            Idempotent = false,
            Destructive = false,
            ReadOnly = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(ManageRecycleBinResult)),
        Description(
            "Manage per-table soft-delete (Recycle Bin) readiness flags in the recyclebinconfig entity. " +
            "STRICT RULES — AI MUST FOLLOW: " +
            "(1) THIS TOOL ONLY toggles per-table rows via SetState (+ optional per-table cleanup interval). NEVER CREATE, NEVER DELETE any row. " +
            "(2) For ORG-LEVEL soft-delete ON/OFF and retention days, use manage_deleted_records(action='turn'). Do NOT call manage_recycle_bin on the org row (name='organization'). " +
            "(3) WARNING: manage_deleted_records(action='turn', turn='off') DELETEs the org row and Dataverse CASCADE-DELETEs ALL per-table rows in the background. If the user only wants to disable soft-delete for some tables while keeping the org-level feature ON, prefer manage_recycle_bin(action='turn_off', turn_off=<csv>) instead. " +
            "DATA MODEL: one row per (org, table). Per-table soft-delete ON = row statecode=0 (Active); OFF = statecode=1 (Inactive). isreadyforrecyclebin is platform-managed (stays true) — direct Update of it FAULTS with 0x80097578, so this tool toggles via SetStateRequest (probe-verified). cleanupintervalindays=-1 inherits from the org row (updating it via normal Update is supported). " +
            "ACTIONS: " +
            "list_table — paginated list of tables + their current soft-delete state (default 10/page, A-Z by logical name, supports entity_filter contains match). " +
            "turn_on — bulk turn soft-delete ON for 1+ tables (SetState Active via ExecuteMultiple batches). " +
            "turn_off — bulk turn soft-delete OFF for 1+ tables (SetState Inactive via ExecuteMultiple batches). " +
            "turn_on/turn_off special CSV value 'all' means every per-table row currently present in recyclebinconfig (skip the org row). Rows already in the desired state are reported as 'skipped'. " +
            "No CREATE and no DELETE is ever issued by this tool; per-table rows that don't exist yet must be created via manage_deleted_records(action='turn', turn='on') which triggers Dataverse background provisioning. " +
            "RELATED: manage_deleted_records (org-level ON/OFF + bin read/restore), get_tables (list of tables to build CSV), execute_webapi (raw — blocked for recyclebinconfigs PATCH/POST).")]
        public async Task<CallToolResult> manage_recycle_bin(
            [Description("Action: 'list_table' (default) | 'turn_on' | 'turn_off'.")] string action = "list_table",
            [Description("list_table: filter by name (contains, case-insensitive). turn_on/turn_off: not used.")] string entity_filter = "",
            [Description("list_table: include system tables (default false; only_custom takes precedence).")] bool include_system = false,
            [Description("list_table: show only custom tables (default false).")] bool only_custom = false,
            [Description("list_table: 1-based page number (default 1).")] int page = 1,
            [Description("list_table: rows per page (default 10, max 100).")] int page_size = 10,
            [Description("turn_on: CSV of entity logical/display names to turn soft-delete ON. Required for action='turn_on'.")] string turn_on = null,
            [Description("turn_off: CSV of entity logical/display names to turn soft-delete OFF. Required for action='turn_off'.")] string turn_off = null,
            [Description("turn_on/turn_off: optional cleanupintervalindays. 1-30: sets per-table rows AND the org row. -1: sets per-table rows only (inherit); org row untouched.")] int? cleanup_interval_days = null,
            [Description("turn_on/turn_off: 0 = default 4 ExecuteMultiple batch workers (server-advertised optimum). Clamped 1-52.")] int max_parallelism = 0,
            [Description("turn_on/turn_off: false to actually apply. Default true (safe preview).")] bool dry_run = true)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list_table', 'turn_on', 'turn_off'.");

                var normalized = action.Trim().ToLowerInvariant();
                return normalized switch
                {
                    "list_table" => ExecuteListTable(entity_filter, include_system, only_custom, page, page_size),
                    "turn_on" => await ExecuteTurnOnAsync(turn_on, cleanup_interval_days, max_parallelism, dry_run),
                    "turn_off" => await ExecuteTurnOffAsync(turn_off, cleanup_interval_days, max_parallelism, dry_run),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list_table', 'turn_on', 'turn_off'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult ExecuteListTable(string entityFilter, bool includeSystem, bool onlyCustom, int page, int pageSize)
        {
            entityFilter = entityFilter?.Trim() ?? "";
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = DefaultPageSize;
            if (pageSize > MaxPageSize) pageSize = MaxPageSize;

            var allRows = QueryConfigEntries(entityFilter, includeSystem, onlyCustom, page, pageSize);

            var displayNames = string.Join(", ", allRows.Select(r => r.DisplayName));
            var totalCount = CountConfigRows(entityFilter, includeSystem, onlyCustom);
            var totalPages = Math.Max(1, (int)Math.Ceiling(totalCount / (double)pageSize));
            var truncated = allRows.Count >= pageSize && page < totalPages;

            var structured = new ManageRecycleBinResult
            {
                Action = "list_table",
                EntityDisplayNames = string.IsNullOrEmpty(displayNames) ? null : displayNames,
                Page = page,
                PageSize = pageSize,
                TotalPages = totalPages,
                TotalCount = totalCount,
                Truncated = truncated,
                Tables = allRows.Count > 0 ? allRows.Select(r => new RecycleBinTableEntry
                {
                    LogicalName = r.LogicalName,
                    DisplayName = r.DisplayName,
                    IsReady = r.IsReadyForRecycleBin,
                    StateCode = r.StateCode,
                    Enabled = r.StateCode == 0 && r.IsReadyForRecycleBin,
                    IntervalDays = r.CleanupIntervalInDays
                }).ToList() : null,
                FilterNote = string.IsNullOrEmpty(entityFilter) ? null : $"entity_filter='{entityFilter}'"
            };

            var sb = new StringBuilder();
            if (allRows.Count == 0)
            {
                sb.AppendLine($"[Success] No tables matched (entity_filter='{entityFilter}', page {page}/{totalPages}, total {totalCount}).");
            }
            else
            {
                sb.AppendLine($"[Success] {allRows.Count} tables (page {page}/{totalPages}, total {totalCount}):");
                sb.AppendLine();
                foreach (var r in allRows)
                {
                    var state = r.IsReadyForRecycleBin
                        ? $"ready ({r.CleanupIntervalInDays} days)"
                        : "NOT ready";
                    sb.AppendLine($"  - {r.DisplayName} ({r.LogicalName}): {state}");
                }
                if (truncated)
                {
                    var remaining = totalCount - (page * pageSize);
                    sb.AppendLine();
                    sb.AppendLine($"... còn {Math.Max(0, remaining)} tables nữa. Nói \"show page {page + 1}\" để xem tiếp.");
                }
            }

            return Success(sb.ToString(), structured);
        }

        private Task<CallToolResult> ExecuteTurnOnAsync(string turnOn, int? cleanupIntervalDays, int maxParallelism, bool dryRun)
            => ExecuteTurnAsync("turn_on", isReady: true, turnOn, cleanupIntervalDays, maxParallelism, dryRun);

        private Task<CallToolResult> ExecuteTurnOffAsync(string turnOff, int? cleanupIntervalDays, int maxParallelism, bool dryRun)
            => ExecuteTurnAsync("turn_off", isReady: false, turnOff, cleanupIntervalDays, maxParallelism, dryRun);

        private async Task<CallToolResult> ExecuteTurnAsync(string action, bool isReady, string csv, int? cleanupIntervalDays, int maxParallelism, bool dryRun)
        {
            var names = ParseCsv(csv);
            if (names.Count == 0)
                return Error($"{action}: CSV parameter is required and must contain at least 1 entity name.",
                    $"Pass 1+ entity logical/display names as a comma-separated string (e.g. {action}=\"Account,Contact,new_order\"), or the special value 'all' for every per-table row. " +
                    "Use get_tables to enumerate available tables.");

            List<RecycleBinConfigEntry> configRows = null;
            if (names.Any(n => string.Equals(n, "all", StringComparison.OrdinalIgnoreCase)))
            {
                configRows = GetAllPerTableRows();
                names = configRows.Select(r => r.LogicalName).Where(n => !string.IsNullOrEmpty(n)).ToList();
                if (names.Count == 0)
                    return Error($"{action}: 'all' matched 0 per-table rows in recyclebinconfig.",
                        "Per-table rows are provisioned by Dataverse in the background after org-level soft-delete is turned ON. " +
                        "Call manage_deleted_records(action='turn', retention_days=1..30) first, wait for provisioning, then retry.");
            }

            if (cleanupIntervalDays.HasValue)
            {
                var v = cleanupIntervalDays.Value;
                if (v != InheritRetentionSentinel && (v < 1 || v > HardCapRetentionDays))
                    return Error($"cleanup_interval_days={v} is out of range.",
                        $"Valid: 1..{HardCapRetentionDays} (per-table override), or {InheritRetentionSentinel} = inherit from org row.");
            }

            var orgConfig = GetOrgRecycleBinConfig();
            if (orgConfig == null)
                return Error("Org-level RecycleBinConfig row (name='organization') not found — soft-delete is disabled at the org level.",
                    "Call manage_deleted_records(action='turn', retention_days=1..30) first to turn ON soft-delete at the org level, then retry this " + action + ".");
            if (orgConfig.IsReadyForRecycleBin != true)
                return Error("Org-level soft-delete is currently OFF (isreadyforrecyclebin=false on the org row).",
                    "Call manage_deleted_records(action='turn', retention_days=1..30) first to turn ON soft-delete at the org level, then retry this " + action + ".");

            if (dryRun)
            {
                var items = names.Select(n => new RecycleBinApplyItem
                {
                    LogicalName = n,
                    Mode = action,
                    Status = "dry_run"
                }).ToList();

                var structured = new ManageRecycleBinResult
                {
                    Action = action,
                    DryRun = true,
                    Succeeded = 0,
                    Failed = 0,
                    EnableCount = isReady ? names.Count : 0,
                    DisableCount = isReady ? 0 : names.Count,
                    OrgIntervalDays = cleanupIntervalDays,
                    Items = items,
                    Warnings = new List<string>
                    {
                        "dry_run=true — no changes were made. Call again with dry_run=false to apply.",
                        BuildIntervalNote(cleanupIntervalDays)
                    }
                };

                var sb = new StringBuilder();
                sb.AppendLine($"[DRY-RUN] {action}: would apply to {names.Count} table(s):");
                sb.AppendLine();
                sb.AppendLine($"  {string.Join(", ", names)}");
                if (cleanupIntervalDays.HasValue && cleanupIntervalDays.Value != InheritRetentionSentinel)
                    sb.AppendLine($"  Org row cleanupintervalindays → {cleanupIntervalDays}");
                else if (cleanupIntervalDays.HasValue)
                    sb.AppendLine($"  Per-table rows cleanupintervalindays → {InheritRetentionSentinel} (inherit); org row untouched");
                sb.AppendLine();
                sb.AppendLine("No changes were made. Re-call with dry_run=false to apply.");
                return Success(sb.ToString(), structured);
            }

            var sw = Stopwatch.StartNew();

            // max_parallelism controls ExecuteMultiple batch workers (default 4 = server-advertised optimum).
            var batchDop = maxParallelism <= 0 ? RequestBatchParallelism : Math.Clamp(maxParallelism, 1, MaxParallelism);

            // Load per-table rows (once) + entity metadata ONCE (no per-item RetrieveAllEntities).
            configRows ??= GetAllPerTableRows();
            var rowsByName = new Dictionary<string, RecycleBinConfigEntry>(StringComparer.OrdinalIgnoreCase);
            foreach (var r in configRows)
                if (!string.IsNullOrEmpty(r.LogicalName) && !rowsByName.ContainsKey(r.LogicalName))
                    rowsByName[r.LogicalName] = r;

            // statecode is the real per-table switch (probe-verified): 0=Active(ON), 1=Inactive(OFF).
            var desiredState = isReady ? 0 : 1;
            var desiredStatus = isReady ? 1 : 2;

            var candidates = LoadEntityCandidatesOnce();
            var allItems = new List<RecycleBinApplyItem>(names.Count);
            var resolvedRows = new List<(RecycleBinApplyItem Item, RecycleBinConfigEntry Row)>();
            var toChange = new List<(RecycleBinApplyItem Item, OrganizationRequest Request)>();
            var queuedRowIds = new HashSet<Guid>();
            foreach (var name in names)
            {
                var resolved = DisplayNameFirstResolver.Resolve(
                    name,
                    candidates,
                    "[AmbiguousEntity]",
                    "[NotFoundEntity]",
                    "Tip: Use get_tables to list entities before calling manage_recycle_bin.",
                    "entity_name");
                if (!resolved.IsSuccess)
                {
                    allItems.Add(new RecycleBinApplyItem { LogicalName = name, Mode = action, Status = "failed", Error = resolved.Error });
                    continue;
                }
                var logicalName = resolved.Value.LogicalName;
                if (!rowsByName.TryGetValue(logicalName, out var row))
                {
                    allItems.Add(new RecycleBinApplyItem
                    {
                        LogicalName = logicalName,
                        Mode = action,
                        Status = "failed",
                        Error = $"recyclebinconfig row for '{logicalName}' not found — per-table rows are provisioned by Dataverse in the background. " +
                                "Ensure org-level soft-delete is ON (manage_deleted_records action='turn') and wait for provisioning, then retry."
                    });
                    continue;
                }
                var pending = new RecycleBinApplyItem { LogicalName = logicalName, Mode = action, Status = "pending" };
                allItems.Add(pending);
                resolvedRows.Add((pending, row));
                if (row.StateCode == desiredState || !queuedRowIds.Add(row.Id))
                {
                    pending.Status = "skipped";
                    continue;
                }
                toChange.Add((pending, new SetStateRequest
                {
                    EntityMoniker = new EntityReference(EntityLogicalName, row.Id),
                    State = new OptionSetValue(desiredState),
                    Status = new OptionSetValue(desiredStatus)
                }));
            }

            // SetState via ExecuteMultiple batches (probe-proven fastest vs parallel individual Execute).
            ExecuteRequestBatches(toChange, batchDop);

            // Optional per-table cleanup interval (documented Update path) on every resolved row.
            if (cleanupIntervalDays.HasValue)
            {
                ExecuteRequestBatches(resolvedRows.Select(t =>
                {
                    var update = new Entity(EntityLogicalName, t.Row.Id);
                    update["cleanupintervalindays"] = cleanupIntervalDays.Value;
                    return (t.Item, (OrganizationRequest)new UpdateRequest { Target = update });
                }).ToList(), batchDop);
            }

            sw.Stop();

            var ordered = allItems.OrderBy(i => names.IndexOf(i.LogicalName)).ToList();

            var succeeded = ordered.Count(i => i.Status == "applied");
            var skipped = ordered.Count(i => i.Status == "skipped");
            var failed = ordered.Count(i => i.Status == "failed");
            var total = names.Count;
            var failRate = total > 0 ? (double)failed / total : 0.0;

            var warnings = new List<string>();
            if (cleanupIntervalDays.HasValue && cleanupIntervalDays.Value != InheritRetentionSentinel)
            {
                var orgErr = await TryUpdateOrgRowAsync(cleanupIntervalDays.Value);
                if (orgErr != null) warnings.Add($"Failed to update org row (name='organization'): {orgErr}");
                else warnings.Add($"Updated org row (name='organization') cleanupintervalindays={cleanupIntervalDays}.");
            }
            else if (cleanupIntervalDays.HasValue)
            {
                warnings.Add($"cleanup_interval_days={InheritRetentionSentinel} applied to per-table rows only (inherit); org row untouched.");
            }

            if (total >= 5 && failRate >= 0.5)
            {
                warnings.Add(
                    $"High fail rate: {failed}/{total} items failed ({failRate:P0}). " +
                    "Likely org-wide issue (permissions, throttling, or invalid entity names). " +
                    "Consider lowering max_parallelism or verifying the entity names with get_tables.");
            }

            var structured2 = new ManageRecycleBinResult
            {
                Action = action,
                DryRun = false,
                Succeeded = succeeded,
                Failed = failed,
                SkipCount = skipped > 0 ? skipped : (int?)null,
                EnableCount = isReady ? total : 0,
                DisableCount = isReady ? 0 : total,
                OrgIntervalDays = cleanupIntervalDays,
                DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1),
                Parallelism = batchDop,
                Items = ordered,
                Warnings = warnings.Count > 0 ? warnings : null
            };

            var sb2 = new StringBuilder();
            sb2.AppendLine($"[Success] {action}: applied {succeeded}/{total} table config(s) in {sw.Elapsed.TotalSeconds:0.0}s ({batchDop} batch workers).");
            if (skipped > 0) sb2.AppendLine($"  {skipped} table(s) skipped — already in the desired state.");
            if (failed > 0)
            {
                sb2.AppendLine();
                sb2.AppendLine("Failed:");
                foreach (var it in ordered.Where(i => i.Status == "failed"))
                    sb2.AppendLine($"  - {it.LogicalName} ({it.Mode}): {it.Error}");
            }
            if (warnings.Count > 0)
            {
                sb2.AppendLine();
                foreach (var w in warnings) sb2.AppendLine($"  [note] {w}");
            }

            return Success(sb2.ToString(), structured2);
        }

        private void ExecuteRequestBatches(List<(RecycleBinApplyItem Item, OrganizationRequest Request)> work, int batchDop)
        {
            if (work.Count == 0) return;
            var batches = work
                .Select((w, i) => new { w, i })
                .GroupBy(x => x.i / RequestBatchSize)
                .Select(g => g.Select(x => x.w).ToList())
                .ToList();
            Parallel.ForEach(batches, new ParallelOptions { MaxDegreeOfParallelism = batchDop }, batch =>
            {
                var request = new ExecuteMultipleRequest
                {
                    Settings = new ExecuteMultipleSettings { ContinueOnError = true, ReturnResponses = true },
                    Requests = new OrganizationRequestCollection()
                };
                foreach (var w in batch) request.Requests.Add(w.Request);
                try
                {
                    var response = (ExecuteMultipleResponse)_serviceClient.Execute(request);
                    foreach (var responseItem in response.Responses)
                    {
                        if (responseItem.Fault == null) continue;
                        var target = batch[responseItem.RequestIndex].Item;
                        target.Status = "failed";
                        target.Error = responseItem.Fault.Message;
                    }
                }
                catch (Exception ex)
                {
                    foreach (var w in batch)
                    {
                        w.Item.Status = "failed";
                        w.Item.Error = ex.GetBaseException().Message;
                    }
                }
            });
            foreach (var w in work)
                if (w.Item.Status == "pending") w.Item.Status = "applied";
        }

        private List<DisplayNameFirstCandidate<EntityMetadata>> LoadEntityCandidatesOnce()
        {
            var response = (RetrieveAllEntitiesResponse)_serviceClient.Execute(new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            });
            return response.EntityMetadata.Select(e => new DisplayNameFirstCandidate<EntityMetadata>
            {
                Value = e,
                DisplayName = e.DisplayName?.UserLocalizedLabel?.Label,
                LogicalName = e.LogicalName,
                SchemaName = e.SchemaName,
                Id = e.MetadataId,
                Kind = "entity",
                CanonicalName = e.LogicalName
            }).ToList();
        }

        private static string BuildIntervalNote(int? cleanupIntervalDays)
        {
            if (!cleanupIntervalDays.HasValue)
                return "cleanup_interval_days not provided — per-table rows keep their current value; org row untouched.";
            if (cleanupIntervalDays.Value == InheritRetentionSentinel)
                return $"cleanup_interval_days={InheritRetentionSentinel} — per-table rows will inherit from the org row; org row untouched.";
            return $"cleanup_interval_days={cleanupIntervalDays.Value} will also update the org row (name='organization').";
        }

        private async Task<string> TryUpdateOrgRowAsync(int cleanupIntervalDays)
        {
            return await Task.Run(async () =>
            {
                var org = GetOrgRecycleBinConfig();
                if (org == null) return "org row (name='organization') does not exist";
                var update = new Entity(EntityLogicalName, org.Id.Value)
                {
                    ["cleanupintervalindays"] = cleanupIntervalDays
                };
                await _serviceClient.UpdateAsync(update);
                return null;
            }).ContinueWith(t => t.IsFaulted
                ? t.Exception.GetBaseException().Message
                : t.IsCanceled
                    ? "operation canceled"
                    : t.Result, CancellationToken.None);
        }

        private RecycleBinOrgConfig GetOrgRecycleBinConfig()
        {
            var row = GetOrgRecycleBinConfigRow();
            if (row == null) return null;
            return new RecycleBinOrgConfig
            {
                Id = row.Id,
                IsReadyForRecycleBin = row.GetAttributeValue<bool?>("isreadyforrecyclebin"),
                CleanupIntervalInDays = row.GetAttributeValue<int?>("cleanupintervalindays")
            };
        }

        private Entity GetOrgRecycleBinConfigRow()
        {
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin", "cleanupintervalindays"),
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

        private QueryExpression BuildConfigQuery(string nameFilter, bool includeSystem, bool onlyCustom, ColumnSet entityLinkColumns)
        {
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName)
                    }
                }
            };

            if (!string.IsNullOrWhiteSpace(nameFilter))
            {
                qe.Criteria.AddCondition("name", ConditionOperator.Like, "%" + nameFilter.Trim() + "%");
            }

            var entityLink = qe.AddLink("entity", "extensionofrecordid", "entityid", JoinOperator.Inner);
            entityLink.EntityAlias = "ent";
            if (entityLinkColumns != null) entityLink.Columns = entityLinkColumns;

            if (onlyCustom || !includeSystem)
            {
                qe.Criteria.AddCondition("ismanaged", ConditionOperator.Equal, false);
            }

            return qe;
        }

        private List<RecycleBinConfigEntry> QueryConfigEntries(
            string nameFilter,
            bool includeSystem,
            bool onlyCustom,
            int page,
            int pageSize)
        {
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = DefaultPageSize;

            var qe = BuildConfigQuery(nameFilter, includeSystem, onlyCustom,
                new ColumnSet("logicalname", "name", "collectionname"));
            qe.ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin", "cleanupintervalindays", "statecode");
            qe.Orders.Add(new OrderExpression("name", OrderType.Ascending));
            qe.PageInfo = new PagingInfo
            {
                PageNumber = page,
                Count = pageSize
            };

            var result = _serviceClient.RetrieveMultiple(qe);
            var entries = new List<RecycleBinConfigEntry>(result.Entities.Count);
            foreach (var row in result.Entities)
            {
                entries.Add(new RecycleBinConfigEntry
                {
                    Id = row.Id,
                    LogicalName = row.GetAttributeValue<string>("name"),
                    DisplayName = ReadAliasedDisplayName(row, "ent"),
                    IsReadyForRecycleBin = row.GetAttributeValue<bool?>("isreadyforrecyclebin") ?? false,
                    StateCode = row.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0,
                    CleanupIntervalInDays = row.GetAttributeValue<int?>("cleanupintervalindays")
                });
            }
            return entries;
        }

        private List<RecycleBinConfigEntry> GetAllPerTableRows()
        {
            var rows = new List<RecycleBinConfigEntry>();
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "statecode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName)
                    }
                },
                Orders = { new OrderExpression("name", OrderType.Ascending) },
                PageInfo = new PagingInfo { PageNumber = 1, Count = 5000 }
            };
            while (true)
            {
                var result = _serviceClient.RetrieveMultiple(qe);
                foreach (var row in result.Entities)
                {
                    var name = row.GetAttributeValue<string>("name");
                    if (string.IsNullOrEmpty(name)) continue;
                    rows.Add(new RecycleBinConfigEntry
                    {
                        Id = row.Id,
                        LogicalName = name,
                        StateCode = row.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0
                    });
                }
                if (!result.MoreRecords) break;
                qe.PageInfo.PageNumber++;
                qe.PageInfo.PagingCookie = result.PagingCookie;
            }
            return rows;
        }

        private int CountConfigRows(string nameFilter, bool includeSystem, bool onlyCustom)
        {
            var qe = BuildConfigQuery(nameFilter, includeSystem, onlyCustom, null);
            qe.ColumnSet = new ColumnSet("recyclebinconfigid");
            qe.PageInfo = new PagingInfo
            {
                PageNumber = 1,
                Count = 5000,
                ReturnTotalRecordCount = true
            };
            var result = _serviceClient.RetrieveMultiple(qe);
            return result.TotalRecordCount;
        }

        private static string ReadAliasedDisplayName(Entity row, string alias)
        {
            var aliased = row.GetAttributeValue<AliasedValue>(alias + ".name");
            if (aliased == null) return null;
            return aliased.Value as string;
        }

        private static List<string> ParseCsv(string csv)
        {
            if (string.IsNullOrWhiteSpace(csv)) return new List<string>();
            return csv
                .Split(new[] { ',', '\n', '\r', ';' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(s => s.Trim().TrimEnd('.', ';'))
                .Where(s => !string.IsNullOrEmpty(s))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();
        }
    }
}
