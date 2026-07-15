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
        public bool IsValidForCreate { get; set; }

        [JsonPropertyName("isValidForUpdate")]
        public bool IsValidForUpdate { get; set; }

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

        [JsonPropertyName("imeMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ImeMode { get; set; }

        // ── Formula-aware fields (Calculated / Rollup / Power Fx) ──

        [JsonPropertyName("sourceType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceType { get; set; }

        [JsonPropertyName("formula")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Formula { get; set; }
    }
}
