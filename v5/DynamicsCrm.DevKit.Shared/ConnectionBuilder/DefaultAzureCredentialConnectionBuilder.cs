using System;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Azure credential chain authentication.
    /// Automatically tries multiple authentication methods in order:
    /// 1. Environment variables (AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID)
    /// 2. Managed Identity (if running on Azure resource)
    /// 3. Visual Studio (authenticated account in VS)
    /// 4. Azure CLI (az login)
    /// 5. Azure PowerShell (Connect-AzAccount)
    /// 6. Interactive Browser (fallback)
    /// </summary>
    public class DefaultAzureCredentialConnectionBuilder : IConnectionBuilder
    {
        public string Type => ConnectionType.DefaultAzureCredential;

        public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            // Create DefaultAzureCredential with all methods enabled
            var credential = new DefaultAzureCredential(new DefaultAzureCredentialOptions
            {
                ExcludeEnvironmentCredential = false,
                ExcludeManagedIdentityCredential = false,
                ExcludeSharedTokenCacheCredential = false,
                ExcludeVisualStudioCredential = false,
                ExcludeVisualStudioCodeCredential = false,
                ExcludeAzureCliCredential = false,
                ExcludeAzurePowerShellCredential = false,
                ExcludeInteractiveBrowserCredential = false
            });

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
            // DefaultAzureCredential doesn't use traditional connection string
            // This is for diagnostic/display purposes only
            return $"AuthType=DefaultAzureCredential;Url={connection.Url};";
        }

        public Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return Task.FromResult((false, "URL is required"));

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out var uri))
                return Task.FromResult((false, "Invalid URL format"));

            if (!uri.Scheme.Equals("https", StringComparison.OrdinalIgnoreCase))
                return Task.FromResult((false, "URL must use HTTPS"));

            // No other required parameters - DefaultAzureCredential auto-discovers credentials
            return Task.FromResult<(bool, string)>((true, null));
        }
    }
}
