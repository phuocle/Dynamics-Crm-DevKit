using ModelContextProtocol.Protocol;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    /// <summary>
    /// Standard contract for MCP tools that return a short text summary
    /// plus a structured JSON payload, or a structured error result.
    /// </summary>
    /// <remarks>
    /// Implement this interface directly, or inherit from <see cref="McpToolBase"/>
    /// to get the default implementation. Every tool should produce results
    /// in the same shape so AI clients can rely on <c>StructuredContent</c> while
    /// human clients still see a concise <c>Content</c> summary.
    /// </remarks>
    public interface IMcpToolResultBuilder
    {
        /// <summary>
        /// Return a successful result: a short text summary and the full structured payload.
        /// </summary>
        /// <param name="summary">One-line human-readable summary.</param>
        /// <param name="structured">Machine-readable result object.</param>
        CallToolResult Success(string summary, object structured);

        /// <summary>
        /// Return an error result: a message, an optional hint for the AI/client,
        /// and optional structured details. The hint tells the caller what to do next.
        /// </summary>
        /// <param name="message">Error message shown in text content.</param>
        /// <param name="hint">Actionable hint for the AI/client.</param>
        /// <param name="details">Optional structured details (exception type, field, etc.).</param>
        CallToolResult Error(string message, string hint = null, object details = null);

        /// <summary>
        /// Return an error result for an unhandled exception. Use this in the top-level
        /// <c>catch (Exception ex)</c> block of an MCP tool method, NOT for validation
        /// errors or expected business-rule failures (use <see cref="Error"/> for those).
        /// </summary>
        /// <remarks>
        /// The result distinguishes itself from <see cref="Error"/> with an
        /// <c>[UncaughtException]</c> prefix and an exception-type tag in the
        /// structured payload, so AI clients can recognize uncontrolled failures
        /// and avoid retrying with the same inputs.
        /// </remarks>
        /// <param name="ex">The exception that escaped the tool's normal flow.</param>
        CallToolResult ThrowException(Exception ex);

        /// <summary>
        /// Return a dry-run result describing what would happen without making changes.
        /// </summary>
        /// <param name="message">Description of the operation that would run.</param>
        CallToolResult DryRun(string message);
    }
}
