#nullable enable
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    /// <summary>
    /// Internal execution context that carries the human-configured mutation policy
    /// (e.g. dry-run) to every MCP tool and mutation helper.
    /// </summary>
    /// <remarks>
    /// <para>
    /// This class is the single source of truth for whether Dataverse mutations are
    /// allowed in the current server session. It is created once at host startup from
    /// the <c>--dry-run</c> CLI flag and injected into every tool via DI. It MUST NOT
    /// appear in any MCP tool parameter, description, schema, resource, or server
    /// instruction — the policy is not discoverable or controllable by the AI.
    /// </para>
    /// <para>
    /// The only signal an AI client may observe is the <c>[DryRun]</c> text prefix
    /// returned by <see cref="Tools.Helper.McpToolResults.DryRun(string, object)"/>
    /// after a mutation has been blocked.
    /// </para>
    /// </remarks>
    public sealed class McpExecutionContext
    {
        /// <summary>
        /// <c>true</c> when the server was started in dry-run mode and all Dataverse
        /// mutations must be blocked at the mutation boundary.
        /// </summary>
        public bool MutationsBlocked { get; }

        /// <summary>
        /// Create the execution context from the startup policy.
        /// </summary>
        /// <param name="mutationsBlocked">
        /// Pass <c>true</c> when the server was started with <c>--dry-run</c>.
        /// </param>
        public McpExecutionContext(bool mutationsBlocked)
        {
            MutationsBlocked = mutationsBlocked;
        }

        /// <summary>
        /// Fail-closed assertion called at every Dataverse mutation boundary.
        /// Throws <see cref="InvalidOperationException"/> when mutations are blocked,
        /// so a caller that forgets the action-level <c>if (_options.DryRun)</c>
        /// preview still cannot mutate Dataverse.
        /// </summary>
        /// <param name="operation">
        /// Short human-readable description of the blocked operation (e.g.
        /// <c>"CreateAsync account"</c>, <c>"PublishXmlRequest"</c>).
        /// </param>
        /// <exception cref="InvalidOperationException">
        /// Thrown when <see cref="MutationsBlocked"/> is <c>true</c>.
        /// </exception>
        internal void AssertMutationAllowed(string operation)
        {
            if (MutationsBlocked)
                throw new InvalidOperationException($"Mutation blocked: {operation}");
        }
    }
}
