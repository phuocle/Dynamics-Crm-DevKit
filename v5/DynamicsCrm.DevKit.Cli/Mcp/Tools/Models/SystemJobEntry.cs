using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SystemJobEntry
    {
        [JsonPropertyName("jobId")]
        public string JobId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("operationType")]
        public string OperationType { get; set; }

        [JsonPropertyName("primaryEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("messageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageName { get; set; }

        [JsonPropertyName("startedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string StartedOn { get; set; }

        [JsonPropertyName("completedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CompletedOn { get; set; }

        [JsonPropertyName("executionTime")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExecutionTime { get; set; }

        [JsonPropertyName("retryCount")]
        public int RetryCount { get; set; }

        [JsonPropertyName("depth")]
        public int Depth { get; set; }

        [JsonPropertyName("errorCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ErrorCode { get; set; }

        [JsonPropertyName("correlationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CorrelationId { get; set; }

        [JsonPropertyName("owner")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Owner { get; set; }

        [JsonPropertyName("pluginStep")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginStep { get; set; }

        [JsonPropertyName("workflowName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string WorkflowName { get; set; }

        [JsonPropertyName("regardingRecord")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RegardingRecord { get; set; }

        [JsonPropertyName("friendlyMessage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FriendlyMessage { get; set; }

        [JsonPropertyName("message")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Message { get; set; }
    }
}
