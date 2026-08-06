using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class JobSummary
    {
        [JsonPropertyName("plugin")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Plugin { get; set; }

        [JsonPropertyName("workflow")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Workflow { get; set; }

        [JsonPropertyName("bulkDelete")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? BulkDelete { get; set; }

        [JsonPropertyName("import")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Import { get; set; }

        [JsonPropertyName("solution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Solution { get; set; }

        [JsonPropertyName("other")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Other { get; set; }
    }
}
