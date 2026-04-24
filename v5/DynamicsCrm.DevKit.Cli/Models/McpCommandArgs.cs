using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class McpCommandArgs : DevKitCommandArgs
    {
        [CommandOption("--transport")]
        [Description("MCP transport type: stdio (default)")]
        [DefaultValue("stdio")]
        public string Transport { get; set; } = "stdio";

        [CommandOption("--setup-guide")]
        [Description("Show comprehensive setup guide for configuring MCP in your IDE")]
        [DefaultValue(false)]
        public bool SetupGuide { get; set; }

        [CommandOption("--tools")]
        [Description("List all available MCP tools")]
        [DefaultValue(false)]
        public bool ListTools { get; set; }

        [CommandOption("--category")]
        [Description("Tool category: basic (9), standard (29), advanced (36). Default: all (loads everything).")]
        [DefaultValue("all")]
        public string Category { get; set; } = "all";

        [CommandOption("--dry-run")]
        [Description("Prevent mutating operations from executing. Read operations still work normally.")]
        [DefaultValue(false)]
        public bool DryRun { get; set; }
    }
}
