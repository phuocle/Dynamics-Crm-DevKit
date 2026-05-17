using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class CommandRuleEntry
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UniqueName { get; set; }

        [JsonPropertyName("ruleType")]
        public string RuleType { get; set; }

        [JsonPropertyName("definition")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Definition { get; set; }

        [JsonPropertyName("contextValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ContextValue { get; set; }
    }
}
