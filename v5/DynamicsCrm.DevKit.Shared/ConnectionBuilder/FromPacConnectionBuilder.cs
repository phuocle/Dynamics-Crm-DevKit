using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Identity.Client;
using Microsoft.Identity.Client.Extensions.Msal;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// PAC CLI integration - reuses existing PAC CLI authentication profiles.
    /// </summary>
    public class FromPacConnectionBuilder : IConnectionBuilder
    {
        public string Type => ConnectionType.FromPac;

        public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            var profileData = GetPacProfile(connection.PacProfile);
            var environmentUrl = profileData.Resource;

            var serviceClient = new ServiceClient(
                instanceUrl: new Uri(environmentUrl),
                tokenProviderFunction: instanceUrl => GetTokenFromPacCacheAsync(profileData, instanceUrl),
                useUniqueInstance: true);

            await Task.Delay(100).ConfigureAwait(false);

            if (serviceClient?.IsReady != true)
            {
                throw new InvalidOperationException(
                    $"Failed to connect using PAC CLI profile. Error: {serviceClient?.LastError}");
            }

            return serviceClient;
        }

        private static PacProfileData GetPacProfile(string profileNameOrIndex)
        {
            var profilesPath = GetProfilesPath();

            if (!File.Exists(profilesPath))
            {
                throw new FileNotFoundException(
                    $"PAC CLI profiles file not found at: {profilesPath}. " +
                    "Please run 'pac auth create' first to authenticate with PAC CLI.",
                    profilesPath);
            }

            var json = File.ReadAllText(profilesPath);
            var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

            PacProfilesData pacProfiles;
            try
            {
                pacProfiles = JsonSerializer.Deserialize<PacProfilesData>(json, jsonOptions);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(
                    $"Failed to parse PAC CLI profiles file: {ex.Message}", ex);
            }

            if (pacProfiles?.Profiles == null || pacProfiles.Profiles.Count == 0)
            {
                throw new InvalidOperationException(
                    "No profiles found in PAC CLI. Please run 'pac auth create' first.");
            }

            PacProfileData profileData = null;
            if (string.IsNullOrWhiteSpace(profileNameOrIndex))
            {
                if (pacProfiles.Current != null)
                    pacProfiles.Current.TryGetValue("UNIVERSAL", out profileData);
            }
            else if (int.TryParse(profileNameOrIndex, out var profileIndex))
            {
                var zeroBasedIndex = profileIndex - 1;
                if (zeroBasedIndex >= 0 && zeroBasedIndex < pacProfiles.Profiles.Count)
                    profileData = pacProfiles.Profiles[zeroBasedIndex];
            }

            if (profileData == null && !string.IsNullOrWhiteSpace(profileNameOrIndex))
            {
                profileData = pacProfiles.Profiles.FirstOrDefault(p =>
                    !string.IsNullOrEmpty(p.Name) &&
                    string.Equals(p.Name, profileNameOrIndex, StringComparison.OrdinalIgnoreCase));
            }

            if (profileData == null)
            {
                var availableProfiles = string.Join(", ",
                    pacProfiles.Profiles.Select((p, index) =>
                    {
                        var displayName = !string.IsNullOrWhiteSpace(p.Name)
                            ? p.Name
                            : !string.IsNullOrWhiteSpace(p.FriendlyName)
                                ? p.FriendlyName
                                : !string.IsNullOrWhiteSpace(p.Resource)
                                    ? p.Resource
                                    : "Unnamed";
                        return $"{index + 1}:{displayName}";
                    }));
                throw new InvalidOperationException(
                    string.IsNullOrWhiteSpace(profileNameOrIndex)
                        ? $"No active PAC CLI profile found. Available profiles: {availableProfiles}"
                        : $"PAC CLI profile '{profileNameOrIndex}' not found. Available profiles: {availableProfiles}");
            }

            if (string.IsNullOrEmpty(profileData.Resource) || profileData.Resource == "https://service.powerapps.com/")
            {
                throw new InvalidOperationException(
                    "The selected PAC CLI profile does not have an active environment URL. " +
                    "Please select an environment with 'pac env select'.");
            }

            return profileData;
        }

        private static async Task<string> GetTokenFromPacCacheAsync(PacProfileData profileData, string instanceUrl)
        {
            var isApplicationProfile = profileData.ProfileType == 1;
            if (isApplicationProfile)
            {
                return await GetApplicationTokenFromPacSecretAsync(profileData, instanceUrl).ConfigureAwait(false);
            }

            var userToken = await TryGetUserTokenFromMsalAsync(profileData, instanceUrl).ConfigureAwait(false);
            if (!string.IsNullOrWhiteSpace(userToken)) return userToken;

            var cacheFileName = isApplicationProfile ? "tokencache_spn_msalv3.dat" : "tokencache_msalv3.dat";
            var cacheBytes = await LoadPacCacheAsync(cacheFileName).ConfigureAwait(false);
            using var document = JsonDocument.Parse(cacheBytes);

            if (!document.RootElement.TryGetProperty("AccessToken", out var accessTokens))
                throw new InvalidOperationException("PAC CLI token cache does not contain access tokens.");

            var homeAccountId = isApplicationProfile ? null : GetHomeAccountId(document, profileData);
            return FindAccessToken(
                accessTokens,
                profileData,
                instanceUrl,
                homeAccountId,
                requireClientIdMatch: isApplicationProfile,
                "No valid PAC CLI access token was found for this profile/environment. Run 'pac auth who' for the selected profile, then run this command again.");
        }

        private static async Task<string> TryGetUserTokenFromMsalAsync(PacProfileData profileData, string instanceUrl)
        {
            var publicClient = PublicClientApplicationBuilder
                .Create("9cee029c-6210-4654-90bb-17e6e9d36617")
                .WithAuthority(profileData.Authority)
                .WithRedirectUri("http://localhost")
                .Build();

            await RegisterPacCacheAsync(publicClient.UserTokenCache, "tokencache_msalv3.dat").ConfigureAwait(false);
            var accounts = await publicClient.GetAccountsAsync().ConfigureAwait(false);
            var account = accounts.FirstOrDefault(a =>
                string.Equals(a.Username, profileData.User, StringComparison.OrdinalIgnoreCase));

            if (account == null) return null;

            try
            {
                var scope = new Uri(new Uri(instanceUrl), "/.default").ToString();
                var authResult = await publicClient.AcquireTokenSilent(new[] { scope }, account).ExecuteAsync().ConfigureAwait(false);
                return authResult.AccessToken;
            }
            catch (MsalException)
            {
                return null;
            }
        }

        private static string FindAccessToken(
            JsonElement accessTokens,
            PacProfileData profileData,
            string instanceUrl,
            string homeAccountId,
            bool requireClientIdMatch,
            string errorMessage)
        {
            var targetHost = new Uri(instanceUrl).Host;
            var now = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

            foreach (var tokenProperty in accessTokens.EnumerateObject())
            {
                var token = tokenProperty.Value;
                var clientId = GetJsonString(token, "client_id");
                var realm = GetJsonString(token, "realm");
                var target = GetJsonString(token, "target");
                var tokenHomeAccountId = GetJsonString(token, "home_account_id");
                var expiresOn = GetJsonString(token, "expires_on");
                var secret = GetJsonString(token, "secret");

                if (requireClientIdMatch && !string.Equals(clientId, profileData.User, StringComparison.OrdinalIgnoreCase)) continue;
                if (!string.Equals(realm, profileData.TenantId, StringComparison.OrdinalIgnoreCase)) continue;
                if (string.IsNullOrWhiteSpace(target) || !target.Contains(targetHost, StringComparison.OrdinalIgnoreCase)) continue;
                if (!string.IsNullOrWhiteSpace(homeAccountId) && !string.Equals(tokenHomeAccountId, homeAccountId, StringComparison.OrdinalIgnoreCase)) continue;
                if (!long.TryParse(expiresOn, out var expiresOnUnix) || expiresOnUnix <= now) continue;
                if (string.IsNullOrWhiteSpace(secret)) continue;

                return secret;
            }

            throw new InvalidOperationException(errorMessage);
        }

        private static string GetHomeAccountId(JsonDocument document, PacProfileData profileData)
        {
            if (!document.RootElement.TryGetProperty("Account", out var accounts))
                return null;

            foreach (var accountProperty in accounts.EnumerateObject())
            {
                var account = accountProperty.Value;
                var username = GetJsonString(account, "username");
                var realm = GetJsonString(account, "realm");
                var homeAccountId = GetJsonString(account, "home_account_id");

                if (!string.Equals(username, profileData.User, StringComparison.OrdinalIgnoreCase)) continue;
                if (!string.Equals(realm, profileData.TenantId, StringComparison.OrdinalIgnoreCase)) continue;
                return homeAccountId;
            }

            return null;
        }

        private static string GetJsonString(JsonElement element, string propertyName)
        {
            return element.TryGetProperty(propertyName, out var value) && value.ValueKind == JsonValueKind.String
                ? value.GetString()
                : null;
        }

        private static async Task<string> GetApplicationTokenFromPacSecretAsync(PacProfileData profileData, string instanceUrl)
        {
            var clientSecret = await GetPacApplicationClientSecretAsync(profileData).ConfigureAwait(false);
            var confidentialClient = ConfidentialClientApplicationBuilder
                .Create(profileData.User)
                .WithAuthority(profileData.Authority)
                .WithClientSecret(clientSecret)
                .Build();

            await RegisterPacCacheAsync(confidentialClient.AppTokenCache, "tokencache_spn_msalv3.dat").ConfigureAwait(false);
            var scope = new Uri(new Uri(instanceUrl), "/.default").ToString();
            var authResult = await confidentialClient.AcquireTokenForClient(new[] { scope }).ExecuteAsync().ConfigureAwait(false);
            return authResult.AccessToken;
        }

        private static async Task<string> GetPacApplicationClientSecretAsync(PacProfileData profileData)
        {
            var cacheBytes = await LoadPacCacheAsync("pac.spn.cache.dat").ConfigureAwait(false);
            using var document = JsonDocument.Parse(cacheBytes);

            if (document.RootElement.TryGetProperty(profileData.User, out var secretElement) &&
                secretElement.ValueKind == JsonValueKind.String &&
                !string.IsNullOrWhiteSpace(secretElement.GetString()))
            {
                return secretElement.GetString();
            }

            throw new InvalidOperationException(
                "PAC CLI application secret cache does not contain this profile. Run 'pac auth create' for the selected application profile, then run this command again.");
        }

        private static async Task RegisterPacCacheAsync(ITokenCache tokenCache, string cacheFileName)
        {
            var cacheDirectory = GetPacCacheDirectory();
            var storageProperties = new StorageCreationPropertiesBuilder(cacheFileName, cacheDirectory).Build();
            var cacheHelper = await MsalCacheHelper.CreateAsync(storageProperties).ConfigureAwait(false);
            cacheHelper.RegisterCache(tokenCache);
        }

        private static async Task<byte[]> LoadPacCacheAsync(string cacheFileName)
        {
            var cacheDirectory = GetPacCacheDirectory();
            var cachePath = Path.Combine(cacheDirectory, cacheFileName);
            if (!File.Exists(cachePath))
                throw new FileNotFoundException("PAC CLI token cache not found. Run 'pac auth who' first.", cachePath);

            var storageProperties = new StorageCreationPropertiesBuilder(cacheFileName, cacheDirectory).Build();
            var cacheHelper = await MsalCacheHelper.CreateAsync(storageProperties).ConfigureAwait(false);
            return cacheHelper.LoadUnencryptedTokenCache();
        }

        private static string GetProfilesPath()
        {
            return Path.Combine(GetPacCacheDirectory(), "authprofiles_v2.json");
        }

        private static string GetPacCacheDirectory()
        {
            return Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Microsoft",
                "PowerAppsCLI");
        }

        public string BuildConnectionString(CrmConnection connection, bool shouldMaskPassword = false)
        {
            return string.IsNullOrWhiteSpace(connection.PacProfile)
                ? "AuthType=FromPac;Profile=(active);"
                : $"AuthType=FromPac;Profile={connection.PacProfile};";
        }

        public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            try
            {
                GetPacProfile(connection.PacProfile);
                return (true, null);
            }
            catch (FileNotFoundException ex)
            {
                return (false, ex.Message);
            }
            catch (InvalidOperationException ex)
            {
                return (false, ex.Message);
            }
        }

        private class PacProfileData
        {
            public string Name { get; set; }
            public string User { get; set; }
            public string Resource { get; set; }
            public string TenantId { get; set; }
            public string Authority { get; set; }
            public int ProfileType { get; set; }
            public string FriendlyName { get; set; }
            public string OrganizationUniqueName { get; set; }
        }

        private class PacProfilesData
        {
            public System.Collections.Generic.List<PacProfileData> Profiles { get; set; }
            public System.Collections.Generic.Dictionary<string, PacProfileData> Current { get; set; }
        }
    }
}
