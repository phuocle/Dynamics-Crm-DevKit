using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.ServiceModel;
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

        /// <summary>
        /// Format an unhandled exception into an error result that AI clients can
        /// distinguish from <see cref="Error"/>. Use this only in top-level
        /// <c>catch (Exception ex)</c> blocks — for expected/validation errors,
        /// use <see cref="Error"/> instead.
        /// </summary>
        /// <remarks>
        /// Output shape (text):
        /// <code>
        /// [UncaughtException] {ExceptionType}: {TopMessage}
        /// InnerException: {InnerType}: {InnerMessage}  (if any)
        /// StackTrace: {FirstFrame}                       (file:line)
        /// Hint: ...
        /// </code>
        /// Structured payload includes <c>exceptionType</c>, <c>errorCode</c> (Dataverse faults),
        /// <c>message</c>, <c>innerException</c>, <c>stackTrace</c>.
        /// </remarks>
        internal static CallToolResult ThrowException(Exception ex)
        {
            if (ex == null)
                return Error("[UncaughtException] (null exception)", "An unknown error was raised. Check server logs.");

            var (kind, hint) = ClassifyException(ex);

            // Build the message chain: top-level + inner (one level deep, plus summary)
            var message = ex.Message ?? "(no message)";
            var innerText = BuildInnerExceptionText(ex.InnerException);
            var topFrame = ExtractFirstFrame(ex);

            var textLines = new List<string>
            {
                $"[UncaughtException] {kind}: {message}"
            };
            if (!string.IsNullOrWhiteSpace(innerText))
                textLines.Add($"InnerException: {innerText}");
            if (!string.IsNullOrWhiteSpace(topFrame))
                textLines.Add($"StackTrace: {topFrame}");
            textLines.Add($"Hint: {hint}");
            var text = string.Join("\n", textLines);

            // Build structured details so AI clients don't have to parse text
            var details = new Dictionary<string, object>
            {
                ["exceptionType"] = ex.GetType().FullName,
                ["kind"] = kind,
                ["message"] = message
            };
            if (ex is FaultException<OrganizationServiceFault> faultEx && faultEx.Detail != null)
            {
                details["errorCode"] = $"0x{faultEx.Detail.ErrorCode:X8}";
                if (faultEx.Detail.InnerFault != null)
                    details["innerFault"] = $"{faultEx.Detail.InnerFault.Message} (0x{faultEx.Detail.InnerFault.ErrorCode:X8})";
            }
            if (ex.InnerException != null)
            {
                details["innerException"] = new Dictionary<string, object>
                {
                    ["type"] = ex.InnerException.GetType().FullName,
                    ["message"] = ex.InnerException.Message ?? "(no message)"
                };
            }
            if (!string.IsNullOrWhiteSpace(topFrame))
                details["stackTrace"] = topFrame;

            var structured = new McpErrorResult
            {
                Error = $"{kind}: {message}",
                Hint = hint,
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
        /// Classify an exception into a short kind label + a hint. The kind label
        /// is shown in the message; the hint is what the AI/client should do next.
        /// </summary>
        private static (string Kind, string Hint) ClassifyException(Exception ex)
        {
            switch (ex)
            {
                case FaultException<OrganizationServiceFault> fex:
                    var code = fex.Detail != null ? $"0x{fex.Detail.ErrorCode:X8}" : "unknown";
                    return ("DataverseFault",
                        $"Dataverse returned error code {code}. This is an organization-side error (validation, business rule, security, etc.). Inspect the error code and message; do not retry with the same inputs unless the message suggests a transient issue.");

                case JsonException:
                    return ("JsonParseError",
                        "Input JSON could not be parsed. Verify the JSON syntax and required fields.");

                case System.Xml.XmlException:
                    return ("XmlParseError",
                        "Input XML could not be parsed. Verify well-formedness and required elements.");

                case IOException:
                    return ("FileIOError",
                        "A file system operation failed. Check file paths, permissions, and disk space.");

                case UnauthorizedAccessException:
                    return ("AccessDenied",
                        "Access to a file or resource was denied. Check permissions on the target path.");

                case ArgumentException:
                    return ("InvalidArgument",
                        "An internal argument was invalid. This is likely a tool bug; please report it with the inputs you used.");

                case InvalidOperationException:
                    return ("InvalidState",
                        "The operation was attempted in an invalid state. Check prerequisites (entity exists, value is unique, etc.).");

                case TimeoutException:
                    return ("Timeout",
                        "The operation timed out. Retry, or split the request into smaller chunks.");

                case OperationCanceledException:
                    return ("Cancelled",
                        "The operation was cancelled. Retry if you still need the result.");

                default:
                    return (ex.GetType().Name,
                        "An unexpected error occurred. Check the server logs and retry; if it persists, report it as a tool bug with the inputs you used.");
            }
        }

        private static string BuildInnerExceptionText(Exception? inner)
        {
            if (inner == null) return "";
            var s = $"{inner.GetType().Name}: {inner.Message ?? "(no message)"}";
            // Recurse one extra level if there is a deeper inner exception
            if (inner.InnerException != null)
                s += $" → {inner.InnerException.GetType().Name}: {inner.InnerException.Message ?? "(no message)"}";
            return s;
        }

        private static string ExtractFirstFrame(Exception ex)
        {
            var st = ex.StackTrace;
            if (string.IsNullOrWhiteSpace(st)) return "";

            // Take the first non-empty line — usually the most useful frame
            foreach (var rawLine in st.Split('\n'))
            {
                var line = rawLine.Trim();
                if (string.IsNullOrEmpty(line)) continue;
                // Strip "at " prefix for compactness
                if (line.StartsWith("at ", StringComparison.Ordinal))
                    line = line[3..];
                return line;
            }
            return "";
        }
    }
}
