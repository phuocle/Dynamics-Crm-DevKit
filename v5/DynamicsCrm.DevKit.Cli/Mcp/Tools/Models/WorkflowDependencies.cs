using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WorkflowDependencies
    {
        [JsonPropertyName("readFields")]
        public List<string> ReadFields { get; set; } = new();
        [JsonPropertyName("writtenEntities")]
        public List<WorkflowWrittenEntity> WrittenEntities { get; set; } = new();
        [JsonPropertyName("customActivities")]
        public List<string> CustomActivities { get; set; } = new();
        [JsonPropertyName("childWorkflows")]
        public List<string> ChildWorkflows { get; set; } = new();
        [JsonPropertyName("invokedActions")]
        public List<string> InvokedActions { get; set; } = new();
    }

    internal sealed class WorkflowWrittenEntity
    {
        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }
        [JsonPropertyName("operation")]
        public string Operation { get; set; }
        [JsonPropertyName("targetExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TargetExpression { get; set; }
        [JsonPropertyName("fields")]
        public List<string> Fields { get; set; } = new();
    }
}
