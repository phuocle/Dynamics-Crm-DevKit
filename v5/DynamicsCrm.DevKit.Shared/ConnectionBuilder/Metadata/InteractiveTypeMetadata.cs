using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata
{
    /// <summary>
    /// Metadata for Interactive (Browser) authentication.
    /// Opens browser for sign-in, supports MFA and Conditional Access.
    /// Only requires URL - browser will handle authentication.
    /// </summary>
    public class InteractiveTypeMetadata : IConnectionTypeMetadata
    {
        public string Type => "Interactive";

        public string DisplayName => "Interactive (Browser Sign-in)";

        public string Description => "Opens your default browser for sign-in. Supports MFA and Conditional Access. Best for development scenarios.";

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
