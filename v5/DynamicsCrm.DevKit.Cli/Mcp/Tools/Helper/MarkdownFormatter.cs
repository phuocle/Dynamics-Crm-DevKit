using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class MarkdownFormatter
    {
        public static string FormatEntitySummaryTable(IEnumerable<EntityMetadata> entities)
        {
            var list = entities.ToList();
            var sb = new StringBuilder(list.Count * 120 + 256);
            sb.AppendLine($"# Entities — {list.Count}");
            sb.AppendLine();
            sb.AppendLine("| LogicalName | DisplayName | SchemaName | OwnershipType | IsCustom | IsActivity | IsAuditEnabled |");
            sb.AppendLine("| --- | --- | --- | --- | --- | --- | --- |");
            foreach (var e in list)
            {
                var display = e.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var ownership = e.OwnershipType?.ToString() ?? "";
                var isCustom = e.IsCustomEntity == true ? "Yes" : "";
                var isActivity = e.IsActivity == true ? "Yes" : "";
                var isAudit = e.IsAuditEnabled?.Value == true ? "Yes" : "";
                sb.AppendLine($"| {e.LogicalName} | {display} | {e.SchemaName} | {ownership} | {isCustom} | {isActivity} | {isAudit} |");
            }
            return sb.ToString();
        }

        public static string FormatEntityDetail(EntityMetadata meta, string prefixFilter)
        {
            var hasPrefix = !string.IsNullOrEmpty(prefixFilter);
            var attrCount = hasPrefix
                ? meta.Attributes.Count(a => a.LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                : meta.Attributes.Length;

            var sb = new StringBuilder(attrCount * 120 + 2048);

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
            var sb = new StringBuilder(list.Count * 80 + 256);
            sb.AppendLine($"# Global Option Sets — {list.Count}");
            sb.AppendLine();
            sb.AppendLine("| Name | DisplayName | Type | IsGlobal |");
            sb.AppendLine("| --- | --- | --- | --- |");
            foreach (var os in list)
            {
                var display = os.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var type = os.OptionSetType?.ToString() ?? "";
                var isGlobal = os.IsGlobal == true ? "Yes" : "";
                sb.AppendLine($"| {os.Name} | {display} | {type} | {isGlobal} |");
            }
            return sb.ToString();
        }

        public static string FormatOptionSetDetail(OptionSetMetadataBase optionSet)
        {
            var sb = new StringBuilder(512);
            var display = optionSet.DisplayName?.UserLocalizedLabel?.Label ?? optionSet.Name;
            var description = optionSet.Description?.UserLocalizedLabel?.Label;

            sb.AppendLine($"# {display} (`{optionSet.Name}`)");
            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"> {description}");
            sb.AppendLine();
            sb.AppendLine("| Property | Value |");
            sb.AppendLine("| --- | --- |");
            sb.AppendLine($"| Type | {optionSet.OptionSetType} |");
            sb.AppendLine($"| IsGlobal | {optionSet.IsGlobal} |");
            sb.AppendLine();

            if (optionSet is BooleanOptionSetMetadata boolOs)
            {
                sb.AppendLine("## Options");
                sb.AppendLine();
                sb.AppendLine("| Value | Label |");
                sb.AppendLine("| --- | --- |");
                sb.AppendLine($"| {boolOs.TrueOption?.Value} | {boolOs.TrueOption?.Label?.UserLocalizedLabel?.Label} |");
                sb.AppendLine($"| {boolOs.FalseOption?.Value} | {boolOs.FalseOption?.Label?.UserLocalizedLabel?.Label} |");
            }
            else if (optionSet is OptionSetMetadata osm && osm.Options?.Count > 0)
            {
                sb.AppendLine($"## Options — {osm.Options.Count}");
                sb.AppendLine();
                sb.AppendLine("| Value | Label | Description |");
                sb.AppendLine("| --- | --- | --- |");
                foreach (var o in osm.Options.OrderBy(x => x.Value))
                {
                    var label = o.Label?.UserLocalizedLabel?.Label ?? "";
                    var desc = o.Description?.UserLocalizedLabel?.Label ?? "";
                    sb.AppendLine($"| {o.Value} | {label} | {desc} |");
                }
            }

            return sb.ToString();
        }

        public static string FormatMessages(
            string scope,
            IEnumerable<string> sdkMessages,
            IEnumerable<string> customActions,
            IEnumerable<string> customApis)
        {
            var sdk = DistinctSorted(sdkMessages);
            var actions = DistinctSorted(customActions);
            var apis = DistinctSorted(customApis);

            var sb = new StringBuilder(1024);
            sb.AppendLine($"# Messages for `{scope}`");
            sb.AppendLine();

            sb.AppendLine("| Category | Count |");
            sb.AppendLine("| --- | --- |");
            sb.AppendLine($"| SDK Messages | {sdk.Count} |");
            sb.AppendLine($"| Custom Actions | {actions.Count} |");
            sb.AppendLine($"| Custom APIs | {apis.Count} |");
            sb.AppendLine();

            if (sdk.Count > 0)
            {
                sb.AppendLine($"## SDK Messages — {sdk.Count}");
                sb.AppendLine();
                foreach (var m in sdk)
                    sb.AppendLine($"- {m}");
                sb.AppendLine();
            }

            if (actions.Count > 0)
            {
                sb.AppendLine($"## Custom Actions — {actions.Count}");
                sb.AppendLine();
                foreach (var m in actions)
                    sb.AppendLine($"- {m}");
                sb.AppendLine();
            }

            if (apis.Count > 0)
            {
                sb.AppendLine($"## Custom APIs — {apis.Count}");
                sb.AppendLine();
                foreach (var m in apis)
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
            var sb = new StringBuilder(list.Count * 200 + 512);

            sb.AppendLine($"Returned **{totalReturned}** records (has_more: {hasMore.ToString().ToLowerInvariant()})");
            sb.AppendLine();

            if (list.Count == 0)
                return sb.ToString();

            var allKeys = list
                .SelectMany(r => r.Keys)
                .Distinct()
                .OrderBy(k => k)
                .ToList();

            sb.Append("| ");
            sb.Append(string.Join(" | ", allKeys));
            sb.AppendLine(" |");

            sb.Append("| ");
            sb.Append(string.Join(" | ", allKeys.Select(_ => "---")));
            sb.AppendLine(" |");

            foreach (var record in list)
            {
                sb.Append("| ");
                sb.Append(string.Join(" | ", allKeys.Select(k =>
                    record.TryGetValue(k, out var v) ? EscapePipe(v ?? "") : "")));
                sb.AppendLine(" |");
            }

            return sb.ToString();
        }

        private static void AppendEntitySummary(StringBuilder sb, EntityMetadata meta)
        {
            var displayName = meta.DisplayName?.UserLocalizedLabel?.Label ?? meta.LogicalName;
            var description = meta.Description?.UserLocalizedLabel?.Label;

            sb.AppendLine($"# {displayName} (`{meta.LogicalName}`)");
            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"> {description}");
            sb.AppendLine();
            sb.AppendLine("| Property | Value |");
            sb.AppendLine("| --- | --- |");
            sb.AppendLine($"| SchemaName | {meta.SchemaName} |");
            sb.AppendLine($"| PrimaryIdAttribute | {meta.PrimaryIdAttribute} |");
            sb.AppendLine($"| PrimaryNameAttribute | {meta.PrimaryNameAttribute ?? "(none)"} |");
            sb.AppendLine($"| EntitySetName | {meta.EntitySetName} |");
            sb.AppendLine($"| LogicalCollectionName | {meta.LogicalCollectionName} |");
            var displayCollectionName = meta.DisplayCollectionName?.UserLocalizedLabel?.Label ?? "";
            sb.AppendLine($"| DisplayCollectionName | {displayCollectionName} |");
            var externalName = meta.ExternalName ?? "";
            if (!string.IsNullOrEmpty(externalName))
                sb.AppendLine($"| ExternalName | {externalName} |");
            sb.AppendLine($"| OwnershipType | {meta.OwnershipType} |");
            sb.AppendLine($"| IsActivity | {meta.IsActivity} |");
            sb.AppendLine($"| IsCustomEntity | {meta.IsCustomEntity} |");
            sb.AppendLine($"| IsAuditEnabled | {meta.IsAuditEnabled?.Value} |");
            sb.AppendLine($"| ChangeTrackingEnabled | {meta.ChangeTrackingEnabled} |");
            sb.AppendLine($"| ObjectTypeCode | {meta.ObjectTypeCode} |");
            sb.AppendLine($"| TotalAttributes | {meta.Attributes.Length} |");
            sb.AppendLine();
        }

        private static void AppendAttributes(StringBuilder sb, EntityMetadata meta, string prefix, bool hasPrefix)
        {
            var attrs = meta.Attributes
                .Where(a => a.AttributeOf == null)
                .Where(a => !hasPrefix || a.LogicalName.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                .OrderBy(a => a.LogicalName)
                .ToArray();

            sb.AppendLine($"## Attributes — {attrs.Length}" +
                (hasPrefix ? $" (filtered: {prefix}*)" : ""));
            sb.AppendLine();
            sb.AppendLine("| LogicalName | SchemaName | Type | Required | Create | Update | Constraints | DisplayName |");
            sb.AppendLine("| --- | --- | --- | --- | --- | --- | --- | --- |");

            foreach (var a in attrs)
            {
                var schemaName = a.SchemaName ?? "";
                var type = FormatAttributeType(a);
                var required = a.RequiredLevel?.Value switch
                {
                    AttributeRequiredLevel.ApplicationRequired => "**Required**",
                    AttributeRequiredLevel.Recommended => "Recommended",
                    _ => ""
                };
                var canCreate = a.IsValidForCreate == true ? "Yes" : "";
                var canUpdate = a.IsValidForUpdate == true ? "Yes" : "";
                var constraints = FormatConstraints(a);
                var display = a.DisplayName?.UserLocalizedLabel?.Label ?? "";

                sb.AppendLine($"| {a.LogicalName} | {schemaName} | {type} | {required} | {canCreate} | {canUpdate} | {constraints} | {display} |");
            }

            sb.AppendLine();
        }

        private static string FormatAttributeType(AttributeMetadata attr) => attr switch
        {
            LookupAttributeMetadata lk => FormatLookupType(lk),
            PicklistAttributeMetadata { OptionSet.Options: not null } pk =>
                $"Picklist ({string.Join("; ", pk.OptionSet.Options.Take(10).Select(FormatOption))})",
            StatusAttributeMetadata { OptionSet.Options: not null } st =>
                $"Status ({string.Join("; ", st.OptionSet.Options.Take(10).Select(FormatOption))})",
            StateAttributeMetadata { OptionSet.Options: not null } sa =>
                $"State ({string.Join("; ", sa.OptionSet.Options.Take(10).Select(FormatOption))})",
            MultiSelectPicklistAttributeMetadata { OptionSet.Options: not null } mp =>
                $"MultiSelect ({string.Join("; ", mp.OptionSet.Options.Take(10).Select(FormatOption))})",
            _ => attr.AttributeType?.ToString() ?? "Unknown"
        };

        // Distinguish single Lookup vs Customer vs Polymorphic so the type string
        // matches manage_column's `attribute_type` enum and AI can clone the column
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

            sb.AppendLine($"## 1:N Relationships (this entity is parent) — {filtered.Length}");
            sb.AppendLine();
            sb.AppendLine("| ChildEntity | ChildLookupField | SchemaName |");
            sb.AppendLine("| --- | --- | --- |");
            foreach (var r in filtered)
                sb.AppendLine($"| {r.ReferencingEntity} | {r.ReferencingAttribute} | {r.SchemaName} |");
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

            sb.AppendLine($"## N:1 Relationships (this entity is child) — {filtered.Length}");
            sb.AppendLine();
            sb.AppendLine("| ParentEntity | LookupField | SchemaName |");
            sb.AppendLine("| --- | --- | --- |");
            foreach (var r in filtered)
                sb.AppendLine($"| {r.ReferencedEntity} | {r.ReferencingAttribute} | {r.SchemaName} |");
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

            sb.AppendLine($"## N:N Relationships — {filtered.Length}");
            sb.AppendLine();
            sb.AppendLine("| IntersectEntity | Entity1 | Entity2 | SchemaName |");
            sb.AppendLine("| --- | --- | --- | --- |");
            foreach (var r in filtered)
                sb.AppendLine($"| {r.IntersectEntityName} | {r.Entity1LogicalName} | {r.Entity2LogicalName} | {r.SchemaName} |");
            sb.AppendLine();
        }

        private static void AppendKeys(StringBuilder sb, EntityKeyMetadata[] keys)
        {
            if (keys is not { Length: > 0 }) return;

            sb.AppendLine($"## Alternate Keys — {keys.Length}");
            sb.AppendLine();
            sb.AppendLine("| SchemaName | DisplayName | KeyAttributes |");
            sb.AppendLine("| --- | --- | --- |");
            foreach (var k in keys.OrderBy(k => k.SchemaName))
            {
                var display = k.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var attrs = string.Join(", ", k.KeyAttributes ?? []);
                sb.AppendLine($"| {k.SchemaName} | {display} | {attrs} |");
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

        private static string EscapePipe(string value) =>
            value.Replace("|", "\\|").Replace("\n", " ").Replace("\r", "");
    }
}
