using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class PluginTypeEntry
    {
        [JsonPropertyName("typeId")]
        public string TypeId { get; set; }

        [JsonPropertyName("typeName")]
        public string TypeName { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("isWorkflow")]
        public bool IsWorkflow { get; set; }

        [JsonPropertyName("workflowActivityGroupName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string WorkflowActivityGroupName { get; set; }

        [JsonPropertyName("stepCount")]
        public int StepCount { get; set; }
    }
}
