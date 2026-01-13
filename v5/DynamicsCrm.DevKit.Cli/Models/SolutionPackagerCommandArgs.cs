using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit solution' command.
    /// Manages solution packager operations (Extract/Pack).
    /// </summary>
    public class SolutionPackagerCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--version")]
        [Description("Microsoft.CrmSdk.CoreTools version (auto-detected if not provided)")]
        public string Version { get; set; }
    }
}
