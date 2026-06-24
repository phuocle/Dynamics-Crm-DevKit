using Microsoft.Extensions.Configuration;
using Microsoft.Identity.Client;
using Microsoft.Identity.Client.Extensions.Msal;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json;
using System.Threading.Tasks;

namespace Dev.AllInOne.ConsoleCore2
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
            var scope = new Uri(new Uri(instanceUrl), "/.default").ToString();
            var scopes = new[] { scope };

            if (profileData.ProfileType == 1)
            {
                return GetApplicationTokenFromPacCache(profileData, instanceUrl);
            }

            var publicClient = PublicClientApplicationBuilder
                .Create("04b07795-8ddb-461a-bbee-02f9e1bf7b46")
                .WithAuthority(profileData.Authority)
                .WithRedirectUri("http://localhost")
                .Build();

            await RegisterPacCacheAsync(publicClient.UserTokenCache, "tokencache_msalv3.dat").ConfigureAwait(false);
            var accounts = await publicClient.GetAccountsAsync().ConfigureAwait(false);
            var account = accounts.FirstOrDefault(a =>
                string.Equals(a.Username, profileData.User, StringComparison.OrdinalIgnoreCase))
                ?? accounts.FirstOrDefault();

            if (account == null)
                throw new InvalidOperationException("No PAC CLI user token was found in the MSAL cache. Run 'pac auth who' or 'pac auth create' first.");

            var authResult = await publicClient.AcquireTokenSilent(scopes, account).ExecuteAsync().ConfigureAwait(false);
            return authResult.AccessToken;
        }

        private static string GetApplicationTokenFromPacCache(PacProfileData profileData, string instanceUrl)
        {
            var cachePath = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Microsoft",
                "PowerAppsCLI",
                "tokencache_spn_msalv3.dat");

            if (!File.Exists(cachePath))
                throw new FileNotFoundException("PAC CLI application token cache not found. Run 'pac auth who' first.", cachePath);

            var protectedBytes = File.ReadAllBytes(cachePath);
            var cacheBytes = ProtectedData.Unprotect(protectedBytes, null, DataProtectionScope.CurrentUser);
            using var document = JsonDocument.Parse(cacheBytes);

            if (!document.RootElement.TryGetProperty("AccessToken", out var accessTokens))
                throw new InvalidOperationException("PAC CLI application token cache does not contain access tokens.");

            var targetHost = new Uri(instanceUrl).Host;
            var now = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

            foreach (var tokenProperty in accessTokens.EnumerateObject())
            {
                var token = tokenProperty.Value;
                var clientId = GetJsonString(token, "client_id");
                var realm = GetJsonString(token, "realm");
                var target = GetJsonString(token, "target");
                var expiresOn = GetJsonString(token, "expires_on");
                var secret = GetJsonString(token, "secret");

                if (!string.Equals(clientId, profileData.User, StringComparison.OrdinalIgnoreCase)) continue;
                if (!string.Equals(realm, profileData.TenantId, StringComparison.OrdinalIgnoreCase)) continue;
                if (string.IsNullOrWhiteSpace(target) || !target.Contains(targetHost, StringComparison.OrdinalIgnoreCase)) continue;
                if (!long.TryParse(expiresOn, out var expiresOnUnix) || expiresOnUnix <= now) continue;
                if (string.IsNullOrWhiteSpace(secret)) continue;

                return secret;
            }

            throw new InvalidOperationException(
                "No valid PAC CLI application access token was found for this profile/environment. " +
                "Run 'pac auth who' for the selected profile, then run this console again.");
        }

        private static string GetJsonString(JsonElement element, string propertyName)
        {
            return element.TryGetProperty(propertyName, out var value) && value.ValueKind == JsonValueKind.String
                ? value.GetString()
                : null;
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
