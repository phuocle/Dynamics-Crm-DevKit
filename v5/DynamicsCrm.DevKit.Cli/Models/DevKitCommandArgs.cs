using Spectre.Console.Cli;
using Microsoft.PowerPlatform.Dataverse.Client;
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
        [Description("Authentication type (Interactive, DeviceCode)")]
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

        public string CurrentDirectory => Directory.GetCurrentDirectory();

        public string JsonFile
        {
            get
            {
                if (string.IsNullOrEmpty(Json)) return null;
                var file = Path.Combine(CurrentDirectory, Json);
                if (File.Exists(file)) return new FileInfo(file).FullName;
                return null;
            }
        }

        public ServiceClient ServiceClient { get; set; }
    }
}
