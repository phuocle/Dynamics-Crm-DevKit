using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class ManagedIdentityEntry
    {
        [JsonPropertyName("managedIdentityId")]
        public string ManagedIdentityId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("applicationId")]
        public string ApplicationId { get; set; }

        [JsonPropertyName("tenantId")]
        public string TenantId { get; set; }

        [JsonPropertyName("credentialSource")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CredentialSource { get; set; }
    }
}
