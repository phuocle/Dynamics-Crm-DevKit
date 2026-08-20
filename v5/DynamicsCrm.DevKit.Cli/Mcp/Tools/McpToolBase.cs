using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Protocol;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    /// <summary>
    /// Default implementation of <see cref="IMcpToolResultBuilder"/>.
    /// Inherit from this class so every MCP tool returns results in the same shape:
    /// a short text summary plus structured JSON, or a structured error with a hint.
    /// </summary>
    public abstract class McpToolBase : IMcpToolResultBuilder
    {
        /// <inheritdoc />
        public CallToolResult Success(string summary, object structured) => McpToolResults.Success(summary, structured);

        /// <inheritdoc />
        public CallToolResult Partial(string summary, object structured) => McpToolResults.Partial(summary, structured);

        /// <inheritdoc />
        public CallToolResult Failed(string summary, object structured) => McpToolResults.Failed(summary, structured);

        /// <inheritdoc />
        public CallToolResult Error(string message, string hint = null, object details = null) => McpToolResults.Error(message, hint, details);

        /// <inheritdoc />
        public CallToolResult ThrowException(Exception ex) => McpToolResults.ThrowException(ex);

        /// <summary>
        /// Friendly exception handler: strips StackTrace and rewrites known Dataverse
        /// fault messages into concise, actionable error text. Use at tool entry catch
        /// when the tool surfaces Dataverse metadata/relationship faults.
        /// </summary>
        public CallToolResult ThrowExceptionFriendly(Exception ex) => McpToolResults.ThrowExceptionFriendly(ex);

        /// <inheritdoc />
        public CallToolResult DryRun(string summary, object structured) => McpToolResults.DryRun(summary, structured);

    }
}
