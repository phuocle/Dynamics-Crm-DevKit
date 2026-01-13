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
