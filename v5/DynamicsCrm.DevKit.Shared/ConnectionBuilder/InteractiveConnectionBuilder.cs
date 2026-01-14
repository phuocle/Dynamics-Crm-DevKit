using System;
using System.Linq;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Identity.Client;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Browser-based OAuth authentication.
    /// Opens default browser for user sign-in, supports MFA and Conditional Access.
    /// Tokens are cached for silent acquisition on subsequent calls.
    /// </summary>
    public class InteractiveConnectionBuilder : IConnectionBuilder
    {
        // Microsoft-provided AppId for OAuth
        private const string DefaultClientId = "51f81489-12ee-4a9e-aaae-a2591f45987d";

        public string Type => ConnectionType.Interactive;

        public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            var clientId = string.IsNullOrEmpty(connection.ClientId)
                ? DefaultClientId
                : connection.ClientId;

            var publicClientBuilder = PublicClientApplicationBuilder
                .Create(clientId)
                .WithRedirectUri("http://localhost");

            // Add tenant if specified
            if (!string.IsNullOrEmpty(connection.TenantId))
            {
                publicClientBuilder.WithTenantId(connection.TenantId);
            }

            var publicClient = publicClientBuilder.Build();

            // Register token cache if connection has a name
            if (!string.IsNullOrEmpty(connection.Name))
            {
                var tokenCache = new SecureTokenCache();
                tokenCache.RegisterCache(publicClient, connection.Name);
            }

            // Get token (will use cache if available, otherwise prompt)
            var token = await GetTokenInteractiveAsync(publicClient, connection);

            // Create ServiceClient with token provider for automatic refresh
            var serviceClient = new ServiceClient(
                new Uri(connection.Url),
                async (url) => await GetTokenInteractiveAsync(publicClient, connection)
            );

            return serviceClient;
        }

        private async Task<string> GetTokenInteractiveAsync(
            IPublicClientApplication app,
            CrmConnection connection)
        {
            var scope = new Uri(new Uri(connection.Url), "/.default").ToString();
            var scopes = new[] { scope };

            AuthenticationResult authResult = null;

            // Try silent acquisition from cache first
            var accounts = await app.GetAccountsAsync();
            var account = !string.IsNullOrEmpty(connection.UserName)
                ? accounts.FirstOrDefault(a => a.Username.Equals(connection.UserName, StringComparison.OrdinalIgnoreCase))
                : accounts.FirstOrDefault();

            if (account != null)
            {
                try
                {
                    authResult = await app.AcquireTokenSilent(scopes, account)
                        .ExecuteAsync();
                }
                catch (MsalUiRequiredException) { }
                catch (MsalServiceException) { }
            }

            // Interactive acquisition if cache miss
            if (authResult == null)
            {
                authResult = await app.AcquireTokenInteractive(scopes)
                    .WithPrompt(Prompt.SelectAccount)
                    .ExecuteAsync();

                // Update connection with username from auth
                connection.UserName = authResult.Account.Username;
            }

            return authResult.AccessToken;
        }

        public string BuildConnectionString(CrmConnection connection)
        {
            // Interactive doesn't use traditional connection string
            // This is for diagnostic/display purposes only
            var clientId = string.IsNullOrEmpty(connection.ClientId)
                ? DefaultClientId
                : connection.ClientId;

            return $"AuthType=Interactive;Url={connection.Url};ClientId={clientId};";
        }

        public Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.Url))
                return Task.FromResult((false, "URL is required"));

            if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out var uri))
                return Task.FromResult((false, "Invalid URL format"));

            if (!uri.Scheme.Equals("https", StringComparison.OrdinalIgnoreCase))
                return Task.FromResult((false, "URL must use HTTPS"));

            if (!string.IsNullOrEmpty(connection.ClientId) &&
                !Guid.TryParse(connection.ClientId, out _))
                return Task.FromResult((false, "ClientId must be a valid GUID"));

            return Task.FromResult<(bool, string)>((true, null));
        }
    }
}
