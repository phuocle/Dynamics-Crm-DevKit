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
    }
}
