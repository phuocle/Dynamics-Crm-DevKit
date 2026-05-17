using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TableDetailEntry
    {
        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

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
        public string EntitySetName { get; set; }

        [JsonPropertyName("logicalCollectionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LogicalCollectionName { get; set; }

        [JsonPropertyName("objectTypeCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ObjectTypeCode { get; set; }

        [JsonPropertyName("attributes")]
        public List<TableAttributeEntry> Attributes { get; set; } = [];

        [JsonPropertyName("oneToManyRelationships")]
        public List<TableRelationshipEntry> OneToManyRelationships { get; set; } = [];

        [JsonPropertyName("manyToOneRelationships")]
        public List<TableRelationshipEntry> ManyToOneRelationships { get; set; } = [];

        [JsonPropertyName("manyToManyRelationships")]
        public List<TableManyToManyRelationshipEntry> ManyToManyRelationships { get; set; } = [];

        [JsonPropertyName("alternateKeys")]
        public List<TableKeyEntry> AlternateKeys { get; set; } = [];
    }
}
