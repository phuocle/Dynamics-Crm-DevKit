using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class CompactFormatter
    {
        public static string FormatEntitySummaryTable(IEnumerable<EntityMetadata> entities)
        {
            var list = entities.ToList();
            var sb = new StringBuilder(list.Count * 80 + 128);
            sb.AppendLine($"[Entities] {list.Count} total");
            sb.AppendLine();
            sb.AppendLine("LogicalName\tDisplayName\tOwnershipType\tIsCustom\tIsActivity");
            foreach (var e in list)
            {
                var display = e.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var ownership = e.OwnershipType?.ToString() ?? "";
                var isCustom = e.IsCustomEntity == true ? "Yes" : "No";
                var isActivity = e.IsActivity == true ? "Yes" : "No";
                sb.AppendLine($"{e.LogicalName}\t{display}\t{ownership}\t{isCustom}\t{isActivity}");
            }
            return sb.ToString();
        }

        public static string FormatEntityDetail(EntityMetadata meta, string prefixFilter)
        {
            var hasPrefix = !string.IsNullOrEmpty(prefixFilter);
            var attrCount = hasPrefix
                ? meta.Attributes.Count(a => a.LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                : meta.Attributes.Length;

            var sb = new StringBuilder(attrCount * 80 + 2048);

            AppendEntitySummary(sb, meta);
            AppendAttributes(sb, meta, prefixFilter, hasPrefix);
            AppendOneToManyRelationships(sb, meta.OneToManyRelationships, prefixFilter, hasPrefix);
            AppendManyToOneRelationships(sb, meta.ManyToOneRelationships, prefixFilter, hasPrefix);
            AppendManyToManyRelationships(sb, meta.ManyToManyRelationships, prefixFilter, hasPrefix);
            AppendKeys(sb, meta.Keys);

            return sb.ToString();
        }

        public static string FormatOptionSetList(IEnumerable<OptionSetMetadataBase> optionSets)
        {
            var list = optionSets.ToList();
            var sb = new StringBuilder(list.Count * 60 + 128);
            sb.AppendLine($"[Global Option Sets] {list.Count} total");
            sb.AppendLine();
            sb.AppendLine("Name\tDisplayName\tType\tIsGlobal");
            foreach (var os in list)
            {
                var display = os.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var type = os.OptionSetType?.ToString() ?? "";
                var isGlobal = os.IsGlobal == true ? "Yes" : "No";
                sb.AppendLine($"{os.Name}\t{display}\t{type}\t{isGlobal}");
            }
            return sb.ToString();
        }

        public static string FormatOptionSetDetail(OptionSetMetadataBase optionSet)
        {
            var sb = new StringBuilder(512);
            var display = optionSet.DisplayName?.UserLocalizedLabel?.Label ?? optionSet.Name;

            sb.AppendLine($"[{optionSet.Name}] {display}");
            sb.AppendLine($"Type: {optionSet.OptionSetType}");
            sb.AppendLine($"IsGlobal: {optionSet.IsGlobal}");

            var description = optionSet.Description?.UserLocalizedLabel?.Label;
            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"Description: {description}");

            sb.AppendLine();

            if (optionSet is BooleanOptionSetMetadata boolOs)
            {
                sb.AppendLine("[Options] 2 total");
                sb.AppendLine();
                sb.AppendLine("Value\tLabel");
                sb.AppendLine($"{boolOs.TrueOption?.Value}\t{boolOs.TrueOption?.Label?.UserLocalizedLabel?.Label}");
                sb.AppendLine($"{boolOs.FalseOption?.Value}\t{boolOs.FalseOption?.Label?.UserLocalizedLabel?.Label}");
            }
            else if (optionSet is OptionSetMetadata osm)
            {
                if (osm.Options?.Count > 0)
                {
                    sb.AppendLine($"[Options] {osm.Options.Count} total");
                    sb.AppendLine();
                    sb.AppendLine("Value\tLabel\tDescription\tColor");
                    foreach (var o in osm.Options.OrderBy(x => x.Value))
                    {
                        var label = o.Label?.UserLocalizedLabel?.Label ?? "";
                        var desc = o.Description?.UserLocalizedLabel?.Label ?? "";
                        var color = o.Color ?? "";
                        sb.AppendLine($"{o.Value}\t{label}\t{desc}\t{color}");
                    }
                }
                else
                {
                    sb.AppendLine("[Options] 0 total");
                }
            }

            return sb.ToString();
        }

        public static string FormatMessages(
            string scope,
            IEnumerable<string> sdkMessages,
            IEnumerable<string> customActions)
        {
            var sdk = DistinctSorted(sdkMessages);
            var actions = DistinctSorted(customActions);

            var sb = new StringBuilder(1024);
            sb.AppendLine($"[Messages for {scope}]");

            if (sdk.Count > 0)
                sb.AppendLine($"SDK Messages: {sdk.Count}");
            if (actions.Count > 0)
                sb.AppendLine($"Custom Actions: {actions.Count}");

            sb.AppendLine();

            if (sdk.Count > 0)
            {
                sb.AppendLine("[SDK Messages]");
                foreach (var m in sdk)
                    sb.AppendLine($"- {m}");
                sb.AppendLine();
            }

            if (actions.Count > 0)
            {
                sb.AppendLine("[Custom Actions]");
                foreach (var m in actions)
                    sb.AppendLine($"- {m}");
                sb.AppendLine();
            }

            return sb.ToString();
        }

        public static string FormatFetchXmlResults(
            IEnumerable<Dictionary<string, string>> records,
            int totalReturned,
            bool hasMore)
        {
            var list = records.ToList();
            var sb = new StringBuilder(list.Count * 120 + 256);

            if (list.Count == 0)
            {
                sb.AppendLine($"0 records (more: {(hasMore ? "yes" : "no")})");
                return sb.ToString();
            }

            var allKeys = list
                .SelectMany(r => r.Keys)
                .Distinct()
                .OrderBy(k => k)
                .ToList();

            // If all _entity values are the same, omit _entity column and include in header
            string singleEntity = null;
            if (allKeys.Contains("_entity"))
            {
                var entityValues = list
                    .Select(r => r.TryGetValue("_entity", out var v) ? v : null)
                    .Where(v => v != null)
                    .Distinct()
                    .ToList();

                if (entityValues.Count == 1)
                {
                    singleEntity = entityValues[0];
                    allKeys.Remove("_entity");
                }
            }

            var recordWord = totalReturned == 1 ? "record" : "records";
            if (singleEntity != null)
                sb.AppendLine($"{totalReturned} {singleEntity} {recordWord} (more: {(hasMore ? "yes" : "no")})");
            else
                sb.AppendLine($"{totalReturned} {recordWord} (more: {(hasMore ? "yes" : "no")})");

            sb.AppendLine();
            sb.AppendLine(string.Join("\t", allKeys));

            foreach (var record in list)
            {
                sb.AppendLine(string.Join("\t", allKeys.Select(k =>
                    record.TryGetValue(k, out var v) ? EscapeTab(v ?? "") : "")));
            }

            return sb.ToString();
        }

        // ── Private helpers ──────────────────────────────────────────────────────

        private static void AppendEntitySummary(StringBuilder sb, EntityMetadata meta)
        {
            var displayName = meta.DisplayName?.UserLocalizedLabel?.Label ?? meta.LogicalName;

            sb.AppendLine($"[{meta.LogicalName}] {displayName}");
            sb.AppendLine($"PrimaryId: {meta.PrimaryIdAttribute}");
            sb.AppendLine($"PrimaryName: {meta.PrimaryNameAttribute ?? "(none)"}");
            sb.AppendLine($"EntitySetName: {meta.EntitySetName}");
            sb.AppendLine($"LogicalCollectionName: {meta.LogicalCollectionName}");
            var displayCollectionName = meta.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "";
            if (!string.IsNullOrEmpty(displayCollectionName))
                sb.AppendLine($"DisplayCollectionName: {displayCollectionName}");
            var externalName = meta.ExternalName ?? "";
            if (!string.IsNullOrEmpty(externalName))
                sb.AppendLine($"ExternalName: {externalName}");
            sb.AppendLine($"OwnershipType: {meta.OwnershipType}");
            sb.AppendLine($"IsActivity: {meta.IsActivity}");
            sb.AppendLine($"IsCustomEntity: {meta.IsCustomEntity}");
            sb.AppendLine($"ObjectTypeCode: {meta.ObjectTypeCode}");
            sb.AppendLine($"TotalAttributes: {meta.Attributes.Length}");
            sb.AppendLine();
        }

        private static void AppendAttributes(StringBuilder sb, EntityMetadata meta, string prefix, bool hasPrefix)
        {
            var attrs = meta.Attributes
                .Where(a => a.AttributeOf == null || a is ImageAttributeMetadata)
                .Where(a => !hasPrefix || a.LogicalName.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                .OrderBy(a => a.LogicalName)
                .ToArray();

            sb.AppendLine($"[Attributes] {attrs.Length}" +
                (hasPrefix ? $" (filtered: {prefix}*)" : " total"));
            sb.AppendLine();
            sb.AppendLine("LogicalName\tSchemaName\tType\tRequired\tCreate\tUpdate\tConstraints\tDisplayName");

            foreach (var a in attrs)
            {
                var schemaName = a.SchemaName ?? "";
                var type = FormatAttributeType(a);
                var required = a.RequiredLevel?.Value switch
                {
                    AttributeRequiredLevel.ApplicationRequired => "Required",
                    AttributeRequiredLevel.Recommended => "Recommended",
                    _ => ""
                };
                var canCreate = a.IsValidForCreate == true;
                var canUpdate = a.IsValidForUpdate == true;
                // Sparse: if both Create and Update are true (common case), show nothing to save tokens
                // Only show when restricted (one or neither)
                string createCol = "", updateCol = "";
                if (!(canCreate && canUpdate))
                {
                    createCol = canCreate ? "Yes" : "";
                    updateCol = canUpdate ? "Yes" : "";
                }
                var constraints = FormatConstraints(a);
                var display = a.DisplayName?.UserLocalizedLabel?.Label ?? "";

                sb.AppendLine($"{a.LogicalName}\t{schemaName}\t{type}\t{required}\t{createCol}\t{updateCol}\t{constraints}\t{display}");
            }

            sb.AppendLine();
        }

        private static string FormatAttributeType(AttributeMetadata attr) => attr switch
        {
            LookupAttributeMetadata lk => FormatLookupType(lk),
            PicklistAttributeMetadata { OptionSet.Options: not null } pk =>
                $"Picklist ({FormatOptionsWithLimit(pk.OptionSet.Options)})",
            StatusAttributeMetadata { OptionSet.Options: not null } st =>
                $"Status ({FormatOptionsWithLimit(st.OptionSet.Options)})",
            StateAttributeMetadata { OptionSet.Options: not null } sa =>
                $"State ({FormatOptionsWithLimit(sa.OptionSet.Options)})",
            MultiSelectPicklistAttributeMetadata { OptionSet.Options: not null } mp =>
                $"MultiSelect ({FormatOptionsWithLimit(mp.OptionSet.Options)})",
            ImageAttributeMetadata => "Image",
            FileAttributeMetadata => "File",
            _ => attr.AttributeType?.ToString() ?? "Unknown"
        };

        // Distinguish single Lookup vs Customer vs Polymorphic so the type string
        // matches upsert_column's `attribute_type` enum and AI can clone the column
        // back without guessing. Targets detail is exposed via TableAttributeEntry.LookupTargets.
        private static string FormatLookupType(LookupAttributeMetadata lk)
        {
            var typeName = lk.AttributeTypeName?.Value;
            if (string.Equals(typeName, "CustomerType", StringComparison.OrdinalIgnoreCase))
                return "Customer";
            var targets = lk.Targets ?? [];
            if (targets.Length > 1)
                return "Polymorphic";
            return "Lookup";
        }

        private const int MaxInlineOptions = 10;

        private static string FormatOptionsWithLimit(IEnumerable<OptionMetadata> options)
        {
            var list = options.ToList();
            var shown = string.Join("; ", list.Take(MaxInlineOptions).Select(FormatOption));
            return list.Count > MaxInlineOptions
                ? $"{shown}; +{list.Count - MaxInlineOptions} more"
                : shown;
        }

        private static string FormatConstraints(AttributeMetadata attr) => attr switch
        {
            StringAttributeMetadata s => s.FormatName?.Value is not null and not "Text"
                ? $"MaxLen={s.MaxLength} {s.FormatName.Value}"
                : $"MaxLen={s.MaxLength}",
            MemoAttributeMetadata m => m.FormatName?.Value is not null and not "Text"
                ? $"MaxLen={m.MaxLength} {m.FormatName.Value}"
                : $"MaxLen={m.MaxLength}",
            IntegerAttributeMetadata i => i.Format is not null and not IntegerFormat.None
                ? $"[{i.MinValue}..{i.MaxValue}] {i.Format}"
                : $"[{i.MinValue}..{i.MaxValue}]",
            DoubleAttributeMetadata d => $"[{d.MinValue}..{d.MaxValue}] P={d.Precision}",
            DecimalAttributeMetadata dc => $"[{dc.MinValue}..{dc.MaxValue}] P={dc.Precision}",
            MoneyAttributeMetadata mn => $"[{mn.MinValue}..{mn.MaxValue}] P={mn.Precision}",
            DateTimeAttributeMetadata dt => $"{dt.DateTimeBehavior?.Value} {dt.Format}".Trim(),
            BooleanAttributeMetadata b when b.OptionSet is not null =>
                $"True={b.OptionSet.TrueOption?.Label?.UserLocalizedLabel?.Label}; False={b.OptionSet.FalseOption?.Label?.UserLocalizedLabel?.Label}",
            ImageAttributeMetadata img => $"MaxH={img.MaxHeight} MaxW={img.MaxWidth} MaxKB={img.MaxSizeInKB}",
            FileAttributeMetadata file => $"MaxKB={file.MaxSizeInKB}",
            _ => ""
        };

        private static string FormatOption(OptionMetadata o) =>
            $"{o.Value}={o.Label?.UserLocalizedLabel?.Label}";

        private static void AppendOneToManyRelationships(
            StringBuilder sb, OneToManyRelationshipMetadata[] rels, string prefix, bool hasPrefix)
        {
            if (rels is not { Length: > 0 }) return;

            var filtered = rels
                .Where(r => !hasPrefix || r.ReferencingEntity.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                .OrderBy(r => r.ReferencingEntity)
                .ToArray();

            if (filtered.Length == 0) return;

            sb.AppendLine($"[1:N Relationships] {filtered.Length}" +
                (hasPrefix ? $" (filtered: {prefix}*)" : " total"));
            sb.AppendLine();
            sb.AppendLine("ChildEntity\tChildLookupField\tSchemaName");
            foreach (var r in filtered)
                sb.AppendLine($"{r.ReferencingEntity}\t{r.ReferencingAttribute}\t{r.SchemaName}");
            sb.AppendLine();
        }

        private static void AppendManyToOneRelationships(
            StringBuilder sb, OneToManyRelationshipMetadata[] rels, string prefix, bool hasPrefix)
        {
            if (rels is not { Length: > 0 }) return;

            var filtered = rels
                .Where(r => !hasPrefix || r.ReferencedEntity.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                .OrderBy(r => r.ReferencedEntity)
                .ToArray();

            if (filtered.Length == 0) return;

            sb.AppendLine($"[N:1 Relationships] {filtered.Length}" +
                (hasPrefix ? $" (filtered: {prefix}*)" : " total"));
            sb.AppendLine();
            sb.AppendLine("ParentEntity\tLookupField\tSchemaName");
            foreach (var r in filtered)
                sb.AppendLine($"{r.ReferencedEntity}\t{r.ReferencingAttribute}\t{r.SchemaName}");
            sb.AppendLine();
        }

        private static void AppendManyToManyRelationships(
            StringBuilder sb, ManyToManyRelationshipMetadata[] rels, string prefix, bool hasPrefix)
        {
            if (rels is not { Length: > 0 }) return;

            var filtered = rels
                .Where(r => !hasPrefix ||
                    r.Entity1LogicalName.StartsWith(prefix, StringComparison.OrdinalIgnoreCase) ||
                    r.Entity2LogicalName.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                .OrderBy(r => r.IntersectEntityName)
                .ToArray();

            if (filtered.Length == 0) return;

            sb.AppendLine($"[N:N Relationships] {filtered.Length}" +
                (hasPrefix ? $" (filtered: {prefix}*)" : " total"));
            sb.AppendLine();
            sb.AppendLine("IntersectEntity\tEntity1\tEntity2\tSchemaName");
            foreach (var r in filtered)
                sb.AppendLine($"{r.IntersectEntityName}\t{r.Entity1LogicalName}\t{r.Entity2LogicalName}\t{r.SchemaName}");
            sb.AppendLine();
        }

        private static void AppendKeys(StringBuilder sb, EntityKeyMetadata[] keys)
        {
            if (keys is not { Length: > 0 }) return;

            sb.AppendLine($"[Alternate Keys] {keys.Length} total");
            sb.AppendLine();
            sb.AppendLine("SchemaName\tDisplayName\tKeyAttributes");
            foreach (var k in keys.OrderBy(k => k.SchemaName))
            {
                var display = k.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var attrs = string.Join(", ", k.KeyAttributes ?? []);
                sb.AppendLine($"{k.SchemaName}\t{display}\t{attrs}");
            }
            sb.AppendLine();
        }

        private static List<string> DistinctSorted(IEnumerable<string> values)
        {
            return (values ?? [])
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .OrderBy(x => x)
                .ToList();
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");
    }
}
