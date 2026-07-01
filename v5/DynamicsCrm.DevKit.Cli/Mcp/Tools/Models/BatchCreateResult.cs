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
        public bool UsedDefaultParallelism { get; set; }

        [JsonPropertyName("items")]
        public List<BatchCreateItem> Items { get; set; } = [];
    }
}
