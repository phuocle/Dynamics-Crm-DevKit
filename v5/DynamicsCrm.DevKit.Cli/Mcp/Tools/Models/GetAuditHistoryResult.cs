using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GetAuditHistoryResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("recordId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordId { get; set; }

        [JsonPropertyName("timeScope")]
        public string TimeScope { get; set; }

        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("entries")]
        public List<AuditHistoryEntry> Entries { get; set; }
    }
}
