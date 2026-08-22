using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TableMatchEntry
    {
        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }
    }
}
