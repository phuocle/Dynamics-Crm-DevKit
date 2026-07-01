using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class PluginStepSummary
    {
        [JsonPropertyName("preValidation")]
        public int PreValidation { get; set; }

        [JsonPropertyName("preOperation")]
        public int PreOperation { get; set; }

        [JsonPropertyName("mainOperation")]
        public int MainOperation { get; set; }

        [JsonPropertyName("postOperation")]
        public int PostOperation { get; set; }

        [JsonPropertyName("syncCount")]
        public int SyncCount { get; set; }

        [JsonPropertyName("asyncCount")]
        public int AsyncCount { get; set; }

        [JsonPropertyName("disabledCount")]
        public int DisabledCount { get; set; }
    }
}
