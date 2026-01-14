using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Metadata for OAuth (Username/Password) authentication.
    /// Uses the OAuth flow with username and password credentials.
    /// </summary>
    public class OAuthTypeMetadata : IConnectionTypeMetadata
    {
        public string Type => "OAuth";

        public string DisplayName => "OAuth (Username/Password)";

        public string Description => "Authenticate using your Dynamics 365 username and password. Suitable for interactive scenarios with user credentials.";

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
                FieldName = "UserName",
                Label = "Username",
                IsRequired = true,
                IsPassword = false,
                Placeholder = "user@domain.com",
                DisplayOrder = 2
            },
            new ConnectionFieldDefinition
            {
                FieldName = "Password",
                Label = "Password",
                IsRequired = true,
                IsPassword = true,
                Placeholder = "Enter your password",
                DisplayOrder = 3
            }
        };
    }
}
