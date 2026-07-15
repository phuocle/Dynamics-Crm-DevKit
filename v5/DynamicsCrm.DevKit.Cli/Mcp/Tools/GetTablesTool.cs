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
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetTablesTool
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
            "Dataverse entity metadata. entity_name empty = list (filter by keyword/custom_only/names; includes IsAuditEnabled). Set = detail (attributes, relationships, alternate keys).\n\n" +

            "WHEN TO USE:\n" +
            "- Discover entity/attribute names before building FetchXML\n" +
            "- Find join columns, picklist options, required fields, primary key\n" +
            "- Audit settings on a set of entities (use names= with solution entity list)\n\n" +

            "MODE/CONVENTION:\n" +
            "- names= filters by exact logical-name list; filter= uses contains (list) or prefix (detail).")]
        public async Task<CallToolResult> get_tables(
            [Description("Logical name → detail mode. Empty = list mode."
            )] string entity_name = "",
            [Description("LIST: keyword filter on entity. DETAIL: prefix filter on attributes/relationships."
            )] string filter = "",
            [Description("LIST: only custom entities.")] bool custom_only = false,
            [Description("LIST: include N:N intersect entities.")] bool include_intersect = false,
            [Description("LIST: comma-separated logical names. Overrides filter/custom_only."
            )] string names = "")
        {
            try
            {
                var trimmedFilter = string.IsNullOrWhiteSpace(filter) ? "" : filter.Trim();
                if (!string.IsNullOrWhiteSpace(entity_name))
                    return await GetEntityDetail(entity_name.Trim(), trimmedFilter);

                return await ListAllEntities(trimmedFilter, custom_only, include_intersect, names);
            }
            catch (Exception ex)
            {
                var target = string.IsNullOrWhiteSpace(entity_name) ? "entities metadata" : $"metadata for '{entity_name}'";
                return ErrorResult($"Error: Failed to load {target}: {ex.Message}");
            }
        }

        private async Task<CallToolResult> GetEntityDetail(string entityName, string attributePrefix)
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
                return ErrorResult($"Error: {resolved.Error}");

            var logicalName = resolved.Value.LogicalName;
            var metadata = await _metadataService.FetchEntityMetadataAsync(logicalName);
            var structured = new GetTablesResult
            {
                Mode = "detail",
                EntityName = logicalName,
                Filter = string.IsNullOrWhiteSpace(attributePrefix) ? null : attributePrefix,
                Count = 1,
                Table = BuildTableDetail(metadata, attributePrefix)
            };
            return StructuredResult(CompactFormatter.FormatEntityDetail(metadata, attributePrefix), structured);
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
            return StructuredResult(CompactFormatter.FormatEntitySummaryTable(sorted), structured);
        }

        private static TableSummaryEntry BuildTableSummary(EntityMetadata metadata) => new()
        {
            LogicalName = metadata.LogicalName,
            DisplayName = metadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
            OwnershipType = metadata.OwnershipType?.ToString() ?? "",
            IsCustom = metadata.IsCustomEntity == true,
            IsActivity = metadata.IsActivity == true,
            IsAuditEnabled = metadata.IsAuditEnabled?.Value == true
        };

        private static TableDetailEntry BuildTableDetail(EntityMetadata metadata, string prefixFilter)
        {
            var hasPrefix = !string.IsNullOrEmpty(prefixFilter);
            var summary = BuildTableSummary(metadata);
            return new TableDetailEntry
            {
                LogicalName = summary.LogicalName,
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
                Attributes = FilterAttributesForOutput(metadata.Attributes, prefixFilter, hasPrefix)
                    .OrderBy(a => a.LogicalName)
                    .Select(BuildAttribute)
                    .ToList(),
                OneToManyRelationships = (metadata.OneToManyRelationships ?? [])
                    .Where(r => !hasPrefix || r.ReferencingEntity.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.ReferencingEntity)
                    .Select(BuildRelationship)
                    .ToList(),
                ManyToOneRelationships = (metadata.ManyToOneRelationships ?? [])
                    .Where(r => !hasPrefix || r.ReferencedEntity.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.ReferencedEntity)
                    .Select(BuildRelationship)
                    .ToList(),
                ManyToManyRelationships = (metadata.ManyToManyRelationships ?? [])
                    .Where(r => !hasPrefix ||
                        r.Entity1LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase) ||
                        r.Entity2LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
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
            AttributeMetadata[] attributes, string prefixFilter, bool hasPrefix)
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

                if (hasPrefix && !a.LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
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

        private static TableAttributeEntry BuildAttribute(AttributeMetadata attribute)
        {
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
                Description = attribute.Description?.UserLocalizedLabel?.Label,
                IsAuditEnabled = attribute.IsAuditEnabled?.Value,
                SourceType = ResolveSourceTypeInfo(attribute)
            };

            PopulateAttributeDetails(entry, attribute);
            PopulateFormulaInfo(entry, attribute);
            return entry;
        }

        private static string ResolveSourceTypeInfo(AttributeMetadata attribute)
        {
            // AttributeMetadata.SourceType: null/0 = Simple, 1 = Calculated, 2 = Rollup, 3 = Power Fx
            return attribute.SourceType switch
            {
                1 => "Calculated",
                2 => "Rollup",
                3 => "PowerFx",
                0 => "Simple",
                null => null,
                _ => $"SourceType{attribute.SourceType}"
            };
        }

        private static void PopulateFormulaInfo(TableAttributeEntry entry, AttributeMetadata attribute)
        {
            if (attribute.SourceType != 1 && attribute.SourceType != 2 && attribute.SourceType != 3)
                return;

            var propInfo = attribute.GetType().GetProperty("FormulaDefinition");
            if (propInfo == null) return;

            var val = propInfo.GetValue(attribute, null);
            if (val == null) return;

            var raw = val.ToString();
            if (string.IsNullOrWhiteSpace(raw)) return;

            // Calculated/Rollup formulas are stored as XAML (XML workflow definition).
            // Power Fx formulas are stored as plain Power Fx text.
            if (attribute.SourceType == 3 || (!raw.Contains("<?xml") && !raw.Contains("<Activity")))
            {
                entry.Formula = raw.Replace("\r\n", " ").Replace("\n", " ").Replace("  ", " ").Trim();
            }
            else
            {
                entry.Formula = ParseFormulaXml(raw, attribute.SourceType ?? 0);
            }
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
                    break;

                case MultiSelectPicklistAttributeMetadata mp:
                    PopulatePicklistDetails(entry, mp.OptionSet);
                    break;

                case StatusAttributeMetadata st:
                    PopulatePicklistDetails(entry, st.OptionSet);
                    break;

                case StateAttributeMetadata sa:
                    PopulatePicklistDetails(entry, sa.OptionSet);
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
            LookupAttributeMetadata lookup => $"Lookup -> {string.Join(", ", lookup.Targets ?? [])}",
            PicklistAttributeMetadata => "Picklist",
            StatusAttributeMetadata => "Status",
            StateAttributeMetadata => "State",
            MultiSelectPicklistAttributeMetadata => "MultiSelect",
            ImageAttributeMetadata => "Image",
            FileAttributeMetadata => "File",
            _ => attribute.AttributeType?.ToString() ?? "Unknown"
        };

        private static string ParseFormulaXml(string xml, int sourceType)
        {
            try
            {
                if (sourceType == 2)
                {
                    var aggMatch = Regex.Match(xml, @"ExpressionOperator""\>(?<op>Sum|Count|Min|Max|Avg)\<");
                    var aggOp = aggMatch.Success ? aggMatch.Groups["op"].Value.ToUpper() : "AGGREGATE";
                    var targetMatch = Regex.Match(xml, @"DisplayName=""(?<rel>[^""]+)""\s+Entity=""\[CreatedEntities");
                    var relatedEntity = "";
                    if (targetMatch.Success)
                    {
                        var parts = targetMatch.Groups["rel"].Value.Split('.');
                        if (parts.Length > 0) relatedEntity = parts[0];
                    }
                    var srcAttrMatch = Regex.Match(xml, @"Aggregate.*?GetEntityProperty\s+Attribute=""(?<attr>[^""]+)"".*?EntityName=""(?<ent>[^""]+)""", RegexOptions.Singleline);
                    var srcAttr = srcAttrMatch.Success ? srcAttrMatch.Groups["attr"].Value : "?";
                    var srcEnt = srcAttrMatch.Success ? srcAttrMatch.Groups["ent"].Value : relatedEntity;
                    if (!string.IsNullOrEmpty(srcEnt))
                        return $"{aggOp}({srcEnt}.{srcAttr})";
                    return $"{aggOp}({srcAttr})";
                }

                var getEntityMatches = Regex.Matches(xml, @"GetEntityProperty\s+Attribute=""(?<attr>[^""]+)""\s+Entity=""\[InputEntities\(\&quot;(?<ref>[^\&]+)\&");
                var fieldRefs = new List<string>();
                var constOperands = new List<string>();
                var constMatches = Regex.Matches(xml, @"WorkflowPropertyType\.(?<type>\w+),\s*""(?<val>[^""]+)""");
                foreach (Match cm in constMatches)
                {
                    if (cm.Groups["type"].Value == "Boolean") continue;
                    constOperands.Add(cm.Groups["val"].Value);
                }
                foreach (Match m in getEntityMatches)
                {
                    var attrName = m.Groups["attr"].Value;
                    var entityRef = m.Groups["ref"].Value;
                    if (entityRef.StartsWith("related_"))
                    {
                        var relParts = entityRef.Replace("related_", "").Split('#');
                        var lookupField = relParts.Length > 0 ? relParts[0] : "?";
                        var relEntity = relParts.Length > 1 ? relParts[1] : "?";
                        fieldRefs.Add($"{relEntity}({lookupField}).{attrName}");
                    }
                    else
                    {
                        fieldRefs.Add(attrName);
                    }
                }
                var opMatches = Regex.Matches(xml, @"ExpressionOperator""\>(?<op>Multiply|Add|Subtract|Divide)\<");
                var operators = new List<string>();
                foreach (Match om in opMatches)
                {
                    var op = om.Groups["op"].Value;
                    switch (op)
                    {
                        case "Multiply": operators.Add("*"); break;
                        case "Add": operators.Add("+"); break;
                        case "Subtract": operators.Add("-"); break;
                        case "Divide": operators.Add("/"); break;
                        default: operators.Add(op); break;
                    }
                }
                if (fieldRefs.Count == 1 && operators.Count == 0)
                    return fieldRefs[0];
                var allOperands = new List<string>();
                allOperands.AddRange(constOperands);
                allOperands.AddRange(fieldRefs);
                if (allOperands.Count >= 2 && operators.Count >= 1)
                {
                    var expr = allOperands[0];
                    for (int opIdx = 0; opIdx < operators.Count && opIdx + 1 < allOperands.Count; opIdx++)
                        expr += $" {operators[opIdx]} {allOperands[opIdx + 1]}";
                    return expr;
                }
                if (allOperands.Count > 0)
                    return string.Join(", ", allOperands);
                return "See Dataverse UI";
            }
            catch
            {
                return "See Dataverse UI";
            }
        }

        private static CallToolResult StructuredResult(string text, GetTablesResult structured) => new()
        {
            Content = [new TextContentBlock { Text = text }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
