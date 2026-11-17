using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class McpCommandArgs : DevKitCommandArgs
    {
        [CommandArgument(0, "[name]")]
        [Description("Optional display name for this MCP server instance (shown to MCP clients; distinct from --env fallback group and --profile json profile)")]
        public string Name { get; set; }

        [CommandOption("--env <id>")]
        [Description("Startup connection: numeric .env group ID, alias, or default for DEVKIT_*. Calls may select another group with env; omitted env uses startup.")]
        public string Env { get; set; }

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
        [Description("Tool category: readonly or all. Default: all.")]
        [DefaultValue("all")]
        public string Category { get; set; } = "all";

        [CommandOption("--dry-run")]
        [Description("Prevent mutating operations from executing. Read operations still work normally.")]
        [DefaultValue(false)]
        public bool DryRun { get; set; }

        [CommandOption("--as-user")]
        [Description("Impersonate this user (GUID or email) on the startup connection; other groups use their own AS_USER key. Requires admin privileges.")]
        public string AsUser { get; set; }

        internal System.Collections.Generic.IDictionary<string, string> EnvironmentSnapshot { get; set; }
        internal string EnvironmentSnapshotPath { get; set; }
        internal string AuthenticationCacheName { get; set; }
        internal bool UsedEnvironmentFallback { get; set; }
        internal bool UsedEnvironmentGroupFallback { get; set; }
        internal string ResolvedConnectionSource { get; set; }
    }
}
