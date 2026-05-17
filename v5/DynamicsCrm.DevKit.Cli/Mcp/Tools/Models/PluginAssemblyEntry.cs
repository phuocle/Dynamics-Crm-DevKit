using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class PluginAssemblyEntry
    {
        [JsonPropertyName("assemblyId")]
        public string AssemblyId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("isolationMode")]
        public string IsolationMode { get; set; }

        [JsonPropertyName("sourceType")]
        public string SourceType { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("hasManagedIdentity")]
        public bool HasManagedIdentity { get; set; }

        [JsonPropertyName("managedIdentity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public ManagedIdentityEntry ManagedIdentity { get; set; }

        [JsonPropertyName("packageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PackageName { get; set; }

        [JsonPropertyName("typeCount")]
        public int TypeCount { get; set; }

        [JsonPropertyName("types")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginTypeEntry> Types { get; set; }
    }
}
