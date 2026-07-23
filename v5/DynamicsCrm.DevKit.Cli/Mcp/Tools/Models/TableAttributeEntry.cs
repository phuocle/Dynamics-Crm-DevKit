using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TableAttributeEntry
    {
        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

        [JsonPropertyName("schemaName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SchemaName { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("requiredLevel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RequiredLevel { get; set; }

        [JsonPropertyName("isValidForCreate")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsValidForCreate { get; set; }

        [JsonPropertyName("isValidForUpdate")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsValidForUpdate { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        // ── Clone-friendly detail fields (populated only in detail mode) ──

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("maxLength")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? MaxLength { get; set; }

        [JsonPropertyName("minValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public double? MinValue { get; set; }

        [JsonPropertyName("maxValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public double? MaxValue { get; set; }

        [JsonPropertyName("precision")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Precision { get; set; }

        [JsonPropertyName("precisionSource")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? PrecisionSource { get; set; }

        [JsonPropertyName("format")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Format { get; set; }

        [JsonPropertyName("behavior")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Behavior { get; set; }

        [JsonPropertyName("trueLabel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TrueLabel { get; set; }

        [JsonPropertyName("falseLabel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FalseLabel { get; set; }

        [JsonPropertyName("lookupTargets")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> LookupTargets { get; set; }

        [JsonPropertyName("globalOptionSetName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string GlobalOptionSetName { get; set; }

        [JsonPropertyName("isGlobalOptionSet")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsGlobal { get; set; }

        [JsonPropertyName("options")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ChoiceOptionItem> Options { get; set; }

        [JsonPropertyName("isAuditEnabled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAuditEnabled { get; set; }

        /// <summary>
        /// Whether the attribute appears in Advanced Find (SDK
        /// <c>IsValidForAdvancedFind</c>, a BooleanManagedProperty — emits its inner Value).
        /// Toggled by the "Searchable"/"Enable for Advanced Find" checkbox in Power Apps UI.
        /// </summary>
        [JsonPropertyName("isValidForAdvancedFind")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsValidForAdvancedFind { get; set; }

        /// <summary>
        /// Whether field-level security is enabled on the attribute (SDK <c>IsSecured</c>).
        /// </summary>
        [JsonPropertyName("isSecured")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsSecured { get; set; }

        /// <summary>
        /// Whether the attribute is enabled for sorting in views (SDK
        /// <c>IsSortableEnabled</c>, a BooleanManagedProperty — emits its inner Value).
        /// Toggled by the "Sortable" checkbox in Power Apps column UI.
        /// </summary>
        [JsonPropertyName("isSortable")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsSortable { get; set; }

        [JsonPropertyName("imeMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ImeMode { get; set; }

        // ── Formula-aware fields (Calculated / Rollup / Power Fx) ──

        [JsonPropertyName("sourceType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceType { get; set; }

        /// <summary>
        /// Default value emitted ONLY when the attribute actually has one. Applies to
        /// the three Dataverse attribute kinds that expose a default-value property:
        /// - Boolean  → <c>true</c>/<c>false</c> (from <c>BooleanAttributeMetadata.DefaultValue</c>)
        /// - Picklist  → option integer value (from <c>PicklistAttributeMetadata.DefaultFormValue</c>)
        /// - Status    → option integer value (from <c>StatusAttributeMetadata.DefaultFormValue</c>)
        /// No default configured (or non-applicable kinds like State / MultiSelect /
        /// string / lookup / …) → the property is omitted entirely from the JSON.
        /// </summary>
        [JsonPropertyName("defaultValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public object DefaultValue { get; set; }

        /// <summary>
        /// Source reference for cloning a formula column, formatted as
        /// <c>entityLogicalName:attributeLogicalName</c>. Raw formula XML/text is not
        /// transported. Pass this reference unchanged to upsert_column's
        /// <c>formula_definition</c>; the server retrieves and rewrites it directly.
        /// </summary>
        [JsonPropertyName("formulaDefinition")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormulaDefinition { get; set; }
    }
}
