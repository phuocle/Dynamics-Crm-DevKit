using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Identity.Client;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Certificate-based authentication for production environments.
    /// Supports file-based (.pfx) and Windows Certificate Store certificates.
    /// </summary>
    public class ClientCertificateConnectionBuilder : IConnectionBuilder
    {
        public string Type => ConnectionType.ClientCertificate;

        public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            // Validate and load certificate
            var (cert, error) = LoadCertificate(connection);
            if (cert == null)
            {
                throw new InvalidOperationException(error);
            }

            // Validate certificate
            var (isValid, validationError) = ValidateCertificate(cert);
            if (!isValid)
            {
                throw new InvalidOperationException(validationError);
            }

            // Build confidential client with certificate
            var tenantId = string.IsNullOrEmpty(connection.TenantId)
                ? "organizations"
                : connection.TenantId;

            var confidentialClient = ConfidentialClientApplicationBuilder
                .Create(connection.ClientId)
                .WithCertificate(cert)
                .WithAuthority($"https://login.microsoftonline.com/{tenantId}")
                .Build();

            // Get token
            var token = await GetTokenAsync(confidentialClient, connection);

            // Create ServiceClient with token provider for automatic refresh
            var serviceClient = new ServiceClient(
                new Uri(connection.Url),
                async (url) => await GetTokenAsync(confidentialClient, connection)
            );

            return serviceClient;
        }

        private async Task<string> GetTokenAsync(
            IConfidentialClientApplication app,
            CrmConnection connection)
        {
            var scope = new Uri(new Uri(connection.Url), "/.default").ToString();
            var scopes = new[] { scope };

            var authResult = await app.AcquireTokenForClient(scopes)
                .ExecuteAsync();

            return authResult.AccessToken;
        }

        /// <summary>
        /// Load certificate from file or Windows Certificate Store.
        /// </summary>
        private (X509Certificate2 cert, string error) LoadCertificate(CrmConnection connection)
        {
            // From file path
            if (!string.IsNullOrEmpty(connection.CertificatePath))
            {
                if (!File.Exists(connection.CertificatePath))
                {
                    return (null, $"Certificate file not found: {connection.CertificatePath}");
                }

                try
                {
                    var cert = !string.IsNullOrEmpty(connection.CertificatePassword)
                        ? new X509Certificate2(
                            connection.CertificatePath,
                            connection.CertificatePassword,
                            X509KeyStorageFlags.MachineKeySet | X509KeyStorageFlags.PersistKeySet)
                        : new X509Certificate2(connection.CertificatePath);

                    return (cert, null);
                }
                catch (Exception ex)
                {
                    return (null, $"Failed to load certificate from file: {ex.Message}");
                }
            }

            // From thumbprint in store
            if (!string.IsNullOrEmpty(connection.CertificateThumbprint))
            {
                try
                {
                    var storeLocation = connection.CertificateStoreLocation?.ToUpperInvariant() switch
                    {
                        "LOCALMACHINE" => StoreLocation.LocalMachine,
                        _ => StoreLocation.CurrentUser
                    };

                    var storeName = connection.CertificateStoreName?.ToUpperInvariant() switch
                    {
                        "ROOT" => StoreName.Root,
                        "CA" => StoreName.CertificateAuthority,
                        "TRUST" => StoreName.TrustedPeople,
                        _ => StoreName.My
                    };

                    using var store = new X509Store(storeName, storeLocation);
                    store.Open(OpenFlags.ReadOnly);

                    var certificates = store.Certificates.Find(
                        X509FindType.FindByThumbprint,
                        connection.CertificateThumbprint,
                        validOnly: false);

                    if (certificates.Count == 0)
                    {
                        return (null, $"Certificate with thumbprint '{connection.CertificateThumbprint}' not found in {storeLocation}/{storeName}");
                    }

                    return (certificates[0], null);
                }
                catch (Exception ex)
                {
                    return (null, $"Failed to load certificate from store: {ex.Message}");
                }
            }

            return (null, "Either CertificatePath or CertificateThumbprint must be provided");
        }

        /// <summary>
        /// Validate certificate for authentication.
        /// </summary>
        private (bool isValid, string error) ValidateCertificate(X509Certificate2 cert)
        {
            // Check has private key
            if (!cert.HasPrivateKey)
            {
                return (false, "Certificate does not have a private key. Export with private key included.");
            }

            // Check expiration
            if (cert.NotAfter < DateTime.Now)
            {
                return (false, $"Certificate expired on {cert.NotAfter:yyyy-MM-dd}");
            }

            // Check not yet valid
            if (cert.NotBefore > DateTime.Now)
            {
                return (false, $"Certificate not yet valid (starts {cert.NotBefore:yyyy-MM-dd})");
            }

            // Warn if expiring soon (30 days) - just log, don't fail
            var daysUntilExpiry = (cert.NotAfter - DateTime.Now).TotalDays;
            if (daysUntilExpiry < 30)
            {
                // Could add logging here
                // Console.WriteLine($"WARNING: Certificate expires in {daysUntilExpiry:F0} days");
            }

            return (true, null);
        }

        public string BuildConnectionString(CrmConnection connection)
        {
            // ClientCertificate doesn't use traditional connection string
            // This is for diagnostic/display purposes only
            var certInfo = !string.IsNullOrEmpty(connection.CertificatePath)
                ? $"CertPath={connection.CertificatePath}"
                : $"CertThumbprint={connection.CertificateThumbprint}";

            return $"AuthType=ClientCertificate;Url={connection.Url};ClientId={connection.ClientId};{certInfo};";
        }

        public Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return Task.FromResult((false, "URL is required"));

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out var uri))
                return Task.FromResult((false, "Invalid URL format"));

            if (!uri.Scheme.Equals("https", StringComparison.OrdinalIgnoreCase))
                return Task.FromResult((false, "URL must use HTTPS"));

            if (string.IsNullOrEmpty(connection.ClientId))
                return Task.FromResult((false, "ClientId is required for certificate authentication"));

            if (!Guid.TryParse(connection.ClientId, out _))
                return Task.FromResult((false, "ClientId must be a valid GUID"));

            if (string.IsNullOrEmpty(connection.CertificatePath) &&
                string.IsNullOrEmpty(connection.CertificateThumbprint))
                return Task.FromResult((false, "Either CertificatePath or CertificateThumbprint is required"));

            return Task.FromResult<(bool, string)>((true, null));
        }
    }
}
