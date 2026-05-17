using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchStatusEntry
    {
        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("lockboxStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LockboxStatus { get; set; }

        [JsonPropertyName("cmkStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CmkStatus { get; set; }

        [JsonPropertyName("entityStatusResults")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SearchEntityStatusEntry> EntityStatusResults { get; set; }

        [JsonPropertyName("manyToManyRelationshipSyncStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SearchManyToManyRelationshipEntry> ManyToManyRelationshipSyncStatus { get; set; }
    }
}
