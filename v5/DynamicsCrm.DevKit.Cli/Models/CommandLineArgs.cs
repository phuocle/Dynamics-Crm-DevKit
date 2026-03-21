using Spectre.Console.Cli;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.IO;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for legacy Task classes.
    /// This class serves as a compatibility layer or DTO to pass arguments to existing Task logic (TaskServer, TaskGenerator, etc.).
    /// Ideally, Task classes should be refactored to use specific CommandArgs or an interface, and this class should be removed.
    /// Currently, it inherits from DevKitCommandArgs to avoid duplication.
    /// </summary>
    public class CommandLineArgs : DevKitCommandArgs
    {
        [CommandOption("--type")]
        [Description("Type task (generators, webresources, plugins, etc.)")]
        public string Type { get; set; } = string.Empty;

        [CommandOption("--version")]
        [Description("Version number")]
        [DefaultValue("1.0.0.0")]
        public string Version { get; set; } = "1.0.0.0";

        [CommandOption("--command")]
        [Description("Others command")]
        public string Command { get; set; } = string.Empty;

        [CommandOption("--only-assembly")] // Keeping this for backward compatibility if used anywhere else
        [Description("Fast deploy, only update the assembly")]
        public bool OnlyUpdateAssembly { get; set; }

        [CommandOption("--file|-f")]
        [Description("Single web resource file to deploy")]
        public string File { get; set; }

        [CommandOption("--webresource|-w")]
        [Description("Unique name of the web resource in Dataverse")]
        public string WebResource { get; set; }
    }
}