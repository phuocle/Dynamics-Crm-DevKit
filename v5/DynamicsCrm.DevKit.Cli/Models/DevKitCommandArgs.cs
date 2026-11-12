using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using Spectre.Console.Cli;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
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

        /// <summary>
        /// True when the connection came entirely from the project .env —
        /// no explicit connection argument was passed on the command line.
        /// The BatFile bats then embed no connection arguments (the wizard's
        /// UseProjectEnvironment connections from DynamicsCrm.DevKit.json —
        /// the generated bat picks the project .env up itself at runtime);
        /// any explicit argument makes the connection explicit and the
        /// arguments ride in (runtime carrier, not a command option).
        /// </summary>
        public bool ConnectionFromProjectEnvironment { get; private set; }

        /// <summary>
        /// The CrmConnection the command connected with (runtime carrier,
        /// not a command option — the modern-auth and legacy --conn paths
        /// stash it after building). Item templates that embed the CLI
        /// connection arguments in generated content (the BatFile bats)
        /// read it from here, like the wizard dialog's connection.
        /// </summary>
        public CrmConnection CrmConnection { get; set; }

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
        /// True when any connection-related argument was explicitly supplied on the command line.
        /// </summary>
        public bool HasExplicitConnectionArgs()
        {
            return !string.IsNullOrEmpty(Connection) ||
                   !string.IsNullOrEmpty(AuthType) ||
                   !string.IsNullOrEmpty(Url) ||
                   !string.IsNullOrEmpty(ClientId) ||
                   !string.IsNullOrEmpty(ClientSecret) ||
                   !string.IsNullOrEmpty(PacProfile) ||
                   !string.IsNullOrEmpty(Username) ||
                   !string.IsNullOrEmpty(Password) ||
                   !string.IsNullOrEmpty(Domain);
        }

        /// <summary>
        /// True when the command-line connection arguments are already complete for the
        /// selected authentication mode (or legacy --conn) so no project .env fallback is needed.
        /// </summary>
        public bool HasCompleteExplicitConnectionArgs()
        {
            if (string.IsNullOrWhiteSpace(AuthType))
                return !string.IsNullOrEmpty(Connection);

            if (!ConnectionBuilderFactory.IsSupported(AuthType))
                return true;

            return AuthType.Trim().ToUpperInvariant() switch
            {
                "CLIENTSECRET" => !string.IsNullOrWhiteSpace(Url)
                    && (!string.IsNullOrWhiteSpace(ClientId) || !string.IsNullOrWhiteSpace(Username))
                    && (!string.IsNullOrWhiteSpace(ClientSecret) || !string.IsNullOrWhiteSpace(Password)),
                "FROMPAC" => true, // An omitted profile selects the active PAC profile.
                "INTERACTIVE" or "DEVICECODE" => !string.IsNullOrWhiteSpace(Url),
                "OAUTH" => !string.IsNullOrWhiteSpace(Url)
                    && !string.IsNullOrWhiteSpace(Username)
                    && !string.IsNullOrWhiteSpace(Password),
                "AD" => !string.IsNullOrWhiteSpace(Url)
                    && !string.IsNullOrWhiteSpace(Username)
                    && !string.IsNullOrWhiteSpace(Password),
                _ => false
            };
        }

        /// <summary>
        /// Fill empty connection properties from project .env.
        /// Priority: CLI args > project .env > empty string.
        /// The .env file is searched from the current directory (or the resolved
        /// --json file's directory) upward to the drive root; OS environment
        /// variables are never consulted for connection values.
        /// </summary>
        public void ResolveProjectEnvironmentDefaults()
        {
            ResolveProjectEnvironmentDefaults((string)null);
        }

        public void ResolveProjectEnvironmentDefaults(string groupId)
        {
            var projectEnvironment = ProjectEnvironment.Read(
                ProjectEnvironment.ResolveFileFromJsonOrDirectory(JsonFile, CurrentDirectory));

            ResolveProjectEnvironmentDefaults(projectEnvironment, groupId);
        }

        public void ResolveProjectEnvironmentDefaults(IDictionary<string, string> projectEnvironment, string groupId = null)
        {
            ResolveDefaults(key => ProjectEnvironment.GetValue(projectEnvironment, key, groupId), groupId != null);
        }

        private void ResolveDefaults(Func<string, string> getValue, bool preserveExplicitConnectionMode)
        {
            var hadExplicitConnection = !string.IsNullOrEmpty(Connection);
            var hadExplicitAuthType = !string.IsNullOrEmpty(AuthType);

            // The connection-defining VALUE arguments: when ALL of them arrive
            // empty the connection is the project .env's (resolved below) —
            // ConnectionFromProjectEnvironment marks it so the BatFile bats
            // stay argument-free like the wizard's .env connections. --auth
            // is a TYPE selector, not a value: `--auth OAuth` keeps the
            // project-environment bake (the values still come from the
            // project .env); any value argument makes the connection
            // explicit and the merged arguments ride in.
            ConnectionFromProjectEnvironment =
                string.IsNullOrEmpty(Connection) &&
                string.IsNullOrEmpty(Url) &&
                string.IsNullOrEmpty(ClientId) &&
                string.IsNullOrEmpty(ClientSecret) &&
                string.IsNullOrEmpty(PacProfile) &&
                string.IsNullOrEmpty(Username) &&
                string.IsNullOrEmpty(Password) &&
                string.IsNullOrEmpty(Domain);

            // Numbered groups preserve the explicit connection mode. The default
            // resolver keeps its original per-property merge, including both fields.
            if (string.IsNullOrEmpty(Connection) && (!preserveExplicitConnectionMode || !hadExplicitAuthType))
                Connection = getValue(ProjectEnvironment.Connection) ?? string.Empty;

            if (string.IsNullOrEmpty(AuthType) && (!preserveExplicitConnectionMode || !hadExplicitConnection))
                AuthType = getValue(ProjectEnvironment.AuthType) ?? string.Empty;

            if (string.IsNullOrEmpty(Url))
                Url = getValue(ProjectEnvironment.Url) ?? string.Empty;

            // Interactive/DeviceCode/OAuth have built-in Microsoft multi-tenant AppId defaults.
            // Don't inherit DEVKIT_CLIENT_ID from fallback for these types,
            // as it may point to a single-tenant app meant for other auth types (e.g., ClientSecret).
            // The --clientid CLI arg still takes priority if explicitly provided.
            if (string.IsNullOrEmpty(ClientId))
            {
                var hasDefaultClientId =
                    AuthType.Equals("Interactive", StringComparison.OrdinalIgnoreCase) ||
                    AuthType.Equals("DeviceCode", StringComparison.OrdinalIgnoreCase) ||
                    AuthType.Equals("OAuth", StringComparison.OrdinalIgnoreCase);
                if (!hasDefaultClientId)
                    ClientId = getValue(ProjectEnvironment.ClientId) ?? string.Empty;
            }

            if (string.IsNullOrEmpty(ClientSecret))
                ClientSecret = getValue(ProjectEnvironment.ClientSecret) ?? string.Empty;

            if (string.IsNullOrEmpty(PacProfile))
                PacProfile = getValue(ProjectEnvironment.PacProfile) ?? string.Empty;

            if (string.IsNullOrEmpty(Username))
                Username = getValue(ProjectEnvironment.Username) ?? string.Empty;

            if (string.IsNullOrEmpty(Password))
                Password = getValue(ProjectEnvironment.Password) ?? string.Empty;

            if (string.IsNullOrEmpty(Domain))
                Domain = getValue(ProjectEnvironment.Domain) ?? string.Empty;
        }
    }
}
