using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class CommandChildEntry
    {
        [JsonPropertyName("commandId")]
        public string CommandId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        public string UniqueName { get; set; }

        [JsonPropertyName("buttonLabel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ButtonLabel { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("onClickEventType")]
        public string OnClickEventType { get; set; }

        [JsonPropertyName("javaScriptFunction")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string JavaScriptFunction { get; set; }

        [JsonPropertyName("sequence")]
        public int Sequence { get; set; }

        [JsonPropertyName("hidden")]
        public bool Hidden { get; set; }

        [JsonPropertyName("isDisabled")]
        public bool IsDisabled { get; set; }
    }
}
