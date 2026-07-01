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

        public string BuildConnectionString(CrmConnection connection, bool shouldMaskPassword = false)
        {
            // Support both new format (ClientId/ClientSecret) and legacy format (UserName/Password)
            var clientId = !string.IsNullOrEmpty(connection.ClientId)
                ? connection.ClientId
                : connection.UserName;

            var clientSecretEncrypted = !string.IsNullOrEmpty(connection.ClientSecret)
                ? connection.ClientSecret
                : connection.Password;

            // Decrypt ClientSecret if it's encrypted (auto-detect)
            var clientSecret = Helper.DecryptString(clientSecretEncrypted);
            
            if (shouldMaskPassword)
            {
                clientSecret = "***";
            }

            // Build connection string
            var connStr = $"AuthType=ClientSecret;Url={connection.Url};ClientId={clientId};ClientSecret={clientSecret};";

            // Add TenantId if specified
            if (!string.IsNullOrEmpty(connection.TenantId))
                connStr += $"TenantId={connection.TenantId};";

            return connStr;
        }

        public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return (false, "URL is required for ClientSecret authentication");

            // Support both new (ClientId) and legacy (UserName) formats
            var hasClientId = !string.IsNullOrEmpty(connection.ClientId) || !string.IsNullOrEmpty(connection.UserName);
            if (!hasClientId)
                return (false, "ClientId is required for ClientSecret authentication");

            // Support both new (ClientSecret) and legacy (Password) formats
            var hasSecret = !string.IsNullOrEmpty(connection.ClientSecret) || !string.IsNullOrEmpty(connection.Password);
            if (!hasSecret)
                return (false, "ClientSecret is required for ClientSecret authentication");

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out _))
                return (false, $"Invalid URL format: {connection.Url}");

            return await Task.FromResult((true, (string)null));
        }
    }
}
