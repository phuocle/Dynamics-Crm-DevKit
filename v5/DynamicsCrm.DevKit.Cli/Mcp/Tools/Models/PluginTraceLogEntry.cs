using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// One plugintracelog row. Fields verified by Program.cs --probe-trace.
    /// mode/operationtype: OptionSetValue → use FormattedValues for label.
    /// issystemcreated: Boolean → use FormattedValues for label.
    /// depth/performanceexecutionduration: int.
    /// correlationid/pluginstepid/requestid: Guid.
    /// messageblock/exceptiondetails: Memo (detail mode only).
    /// </summary>
    internal sealed class PluginTraceLogEntry
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("typeName")]
        public string TypeName { get; set; }

        [JsonPropertyName("messageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageName { get; set; }

        [JsonPropertyName("primaryEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("mode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Mode { get; set; }

        [JsonPropertyName("operationType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OperationType { get; set; }

        [JsonPropertyName("depth")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Depth { get; set; }

        [JsonPropertyName("durationMs")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? DurationMs { get; set; }

        [JsonPropertyName("correlationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CorrelationId { get; set; }

        [JsonPropertyName("pluginStepId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginStepId { get; set; }

        [JsonPropertyName("requestId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RequestId { get; set; }

        [JsonPropertyName("isSystemCreated")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string IsSystemCreated { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("messageBlock")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageBlock { get; set; }

        [JsonPropertyName("exceptionDetails")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExceptionDetails { get; set; }
    }
}
