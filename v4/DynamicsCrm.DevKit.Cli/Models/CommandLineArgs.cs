using CmdLine;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.IO;

namespace DynamicsCrm.DevKit.Shared.Models
{
    [CommandLineArguments(Program = "DynamicsCrm.DevKit.Cli", Title = "DynamicsCrm.DevKit.Cli Tasks", Description = "DynamicsCrm.DevKit.Cli automation tasks")]
    public class CommandLineArgs
    {
        [CommandLineParameter(Command = "conn", Name = "Connection", Required = false, Description = "Dynamics 365 Connection String", Default = "")]
        public string Connection { get; set; }

        [CommandLineParameter(Command = "json", Name = "Json", Required = false, Description = "DynamicsCrm.DevKit.Cli json file", Default = "")]
        public string Json { get; set; }

        [CommandLineParameter(Command = "type", Name = "Type", Required = false, Description = "Type task", Default = "")]
        public string Type { get; set; }

        [CommandLineParameter(Command = "profile", Name = "Profile", Required = false, Description = "Profile of task", Default = "")]
        public string Profile { get; set; }

        [CommandLineParameter(Command = "version", Name = "Version", Required = false, Description = "Version number", Default = "1.0.0.0")]
        public string Version { get; set; }

        [CommandLineParameter(Command = "command", Name = "Command", Required = false, Description = "Others command", Default = "")]
        public string Command { get; set; }

        [CommandLineParameter(Command = "sdklogin", Name = "SdkLogin", Required = false, Description = "Login by Sdk OOB dialog", Default = "")]
        public string SdkLogin { get; set; }

        [CommandLineParameter(Command = "url", Name = "Url", Required = false, Description = "Login by Sdk OOB dialog", Default = "")]
        public string Url { get; set; }

        [CommandLineParameter(Command = "onlyupdateassembly", Name = "OnlyUpdateAssembly", Required = false, Description = "Fast deploy, only update the assembly", Default = "")]
        public string OnlyUpdateAssembly { get; set; }

        [CommandLineParameter(Command = "f", Name = "File", Required = false, Description = "Single web resource file path to deploy directly", Default = "")]
        public string File { get; set; }

        [CommandLineParameter(Command = "w", Name = "WebResourceName", Required = false, Description = "Web resource unique name in CRM (used with /f)", Default = "")]
        public string WebResourceName { get; set; }

        public string CurrentDirectory => Directory.GetCurrentDirectory();

        public string JsonFile {
            get
            {
                var file = Path.Combine(CurrentDirectory, Json);
                if (System.IO.File.Exists(file)) return new FileInfo(file).FullName;
                return null;
            }
        }

        public bool IsSdkLogin => SdkLogin?.ToLower() == "yes";
        public bool IsSingleFileMode => !string.IsNullOrEmpty(File);
        public ServiceClient ServiceClient { get; set; }
    }
}