using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Settings for 'devkit new-project' - scaffolds one DevKit PROJECT
    /// template (Shared, Console, Server, ...) and registers it in the
    /// required solution. Split from the old combined 'devkit new' so the
    /// command owns exactly the arguments its templates take.
    /// </summary>
    public class NewProjectCommandArgs : DevKitCommandArgs
    {
        [CommandArgument(0, "[list]")]
        [Description("Show the available project templates")]
        public string List { get; set; } = string.Empty;

        [CommandOption("--type")]
        [Description("Template type id — run 'devkit new-project list' to see all types")]
        public string Type { get; set; } = string.Empty;

        [CommandOption("--name")]
        [Description("Project name (default suggestion: {SolutionName}.{Type})")]
        public string Name { get; set; } = string.Empty;

        [CommandOption("--solution")]
        [Description("Solution file (.sln/.slnx) the project is registered in")]
        public string Solution { get; set; } = string.Empty;

        [CommandOption("--out")]
        [Description("Output directory (default: current directory)")]
        public string Out { get; set; } = string.Empty;
    }
}
