using System;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Azure Managed Identity authentication for Azure resources.
    /// Supports both system-assigned and user-assigned identities.
    /// Works on Azure VMs, App Services, Functions, Container Instances.
    /// </summary>
    public class ManagedIdentityConnectionBuilder : IConnectionBuilder
    {
        public string Type => ConnectionType.ManagedIdentity;

        public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            // Create credential (system or user-assigned)
            TokenCredential credential = string.IsNullOrEmpty(connection.ManagedIdentityClientId)
                ? new ManagedIdentityCredential()
                : new ManagedIdentityCredential(connection.ManagedIdentityClientId);

            // Get initial token to validate connection works
            var token = await GetTokenAsync(credential, connection);

            // Create ServiceClient with token provider for automatic refresh
            var serviceClient = new ServiceClient(
                new Uri(connection.Url),
                async (url) => await GetTokenAsync(credential, connection)
            );

            return serviceClient;
        }

        private async Task<string> GetTokenAsync(TokenCredential credential, CrmConnection connection)
        {
            var scope = new Uri(new Uri(connection.Url), "/.default").ToString();
            var context = new TokenRequestContext(new[] { scope });

            var tokenResult = await credential.GetTokenAsync(context, default);
            return tokenResult.Token;
        }

        public string BuildConnectionString(CrmConnection connection)
        {
            // ManagedIdentity doesn't use traditional connection string
            // This is for diagnostic/display purposes only
            var identityType = string.IsNullOrEmpty(connection.ManagedIdentityClientId)
                ? "SystemAssigned"
                : $"UserAssigned={connection.ManagedIdentityClientId}";

            return $"AuthType=ManagedIdentity;Url={connection.Url};Identity={identityType};";
        }

        public Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return Task.FromResult((false, "URL is required"));

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out var uri))
                return Task.FromResult((false, "Invalid URL format"));

            if (!uri.Scheme.Equals("https", StringComparison.OrdinalIgnoreCase))
                return Task.FromResult((false, "URL must use HTTPS"));

            // ManagedIdentityClientId is optional (empty = system-assigned)
            if (!string.IsNullOrEmpty(connection.ManagedIdentityClientId) &&
                !Guid.TryParse(connection.ManagedIdentityClientId, out _))
                return Task.FromResult((false, "ManagedIdentityClientId must be a valid GUID"));

            return Task.FromResult<(bool, string)>((true, null));
        }
    }
}
