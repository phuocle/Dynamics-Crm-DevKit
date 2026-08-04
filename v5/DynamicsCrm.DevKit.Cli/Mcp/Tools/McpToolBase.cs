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
        public CallToolResult Error(string message, string hint = null, object details = null) => McpToolResults.Error(message, hint, details);

        /// <inheritdoc />
        public CallToolResult ThrowException(Exception ex) => McpToolResults.ThrowException(ex);

        /// <inheritdoc />
        public CallToolResult DryRun(string summary, object structured) => McpToolResults.DryRun(summary, structured);

    }
}
