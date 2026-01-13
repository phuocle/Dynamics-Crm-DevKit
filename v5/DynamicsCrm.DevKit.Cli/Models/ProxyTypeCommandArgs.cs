using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit proxytype' command.
    /// Generates proxy types using CrmSvcUtil.
    /// </summary>
    public class ProxyTypeCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--version")]
        [Description("Microsoft.CrmSdk.CoreTools version (auto-detected if not provided)")]
        public string Version { get; set; }
    }
}
