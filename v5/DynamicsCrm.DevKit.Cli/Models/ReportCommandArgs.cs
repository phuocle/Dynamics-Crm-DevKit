using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Command settings for 'devkit report' — report operations selected by --type:
    /// dataset (manage FetchXML datasets in a .rdl), upload (moved from
    /// 'devkit uploadreport'), download (moved from 'devkit downloadreport').
    /// </summary>
    public class ReportCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--type|-t")]
        [Description("dataset | upload | download")]
        public string Type { get; set; }

        [CommandOption("--file|-f")]
        [Description(".rdl file (dataset: manage datasets; upload: fast deploy)")]
        public string File { get; set; }

        [CommandOption("--action|-a")]
        [Description("dataset: list | validate | add | update | delete (default: list)")]
        public string Action { get; set; }

        [CommandOption("--name|-n")]
        [Description("dataset: dataset name")]
        public string Name { get; set; }

        [CommandOption("--new-name")]
        [Description("dataset: new dataset name (rename on update)")]
        public string NewName { get; set; }

        [CommandOption("--fetchxml")]
        [Description("dataset: FetchXML inline (use either --fetchxml or --fetchxml-file, not both)")]
        public string FetchXml { get; set; }

        [CommandOption("--fetchxml-file")]
        [Description("dataset: path of a file containing FetchXML")]
        public string FetchXmlFile { get; set; }

        [CommandOption("--prefilter|-p")]
        [Description("dataset: pre-filter toggles, e.g. \"account=on,ctry=off\"")]
        public string PreFilter { get; set; }

        [CommandOption("--force")]
        [Description("dataset: skip confirmations (removed fields on update, references on delete)")]
        public bool Force { get; set; }

        [CommandOption("--report|-r")]
        [Description("upload: name, filename, or GUID of the report in Dataverse")]
        public string Report { get; set; }

        [CommandOption("--language|-l")]
        [Description("upload: language name (e.g. 'English') or LCID (default: 1033)")]
        public string Language { get; set; }
    }
}
