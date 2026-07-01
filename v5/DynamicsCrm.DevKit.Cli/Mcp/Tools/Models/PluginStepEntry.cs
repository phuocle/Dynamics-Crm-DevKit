using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class PluginStepEntry
    {
        [JsonPropertyName("stepId")]
        public string StepId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("assemblyName")]
        public string AssemblyName { get; set; }

        [JsonPropertyName("typeName")]
        public string TypeName { get; set; }

        [JsonPropertyName("message")]
        public string Message { get; set; }

        [JsonPropertyName("entity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity { get; set; }

        [JsonPropertyName("stage")]
        public string Stage { get; set; }

        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("rank")]
        public int Rank { get; set; }

        [JsonPropertyName("filteringAttributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FilteringAttributes { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("unsecureConfig")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UnsecureConfig { get; set; }

        [JsonPropertyName("secureConfigId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SecureConfigId { get; set; }

        [JsonPropertyName("secureConfig")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SecureConfig { get; set; }

        [JsonPropertyName("impersonatingUser")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ImpersonatingUser { get; set; }

        [JsonPropertyName("asyncAutoDelete")]
        public bool AsyncAutoDelete { get; set; }

        [JsonPropertyName("supportedDeployment")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SupportedDeployment { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("images")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginImageEntry> Images { get; set; }
    }
}
