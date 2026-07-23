using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using ModelContextProtocol.Protocol;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Shared factory for <see cref="CallToolResult"/> instances.
    /// Enforces the project-wide convention: short text summary + structured JSON payload.
    /// </summary>
    internal static class McpToolResults
    {
        /// <summary>
        /// Successful result with a concise text summary and the full structured payload.
        /// </summary>
        internal static CallToolResult Success(string summary, object structured) => new()
        {
            Content = [new TextContentBlock { Text = summary }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        /// <summary>
        /// Error result with a message, optional hint, and optional structured details.
        /// The hint is included in both text and structured content so the AI/client
        /// knows how to proceed.
        /// </summary>
        internal static CallToolResult Error(string message, string hint = null, object details = null)
        {
            var text = message;
            if (!string.IsNullOrWhiteSpace(hint))
                text += $"\nHint: {hint}";

            var structured = new McpErrorResult
            {
                Error = message,
                Hint = string.IsNullOrWhiteSpace(hint) ? null : hint,
                Details = details
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text }],
                StructuredContent = JsonSerializer.SerializeToElement(structured),
                IsError = true
            };
        }

        /// <summary>
        /// Dry-run result describing what would happen without making changes.
        /// </summary>
        internal static CallToolResult DryRun(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }],
            StructuredContent = JsonSerializer.SerializeToElement(new { dryRun = true, message })
        };
    }
}
