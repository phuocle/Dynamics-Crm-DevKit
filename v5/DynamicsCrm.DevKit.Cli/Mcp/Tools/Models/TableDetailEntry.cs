using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TableDetailEntry
    {
        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

        [JsonPropertyName("schemaName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SchemaName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("ownershipType")]
        public string OwnershipType { get; set; }

        [JsonPropertyName("isCustom")]
        public bool IsCustom { get; set; }

        [JsonPropertyName("isActivity")]
        public bool IsActivity { get; set; }

        [JsonPropertyName("isAuditEnabled")]
        public bool IsAuditEnabled { get; set; }

        [JsonPropertyName("primaryIdAttribute")]
        public string PrimaryIdAttribute { get; set; }

        [JsonPropertyName("primaryNameAttribute")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryNameAttribute { get; set; }

        [JsonPropertyName("entitySetName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntitySetName { get; set; }

        [JsonPropertyName("logicalCollectionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LogicalCollectionName { get; set; }

        [JsonPropertyName("objectTypeCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ObjectTypeCode { get; set; }

        [JsonPropertyName("attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableAttributeEntry> Attributes { get; set; } = [];

        [JsonPropertyName("oneToManyRelationships")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableRelationshipEntry> OneToManyRelationships { get; set; } = [];

        [JsonPropertyName("manyToOneRelationships")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableRelationshipEntry> ManyToOneRelationships { get; set; } = [];

        [JsonPropertyName("manyToManyRelationships")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableManyToManyRelationshipEntry> ManyToManyRelationships { get; set; } = [];

        [JsonPropertyName("alternateKeys")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableKeyEntry> AlternateKeys { get; set; } = [];
    }
}
