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
    }
}
