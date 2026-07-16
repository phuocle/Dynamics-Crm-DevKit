using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class UpsertTableResult
    {
        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("displayCollectionName")]
        public string DisplayCollectionName { get; set; }

        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("logicalName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LogicalName { get; set; }

        [JsonPropertyName("ownershipType")]
        public string OwnershipType { get; set; }

        [JsonPropertyName("tableType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TableType { get; set; }

        [JsonPropertyName("primaryAttributeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryAttributeName { get; set; }

        [JsonPropertyName("primaryAttributeDisplayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryAttributeDisplayName { get; set; }

        [JsonPropertyName("primaryAttributeMaxLength")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public int PrimaryAttributeMaxLength { get; set; }

        [JsonPropertyName("metadataId")]
        public string MetadataId { get; set; }

        [JsonPropertyName("entitySetName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntitySetName { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionMethod { get; set; }

        [JsonPropertyName("addToSolutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionWarning { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("isAuditEnabled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAuditEnabled { get; set; }

        [JsonPropertyName("isQuickCreateEnabled")]
        public bool IsQuickCreateEnabled { get; set; }

        [JsonPropertyName("isSearchEnabled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsSearchEnabled { get; set; }

        [JsonPropertyName("syncToExternalSearchIndex")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? SyncToExternalSearchIndex { get; set; }

        [JsonPropertyName("canEnableSyncToExternalSearchIndex")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? CanEnableSyncToExternalSearchIndex { get; set; }

        [JsonPropertyName("canEnableSyncToExternalSearchIndexCanBeChanged")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? CanEnableSyncToExternalSearchIndexCanBeChanged { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("changes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, UpdateAttributeChange> Changes { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }
    }
}
