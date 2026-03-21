using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit webresource' command.
    /// </summary>
    public class WebResourceCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--file|-f")]
        [Description("Single web resource file to deploy")]
        public string File { get; set; }

        [CommandOption("--webresource|-w")]
        [Description("Unique name of the web resource in Dataverse")]
        public string WebResource { get; set; }
    }
}
