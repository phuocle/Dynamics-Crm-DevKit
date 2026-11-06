using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WorkflowParseIssue
    {
        [JsonPropertyName("code")]
        public string Code { get; set; }

        [JsonPropertyName("sourceDisplayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceDisplayName { get; set; }

        [JsonPropertyName("sourceActivityType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceActivityType { get; set; }

        [JsonPropertyName("rawXaml")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawXaml { get; set; }

        [JsonPropertyName("message")]
        public string Message { get; set; }
    }
}
