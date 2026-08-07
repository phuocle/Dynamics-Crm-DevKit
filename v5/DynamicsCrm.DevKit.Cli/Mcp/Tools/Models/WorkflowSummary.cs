using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WorkflowSummary
    {
        [JsonPropertyName("backgroundCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? BackgroundCount { get; set; }

        [JsonPropertyName("realtimeCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? RealtimeCount { get; set; }

        [JsonPropertyName("onDemandCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? OnDemandCount { get; set; }

        [JsonPropertyName("subprocessCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? SubprocessCount { get; set; }

        [JsonPropertyName("activeCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ActiveCount { get; set; }

        [JsonPropertyName("draftCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? DraftCount { get; set; }
    }
}
