using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchRecordsResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("detailLevel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DetailLevel { get; set; }

        [JsonPropertyName("filePath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FilePath { get; set; }

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

        [JsonPropertyName("queryContext")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SearchQueryContextEntry QueryContext { get; set; }

        [JsonPropertyName("warningList")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> WarningList { get; set; }

        [JsonPropertyName("errorList")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ErrorList { get; set; }

        [JsonPropertyName("status")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SearchStatusEntry Status { get; set; }

        [JsonPropertyName("statistics")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SearchStatisticsEntry Statistics { get; set; }

        [JsonPropertyName("rawResponse")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawResponse { get; set; }

        [JsonPropertyName("entityMatches")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableMatchEntry> EntityMatches { get; set; }

        [JsonPropertyName("errorCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorMessage { get; set; }
    }
}
