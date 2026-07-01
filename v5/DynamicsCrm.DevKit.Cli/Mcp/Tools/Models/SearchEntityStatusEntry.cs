using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchEntityStatusEntry
    {
        [JsonPropertyName("entityLogicalName")]
        public string EntityLogicalName { get; set; }

        [JsonPropertyName("objectTypeCode")]
        public int ObjectTypeCode { get; set; }

        [JsonPropertyName("primaryNameField")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryNameField { get; set; }

        [JsonPropertyName("entityStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityStatus { get; set; }

        [JsonPropertyName("indexedFields")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> IndexedFields { get; set; }
    }
}
