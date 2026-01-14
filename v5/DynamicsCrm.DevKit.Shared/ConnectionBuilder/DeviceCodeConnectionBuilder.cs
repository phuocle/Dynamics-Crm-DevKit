using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Identity.Client;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Device code OAuth flow for headless/remote environments.
    /// Displays URL and code for user to authenticate in another browser.
    /// Supports Docker, SSH, WSL, and CI/CD pipelines.
    /// </summary>
    public class DeviceCodeConnectionBuilder : IConnectionBuilder
    {
        // Microsoft-provided AppId for OAuth
        private const string DefaultClientId = "51f81489-12ee-4a9e-aaae-a2591f45987d";

        // Default timeout: 5 minutes
        private static readonly TimeSpan DefaultTimeout = TimeSpan.FromMinutes(5);

        /// <summary>
        /// Callback to display device code message. Set this before calling CreateServiceClientAsync.
        /// If null, writes to Console.
        /// </summary>
        public Action<string> DeviceCodeCallback { get; set; }

        public string Type => ConnectionType.DeviceCode;

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

            // Get token with device code flow
            var token = await GetTokenWithDeviceCodeAsync(publicClient, connection);

            // Create ServiceClient with token provider for automatic refresh
            var serviceClient = new ServiceClient(
                new Uri(connection.Url),
                async (url) => await GetTokenWithDeviceCodeAsync(publicClient, connection)
            );

            return serviceClient;
        }

        private async Task<string> GetTokenWithDeviceCodeAsync(
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
                    return authResult.AccessToken;
                }
                catch (MsalUiRequiredException) { }
                catch (MsalServiceException) { }
            }

            // Device code acquisition if cache miss
            using var cts = new CancellationTokenSource(DefaultTimeout);

            try
            {
                authResult = await app.AcquireTokenWithDeviceCode(scopes, deviceCodeResult =>
                {
                    // Display device code message
                    var message = deviceCodeResult.Message;
                    if (DeviceCodeCallback != null)
                    {
                        DeviceCodeCallback(message);
                    }
                    else
                    {
                        Console.WriteLine();
                        Console.WriteLine("═══════════════════════════════════════════════════════════════");
                        Console.WriteLine(" Device Code Authentication");
                        Console.WriteLine("═══════════════════════════════════════════════════════════════");
                        Console.WriteLine();
                        Console.WriteLine($" {message}");
                        Console.WriteLine();
                        Console.WriteLine(" Waiting for authentication...");
                        Console.WriteLine("═══════════════════════════════════════════════════════════════");
                    }

                    return Task.CompletedTask;
                }).ExecuteAsync(cts.Token);

                // Update connection with username from auth
                connection.UserName = authResult.Account.Username;
            }
            catch (OperationCanceledException)
            {
                throw new TimeoutException($"Device code authentication timed out after {DefaultTimeout.TotalMinutes} minutes");
            }

            return authResult.AccessToken;
        }

        public string BuildConnectionString(CrmConnection connection)
        {
            // DeviceCode doesn't use traditional connection string
            // This is for diagnostic/display purposes only
            var clientId = string.IsNullOrEmpty(connection.ClientId)
                ? DefaultClientId
                : connection.ClientId;

            return $"AuthType=DeviceCode;Url={connection.Url};ClientId={clientId};";
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
