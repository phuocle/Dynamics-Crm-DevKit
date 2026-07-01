using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class PublishResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("entities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Entities { get; set; }

        [JsonPropertyName("entityCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? EntityCount { get; set; }

        [JsonPropertyName("appModules")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> AppModules { get; set; }

        [JsonPropertyName("appModuleCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? AppModuleCount { get; set; }

        [JsonPropertyName("includeGlobalOptionSets")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool IncludeGlobalOptionSets { get; set; }

        [JsonPropertyName("includeSiteMap")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool IncludeSiteMap { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("asyncOperationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AsyncOperationId { get; set; }

        [JsonPropertyName("durationSeconds")]
        public double DurationSeconds { get; set; }
    }
}
