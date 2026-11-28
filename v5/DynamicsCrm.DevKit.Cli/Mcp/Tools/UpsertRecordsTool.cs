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
    public class UpsertRecordsTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;

        public UpsertRecordsTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context) : this(serviceClient, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public UpsertRecordsTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        private Entity PrepareStateChange(Entity entity)
        {
            var state = entity.GetAttributeValue<OptionSetValue>("statecode");
            var status = entity.GetAttributeValue<OptionSetValue>("statuscode");
            if ((state == null && entity.Contains("statecode")) || (status == null && entity.Contains("statuscode")))
                throw new ArgumentException("statecode and statuscode require an integer option value or a valid label.");
            if (state == null && status == null)
                return null;

            var statusMetadata = EntityParserHelper.FindAttribute(_serviceClient, entity.LogicalName, "statuscode") as StatusAttributeMetadata;
            var statusOption = FindOption(statusMetadata?.OptionSet, "statuscode", status?.Value) as StatusOptionMetadata;
            var statusState = statusOption?.State;
            if (state != null && statusState.HasValue && state.Value != statusState.Value)
                throw new ArgumentException($"statuscode {status.Value} belongs to statecode {statusState}, not {state.Value}.");

            var desiredState = state?.Value ?? statusState;
            var stateMetadata = EntityParserHelper.FindAttribute(_serviceClient, entity.LogicalName, "statecode") as StateAttributeMetadata;
            var stateOption = FindOption(stateMetadata?.OptionSet, "statecode", desiredState) as StateOptionMetadata;

            // State 0 is set by Create/Upsert. An active status reason can travel with
            // the Create/Upsert if the table allows it.
            if (desiredState == 0 && (status == null || statusMetadata?.IsValidForCreate != false))
            {
                entity.Attributes.Remove("statecode");
                return null;
            }

            var target = new Entity(entity.LogicalName);
            if (desiredState.HasValue)
                target["statecode"] = state ?? new OptionSetValue(desiredState.Value);
            if (status != null)
                target["statuscode"] = status;
            else if (stateOption?.DefaultStatus is int defaultStatus)
                target["statuscode"] = new OptionSetValue(defaultStatus);

            entity.Attributes.Remove("statecode");
            entity.Attributes.Remove("statuscode");
            return target;
        }

        private static OptionMetadata FindOption(OptionSetMetadata optionSet, string fieldName, int? value)
        {
            if (value == null || optionSet?.Options is not { Count: > 0 } options)
                return null;
            return options.FirstOrDefault(option => option.Value == value)
                ?? throw new ArgumentException($"Field '{fieldName}' has no option with value {value.Value}.");
        }

        private const int MaxRecords = 5000;
        private const int MaxParallelism = 52;
        private const int ChunkSize = 100;
        private const int PreviewItemLimit = 5;

        // ── ImportSequenceNumber auto-fill ──────────────────────────────────
        // OOB Dataverse stamps importsequencenumber on every record during data
        // import/migration so the batch can be queried and rolled back as a unit.
        // The field is Integer (Int32, max 2,147,483,647), create-only, present on
        // virtually all entities. We auto-fill it for pure-create records in an
        // upsert_records batch:
        //
        //   batchValue = max(IsnBaseline, maxInTable + 1)
        //
        // All pure-create records in one tool call share the same batchValue (so they
        // form a queryable group). If the user explicitly provides importsequencenumber
        // on a record, that value wins for that record — no duplicate checking.
        // The batchValue is returned in the result so the user can query back:
        //   <condition attribute='importsequencenumber' operator='eq' value='999990'/>
        private const string IsnLogicalName = "importsequencenumber";
        private const int IsnBaseline = 999990;

        [McpServerTool(Name = "upsert_records", Title = "Create or update multiple records in parallel",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(BatchCreateResult)),
        Description(
            "Bulk create or upsert up to 5000 Dataverse records in parallel from inline JSON, a .json file or a .csv file. Partial failures do not roll back successful records. Use manage_record for single-record CRUD.\n\n" +
            "records_json accepts inline JSON arrays (logical field names), .json file paths, or .csv file paths — CSV headers accept Display Names or logical names; unresolvable headers are skipped with a per-item warning. Field syntax: polymorphic lookups use field@targetentity (e.g. 'customerid@account'); activity party fields (to/from/cc/bcc/requiredattendees/organizer/customers/resources) are a JSON array of {\"id\":\"<guid>\",\"type\":\"<entity>\"} — a single object is auto-wrapped; do NOT supply participationtypemask. Read docs://data_operations_guide for field formats and batch details.\n\n" +
            "Per-record mode: without primary key (<entity>id) and without key_fields, runs CreateRequest (Dataverse generates GUID and stamps shared importSequenceNumber); with primary key (<entity>id as GUID), runs UpsertRequest with Entity(logicalName, id) to create with that exact GUID or update if it exists; with key_fields (comma-separated or JSON array of alternate key columns), runs UpsertRequest using KeyAttributeCollection. Statecode and statuscode accept integer values or labels; non-active states/status reasons are applied via a follow-up parallel ExecuteMultiple UpdateRequest batch (check each item's stateUpdate and top-level stateUpdated).\n\n" +
            "Pure-create records are stamped with a shared importsequencenumber so the batch can be queried and bulk-deleted as a unit; the value is returned as importSequenceNumber and an explicitly supplied value wins for that record. bypass_custom_logic skips custom sync/async plugins/workflows and requires System Administrator.\n\n" +
            "WHEN TO USE:\n" +
            "- Seed or migrate many records at once (accounts, contacts, tasks) or import from CSV\n" +
            "- Bulk update existing records by primary key GUID or alternate key (key_fields)\n" +
            "- Pipe generate_demo_data output (.json) into records_json\n" +
            "- High-throughput parallel creates/upserts (server hints concurrency when max_parallelism=0)\n\n" +
            "RELATED TOOLS:\n" +
            "- generate_demo_data → produce JSON to pipe into records_json\n" +
            "- manage_record → single-record create/update/delete/associate/disassociate\n" +
            "- query_data(mode='search') / query_data(mode='fetchxml') → verify created or updated records")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            [Description("Entity Display Name or logical name (Display Name resolved first).")] string entity_name = "",
            [Description("Inline JSON array, .json file path, or .csv file path. Max 5000 records.")] string records_json = "",
            [Description("Concurrent requests. 0 = server hint. Clamped 1-52. Use 1-2 for on-prem.")] int max_parallelism = 0,
            [Description("Bypass custom sync+async plugins/workflows (BypassBusinessLogicExecution=CustomSync,CustomAsync). Default false. Requires System Administrator role; rejected early otherwise. Use for bulk data load where plugins would slow/block creates or updates.")] bool bypass_custom_logic = false,
            [Description("Optional alternate key column(s) for UpsertRequest: comma-separated names or JSON array of strings (e.g. 'accountnumber' or '[\"accountnumber\",\"emailaddress1\"]'). Default empty.")] string key_fields = "",
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default)
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new UpsertRecordsTool(conn.Client, conn.Options, conn.Context);
                return worker.upsert_records(entity_name, records_json, max_parallelism, bypass_custom_logic, key_fields);
            }, cancellationToken);
        }

        public async Task<CallToolResult> upsert_records(
            [Description("Entity Display Name or logical name (Display Name resolved first).")] string entity_name = "",
            [Description("Inline JSON array, .json file path, or .csv file path. Max 5000 records.")] string records_json = "",
            [Description("Concurrent requests. 0 = server hint. Clamped 1-52. Use 1-2 for on-prem.")] int max_parallelism = 0,
            [Description("Bypass custom sync+async plugins/workflows (BypassBusinessLogicExecution=CustomSync,CustomAsync). Default false. Requires System Administrator role; rejected early otherwise. Use for bulk data load where plugins would slow/block creates or updates.")] bool bypass_custom_logic = false,
            [Description("Optional alternate key column(s) for UpsertRequest: comma-separated names or JSON array of strings (e.g. 'accountnumber' or '[\"accountnumber\",\"emailaddress1\"]'). Default empty.")] string key_fields = "")
        {
            try
            {
                const string toolName = "upsert_records";

                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.",
                        "Provide the entity Display Name or logical name, e.g. 'Account' or 'account'.");

                if (string.IsNullOrWhiteSpace(records_json))
                    return Error("records_json is required.",
                        "Provide a JSON array, .json file path, or .csv file path.");

                if (!TryParseKeyFields(key_fields, out var rawKeyFields))
                    return Error("key_fields must be a comma-separated list or a JSON array of field names.",
                        "Pass comma-separated field names (e.g. 'accountnumber') or a JSON array (e.g. '[\"accountnumber\"]').");

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

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), toolName);
                if (!entityResult.IsSuccess)
                {
                    if (entityResult.Status == ResolveStatus.Ambiguous)
                    {
                        var entityMatches = entityResult.Candidates.Select(c => new TableMatchEntry
                        {
                            DisplayName = c.DisplayName ?? "",
                            LogicalName = c.LogicalName ?? "",
                            SchemaName = c.SchemaName ?? ""
                        }).ToList();
                        return Error(
                            entityResult.Error.Split("\r\n")[0],
                            "Re-call with a more specific entity_name value.",
                            new BatchCreateResult { EntityMatches = entityMatches });
                    }
                    return Error(
                        entityResult.Error.Split("\r\n")[0],
                        $"Use inspect_metadata(resource='tables') to list entities before calling {toolName}.");
                }
                var entityName = entityResult.Value.LogicalName;
                var primaryKey = entityResult.Value.PrimaryIdAttribute ?? entityName + "id";

                var resolvedKeyFields = new List<string>();
                if (rawKeyFields.Count > 0)
                {
                    var seenKeyFields = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                    foreach (var field in rawKeyFields)
                    {
                        try
                        {
                            var attrMeta = EntityParserHelper.ResolveAttribute(_serviceClient, entityName, field);
                            if (seenKeyFields.Add(attrMeta.LogicalName))
                                resolvedKeyFields.Add(attrMeta.LogicalName);
                        }
                        catch (Exception ex)
                        {
                            return Error(ex.Message, $"Use inspect_metadata(resource='tables', name='{entityName}') to discover valid alternate key field names.");
                        }
                    }
                }

                var csvWarnings = new List<string>();
                var (resolved, inputFormat) = ResolveRecordsInput(records_json, entityName, csvWarnings);
                if (resolved == null)
                {
                    var trimmed = records_json.Trim();
                    if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase) || trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
                        return Error($"File not found: {trimmed}",
                            "Provide an existing .json/.csv file path (relative paths resolve against the workspace folder) or an inline JSON array.");
                    return Error(
                        "Failed to resolve records_json input.",
                        "Valid formats: inline JSON array, .json file path, or .csv file path.");
                }

                JsonElement[] elements;
                var root = JsonSerializer.Deserialize<JsonElement>(resolved);

                if (root.ValueKind != JsonValueKind.Array)
                    return Error("records_json must be a JSON array.",
                        "Pass a JSON array of record objects, e.g. [{\"name\":\"Contoso\"}].");

                elements = root.EnumerateArray().ToArray();

                if (elements.Length == 0)
                    return Error("records_json array is empty.",
                        "Provide at least one record object in the array.");

                if (elements.Length > MaxRecords)
                    return Error($"records_json has {elements.Length} elements. Max is {MaxRecords}.",
                        $"Split the input into batches of at most {MaxRecords} records and call {toolName} once per batch.");

                var usedDefault = max_parallelism <= 0;
                var parallelism = usedDefault
                    ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                    : max_parallelism;
                parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

                var parsedEntities = new (Entity entity, string error)[elements.Length];
                var stateChanges = new Entity[elements.Length];
                var seenIds = new HashSet<Guid>();
                int? firstInvalidFieldKeyIndex = null;
                for (var i = 0; i < elements.Length; i++)
                {
                    try
                    {
                        var entity = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, elements[i].GetRawText());
                        if (entity.Attributes.TryGetValue(primaryKey, out var key))
                        {
                            var guid = key is Guid g
                                ? g
                                : (key is string s && Guid.TryParse(s, out var parsed) ? parsed : Guid.Empty);
                            if (guid == Guid.Empty)
                                throw new ArgumentException($"Primary key '{primaryKey}' requires a non-empty GUID.");
                            entity.Id = guid;
                            entity.Attributes.Remove(primaryKey);
                            if (!seenIds.Add(entity.Id))
                                throw new ArgumentException($"Duplicate primary key '{entity.Id}' in the batch.");
                        }

                        if (resolvedKeyFields.Count > 0)
                        {
                            foreach (var keyField in resolvedKeyFields)
                            {
                                if (!entity.Attributes.TryGetValue(keyField, out var keyVal) ||
                                    keyVal == null ||
                                    (keyVal is string str && string.IsNullOrWhiteSpace(str)))
                                {
                                    throw new ArgumentException($"Alternate key field '{keyField}' is required on each record when key_fields is specified.");
                                }
                                entity.KeyAttributes[keyField] = keyVal;
                            }
                        }

                        stateChanges[i] = PrepareStateChange(entity);
                        parsedEntities[i] = (entity, null);
                    }
                    catch (InvalidFieldKeyException ex)
                    {
                        parsedEntities[i] = (null, $"{ex.Message} {ex.Hint}");
                        firstInvalidFieldKeyIndex ??= i;
                    }
                    catch (Exception ex)
                    {
                        parsedEntities[i] = (null, ex.Message);
                    }
                }

                // Compute the batch importsequencenumber and auto-fill it on
                // every successfully-parsed pure-create entity that does not already have one.
                // User-provided values always win (no duplicate checking).
                var hasPureCreates = parsedEntities.Any(item => item.entity != null && !IsUpsertEntity(item.entity));
                var allFailedWithoutKeyFields = parsedEntities.All(item => item.entity == null) && resolvedKeyFields.Count == 0;
                var (batchIsn, isnWarning) = (hasPureCreates || allFailedWithoutKeyFields)
                    ? ComputeBatchImportSequenceNumber(entityName)
                    : (null, null);
                if (batchIsn.HasValue)
                    ApplyBatchImportSequenceNumber(parsedEntities, batchIsn.Value);
                if (isnWarning != null)
                    csvWarnings.Add(isnWarning);

                if (_options.DryRun)
                {
                    var includePreviewItems = elements.Length <= PreviewItemLimit;
                    var previewItems = includePreviewItems
                        ? parsedEntities.Select((parsed, i) => new BatchCreateItem
                        {
                            Index = i,
                            Id = parsed.entity?.Id is Guid id && id != Guid.Empty ? id.ToString() : "",
                            Status = parsed.error == null ? "pending" : "failed",
                            Error = parsed.error,
                            StateUpdate = stateChanges[i] == null ? null : new BatchStateUpdate { Status = "pending" }
                        }).ToList()
                        : null;
                    var upsertPreviewCount = parsedEntities.Count(item => item.entity != null && IsUpsertEntity(item.entity));
                    var createPreviewCount = parsedEntities.Count(item => item.entity != null && !IsUpsertEntity(item.entity));
                    var previewVerb = upsertPreviewCount == 0
                        ? "CREATE"
                        : (createPreviewCount == 0 ? "UPSERT" : "CREATE/UPSERT");
                    var preview = new BatchCreateResult
                    {
                        Entity = entityName,
                        Total = elements.Length,
                        Succeeded = 0,
                        Created = 0,
                        Updated = 0,
                        Failed = parsedEntities.Count(item => item.error != null),
                        StateUpdated = 0,
                        DurationSeconds = 0,
                        Parallelism = parallelism,
                        UsedDefaultParallelism = usedDefault,
                        InputFormat = inputFormat,
                        BypassCustomLogic = bypass_custom_logic ? true : null,
                        ImportSequenceNumber = batchIsn,
                        Items = previewItems,
                        Status = "not_executed"
                    };
                    var previewSummary = $"Would {previewVerb} {elements.Length} '{entityName}' record(s) (parallelism={parallelism}, input={inputFormat}, bypassCustomLogic={bypass_custom_logic.ToString().ToLowerInvariant()}{(batchIsn.HasValue ? $", importSequenceNumber={batchIsn}" : "")}).";
                    if (!includePreviewItems && firstInvalidFieldKeyIndex is int index)
                        previewSummary += $" Record {index + 1}: {parsedEntities[index].error.ReplaceLineEndings(" ")}";
                    return DryRun(previewSummary, preview);
                }

                var ready = new List<(int index, Entity entity)>();
                var sortedItems = new List<BatchCreateItem>(elements.Length);
                for (var i = 0; i < parsedEntities.Length; i++)
                {
                    var (entity, error) = parsedEntities[i];
                    if (entity == null)
                        sortedItems.Add(new BatchCreateItem { Index = i, Id = "", Status = "failed", Error = error });
                    else
                        ready.Add((i, entity));
                }

                var sw = Stopwatch.StartNew();
                var (completed, chunkCount, batchedParallelism) = await ExecuteBatchesAsync(
                    ready, parallelism, bypass_custom_logic, stateUpdate: false);
                sortedItems.AddRange(completed);
                sortedItems.Sort((left, right) => left.Index.CompareTo(right.Index));

                var created = completed.Count(item => item.Status == "created");
                var updated = completed.Count(item => item.Status == "updated");
                var succeeded = created + updated;
                var failed = elements.Length - succeeded;

                // A successful Create/Upsert is committed even if its follow-up Update fails.
                // Preserve the record ID and report the state update outcome separately.
                var stateTargets = new List<(int index, Entity entity)>();
                foreach (var item in sortedItems)
                {
                    var target = stateChanges[item.Index];
                    if (target == null || (item.Status != "created" && item.Status != "updated"))
                        continue;
                    if (!Guid.TryParse(item.Id, out var id) || id == Guid.Empty)
                    {
                        item.StateUpdate = new BatchStateUpdate { Status = "failed", Error = "Operation returned no record ID for the state update." };
                        continue;
                    }
                    target.Id = id;
                    stateTargets.Add((item.Index, target));
                }

                if (stateTargets.Count > 0)
                {
                    var (stateResults, _, _) = await ExecuteBatchesAsync(stateTargets, parallelism, bypass_custom_logic, stateUpdate: true);
                    foreach (var stateResult in stateResults)
                    {
                        sortedItems[stateResult.Index].StateUpdate = new BatchStateUpdate
                        {
                            Status = stateResult.Status,
                            Error = stateResult.Error
                        };
                    }
                }
                sw.Stop();
                var statesUpdated = sortedItems.Count(item => item.StateUpdate?.Status == "updated");
                var stateFailures = sortedItems.Count(item => item.StateUpdate?.Status == "failed");

                // Build the warnings list shown in structured content: CSV header
                // warnings + the default-parallelism notice + the bypass note.
                var structuredWarnings = new List<string>(csvWarnings);
                if (usedDefault)
                    structuredWarnings.Add($"Default parallelism = {parallelism} (from server hint x-ms-dop-hint; hard limit {MaxParallelism}). Provide max_parallelism explicitly to suppress this notice.");
                if (chunkCount > 0)
                    structuredWarnings.Add($"Batched into {chunkCount} chunk(s) of up to {ChunkSize} record(s) via ExecuteMultiple (ContinueOnError=true); chunks ran on cloned connections ({batchedParallelism} concurrent). Parse failures excluded from chunks and reported per-item.");

                // bypass note: when bypass is OFF (the default), inform the user —
                // especially on a first run — that the parameter exists so they can
                // prompt to enable it next time. When bypass is ON, confirm it
                // bypassed (no educational hint, just a fact).
                if (!bypass_custom_logic)
                    structuredWarnings.Add("bypass_custom_logic is false: custom sync+async plugins/workflows ran for these records. For bulk data loads where custom logic would slow or block operations, retry with bypass_custom_logic=true (requires the System Administrator role).");
                else
                    structuredWarnings.Add("bypass_custom_logic=true: custom sync+async plugins/workflows were bypassed (BypassBusinessLogicExecution=CustomSync,CustomAsync) for these records.");

                var overallSuccessStatus = created > 0 && updated > 0
                    ? "upserted"
                    : (updated > 0 ? "updated" : "created");

                var durationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1);
                var structured = new BatchCreateResult
                {
                    Entity = entityName,
                    Total = elements.Length,
                    Succeeded = succeeded,
                    Created = created,
                    Updated = updated,
                    Failed = failed,
                    StateUpdated = statesUpdated,
                    DurationSeconds = durationSeconds,
                    Parallelism = parallelism,
                    UsedDefaultParallelism = usedDefault,
                    InputFormat = inputFormat,
                    BypassCustomLogic = bypass_custom_logic ? true : null,
                    ImportSequenceNumber = batchIsn,
                    Warnings = structuredWarnings.Count > 0 ? structuredWarnings : null,
                    Items = sortedItems.Count > 0 ? sortedItems : null,
                    Status = succeeded == 0 ? "failed" : (failed + stateFailures == 0 ? overallSuccessStatus : "partial")
                };

                var hasUpserts = ready.Any(r => IsUpsertEntity(r.entity));
                var bypassTag = bypass_custom_logic ? ", bypass=on" : "";
                var chunkTag = chunkCount > 0 ? $", {chunkCount} chunk(s)" : "";
                var isnTag = batchIsn.HasValue ? $", importSequenceNumber={batchIsn}" : "";
                string summary;
                if (succeeded == 0)
                {
                    var failVerb = hasUpserts && !hasPureCreates ? "upsert" : (!hasUpserts ? "create" : "process");
                    summary = $"Failed to {failVerb} any of {elements.Length} '{entityName}' record(s) ({failed} failed{chunkTag}{bypassTag}{isnTag}).";
                }
                else if (created > 0 && updated == 0)
                {
                    summary = $"Created {created}/{elements.Length} '{entityName}' record(s) in {durationSeconds}s ({batchedParallelism} concurrent{chunkTag}{bypassTag}{isnTag}).";
                }
                else if (updated > 0 && created == 0)
                {
                    summary = $"Updated {updated}/{elements.Length} '{entityName}' record(s) in {durationSeconds}s ({batchedParallelism} concurrent{chunkTag}{bypassTag}{isnTag}).";
                }
                else
                {
                    summary = $"Upserted {succeeded}/{elements.Length} '{entityName}' record(s) ({created} created, {updated} updated) in {durationSeconds}s ({batchedParallelism} concurrent{chunkTag}{bypassTag}{isnTag}).";
                }
                if (statesUpdated + stateFailures > 0)
                    summary += $" Updated state/status for {statesUpdated}/{statesUpdated + stateFailures} record(s).";

                if (failed + stateFailures == 0)
                    return Success(summary, structured);
                if (succeeded == 0)
                    return Failed(summary, structured);
                return Partial(summary, structured);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private static bool TryParseKeyFields(string keyFieldsInput, out List<string> keyFields)
        {
            keyFields = new List<string>();
            if (string.IsNullOrWhiteSpace(keyFieldsInput))
                return true;

            var trimmed = keyFieldsInput.Trim();
            if (trimmed.StartsWith("[", StringComparison.Ordinal))
            {
                try
                {
                    var root = JsonSerializer.Deserialize<JsonElement>(trimmed);
                    if (root.ValueKind != JsonValueKind.Array || root.GetArrayLength() == 0)
                        return false;
                    foreach (var elem in root.EnumerateArray())
                    {
                        if (elem.ValueKind != JsonValueKind.String)
                            return false;
                        var val = elem.GetString()?.Trim();
                        if (string.IsNullOrEmpty(val))
                            return false;
                        keyFields.Add(val);
                    }
                    return true;
                }
                catch (JsonException)
                {
                    return false;
                }
            }

            if (trimmed.StartsWith("{", StringComparison.Ordinal))
                return false;

            var parts = trimmed.Split(',', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries);
            if (parts.Length == 0)
                return false;

            keyFields.AddRange(parts);
            return true;
        }

        private static bool IsUpsertEntity(Entity entity) =>
            entity.Id != Guid.Empty || entity.KeyAttributes.Count > 0;

        /// <summary>
        /// Computes the batch importsequencenumber: max(IsnBaseline, maxInTable + 1).
        /// Queries the entity for the highest existing importsequencenumber via
        /// FetchXML aggregate. Returns null (with a warning) if the entity does not
        /// have the field or the query fails — the batch proceeds without auto-fill.
        /// </summary>
        private (int? value, string warning) ComputeBatchImportSequenceNumber(string entityName)
        {
            try
            {
                var metadata = LoadEntityMetadata(entityName);
                if (metadata == null)
                    return (null, $"Could not load metadata for '{entityName}'; importsequencenumber auto-fill skipped.");

                var hasIsn = metadata.Attributes.Any(a =>
                    a.LogicalName.Equals(IsnLogicalName, StringComparison.OrdinalIgnoreCase));
                if (!hasIsn)
                    return (null, null); // entity has no ISN field — silently skip, not an error

                var fetchXml = $@"<fetch aggregate='true'>
  <entity name='{entityName}'>
    <attribute name='{IsnLogicalName}' aggregate='max' alias='max_isn' />
  </entity>
</fetch>";

                var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (results?.Entities == null || results.Entities.Count == 0)
                    return (IsnBaseline, null);

                var alias = results.Entities[0].Contains("max_isn")
                    ? results.Entities[0]["max_isn"]
                    : null;

                // AliasedValue wraps the aggregate result
                if (alias is AliasedValue av)
                    alias = av.Value;

                if (alias == null || alias is int maxInTable && maxInTable == 0)
                    return (IsnBaseline, null);

                var maxVal = Convert.ToInt32(alias, CultureInfo.InvariantCulture);
                var computed = Math.Max(IsnBaseline, maxVal + 1);
                return (computed, null);
            }
            catch (Exception ex)
            {
                return (null, $"Failed to query max importsequencenumber for '{entityName}': {ex.Message}. Auto-fill skipped.");
            }
        }

        /// <summary>
        /// Applies the batch importsequencenumber to every successfully-parsed pure-create
        /// entity that does not already have the field set. User-provided values are
        /// preserved — this method only fills in entities where the key is absent.
        /// </summary>
        private static void ApplyBatchImportSequenceNumber(
            (Entity entity, string error)[] parsedEntities, int batchIsn)
        {
            foreach (var (entity, _) in parsedEntities)
            {
                if (entity == null || IsUpsertEntity(entity)) continue;
                if (!entity.Contains(IsnLogicalName))
                    entity[IsnLogicalName] = batchIsn;
            }
        }

        private async Task<(List<BatchCreateItem> items, int chunkCount, int concurrency)> ExecuteBatchesAsync(
            List<(int index, Entity entity)> records, int parallelism, bool bypass, bool stateUpdate)
        {
            var chunks = records.Chunk(ChunkSize).ToArray();
            var concurrency = Math.Min(parallelism, Math.Max(1, chunks.Length));
            var results = new ConcurrentBag<BatchCreateItem>();
            await Parallel.ForEachAsync(chunks, new ParallelOptions { MaxDegreeOfParallelism = concurrency }, async (chunk, ct) =>
            {
                List<BatchCreateItem> items;
                try
                {
                    // Clone is OAuth-only. Retain the shared client on connections that cannot clone.
                    using var ownedWorker = _serviceClient.Clone();
                    if (ownedWorker != null)
                        ownedWorker.CallerId = _serviceClient.CallerId;
                    items = await ExecuteChunkAsync(ownedWorker ?? _serviceClient, chunk, bypass, ct, stateUpdate);
                }
                catch (Exception ex)
                {
                    items = ChunkFailures(chunk, ex.Message);
                }
                foreach (var item in items)
                    results.Add(item);
            });
            return (results.ToList(), chunks.Length, concurrency);
        }

        private async Task<List<BatchCreateItem>> ExecuteChunkAsync(
            ServiceClient worker, IReadOnlyList<(int index, Entity entity)> chunk, bool bypass, CancellationToken ct, bool stateUpdate = false)
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
            foreach (var (_, entity) in chunk)
            {
                OrganizationRequest mutation = stateUpdate
                    ? new UpdateRequest { Target = entity }
                    : IsUpsertEntity(entity)
                        ? new UpsertRequest { Target = entity }
                        : new CreateRequest { Target = entity };
                if (bypass)
                    mutation.Parameters["BypassBusinessLogicExecution"] = "CustomSync,CustomAsync";
                request.Requests.Add(mutation);
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
                    var (index, entity) = chunk[i];
                    var isUpsert = !stateUpdate && IsUpsertEntity(entity);
                    if (!byIndex.TryGetValue(i, out var item) || item.Fault != null)
                    {
                        var err = item?.Fault?.Message ?? "No response returned for this item.";
                        items.Add(new BatchCreateItem
                        {
                            Index = index,
                            Id = entity.Id != Guid.Empty ? entity.Id.ToString() : "",
                            Status = "failed",
                            Error = err
                        });
                    }
                    else if (stateUpdate)
                    {
                        items.Add(new BatchCreateItem
                        {
                            Index = index,
                            Id = entity.Id != Guid.Empty ? entity.Id.ToString() : "",
                            Status = "updated"
                        });
                    }
                    else if (isUpsert)
                    {
                        var id = ResolveUpsertId(item.Response, entity);
                        var recordCreated = item.Response?.Results.TryGetValue("RecordCreated", out var rcObj) == true && rcObj is bool rc ? rc : true;
                        items.Add(new BatchCreateItem
                        {
                            Index = index,
                            Id = id != Guid.Empty ? id.ToString() : "",
                            Status = recordCreated ? "created" : "updated"
                        });
                    }
                    else
                    {
                        var id = item.Response?.Results.TryGetValue("id", out var returnedId) == true
                            && returnedId is Guid createdId && createdId != Guid.Empty ? createdId : entity.Id;
                        items.Add(new BatchCreateItem
                        {
                            Index = index,
                            Id = id != Guid.Empty ? id.ToString() : "",
                            Status = "created"
                        });
                    }
                }
            }
            catch (Exception ex)
            {
                return ChunkFailures(chunk, ex.Message);
            }
            return items;
        }

        private static Guid ResolveUpsertId(OrganizationResponse response, Entity entity)
        {
            if (response?.Results != null)
            {
                if (response.Results.TryGetValue("Target", out var targetObj) && targetObj is EntityReference er && er.Id != Guid.Empty)
                    return er.Id;
                if (response.Results.TryGetValue("id", out var idObj) && idObj is Guid id && id != Guid.Empty)
                    return id;
            }
            return entity.Id;
        }

        private static List<BatchCreateItem> ChunkFailures(
            IReadOnlyList<(int index, Entity entity)> chunk, string error)
        {
            return chunk.Select(record => new BatchCreateItem
            {
                Index = record.index,
                Id = record.entity.Id != Guid.Empty ? record.entity.Id.ToString() : "",
                Status = "failed",
                Error = error
            }).ToList();
        }

        // Input files are read, never deleted — the generated file stays on disk
        // so it can be re-run, inspected, or piped again.
        private (string json, string format) ResolveRecordsInput(string recordsJson, string entityName, List<string> csvWarnings)
        {
            var trimmed = recordsJson.Trim();

            if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return (null, "csv");
                var json = ConvertCsvToJson(trimmed, entityName, csvWarnings);
                return (json, "csv");
            }

            if (!trimmed.StartsWith("[") && trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return (null, "json-file");
                var content = File.ReadAllText(trimmed, Encoding.UTF8);
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
                    $"Tip: Use inspect_metadata(resource='tables', name='{entityName}') to discover valid CSV headers.",
                    "CSV header");
                if (resolved.IsSuccess)
                {
                    var attr = resolved.Value;
                    // Fast-fail: if the same logical name was already mapped by a
                    // previous column, two columns are writing to the same field —
                    // ambiguous and data-corrupting. Reject the entire CSV.
                    if (columnMap.Any(c => c.logicalName == attr.LogicalName))
                        throw new InvalidOperationException(
                            $"CSV header '{header}' (column {i + 1}) maps to field '{attr.LogicalName}', but a previous column already maps to the same field. Duplicate field mapping is not allowed. Tip: Use inspect_metadata(resource='tables', name='{entityName}') to find unique Display Names or logical names for each column.");
                    columnMap[i] = (i, attr.LogicalName, attr);
                    validColumns++;
                }
                else if (resolved.Status == ResolveStatus.Ambiguous)
                {
                    // Fast-fail on ambiguous header — do NOT skip and continue.
                    throw new InvalidOperationException(resolved.Error);
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
            if (attr.AttributeType == AttributeTypeCode.Uniqueidentifier)
                return (logicalName, cellValue);

            switch (attr)
            {
                case StringAttributeMetadata:
                case MemoAttributeMetadata:
                case UniqueIdentifierAttributeMetadata:
                case StateAttributeMetadata:
                case StatusAttributeMetadata:
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

    }
}
