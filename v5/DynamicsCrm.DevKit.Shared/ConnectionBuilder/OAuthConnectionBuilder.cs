using System;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Connection builder for OAuth authentication.
    /// Builds connection string from separate parameters and uses ServiceClient(connectionString).
    /// </summary>
    public class OAuthConnectionBuilder : IConnectionBuilder
    {
        public string Type => "OAuth";

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
            // Decrypt Password if it's encrypted (auto-detect, same as legacy)
            var password = Helper.DecryptString(connection.Password);
            
            if (shouldMaskPassword)
            {
                password = "***";
            }

            // Use custom ClientId if specified, otherwise use Microsoft default
            var appId = !string.IsNullOrEmpty(connection.ClientId)
                ? connection.ClientId
                : "51f81489-12ee-4a9e-aaae-a2591f45987d";

            // Build connection string
            var connStr = $"AuthType=OAuth;Url={connection.Url};Username={connection.UserName};Password={password};";
            connStr += $"AppId={appId};";
            connStr += "RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;";
            connStr += "LoginPrompt=Auto;";

            return connStr;
        }

        public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return (false, "URL is required for OAuth authentication");

            if (string.IsNullOrEmpty(connection.UserName))
                return (false, "Username is required for OAuth authentication");

            if (string.IsNullOrEmpty(connection.Password))
                return (false, "Password is required for OAuth authentication");

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out _))
                return (false, $"Invalid URL format: {connection.Url}");

            return await Task.FromResult((true, (string)null));
        }
    }
}
