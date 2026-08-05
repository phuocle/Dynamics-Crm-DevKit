namespace DynamicsCrm.DevKit.Cli.Mcp
{
    public class McpDryRunOptions
    {
        public bool DryRun { get; set; }
    }

    /// <summary>
    /// Startup-only policy source. The MCP host creates both the legacy options
    /// projection and the fail-closed execution context from this one value so
    /// they cannot drift during normal dependency-injection setup.
    /// </summary>
    internal sealed class McpExecutionPolicy
    {
        internal McpExecutionPolicy(bool mutationsBlocked)
        {
            MutationsBlocked = mutationsBlocked;
            Options = new McpDryRunOptions { DryRun = mutationsBlocked };
            Context = new McpExecutionContext(mutationsBlocked);
        }

        internal bool MutationsBlocked { get; }
        internal McpDryRunOptions Options { get; }
        internal McpExecutionContext Context { get; }
    }
}
