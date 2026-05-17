using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class FlowRunSummary
    {
        [JsonPropertyName("succeeded")]
        public int Succeeded { get; set; }

        [JsonPropertyName("failed")]
        public int Failed { get; set; }

        [JsonPropertyName("running")]
        public int Running { get; set; }

        [JsonPropertyName("cancelled")]
        public int Cancelled { get; set; }

        [JsonPropertyName("waiting")]
        public int Waiting { get; set; }

        [JsonPropertyName("paused")]
        public int Paused { get; set; }

        [JsonPropertyName("skipped")]
        public int Skipped { get; set; }

        [JsonPropertyName("suspended")]
        public int Suspended { get; set; }

        [JsonPropertyName("notSpecified")]
        public int NotSpecified { get; set; }
    }
}
