using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class ManageAppListEntryResult
    {
        [JsonPropertyName("appModuleId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AppModuleId { get; set; }

        [JsonPropertyName("appModuleIdUnique")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AppModuleIdUnique { get; set; }

        [JsonPropertyName("name")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UniqueName { get; set; }

        [JsonPropertyName("hasSiteMap")]
        public bool HasSiteMap { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }
    }
}
