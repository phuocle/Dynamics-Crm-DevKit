using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class ManageRoleResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; } = "";

        [JsonPropertyName("roleId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RoleId { get; set; }

        [JsonPropertyName("roleName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RoleName { get; set; }

        [JsonPropertyName("userId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UserId { get; set; }

        [JsonPropertyName("userName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UserName { get; set; }

        [JsonPropertyName("businessUnitId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string BusinessUnitId { get; set; }

        [JsonPropertyName("sourceRoleId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceRoleId { get; set; }

        [JsonPropertyName("privilegesCopied")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? PrivilegesCopied { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; } = "";

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        public bool IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        public string AddToSolutionMethod { get; set; } = "none";
    }
}
