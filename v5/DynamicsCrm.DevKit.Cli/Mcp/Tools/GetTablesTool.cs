using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetTablesTool : McpToolBase
    {
        private readonly MetadataService _metadataService;

        public GetTablesTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_tables", Title = "Inspect table metadata, columns, and relationships",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetTablesResult)),
        Description(
            "Dataverse entity metadata. entity_name empty = list. Set = detail (attributes, relationships, alternate keys). Returns structured JSON in structuredContent — AI parses and displays to user.\n\n" +

            "DETAIL LEVELS (detail_level, detail mode only):\n" +
            "- compact: Display Name, Schema Name, Logical Name, Type only (~2KB for 50 attrs)\n" +
            "- standard (default): + requiredLevel, isValidForCreate/Update, constraints, lookup targets, picklist options (no option colors, no audit/security/sortable flags, no formula/default details) (~8KB)\n" +
            "- full: all metadata including audit, formula, security, default values, option colors, description, min/max/precision/behavior (~40KB)\n\n" +

            "FILTER (detail mode):\n" +
            "- Single value: prefix match on attribute logical names (e.g. 'v5_' matches v5_name, v5_code)\n" +
            "- Multi-value (comma/pipe/semicolon separated): word-boundary match on logical name + exact match on display name (e.g. 'regarding,direction' matches regardingobjectid, directioncode; 'to' does NOT match attachmentopencount)\n\n" +

            "WHEN TO USE:\n" +
            "- Discover entity/attribute names before building FetchXML\n" +
            "- Find join columns, picklist options, required fields, primary key\n" +
            "- Audit settings on a set of entities (use names= with solution entity list, detail_level='full')\n" +
            "- Clone or copy a column from one entity to another (detail_level='full' required)\n" +
            "- AI MUST use get_tables for entity/attribute metadata — do NOT use execute_webapi with EntityDefinitions\n\n" +

            "CLONE / COPY COLUMNS:\n" +
            "- To clone or copy a column from entity B to entity C, AI MUST read the source column with detail_level='full' first.\n" +
            "- Full mode returns all metadata required by upsert_column: type, length, precision, picklist options, lookup targets, formula definition, default value, audit/security/sortable flags, etc.\n" +
            "- Compact and standard modes do NOT include enough metadata for safe cloning.\n\n" +

            "FORMULA CLONE (Calculated/Rollup/PowerFx):\n" +
            "- Formula columns expose `formulaDefinition` as `table_logical_name:column_logical_name`; raw formula XML/text is never returned.\n" +
            "- Pass this reference unchanged to upsert_column's `formula_definition`. The server retrieves the source formula and kind directly from Dataverse and rewrites them for the target column. Do not parse or construct formula content.\n" +
            "- `formula_source_type` is only needed when intentionally creating an empty formula column without `formula_definition`.\n")]
        public async Task<CallToolResult> get_tables(
            [Description("Logical name → detail mode. Empty = list mode."
            )] string entity_name = "",
            [Description("LIST: keyword filter on entity. DETAIL: single value = prefix match on logical names; comma/pipe/semicolon-separated = word-boundary match on logical name + exact match on display name."
            )] string filter = "",
            [Description("LIST: only custom entities.")] bool custom_only = false,
            [Description("LIST: include N:N intersect entities.")] bool include_intersect = false,
            [Description("LIST: comma-separated logical names. Overrides filter/custom_only."
            )] string names = "",
            [Description("DETAIL: 'compact' (Display Name, Schema Name, Logical Name, Type only), 'standard' (default, + requiredLevel, isValidForCreate/Update, constraints, lookup targets, picklist options), 'full' (all metadata including audit, formula, security, default values, option colors, description, min/max/precision/behavior)."
            )] string detail_level = "standard")
        {
            try
            {
                var trimmedFilter = string.IsNullOrWhiteSpace(filter) ? "" : filter.Trim();
                var detailLevel = (detail_level ?? "standard").Trim().ToLowerInvariant();
                if (detailLevel is not ("compact" or "standard" or "full"))
                    detailLevel = "standard";

                if (!string.IsNullOrWhiteSpace(entity_name))
                    return await GetEntityDetail(entity_name.Trim(), trimmedFilter, detailLevel);

                return await ListAllEntities(trimmedFilter, custom_only, include_intersect, names);
            }
            catch (Exception ex)
            {
                var target = string.IsNullOrWhiteSpace(entity_name) ? "entities metadata" : $"metadata for '{entity_name}'";
                return Error(
                    $"Error: Failed to load {target}: {ex.Message}",
                    "Verify the entity name with get_tables (no entity_name) and check that the connection is active.");
            }
        }

        private async Task<CallToolResult> GetEntityDetail(string entityName, string attributeFilter, string detailLevel)
        {
            var entities = await _metadataService.GetEntitiesMetadataAsync(EntityFilters.Entity);
            var candidates = entities.Select(e => new DisplayNameFirstCandidate<EntityMetadata>
            {
                Value = e,
                DisplayName = e.DisplayName?.UserLocalizedLabel?.Label,
                LogicalName = e.LogicalName,
                SchemaName = e.SchemaName,
                Id = e.MetadataId,
                Kind = "entity",
                CanonicalName = e.LogicalName
            });
            var resolved = DisplayNameFirstResolver.Resolve(
                entityName,
                candidates,
                "[AmbiguousEntity]",
                "[NotFoundEntity]",
                "Tip: Use get_tables with no entity_name to list available tables.",
                "entity_name");

            if (!resolved.IsSuccess)
                return Error($"Error: {resolved.Error}");

            var logicalName = resolved.Value.LogicalName;
            var metadata = await _metadataService.FetchEntityMetadataAsync(logicalName);
            var filterInfo = ParseDetailFilter(attributeFilter);
            var structured = new GetTablesResult
            {
                Mode = "detail",
                EntityName = logicalName,
                Filter = string.IsNullOrWhiteSpace(attributeFilter) ? null : attributeFilter,
                DetailLevel = detailLevel,
                Count = 1,
                Table = BuildTableDetail(metadata, filterInfo, detailLevel)
            };
            var attrCount = structured.Table?.Attributes?.Count ?? 0;
            var summary = $"{attrCount} attributes returned for '{logicalName}' (detail={detailLevel})";
            if (attrCount == 0 && filterInfo.HasFilter)
            {
                var suggestions = FindClosestAttributeMatches(metadata.Attributes, filterInfo, 5);
                if (suggestions.Count > 0)
                    summary += $"\nHint: filter '{attributeFilter}' matched no attributes. Did you mean: {string.Join(", ", suggestions)}?";
                else
                    summary += $"\nHint: filter '{attributeFilter}' matched no attributes. Try a broader filter or omit filter to list all attributes.";
            }
            return Success(summary, structured);
        }

        private async Task<CallToolResult> ListAllEntities(string filter, bool customOnly, bool includeIntersect, string names)
        {
            var entities = await _metadataService.GetEntitiesMetadataAsync(EntityFilters.Entity);
            var query = entities.AsEnumerable();

            if (!string.IsNullOrWhiteSpace(names))
            {
                var nameSet = names
                    .Split(new[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(n => n.Trim().ToLowerInvariant())
                    .Where(n => !string.IsNullOrEmpty(n))
                    .ToHashSet();
                query = query.Where(x => nameSet.Contains(x.LogicalName));
            }
            else
            {
                if (!includeIntersect)
                    query = query.Where(x => x.IsIntersect != true);

                if (customOnly)
                    query = query.Where(x => x.IsCustomEntity == true);

                if (!string.IsNullOrWhiteSpace(filter))
                {
                    var keyword = filter.Trim().ToLowerInvariant();
                    query = query.Where(x =>
                        (!string.IsNullOrWhiteSpace(x.LogicalName) && x.LogicalName.ToLowerInvariant().Contains(keyword)) ||
                        (!string.IsNullOrWhiteSpace(x.DisplayName?.UserLocalizedLabel?.Label) &&
                         x.DisplayName.UserLocalizedLabel.Label.ToLowerInvariant().Contains(keyword)));
                }
            }

            var sorted = query.OrderBy(x => x.LogicalName).ToList();
            var structured = new GetTablesResult
            {
                Mode = "list",
                Filter = string.IsNullOrWhiteSpace(filter) ? null : filter,
                Count = sorted.Count,
                Tables = sorted.Select(BuildTableSummary).ToList()
            };
            return Success($"{sorted.Count} entities returned", structured);
        }

        private static TableSummaryEntry BuildTableSummary(EntityMetadata metadata) => new()
        {
            LogicalName = metadata.LogicalName,
            SchemaName = metadata.SchemaName,
            DisplayName = metadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
            OwnershipType = metadata.OwnershipType?.ToString() ?? "",
            IsCustom = metadata.IsCustomEntity == true,
            IsActivity = metadata.IsActivity == true,
            IsAuditEnabled = metadata.IsAuditEnabled?.Value == true
        };

        private static TableDetailEntry BuildTableDetail(EntityMetadata metadata, DetailFilterInfo filterInfo, string detailLevel)
        {
            var summary = BuildTableSummary(metadata);
            var detail = new TableDetailEntry
            {
                LogicalName = summary.LogicalName,
                SchemaName = summary.SchemaName,
                DisplayName = summary.DisplayName,
                OwnershipType = summary.OwnershipType,
                IsCustom = summary.IsCustom,
                IsActivity = summary.IsActivity,
                IsAuditEnabled = summary.IsAuditEnabled,
                PrimaryIdAttribute = metadata.PrimaryIdAttribute,
                PrimaryNameAttribute = metadata.PrimaryNameAttribute,
                EntitySetName = metadata.EntitySetName,
                LogicalCollectionName = metadata.LogicalCollectionName,
                ObjectTypeCode = metadata.ObjectTypeCode,
                Attributes = FilterAttributesForOutput(metadata.Attributes, filterInfo)
                    .OrderBy(a => a.LogicalName)
                    .Select(attribute => BuildAttribute(metadata.LogicalName, attribute, detailLevel))
                    .ToList(),
                OneToManyRelationships = (metadata.OneToManyRelationships ?? [])
                    .Where(r => !filterInfo.HasFilter || filterInfo.IsMultiValue || r.ReferencingEntity.StartsWith(filterInfo.PrefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.ReferencingEntity)
                    .Select(BuildRelationship)
                    .ToList(),
                ManyToOneRelationships = (metadata.ManyToOneRelationships ?? [])
                    .Where(r => !filterInfo.HasFilter || filterInfo.IsMultiValue || r.ReferencedEntity.StartsWith(filterInfo.PrefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.ReferencedEntity)
                    .Select(BuildRelationship)
                    .ToList(),
                ManyToManyRelationships = (metadata.ManyToManyRelationships ?? [])
                    .Where(r => !filterInfo.HasFilter || filterInfo.IsMultiValue ||
                        r.Entity1LogicalName.StartsWith(filterInfo.PrefixFilter, StringComparison.OrdinalIgnoreCase) ||
                        r.Entity2LogicalName.StartsWith(filterInfo.PrefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.IntersectEntityName)
                    .Select(r => new TableManyToManyRelationshipEntry
                    {
                        SchemaName = r.SchemaName,
                        Entity1 = r.Entity1LogicalName,
                        Entity2 = r.Entity2LogicalName,
                        IntersectEntityName = r.IntersectEntityName
                    })
                    .ToList(),
                AlternateKeys = (metadata.Keys ?? [])
                    .OrderBy(k => k.SchemaName)
                    .Select(k => new TableKeyEntry
                    {
                        SchemaName = k.SchemaName,
                        DisplayName = k.DisplayName?.UserLocalizedLabel?.Label ?? "",
                        KeyAttributes = (k.KeyAttributes ?? []).ToList()
                    })
                    .ToList()
            };

            // Apply tier-based stripping to reduce payload
            if (detailLevel == "compact")
            {
                detail.EntitySetName = null;
                detail.LogicalCollectionName = null;
                detail.ObjectTypeCode = null;
                detail.OneToManyRelationships = null;
                detail.ManyToOneRelationships = null;
                detail.ManyToManyRelationships = null;
                detail.AlternateKeys = null;
            }
            else if (detailLevel == "standard")
            {
                detail.EntitySetName = null;
                detail.LogicalCollectionName = null;
                detail.ObjectTypeCode = null;
                detail.AlternateKeys = null;
            }

            return detail;
        }

        /// <summary>
        /// Filters attributes for output:
        /// - Excludes virtual auxiliary fields that Dataverse auto-creates for Money/Rollup columns.
        ///   These have suffixes _base (Money base-currency), _date and _state (Rollup tracking).
        ///   A field is only excluded when a matching parent field exists in the attribute set,
        ///   so user-defined columns ending in _base/_date/_state (e.g. ab_this_is_base) are kept.
        /// - Keeps ImageAttributeMetadata even when AttributeOf is set (image backing field).
        /// - Applies the optional logical-name prefix filter.
        /// </summary>
        private static IEnumerable<AttributeMetadata> FilterAttributesForOutput(
            AttributeMetadata[] attributes, DetailFilterInfo filterInfo)
        {
            var logicalNames = new HashSet<string>(
                attributes.Select(a => a.LogicalName ?? ""),
                StringComparer.OrdinalIgnoreCase);

            foreach (var a in attributes)
            {
                // Drop Dataverse auto-generated auxiliary fields first (before AttributeOf/prefix
                // checks) because some of them (e.g. rollup _date/_state) may not set AttributeOf.
                if (a is not ImageAttributeMetadata
                    && IsAutoAuxiliaryField(a.LogicalName, out var parentName)
                    && logicalNames.Contains(parentName))
                {
                    continue;
                }

                // Skip other virtual fields (AttributeOf set) unless they are image backing fields.
                if (a.AttributeOf != null && a is not ImageAttributeMetadata)
                    continue;

                if (filterInfo.HasFilter && !MatchesDetailFilter(a, filterInfo))
                    continue;

                yield return a;
            }
        }

        /// <summary>
        /// Checks whether <paramref name="logicalName"/> is a Dataverse auto-generated auxiliary field
        /// (_base for Money base currency, _date / _state for Rollup last-updated/state tracking)
        /// and returns the parent field logical name via <paramref name="parentName"/>.
        /// Only matches exact suffixes; user fields like ab_this_is_base are NOT auxiliary.
        /// Comparison is case-insensitive because LogicalName is lowercase while SchemaName uses
        /// PascalCase suffix (_Date / _State) — Dataverse normalises both to lowercase logical names.
        /// </summary>
        private static bool IsAutoAuxiliaryField(string logicalName, out string parentName)
        {
            parentName = null;
            if (string.IsNullOrEmpty(logicalName)) return false;

            if (logicalName.EndsWith("_base", StringComparison.OrdinalIgnoreCase))
            {
                parentName = logicalName.Substring(0, logicalName.Length - "_base".Length);
                return true;
            }
            if (logicalName.EndsWith("_date", StringComparison.OrdinalIgnoreCase))
            {
                parentName = logicalName.Substring(0, logicalName.Length - "_date".Length);
                return true;
            }
            if (logicalName.EndsWith("_state", StringComparison.OrdinalIgnoreCase))
            {
                parentName = logicalName.Substring(0, logicalName.Length - "_state".Length);
                return true;
            }
            return false;
        }

        // ── Detail filter helpers ────────────────────────────────────────

        private sealed record DetailFilterInfo(bool HasFilter, bool IsMultiValue, string PrefixFilter, HashSet<string> ExactValues);

        private static DetailFilterInfo ParseDetailFilter(string filter)
        {
            if (string.IsNullOrEmpty(filter))
                return new(false, false, "", null);

            if (filter.IndexOfAny([',', '|', ';']) >= 0)
            {
                var values = filter.Split([',', '|', ';'], StringSplitOptions.RemoveEmptyEntries)
                    .Select(v => v.Trim().ToLowerInvariant())
                    .Where(v => v.Length > 0)
                    .ToHashSet();
                return new(values.Count > 0, true, filter, values);
            }

            return new(true, false, filter, null);
        }

        private static bool MatchesDetailFilter(AttributeMetadata attribute, DetailFilterInfo filterInfo)
        {
            if (!filterInfo.HasFilter) return true;

            var logicalName = attribute.LogicalName ?? "";
            var schemaName = attribute.SchemaName ?? "";
            var displayName = attribute.DisplayName?.UserLocalizedLabel?.Label ?? "";

            if (filterInfo.IsMultiValue)
            {
                // Multi-value: word-boundary match on logical name, exact match on display name.
                // This lets callers use familiar fragments like "regarding" to find "regardingobjectid",
                // or "direction" to find "directioncode", without short tokens like "to" or "cc"
                // accidentally matching inside unrelated names such as "attachmentopencount" or
                // "acceptingentityid". Display name is exact-only to avoid false positives like
                // "Correlated subject changed" matching "subject".
                foreach (var value in filterInfo.ExactValues!)
                {
                    if (IsWordBoundaryMatch(logicalName, value)) return true;
                    if (displayName.Equals(value, StringComparison.OrdinalIgnoreCase)) return true;
                }
                return false;
            }

            // Single value: prefix match on logical name (e.g. "v5_" matches custom fields).
            return logicalName.StartsWith(filterInfo.PrefixFilter, StringComparison.OrdinalIgnoreCase);
        }

        private static List<string> FindClosestAttributeMatches(AttributeMetadata[] attributes, DetailFilterInfo filterInfo, int maxSuggestions)
        {
            if (attributes == null || !filterInfo.HasFilter) return [];

            var filterValues = filterInfo.IsMultiValue
                ? filterInfo.ExactValues!.ToList()
                : new List<string> { filterInfo.PrefixFilter.ToLowerInvariant() };

            var scored = attributes
                .Where(a => !string.IsNullOrEmpty(a.LogicalName))
                .Select(a =>
                {
                    var logicalName = a.LogicalName.ToLowerInvariant();
                    var schemaName = (a.SchemaName ?? "").ToLowerInvariant();
                    var displayName = (a.DisplayName?.UserLocalizedLabel?.Label ?? "").ToLowerInvariant();

                    var bestScore = filterValues.Min(value =>
                    {
                        if (logicalName.Equals(value, StringComparison.OrdinalIgnoreCase)
                            || displayName.Equals(value, StringComparison.OrdinalIgnoreCase)) return 0;
                        if (IsWordBoundaryMatch(logicalName, value)) return 1;
                        return int.MaxValue;
                    });

                    return new { a.LogicalName, Score = bestScore };
                })
                .Where(x => x.Score < int.MaxValue)
                .OrderBy(x => x.Score)
                .ThenBy(x => x.LogicalName)
                .Take(maxSuggestions)
                .Select(x => x.LogicalName)
                .ToList();

            return scored;
        }

        private static bool IsWordBoundaryMatch(string name, string value)
        {
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(value)) return false;
            if (name.Equals(value, StringComparison.OrdinalIgnoreCase)) return true;

            var lowerName = name.ToLowerInvariant();
            var lowerValue = value.ToLowerInvariant();

            for (var i = 0; i <= lowerName.Length - lowerValue.Length; i++)
            {
                if (!lowerName.Substring(i, lowerValue.Length).Equals(lowerValue, StringComparison.Ordinal))
                    continue;

                // Left boundary: start of string, after '_'/' ', or camelCase boundary (lowercase → uppercase).
                if (i > 0)
                {
                    var prev = name[i - 1];
                    var current = name[i];
                    if (prev != '_' && prev != ' ' && !(char.IsLower(prev) && char.IsUpper(current)))
                        continue;
                }

                return true;
            }

            return false;
        }

        // ── Attribute building with detail-level tiers ───────────────────

        private static TableAttributeEntry BuildAttribute(string entityLogicalName, AttributeMetadata attribute, string detailLevel)
        {
            // Compact: only identity + type
            if (detailLevel == "compact")
            {
                return new TableAttributeEntry
                {
                    LogicalName = attribute.LogicalName,
                    SchemaName = attribute.SchemaName,
                    Type = FormatAttributeType(attribute),
                    DisplayName = attribute.DisplayName?.UserLocalizedLabel?.Label ?? "",
                };
            }

            // Standard and Full: build full entry first
            var entry = new TableAttributeEntry
            {
                LogicalName = attribute.LogicalName,
                SchemaName = attribute.SchemaName,
                Type = FormatAttributeType(attribute),
                RequiredLevel = attribute.RequiredLevel?.Value switch
                {
                    AttributeRequiredLevel.ApplicationRequired => "Required",
                    AttributeRequiredLevel.Recommended => "Recommended",
                    _ => null
                },
                IsValidForCreate = attribute.IsValidForCreate == true,
                IsValidForUpdate = attribute.IsValidForUpdate == true,
                DisplayName = attribute.DisplayName?.UserLocalizedLabel?.Label ?? "",
                Description = Norm(attribute.Description?.UserLocalizedLabel?.Label),
                IsAuditEnabled = attribute.IsAuditEnabled?.Value,
                IsValidForAdvancedFind = attribute.IsValidForAdvancedFind?.Value,
                IsSecured = attribute.IsSecured,
                IsSortable = attribute.IsSortableEnabled?.Value,
                SourceType = ResolveSourceTypeInfo(attribute)
            };

            PopulateAttributeDetails(entry, attribute);
            PopulateFormulaInfo(entry, entityLogicalName, attribute);

            // Standard: strip full-only fields to reduce payload
            if (detailLevel == "standard")
            {
                entry.Description = null;
                entry.IsAuditEnabled = null;
                entry.IsValidForAdvancedFind = null;
                entry.IsSecured = null;
                entry.IsSortable = null;
                entry.SourceType = null;
                entry.DefaultValue = null;
                entry.FormulaDefinition = null;
                entry.MinValue = null;
                entry.MaxValue = null;
                entry.Precision = null;
                entry.PrecisionSource = null;
                entry.Behavior = null;
                entry.TrueLabel = null;
                entry.FalseLabel = null;
                entry.IsGlobal = null;
                entry.GlobalOptionSetName = null;
                if (entry.Options != null)
                    foreach (var o in entry.Options) o.Color = null;
            }

            return entry;
        }

        private static string ResolveSourceTypeInfo(AttributeMetadata attribute)
        {
            // AttributeMetadata.SourceType: 0/null = Simple, 1 = Calculated, 2 = Rollup, 3 = Power Fx.
            // Dataverse sets SourceType=null on system/legacy attributes (Memo, BigInt, Lookup,
            // File, Image, State, Status, ...). Treat null the same as 0 → "Simple" so the
            // `sourceType` property is ALWAYS present for every attribute (clients/AI rely on
            // it to know whether a field is plain or formula-driven; missing = ambiguous).
            return attribute.SourceType switch
            {
                1 => "Calculated",
                2 => "Rollup",
                3 => "PowerFx",
                0 => "Simple",
                null => "Simple",
                _ => $"SourceType{attribute.SourceType}"
            };
        }

        private static void PopulateFormulaInfo(TableAttributeEntry entry, string entityLogicalName, AttributeMetadata attribute)
        {
            // Only Calculated (1), Rollup (2), Power Fx (3) carry a formula.
            if (attribute.SourceType != 1 && attribute.SourceType != 2 && attribute.SourceType != 3)
                return;

            if (string.IsNullOrWhiteSpace(entityLogicalName) || string.IsNullOrWhiteSpace(attribute.LogicalName))
                return;

            // Keep raw SDK FormulaDefinition server-side. upsert_column resolves this
            // compact source reference when the caller requests a clone.
            entry.FormulaDefinition = $"{entityLogicalName}:{attribute.LogicalName}";
        }

        private static void PopulateAttributeDetails(TableAttributeEntry entry, AttributeMetadata attribute)
        {
            switch (attribute)
            {
                case StringAttributeMetadata str:
                    entry.MaxLength = str.MaxLength;
                    entry.Format = str.FormatName?.Value;
                    break;

                case MemoAttributeMetadata memo:
                    entry.MaxLength = memo.MaxLength;
                    entry.Format = memo.FormatName?.Value;
                    break;

                case IntegerAttributeMetadata i:
                    entry.MinValue = i.MinValue;
                    entry.MaxValue = i.MaxValue;
                    entry.Format = i.Format?.ToString();
                    break;

                case BigIntAttributeMetadata:
                    // No range constraints
                    break;

                case DecimalAttributeMetadata dec:
                    entry.MinValue = dec.MinValue != null ? (double?)dec.MinValue.Value : null;
                    entry.MaxValue = dec.MaxValue != null ? (double?)dec.MaxValue.Value : null;
                    entry.Precision = dec.Precision;
                    break;

                case DoubleAttributeMetadata dbl:
                    entry.MinValue = dbl.MinValue;
                    entry.MaxValue = dbl.MaxValue;
                    entry.Precision = dbl.Precision;
                    break;

                case MoneyAttributeMetadata money:
                    entry.MinValue = money.MinValue != null ? (double?)money.MinValue.Value : null;
                    entry.MaxValue = money.MaxValue != null ? (double?)money.MaxValue.Value : null;
                    entry.Precision = money.Precision;
                    entry.PrecisionSource = money.PrecisionSource;
                    break;

                case BooleanAttributeMetadata b:
                    entry.TrueLabel = b.OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label;
                    entry.FalseLabel = b.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label;
                    // Boolean default: emitted only when DefaultValue is set (null → omitted).
                    entry.DefaultValue = b.DefaultValue.HasValue ? (object)b.DefaultValue.Value : null;
                    break;

                case DateTimeAttributeMetadata dt:
                    entry.Format = dt.Format?.ToString();
                    entry.Behavior = dt.DateTimeBehavior?.Value;
                    break;

                case LookupAttributeMetadata lookup:
                    entry.LookupTargets = (lookup.Targets ?? []).ToList();
                    break;

                case PicklistAttributeMetadata pk:
                    PopulatePicklistDetails(entry, pk.OptionSet);
                    // Picklist default (DefaultFormValue): Dataverse uses -1 as the
                    // "no default" sentinel (Maker Portal assigns it on create).
                    // Normalize -1 → null so clone comparisons don't report false diffs.
                    entry.DefaultValue = pk.DefaultFormValue.HasValue && pk.DefaultFormValue.Value != -1
                        ? (object)pk.DefaultFormValue.Value : null;
                    break;

                case MultiSelectPicklistAttributeMetadata mp:
                    PopulatePicklistDetails(entry, mp.OptionSet);
                    // MultiSelectPicklist has no user-settable default value in the
                    // Power Apps UI; Dataverse always reports -1 (no default sentinel).
                    break;

                case StatusAttributeMetadata st:
                    PopulatePicklistDetails(entry, st.OptionSet);
                    // Status (statuscode) is system-managed; Dataverse exposes no
                    // user-settable default value (DefaultFormValue is always null).
                    break;

                case StateAttributeMetadata sa:
                    PopulatePicklistDetails(entry, sa.OptionSet);
                    // State (statecode) is system-managed; Dataverse exposes no default
                    // value property on StateAttributeMetadata.
                    break;

                case ImageAttributeMetadata img:
                    // No additional clone-friendly scalars for image in current upsert_column signature
                    break;

                case FileAttributeMetadata file:
                    entry.MaxLength = file.MaxSizeInKB;
                    break;
            }
        }

        private static void PopulatePicklistDetails(TableAttributeEntry entry, OptionSetMetadataBase optionSet)
        {
            if (optionSet is OptionSetMetadata osm && osm.Options != null)
            {
                entry.IsGlobal = osm.IsGlobal == true;
                if (osm.IsGlobal == true && !string.IsNullOrEmpty(osm.Name))
                    entry.GlobalOptionSetName = osm.Name;

                entry.Options = osm.Options
                    .OrderBy(o => o.Value)
                    .Select(o => new ChoiceOptionItem
                    {
                        Value = o.Value ?? 0,
                        Label = o.Label?.UserLocalizedLabel?.Label ?? "",
                        Color = o.Color
                    })
                    .ToList();
            }
        }

        private static TableRelationshipEntry BuildRelationship(OneToManyRelationshipMetadata relationship) => new()
        {
            SchemaName = relationship.SchemaName,
            ReferencedEntity = relationship.ReferencedEntity,
            ReferencingEntity = relationship.ReferencingEntity,
            ReferencingAttribute = relationship.ReferencingAttribute
        };

        private static string FormatAttributeType(AttributeMetadata attribute) => attribute switch
        {
            LookupAttributeMetadata lookup => FormatLookupType(lookup),
            PicklistAttributeMetadata => "Picklist",
            StatusAttributeMetadata => "Status",
            StateAttributeMetadata => "State",
            MultiSelectPicklistAttributeMetadata => "MultiSelect",
            ImageAttributeMetadata => "Image",
            FileAttributeMetadata => "File",
            _ => attribute.AttributeType?.ToString() ?? "Unknown"
        };

        // Distinguish single Lookup vs Customer vs Polymorphic so the type string
        // matches upsert_column's `attribute_type` enum and AI can clone the column
        // back without guessing. Targets detail is exposed via TableAttributeEntry.LookupTargets.
        private static string FormatLookupType(LookupAttributeMetadata lookup)
        {
            var typeName = lookup.AttributeTypeName?.Value;
            if (string.Equals(typeName, "CustomerType", StringComparison.OrdinalIgnoreCase))
                return "Customer";
            var targets = lookup.Targets ?? [];
            if (targets.Length > 1)
                return "Polymorphic";
            return "Lookup";
        }

        /// <summary>
        /// Normalize an SDK label string for JSON output: empty or whitespace-only
        /// values become <c>null</c> so <c>[JsonIgnore(WhenWritingNull)]</c> drops
        /// the property entirely. Dataverse frequently returns "" for unset
        /// labels/descriptions, which would otherwise serialize as "".
        /// </summary>
        private static string Norm(string value) => string.IsNullOrWhiteSpace(value) ? null : value;
    }
}
