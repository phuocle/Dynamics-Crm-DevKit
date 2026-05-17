using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WorkflowSummary
    {
        [JsonPropertyName("backgroundCount")]
        public int BackgroundCount { get; set; }

        [JsonPropertyName("realtimeCount")]
        public int RealtimeCount { get; set; }

        [JsonPropertyName("onDemandCount")]
        public int OnDemandCount { get; set; }

        [JsonPropertyName("subprocessCount")]
        public int SubprocessCount { get; set; }
    }
}
