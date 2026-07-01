using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SolutionComponentEntry
    {
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("typeId")]
        public int TypeId { get; set; }

        [JsonPropertyName("objectId")]
        public string ObjectId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("hasActiveLayer")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? HasActiveLayer { get; set; }

        [JsonPropertyName("isFullEntity")]
        public bool IsFullEntity { get; set; }
    }
}
