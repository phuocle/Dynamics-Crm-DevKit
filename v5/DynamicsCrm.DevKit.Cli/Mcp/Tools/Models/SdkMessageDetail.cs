#nullable enable
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SdkMessageDetail
    {
        [JsonPropertyName("messageId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? MessageId { get; set; }

        [JsonPropertyName("name")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? Name { get; set; }

        [JsonPropertyName("isActive")]
        public bool IsActive { get; set; }

        [JsonPropertyName("isCustomAction")]
        public bool IsCustomAction { get; set; }

        [JsonPropertyName("availability")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string? Availability { get; set; }

        [JsonPropertyName("supportedEntities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string>? SupportedEntities { get; set; }

        [JsonPropertyName("pluginStepCount")]
        public int PluginStepCount { get; set; }
    }
}
