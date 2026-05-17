using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GetMessagesResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("scope")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Scope { get; set; }

        [JsonPropertyName("sdkMessageCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? SdkMessageCount { get; set; }

        [JsonPropertyName("customActionCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? CustomActionCount { get; set; }

        [JsonPropertyName("sdkMessages")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> SdkMessages { get; set; }

        [JsonPropertyName("customActions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> CustomActions { get; set; }

        [JsonPropertyName("messageDetail")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SdkMessageDetail MessageDetail { get; set; }

        [JsonPropertyName("actionDetail")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public CustomActionDetail ActionDetail { get; set; }
    }
}
