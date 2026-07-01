using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class RibbonFunctionSignature
    {
        [JsonPropertyName("role")]
        public string Role { get; set; }

        [JsonPropertyName("surface")]
        public string Surface { get; set; }

        [JsonPropertyName("functionName")]
        public string FunctionName { get; set; }

        [JsonPropertyName("library")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Library { get; set; }

        [JsonPropertyName("sourceId")]
        public string SourceId { get; set; }

        [JsonPropertyName("parameterCount")]
        public int ParameterCount { get; set; }

        [JsonPropertyName("parameters")]
        public List<string> Parameters { get; set; } = [];

        [JsonPropertyName("expectedReturn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExpectedReturn { get; set; }
    }
}
