using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GetFlowsResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("flows")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CloudFlowEntry> Flows { get; set; }

        [JsonPropertyName("runs")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<FlowRunEntry> Runs { get; set; }

        [JsonPropertyName("runSummary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public FlowRunSummary RunSummary { get; set; }
    }
}
