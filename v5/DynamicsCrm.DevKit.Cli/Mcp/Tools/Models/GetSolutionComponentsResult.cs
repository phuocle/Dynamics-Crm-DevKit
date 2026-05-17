using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GetSolutionComponentsResult
    {
        [JsonPropertyName("solution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SolutionInfoEntry Solution { get; set; }

        [JsonPropertyName("totalComponents")]
        public int TotalComponents { get; set; }

        [JsonPropertyName("includeActiveLayers")]
        public bool IncludeActiveLayers { get; set; }

        [JsonPropertyName("activeLayersOnly")]
        public bool ActiveLayersOnly { get; set; }

        [JsonPropertyName("activeLayerCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ActiveLayerCount { get; set; }

        [JsonPropertyName("fullEntities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> FullEntities { get; set; }

        [JsonPropertyName("summary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SolutionComponentSummaryEntry> Summary { get; set; }

        [JsonPropertyName("components")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SolutionComponentEntry> Components { get; set; }

        [JsonPropertyName("solutionMatches")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SolutionMatchEntry> SolutionMatches { get; set; }
    }
}
