using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class UpsertRelationshipResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("relationshipName")]
        public string RelationshipName { get; set; }

        [JsonPropertyName("relationshipType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RelationshipType { get; set; }

        [JsonPropertyName("referencedEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ReferencedEntity { get; set; }

        [JsonPropertyName("referencingEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ReferencingEntity { get; set; }

        [JsonPropertyName("entity1")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity1 { get; set; }

        [JsonPropertyName("entity2")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity2 { get; set; }

        [JsonPropertyName("intersectEntityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string IntersectEntityName { get; set; }

        [JsonPropertyName("lookupAttributeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LookupAttributeName { get; set; }

        [JsonPropertyName("isHierarchical")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsHierarchical { get; set; }

        [JsonPropertyName("cascadeAssign")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeAssign { get; set; }

        [JsonPropertyName("cascadeDelete")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeDelete { get; set; }

        [JsonPropertyName("cascadeMerge")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeMerge { get; set; }

        [JsonPropertyName("cascadeReparent")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeReparent { get; set; }

        [JsonPropertyName("cascadeShare")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeShare { get; set; }

        [JsonPropertyName("cascadeUnshare")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeUnshare { get; set; }

        [JsonPropertyName("metadataId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MetadataId { get; set; }

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
