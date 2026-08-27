using Bogus;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    internal sealed class FieldOverride
    {
        [JsonPropertyName("logicalname")]
        public string LogicalName { get; set; }

        // Supported: eq, in, startswith, endswith, contains, regex
        [JsonPropertyName("operator")]
        public string Operator { get; set; }

        [JsonPropertyName("values")]
        public List<JsonElement> Values { get; set; }
    }

    [McpServerToolType]
    public class GenerateDemoDataTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GenerateDemoDataTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static readonly ConcurrentDictionary<string, EntityMetadata> MetadataCache = new(StringComparer.OrdinalIgnoreCase);
        private static readonly ConcurrentDictionary<string, List<Guid>> LookupPoolCache = new(StringComparer.OrdinalIgnoreCase);

        private const int MaxCount = 500;
        private const int LookupPoolSize = 100;

        [McpServerTool(Name = "generate_demo_data", Title = "Generate demo data for an entity",
            Destructive = false, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GenerateDemoDataResult)),
        Description(
            "Bogus-generated demo data for an entity → JSON file at {workspace_folder}/.devkit/generate_demo_data/{entity}/ → pipe to create_records. from_date/to_date REQUIRED (ISO 8601, ask user, never infer). Auto-selects creatable fields with smart mapping (email→Email, telephone→Phone…) and overriddencreatedon. Lookups: real GUIDs auto-fetched; polymorphic uses 'field@entity'.\n\n" +
            "WHEN TO USE:\n" +
            "- Generate demo/test data for an entity → pipe to create_records\n" +
            "- Reproducible runs (fix seed); rotate lookups/enums via field_overrides 'in'\n" +
            "- Pin specific FK values across all rows via field_overrides 'eq'\n\n" +
            "RELATED TOOLS:\n" +
            "- create_records → import generated JSON into Dataverse\n" +
            "- get_tables → discover entity fields before generating")]
        public CallToolResult generate_demo_data(
            [Description("Entity logical name (e.g., 'account').")] string entity_name = "",
            [Description("ISO 8601, e.g. '2026-01-01'. NEVER infer — ask user.")] string from_date = "",
            [Description("ISO 8601, e.g. '2026-04-30'. Must be >= from_date.")] string to_date = "",
            [Description("1-500.")] int count = 10,
            [Description("Comma-separated logical names. Empty = auto-select creatable.")] string fields = "",
            [Description("0 = random; non-zero = reproducible.")] int seed = 0,
            [Description("JSON array of {logicalname, operator, values[]}. Operators (see description). Example: [{\"logicalname\":\"jobtitle\",\"operator\":\"in\",\"values\":[\"CEO\",\"CFO\",\"CTO\"]}].")] string field_overrides = "",
            [Description("Required. Project/workspace folder path — JSON file saves to {workspace_folder}/.devkit/generate_demo_data/{entity}/. Pass the workspace folder currently open in the editor, NOT the devkit install folder.")] string workspace_folder = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.",
                        "Provide the entity logical name, e.g. 'account'.");

                if (string.IsNullOrWhiteSpace(from_date) || string.IsNullOrWhiteSpace(to_date))
                    return Error("from_date and to_date are required.",
                        "DO NOT infer or assume these values — ask the user explicitly before calling this tool.");

                if (string.IsNullOrWhiteSpace(workspace_folder))
                    return Error("workspace_folder is required.",
                        "Provide the workspace folder — JSON file saves to {workspace_folder}/.devkit/generate_demo_data/{entity}/.");

                if (!DateTime.TryParse(from_date, CultureInfo.InvariantCulture, DateTimeStyles.None, out var fromDt))
                    return Error($"from_date '{from_date}' is not a valid date.",
                        "Use ISO 8601 format, e.g. '2026-01-01'.");

                if (!DateTime.TryParse(to_date, CultureInfo.InvariantCulture, DateTimeStyles.None, out var toDt))
                    return Error($"to_date '{to_date}' is not a valid date.",
                        "Use ISO 8601 format, e.g. '2026-04-30'.");

                if (toDt < fromDt)
                    return Error($"to_date '{to_date}' must be >= from_date '{from_date}'.");

                if (count > MaxCount)
                    return Error($"count {count} exceeds maximum {MaxCount}.");

                count = Math.Max(1, count);

                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "generate_demo_data");
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
                            new GenerateDemoDataResult { EntityMatches = entityMatches });
                    }
                    return Error(
                        entityResult.Error.Split("\r\n")[0],
                        "Use get_tables to discover valid entity names.");
                }
                var entityName = entityResult.Value.LogicalName;

                var metadata = LoadEntityMetadata(entityName);

                var warnings = new List<string>();

                // Select fields
                var selectedAttrs = SelectFields(metadata, fields, entityName, warnings);
                if (selectedAttrs.Count == 0)
                    return Error($"No valid fields found for entity '{entityName}'.",
                        "Check the entity name or specify fields explicitly.");

                // Pre-fetch lookup pools
                var lookupPools = new Dictionary<string, List<Guid>>(StringComparer.OrdinalIgnoreCase);
                var lookupsSampled = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);

                foreach (var attr in selectedAttrs.OfType<LookupAttributeMetadata>())
                {
                    var targets = attr.Targets ?? Array.Empty<string>();
                    foreach (var target in targets)
                    {
                        if (lookupPools.ContainsKey(target)) continue;
                        var guids = FetchLookupPool(target);
                        if (guids.Count == 0)
                        {
                            warnings.Add($"Lookup target '{target}' has no active records — fields targeting it will be skipped.");
                            lookupPools[target] = [];
                        }
                        else
                        {
                            lookupPools[target] = guids;
                            lookupsSampled[target] = guids.Count;
                        }
                    }
                }

                // Build faker
                var actualSeed = seed == 0 ? Environment.TickCount : seed;
                var faker = new Faker { Random = new Randomizer(actualSeed) };

                // Parse field_overrides
                var overrides = new List<FieldOverride>();
                if (!string.IsNullOrWhiteSpace(field_overrides))
                {
                    overrides = JsonSerializer.Deserialize<List<FieldOverride>>(field_overrides,
                        new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? [];

                    foreach (var ov in overrides)
                    {
                        if (string.IsNullOrWhiteSpace(ov.LogicalName))
                            return Error("each field_override must have a non-empty 'logicalname'.");
                        var op = ov.Operator?.ToLowerInvariant();
                        if (op is not ("eq" or "in" or "startswith" or "endswith" or "contains" or "regex"))
                            return Error($"unsupported operator '{ov.Operator}' for field '{ov.LogicalName}'.",
                                "Valid values: eq, in, startswith, endswith, contains, regex.");
                        if (ov.Values == null || ov.Values.Count == 0)
                            return Error($"field_override for '{ov.LogicalName}' must have at least one value.");
                    }

                    var overrideError = NormalizeOverrides(metadata, overrides, entityName);
                    if (overrideError != null)
                        return Error(overrideError);
                }

                // Generate records
                var records = new List<Dictionary<string, object>>(count);
                var preGenWarningCount = warnings.Count;
                for (var i = 0; i < count; i++)
                {
                    var record = GenerateRecord(faker, entityName, selectedAttrs, lookupPools, fromDt, toDt, warnings);
                    if (overrides.Count > 0)
                        ApplyOverrides(faker, record, overrides, warnings);
                    records.Add(record);
                }

                // Save to {workspace_folder}/.devkit/generate_demo_data/{entity}/{entity}/
                var outputDir = Path.Combine(workspace_folder, ".devkit", "generate_demo_data", entityName);
                Directory.CreateDirectory(outputDir);
                var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
                var filePath = Path.Combine(outputDir, $"{entityName}_{timestamp}.json");

                var jsonOptions = new JsonSerializerOptions { WriteIndented = true };
                var json = JsonSerializer.Serialize(records, jsonOptions);
                File.WriteAllText(filePath, json, Encoding.UTF8);

                var fieldNames = selectedAttrs.Select(a => a.LogicalName).ToList();
                if (!fieldNames.Contains("overriddencreatedon"))
                    fieldNames.Insert(0, "overriddencreatedon");

                var generationWarnings = warnings.Count - preGenWarningCount;
                var structured = new GenerateDemoDataResult
                {
                    Entity = entityName,
                    Count = count,
                    RecordsGenerated = records.Count,
                    FieldsGenerated = fieldNames.Count,
                    FieldList = fieldNames.Count > 0 ? fieldNames : null,
                    FilePath = filePath,
                    Seed = actualSeed,
                    OverridesApplied = overrides.Count > 0
                        ? overrides.Select(o => $"{o.LogicalName} ({o.Operator})").ToList()
                        : null,
                    LookupsSampled = lookupsSampled.Count > 0 ? lookupsSampled : null,
                    Warnings = warnings.Count > 0 ? warnings : null
                };

                var summary = warnings.Count > 0
                    ? $"Generated {records.Count}/{count} '{entityName}' records with {warnings.Count} warning(s) — payload written (see filePath)."
                    : $"Generated {records.Count} '{entityName}' records — payload written (see filePath).";

                if (warnings.Count > 0 && generationWarnings > 0)
                    return Partial(summary, structured);

                return Success(summary, structured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Field selection ──────────────────────────────────────────────

        private static List<AttributeMetadata> SelectFields(EntityMetadata metadata, string fields, string entityName, List<string> warnings)
        {
            var requestedFields = ResolveRequestedFields(metadata, fields, entityName, warnings);

            var result = new List<AttributeMetadata>();

            foreach (var attr in metadata.Attributes)
            {
                if (requestedFields != null)
                {
                    if (!requestedFields.Contains(attr.LogicalName))
                        continue;

                    if (IsSkippedType(attr))
                    {
                        warnings.Add($"Field '{attr.LogicalName}' type '{attr.GetType().Name}' is not supported — skipped.");
                        continue;
                    }

                    result.Add(attr);
                    continue;
                }

                // Auto-select: must be valid for create, skip system/unsupported
                if (attr.IsValidForCreate != true) continue;
                if (attr.IsPrimaryId == true) continue;
                if (attr.IsLogical == true) continue;
                if (!string.IsNullOrEmpty(attr.AttributeOf)) continue;
                if (attr.LogicalName == "owningbusinessunit") continue;
                if (AutoSelectSkipFields.Contains(attr.LogicalName)) continue;
                if (IsAutoSelectSkipPattern(attr.LogicalName)) continue;
                if (IsSkippedType(attr)) continue;

                result.Add(attr);
            }

            // Always ensure ownerid is included for user-owned entities (if available and not already included)
            if (requestedFields == null)
            {
                var ownerAttr = metadata.Attributes.FirstOrDefault(a =>
                    a.LogicalName == "ownerid" && a.IsValidForCreate == true);
                if (ownerAttr != null && !result.Any(a => a.LogicalName == "ownerid"))
                    result.Add(ownerAttr);
            }

            return result;
        }

        private static HashSet<string> ResolveRequestedFields(EntityMetadata metadata, string fields, string entityName, List<string> warnings)
        {
            if (string.IsNullOrWhiteSpace(fields))
                return null;

            var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            var candidates = BuildAttributeCandidates(metadata);
            foreach (var fieldInput in fields.Split(',').Select(f => f.Trim()).Where(f => f.Length > 0))
            {
                var resolved = DisplayNameFirstResolver.Resolve(
                    fieldInput,
                    candidates,
                    "[AmbiguousField]",
                    "[NotFoundField]",
                    $"Tip: Use get_tables(entity_name='{entityName}') to discover valid fields.",
                    "fields");

                if (resolved.IsSuccess)
                    result.Add(resolved.Value.LogicalName);
                else
                    warnings.Add($"Field '{fieldInput}' could not be resolved: {resolved.Error}");
            }

            return result;
        }

        private static string NormalizeOverrides(EntityMetadata metadata, List<FieldOverride> overrides, string entityName)
        {
            var candidates = BuildAttributeCandidates(metadata);
            foreach (var ov in overrides)
            {
                var fieldInput = ov.LogicalName.Trim();
                var targetSuffix = "";
                var fieldToResolve = fieldInput;
                var atIndex = fieldInput.IndexOf('@');
                if (atIndex >= 0)
                {
                    if (atIndex == 0 || atIndex == fieldInput.Length - 1)
                        return $"field_override '{fieldInput}' has invalid polymorphic lookup syntax. Use 'field@targetentity'.";

                    fieldToResolve = fieldInput[..atIndex];
                    targetSuffix = fieldInput[(atIndex + 1)..].Trim();
                }

                var resolved = DisplayNameFirstResolver.Resolve(
                    fieldToResolve,
                    candidates,
                    "[AmbiguousField]",
                    "[NotFoundField]",
                    $"Tip: Use get_tables(entity_name='{entityName}') to discover valid fields.",
                    "field_overrides[].logicalname");

                if (!resolved.IsSuccess)
                    return $"field_override '{fieldInput}' could not be resolved: {resolved.Error}";

                if (targetSuffix.Length > 0)
                {
                    if (resolved.Value is not LookupAttributeMetadata lookup)
                        return $"field_override '{fieldInput}' uses polymorphic syntax, but '{resolved.Value.LogicalName}' is not a lookup field.";

                    var targets = lookup.Targets ?? Array.Empty<string>();
                    if (!targets.Contains(targetSuffix, StringComparer.OrdinalIgnoreCase))
                    {
                        var validTargets = targets.Length == 0 ? "(none)" : string.Join(", ", targets);
                        return $"field_override '{fieldInput}' target '{targetSuffix}' is not valid for lookup '{resolved.Value.LogicalName}'. Valid targets: {validTargets}.";
                    }

                    ov.LogicalName = $"{resolved.Value.LogicalName}@{targetSuffix.ToLowerInvariant()}";
                }
                else
                {
                    ov.LogicalName = resolved.Value.LogicalName;
                }
            }

            return null;
        }

        private static List<DisplayNameFirstCandidate<AttributeMetadata>> BuildAttributeCandidates(EntityMetadata metadata) =>
            metadata.Attributes
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

        // System/constrained fields that Bogus cannot generate valid values for.
        // Skipped during auto-select (fields= empty). Users can still request them explicitly.
        private static readonly HashSet<string> AutoSelectSkipFields = new(StringComparer.OrdinalIgnoreCase)
        {
            // Timezone — must match TimeZoneDefinition table
            "utcconversiontimezonecode",
            "timezoneruleversionnumber",
            "address1_utcoffset",
            "address2_utcoffset",

            // Import / migration
            "importsequencenumber",

            // BPF / workflow system
            "traversedpath",
            "processid",
            "stageid",

            // Social / external format constraints
            "primarysatoriid",
            "primarytwitterid",

            // Japanese phonetic — only valid when base name field has a value
            "yominame",
            "yomifirstname",
            "yomilastname",
            "yomimiddlename",
            "yomifullname",

            // Activity system fields — set by platform logic
            "activitytypecode",
            "isbilled",
            "isregularactivity",
            "isworkflowcreated",
            "crmtaskassigneduniqueid",

            // Exchange / email sync
            "exchangeitemid",
            "exchangerate",
            "lastonholdtime",
            "onholdtime",
            "slainvokedid",
            "correlatedactivityid",
            "parentactivityid",
            "messageiddupcheck",

            // Computed / rollup (read-only, calculated by system)
            "aging30",
            "aging60",
            "aging90",
            "slaid",

            // System ownership (read-only, set by platform)
            "owninguser",
            "owningteam",
            "createdby",
            "modifiedby",
            "createdonbehalfby",
            "modifiedonbehalfby",

            // Auth / directory
            "activedirectoryguid",
            "azureactivedirectoryobjectid",

            // Misc system-managed
            "versionnumber",
            "subscriptionid",
            "participatesinworkflow",
            "marketingonly",
        };

        // Field name patterns skipped during auto-select
        private static bool IsAutoSelectSkipPattern(string logicalName) =>
            logicalName.StartsWith("adx_", StringComparison.OrdinalIgnoreCase) ||
            logicalName.EndsWith("_base", StringComparison.OrdinalIgnoreCase);

        private static bool IsSkippedType(AttributeMetadata attr) =>
            attr is UniqueIdentifierAttributeMetadata ||
            attr is ImageAttributeMetadata ||
            attr is FileAttributeMetadata ||
            attr is EntityNameAttributeMetadata ||
            attr is StateAttributeMetadata ||
            attr is StatusAttributeMetadata;

        // ── Record generation ────────────────────────────────────────────

        private Dictionary<string, object> GenerateRecord(
            Faker faker,
            string entityName,
            List<AttributeMetadata> attrs,
            Dictionary<string, List<Guid>> lookupPools,
            DateTime fromDt, DateTime toDt,
            List<string> warnings)
        {
            var record = new Dictionary<string, object>(attrs.Count + 1);

            // Always add overriddencreatedon to backdate createdon
            record["overriddencreatedon"] = faker.Date.Between(fromDt, toDt).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ");

            foreach (var attr in attrs)
            {
                var logicalName = attr.LogicalName;

                // Skip overriddencreatedon if it somehow appears in attrs (auto-select handles it above)
                if (logicalName == "overriddencreatedon") continue;

                var value = GenerateValue(faker, entityName, attr, lookupPools, fromDt, toDt, warnings);
                if (value == null) continue;
                // Polymorphic lookups return a flat {key@entity: guid} dict — merge into top-level record
                if (value is Dictionary<string, object> polymorphic)
                {
                    foreach (var kv in polymorphic)
                        record[kv.Key] = kv.Value;
                }
                else
                {
                    record[logicalName] = value;
                }
            }

            return record;
        }

        private static void ApplyOverrides(
            Faker faker,
            Dictionary<string, object> record,
            List<FieldOverride> overrides,
            List<string> warnings)
        {
            foreach (var ov in overrides)
            {
                var field = ov.LogicalName.Trim().ToLowerInvariant();
                var op = ov.Operator.ToLowerInvariant();
                var values = ov.Values;

                switch (op)
                {
                    case "eq":
                        SetOverrideValue(record, field, ConvertOverrideValue(values[0]));
                        break;

                    case "in":
                    {
                        var picked = values[faker.Random.Int(0, values.Count - 1)];
                        SetOverrideValue(record, field, ConvertOverrideValue(picked, parseNumericStrings: true));
                        break;
                    }

                    case "startswith":
                    {
                        var suffix = faker.Random.AlphaNumeric(6);
                        SetOverrideValue(record, field, $"{OverrideValueAsString(values[0])}{suffix}");
                        break;
                    }

                    case "endswith":
                    {
                        // If field looks like an email (endswith @domain.com), generate realistic prefix
                        var ending = OverrideValueAsString(values[0]);
                        string prefix;
                        if (ending.StartsWith("@"))
                            prefix = faker.Internet.UserName();
                        else
                            prefix = faker.Random.AlphaNumeric(6);
                        SetOverrideValue(record, field, $"{prefix}{ending}");
                        break;
                    }

                    case "contains":
                    {
                        var prefix = faker.PickRandom(new[] { "Senior", "Junior", "Lead", "Principal", "Associate" });
                        var suffix = faker.PickRandom(new[] { "I", "II", "III", "" });
                        var result = $"{prefix} {OverrideValueAsString(values[0])}{(suffix.Length > 0 ? " " + suffix : "")}".Trim();
                        SetOverrideValue(record, field, result);
                        break;
                    }

                    case "regex":
                    {
                        var pattern = OverrideValueAsString(values[0]);
                        var bogusFormat = Regex.Replace(pattern, @"\[0-9\]\{(\d+)\}", m =>
                        {
                            var len = int.Parse(m.Groups[1].Value);
                            return new string('#', len);
                        });
                        bogusFormat = bogusFormat.TrimStart('^').TrimEnd('$');
                        SetOverrideValue(record, field, faker.Phone.PhoneNumber(bogusFormat));
                        break;
                    }
                }
            }
        }

        private static object ConvertOverrideValue(JsonElement value, bool parseNumericStrings = false)
        {
            switch (value.ValueKind)
            {
                case JsonValueKind.String:
                {
                    var text = value.GetString() ?? "";
                    return parseNumericStrings && int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsedIntValue)
                        ? parsedIntValue
                        : text;
                }

                case JsonValueKind.Number:
                    if (value.TryGetInt32(out var numberIntValue))
                        return numberIntValue;
                    if (value.TryGetInt64(out var longValue))
                        return longValue;
                    if (value.TryGetDecimal(out var decimalValue))
                        return decimalValue;
                    return value.GetDouble();

                case JsonValueKind.True:
                    return true;

                case JsonValueKind.False:
                    return false;

                case JsonValueKind.Null:
                case JsonValueKind.Undefined:
                    return null;

                default:
                    return value.GetRawText();
            }
        }

        private static string OverrideValueAsString(JsonElement value) =>
            value.ValueKind == JsonValueKind.String
                ? value.GetString() ?? ""
                : value.GetRawText();

        private static void SetOverrideValue(Dictionary<string, object> record, string field, object value)
        {
            var atIndex = field.IndexOf('@');
            if (atIndex > 0)
            {
                var polymorphicPrefix = field[..(atIndex + 1)];
                foreach (var key in record.Keys.Where(k => k.StartsWith(polymorphicPrefix, StringComparison.OrdinalIgnoreCase)).ToList())
                    record.Remove(key);
            }

            record[field] = value;
        }

        private object GenerateValue(
            Faker faker,
            string entityName,
            AttributeMetadata attr,
            Dictionary<string, List<Guid>> lookupPools,
            DateTime fromDt, DateTime toDt,
            List<string> warnings)
        {
            switch (attr)
            {
                case StringAttributeMetadata strAttr:
                    return GenerateStringValue(faker, entityName, strAttr.LogicalName, strAttr.MaxLength ?? 100);

                case MemoAttributeMetadata memoAttr:
                {
                    var text = faker.Lorem.Paragraph();
                    var maxLen = memoAttr.MaxLength ?? 2000;
                    return text.Length > maxLen ? text[..maxLen] : text;
                }

                case IntegerAttributeMetadata intAttr:
                {
                    var min = intAttr.MinValue ?? 0;
                    var max = intAttr.MaxValue ?? 2147483647;
                    if (min > max) max = min;
                    return faker.Random.Int(min, max);
                }

                case BigIntAttributeMetadata bigAttr:
                {
                    var min = bigAttr.MinValue ?? 0L;
                    var max = bigAttr.MaxValue ?? long.MaxValue;
                    if (min > max) max = min;
                    return faker.Random.Long(min, max);
                }

                case DecimalAttributeMetadata decAttr:
                {
                    var min = (double)(decAttr.MinValue ?? 0m);
                    var max = (double)(decAttr.MaxValue ?? 1000000m);
                    if (min > max) max = min;
                    return Math.Round((decimal)faker.Random.Double(min, max), decAttr.Precision ?? 2);
                }

                case DoubleAttributeMetadata dblAttr:
                {
                    var min = dblAttr.MinValue ?? 0.0;
                    var max = dblAttr.MaxValue ?? 1000000.0;
                    if (min > max) max = min;
                    return faker.Random.Double(min, max);
                }

                case MoneyAttributeMetadata moneyAttr:
                {
                    var min = moneyAttr.MinValue ?? 0.0;
                    var max = moneyAttr.MaxValue ?? 1000000.0;
                    if (min > max) max = min;
                    return Math.Round((decimal)faker.Random.Double(min, max), moneyAttr.Precision ?? 2);
                }

                case BooleanAttributeMetadata:
                    return faker.Random.Bool();

                case DateTimeAttributeMetadata:
                    return faker.Date.Between(fromDt, toDt).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ");

                case PicklistAttributeMetadata picklist:
                {
                    var options = picklist.OptionSet?.Options?.Where(o => o.Value.HasValue).ToArray();
                    if (options == null || options.Length == 0)
                    {
                        warnings.Add($"Picklist '{attr.LogicalName}' has no options — skipped.");
                        return null;
                    }
                    return faker.PickRandom(options).Value.Value;
                }

                case MultiSelectPicklistAttributeMetadata multi:
                {
                    var options = multi.OptionSet?.Options?.Where(o => o.Value.HasValue).ToArray();
                    if (options == null || options.Length == 0)
                    {
                        warnings.Add($"MultiSelect '{attr.LogicalName}' has no options — skipped.");
                        return null;
                    }
                    var pickCount = Math.Min(faker.Random.Int(1, 3), options.Length);
                    return faker.PickRandom(options, pickCount).Select(o => o.Value.Value).ToList();
                }

                case LookupAttributeMetadata lookup:
                    return GenerateLookupValue(faker, lookup, lookupPools, warnings);

                default:
                    warnings.Add($"Skipped field '{attr.LogicalName}': unsupported type {attr.GetType().Name}");
                    return null;
            }
        }

        private static object GenerateLookupValue(
            Faker faker,
            LookupAttributeMetadata lookup,
            Dictionary<string, List<Guid>> lookupPools,
            List<string> warnings)
        {
            var targets = lookup.Targets ?? Array.Empty<string>();
            var availableTargets = targets.Where(t => lookupPools.TryGetValue(t, out var pool) && pool.Count > 0).ToList();

            if (availableTargets.Count == 0)
                return null;

            var target = faker.PickRandom(availableTargets);
            var pool = lookupPools[target];
            var guid = faker.PickRandom(pool);

            if (targets.Length > 1)
                return new Dictionary<string, object> { [$"{lookup.LogicalName}@{target}"] = guid.ToString() };

            return guid.ToString();
        }

        // ── Smart string mapping ─────────────────────────────────────────

        private static string GenerateStringValue(Faker faker, string entityName, string logicalName, int maxLength)
        {
            string value;

            if (logicalName.Contains("emailaddress") || logicalName.Contains("email"))
                value = faker.Internet.Email();
            else if (logicalName.Contains("telephone") || logicalName.Contains("phone") || logicalName.Contains("fax"))
                value = faker.Phone.PhoneNumber();
            else if (logicalName.Contains("websiteurl") || logicalName.Contains("website"))
                value = faker.Internet.Url();
            else if (logicalName.Contains("firstname"))
                value = faker.Name.FirstName();
            else if (logicalName.Contains("lastname"))
                value = faker.Name.LastName();
            else if (logicalName.Contains("fullname"))
                value = faker.Name.FullName();
            else if (logicalName == "name" && entityName == "account")
                value = faker.Company.CompanyName();
            else if (logicalName.Contains("companyname") || (logicalName == "name" && entityName != "contact"))
                value = faker.Company.CompanyName();
            else if (logicalName.Contains("city"))
                value = faker.Address.City();
            else if (logicalName.Contains("stateorprovince") || logicalName.Contains("stateprovince"))
                value = faker.Address.State();
            else if (logicalName.Contains("country"))
                value = faker.Address.Country();
            else if (logicalName.Contains("postalcode") || logicalName.Contains("zip"))
                value = faker.Address.ZipCode();
            else if (logicalName.Contains("line1") || logicalName.Contains("street"))
                value = faker.Address.StreetAddress();
            else if (logicalName.Contains("line2"))
                value = faker.Address.SecondaryAddress();
            else if (logicalName.Contains("jobtitle"))
                value = faker.Name.JobTitle();
            else if (logicalName.Contains("department"))
                value = faker.Commerce.Department();
            else if (logicalName.Contains("description"))
                value = faker.Lorem.Sentence(10);
            else if (logicalName.Contains("subject"))
                value = faker.Lorem.Sentence(5);
            else if (logicalName.Contains("accountnumber") || logicalName.Contains("code") || logicalName.Contains("number"))
                value = faker.Random.AlphaNumeric(8).ToUpper();
            else
                value = faker.Lorem.Word();

            return value.Length > maxLength ? value[..maxLength] : value;
        }

        // ── Metadata and lookup pool ─────────────────────────────────────

        private EntityMetadata LoadEntityMetadata(string entityName)
        {
            return MetadataCache.GetOrAdd(entityName, name =>
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = name,
                    EntityFilters = EntityFilters.Attributes
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                return response.EntityMetadata;
            });
        }

        private List<Guid> FetchLookupPool(string targetEntity)
        {
            return LookupPoolCache.GetOrAdd(targetEntity, target =>
            {
                // Check if entity has statecode attribute before adding filter
                var hasStateCode = false;
                try
                {
                    var meta = LoadEntityMetadata(target);
                    hasStateCode = meta.Attributes.Any(a => a.LogicalName == "statecode");
                }
                catch
                {
                    // If metadata load fails, skip statecode filter
                }

                var filterClause = hasStateCode
                    ? "<filter><condition attribute='statecode' operator='eq' value='0'/></filter>"
                    : "";

                var fetchXml = $@"<fetch top='{LookupPoolSize}'>
  <entity name='{target}'>
    <attribute name='{target}id'/>
    {filterClause}
    <order attribute='modifiedon' descending='true'/>
  </entity>
</fetch>";
                var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return results.Entities.Select(e => e.Id).ToList();
            });
        }

        // ── Helpers ──────────────────────────────────────────────────────
    }
}
