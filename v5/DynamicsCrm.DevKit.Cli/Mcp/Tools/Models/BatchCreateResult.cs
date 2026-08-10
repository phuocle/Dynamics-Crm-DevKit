using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class BatchCreateResult
    {
        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("total")]
        public int Total { get; set; }

        [JsonPropertyName("succeeded")]
        public int Succeeded { get; set; }

        [JsonPropertyName("failed")]
        public int Failed { get; set; }

        [JsonPropertyName("durationSeconds")]
        public double DurationSeconds { get; set; }

        [JsonPropertyName("parallelism")]
        public int Parallelism { get; set; }

        [JsonPropertyName("usedDefaultParallelism")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? UsedDefaultParallelism { get; set; }

        [JsonPropertyName("inputFormat")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string InputFormat { get; set; }

        [JsonPropertyName("bypassCustomLogic")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? BypassCustomLogic { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }

        [JsonPropertyName("items")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<BatchCreateItem> Items { get; set; }

        [JsonPropertyName("failedItems")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<BatchCreateItem> FailedItems { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }
    }
}
