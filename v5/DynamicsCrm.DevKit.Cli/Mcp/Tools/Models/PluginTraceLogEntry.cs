using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class PluginTraceLogEntry
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("typeName")]
        public string TypeName { get; set; }

        [JsonPropertyName("messageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageName { get; set; }

        [JsonPropertyName("primaryEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("mode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Mode { get; set; }

        [JsonPropertyName("depth")]
        public int Depth { get; set; }

        [JsonPropertyName("duration")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Duration { get; set; }

        [JsonPropertyName("correlationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CorrelationId { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("messageBlock")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageBlock { get; set; }

        [JsonPropertyName("exceptionDetails")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExceptionDetails { get; set; }
    }
}
