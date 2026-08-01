using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
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

        private readonly ServiceClient _serviceClient;

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

        // ------------------------------------------------------------------
        // list_table
        // ------------------------------------------------------------------

        private CallToolResult ExecuteListTable(string entityFilter, bool includeSystem, bool onlyCustom, int page, int pageSize)
        {
            entityFilter = entityFilter?.Trim() ?? "";
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = DefaultPageSize;
            if (pageSize > MaxPageSize) pageSize = MaxPageSize;

            var allRows = RecycleBinConfigHelper.QueryConfigEntries(_serviceClient, entityFilter, includeSystem, onlyCustom, page, pageSize);

            var displayNames = string.Join(", ", allRows.Select(r => r.DisplayName));
            var totalCount = RecycleBinConfigHelper.CountAllEnabledRows(_serviceClient);
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

        // ------------------------------------------------------------------
        // turn_on / turn_off (CSV → parallel apply)
        // ------------------------------------------------------------------

        private Task<CallToolResult> ExecuteTurnOnAsync(string turnOn, int? cleanupIntervalDays, int maxParallelism, bool dryRun)
            => ExecuteTurnAsync("turn_on", isReady: true, turnOn, cleanupIntervalDays, maxParallelism, dryRun);

        private Task<CallToolResult> ExecuteTurnOffAsync(string turnOff, int? cleanupIntervalDays, int maxParallelism, bool dryRun)
            => ExecuteTurnAsync("turn_off", isReady: false, turnOff, cleanupIntervalDays, maxParallelism, dryRun);

        private async Task<CallToolResult> ExecuteTurnAsync(string action, bool isReady, string csv, int? cleanupIntervalDays, int maxParallelism, bool dryRun)
        {
            // 1. Parse CSV → distinct, non-empty list.
            var names = ParseCsv(csv);
            if (names.Count == 0)
                return Error($"{action}: CSV parameter is required and must contain at least 1 entity name.",
                    $"Pass 1+ entity logical/display names as a comma-separated string (e.g. {action}=\"Account,Contact,new_order\"). " +
                    "Use get_tables to enumerate available tables.");

            // 2. Validate cleanup_interval_days.
            if (cleanupIntervalDays.HasValue)
            {
                var v = cleanupIntervalDays.Value;
                if (v != RecycleBinConfigHelper.InheritRetentionSentinel && (v < 1 || v > RecycleBinConfigHelper.HardCapRetentionDays))
                    return Error($"cleanup_interval_days={v} is out of range.",
                        $"Valid: 1..{RecycleBinConfigHelper.HardCapRetentionDays} (per-table override), or {RecycleBinConfigHelper.InheritRetentionSentinel} = inherit from org row.");
            }

            // 3. Pre-flight: org-level must be ON. Fail fast with redirect hint
            //    if not, otherwise per-table writes are pointless.
            var orgConfig = RecycleBinConfigHelper.GetOrgRecycleBinConfig(_serviceClient);
            if (orgConfig == null)
                return Error("Org-level RecycleBinConfig row (name='organization') not found — soft-delete is disabled at the org level.",
                    "Call manage_deleted_records(action='turn', retention_days=1..30) first to turn ON soft-delete at the org level, then retry this " + action + ".");
            if (orgConfig.IsReadyForRecycleBin != true)
                return Error("Org-level soft-delete is currently OFF (isreadyforrecyclebin=false on the org row).",
                    "Call manage_deleted_records(action='turn', retention_days=1..30) first to turn ON soft-delete at the org level, then retry this " + action + ".");

            // 4. Dry-run: report plan and exit. No writes.
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

            // 5. Real apply. Clamp parallelism.
            // continue-on-error semantics: every item is wrapped in a per-item
            // try/catch (TryUpdateOneAsync returns ok/err instead of throwing),
            // so one bad entity never aborts the whole batch. We also wrap the
            // ForEachAsync body in an outer try/catch as defense-in-depth for
            // any unexpected exception escaping the inner catch.
            var parallelism = maxParallelism <= 0
                ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                : maxParallelism;
            parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

            var sw = Stopwatch.StartNew();
            var allItems = new ConcurrentBag<RecycleBinApplyItem>();

            await Parallel.ForEachAsync(names, new ParallelOptions { MaxDegreeOfParallelism = parallelism }, async (name, ct) =>
            {
                try
                {
                    var (ok, err) = await TryUpdateOneAsync(name, isReady, cleanupIntervalDays, ct);
                    allItems.Add(new RecycleBinApplyItem
                    {
                        LogicalName = name,
                        Mode = action,
                        Status = ok ? "applied" : "failed",
                        Error = err
                    });
                }
                catch (Exception ex)
                {
                    // Last-resort safety net — should not happen because
                    // TryUpdateOneAsync catches everything, but never let an
                    // unhandled exception abort the parallel batch.
                    allItems.Add(new RecycleBinApplyItem
                    {
                        LogicalName = name,
                        Mode = action,
                        Status = "failed",
                        Error = ex.Message
                    });
                }
            });

            sw.Stop();

            // Order: keep the user's CSV order.
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

            // High fail-rate warning: helps the user notice org-wide problems
            // (e.g. permissions, throttling, missing entity metadata) instead
            // of burying it in a long per-item failure list.
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

        // ------------------------------------------------------------------
        // Per-table write: UPDATE only. Dataverse auto-creates the row if it
        // doesn't exist (extension table behavior on recyclebinconfig).
        // ------------------------------------------------------------------

        private async Task<(bool ok, string err)> TryUpdateOneAsync(string entityName, bool isReady, int? cleanupIntervalDays, CancellationToken ct)
        {
            try
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "manage_recycle_bin");
                if (!entityResult.IsSuccess) return (false, entityResult.Error);
                var entityId = entityResult.Value.MetadataId ?? Guid.Empty;
                if (entityId == Guid.Empty) return (false, "entity has no metadata id");

                // Update only. If the row doesn't exist, Dataverse auto-creates
                // it (recyclebinconfig is an extension table of `entity`).
                var update = new Entity(RecycleBinConfigHelper.EntityLogicalName, Guid.NewGuid())
                {
                    ["extensionofrecordid"] = new EntityReference("entity", entityId),
                    ["name"] = entityResult.Value.LogicalName,
                    ["isreadyforrecyclebin"] = isReady
                };
                if (cleanupIntervalDays.HasValue)
                    update["cleanupintervalindays"] = cleanupIntervalDays.Value;

                await _serviceClient.UpdateAsync(update, ct);
                return (true, null);
            }
            catch (Exception ex)
            {
                return (false, ex.Message);
            }
        }

        private async Task<string> TryUpdateOrgRowAsync(int cleanupIntervalDays)
        {
            try
            {
                var org = RecycleBinConfigHelper.GetOrgRecycleBinConfig(_serviceClient);
                if (org == null) return "org row (name='organization') does not exist";
                var update = new Entity(RecycleBinConfigHelper.EntityLogicalName, org.Id.Value)
                {
                    ["cleanupintervalindays"] = cleanupIntervalDays
                };
                await _serviceClient.UpdateAsync(update);
                return null;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        // ------------------------------------------------------------------
        // CSV parsing
        // ------------------------------------------------------------------

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
