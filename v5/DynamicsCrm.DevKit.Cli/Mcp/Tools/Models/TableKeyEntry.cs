using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TableKeyEntry
    {
        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("keyAttributes")]
        public List<string> KeyAttributes { get; set; } = [];
    }
}
