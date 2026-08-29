using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit uploadreport' command.
    /// </summary>
    public class UploadReportCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--file|-f")]
        [Description("Single .rdl report file to deploy")]
        public string File { get; set; }

        [CommandOption("--report|-r")]
        [Description("Name, filename, or GUID of the report in Dataverse")]
        public string Report { get; set; }

        [CommandOption("--language|-l")]
        [Description("Language name (e.g. 'English') or LCID (default: 1033)")]
        public string Language { get; set; }
    }
}
