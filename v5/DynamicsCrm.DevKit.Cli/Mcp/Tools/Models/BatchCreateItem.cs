using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class BatchCreateItem
    {
        [JsonPropertyName("index")]
        public int Index { get; set; }

        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("error")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Error { get; set; }

        [JsonPropertyName("stateUpdate")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public BatchStateUpdate StateUpdate { get; set; }
    }

    internal sealed class BatchStateUpdate
    {
        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("error")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Error { get; set; }
    }
}
