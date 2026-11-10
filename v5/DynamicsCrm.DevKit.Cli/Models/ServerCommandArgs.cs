using Spectre.Console.Cli;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.IO;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit server' command.
    /// Supports: servers, plugins, workflows, dataproviders, datasources
    /// </summary>
    public class ServerCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--onlyupdateassembly|--only-assembly|-o")]
        [Description("Only update assembly without registering steps")]
        public bool OnlyUpdateAssembly { get; set; }

        /// <summary>
        /// Server type: servers, plugins, workflows, dataproviders, datasources
        /// Set by the command based on which command was invoked or via --type for legacy syntax
        /// </summary>
        [CommandOption("--type|-t")]
        [Description("Task type (servers, plugins, workflows, dataproviders, datasources)")]
        public string ServerType { get; set; }
    }
}
