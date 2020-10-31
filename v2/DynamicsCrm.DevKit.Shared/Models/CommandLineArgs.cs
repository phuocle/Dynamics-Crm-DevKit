using CmdLine;

namespace DynamicsCrm.DevKit.Shared.Models
{
    [CommandLineArguments(Program = "DynamicsCrm.DevKit.Cli", Title = "DynamicsCrm.DevKit.Cli Tasks", Description = "DynamicsCrm.DevKit.Cli automation tasks")]
    public class CommandLineArgs
    {
        [CommandLineParameter(Command = "conn", Name = "Connection", Required = false, Description = "Dynamics 365 Connection String")]
        public string Connection { get; set; }

        [CommandLineParameter(Command = "json", Name = "Json", Required = false, Description = "DynamicsCrm.DevKit.Cli json file")]
        public string Json { get; set; }

        [CommandLineParameter(Command = "type", Name = "Type", Required = false, Description = "Type task")]
        public string Type { get; set; }

        [CommandLineParameter(Command = "profile", Name = "Profile", Required = false, Description = "Profile of task")]
        public string Profile { get; set; }

        [CommandLineParameter(Command = "version", Name = "Version", Required = false, Description = "Version number", Default = "1.0.0.0")]
        public string Version { get; set; }

        [CommandLineParameter(Command = "command", Name = "Command", Required = false, Description = "Others command", Default = "")]
        public string Command { get; set; }

        [CommandLineParameter(Command = "sdklogin", Name = "SdkLogin", Required = false, Description = "Login by Sdk Dorm", Default = "")]
        public string SdkLogin { get; set; }
    }
}
