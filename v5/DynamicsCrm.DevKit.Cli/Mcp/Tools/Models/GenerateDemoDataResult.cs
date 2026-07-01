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

        [JsonPropertyName("fieldsGenerated")]
        public int FieldsGenerated { get; set; }

        [JsonPropertyName("fieldList")]
        public List<string> FieldList { get; set; } = [];

        [JsonPropertyName("filePath")]
        public string FilePath { get; set; }

        [JsonPropertyName("lookupsSampled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, int> LookupsSampled { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }
    }
}
