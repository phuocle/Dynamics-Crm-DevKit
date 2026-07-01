using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class AuditHistoryEntry
    {
        [JsonPropertyName("timestamp")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Timestamp { get; set; }

        [JsonPropertyName("user")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string User { get; set; }

        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("entity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity { get; set; }

        [JsonPropertyName("recordName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordName { get; set; }

        [JsonPropertyName("recordId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordId { get; set; }

        [JsonPropertyName("operation")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Operation { get; set; }

        [JsonPropertyName("field")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Field { get; set; }

        [JsonPropertyName("oldValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OldValue { get; set; }

        [JsonPropertyName("newValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string NewValue { get; set; }
    }
}
