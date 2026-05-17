using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class FetchXmlResult
    {
        [JsonPropertyName("totalReturned")]
        public int TotalReturned { get; set; }

        [JsonPropertyName("hasMore")]
        public bool HasMore { get; set; }

        [JsonPropertyName("getAll")]
        public bool GetAll { get; set; }

        [JsonPropertyName("maxRecords")]
        public int MaxRecords { get; set; }

        [JsonPropertyName("singleEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SingleEntity { get; set; }

        [JsonPropertyName("records")]
        public List<Dictionary<string, string>> Records { get; set; } = [];
    }
}
