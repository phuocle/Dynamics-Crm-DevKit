using System;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Factory for creating connection builders based on authentication type.
    /// </summary>
    public static class ConnectionBuilderFactory
    {
        /// <summary>
        /// Get the appropriate connection builder for the given type.
        /// </summary>
        /// <param name="type">Connection type (Interactive, DeviceCode, OAuth, ClientSecret, etc.)</param>
        /// <returns>IConnectionBuilder implementation for the type</returns>
        /// <exception cref="NotSupportedException">Thrown for unknown or unimplemented types</exception>
        public static IConnectionBuilder GetBuilder(string type)
        {
            if (string.IsNullOrEmpty(type))
            {
                throw new ArgumentNullException(nameof(type), "Connection type is required");
            }

            return type.ToUpperInvariant() switch
            {
                // Phase 2: Modern Interactive Auth
                "INTERACTIVE" => new InteractiveConnectionBuilder(),
                "DEVICECODE" => new DeviceCodeConnectionBuilder(),

                // Phase 1: Enhanced existing types
                "OAUTH" => new OAuthConnectionBuilder(),
                "CLIENTSECRET" => new ClientSecretConnectionBuilder(),
                "AD" => new ADConnectionBuilder(),

                // Phase 3: Production & Azure Auth
                "CLIENTCERTIFICATE" => new ClientCertificateConnectionBuilder(),
                "MANAGEDIDENTITY" => new ManagedIdentityConnectionBuilder(),
                "DEFAULTAZURECREDENTIAL" => new DefaultAzureCredentialConnectionBuilder(),

                // Phase 4: Integration
                "FROMPAC" => new FromPacConnectionBuilder(),

                _ => throw new NotSupportedException(
                    $"Connection type '{type}' is not supported. " +
                    $"Supported types: Interactive, DeviceCode, ClientSecret, ClientCertificate, ManagedIdentity, DefaultAzureCredential, FromPac. " +
                    $"For legacy auth, use --conn with OAuth or AD.")
            };
        }

        /// <summary>
        /// Check if a connection type is supported by the factory.
        /// </summary>
        public static bool IsSupported(string type)
        {
            if (string.IsNullOrEmpty(type)) return false;

            return type.ToUpperInvariant() switch
            {
                "INTERACTIVE" => true,
                "DEVICECODE" => true,
                "OAUTH" => true,
                "CLIENTSECRET" => true,
                "AD" => true,
                "CLIENTCERTIFICATE" => true,
                "MANAGEDIDENTITY" => true,
                "DEFAULTAZURECREDENTIAL" => true,
                "FROMPAC" => true,
                _ => false
            };
        }

        /// <summary>
        /// Check if a connection type will be supported in a future phase.
        /// </summary>
        public static (bool planned, string phase) GetFuturePlanning(string type)
        {
            if (string.IsNullOrEmpty(type)) return (false, null);

            return type.ToUpperInvariant() switch
            {
                // All connection types are now implemented!
                // This method is kept for backward compatibility but returns false for all types.
                _ => (false, null)
            };
        }
    }
}
