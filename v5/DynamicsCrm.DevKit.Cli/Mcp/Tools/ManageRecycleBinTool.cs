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
using System.Text.RegularExpressions;
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
            Title = "List, preview and bulk-configure per-table soft-delete (Recycle Bin) settings",
            Idempotent = false,
            Destructive = false,
            ReadOnly = false,
            UseStructuredContent = true,
            OutputSchemaType = typeof(ManageRecycleBinResult)),
        Description(
            "List / preview / set per-table soft-delete (Recycle Bin) configuration. " +
            "Backed by the recyclebinconfig entity — one row per (org, table) plus a special name='organization' row that holds the org default cleanupintervalindays (1-30). " +
            "isreadyforrecyclebin is the per-table readiness flag. cleanupintervalindays=-1 means inherit from the org row. " +
            "ACTIONS: " +
            "list_tables — paginated list of tables + their current soft-delete state (default 10/page, A-Z by logical name, supports entity_filter prefix match). " +
            "preview — interpret a free-form user intent (e.g. 'soft delete for all except Account, Contact') into a {enable, disable, skip} plan WITHOUT applying. " +
            "set — enable/disable soft-delete for 1+ tables in parallel (Parallel.ForEachAsync + UpdateAsync, same pattern as create_records). " +
            "Pagination: caller passes page=1,2,...; when truncated, response text ends with '... còn N tables nữa. Nói show page 2 để xem tiếp.' style note. " +
            "RELATED: manage_deleted_records (bin operations), execute_webapi (raw).")]
        public async Task<CallToolResult> manage_recycle_bin(
            [Description("Action: 'list_tables' (default) | 'preview' | 'set' | 'status'.")] string action = "list_tables",
            [Description("list_tables: filter by name (contains, case-insensitive). preview: free-form intent. set: not used.")] string entity_filter = "",
            [Description("list_tables: include system tables (default false; only_custom takes precedence).")] bool include_system = false,
            [Description("list_tables: show only custom tables (default false).")] bool only_custom = false,
            [Description("list_tables: 1-based page number (default 1).")] int page = 1,
            [Description("list_tables: rows per page (default 10, max 100).")] int page_size = 10,
            [Description("set: list of entity logical/display names to enable soft-delete. preview: not used.")] string[] enable = null,
            [Description("set: list of entity logical/display names to disable soft-delete. preview: not used.")] string[] disable = null,
            [Description("set: optional cleanupintervalindays (1-30). When set, also updates the org row (sets it from -1 to a real value). -1 = inherit.")] int? cleanup_interval_days = null,
            [Description("set: 0 = server hint (RecommendedDegreesOfParallelism). Clamped 1-52.")] int max_parallelism = 0,
            [Description("set: false to actually apply. Default true (safe preview).")] bool dry_run = true)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list_tables', 'preview', 'set', 'status'.");

                var normalized = action.Trim().ToLowerInvariant();
                return normalized switch
                {
                    "list_tables" => ExecuteListTables(entity_filter, include_system, only_custom, page, page_size),
                    "preview" => ExecutePreview(entity_filter),
                    "set" => await ExecuteSetAsync(enable, disable, cleanup_interval_days, max_parallelism, dry_run),
                    "status" => ExecuteStatus(),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list_tables', 'preview', 'set', 'status'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult ExecuteListTables(string entityFilter, bool includeSystem, bool onlyCustom, int page, int pageSize)
        {
            entityFilter = entityFilter?.Trim() ?? "";
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = DefaultPageSize;
            if (pageSize > MaxPageSize) pageSize = MaxPageSize;

            var allRows = RecycleBinConfigHelper.QueryConfigEntries(_serviceClient, entityFilter, includeSystem, onlyCustom, page, pageSize);
            var totalMatching = allRows.Count;

            var displayNames = string.Join(", ", allRows.Select(r => r.DisplayName));
            var totalCount = RecycleBinConfigHelper.CountAllEnabledRows(_serviceClient);
            var totalPages = Math.Max(1, (int)Math.Ceiling(totalCount / (double)pageSize));
            var truncated = allRows.Count >= pageSize && page < totalPages;

            var structured = new ManageRecycleBinResult
            {
                Action = "list_tables",
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

        private CallToolResult ExecutePreview(string intent)
        {
            if (string.IsNullOrWhiteSpace(intent))
                return Error("entity_filter is required when action='preview'.",
                    "Pass the user's free-form intent (e.g. 'soft delete cho tất cả trừ Account, Contact').");

            var plan = ParseIntent(intent.Trim());
            if (plan == null)
                return Error("Could not parse intent into enable/disable plan.",
                    "Use clear wording. Examples: 'soft delete cho tất cả trừ Account, Contact', 'chỉ Account, Contact', 'tắt Lead', 'bật Account'.");

            var orgConfig = RecycleBinConfigHelper.GetOrgRecycleBinConfig(_serviceClient);

            var structured = new ManageRecycleBinResult
            {
                Action = "preview",
                EnableCount = plan.Enable?.Count ?? 0,
                DisableCount = plan.Disable?.Count ?? 0,
                SkipCount = plan.Skip?.Count ?? 0,
                Preview = plan,
                OrgIntervalDays = orgConfig?.CleanupIntervalInDays,
                DryRun = true
            };

            var sb = new StringBuilder();
            sb.AppendLine("[PREVIEW] No changes were made. Review plan below and confirm via set.");
            sb.AppendLine();
            if (plan.Enable?.Count > 0)
            {
                sb.AppendLine($"  Enable  ({plan.Enable.Count}): {string.Join(", ", plan.Enable)}");
            }
            if (plan.Disable?.Count > 0)
            {
                sb.AppendLine($"  Disable ({plan.Disable.Count}): {string.Join(", ", plan.Disable)}");
            }
            if (plan.Skip?.Count > 0)
            {
                sb.AppendLine($"  Skip    ({plan.Skip.Count}): {string.Join(", ", plan.Skip)}");
                if (!string.IsNullOrEmpty(plan.SkipReason))
                    sb.AppendLine($"          reason: {plan.SkipReason}");
            }
            sb.AppendLine();
            sb.AppendLine("To apply, call manage_recycle_bin(action='set', enable=[...], disable=[...], dry_run=false).");

            return Success(sb.ToString(), structured);
        }

        private async Task<CallToolResult> ExecuteSetAsync(string[] enable, string[] disable, int? cleanupIntervalDays, int maxParallelism, bool dryRun)
        {
            if ((enable == null || enable.Length == 0) && (disable == null || disable.Length == 0))
                return Error("enable or disable is required when action='set'.",
                    "Pass 1+ entity names in either list (both allowed, e.g. 'enable=[A,B], disable=[C]').");

            if (cleanupIntervalDays.HasValue)
            {
                var v = cleanupIntervalDays.Value;
                if (v != RecycleBinConfigHelper.InheritRetentionSentinel && (v < 1 || v > RecycleBinConfigHelper.HardCapRetentionDays))
                    return Error($"cleanup_interval_days={v} is out of range.",
                        $"Valid: 1..{RecycleBinConfigHelper.HardCapRetentionDays} (per-table override), or {RecycleBinConfigHelper.InheritRetentionSentinel} = inherit from org row.");
            }

            var parallelism = maxParallelism <= 0
                ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                : maxParallelism;
            parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

            var enableList = (enable ?? Array.Empty<string>()).Where(s => !string.IsNullOrWhiteSpace(s)).Select(s => s.Trim()).Distinct(StringComparer.OrdinalIgnoreCase).ToList();
            var disableList = (disable ?? Array.Empty<string>()).Where(s => !string.IsNullOrWhiteSpace(s)).Select(s => s.Trim()).Distinct(StringComparer.OrdinalIgnoreCase).ToList();
            var overlap = enableList.Intersect(disableList, StringComparer.OrdinalIgnoreCase).ToList();
            if (overlap.Count > 0)
                return Error($"Tables appear in both enable and disable: {string.Join(", ", overlap)}.",
                    "A table cannot be enabled and disabled in the same call. Split into two calls or remove from one list.");

            var items = new List<RecycleBinApplyItem>();
            items.AddRange(enableList.Select(n => new RecycleBinApplyItem { LogicalName = n, Mode = "enable" }));
            items.AddRange(disableList.Select(n => new RecycleBinApplyItem { LogicalName = n, Mode = "disable" }));

            if (dryRun)
            {
                var structured = new ManageRecycleBinResult
                {
                    Action = "set",
                    DryRun = true,
                    Succeeded = 0,
                    Failed = 0,
                    EnableCount = enableList.Count,
                    DisableCount = disableList.Count,
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
                sb.AppendLine("[DRY-RUN] Would apply the following changes:");
                sb.AppendLine();
                if (enableList.Count > 0) sb.AppendLine($"  Enable  ({enableList.Count}): {string.Join(", ", enableList)}");
                if (disableList.Count > 0) sb.AppendLine($"  Disable ({disableList.Count}): {string.Join(", ", disableList)}");
                if (cleanupIntervalDays.HasValue) sb.AppendLine($"  Org row cleanupintervalindays → {cleanupIntervalDays}");
                sb.AppendLine();
                sb.AppendLine("No changes were made. Re-call with dry_run=false to apply.");
                return Success(sb.ToString(), structured);
            }

            var sw = Stopwatch.StartNew();
            var results = new ConcurrentBag<RecycleBinApplyItem>();
            await Parallel.ForEachAsync(items, new ParallelOptions { MaxDegreeOfParallelism = parallelism }, async (item, ct) =>
            {
                var (ok, err) = await TryApplyOneAsync(item, cleanupIntervalDays, ct);
                item.Status = ok ? "applied" : "failed";
                item.Error = err;
                results.Add(item);
            });
            sw.Stop();

            var ordered = results.OrderBy(i => enableList.IndexOf(i.LogicalName) >= 0
                ? enableList.IndexOf(i.LogicalName)
                : disableList.IndexOf(i.LogicalName) + 10000).ToList();
            var succeeded = ordered.Count(i => i.Status == "applied");
            var failed = ordered.Count(i => i.Status == "failed");

            var warnings = new List<string>();
            if (cleanupIntervalDays.HasValue)
            {
                var orgErr = await TryUpdateOrgRowAsync(cleanupIntervalDays.Value);
                if (orgErr != null) warnings.Add($"Failed to update org row (name='organization'): {orgErr}");
                else warnings.Add($"Updated org row (name='organization') cleanupintervalindays={cleanupIntervalDays}.");
            }

            var structured2 = new ManageRecycleBinResult
            {
                Action = "set",
                DryRun = false,
                Succeeded = succeeded,
                Failed = failed,
                EnableCount = enableList.Count,
                DisableCount = disableList.Count,
                OrgIntervalDays = cleanupIntervalDays,
                DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1),
                Parallelism = parallelism,
                Items = ordered,
                Warnings = warnings.Count > 0 ? warnings : null
            };

            var sb2 = new StringBuilder();
            sb2.AppendLine($"[Success] Applied {succeeded}/{items.Count} table config(s) in {sw.Elapsed.TotalSeconds:0.0}s ({parallelism} concurrent).");
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

        private async Task<(bool ok, string err)> TryApplyOneAsync(RecycleBinApplyItem item, int? cleanupIntervalDays, CancellationToken ct)
        {
            try
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, item.LogicalName, "manage_recycle_bin");
                if (!entityResult.IsSuccess) return (false, entityResult.Error);
                var entityId = entityResult.Value.MetadataId ?? Guid.Empty;
                if (entityId == Guid.Empty) return (false, "entity has no metadata id");

                var existing = FindConfigByEntityId(entityId);
                var update = new Entity(RecycleBinConfigHelper.EntityLogicalName, existing ?? Guid.NewGuid());
                update["extensionofrecordid"] = new EntityReference("entity", entityId);
                update["name"] = entityResult.Value.LogicalName;
                update["isreadyforrecyclebin"] = item.Mode == "enable";
                if (cleanupIntervalDays.HasValue)
                    update["cleanupintervalindays"] = cleanupIntervalDays.Value;

                if (existing.HasValue)
                    await _serviceClient.UpdateAsync(update, ct);
                else
                    await _serviceClient.CreateAsync(update, ct);

                return (true, null);
            }
            catch (Exception ex)
            {
                return (false, ex.Message);
            }
        }

        private Guid? FindConfigByEntityId(Guid entityMetadataId)
        {
            var qe = new Microsoft.Xrm.Sdk.Query.QueryExpression(RecycleBinConfigHelper.EntityLogicalName)
            {
                ColumnSet = new Microsoft.Xrm.Sdk.Query.ColumnSet("recyclebinconfigid"),
                Criteria = new Microsoft.Xrm.Sdk.Query.FilterExpression(Microsoft.Xrm.Sdk.Query.LogicalOperator.And)
                {
                    Conditions =
                    {
                        new Microsoft.Xrm.Sdk.Query.ConditionExpression("extensionofrecordid", Microsoft.Xrm.Sdk.Query.ConditionOperator.Equal, entityMetadataId)
                    }
                },
                TopCount = 1
            };
            var ec = _serviceClient.RetrieveMultiple(qe);
            var row = ec.Entities.FirstOrDefault();
            return row?.Id;
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

        private CallToolResult ExecuteStatus()
        {
            var orgConfig = RecycleBinConfigHelper.GetOrgRecycleBinConfig(_serviceClient);
            var maxRetentionDays = orgConfig?.CleanupIntervalInDays is int d && d > 0 ? d : RecycleBinConfigHelper.HardCapRetentionDays;
            var softDeleteSupported = orgConfig?.IsReadyForRecycleBin == true;
            var enabledTableCount = RecycleBinConfigHelper.CountEnabledTables(_serviceClient);

            var warnings = new List<string>();
            if (orgConfig == null)
                warnings.Add("Org-level RecycleBinConfig row not found — deleted record keeping may be disabled.");
            if (maxRetentionDays >= RecycleBinConfigHelper.HardCapRetentionDays)
                warnings.Add($"CleanupIntervalInDays at or near max ({RecycleBinConfigHelper.HardCapRetentionDays}). Records older than {RecycleBinConfigHelper.HardCapRetentionDays} days are auto-purged and cannot be restored.");

            var structured = new ManageRecycleBinResult
            {
                Action = "status",
                OrgIntervalDays = maxRetentionDays,
                Warnings = warnings.Count > 0 ? warnings : null
            };

            var text = softDeleteSupported
                ? $"[Success] Soft-delete supported. Org interval: {maxRetentionDays} day(s). Enabled tables: {enabledTableCount}."
                : $"[Success] Soft-delete NOT supported on this org (isreadyforrecyclebin=false on org row).";

            return Success(text, structured);
        }

        private static readonly Regex CsvSplit = new(@",\s*", RegexOptions.Compiled);

        private static RecycleBinPreviewPlan ParseIntent(string intent)
        {
            var lower = intent.ToLowerInvariant();
            var explicitNames = ExtractCommaSeparatedNames(intent);

            RecycleBinPreviewPlan plan;
            if (lower.Contains("trừ") || lower.Contains("ngoại trừ") || lower.Contains("except") || lower.Contains("excluding"))
            {
                plan = new RecycleBinPreviewPlan
                {
                    Enable = new List<string> { "ALL" },
                    Disable = new List<string>(),
                    Skip = explicitNames,
                    SkipReason = "user listed as 'trừ/except'"
                };
            }
            else if (lower.StartsWith("chỉ ") || lower.StartsWith("only ") || lower.Contains(" chỉ ") || lower.Contains(" only "))
            {
                plan = new RecycleBinPreviewPlan
                {
                    Enable = explicitNames,
                    Disable = new List<string> { "REST" },
                    Skip = new List<string>()
                };
            }
            else if (lower.StartsWith("tắt ") || lower.StartsWith("remove ") || lower.StartsWith("disable ") || lower.StartsWith("off "))
            {
                plan = new RecycleBinPreviewPlan
                {
                    Enable = new List<string>(),
                    Disable = explicitNames,
                    Skip = new List<string>()
                };
            }
            else if (lower.StartsWith("bật ") || lower.StartsWith("add ") || lower.StartsWith("enable ") || lower.StartsWith("on "))
            {
                plan = new RecycleBinPreviewPlan
                {
                    Enable = explicitNames,
                    Disable = new List<string>(),
                    Skip = new List<string>()
                };
            }
            else
            {
                return null;
            }
            return plan;
        }

        private static List<string> ExtractCommaSeparatedNames(string intent)
        {
            var idx = intent.IndexOf(':');
            if (idx < 0) idx = intent.IndexOf('"');
            var tail = idx >= 0 ? intent.Substring(idx + 1) : intent;
            foreach (var kw in new[] { "trừ ", "ngoại trừ ", "except ", "excluding ", "chỉ ", "only ", "tắt ", "remove ", "disable ", "off ", "bật ", "add ", "enable ", "on " })
            {
                var ki = tail.IndexOf(kw, StringComparison.OrdinalIgnoreCase);
                if (ki >= 0 && (kw.Trim().Equals("trừ", StringComparison.OrdinalIgnoreCase) || kw.Trim().Equals("ngoại trừ", StringComparison.OrdinalIgnoreCase) || kw.Trim().Equals("except", StringComparison.OrdinalIgnoreCase) || kw.Trim().Equals("excluding", StringComparison.OrdinalIgnoreCase)))
                {
                    tail = tail.Substring(ki + kw.Length);
                    break;
                }
                else if (ki >= 0)
                {
                    tail = tail.Substring(ki + kw.Length);
                    break;
                }
            }
            var parts = CsvSplit.Split(tail)
                .Select(s => s.Trim().TrimEnd('.', ';'))
                .Where(s => !string.IsNullOrEmpty(s))
                .ToList();
            return parts;
        }
    }
}
