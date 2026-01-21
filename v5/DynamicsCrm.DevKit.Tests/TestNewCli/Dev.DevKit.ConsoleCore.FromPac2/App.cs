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

namespace Dev.DevKit.ConsoleCore.FromPac2
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

        private static string GetAppSettingValue(string key)
        {
            var settings = Configuration.GetSection("Dataverse");
            var value = settings.GetValue<string>(key);
            return value ?? string.Empty;
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

        private static string PacProfile => GetAppSettingValue("PacProfile");

        private static async Task<ServiceClient> CreateServiceClientAsync()
        {
            if (string.IsNullOrEmpty(PacProfile))
            {
                throw new InvalidOperationException(
                    "PAC CLI profile name is required in AppSettings.json. " +
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

        private static string GetEnvironmentUrlFromPacProfiles(string profileName)
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

            var profileData = pacProfiles.Profiles.FirstOrDefault(p =>
                !string.IsNullOrEmpty(p.Name) &&
                string.Equals(p.Name, profileName, StringComparison.OrdinalIgnoreCase));

            if (profileData == null)
            {
                var availableProfiles = string.Join(", ",
                    pacProfiles.Profiles.Select(p => p.Name ?? "Unnamed"));
                throw new InvalidOperationException(
                    $"PAC CLI profile '{profileName}' not found. Available profiles: {availableProfiles}");
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
