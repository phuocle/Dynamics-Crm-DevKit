using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchRecordEntry
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("objectTypeCode")]
        public int ObjectTypeCode { get; set; }

        [JsonPropertyName("score")]
        public double Score { get; set; }

        [JsonPropertyName("attributes")]
        public Dictionary<string, object> Attributes { get; set; } = [];

        [JsonPropertyName("highlights")]
        public Dictionary<string, string[]> Highlights { get; set; } = [];
    }
}
