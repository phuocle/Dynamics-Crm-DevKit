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

        [CommandOption("--sdk-login")]
        [Description("Login by Sdk OOB dialog")]
        public bool IsSdkLogin { get; set; }

        [CommandOption("--url")]
        [Description("Dynamics 365 URL for SDK login")]
        public string Url { get; set; } = string.Empty;

        // Phase 2: Modern Interactive Authentication arguments
        [CommandOption("--auth")]
        [Description("Authentication type (Interactive, DeviceCode)")]
        public string AuthType { get; set; } = string.Empty;

        [CommandOption("--clientid")]
        [Description("Azure AD Application (Client) ID")]
        public string ClientId { get; set; } = string.Empty;

        [CommandOption("--clientsecret")]
        [Description("Azure AD Client Secret (for ClientSecret auth type)")]
        public string ClientSecret { get; set; } = string.Empty;

        // Phase 3: ClientCertificate arguments
        [CommandOption("--cert")]
        [Description("Path to certificate file (.pfx, .p12)")]
        public string CertificatePath { get; set; } = string.Empty;

        [CommandOption("--certpass")]
        [Description("Password for certificate file")]
        public string CertificatePassword { get; set; } = string.Empty;

        [CommandOption("--certthumb")]
        [Description("Certificate thumbprint for store lookup")]
        public string CertificateThumbprint { get; set; } = string.Empty;

        [CommandOption("--certstorelocation")]
        [Description("Certificate store location (CurrentUser, LocalMachine)")]
        public string CertificateStoreLocation { get; set; } = "CurrentUser";

        [CommandOption("--certstorename")]
        [Description("Certificate store name (My, Root, CA)")]
        public string CertificateStoreName { get; set; } = "My";

        // Phase 3: ManagedIdentity arguments
        [CommandOption("--managedidentityclientid")]
        [Description("Client ID for user-assigned managed identity")]
        public string ManagedIdentityClientId { get; set; } = string.Empty;

        // Phase 4: FromPac arguments
        [CommandOption("--pacprofile")]
        [Description("PAC CLI auth profile name or index")]
        public string PacProfile { get; set; } = string.Empty;

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
