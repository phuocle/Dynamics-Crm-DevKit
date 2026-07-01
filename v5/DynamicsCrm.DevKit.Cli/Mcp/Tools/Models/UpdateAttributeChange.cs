using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class UpdateAttributeChange
    {
        [JsonPropertyName("oldValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OldValue { get; set; }

        [JsonPropertyName("newValue")]
        public string NewValue { get; set; }
    }
}
