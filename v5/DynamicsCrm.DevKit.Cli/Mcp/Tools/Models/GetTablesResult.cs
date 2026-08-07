using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GetTablesResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("totalMatched")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? TotalMatched { get; set; }

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("filter")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Filter { get; set; }

        [JsonPropertyName("detailLevel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DetailLevel { get; set; }

        [JsonPropertyName("tables")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableSummaryEntry> Tables { get; set; }

        [JsonPropertyName("table")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public TableDetailEntry Table { get; set; }

        [JsonPropertyName("hint")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Hint { get; set; }
    }
}
