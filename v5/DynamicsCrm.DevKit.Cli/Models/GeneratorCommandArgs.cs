using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class GeneratorCommandArgs : DevKitCommandArgs
    {
        [CommandArgument(0, "[list]")]
        [Description("Show available generator types")]
        public string List { get; set; }

        [CommandOption("--type")]
        [Description("Generator type — run 'devkit generator list' to see all types")]
        public string Type { get; set; }

        [CommandOption("--out")]
        [Description("Existing output directory (relative to the current directory or absolute)")]
        public string Out { get; set; }

        [CommandOption("--entities")]
        [Description("Comma-separated entity names, all, * or folder (default: folder)")]
        public string Entities { get; set; }

        [CommandOption("--rootnamespace")]
        [Description("Root namespace for JsForm, JsWebApi and CSharp")]
        public string RootNamespace { get; set; }

        [CommandOption("--namespace")]
        [Description("Optional namespace for CSharp")]
        public string Namespace { get; set; }
    }
}
