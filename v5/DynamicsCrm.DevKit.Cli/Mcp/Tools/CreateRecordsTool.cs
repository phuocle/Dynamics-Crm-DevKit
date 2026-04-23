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
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class CreateRecordsTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public CreateRecordsTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        private const int MaxRecords = 5000;
        private const int MaxParallelism = 52;

        [McpServerTool(Name = "create_records", Title = "Create multiple records in parallel",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(BatchCreateResult)),
        Description(
            "Create multiple Dataverse records in parallel — optimized for data migration. Partial failures reported per-item; successful records still created.\n\n" +

            "DEFAULT (shown in output when not provided):\n" +
            "  max_parallelism: from server x-ms-dop-hint (typically 4–8 for cloud). Hard limit: 52.\n\n" +

            "TIPS:\n" +
            "- records_json: inline JSON array, .json file path (from generate_demo_data), or .csv (headers=Display Name; lookups by Name: 1 match=GUID, 0 or 2+=skipped)\n" +
            "- Polymorphic lookups: use \"fieldname@targetentity\" syntax\n" +
            "- max_parallelism=1–2 for on-prem/throttled envs; max 5000 records per call")]
        public async Task<CallToolResult> create_records(
            [Description(
                "Entity logical name (e.g., 'account'). Required."
            )] string entity_name,
            [Description(
                "JSON array of field objects (inline), OR file path (.json from generate_demo_data), OR CSV file path (.csv with Display Name headers). Max 5000 records."
            )] string records_json,
            [Description(
                "Max concurrent requests. 0 (default) = use server hint (x-ms-dop-hint). Clamped to 1–52."
            )] int max_parallelism = 0)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(records_json))
                return ErrorResult("Error: records_json is required. Provide a JSON array, .json file path, or .csv file path.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            var csvWarnings = new List<string>();
            var resolved = ResolveRecordsInput(records_json, entityName, csvWarnings);
            if (resolved == null)
            {
                var trimmed = records_json.Trim();
                if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase) || trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
                    return ErrorResult($"Error: File not found: {trimmed}");
                return ErrorResult(
                    "Error: Failed to resolve records_json input.\n" +
                    "Valid formats: inline JSON array, .json file path, or .csv file path.");
            }

            JsonElement[] elements;
            try
            {
                var doc = JsonDocument.Parse(resolved);
                if (doc.RootElement.ValueKind != JsonValueKind.Array)
                    return ErrorResult("Error: records_json must be a JSON array.");

                elements = doc.RootElement.EnumerateArray().ToArray();
            }
            catch (JsonException ex)
            {
                return ErrorResult(
                    $"Error: Invalid JSON in records_json: {ex.Message}\n" +
                    "Read docs://data_operations_guide for field type format examples.");
            }

            if (elements.Length == 0)
                return ErrorResult("Error: records_json array is empty.");

            if (elements.Length > MaxRecords)
                return ErrorResult($"Error: records_json has {elements.Length} elements. Max is {MaxRecords}.");

            var usedDefault = max_parallelism <= 0;
            var parallelism = usedDefault
                ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                : max_parallelism;
            parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

            if (_options.DryRun)
                return DryRunResult($"Would CREATE {elements.Length} '{entityName}' records (parallelism={parallelism}).");

            var parsedItems = new (int index, Entity entity, string error)[elements.Length];

            try
            {
                parsedItems[0] = (0, EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, elements[0].GetRawText()), null);
            }
            catch (Exception ex)
            {
                parsedItems[0] = (0, null, ex.Message);
            }

            for (var i = 1; i < elements.Length; i++)
            {
                try
                {
                    parsedItems[i] = (i, EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, elements[i].GetRawText()), null);
                }
                catch (Exception ex)
                {
                    parsedItems[i] = (i, null, ex.Message);
                }
            }

            var parseFailures = parsedItems.Where(x => x.error != null).ToList();
            var validItems = parsedItems.Where(x => x.error == null).ToList();

            var results = new ConcurrentBag<BatchCreateItem>();

            foreach (var pf in parseFailures)
                results.Add(new BatchCreateItem { Index = pf.index, Status = "failed", Error = pf.error });

            var oldAffinity = _serviceClient.EnableAffinityCookie;
            var sw = Stopwatch.StartNew();
            try
            {
                _serviceClient.EnableAffinityCookie = false;

                await Parallel.ForEachAsync(validItems, new ParallelOptions
                {
                    MaxDegreeOfParallelism = parallelism
                }, async (item, ct) =>
                {
                    try
                    {
                        var id = await _serviceClient.CreateAsync(item.entity, ct);
                        results.Add(new BatchCreateItem { Index = item.index, Id = id.ToString(), Status = "created" });
                    }
                    catch (Exception ex)
                    {
                        results.Add(new BatchCreateItem { Index = item.index, Status = "failed", Error = ex.Message });
                    }
                });
            }
            finally
            {
                _serviceClient.EnableAffinityCookie = oldAffinity;
            }
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

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        // ── Input resolution ────────────────────────────────────────────

        private string ResolveRecordsInput(string recordsJson, string entityName, List<string> csvWarnings)
        {
            var trimmed = recordsJson.Trim();

            if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return null;
                var json = ConvertCsvToJson(trimmed, entityName, csvWarnings);
                try { File.Delete(trimmed); } catch { }
                return json;
            }

            if (!trimmed.StartsWith("[") && trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
            {
                if (!File.Exists(trimmed)) return null;
                var content = File.ReadAllText(trimmed, Encoding.UTF8);
                try { File.Delete(trimmed); } catch { }
                return content;
            }

            return recordsJson;
        }

        // ── CSV to JSON conversion ──────────────────────────────────────

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

            var displayToAttr = metadata.Attributes
                .Where(a => a.DisplayName?.UserLocalizedLabel?.Label != null)
                .GroupBy(a => a.DisplayName.UserLocalizedLabel.Label, StringComparer.OrdinalIgnoreCase)
                .ToDictionary(g => g.Key, g => g.First(), StringComparer.OrdinalIgnoreCase);

            var headers = ParseCsvLine(lines[0]);
            var columnMap = new (int colIndex, string logicalName, AttributeMetadata attr)[headers.Length];
            var validColumns = 0;

            for (var i = 0; i < headers.Length; i++)
            {
                var header = headers[i].Trim();
                if (displayToAttr.TryGetValue(header, out var attr))
                {
                    columnMap[i] = (i, attr.LogicalName, attr);
                    validColumns++;
                }
                else
                {
                    columnMap[i] = (i, null, null);
                    warnings.Add($"Header '{header}' not found in entity metadata — column skipped.");
                }
            }

            if (validColumns == 0)
            {
                warnings.Add("No CSV headers matched entity Display Names.");
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
            try
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
            catch
            {
                return null;
            }
        }

        private EntityMetadata LoadEntityMetadata(string entityName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Attributes
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                return response.EntityMetadata;
            }
            catch
            {
                return null;
            }
        }

        // ── CSV parsing ─────────────────────────────────────────────────

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

        // ── Helpers ─────────────────────────────────────────────────────

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };
    }
}
