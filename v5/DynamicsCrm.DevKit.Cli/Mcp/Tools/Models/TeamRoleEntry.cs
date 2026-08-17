using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class TeamRoleEntry
    {
        [JsonPropertyName("teamId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TeamId { get; set; }

        [JsonPropertyName("teamName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TeamName { get; set; }

        [JsonPropertyName("teamType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TeamType { get; set; }

        [JsonPropertyName("roleId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RoleId { get; set; }

        [JsonPropertyName("roleName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RoleName { get; set; }
    }
}
