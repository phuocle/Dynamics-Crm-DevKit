using Azure.Core;
using Azure.Identity;
using Microsoft.Extensions.Configuration;
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
        private static void InitializeConfiguration()
        {
            var configurationBuilder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("AppSettings.json", optional: false, reloadOnChange: true);
            _Configuration = configurationBuilder.Build();
        }
        private static IConfiguration _Configuration = null;
        public static IConfiguration Configuration
        {
            get
            {
                if (_Configuration is null) InitializeConfiguration();
                return _Configuration ?? throw new InvalidOperationException("Configuration could not be initialized.");
            }
        }

        public static string GetAppSettingValue(string key, string environmentVariable)
        {
            var settings = Configuration.GetSection("Dataverse");
            var value = settings.GetValue<string>(key);
            if (!string.IsNullOrWhiteSpace(value)) return value;
            value = GetProjectEnvironmentValue(environmentVariable);
            return value;
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

        private static async Task<ServiceClient> CreateServiceClientAsync()
        {
            if (string.IsNullOrEmpty(PacProfile))
            {
                throw new InvalidOperationException(
                    "PAC CLI profile name or index is required in AppSettings.json. " +
                    "Run 'pac auth list' to see available profiles.");
            }

            // Get environment URL from PAC CLI profiles
            var environmentUrl = GetEnvironmentUrlFromPacProfiles(PacProfile);

            Console.WriteLine();
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine(" PAC CLI Profile Authentication");
            Console.WriteLine("═══════════════════════════════════════════════════════════════");
            Console.WriteLine();
            Console.WriteLine($" Profile: {PacProfile}");
            Console.WriteLine($" Environment: {environmentUrl}");
            Console.WriteLine();
            Console.WriteLine(" Connecting using cached Azure credentials...");
            Console.WriteLine("═══════════════════════════════════════════════════════════════");

            // Use DefaultAzureCredential which shares tokens with Azure CLI/PAC CLI
            var credential = new DefaultAzureCredential(new DefaultAzureCredentialOptions
            {
                ExcludeInteractiveBrowserCredential = true,
                ExcludeVisualStudioCredential = true,
                ExcludeManagedIdentityCredential = true
            });

            // Create ServiceClient using TokenCredential
            var serviceClient = new ServiceClient(
                instanceUrl: new Uri(environmentUrl),
                tokenProviderFunction: async instanceUrl =>
                {
                    return await Task.Run(async () =>
                    {
                        var scope = new Uri(new Uri(instanceUrl), "/.default").ToString();
                        var token = await credential.GetTokenAsync(
                            new TokenRequestContext(new[] { scope }))
                            .ConfigureAwait(false);
                        return token.Token;
                    }).ConfigureAwait(false);
                },
                useUniqueInstance: true);

            await Task.Delay(100).ConfigureAwait(false);

            if (serviceClient?.IsReady != true)
            {
                throw new InvalidOperationException(
                    $"Failed to connect using PAC CLI profile. Error: {serviceClient?.LastError}");
            }

            return serviceClient;
        }

        private static string GetEnvironmentUrlFromPacProfiles(string profileNameOrIndex)
        {
            // PAC CLI stores profiles at: %LOCALAPPDATA%\Microsoft\PowerAppsCLI\authprofiles_v2.json
            var profilesPath = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Microsoft",
                "PowerAppsCLI",
                "authprofiles_v2.json");

            if (!File.Exists(profilesPath))
            {
                throw new FileNotFoundException(
                    $"PAC CLI profiles file not found. Please run 'pac auth create' first.",
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
            if (int.TryParse(profileNameOrIndex, out var profileIndex))
            {
                var zeroBasedIndex = profileIndex - 1;
                if (zeroBasedIndex >= 0 && zeroBasedIndex < pacProfiles.Profiles.Count)
                {
                    profileData = pacProfiles.Profiles[zeroBasedIndex];
                }
            }

            if (profileData == null)
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
                    $"PAC CLI profile '{profileNameOrIndex}' not found. Available profiles: {availableProfiles}");
            }

            var environmentUrl = profileData?.Resource;

            if (string.IsNullOrEmpty(environmentUrl) || environmentUrl == "https://service.powerapps.com/")
            {
                throw new InvalidOperationException(
                    "The selected PAC CLI profile does not have an active environment URL. " +
                    "Please select an environment with 'pac env select'.");
            }

            return environmentUrl;
        }

        #region PAC Profile JSON Models

        private class PacProfileData
        {
            public string Name { get; set; }
            public string Resource { get; set; }
            public string FriendlyName { get; set; }
            public string OrganizationUniqueName { get; set; }
        }

        private class PacProfilesData
        {
            public List<PacProfileData> Profiles { get; set; }
            public Dictionary<string, PacProfileData> Current { get; set; }
        }

        #endregion
    }
}
