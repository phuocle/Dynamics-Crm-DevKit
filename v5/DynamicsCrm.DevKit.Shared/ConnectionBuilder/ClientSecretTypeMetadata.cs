using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Metadata for ClientSecret (Service Principal) authentication.
    /// This is the primary auth type for automated scenarios and CI/CD.
    /// </summary>
    public class ClientSecretTypeMetadata : IConnectionTypeMetadata
    {
        public string Type => "ClientSecret";

        public string DisplayName => "Client Secret (Service Principal)";

        public string Description => "Authenticate using Azure AD App Registration with Client ID and Client Secret. Best for automated scenarios and CI/CD pipelines.";

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
            },
            new ConnectionFieldDefinition
            {
                FieldName = "ClientId",
                Label = "Client ID (Application ID)",
                IsRequired = true,
                IsPassword = false,
                Placeholder = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                DisplayOrder = 2
            },
            new ConnectionFieldDefinition
            {
                FieldName = "ClientSecret",
                Label = "Client Secret",
                IsRequired = true,
                IsPassword = true,
                Placeholder = "Enter your client secret value",
                DisplayOrder = 3
            }
        };
    }
}
