using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WhoAmIResult
    {
        [JsonPropertyName("userId")]
        public string UserId { get; set; }

        [JsonPropertyName("fullName")]
        public string FullName { get; set; }

        [JsonPropertyName("domainName")]
        public string DomainName { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("businessUnitId")]
        public string BusinessUnitId { get; set; }

        [JsonPropertyName("organizationId")]
        public string OrganizationId { get; set; }

        [JsonPropertyName("environmentUrl")]
        public string EnvironmentUrl { get; set; }

        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("orgFriendlyName")]
        public string OrgFriendlyName { get; set; }

        [JsonPropertyName("orgUniqueName")]
        public string OrgUniqueName { get; set; }

        [JsonPropertyName("orgId")]
        public string OrgId { get; set; }

        [JsonPropertyName("tenantId")]
        public string TenantId { get; set; }

        [JsonPropertyName("environmentId")]
        public string EnvironmentId { get; set; }

        [JsonPropertyName("language")]
        public string Language { get; set; }

        [JsonPropertyName("currency")]
        public string Currency { get; set; }

        [JsonPropertyName("fiscalStart")]
        public string FiscalStart { get; set; }

        [JsonPropertyName("auditEnabled")]
        public bool? AuditEnabled { get; set; }

        [JsonPropertyName("roles")]
        public List<string> Roles { get; set; } = [];

        [JsonPropertyName("accessToken")]
        public string AccessToken { get; set; }
    }

    internal sealed class CrudResult
    {
        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("fieldsUpdated")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? FieldsUpdated { get; set; }
    }

    internal sealed class WebApiResult
    {
        [JsonPropertyName("method")]
        public string Method { get; set; }

        [JsonPropertyName("url")]
        public string Url { get; set; }

        [JsonPropertyName("statusCode")]
        public int StatusCode { get; set; }

        [JsonPropertyName("statusText")]
        public string StatusText { get; set; }

        [JsonPropertyName("isSuccess")]
        public bool IsSuccess { get; set; }
    }
}
