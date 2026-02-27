using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetEntityMetadataTool
    {
        private readonly ServiceClient _serviceClient;

        public GetEntityMetadataTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool, Description(
            "Retrieve ALL metadata for a Dataverse entity (table). Returns: " +
            "entity-level info (display name, schema name, ownership type, keys, etc.), " +
            "ALL attributes with full details (logical name, type, display name, required level, " +
            "valid for create/update/read, custom attribute flag, min/max values, picklist options with ALL values and labels, " +
            "lookup targets, string max length, decimal precision, etc.), " +
            "ALL relationships (1:N, N:1, N:N with full schema details). " +
            "Use this to inspect entity schema before building FetchXML queries, creating/updating records, " +
            "or understanding the data model. Use prefix_filter to narrow results for large entities.")]
        public string get_entity_metadata(
            [Description("Entity logical name (e.g. 'account', 'contact', 'msdyn_timeentry')")] string entity_name,
            [Description("Optional prefix filter for attributes (e.g. 'new_', 'msdyn_'). Leave empty for all attributes.")] string prefix_filter = "")
        {
            if (string.IsNullOrWhiteSpace(entity_name))
            {
                return "Error: entity_name is required.";
            }

            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entity_name.Trim().ToLowerInvariant(),
                    EntityFilters = EntityFilters.All
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                var metadata = response.EntityMetadata;

                var sb = new StringBuilder();

                AppendEntityInfo(sb, metadata);
                AppendAttributes(sb, metadata, prefix_filter);
                AppendOneToManyRelationships(sb, metadata, prefix_filter);
                AppendManyToOneRelationships(sb, metadata, prefix_filter);
                AppendManyToManyRelationships(sb, metadata);
                AppendKeys(sb, metadata);

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error retrieving metadata for '{entity_name}': {ex.Message}";
            }
        }

        private static void AppendEntityInfo(StringBuilder sb, EntityMetadata metadata)
        {
            sb.AppendLine($"## {metadata.LogicalName}");
            sb.AppendLine();

            if (metadata.DisplayName?.UserLocalizedLabel?.Label != null)
                sb.AppendLine($"- **Display Name**: {metadata.DisplayName.UserLocalizedLabel.Label}");
            if (metadata.SchemaName != null)
                sb.AppendLine($"- **Schema Name**: {metadata.SchemaName}");
            if (metadata.LogicalCollectionName != null)
                sb.AppendLine($"- **Collection Name**: {metadata.LogicalCollectionName}");
            if (metadata.ObjectTypeCode != null)
                sb.AppendLine($"- **Object Type Code**: {metadata.ObjectTypeCode}");
            if (metadata.PrimaryIdAttribute != null)
                sb.AppendLine($"- **Primary ID**: {metadata.PrimaryIdAttribute}");
            if (metadata.PrimaryNameAttribute != null)
                sb.AppendLine($"- **Primary Name**: {metadata.PrimaryNameAttribute}");
            if (metadata.PrimaryImageAttribute != null)
                sb.AppendLine($"- **Primary Image**: {metadata.PrimaryImageAttribute}");
            sb.AppendLine($"- **Ownership Type**: {metadata.OwnershipType}");
            sb.AppendLine($"- **Is Custom Entity**: {metadata.IsCustomEntity}");
            sb.AppendLine($"- **Is Activity**: {metadata.IsActivity}");
            sb.AppendLine($"- **Is Activity Party**: {metadata.IsActivityParty}");
            sb.AppendLine($"- **Change Tracking Enabled**: {metadata.ChangeTrackingEnabled}");
            if (metadata.Description?.UserLocalizedLabel?.Label != null)
                sb.AppendLine($"- **Description**: {metadata.Description.UserLocalizedLabel.Label}");
            if (metadata.EntitySetName != null)
                sb.AppendLine($"- **Entity Set Name (WebAPI)**: {metadata.EntitySetName}");
            sb.AppendLine($"- **Total Attributes**: {metadata.Attributes?.Length ?? 0}");
            sb.AppendLine();
        }

        private static void AppendAttributes(StringBuilder sb, EntityMetadata metadata, string prefixFilter)
        {
            var attrs = metadata.Attributes
                .Where(a => string.IsNullOrEmpty(prefixFilter) || a.LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                .OrderBy(a => a.LogicalName)
                .ToArray();

            var filterLabel = string.IsNullOrEmpty(prefixFilter)
                ? $"{attrs.Length} of {metadata.Attributes.Length} total"
                : $"{attrs.Length} matching '{prefixFilter}*'";

            sb.AppendLine($"### Attributes ({filterLabel})");
            sb.AppendLine();
            sb.AppendLine("| LogicalName | Type | DisplayName | Required | Create | Update | Read | Custom |");
            sb.AppendLine("| --- | --- | --- | --- | --- | --- | --- | --- |");

            foreach (var a in attrs)
            {
                var type = FormatAttributeType(a);
                var displayName = a.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var required = a.RequiredLevel?.Value.ToString() ?? "";
                var create = a.IsValidForCreate == true ? "Yes" : "No";
                var update = a.IsValidForUpdate == true ? "Yes" : "No";
                var read = a.IsValidForRead == true ? "Yes" : "No";
                var custom = a.IsCustomAttribute == true ? "Yes" : "";
                sb.AppendLine($"| {a.LogicalName} | {type} | {displayName} | {required} | {create} | {update} | {read} | {custom} |");
            }
        }

        private static string FormatAttributeType(AttributeMetadata a)
        {
            if (a is LookupAttributeMetadata lk && lk.Targets != null && lk.Targets.Length > 0)
                return $"Lookup -> {string.Join(", ", lk.Targets)}";

            if (a is PicklistAttributeMetadata pk && pk.OptionSet?.Options != null)
            {
                var options = pk.OptionSet.Options
                    .Select(o => $"{o.Value}={o.Label?.UserLocalizedLabel?.Label ?? "?"}");
                return $"Picklist ({string.Join("; ", options)})";
            }

            if (a is MultiSelectPicklistAttributeMetadata mspk && mspk.OptionSet?.Options != null)
            {
                var options = mspk.OptionSet.Options
                    .Select(o => $"{o.Value}={o.Label?.UserLocalizedLabel?.Label ?? "?"}");
                return $"MultiSelectPicklist ({string.Join("; ", options)})";
            }

            if (a is StatusAttributeMetadata st && st.OptionSet?.Options != null)
            {
                var options = st.OptionSet.Options
                    .Select(o =>
                    {
                        var stateValue = o is StatusOptionMetadata som ? $" [state={som.State}]" : "";
                        return $"{o.Value}={o.Label?.UserLocalizedLabel?.Label ?? "?"}{stateValue}";
                    });
                return $"Status ({string.Join("; ", options)})";
            }

            if (a is StateAttributeMetadata sa && sa.OptionSet?.Options != null)
            {
                var options = sa.OptionSet.Options
                    .Select(o => $"{o.Value}={o.Label?.UserLocalizedLabel?.Label ?? "?"}");
                return $"State ({string.Join("; ", options)})";
            }

            if (a is BooleanAttributeMetadata ba && ba.OptionSet != null)
            {
                var trueLabel = ba.OptionSet.TrueOption?.Label?.UserLocalizedLabel?.Label ?? "True";
                var falseLabel = ba.OptionSet.FalseOption?.Label?.UserLocalizedLabel?.Label ?? "False";
                return $"Boolean ({ba.OptionSet.TrueOption?.Value}={trueLabel}; {ba.OptionSet.FalseOption?.Value}={falseLabel})";
            }

            if (a is StringAttributeMetadata str)
                return $"String (max={str.MaxLength}, format={str.FormatName?.Value ?? str.Format?.ToString() ?? "Text"})";

            if (a is MemoAttributeMetadata memo)
                return $"Memo (max={memo.MaxLength}, format={memo.FormatName?.Value ?? memo.Format?.ToString() ?? "Text"})";

            if (a is MoneyAttributeMetadata money)
                return $"Money (precision={money.Precision}, min={money.MinValue}, max={money.MaxValue})";

            if (a is DecimalAttributeMetadata dec)
                return $"Decimal (precision={dec.Precision}, min={dec.MinValue}, max={dec.MaxValue})";

            if (a is IntegerAttributeMetadata intAttr)
                return $"Integer (min={intAttr.MinValue}, max={intAttr.MaxValue}, format={intAttr.Format})";

            if (a is DoubleAttributeMetadata dbl)
                return $"Double (precision={dbl.Precision}, min={dbl.MinValue}, max={dbl.MaxValue})";

            if (a is BigIntAttributeMetadata bigInt)
                return $"BigInt (min={bigInt.MinValue}, max={bigInt.MaxValue})";

            if (a is DateTimeAttributeMetadata dt)
                return $"DateTime (format={dt.Format}, behavior={dt.DateTimeBehavior?.Value ?? "Unknown"})";

            if (a is ImageAttributeMetadata img)
                return $"Image (maxHeight={img.MaxHeight}, maxWidth={img.MaxWidth}, maxSize={img.MaxSizeInKB}KB)";

            if (a is FileAttributeMetadata file)
                return $"File (maxSize={file.MaxSizeInKB}KB)";

            if (a is UniqueIdentifierAttributeMetadata)
                return "UniqueIdentifier";

            if (a is EntityNameAttributeMetadata)
                return "EntityName";

            if (a is ManagedPropertyAttributeMetadata)
                return "ManagedProperty";

            return a.AttributeType?.ToString() ?? "Unknown";
        }

        private static void AppendOneToManyRelationships(StringBuilder sb, EntityMetadata metadata, string prefixFilter)
        {
            var otm = metadata.OneToManyRelationships;
            if (otm == null || otm.Length == 0) return;

            var filtered = otm
                .Where(r => string.IsNullOrEmpty(prefixFilter) || r.ReferencingEntity.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                .OrderBy(r => r.ReferencingEntity)
                .ToArray();

            if (filtered.Length == 0) return;

            sb.AppendLine();
            sb.AppendLine($"### 1:N Relationships ({filtered.Length} — this entity is parent)");
            sb.AppendLine();
            sb.AppendLine("| Child Entity | Child Lookup Field | Schema Name | Cascade Assign | Cascade Delete |");
            sb.AppendLine("| --- | --- | --- | --- | --- |");
            foreach (var r in filtered)
            {
                var cascadeAssign = r.CascadeConfiguration?.Assign?.ToString() ?? "";
                var cascadeDelete = r.CascadeConfiguration?.Delete?.ToString() ?? "";
                sb.AppendLine($"| {r.ReferencingEntity} | {r.ReferencingAttribute} | {r.SchemaName} | {cascadeAssign} | {cascadeDelete} |");
            }
        }

        private static void AppendManyToOneRelationships(StringBuilder sb, EntityMetadata metadata, string prefixFilter)
        {
            var mto = metadata.ManyToOneRelationships;
            if (mto == null || mto.Length == 0) return;

            var filtered = mto
                .Where(r => string.IsNullOrEmpty(prefixFilter) || r.ReferencedEntity.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                .OrderBy(r => r.ReferencedEntity)
                .ToArray();

            if (filtered.Length == 0) return;

            sb.AppendLine();
            sb.AppendLine($"### N:1 Relationships ({filtered.Length} — this entity is child)");
            sb.AppendLine();
            sb.AppendLine("| Parent Entity | Lookup Field | Schema Name |");
            sb.AppendLine("| --- | --- | --- |");
            foreach (var r in filtered)
                sb.AppendLine($"| {r.ReferencedEntity} | {r.ReferencingAttribute} | {r.SchemaName} |");
        }

        private static void AppendManyToManyRelationships(StringBuilder sb, EntityMetadata metadata)
        {
            var mtm = metadata.ManyToManyRelationships;
            if (mtm == null || mtm.Length == 0) return;

            sb.AppendLine();
            sb.AppendLine($"### N:N Relationships ({mtm.Length})");
            sb.AppendLine();
            sb.AppendLine("| Intersect Entity | Entity 1 | Entity 1 Attribute | Entity 2 | Entity 2 Attribute | Schema Name |");
            sb.AppendLine("| --- | --- | --- | --- | --- | --- |");
            foreach (var r in mtm)
                sb.AppendLine($"| {r.IntersectEntityName} | {r.Entity1LogicalName} | {r.Entity1IntersectAttribute} | {r.Entity2LogicalName} | {r.Entity2IntersectAttribute} | {r.SchemaName} |");
        }

        private static void AppendKeys(StringBuilder sb, EntityMetadata metadata)
        {
            var keys = metadata.Keys;
            if (keys == null || keys.Length == 0) return;

            sb.AppendLine();
            sb.AppendLine($"### Alternate Keys ({keys.Length})");
            sb.AppendLine();
            sb.AppendLine("| Display Name | Schema Name | Key Attributes |");
            sb.AppendLine("| --- | --- | --- |");
            foreach (var k in keys)
            {
                var displayName = k.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var keyAttrs = k.KeyAttributes != null ? string.Join(", ", k.KeyAttributes) : "";
                sb.AppendLine($"| {displayName} | {k.SchemaName} | {keyAttrs} |");
            }
        }
    }
}
