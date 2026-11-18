using Spectre.Console.Cli;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class McpCommandArgs : DevKitCommandArgs
    {
        [CommandArgument(0, "[name]")]
        [Description("Optional MCP instance display name. With no configuration options, connections come only from project .env.")]
        public string Name { get; set; }

        [CommandOption("--env <id>")]
        [Description("Select the startup .env group by numeric ID, alias, or default. Cannot be combined with other configuration options.")]
        public string Env { get; set; }

        [CommandOption("--transport")]
        [Description("Args-only MCP transport type: stdio (default). An explicit option requires complete connection arguments and cannot accompany --env.")]
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
        [Description("Args-only tool category: readonly or all. Requires complete connection arguments; cannot be combined with --env. Default: all.")]
        [DefaultValue("all")]
        public string Category { get; set; } = "all";

        [CommandOption("--dry-run")]
        [Description("Args-only mutation protection. Requires complete connection arguments; cannot accompany --env. In .env mode use the group's DRY_RUN key.")]
        [DefaultValue(false)]
        public bool DryRun { get; set; }

        [CommandOption("--as-user")]
        [Description("Args-only impersonation (GUID or email). Requires complete connection arguments and admin privileges; cannot be combined with --env.")]
        public string AsUser { get; set; }

        internal System.Collections.Generic.IDictionary<string, string> EnvironmentSnapshot { get; set; }
        internal string EnvironmentSnapshotPath { get; set; }
        internal string AuthenticationCacheName { get; set; }
        internal bool UsedEnvironmentFallback { get; set; }
        internal bool UsedEnvironmentGroupFallback { get; set; }
        internal string ResolvedConnectionSource { get; set; }
    }
}
