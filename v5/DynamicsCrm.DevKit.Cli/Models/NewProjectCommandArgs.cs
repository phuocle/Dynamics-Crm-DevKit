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
        [Description("List project templates without connecting to Dataverse")]
        public string List { get; set; } = string.Empty;

        [CommandOption("--type")]
        [Description("Template type id — run 'devkit new-project list' to see all types")]
        public string Type { get; set; } = string.Empty;

        [CommandOption("--name")]
        [Description("Project name. The DataverseTest prompt suggests <SolutionName>.DataverseTests")]
        public string Name { get; set; } = string.Empty;

        [CommandOption("--solution")]
        [Description("Path to the existing solution (.sln or .slnx) that will contain the project")]
        public string Solution { get; set; } = string.Empty;

        [CommandOption("--out")]
        [Description("Output directory (DataverseTest defaults to the solution directory)")]
        public string Out { get; set; } = string.Empty;

        [CommandOption("--server-project")]
        [Description("Server .csproj path for DataverseTest (absolute or relative to the solution)")]
        public string ServerProject { get; set; } = string.Empty;
    }
}
