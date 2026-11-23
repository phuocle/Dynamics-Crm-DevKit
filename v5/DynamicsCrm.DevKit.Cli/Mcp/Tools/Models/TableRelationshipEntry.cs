using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TableRelationshipEntry
    {
        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("referencedEntity")]
        public string ReferencedEntity { get; set; }

        [JsonPropertyName("referencingEntity")]
        public string ReferencingEntity { get; set; }

        [JsonPropertyName("referencingAttribute")]
        public string ReferencingAttribute { get; set; }

        [JsonPropertyName("isHierarchical")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsHierarchical { get; set; }

        [JsonPropertyName("cascadeConfiguration")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public TableCascadeConfiguration CascadeConfiguration { get; set; }

        [JsonPropertyName("associatedMenuConfiguration")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public TableAssociatedMenuConfiguration AssociatedMenuConfiguration { get; set; }
    }

    internal sealed class TableCascadeConfiguration
    {
        [JsonPropertyName("delete")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Delete { get; set; }

        [JsonPropertyName("assign")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Assign { get; set; }

        [JsonPropertyName("share")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Share { get; set; }

        [JsonPropertyName("unshare")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Unshare { get; set; }

        [JsonPropertyName("reparent")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Reparent { get; set; }

        [JsonPropertyName("merge")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Merge { get; set; }

        [JsonPropertyName("archive")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Archive { get; set; }

        [JsonPropertyName("rollupView")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RollupView { get; set; }
    }

    internal sealed class TableAssociatedMenuConfiguration
    {
        [JsonPropertyName("behavior")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Behavior { get; set; }

        [JsonPropertyName("group")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Group { get; set; }

        [JsonPropertyName("order")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Order { get; set; }

        [JsonPropertyName("label")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Label { get; set; }
    }
}
