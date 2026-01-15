using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata
{
    /// <summary>
    /// Metadata for DeviceCode authentication.
    /// Device code flow for headless/remote environments.
    /// Displays URL and code for user to authenticate in another browser.
    /// Supports Docker, SSH, WSL, and CI/CD pipelines.
    /// Only requires URL - browser will handle authentication.
    /// </summary>
    public class DeviceCodeTypeMetadata : IConnectionTypeMetadata
    {
        public string Type => "DeviceCode";

        public string DisplayName => "Device Code (Remote/Headless)";

        public string Description => "Displays a code to authenticate in another browser. For Docker, SSH, WSL, and remote environments.";

        public bool SupportedInVsix => true;

        public IReadOnlyList<ConnectionFieldDefinition> Fields => new[]
        {
            new ConnectionFieldDefinition
            {
                FieldName = "Url",
                Label = "Dynamics 365 URL",
                IsRequired = true,
                IsPassword = false,
                Placeholder = "https://yourorg.crm.dynamics.com",
                DisplayOrder = 1
            }
            // ClientId and TenantId are optional - uses Microsoft defaults
        };
    }
}
