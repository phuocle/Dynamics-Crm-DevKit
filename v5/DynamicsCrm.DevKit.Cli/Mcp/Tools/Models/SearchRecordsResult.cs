using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchRecordsResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("searchTerm")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SearchTerm { get; set; }

        [JsonPropertyName("returnedCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ReturnedCount { get; set; }

        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public long? TotalCount { get; set; }

        [JsonPropertyName("records")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SearchRecordEntry> Records { get; set; }

        [JsonPropertyName("status")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SearchStatusEntry Status { get; set; }

        [JsonPropertyName("statistics")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SearchStatisticsEntry Statistics { get; set; }

        [JsonPropertyName("rawResponse")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawResponse { get; set; }

        [JsonPropertyName("errorCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorMessage { get; set; }
    }
}
