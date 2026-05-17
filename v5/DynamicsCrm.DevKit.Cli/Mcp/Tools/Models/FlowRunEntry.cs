using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class FlowRunEntry
    {
        [JsonPropertyName("flowSessionId")]
        public string FlowSessionId { get; set; }

        [JsonPropertyName("startedOn")]
        public string StartedOn { get; set; }

        [JsonPropertyName("completedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CompletedOn { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("duration")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Duration { get; set; }

        [JsonPropertyName("errorCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("triggerType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TriggerType { get; set; }
    }
}
