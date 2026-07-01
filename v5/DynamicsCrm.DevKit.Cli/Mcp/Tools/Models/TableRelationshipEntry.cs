using System.Collections.Generic;
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
    }
}
