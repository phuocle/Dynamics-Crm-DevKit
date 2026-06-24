using Microsoft.Extensions.Configuration;
using Microsoft.Identity.Client;
using Microsoft.Identity.Client.Extensions.Msal;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace $NameSpace$
{
    public static class App
    {
        private static IConfiguration _Configuration = null;

        public static IConfiguration Configuration
        {
            get
            {
                if (_Configuration is null) InitializeConfiguration();
                return _Configuration ?? throw new InvalidOperationException("Configuration could not be initialized.");
            }
        }

        private static ServiceClient _Service = null;

        public static ServiceClient Service
        {
            get
            {
                if (_Service != null) return _Service;
                _Service = CreateServiceClientAsync().GetAwaiter().GetResult();
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                return _Service;
            }
        }

        private static string PacProfile => GetAppSettingValue("PacProfile", "DEVKIT_PAC_PROFILE");

        private static void InitializeConfiguration()
        {
            var configurationBuilder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("AppSettings.json", optional: false, reloadOnChange: true);
            _Configuration = configurationBuilder.Build();
        }

        public static string GetAppSettingValue(string key, string environmentVariable)
        {
            var settings = Configuration.GetSection("Dataverse");
            var value = settings.GetValue<string>(key);
            if (!string.IsNullOrWhiteSpace(value)) return value;
            return GetProjectEnvironmentValue(environmentVariable);
        }

        private static string GetProjectEnvironmentValue(string key)
        {
            var file = FindProjectEnvironmentFile(AppContext.BaseDirectory);
            if (string.IsNullOrWhiteSpace(file)) return null;

            foreach (var rawLine in File.ReadAllLines(file))
            {
                var line = rawLine.Trim();
                if (string.IsNullOrWhiteSpace(line) || line.StartsWith("#")) continue;
                var index = line.IndexOf('=');
                if (index <= 0) continue;
                var name = line.Substring(0, index).Trim();
                if (!name.Equals(key, StringComparison.OrdinalIgnoreCase)) continue;
                return Unquote(line.Substring(index + 1).Trim());
            }

            return null;
        }

        private static string FindProjectEnvironmentFile(string startDirectory)
        {
            var directory = new DirectoryInfo(startDirectory);
            while (directory != null)
            {
                var file = Path.Combine(directory.FullName, ".env");
                if (File.Exists(file)) return file;
                directory = directory.Parent;
            }
            return null;
        }

        private static string Unquote(string value)
        {
            if (string.IsNullOrEmpty(value) || value.Length < 2) return value;
            var first = value[0];
            var last = value[value.Length - 1];
            return (first == '"' && last == '"') || (first == '\'' && last == '\'')
                ? value.Substring(1, value.Length - 2)
                : value;
        }

        private static async Task<ServiceClient> CreateServiceClientAsync()
        {
            var profileData = GetPacProfile(PacProfile);
            var environmentUrl = profileData.Resource;

            Console.WriteLine();
            Console.WriteLine("===============================================================");
            Console.WriteLine(" PAC CLI Profile Authentication");
            Console.WriteLine("===============================================================");
            Console.WriteLine();
            Console.WriteLine($" Profile: {(!string.IsNullOrWhiteSpace(PacProfile) ? PacProfile : "(active)")}");
            Console.WriteLine($" Environment: {environmentUrl}");
            Console.WriteLine();
            Console.WriteLine(" Connecting using PAC CLI cached credentials...");
            Console.WriteLine("===============================================================");

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
            var profilesPath = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Microsoft",
                "PowerAppsCLI",
                "authprofiles_v2.json");

            if (!File.Exists(profilesPath))
            {
                throw new FileNotFoundException(
                    "PAC CLI profiles file not found. Please run 'pac auth create' first.",
                    profilesPath);
            }

            var json = File.ReadAllText(profilesPath);
            var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var pacProfiles = JsonSerializer.Deserialize<PacProfilesData>(json, jsonOptions);

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
                "No valid PAC CLI access token was found for this profile/environment. Run 'pac auth who' for the selected profile, then run this console again.");
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
                "PAC CLI application secret cache does not contain this profile. Run 'pac auth create' for the selected application profile, then run this console again.");
        }

        private static async Task RegisterPacCacheAsync(ITokenCache tokenCache, string cacheFileName)
        {
            var cacheDirectory = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Microsoft",
                "PowerAppsCLI");

            var storageProperties = new StorageCreationPropertiesBuilder(cacheFileName, cacheDirectory).Build();
            var cacheHelper = await MsalCacheHelper.CreateAsync(storageProperties).ConfigureAwait(false);
            cacheHelper.RegisterCache(tokenCache);
        }

        private static async Task<byte[]> LoadPacCacheAsync(string cacheFileName)
        {
            var cacheDirectory = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Microsoft",
                "PowerAppsCLI");

            var cachePath = Path.Combine(cacheDirectory, cacheFileName);
            if (!File.Exists(cachePath))
                throw new FileNotFoundException("PAC CLI token cache not found. Run 'pac auth who' first.", cachePath);

            var storageProperties = new StorageCreationPropertiesBuilder(cacheFileName, cacheDirectory).Build();
            var cacheHelper = await MsalCacheHelper.CreateAsync(storageProperties).ConfigureAwait(false);
            return cacheHelper.LoadUnencryptedTokenCache();
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
            public List<PacProfileData> Profiles { get; set; }
            public Dictionary<string, PacProfileData> Current { get; set; }
        }
    }
}
