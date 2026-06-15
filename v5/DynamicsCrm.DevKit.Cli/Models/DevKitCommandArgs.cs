using Spectre.Console.Cli;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Base command settings for DevKit commands.
    /// </summary>
    public class DevKitCommandArgs : CommandSettings
    {
        [CommandOption("--conn")]
        [Description("Dynamics 365 Connection String")]
        public string Connection { get; set; } = string.Empty;

        [CommandOption("--json")]
        [Description("DynamicsCrm.DevKit.Cli json file")]
        public string Json { get; set; } = string.Empty;

        [CommandOption("--profile")]
        [Description("Profile name from json file")]
        public string Profile { get; set; } = string.Empty;

        [CommandOption("--url")]
        [Description("Dynamics 365 URL")]
        public string Url { get; set; } = string.Empty;

        [CommandOption("--auth")]
        [Description("Authentication type (Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD)")]
        public string AuthType { get; set; } = string.Empty;

        [CommandOption("--clientid")]
        [Description("Azure AD Application (Client) ID")]
        public string ClientId { get; set; } = string.Empty;

        [CommandOption("--clientsecret")]
        [Description("Azure AD Client Secret (for ClientSecret auth type)")]
        public string ClientSecret { get; set; } = string.Empty;

        [CommandOption("--pacprofile")]
        [Description("PAC CLI auth profile name or index")]
        public string PacProfile { get; set; } = string.Empty;

        [CommandOption("--username")]
        [Description("Username for OAuth authentication")]
        public string Username { get; set; } = string.Empty;

        [CommandOption("--password")]
        [Description("Password for OAuth authentication (can be encrypted)")]
        public string Password { get; set; } = string.Empty;

        [CommandOption("--domain")]
        [Description("Domain for AD authentication (on-premises)")]
        public string Domain { get; set; } = string.Empty;

        [CommandOption("--sdk-login")]
        [Description("Use SDK OOB login dialog (legacy)")]
        public bool SdkLogin { get; set; }

        public string CurrentDirectory => Directory.GetCurrentDirectory();

        public string JsonFile
        {
            get
            {
                return ResolveJsonFile(Json, CurrentDirectory);
            }
        }

        public bool IsJsonResolvedBySearch
        {
            get
            {
                var directFile = GetDirectJsonFile(Json, CurrentDirectory);
                var jsonFile = JsonFile;
                return !string.IsNullOrEmpty(directFile)
                    && !File.Exists(directFile)
                    && !string.IsNullOrEmpty(jsonFile)
                    && !string.Equals(directFile, jsonFile, StringComparison.OrdinalIgnoreCase);
            }
        }

        public string JsonResolvedDirectory
        {
            get
            {
                var jsonFile = JsonFile;
                return string.IsNullOrEmpty(jsonFile) ? null : Path.GetDirectoryName(jsonFile);
            }
        }

        public ServiceClient ServiceClient { get; set; }

        private static string ResolveJsonFile(string json, string currentDirectory)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;

            try
            {
                if (Path.IsPathRooted(json))
                    return File.Exists(json) ? new FileInfo(json).FullName : null;

                var file = Path.Combine(currentDirectory, json);
                if (File.Exists(file)) return new FileInfo(file).FullName;

                var fileName = Path.GetFileName(json);
                if (string.IsNullOrWhiteSpace(fileName)) return null;

                var directory = new DirectoryInfo(currentDirectory);
                while (directory != null)
                {
                    file = Path.Combine(directory.FullName, fileName);
                    if (File.Exists(file)) return new FileInfo(file).FullName;
                    directory = directory.Parent;
                }
            }
            catch
            {
                return null;
            }

            return null;
        }

        private static string GetDirectJsonFile(string json, string currentDirectory)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;

            try
            {
                if (Path.IsPathRooted(json)) return new FileInfo(json).FullName;
                return new FileInfo(Path.Combine(currentDirectory, json)).FullName;
            }
            catch
            {
                return null;
            }
        }

        /// <summary>
        /// Fill empty connection properties from DEVKIT_* environment variables.
        /// Priority: CLI args > Environment variables > empty string.
        /// </summary>
        public void ResolveEnvironmentDefaults()
        {
            if (string.IsNullOrEmpty(Connection))
                Connection = Environment.GetEnvironmentVariable("DEVKIT_CONNECTION") ?? string.Empty;

            if (string.IsNullOrEmpty(AuthType))
                AuthType = Environment.GetEnvironmentVariable("DEVKIT_AUTH_TYPE") ?? string.Empty;

            if (string.IsNullOrEmpty(Url))
                Url = Environment.GetEnvironmentVariable("DEVKIT_URL") ?? string.Empty;

            // Interactive/DeviceCode have built-in Microsoft multi-tenant AppId defaults.
            // Don't inherit DEVKIT_CLIENT_ID from env vars for these types,
            // as it may point to a single-tenant app meant for other auth types (e.g., ClientSecret).
            // The --clientid CLI arg still takes priority if explicitly provided.
            if (string.IsNullOrEmpty(ClientId))
            {
                var hasDefaultClientId =
                    AuthType.Equals("Interactive", StringComparison.OrdinalIgnoreCase) ||
                    AuthType.Equals("DeviceCode", StringComparison.OrdinalIgnoreCase);
                if (!hasDefaultClientId)
                    ClientId = Environment.GetEnvironmentVariable("DEVKIT_CLIENT_ID") ?? string.Empty;
            }

            if (string.IsNullOrEmpty(ClientSecret))
                ClientSecret = Environment.GetEnvironmentVariable("DEVKIT_CLIENT_SECRET") ?? string.Empty;

            if (string.IsNullOrEmpty(PacProfile))
                PacProfile = Environment.GetEnvironmentVariable("DEVKIT_PAC_PROFILE") ?? string.Empty;

            if (string.IsNullOrEmpty(Username))
                Username = Environment.GetEnvironmentVariable("DEVKIT_USERNAME") ?? string.Empty;

            if (string.IsNullOrEmpty(Password))
                Password = Environment.GetEnvironmentVariable("DEVKIT_PASSWORD") ?? string.Empty;

            if (string.IsNullOrEmpty(Domain))
                Domain = Environment.GetEnvironmentVariable("DEVKIT_DOMAIN") ?? string.Empty;
        }
    }
}
