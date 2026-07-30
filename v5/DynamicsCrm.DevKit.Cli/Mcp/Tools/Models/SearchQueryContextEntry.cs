using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchQueryContextEntry
    {
        [JsonPropertyName("originalQuery")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OriginalQuery { get; set; }

        [JsonPropertyName("alteredQuery")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AlteredQuery { get; set; }

        [JsonPropertyName("reason")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Reason { get; set; }

        [JsonPropertyName("spellSuggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> SpellSuggestions { get; set; }
    }
}
