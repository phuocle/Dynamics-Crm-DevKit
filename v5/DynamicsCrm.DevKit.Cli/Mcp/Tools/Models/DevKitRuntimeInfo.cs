using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class DevKitRuntimeInfo
    {
        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("build")]
        public string Build { get; set; }

        [JsonPropertyName("assemblyVersion")]
        public string AssemblyVersion { get; set; }

        [JsonPropertyName("fileVersion")]
        public string FileVersion { get; set; }

        [JsonPropertyName("informationalVersion")]
        public string InformationalVersion { get; set; }

        [JsonPropertyName("processId")]
        public int ProcessId { get; set; }

        [JsonPropertyName("processStartTime")]
        public string ProcessStartTime { get; set; }

        [JsonPropertyName("assemblyPath")]
        public string AssemblyPath { get; set; }

        [JsonPropertyName("assemblySha256")]
        public string AssemblySha256 { get; set; }
    }
}
