using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchManyToManyRelationshipEntry
    {
        [JsonPropertyName("relationshipName")]
        public string RelationshipName { get; set; }

        [JsonPropertyName("searchEntity")]
        public string SearchEntity { get; set; }

        [JsonPropertyName("relatedEntity")]
        public string RelatedEntity { get; set; }

        [JsonPropertyName("intersectEntity")]
        public string IntersectEntity { get; set; }
    }
}
