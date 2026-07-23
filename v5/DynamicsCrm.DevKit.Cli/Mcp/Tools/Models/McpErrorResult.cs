using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// Structured error payload returned by <see cref="IMcpToolResultBuilder.Error"/>.
    /// Mirrors the text content so AI clients can parse the error and the hint
    /// without string parsing.
    /// </summary>
    public class McpErrorResult
    {
        /// <summary>
        /// Error message (same as the text content).
        /// </summary>
        [JsonPropertyName("error")]
        public string Error { get; set; }

        /// <summary>
        /// Actionable hint telling the AI/client how to recover or what to check.
        /// </summary>
        [JsonPropertyName("hint")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Hint { get; set; }

        /// <summary>
        /// Optional structured details such as the exception type, field name,
        /// or inner validation result.
        /// </summary>
        [JsonPropertyName("details")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public object Details { get; set; }
    }
}
