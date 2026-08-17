using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class RolePrivilegeEntry
    {
        [JsonPropertyName("right")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Right { get; set; }

        [JsonPropertyName("depth")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Depth { get; set; }
    }
}
