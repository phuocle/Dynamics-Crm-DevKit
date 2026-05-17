using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class CellUpdateInstruction
    {
        [JsonPropertyName("cell_name")]
        public string CellName { get; set; }

        [JsonPropertyName("set_attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, string> SetAttributes { get; set; }

        [JsonPropertyName("remove_attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> RemoveAttributes { get; set; }
    }
}
