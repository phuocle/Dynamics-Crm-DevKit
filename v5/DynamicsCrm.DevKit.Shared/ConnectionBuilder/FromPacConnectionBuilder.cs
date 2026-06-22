using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Azure.Identity;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// PAC CLI integration - leverages existing PAC CLI authentication profiles.
    /// This allows users to reuse their PAC CLI auth instead of managing credentials separately.
    ///
    /// Usage:
    /// - With --pacprofile "Name": Uses profile by name (required)
    ///
    /// Implementation approach (based on Rnwood.Dataverse.Data.PowerShell):
    /// 1. Read authprofiles_v2.json from %LOCALAPPDATA%\Microsoft\PowerAppsCLI
    /// 2. Extract environment URL from the selected profile
    /// 3. Use DefaultAzureCredential which shares tokens with Azure CLI/PAC CLI
    ///
    /// Reference: https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell
    /// </summary>
    public class FromPacConnectionBuilder : IConnectionBuilder
    {
        public string Type => ConnectionType.FromPac;

        public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.PacProfile))
            {
                throw new InvalidOperationException(
                    "PAC CLI profile name or index is required. Use --pacprofile \"ProfileName\" or --pacprofile \"1\" to specify a profile. " +
                    "Run 'pac auth list' to see available profiles.");
            }

            // Get environment URL from PAC CLI profiles JSON file
            var environmentUrl = GetEnvironmentUrlFromPacProfiles(connection.PacProfile);

            if (string.IsNullOrEmpty(environmentUrl))
            {
                throw new InvalidOperationException(
                    $"PAC CLI profile '{connection.PacProfile}' not found or has no environment URL.");
            }

            // Use DefaultAzureCredential which includes:
            // - AzureCliCredential (shares tokens with Azure CLI)
            // - AzurePowerShellCredential
            // - EnvironmentCredential
            // This will use cached tokens from Azure CLI/PAC CLI when available
            var credential = new DefaultAzureCredential(new DefaultAzureCredentialOptions
            {
                // Exclude some credentials that might cause delays or popup dialogs
                ExcludeInteractiveBrowserCredential = true,
                ExcludeVisualStudioCredential = true,
                ExcludeManagedIdentityCredential = true // We're not on Azure
            });

            // Create ServiceClient using TokenCredential
            // IMPORTANT: tokenProviderFunction may be called on UI thread later (when token refresh is needed)
            // so we must use Task.Run + ConfigureAwait(false) to avoid deadlock
            var serviceClient = new ServiceClient(
                instanceUrl: new Uri(environmentUrl),
                tokenProviderFunction: async instanceUrl =>
                {
                    // Wrap in Task.Run to ensure we're not on UI thread
                    // This is critical because this callback is called by ServiceClient
                    // whenever it needs a token, not just during initial connection
                    return await Task.Run(async () =>
                    {
                        var scope = new Uri(new Uri(instanceUrl), "/.default").ToString();
                        var token = await credential.GetTokenAsync(
                            new Azure.Core.TokenRequestContext(new[] { scope }))
                            .ConfigureAwait(false);
                        return token.Token;
                    }).ConfigureAwait(false);
                },
                useUniqueInstance: true);

            // Wait a moment for connection to stabilize
            await Task.Delay(100).ConfigureAwait(false);

            if (serviceClient?.IsReady != true)
            {
                throw new InvalidOperationException(
                    $"Failed to connect using PAC CLI profile. Error: {serviceClient?.LastError}");
            }

            return serviceClient;
        }

        private string GetEnvironmentUrlFromPacProfiles(string profileNameOrIndex)
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
                    $"PAC CLI profiles file not found at: {profilesPath}. " +
                    "Please run 'pac auth create' first to authenticate with PAC CLI.",
                    profilesPath);
            }

            // Read and parse the profiles JSON
            var json = File.ReadAllText(profilesPath);
            var jsonOptions = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

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
                // Show available profiles
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

            // PAC CLI may store "https://service.powerapps.com/" as default when no environment is selected
            if (string.IsNullOrEmpty(environmentUrl) || environmentUrl == "https://service.powerapps.com/")
            {
                throw new InvalidOperationException(
                    "The selected PAC CLI profile does not have an active environment URL. " +
                    "Please select an environment with 'pac env select'.");
            }

            return environmentUrl;
        }

        public string BuildConnectionString(CrmConnection connection, bool shouldMaskPassword = false)
        {
            // FromPac uses PAC CLI tokens, not traditional connection string
            // Profile name is required
            return $"AuthType=FromPac;Profile={connection.PacProfile};";
        }

        public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
        {
            if (string.IsNullOrEmpty(connection.PacProfile))
            {
                return (false, "PAC CLI profile name or index is required. Use --pacprofile \"ProfileName\" or --pacprofile \"1\" to specify a profile.");
            }

            try
            {
                var url = GetEnvironmentUrlFromPacProfiles(connection.PacProfile);
                if (string.IsNullOrEmpty(url))
                {
                    return (false, "No environment URL found in PAC CLI profile.");
                }
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

        #region PAC Profile JSON Models

        /// <summary>
        /// Represents a single PAC CLI authentication profile.
        /// </summary>
        private class PacProfileData
        {
            public string Name { get; set; }
            public string Resource { get; set; }
            public string FriendlyName { get; set; }
            public string OrganizationUniqueName { get; set; }
        }

        /// <summary>
        /// Represents the PAC CLI profiles file structure.
        /// </summary>
        private class PacProfilesData
        {
            public System.Collections.Generic.List<PacProfileData> Profiles { get; set; }
            public System.Collections.Generic.Dictionary<string, PacProfileData> Current { get; set; }
        }

        #endregion
    }
}
