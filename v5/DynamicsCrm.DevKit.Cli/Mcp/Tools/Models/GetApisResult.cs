using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GetApisResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("entityFilter")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityFilter { get; set; }

        [JsonPropertyName("apis")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CustomApiEntry> Apis { get; set; }
    }
}
