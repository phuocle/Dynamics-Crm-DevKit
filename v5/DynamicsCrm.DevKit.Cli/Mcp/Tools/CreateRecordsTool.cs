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
            "Bulk create Dataverse records in parallel. Max 5000/call. Partial failures: successes committed, failures reported per-item.\n" +
            "records_json: inline JSON array, .json path, or .csv path (Display Name headers).\n" +
            "Polymorphic lookup: 'field@targetentity' (e.g. 'customerid@account'). Activity parties (to, from, cc, bcc, requiredattendees, optionalattendees, organizer, customers, resources): JSON array of {\"id\":\"<guid>\",\"type\":\"<entity>\"}. Single object auto-wrapped. Optional 'addressused' for email/phone override. Do NOT set participationtypemask — Dataverse sets it.\n" +
            "CSV lookup-by-name: exactly 1 match → GUID; 0 or 2+ matches → skipped with warning.\n" +
            "For single-record CRUD → manage_record.")]
        public async Task<CallToolResult> create_records(
            [Description(
                "Entity Display Name or logical name (Display Name resolved first)."
            )] string entity_name,
            [Description(
                "Inline JSON array, .json file path, or .csv file path. Max 5000 records."
            )] string records_json,
            [Description(
                "Concurrent requests. 0 = server hint. Clamped 1-52. Use 1-2 for on-prem."
            )] int max_parallelism = 0)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("Error: entity_name is required.");

                if (string.IsNullOrWhiteSpace(records_json))
                    return Error("Error: records_json is required. Provide a JSON array, .json file path, or .csv file path.");

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "create_records");
                if (!entityResult.IsSuccess)
                    return Error($"Error: {entityResult.Error}");
                var entityName = entityResult.Value.LogicalName;

                var csvWarnings = new List<string>();
                var resolved = ResolveRecordsInput(records_json, entityName, csvWarnings, deleteInput: !_options.DryRun);
                if (resolved == null)
                {
                    var trimmed = records_json.Trim();
                    if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase) || trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
                        return Error($"Error: File not found: {trimmed}");
                    return Error(
                        "Error: Failed to resolve records_json input.\n" +
                        "Valid formats: inline JSON array, .json file path, or .csv file path.");
                }

                JsonElement[] elements;
                var root = JsonSerializer.Deserialize<JsonElement>(resolved);

                if (root.ValueKind != JsonValueKind.Array)
                    return Error("Error: records_json must be a JSON array.");

                elements = root.EnumerateArray().ToArray();

                if (elements.Length == 0)
                    return Error("Error: records_json array is empty.");

                if (elements.Length > MaxRecords)
                    return Error($"Error: records_json has {elements.Length} elements. Max is {MaxRecords}.");

                var usedDefault = max_parallelism <= 0;
                var parallelism = usedDefault
                    ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                    : max_parallelism;
                parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

                if (_options.DryRun)
                {
                    var preview = new BatchCreateResult
                    {
                        Entity = entityName,
                        Total = elements.Length,
                        Succeeded = 0,
                        Failed = 0,
                        DurationSeconds = 0,
                        Parallelism = parallelism,
                        UsedDefaultParallelism = usedDefault,
                        Items = []
                    };
                    return DryRun(
                        $"Would CREATE {elements.Length} '{entityName}' records (parallelism={parallelism}).",
                        preview);
                }

                var parsedEntities = new Entity[elements.Length];
                for (var i = 0; i < elements.Length; i++)
                    parsedEntities[i] = EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, elements[i].GetRawText());

                var results = new ConcurrentBag<BatchCreateItem>();
                var sw = Stopwatch.StartNew();
                await Parallel.ForEachAsync(Enumerable.Range(0, parsedEntities.Length), new ParallelOptions
                {
                    MaxDegreeOfParallelism = parallelism
                }, async (i, ct) =>
                {
                    var (id, error) = await TryCreateAsync(parsedEntities[i], ct);
                    if (error == null)
                        results.Add(new BatchCreateItem { Index = i, Id = id.ToString(), Status = "created" });
                    else
                        results.Add(new BatchCreateItem { Index = i, Status = "failed", Error = error });
                });
                sw.Stop();

                var sortedItems = results.OrderBy(x => x.Index).ToList();
                var succeeded = sortedItems.Count(x => x.Status == "created");
                var failed = sortedItems.Count(x => x.Status == "failed");

                var structured = new BatchCreateResult
                {
                    Entity = entityName,
                    Total = elements.Length,
                    Succeeded = succeeded,
                    Failed = failed,
                    DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1),
                    Parallelism = parallelism,
                    UsedDefaultParallelism = usedDefault,
                    Items = sortedItems
                };

                var sb = new StringBuilder(256);

                if (csvWarnings.Count > 0)
                {
                    sb.AppendLine("CSV warnings:");
                    foreach (var w in csvWarnings)
                        sb.AppendLine($"  {w}");
                    sb.AppendLine();
                }

                if (usedDefault)
                {
                    sb.AppendLine($"Applied default parallelism = {parallelism} (from server hint x-ms-dop-hint; hard limit: {MaxParallelism})");
                    sb.AppendLine("Tip: provide max_parallelism explicitly to suppress this notice.");
                    sb.AppendLine();
                }

                sb.AppendLine($"Created {succeeded}/{elements.Length} '{entityName}' records in {structured.DurationSeconds}s ({parallelism} concurrent)");

                if (failed > 0)
                {
                    sb.AppendLine();
                    sb.AppendLine("Failed records:");
                    foreach (var item in sortedItems.Where(x => x.Status == "failed"))
                        sb.AppendLine($"  [{item.Index}] {item.Error}");
                }

                return Success(sb.ToString(), structured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // Per-item helper for parallel create. Returns (id, null) on success,
        // (Guid.Empty, errorMessage) on failure. Cannot let exceptions propagate
        // because it runs inside Parallel.ForEachAsync — an unhandled throw
        // would abort the entire batch and hide which records succeeded.
        //
        // The mutation gateway (DataverseMutationExecutor.CreateAsync) asserts
        // that mutations are allowed before the SDK call. In dry-run mode the
        // action-level preview returns before this method is reached; the
        // gateway is the fail-closed safety net for any future caller that
        // forgets the preview.
        private async Task<(Guid id, string error)> TryCreateAsync(Entity entity, CancellationToken ct)
        {
            try
            {
                var id = await DataverseMutationExecutor.CreateAsync(_context, _serviceClient, entity, ct);
                return (id, null);
            }
            catch (Exception ex)
            {
                return (Guid.Empty, ex.Message);
            }
        }

        private string ResolveRecordsInput(string recordsJson, string entityName, List<string> csvWarnings, bool deleteInput)
        {
            var trimmed = recordsJson.Trim();

            if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return null;
                var json = ConvertCsvToJson(trimmed, entityName, csvWarnings);
                if (deleteInput) SafeDelete(trimmed);
                return json;
            }

            if (!trimmed.StartsWith("[") && trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return null;
                var content = File.ReadAllText(trimmed, Encoding.UTF8);
                if (deleteInput) SafeDelete(trimmed);
                return content;
            }

            return recordsJson;
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
                    warnings.Add($"Row {rowNum}: all fields skipped â€” row excluded.");
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
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid integer â€” skipped.");
                    return null;

                case BigIntAttributeMetadata:
                    if (long.TryParse(cellValue, NumberStyles.Any, CultureInfo.InvariantCulture, out var longVal))
                        return (logicalName, longVal);
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid integer â€” skipped.");
                    return null;

                case DecimalAttributeMetadata:
                case DoubleAttributeMetadata:
                case MoneyAttributeMetadata:
                    if (decimal.TryParse(cellValue, NumberStyles.Any, CultureInfo.InvariantCulture, out var decVal))
                        return (logicalName, decVal);
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid number â€” skipped.");
                    return null;

                case BooleanAttributeMetadata:
                    var lower = cellValue.ToLowerInvariant();
                    if (lower is "true" or "yes" or "1") return (logicalName, true);
                    if (lower is "false" or "no" or "0") return (logicalName, false);
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid boolean â€” skipped.");
                    return null;

                case DateTimeAttributeMetadata:
                    if (DateTime.TryParse(cellValue, CultureInfo.InvariantCulture, DateTimeStyles.None, out var dtVal))
                        return (logicalName, dtVal.ToString("yyyy-MM-ddTHH:mm:ssZ"));
                    warnings.Add($"Row {rowNum}: '{logicalName}' value '{cellValue}' is not a valid date â€” skipped.");
                    return null;

                case PicklistAttributeMetadata picklist:
                    return ResolvePicklistLabel(picklist, cellValue, logicalName, rowNum, warnings);

                case MultiSelectPicklistAttributeMetadata multi:
                    return ResolveMultiSelectLabels(multi, cellValue, logicalName, rowNum, warnings);

                case LookupAttributeMetadata lookup:
                    return ResolveLookupByName(lookup, cellValue, logicalName, rowNum, lookupNameCache, warnings);

                default:
                    warnings.Add($"Row {rowNum}: '{logicalName}' type '{attr.GetType().Name}' not supported for CSV â€” skipped.");
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

            warnings.Add($"Row {rowNum}: picklist '{logicalName}' label '{label}' not found in options â€” skipped.");
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
                    warnings.Add($"Row {rowNum}: multi-select '{logicalName}' label '{part}' not found â€” skipped.");
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
                warnings.Add($"Row {rowNum}: lookup '{logicalName}' has no target entity â€” skipped.");
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

            warnings.Add($"Row {rowNum}: lookup '{logicalName}' value '{nameValue}' not found or ambiguous â€” skipped.");
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
