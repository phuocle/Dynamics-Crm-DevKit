using Spectre.Console.Cli;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.IO;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit generator' command.
    /// No --type needed as it's implicit.
    /// </summary>
    public class GeneratorCommandArgs : DevKitCommandArgs
    {
    }
}
