using System;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Connection builder for ClientSecret authentication.
    /// Builds connection string from separate parameters and uses ServiceClient(connectionString).
    /// </summary>
    public class ClientSecretConnectionBuilder : IConnectionBuilder
    {
        public string Type => "ClientSecret";

        public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            // Build connection string from parameters
            var connectionString = BuildConnectionString(connection);

            // Create ServiceClient using connection string
            var serviceClient = new ServiceClient(connectionString);

            // Wait for connection to be ready
            var timeout = TimeSpan.FromSeconds(30);
            var start = DateTime.Now;
            while (!serviceClient.IsReady && DateTime.Now - start < timeout)
            {
                await Task.Delay(500);
            }

            if (!serviceClient.IsReady)
            {
                var error = !string.IsNullOrEmpty(serviceClient.LastError)
                    ? serviceClient.LastError
                    : "Connection timeout";
                throw new Exception($"Failed to connect: {error}");
            }

            return serviceClient;
        }

        public string BuildConnectionString(CrmConnection connection)
        {
            // Decrypt ClientSecret if it's encrypted (auto-detect, same as legacy)
            var clientSecret = Helper.DecryptString(connection.ClientSecret);

            // Build connection string
            var connStr = $"AuthType=ClientSecret;Url={connection.Url};ClientId={connection.ClientId};ClientSecret={clientSecret};";

            // Add TenantId if specified
            if (!string.IsNullOrEmpty(connection.TenantId))
                connStr += $"TenantId={connection.TenantId};";

            return connStr;
        }

        public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return (false, "URL is required for ClientSecret authentication");

            if (string.IsNullOrEmpty(connection.ClientId))
                return (false, "ClientId is required for ClientSecret authentication");

            if (string.IsNullOrEmpty(connection.ClientSecret))
                return (false, "ClientSecret is required for ClientSecret authentication");

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out _))
                return (false, $"Invalid URL format: {connection.Url}");

            return await Task.FromResult((true, (string)null));
        }
    }
}
