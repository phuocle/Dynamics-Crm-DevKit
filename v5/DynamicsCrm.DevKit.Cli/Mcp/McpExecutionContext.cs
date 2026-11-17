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
    /// allowed for one connection. It is created from the startup flag and that
    /// group's frozen .env policy. Connection discovery and whoami expose its
    /// effective state, but tool parameters cannot change it.
    /// </para>
    /// <para>
    /// Action-level previews retain their <c>[DryRun]</c> prefix. The context
    /// itself is never an MCP input; the selected connection supplies it.
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
        /// Display name of the impersonated user (e.g. "John Doe (john@contoso.com)")
        /// when the server was started with <c>--as-user</c>, or <c>null</c> when
        /// impersonation is not active. Used for audit/log output only — the actual
        /// <c>CallerId</c> is set on the <c>ServiceClient</c> at host startup.
        /// </summary>
        public string? ImpersonatedUser { get; }

        /// <summary>
        /// Create the execution context from the startup policy.
        /// </summary>
        /// <param name="mutationsBlocked">
        /// Pass <c>true</c> when the server was started with <c>--dry-run</c>.
        /// </param>
        /// <param name="impersonatedUser">
        /// Display name of the impersonated user when <c>--as-user</c> is active, or <c>null</c>.
        /// </param>
        public McpExecutionContext(bool mutationsBlocked, string? impersonatedUser = null)
        {
            MutationsBlocked = mutationsBlocked;
            ImpersonatedUser = impersonatedUser;
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
