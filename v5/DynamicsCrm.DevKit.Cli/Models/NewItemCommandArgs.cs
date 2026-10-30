using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Settings for 'devkit new-item' - scaffolds one DevKit ITEM template
    /// (LateBound, JsForm, Plugin, ...) into the required project. Split
    /// from the old combined 'devkit new' so the command owns exactly the
    /// arguments its templates take.
    /// </summary>
    public class NewItemCommandArgs : DevKitCommandArgs
    {
        [CommandArgument(0, "[list]")]
        [Description("Show the available item templates")]
        public string List { get; set; } = string.Empty;

        [CommandOption("--type")]
        [Description("Template type id — run 'devkit new-item list' to see all types")]
        public string Type { get; set; } = string.Empty;

        [CommandOption("--name")]
        [Description("Class name, dialog name or report name")]
        public string Name { get; set; } = string.Empty;

        [CommandOption("--entity")]
        [Description("Entity schema name (e.g. Account) for entity-driven items")]
        public string Entity { get; set; } = string.Empty;

        [CommandOption("--message")]
        [Description("Dataverse message (e.g. Update, or a custom action/api name)")]
        public string Message { get; set; } = string.Empty;

        [CommandOption("--stage")]
        [Description("Plugin stage: PreValidation, PreOperation or PostOperation")]
        public string Stage { get; set; } = string.Empty;

        [CommandOption("--execution")]
        [Description("Execution mode: Synchronous or Asynchronous")]
        public string Execution { get; set; } = string.Empty;

        [CommandOption("--order")]
        [Description("Execution order (default 1)")]
        public int Order { get; set; } = 1;

        [CommandOption("--template")]
        [Description("T4 template title from DynamicsCrm.DevKit.Cli.json (default: Default)")]
        public string Template { get; set; } = "Default";

        [CommandOption("--t4")]
        [Description("Path to a custom plugin .tt T4 file (default: built-in)")]
        public string T4 { get; set; } = string.Empty;

        [CommandOption("--datasource")]
        [Description("Data source logical name (DataProvider item)")]
        public string Datasource { get; set; } = string.Empty;

        [CommandOption("--test-target")]
        [Description("Full class name of the plugin/workflow to test (Test item)")]
        public string TestTarget { get; set; } = string.Empty;

        [CommandOption("--language")]
        [Description("Language code (LCID) for ResourceString items (e.g. 1033)")]
        public string Language { get; set; } = string.Empty;

        [CommandOption("--namespace")]
        [Description("Explicit namespace override for item templates")]
        public string Namespace { get; set; } = string.Empty;

        [CommandOption("--project")]
        [Description("The project the item scaffolds into")]
        public string Project { get; set; } = string.Empty;

        [CommandOption("--out")]
        [Description("Output directory (default: the project directory)")]
        public string Out { get; set; } = string.Empty;

        [CommandOption("--force")]
        [Description("Overwrite existing user files")]
        public bool Force { get; set; }
    }
}
