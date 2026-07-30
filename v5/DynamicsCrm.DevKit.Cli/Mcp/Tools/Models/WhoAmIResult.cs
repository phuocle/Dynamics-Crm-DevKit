using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WhoAmIResult
    {
        [JsonPropertyName("userId")]
        public string UserId { get; set; }

        [JsonPropertyName("fullName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FullName { get; set; }

        [JsonPropertyName("domainName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DomainName { get; set; }

        [JsonPropertyName("email")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Email { get; set; }

        [JsonPropertyName("businessUnitId")]
        public string BusinessUnitId { get; set; }

        [JsonPropertyName("organizationId")]
        public string OrganizationId { get; set; }

        [JsonPropertyName("environmentUrl")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EnvironmentUrl { get; set; }

        [JsonPropertyName("version")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Version { get; set; }

        [JsonPropertyName("orgFriendlyName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OrgFriendlyName { get; set; }

        [JsonPropertyName("orgUniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OrgUniqueName { get; set; }

        [JsonPropertyName("tenantId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TenantId { get; set; }

        [JsonPropertyName("environmentId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EnvironmentId { get; set; }

        [JsonPropertyName("language")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Language { get; set; }

        [JsonPropertyName("currency")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Currency { get; set; }

        [JsonPropertyName("fiscalStart")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FiscalStart { get; set; }

        [JsonPropertyName("auditEnabled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? AuditEnabled { get; set; }

        [JsonPropertyName("devkit")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public DevKitRuntimeInfo DevKit { get; set; }

        [JsonPropertyName("roles")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<RoleInfo> Roles { get; set; }

        [JsonPropertyName("accessToken")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AccessToken { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }
    }
}
