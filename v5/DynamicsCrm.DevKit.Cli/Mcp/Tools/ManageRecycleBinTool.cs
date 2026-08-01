using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
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
            public string LogicalName { get; set; }
            public string DisplayName { get; set; }
            public bool IsReadyForRecycleBin { get; set; }
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
            "(1) THIS TOOL ONLY UPDATES per-table rows. NEVER CREATE, NEVER DELETE any row. NEVER touch the org-level row (name='organization'). " +
            "(2) For ORG-LEVEL soft-delete ON/OFF and retention days, use manage_deleted_records(action='turn'). Do NOT call manage_recycle_bin on the org row. " +
            "(3) WARNING: manage_deleted_records(action='turn', turn='off') DELETEs the org row and Dataverse CASCADE-DELETEs ALL per-table rows in the background. If the user only wants to disable soft-delete for some tables while keeping the org-level feature ON, prefer manage_recycle_bin(action='turn_off', turn_off=<csv>) instead. " +
            "DATA MODEL: one row per (org, table); isreadyforrecyclebin=true means soft-delete ON for that table; cleanupintervalindays=-1 inherits from the org row. " +
            "ACTIONS: " +
            "list_table — paginated list of tables + their current soft-delete state (default 10/page, A-Z by logical name, supports entity_filter contains match). " +
            "turn_on — bulk turn soft-delete ON for 1+ tables (parallel Update only). " +
            "turn_off — bulk turn soft-delete OFF for 1+ tables (parallel Update only). " +
            "turn_on/turn_off special CSV value 'all' means every per-table row currently present in recyclebinconfig (skip the org row). " +
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
            [Description("turn_on/turn_off: optional cleanupintervalindays (1-30) for the org row. When set, also updates the org row (sets it from -1 to a real value). -1 = inherit.")] int? cleanup_interval_days = null,
            [Description("turn_on/turn_off: 0 = server hint (RecommendedDegreesOfParallelism). Clamped 1-52.")] int max_parallelism = 0,
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
            var totalCount = CountAllEnabledRows();
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
                    $"Pass 1+ entity logical/display names as a comma-separated string (e.g. {action}=\"Account,Contact,new_order\"). " +
                    "Use get_tables to enumerate available tables.");

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
                        cleanupIntervalDays.HasValue
                            ? $"cleanup_interval_days={cleanupIntervalDays} will also update the org row (name='organization')."
                            : "cleanup_interval_days not provided — per-table rows keep their current value; org row untouched."
                    }
                };

                var sb = new StringBuilder();
                sb.AppendLine($"[DRY-RUN] {action}: would apply to {names.Count} table(s):");
                sb.AppendLine();
                sb.AppendLine($"  {string.Join(", ", names)}");
                if (cleanupIntervalDays.HasValue) sb.AppendLine($"  Org row cleanupintervalindays → {cleanupIntervalDays}");
                sb.AppendLine();
                sb.AppendLine("No changes were made. Re-call with dry_run=false to apply.");
                return Success(sb.ToString(), structured);
            }

            var parallelism = maxParallelism <= 0
                ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                : maxParallelism;
            parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

            var sw = Stopwatch.StartNew();
            var allItems = new ConcurrentBag<RecycleBinApplyItem>();

            await Parallel.ForEachAsync(names, new ParallelOptions { MaxDegreeOfParallelism = parallelism }, async (name, ct) =>
            {
                var (ok, err) = await TryUpdateOneAsync(name, isReady, cleanupIntervalDays, ct);
                allItems.Add(new RecycleBinApplyItem
                {
                    LogicalName = name,
                    Mode = action,
                    Status = ok ? "applied" : "failed",
                    Error = err
                });
            });

            sw.Stop();

            var ordered = allItems.OrderBy(i => names.IndexOf(i.LogicalName)).ToList();

            var succeeded = ordered.Count(i => i.Status == "applied");
            var failed = ordered.Count(i => i.Status == "failed");
            var total = names.Count;
            var failRate = total > 0 ? (double)failed / total : 0.0;

            var warnings = new List<string>();
            if (cleanupIntervalDays.HasValue)
            {
                var orgErr = await TryUpdateOrgRowAsync(cleanupIntervalDays.Value);
                if (orgErr != null) warnings.Add($"Failed to update org row (name='organization'): {orgErr}");
                else warnings.Add($"Updated org row (name='organization') cleanupintervalindays={cleanupIntervalDays}.");
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
                EnableCount = isReady ? total : 0,
                DisableCount = isReady ? 0 : total,
                OrgIntervalDays = cleanupIntervalDays,
                DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1),
                Parallelism = parallelism,
                Items = ordered,
                Warnings = warnings.Count > 0 ? warnings : null
            };

            var sb2 = new StringBuilder();
            sb2.AppendLine($"[Success] {action}: applied {succeeded}/{total} table config(s) in {sw.Elapsed.TotalSeconds:0.0}s ({parallelism} concurrent).");
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

        private async Task<(bool ok, string err)> TryUpdateOneAsync(string entityName, bool isReady, int? cleanupIntervalDays, CancellationToken ct)
        {
            return await Task.Run(async () =>
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_recycle_bin");
                if (!entityResult.IsSuccess) return (false, entityResult.Error);
                var entityId = entityResult.Value.MetadataId ?? Guid.Empty;
                if (entityId == Guid.Empty) return (false, "entity has no metadata id");

                var update = new Entity(EntityLogicalName, Guid.NewGuid())
                {
                    ["extensionofrecordid"] = new EntityReference("entity", entityId),
                    ["name"] = entityResult.Value.LogicalName,
                    ["isreadyforrecyclebin"] = isReady
                };
                if (cleanupIntervalDays.HasValue)
                    update["cleanupintervalindays"] = cleanupIntervalDays.Value;

                await _serviceClient.UpdateAsync(update, ct);
                return (true, null);
            }, ct).ContinueWith(t => t.IsFaulted
                ? (false, t.Exception.GetBaseException().Message)
                : t.IsCanceled
                    ? (false, "operation canceled")
                    : t.Result, CancellationToken.None);
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

        private List<RecycleBinConfigEntry> QueryConfigEntries(
            string nameFilter,
            bool includeSystem,
            bool onlyCustom,
            int page,
            int pageSize)
        {
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = 10;

            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin", "cleanupintervalindays"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName)
                    }
                },
                Orders = { new OrderExpression("name", OrderType.Ascending) },
                PageInfo = new PagingInfo
                {
                    PageNumber = page,
                    Count = pageSize
                }
            };

            if (!string.IsNullOrWhiteSpace(nameFilter))
            {
                qe.Criteria.AddCondition("name", ConditionOperator.Like, "%" + nameFilter.Trim() + "%");
            }

            var entityLink = qe.AddLink("entity", "extensionofrecordid", "entityid", JoinOperator.Inner);
            entityLink.Columns = new ColumnSet("logicalname", "name", "collectionname");
            entityLink.EntityAlias = "ent";

            if (onlyCustom)
            {
                qe.Criteria.AddCondition("ismanaged", ConditionOperator.Equal, false);
            }
            else if (!includeSystem)
            {
                qe.Criteria.AddCondition("ismanaged", ConditionOperator.Equal, false);
            }

            var result = _serviceClient.RetrieveMultiple(qe);
            var entries = new List<RecycleBinConfigEntry>(result.Entities.Count);
            foreach (var row in result.Entities)
            {
                entries.Add(new RecycleBinConfigEntry
                {
                    LogicalName = row.GetAttributeValue<string>("name"),
                    DisplayName = ReadAliasedDisplayName(row, "ent"),
                    IsReadyForRecycleBin = row.GetAttributeValue<bool?>("isreadyforrecyclebin") ?? false,
                    CleanupIntervalInDays = row.GetAttributeValue<int?>("cleanupintervalindays")
                });
            }
            return entries;
        }

        private int CountAllEnabledRows()
        {
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName)
                    }
                },
                PageInfo = new PagingInfo
                {
                    PageNumber = 1,
                    Count = 5000,
                    ReturnTotalRecordCount = true
                }
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
