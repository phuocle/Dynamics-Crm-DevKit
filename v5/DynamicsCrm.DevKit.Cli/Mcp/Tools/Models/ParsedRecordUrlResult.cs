using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class ParsedRecordUrlResult
    {
        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("entitySetName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntitySetName { get; set; }

        [JsonPropertyName("recordId")]
        public string RecordId { get; set; }

        [JsonPropertyName("source")]
        public string Source { get; set; }

        [JsonPropertyName("environmentId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EnvironmentId { get; set; }

        [JsonPropertyName("flowId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FlowId { get; set; }

        [JsonPropertyName("tip")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Tip { get; set; }
    }
}
