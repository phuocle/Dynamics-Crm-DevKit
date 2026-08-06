using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class BpfStageEntry
    {
        [JsonPropertyName("stageId")]
        public string StageId { get; set; }

        [JsonPropertyName("stageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string StageName { get; set; }

        [JsonPropertyName("stageCategory")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string StageCategory { get; set; }

        [JsonPropertyName("primaryEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryEntity { get; set; }

        [JsonIgnore]
        public int? StageCategoryValue { get; set; }
    }
}
