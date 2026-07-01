using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WorkflowEntry
    {
        [JsonPropertyName("workflowId")]
        public string WorkflowId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("primaryEntity")]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("triggerOnCreate")]
        public bool TriggerOnCreate { get; set; }

        [JsonPropertyName("triggerOnDelete")]
        public bool TriggerOnDelete { get; set; }

        [JsonPropertyName("triggerOnUpdateFields")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TriggerOnUpdateFields { get; set; }

        [JsonPropertyName("createStage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateStage { get; set; }

        [JsonPropertyName("updateStage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UpdateStage { get; set; }

        [JsonPropertyName("deleteStage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DeleteStage { get; set; }

        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("scope")]
        public string Scope { get; set; }

        [JsonPropertyName("runAs")]
        public string RunAs { get; set; }

        [JsonPropertyName("rank")]
        public int Rank { get; set; }

        [JsonPropertyName("onDemand")]
        public bool OnDemand { get; set; }

        [JsonPropertyName("subprocess")]
        public bool Subprocess { get; set; }

        [JsonPropertyName("isTransacted")]
        public bool IsTransacted { get; set; }

        [JsonPropertyName("asyncAutoDelete")]
        public bool AsyncAutoDelete { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("owner")]
        public string Owner { get; set; }

        [JsonPropertyName("modifiedOn")]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("modifiedBy")]
        public string ModifiedBy { get; set; }
    }
}
