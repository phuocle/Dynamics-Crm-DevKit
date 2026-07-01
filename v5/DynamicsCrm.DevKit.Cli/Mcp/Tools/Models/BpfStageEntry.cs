using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class BpfStageEntry
    {
        [JsonPropertyName("stageId")]
        public string StageId { get; set; }

        [JsonPropertyName("stageName")]
        public string StageName { get; set; }

        [JsonPropertyName("stageCategory")]
        public string StageCategory { get; set; }

        [JsonPropertyName("primaryEntity")]
        public string PrimaryEntity { get; set; }

        [JsonIgnore]
        public int StageCategoryValue { get; set; }
    }
}
