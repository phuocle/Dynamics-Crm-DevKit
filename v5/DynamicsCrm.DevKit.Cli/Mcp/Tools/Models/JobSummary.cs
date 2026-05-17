using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class JobSummary
    {
        [JsonPropertyName("plugin")]
        public int Plugin { get; set; }

        [JsonPropertyName("workflow")]
        public int Workflow { get; set; }

        [JsonPropertyName("bulkDelete")]
        public int BulkDelete { get; set; }

        [JsonPropertyName("import")]
        public int Import { get; set; }

        [JsonPropertyName("solution")]
        public int Solution { get; set; }

        [JsonPropertyName("other")]
        public int Other { get; set; }
    }
}
