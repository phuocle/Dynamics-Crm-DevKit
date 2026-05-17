using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TableManyToManyRelationshipEntry
    {
        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("entity1")]
        public string Entity1 { get; set; }

        [JsonPropertyName("entity2")]
        public string Entity2 { get; set; }

        [JsonPropertyName("intersectEntityName")]
        public string IntersectEntityName { get; set; }
    }
}
