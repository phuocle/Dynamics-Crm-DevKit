using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    public class SqlQueryResult
    {
        [JsonPropertyName("row_count")]
        public int RowCount { get; set; }

        [JsonPropertyName("max_records")]
        public int MaxRecords { get; set; }

        [JsonPropertyName("get_all")]
        public bool GetAll { get; set; }

        [JsonPropertyName("result_truncated")]
        public bool ResultTruncated { get; set; }

        [JsonPropertyName("executed_sql")]
        public string ExecutedSql { get; set; }

        [JsonPropertyName("request_url")]
        public string RequestUrl { get; set; }

        [JsonPropertyName("rows")]
        public List<Dictionary<string, object>> Rows { get; set; } = new List<Dictionary<string, object>>();

        [JsonPropertyName("summary")]
        public string Summary => $"[Success] {RowCount} row(s) returned{(ResultTruncated ? $" (truncated at max_records={MaxRecords})" : "")}";

        internal static readonly Regex FromRegex = new Regex(@"\bfrom\s+([a-zA-Z_][a-zA-Z0-9_]*)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        internal static readonly Regex SelectStarRegex = new Regex(@"\bselect\s+(distinct\s+)?\*", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        internal static readonly Regex TopRegex = new Regex(@"^\s*select\s+(distinct\s+)?top\s*\(?\s*(\d+)\s*\)?\s+", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        internal static readonly Regex HavingRegex = new Regex(@"\bhaving\b", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        internal static readonly Regex ExistsRegex = new Regex(@"\bexists\s*\(", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        internal static readonly Regex OffsetFetchRegex = new Regex(@"\boffset\b|\bfetch\b", RegexOptions.IgnoreCase | RegexOptions.Compiled);
    }
}
