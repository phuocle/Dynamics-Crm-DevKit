using Microsoft.PowerPlatform.Dataverse.Client;
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
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class CreateRecordsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public CreateRecordsTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        private const int MaxRecords = 5000;
        private const int MaxParallelism = 52;

        [McpServerTool(Name = "create_records", Title = "Create multiple records in parallel",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(BatchCreateResult)),
        Description(
            "Bulk create Dataverse records in parallel (max 5000/call). Partial failures: successes committed, failures reported per-item. Input: inline JSON array, .json path, or .csv path (Display Name headers).\n\n" +
            "WHEN TO USE:\n" +
            "- Seed many records at once (accounts, contacts, tasks) or import from CSV\n" +
            "- Pipe generate_demo_data output file (.json) into records_json\n" +
            "- High-throughput parallel creates (server hints concurrency when max_parallelism=0)\n\n" +
            "RELATED TOOLS:\n" +
            "- generate_demo_data → produce JSON to pipe into records_json\n" +
            "- manage_record → single-record create/update/delete/associate/disassociate\n" +
            "- search_records / execute_fetchxml → verify created records\n\n" +
            "Field syntax: polymorphic lookup 'field@targetentity' (e.g. 'customerid@account'); activity parties (to/from/cc/bcc/requiredattendees/organizer/customers/resources) are a JSON array of {\"id\":\"<guid>\",\"type\":\"<entity>\"} (single object auto-wrapped; do NOT set participationtypemask). For single-record CRUD → manage_record.\n\n" +
            "BYPASS: bypass_custom_logic=true sets BypassBusinessLogicExecution=CustomSync,CustomAsync so sync+async plugins/workflows do NOT run for this create. Default false. Requires the System Administrator role (prvBypassCustomBusinessLogic privilege); rejected early if the calling user lacks it. Use for bulk seed/data-load where custom logic would slow or block creates.")]
        public async Task<CallToolResult> create_records(
            [Description(
                "Entity Display Name or logical name (Display Name resolved first)."
            )] string entity_name,
            [Description(
                "Inline JSON array, .json file path, or .csv file path. Max 5000 records."
            )] string records_json,
            [Description(
                "Concurrent requests. 0 = server hint. Clamped 1-52. Use 1-2 for on-prem."
            )] int max_parallelism = 0,
            [Description(
                "Bypass custom sync+async plugins/workflows (BypassBusinessLogicExecution=CustomSync,CustomAsync). Default false. Requires System Administrator role; rejected early otherwise. Use for bulk data load where plugins would slow/block creates."
            )] bool bypass_custom_logic = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.");

                if (string.IsNullOrWhiteSpace(records_json))
                    return Error("records_json is required. Provide a JSON array, .json file path, or .csv file path.");

                // Bypass privilege gate: BypassBusinessLogicExecution requires the
                // prvBypassCustomBusinessLogic privilege, granted to the System
                // Administrator role by default. Re-query role membership (no cache)
                // and reject early so we never build the request only to have the
                // server reject it. bypass=false needs no check.
                if (bypass_custom_logic && !RoleGateHelper.IsSystemAdministrator(_serviceClient))
                {
                    var haveRoles = RoleGateHelper.GetCurrentRoleNames(_serviceClient);
                    var haveList = haveRoles.Count > 0
                        ? string.Join(", ", haveRoles)
                        : "(no roles assigned)";
                    var requiredRoleName = DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName;
                    return Error(
                        $"bypass_custom_logic=true requires the '{requiredRoleName}' role (prvBypassCustomBusinessLogic privilege). The calling user does not have it.",
                        $"Ask a System Administrator to assign the '{requiredRoleName}' role to your user, then retry with bypass_custom_logic=true. Current roles on the calling user: {haveList}.");
                }

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "create_records");
                if (!entityResult.IsSuccess)
                    return Error(entityResult.Error);
                var entityName = entityResult.Value.LogicalName;

                var csvWarnings = new List<string>();
                var (resolved, inputFormat) = ResolveRecordsInput(records_json, entityName, csvWarnings, deleteInput: !_options.DryRun);
                if (resolved == null)
                {
                    var trimmed = records_json.Trim();
                    if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase) || trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
                        return Error($"File not found: {trimmed}");
                    return Error(
                        "Failed to resolve records_json input. Valid formats: inline JSON array, .json file path, or .csv file path.");
                }

                JsonElement[] elements;
                var root = JsonSerializer.Deserialize<JsonElement>(resolved);

                if (root.ValueKind != JsonValueKind.Array)
                    return Error("records_json must be a JSON array.");

                elements = root.EnumerateArray().ToArray();

                if (elements.Length == 0)
                    return Error("records_json array is empty.");

                if (elements.Length > MaxRecords)
                    return Error($"records_json has {elements.Length} elements. Max is {MaxRecords}.");

                var usedDefault = max_parallelism <= 0;
                var parallelism = usedDefault
                    ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                    : max_parallelism;
                parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

                if (_options.DryRun)
                {
                    var previewItems = elements.Length <= 5
                        ? elements.Select((_, i) => new BatchCreateItem { Index = i, Status = "pending" }).ToList()
                        : null;
                    var preview = new BatchCreateResult
                    {
                        Entity = entityName,
                        Total = elements.Length,
                        Succeeded = 0,
                        Failed = 0,
                        DurationSeconds = 0,
                        Parallelism = parallelism,
                        UsedDefaultParallelism = usedDefault,
                        InputFormat = inputFormat,
                        BypassCustomLogic = bypass_custom_logic ? true : null,
                        Items = previewItems,
                        Status = "not_executed"
                    };
                    return DryRun(
                        $"Would CREATE {elements.Length} '{entityName}' record(s) (parallelism={parallelism}, input={inputFormat}, bypassCustomLogic={bypass_custom_logic.ToString().ToLowerInvariant()}).",
                        preview);
                }

                // Parse all entities up front. A field/type error in one record
                // must not abort the batch — collect per-record parse failures so
                // they surface as failed items alongside successful creates.
                var parsedEntities = new (Entity entity, string error)[elements.Length];
                for (var i = 0; i < elements.Length; i++)
                {
                    try
                    {
                        parsedEntities[i] = (EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, elements[i].GetRawText()), null);
                    }
                    catch (Exception ex)
                    {
                        parsedEntities[i] = (null, ex.Message);
                    }
                }

                // Group parsed entities into chunks of ~100 records and send each
                // chunk as a single ExecuteMultipleRequest (ContinueOnError=true).
                // This is the OOB Dataverse bulk path: N records → 1 request, so
                // 1000 records cost ~10 requests instead of 1000, drastically
                // reducing round-trips and service-protection request-count. Each
                // item in a chunk keeps its own fault when ContinueOnError is set,
                // so a single bad record never rolls back its chunk — successes
                // are committed, failures are reported per-item (Index preserved).
                //
                // Parse-failed records are pre-collected: they never enter a chunk's
                // request, they surface directly as failed items carrying their
                // parse error. Only successfully parsed entities become CreateRequest
                // items inside the ExecuteMultiple payload.
                //
                // Concurrency: chunks run in Parallel.ForEachAsync. Each parallel
                // worker uses its own cloned ServiceClient (Clone() opens a fresh
                // connection bound to the same OAuth auth) so workers don't funnel
                // through the shared DI singleton's cross-thread lock. Clone is
                // OAuth-only; if Clone returns null (non-OAuth connection) the
                // worker falls back to the shared _serviceClient. Workers are
                // disposed per-chunk (using) to release their connections.
                var chunkSize = 100;
                var parsedChunks = new List<List<(int index, Entity entity)>>();
                var preParseFailed = new List<BatchCreateItem>();
                var currentChunk = new List<(int index, Entity entity)>();
                for (var i = 0; i < parsedEntities.Length; i++)
                {
                    if (parsedEntities[i].entity == null)
                    {
                        preParseFailed.Add(new BatchCreateItem { Index = i, Status = "failed", Error = parsedEntities[i].error });
                        continue;
                    }
                    currentChunk.Add((i, parsedEntities[i].entity));
                    if (currentChunk.Count >= chunkSize)
                    {
                        parsedChunks.Add(currentChunk);
                        currentChunk = new List<(int index, Entity entity)>();
                    }
                }
                if (currentChunk.Count > 0) parsedChunks.Add(currentChunk);

                var chunkCount = parsedChunks.Count;
                var batchedParallelism = Math.Min(parallelism, Math.Max(1, chunkCount));
                var chunkResults = new ConcurrentBag<BatchCreateItem>();
                var sw = Stopwatch.StartNew();
                if (chunkCount > 0)
                {
                    await Parallel.ForEachAsync(parsedChunks, new ParallelOptions
                    {
                        MaxDegreeOfParallelism = batchedParallelism
                    }, async (chunk, ct) =>
                    {
                        using var worker = _serviceClient.Clone() ?? _serviceClient;
                        foreach (var item in await ExecuteChunkAsync(worker, chunk, bypass_custom_logic, ct))
                            chunkResults.Add(item);
                    });
                }
                sw.Stop();

                var sortedItems = chunkResults.Concat(preParseFailed).OrderBy(x => x.Index).ToList();
                var succeeded = sortedItems.Count(x => x.Status == "created");
                var failed = sortedItems.Count(x => x.Status == "failed");
                var failedItems = sortedItems.Where(x => x.Status == "failed").ToList();

                // Build the warnings list shown in structured content: CSV header
                // warnings + the default-parallelism notice + the bypass note.
                var structuredWarnings = new List<string>(csvWarnings);
                if (usedDefault)
                    structuredWarnings.Add($"Default parallelism = {parallelism} (from server hint x-ms-dop-hint; hard limit {MaxParallelism}). Provide max_parallelism explicitly to suppress this notice.");
                if (chunkCount > 0)
                    structuredWarnings.Add($"Batched into {chunkCount} chunk(s) of up to {chunkSize} record(s) via ExecuteMultiple (ContinueOnError=true); chunks ran on cloned connections ({batchedParallelism} concurrent). Parse failures excluded from chunks and reported per-item.");

                // bypass note: when bypass is OFF (the default), inform the user —
                // especially on a first run — that the parameter exists so they can
                // prompt to enable it next time. When bypass is ON, confirm it
                // bypassed (no educational hint, just a fact).
                if (!bypass_custom_logic)
                    structuredWarnings.Add("bypass_custom_logic is false: custom sync+async plugins/workflows ran for these creates. For bulk data loads where custom logic would slow or block creates, retry with bypass_custom_logic=true (requires the System Administrator role).");
                else
                    structuredWarnings.Add("bypass_custom_logic=true: custom sync+async plugins/workflows were bypassed (BypassBusinessLogicExecution=CustomSync,CustomAsync) for these creates.");

                var durationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1);
                var structured = new BatchCreateResult
                {
                    Entity = entityName,
                    Total = elements.Length,
                    Succeeded = succeeded,
                    Failed = failed,
                    DurationSeconds = durationSeconds,
                    Parallelism = parallelism,
                    UsedDefaultParallelism = usedDefault,
                    InputFormat = inputFormat,
                    BypassCustomLogic = bypass_custom_logic ? true : null,
                    Warnings = structuredWarnings.Count > 0 ? structuredWarnings : null,
                    Items = sortedItems.Count > 0 ? sortedItems : null,
                    FailedItems = failedItems.Count > 0 ? failedItems : null,
                    Status = failed == 0 ? "created" : (succeeded == 0 ? "failed" : "partial")
                };

                var bypassTag = bypass_custom_logic ? ", bypass=on" : "";
                var chunkTag = chunkCount > 0 ? $", {chunkCount} chunk(s)" : "";
                var summary = $"Created {succeeded}/{elements.Length} '{entityName}' record(s) in {durationSeconds}s ({batchedParallelism} concurrent{chunkTag}{bypassTag}).";
                if (succeeded == 0)
                    summary = $"Failed to create any of {elements.Length} '{entityName}' record(s) ({failed} failed{chunkTag}{bypassTag}).";

                return Success(summary, structured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // Send one chunk (~100 records) as a single ExecuteMultipleRequest with
        // ContinueOnError=true. Each record becomes a CreateRequest item inside
        // the batch; ContinueOnError means a fault on one item does NOT abort
        // the chunk — the rest are still committed and the fault is returned
        // per-item via ExecuteMultipleResponseItem.Fault. This preserves the
        // partial-failure behavior of the old per-record parallel loop while
        // collapsing N round-trips into 1.
        //
        // bypass=true sets BypassBusinessLogicExecution on EVERY CreateRequest
        // item in the batch (the parameter is per-request, not per-batch). The
        // role gate above already ensured the caller is a System Administrator.
        //
        // The mutation gateway (DataverseMutationExecutor.ExecuteAsync) asserts
        // mutations are allowed before the SDK call. In dry-run mode the
        // action-level preview returns before this method is reached. An
        // unhandled throw here is caught by the caller's try/catch and the
        // whole chunk is marked failed (all items) — matching the old loop's
        // behavior of one bad connection attempt failing its record.
        private async Task<List<BatchCreateItem>> ExecuteChunkAsync(
            ServiceClient worker, List<(int index, Entity entity)> chunk, bool bypass, CancellationToken ct)
        {
            var items = new List<BatchCreateItem>(chunk.Count);
            var request = new ExecuteMultipleRequest
            {
                Settings = new ExecuteMultipleSettings
                {
                    ContinueOnError = true,
                    ReturnResponses = true
                },
                Requests = new OrganizationRequestCollection()
            };
            foreach (var (index, entity) in chunk)
            {
                var create = new CreateRequest { Target = entity };
                if (bypass)
                    create.Parameters["BypassBusinessLogicExecution"] = "CustomSync,CustomAsync";
                request.Requests.Add(create);
            }

            try
            {
                var response = (ExecuteMultipleResponse)await DataverseMutationExecutor.ExecuteAsync(_context, worker, request, ct);
                // ExecuteMultipleResponse.Responses only contains items that
                // succeeded OR faulted-with-ReturnResponses; items may be absent
                // if the server skipped them. Index by RequestIndex to align
                // responses with the original chunk order safely.
                var byIndex = response.Responses.ToDictionary(r => r.RequestIndex);
                for (var i = 0; i < chunk.Count; i++)
                {
                    if (!byIndex.TryGetValue(i, out var item) || item.Fault != null)
                    {
                        var err = item?.Fault?.Message ?? "No response returned for this item.";
                        items.Add(new BatchCreateItem { Index = chunk[i].index, Status = "failed", Error = err });
                    }
                    else
                    {
                        var id = item.Response != null && item.Response.Results.Contains("id")
                            ? (Guid)item.Response.Results["id"]
                            : Guid.Empty;
                        items.Add(new BatchCreateItem { Index = chunk[i].index, Id = id.ToString(), Status = "created" });
                    }
                }
            }
            catch (Exception ex)
            {
                // Chunk-level failure (timeout, auth, network) — mark all items
                // in this chunk failed with the shared error. The caller still
                // processes other chunks; only this chunk is lost.
                foreach (var (index, _) in chunk)
                    items.Add(new BatchCreateItem { Index = index, Status = "failed", Error = ex.Message });
            }
            return items;
        }

        private (string json, string format) ResolveRecordsInput(string recordsJson, string entityName, List<string> csvWarnings, bool deleteInput)
        {
            var trimmed = recordsJson.Trim();

            if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return (null, "csv");
                var json = ConvertCsvToJson(trimmed, entityName, csvWarnings);
                if (deleteInput) SafeDelete(trimmed);
                return (json, "csv");
            }

            if (!trimmed.StartsWith("[") && trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return (null, "json-file");
                var content = File.ReadAllText(trimmed, Encoding.UTF8);
                if (deleteInput) SafeDelete(trimmed);
                return (content, "json-file");
            }

            return (recordsJson, "inline-json");
        }

        private string ConvertCsvToJson(string csvPath, string entityName, List<string> warnings)
        {
            var lines = File.ReadAllLines(csvPath, Encoding.UTF8)
                .Where(l => !string.IsNullOrWhiteSpace(l))
                .ToList();

            if (lines.Count < 2)
            {
                warnings.Add("CSV file has no data rows (only header or empty).");
                return "[]";
            }

            var metadata = LoadEntityMetadata(entityName);
            if (metadata == null)
            {
                warnings.Add($"Failed to load metadata for entity '{entityName}'.");
                return "[]";
            }

            var headers = ParseCsvLine(lines[0]);
            var columnMap = new (int colIndex, string logicalName, AttributeMetadata attr)[headers.Length];
            var validColumns = 0;
            var candidates = metadata.Attributes
                .Where(a => a?.LogicalName != null)
                .Select(a => new DisplayNameFirstCandidate<AttributeMetadata>
                {
                    Value = a,
                    DisplayName = a.DisplayName?.UserLocalizedLabel?.Label,
                    LogicalName = a.LogicalName,
                    SchemaName = a.SchemaName,
                    Id = a.MetadataId,
                    Kind = "attribute",
                    CanonicalName = a.LogicalName
                })
                .ToList();

            for (var i = 0; i < headers.Length; i++)
            {
                var header = headers[i].Trim();
                var resolved = DisplayNameFirstResolver.Resolve(
                    header,
                    candidates,
                    "[AmbiguousField]",
                    "[NotFoundField]",
                    $"Tip: Use get_tables(entity_name='{entityName}') to discover valid CSV headers.",
                    "CSV header");
                if (resolved.IsSuccess)
                {
                    var attr = resolved.Value;
                    columnMap[i] = (i, attr.LogicalName, attr);
                    validColumns++;
                }
                else
                {
                    columnMap[i] = (i, null, null);
                    warnings.Add($"Header '{header}' could not be resolved: {resolved.Error} Column skipped.");
                }
            }

            if (validColumns == 0)
            {
                warnings.Add("No CSV headers matched entity Display Names or logical/schema names.");
                return "[]";
            }

            var lookupNameCache = new Dictionary<string, Guid?>(StringComparer.OrdinalIgnoreCase);
            var records = new List<Dictionary<string, object>>();

            for (var rowIdx = 1; rowIdx < lines.Count; rowIdx++)
            {
                var cells = ParseCsvLine(lines[rowIdx]);
                var record = new Dictionary<string, object>();
                var rowNum = rowIdx + 1;

                for (var colIdx = 0; colIdx < columnMap.Length && colIdx < cells.Length; colIdx++)
                {
                    var (_, logicalName, attr) = columnMap[colIdx];
                    if (logicalName == null || attr == null) continue;

                    var cellValue = cells[colIdx].Trim();
                    if (string.IsNullOrEmpty(cellValue)) continue;

                    var converted = ConvertCsvValue(attr, cellValue, logicalName, rowNum, entityName, lookupNameCache, warnings);
                    if (converted != null)
                        record[converted.Value.key] = converted.Value.value;
                }

                if (record.Count > 0)
                    records.Add(record);
                else
                    warnings.Add($"Row {rowNum}: all fields skipped — row excluded.");
            }

            return JsonSerializer.Serialize(records);
        }

        private (string key, object value)? ConvertCsvValue(
            AttributeMetadata attr, string cellValue, string logicalName,
            int rowNum, string entityName,
            Dictionary<string, Guid?> lookupNameCache, List<string> warnings)
        {
            switch (attr)
            {
                case StringAttributeMetadata:
                case MemoAttributeMetadata:
                    return (logicalName, cellValue);

                case IntegerAttributeMetadata:
                    if (int.TryParse(cellValue, NumberStyles.Any, CultureInfo.InvariantCulture, out var intVal))
                        return (logicalName, intVal);
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid integer — skipped.");
                    return null;

                case BigIntAttributeMetadata:
                    if (long.TryParse(cellValue, NumberStyles.Any, CultureInfo.InvariantCulture, out var longVal))
                        return (logicalName, longVal);
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid integer — skipped.");
                    return null;

                case DecimalAttributeMetadata:
                case DoubleAttributeMetadata:
                case MoneyAttributeMetadata:
                    if (decimal.TryParse(cellValue, NumberStyles.Any, CultureInfo.InvariantCulture, out var decVal))
                        return (logicalName, decVal);
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid number — skipped.");
                    return null;

                case BooleanAttributeMetadata:
                    var lower = cellValue.ToLowerInvariant();
                    if (lower is "true" or "yes" or "1") return (logicalName, true);
                    if (lower is "false" or "no" or "0") return (logicalName, false);
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid boolean — skipped.");
                    return null;

                case DateTimeAttributeMetadata:
                    if (DateTime.TryParse(cellValue, CultureInfo.InvariantCulture, DateTimeStyles.None, out var dtVal))
                        return (logicalName, dtVal.ToString("yyyy-MM-ddTHH:mm:ssZ"));
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid date — skipped.");
                    return null;

                case PicklistAttributeMetadata picklist:
                    return ResolvePicklistLabel(picklist, cellValue, logicalName, rowNum, warnings);

                case MultiSelectPicklistAttributeMetadata multi:
                    return ResolveMultiSelectLabels(multi, cellValue, logicalName, rowNum, warnings);

                case LookupAttributeMetadata lookup:
                    return ResolveLookupByName(lookup, cellValue, logicalName, rowNum, lookupNameCache, warnings);

                default:
                    warnings.Add($"Row {rowNum}: '{logicalName}' type '{attr.GetType().Name}' not supported for CSV — skipped.");
                    return null;
            }
        }

        private (string key, object value)? ResolvePicklistLabel(
            PicklistAttributeMetadata picklist, string label, string logicalName, int rowNum, List<string> warnings)
        {
            var option = picklist.OptionSet?.Options?
                .FirstOrDefault(o => o.Label?.UserLocalizedLabel?.Label != null &&
                    o.Label.UserLocalizedLabel.Label.Equals(label, StringComparison.OrdinalIgnoreCase));

            if (option != null)
                return (logicalName, option.Value.Value);

            warnings.Add($"Row {rowNum}: picklist '{logicalName}' label '{label}' not found in options — skipped.");
            return null;
        }

        private (string key, object value)? ResolveMultiSelectLabels(
            MultiSelectPicklistAttributeMetadata multi, string labels, string logicalName, int rowNum, List<string> warnings)
        {
            var parts = labels.Split(';').Select(p => p.Trim()).Where(p => p.Length > 0).ToList();
            var values = new List<int>();

            foreach (var part in parts)
            {
                var option = multi.OptionSet?.Options?
                    .FirstOrDefault(o => o.Label?.UserLocalizedLabel?.Label != null &&
                        o.Label.UserLocalizedLabel.Label.Equals(part, StringComparison.OrdinalIgnoreCase));

                if (option != null)
                    values.Add(option.Value.Value);
                else
                    warnings.Add($"Row {rowNum}: multi-select '{logicalName}' label '{part}' not found — skipped.");
            }

            return values.Count > 0 ? (logicalName, values) : null;
        }

        private (string key, object value)? ResolveLookupByName(
            LookupAttributeMetadata lookup, string nameValue, string logicalName, int rowNum,
            Dictionary<string, Guid?> cache, List<string> warnings)
        {
            var targets = lookup.Targets;
            if (targets == null || targets.Length == 0)
            {
                warnings.Add($"Row {rowNum}: lookup '{logicalName}' has no target entity — skipped.");
                return null;
            }

            foreach (var target in targets)
            {
                var cacheKey = $"{target}::{nameValue}";
                if (!cache.TryGetValue(cacheKey, out var cachedGuid))
                {
                    cachedGuid = ResolveLookupGuid(target, nameValue);
                    cache[cacheKey] = cachedGuid;
                }

                if (cachedGuid.HasValue)
                {
                    var key = targets.Length > 1 ? $"{logicalName}@{target}" : logicalName;
                    return (key, cachedGuid.Value.ToString());
                }
            }

            warnings.Add($"Row {rowNum}: lookup '{logicalName}' value '{nameValue}' not found or ambiguous — skipped.");
            return null;
        }

        private Guid? ResolveLookupGuid(string targetEntity, string nameValue)
        {
            var targetMeta = LoadEntityMetadata(targetEntity);
            if (targetMeta == null) return null;

            var primaryNameAttr = targetMeta.PrimaryNameAttribute;
            if (string.IsNullOrEmpty(primaryNameAttr)) return null;

            var fetchXml = $@"<fetch top='2'>
  <entity name='{targetEntity}'>
    <attribute name='{targetEntity}id'/>
    <filter>
      <condition attribute='{primaryNameAttr}' operator='eq' value='{EscapeXml(nameValue)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";

            var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (results.Entities.Count == 1)
                return results.Entities[0].Id;

            return null;
        }

        private EntityMetadata LoadEntityMetadata(string entityName)
        {
            if (_serviceClient == null)
                return null;

            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Attributes
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            return response.EntityMetadata;
        }

        private static string[] ParseCsvLine(string line)
        {
            var fields = new List<string>();
            var current = new StringBuilder();
            var inQuotes = false;

            for (var i = 0; i < line.Length; i++)
            {
                var c = line[i];
                if (inQuotes)
                {
                    if (c == '"')
                    {
                        if (i + 1 < line.Length && line[i + 1] == '"')
                        {
                            current.Append('"');
                            i++;
                        }
                        else
                        {
                            inQuotes = false;
                        }
                    }
                    else
                    {
                        current.Append(c);
                    }
                }
                else
                {
                    if (c == '"')
                    {
                        inQuotes = true;
                    }
                    else if (c == ',')
                    {
                        fields.Add(current.ToString());
                        current.Clear();
                    }
                    else
                    {
                        current.Append(c);
                    }
                }
            }
            fields.Add(current.ToString());
            return fields.ToArray();
        }

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static void SafeDelete(string path)
        {
            if (!File.Exists(path)) return;
            File.SetAttributes(path, FileAttributes.Normal);
            File.Delete(path);
        }

    }
}
