using System;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Connection builder for AD (Active Directory) authentication.
    /// Builds connection string from separate parameters and uses ServiceClient(connectionString).
    /// </summary>
    public class ADConnectionBuilder : IConnectionBuilder
    {
        public string Type => "AD";

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
            // Decrypt Password if it's encrypted (auto-detect, same as legacy)
            var password = Helper.DecryptString(connection.Password);

            // Parse domain\username format
            var userName = connection.UserName;
            string domain = null;
            string user = userName;

            if (!string.IsNullOrEmpty(userName) && userName.Contains("\\"))
            {
                var parts = userName.Split('\\');
                if (parts.Length == 2)
                {
                    domain = parts[0];
                    user = parts[1];
                }
            }

            // Build connection string
            var connStr = $"AuthType=AD;Url={connection.Url};";
            if (!string.IsNullOrEmpty(domain))
                connStr += $"Domain={domain};";
            connStr += $"Username={user};Password={password};";

            return connStr;
        }

        public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return (false, "URL is required for AD authentication");

            if (string.IsNullOrEmpty(connection.UserName))
                return (false, "Username is required for AD authentication (format: domain\\username)");

            if (string.IsNullOrEmpty(connection.Password))
                return (false, "Password is required for AD authentication");

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out _))
                return (false, $"Invalid URL format: {connection.Url}");

            return await Task.FromResult((true, (string)null));
        }
    }
}
