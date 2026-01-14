using System.Collections.Generic;
using System.Linq;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Registry of supported connection types.
    /// Provides metadata for form generation and type enumeration.
    /// </summary>
    /// <remarks>
    /// To add a new connection type:
    /// 1. Create [Type]TypeMetadata.cs implementing IConnectionTypeMetadata
    /// 2. Add it to the _allTypes list below
    /// 3. Ensure corresponding IConnectionBuilder exists in ConnectionBuilderFactory
    /// </remarks>
    public static class ConnectionTypeRegistry
    {
        // All registered connection type metadata
        private static readonly IReadOnlyList<IConnectionTypeMetadata> _allTypes = new IConnectionTypeMetadata[]
        {
            // Phase 1: ClientSecret only
            new ClientSecretTypeMetadata(),

            // Phase 2: OAuth (Username/Password)
            new OAuthTypeMetadata(),

            // Phase 3: Interactive (Browser Sign-in)
            new InteractiveTypeMetadata(),

            // Phase 4: AD (Active Directory) for on-premises
            new ADTypeMetadata(),

            // Future phases: Uncomment as implemented
            // new DeviceCodeTypeMetadata(),
            // new ClientCertificateTypeMetadata(),
            // new ManagedIdentityTypeMetadata(),
            // new DefaultAzureCredentialTypeMetadata(),
            // new FromPacTypeMetadata(),
        };

        /// <summary>
        /// Get all registered connection types.
        /// </summary>
        /// <param name="vsixOnly">If true, only return types supported in VSIX UI.</param>
        /// <returns>List of connection type metadata.</returns>
        public static IReadOnlyList<IConnectionTypeMetadata> GetSupportedTypes(bool vsixOnly = false)
        {
            if (vsixOnly)
            {
                return _allTypes.Where(t => t.SupportedInVsix).ToList();
            }
            return _allTypes;
        }

        /// <summary>
        /// Get metadata for a specific connection type.
        /// </summary>
        /// <param name="type">The type identifier (e.g., "ClientSecret").</param>
        /// <returns>Metadata or null if not found.</returns>
        public static IConnectionTypeMetadata GetMetadata(string type)
        {
            if (string.IsNullOrEmpty(type)) return null;
            return _allTypes.FirstOrDefault(t => 
                t.Type.Equals(type, System.StringComparison.OrdinalIgnoreCase));
        }

        /// <summary>
        /// Check if a connection type is registered.
        /// </summary>
        public static bool IsRegistered(string type)
        {
            return GetMetadata(type) != null;
        }
    }
}
