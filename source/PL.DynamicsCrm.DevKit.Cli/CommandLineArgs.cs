using CmdLine;

namespace PL.DynamicsCrm.DevKit.Cli
{
    [CommandLineArguments(Program = "PL.DynamicsCrm.DevKit.Cli", Title = "PL.DynamicsCrm.DevKit.Cli Tasks",
        Description = "PL.DynamicsCrm.DevKit.Cli automation tasks")]
    public class CommandLineArgs
    {
        [CommandLineParameter(Command = "conn", Name = "Connection", Required = true,
            Description = "Dynamics 365 Connection String")]
        public string Connection { get; set; }

        [CommandLineParameter(Command = "json", Name = "Json", Required = true,
            Description = "PL.DynamicsCrm.DevKit.Cli json file")]
        public string Json { get; set; }

        [CommandLineParameter(Command = "type", Name = "Type", Required = true, Description = "Type task")]
        public string Type { get; set; }

        [CommandLineParameter(Command = "profile", Name = "Profile", Required = true, Description = "Profile of task")]
        public string Profile { get; set; }

        [CommandLineParameter(Command = "version", Name = "Version", Required = true, Description = "Version number")]
        public string Version { get; set; }
    }
}