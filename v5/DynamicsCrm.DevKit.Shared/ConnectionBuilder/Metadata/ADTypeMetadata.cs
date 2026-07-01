using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata
{
    /// <summary>
    /// Metadata for AD (Active Directory) authentication.
    /// Uses domain\username and password for on-premises Dynamics CRM.
    /// </summary>
    public class ADTypeMetadata : IConnectionTypeMetadata
    {
        public string Type => "AD";

        public string DisplayName => "AD (Active Directory)";

        public string Description => "Authenticate using Active Directory credentials. For on-premises Dynamics CRM deployments. Username format: domain\\username";

        public bool SupportedInVsix => true;

        public IReadOnlyList<ConnectionFieldDefinition> Fields => new[]
        {
            new ConnectionFieldDefinition
            {
                FieldName = "Url",
                Label = "Dynamics CRM URL",
                IsRequired = true,
                IsPassword = false,
                Placeholder = "https://yourorg.crm.contoso.com",
                DisplayOrder = 1
            },
            new ConnectionFieldDefinition
            {
                FieldName = "UserName",
                Label = "Username",
                IsRequired = true,
                IsPassword = false,
                Placeholder = "domain\\username",
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
