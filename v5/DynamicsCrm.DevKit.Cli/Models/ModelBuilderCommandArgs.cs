using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit modelbuilder' command.
    /// Generates early-bound entity classes using PAC ModelBuilder.
    /// </summary>
    public class ModelBuilderCommandArgs : DevKitCommandArgs
    {
        // No additional parameters needed for now
        // PAC ModelBuilder will be invoked via pac CLI directly
    }
}
