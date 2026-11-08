using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit webresource' command — deploy (upload,
    /// the default) or download (--type download, moved from
    /// 'devkit downloadwebresource').
    /// </summary>
    public class WebResourceCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--type|-t")]
        [Description("upload (default) | download")]
        public string Type { get; set; }

        [CommandOption("--file|-f")]
        [Description("Single web resource file to deploy")]
        public string File { get; set; }

        [CommandOption("--webresource|-w")]
        [Description("Unique name of the web resource in Dataverse")]
        public string WebResource { get; set; }

        [CommandOption("--webresourceid")]
        [Description("Web resource GUID to deploy --file directly without any lookup (upload only, exclusive with --webresource); '-wid' is accepted as a shorthand")]
        public string WebResourceId { get; set; }
    }
}
