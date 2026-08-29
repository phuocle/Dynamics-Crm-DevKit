using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GenerateDemoDataResult
    {
        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("status")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Status { get; set; }

        [JsonPropertyName("records")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<Dictionary<string, object>> Records { get; set; }

        [JsonPropertyName("recordsGenerated")]
        public int RecordsGenerated { get; set; }

        [JsonPropertyName("fieldsGenerated")]
        public int FieldsGenerated { get; set; }

        [JsonPropertyName("fieldList")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> FieldList { get; set; }

        [JsonPropertyName("filePath")]
        public string FilePath { get; set; }

        [JsonPropertyName("seed")]
        public int Seed { get; set; }

        [JsonPropertyName("overridesApplied")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OverridesApplied { get; set; }

        [JsonPropertyName("lookupsSampled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, int> LookupsSampled { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }

        [JsonPropertyName("entityMatches")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableMatchEntry> EntityMatches { get; set; }
    }
}
