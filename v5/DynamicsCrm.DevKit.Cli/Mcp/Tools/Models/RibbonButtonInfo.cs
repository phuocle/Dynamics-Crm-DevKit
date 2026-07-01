using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class RibbonButtonInfo
    {
        [JsonPropertyName("sequence")]
        public int Sequence { get; set; }

        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("label")]
        public string Label { get; set; }

        [JsonPropertyName("isOob")]
        public bool IsOob { get; set; }

        [JsonPropertyName("isCustom")]
        public bool IsCustom { get; set; }

        [JsonPropertyName("isHide")]
        public bool IsHide { get; set; }
    }
}
