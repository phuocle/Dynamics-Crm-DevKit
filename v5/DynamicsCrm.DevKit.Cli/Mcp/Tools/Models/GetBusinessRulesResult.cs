using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class GetBusinessRulesResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("rules")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<BusinessRuleSummaryEntry> Rules { get; set; }

        [JsonPropertyName("rule")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public BusinessRuleDetailEntry Rule { get; set; }
    }
}
