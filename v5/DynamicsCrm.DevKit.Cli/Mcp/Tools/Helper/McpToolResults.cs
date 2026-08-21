#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.ServiceModel;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Shared factory for <see cref="CallToolResult"/> instances.
    /// Enforces the project-wide convention: short text summary + structured JSON payload.
    /// </summary>
    internal static class McpToolResults
    {
        // ── Output prefix/label constants — single source of truth ─────────────
        // The factory owns all prefixes/labels; call sites must NOT embed them.
        // Change here to rebrand every tool at once (e.g. ErrorPrefix = "LOI").
        internal const string SuccessPrefix = "[Success]";
        internal const string ErrorPrefix = "[Error]";
        internal const string DryRunPrefix = "[DryRun]";
        internal const string PartialPrefix = "[Partial]";
        internal const string FailedPrefix = "[Failed]";
        internal const string HintLabel = "Hint";

        /// <summary>
        /// Successful result with a concise text summary and the full structured payload.
        /// </summary>
        internal static CallToolResult Success(string summary, object? structured) => new()
        {
            Content = [new TextContentBlock { Text = $"{SuccessPrefix} {StripPrefix(summary, SuccessPrefix)}" }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        /// <summary>
        /// Partial-failure result: some records succeeded, some failed.
        /// Text prefix is <c>[Partial]</c>; <c>IsError=true</c> so AI clients
        /// can detect that not everything went well. The structured payload
        /// is the tool's own result DTO (not <see cref="McpErrorResult"/>),
        /// preserving per-item details for programmatic inspection.
        /// </summary>
        internal static CallToolResult Partial(string summary, object structured) => new()
        {
            Content = [new TextContentBlock { Text = $"{PartialPrefix} {StripPrefix(summary, PartialPrefix)}" }],
            StructuredContent = JsonSerializer.SerializeToElement(structured),
            IsError = true
        };

        /// <summary>
        /// All-failed result: every record in the batch failed.
        /// Text prefix is <c>[Failed]</c>; <c>IsError=true</c>. The structured
        /// payload is the tool's own result DTO so the caller can inspect
        /// per-item errors.
        /// </summary>
        internal static CallToolResult Failed(string summary, object structured) => new()
        {
            Content = [new TextContentBlock { Text = $"{FailedPrefix} {StripPrefix(summary, FailedPrefix)}" }],
            StructuredContent = JsonSerializer.SerializeToElement(structured),
            IsError = true
        };

        /// <summary>
        /// Error result with a message, optional hint, and optional structured details.
        /// The text content is a 3-part bracketed block ([Error]/[Hint]/[Detail]) so
        /// AI clients that only surface text (e.g. Claude Code CLI) still see all three
        /// fields; the structured payload carries the same data as a JSON object for
        /// clients that read structuredContent (e.g. GitHub Copilot). Duplication is
        /// intentional for cross-client compatibility.
        /// </summary>
        internal static CallToolResult Error(string message, string? hint = null, object? details = null)
        {
            var clean = StripPrefix(message, ErrorPrefix);
            var normalizedHint = NormalizeHint(hint);

            var textLines = new List<string> { $"{ErrorPrefix} {clean}" };
            if (normalizedHint != null)
                textLines.Add($"[Hint] {normalizedHint}");
            if (details != null)
                textLines.Add($"[Detail] {JsonSerializer.Serialize(details)}");
            var text = string.Join("\n", textLines);

            var structured = new McpErrorResult
            {
                Error = clean,
                Hint = normalizedHint,
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
        /// Dry-run result describing what would happen without making Dataverse changes.
        /// </summary>
        internal static CallToolResult DryRun(string summary, object structured) => new()
        {
            Content = [new TextContentBlock { Text = $"{DryRunPrefix} {StripPrefix(summary, DryRunPrefix)}" }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        /// <summary>
        /// Strip a legacy literal prefix that older call sites embedded themselves,
        /// so migration can happen tool-by-tool without double prefixes at runtime.
        /// For errors, also strips the legacy "Error:" label.
        /// </summary>
        private static string StripPrefix(string? text, string prefix)
        {
            var t = (text ?? "").TrimStart();
            if (t.StartsWith(prefix, StringComparison.Ordinal))
                t = t.Substring(prefix.Length).TrimStart();
            else if (prefix == ErrorPrefix && t.StartsWith("Error:", StringComparison.Ordinal))
                t = t.Substring("Error:".Length).TrimStart();
            return t;
        }

        /// <summary>
        /// Normalize a hint value: the factory owns the "Hint:" label, so strip any
        /// legacy "Hint:"/"Tip:" prefix the call site embedded.
        /// </summary>
        private static string? NormalizeHint(string? hint)
        {
            if (string.IsNullOrWhiteSpace(hint)) return null;
            var h = hint.TrimStart();
            if (h.StartsWith(HintLabel + ":", StringComparison.Ordinal))
                h = h.Substring(HintLabel.Length + 1).TrimStart();
            else if (h.StartsWith("Tip:", StringComparison.Ordinal))
                h = h.Substring(4).TrimStart();
            return h;
        }

        /// <summary>
        /// Format an unhandled exception into an error result. Same 3-part text shape
        /// as <see cref="Error"/> (<c>[Error]</c>/<c>[Hint]</c>/<c>[Detail]</c>) — the
        /// structured payload (<c>exceptionType</c>, <c>errorCode</c>, <c>stackTrace</c>)
        /// is what lets AI clients distinguish it. Use this only in top-level
        /// <c>catch (Exception ex)</c> blocks — for expected/validation errors, use
        /// <see cref="Error"/> instead.
        /// </summary>
        /// <remarks>
        /// Output shape (text):
        /// <code>
        /// [Error] {ExceptionType}: {TopMessage}
        /// [Hint] {recovery hint}
        /// [Detail] {{"exceptionType":"...","kind":"...","message":"...","errorCode":"0x...","innerException":{...},"stackTrace":"file:line"}}
        /// </code>
        /// Structured payload includes <c>error</c>, <c>hint</c>, <c>details</c>
        /// (<c>exceptionType</c>, <c>errorCode</c> for Dataverse faults, <c>message</c>,
        /// <c>innerException</c>, <c>stackTrace</c>).
        /// </remarks>
        internal static CallToolResult ThrowException(Exception ex)
        {
            if (ex == null)
                return Error("(null exception)", "An unknown error was raised. Check server logs.");

            var (kind, hint) = ClassifyException(ex);

            // Build the message chain: top-level message (inner/stack go into [Detail])
            var message = ex.Message ?? "(no message)";
            var topFrame = ExtractFirstFrame(ex);

            // Build structured details so AI clients don't have to parse text
            var details = new Dictionary<string, object>
            {
                ["exceptionType"] = ex.GetType().FullName ?? ex.GetType().Name,
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
                    ["type"] = ex.InnerException.GetType().FullName ?? ex.InnerException.GetType().Name,
                    ["message"] = ex.InnerException.Message ?? "(no message)"
                };
            }
            if (!string.IsNullOrWhiteSpace(topFrame))
                details["stackTrace"] = topFrame;

            var textLines = new List<string>
            {
                $"{ErrorPrefix} {kind}: {message}"
            };
            if (hint != null)
                textLines.Add($"[Hint] {hint}");
            textLines.Add($"[Detail] {JsonSerializer.Serialize(details)}");
            var text = string.Join("\n", textLines);

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
        /// Same as <see cref="ThrowException"/> but rewrites the text output to be
        /// shorter and AI-friendly. Hides StackTrace from text (still available in
        /// structured.details.stackTrace), and applies substring-based rewrites for
        /// the most common Dataverse fault messages so AI callers see a clean,
        /// categorized line. Falls back to the original message (with StackTrace
        /// stripped) when no pattern matches.
        /// </summary>
        /// <remarks>
        /// Hardcoded lowercase substrings — case-insensitive via ToLowerInvariant
        /// before matching. Original Dataverse messages are never modified; only
        /// the text output is rewritten.
        /// </remarks>
        internal static CallToolResult ThrowExceptionFriendly(Exception ex)
        {
            var raw = ThrowException(ex);
            var originalText = (raw.Content[0] as TextContentBlock)?.Text ?? "";

            // 1. Strip "StackTrace: ..." line from text (always)
            var cleaned = originalText;
            var stIdx = cleaned.IndexOf("\nStackTrace:", StringComparison.Ordinal);
            if (stIdx > 0) cleaned = cleaned.Substring(0, stIdx);

            // 2. Lowercase copy for case-insensitive contains checks only
            string lower = cleaned.ToLowerInvariant();

            // 3. Apply substring-based rewrites for known Dataverse patterns
            string rewritten;
            if (lower.Contains("entity doesn't contain attribute with name"))
            {
                // Example original:
                //   "'Account' entity doesn't contain attribute with Name = 'nonexistent_field' and NameMapping = 'Logical'..."
                rewritten = $"{ErrorPrefix} [AttributeNotFound] Attribute not found on entity. "
                         + "Check attribute logical name (case-sensitive). "
                         + "Use get_tables(entity_name=...) to list valid fields.";
            }
            else if (lower.Contains("with a name =") && lower.Contains("with namemapping = 'logical' was not found"))
            {
                rewritten = $"{ErrorPrefix} [EntityNotFound] Entity not found in Dataverse metadata. "
                         + "Use get_tables to discover the correct logical name.";
            }
            else if (lower.Contains("unknown condition operator:"))
            {
                rewritten = $"{ErrorPrefix} [InvalidOperator] Unknown FetchXML condition operator. "
                         + "See https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/condition-operators";
            }
            else if (lower.Contains("entityname") && !lower.Contains("doesn't contain attribute"))
            {
                // Catches the bare "entityName" fault from empty <fetch></fetch>
                rewritten = $"{ErrorPrefix} [MissingEntity] FetchXML is missing the required <entity name=\"...\"> element. "
                         + "Read schema://fetchxml for FetchXML query structure.";
            }
            else if (lower.Contains("could not find a relationship with name"))
            {
                rewritten = $"{ErrorPrefix} [RelationshipNotFound] Relationship not found in Dataverse. "
                         + "Check the relationship SchemaName. "
                         + "Use get_tables(entity_name=..., detail_level='full') to inspect relationships.";
            }
            else if (lower.Contains("cannot create another parental relation"))
            {
                rewritten = $"{ErrorPrefix} [ParentalConflict] The referencing entity already has a parental relationship. "
                         + "Use cascade_preset='Referential' or 'ReferentialRestrictDelete' instead of 'Parental'.";
            }
            else if (lower.Contains("custom label") && (lower.Contains("must have") || lower.Contains("should use")))
            {
                rewritten = $"{ErrorPrefix} [MissingCustomLabel] menu_behavior='UseLabel' requires custom display labels. "
                         + "Provide custom labels for the relationship menu or use a different menu_behavior.";
            }
            else if (lower.Contains("canchangehierarchicalrelationship"))
            {
                rewritten = $"{ErrorPrefix} [ManagedProperty] Hierarchical relationship managed property is locked. "
                         + "The entity already has a hierarchical relationship or the managed property prevents the change.";
            }
            else if (lower.Contains("is invalid or missing") && lower.Contains("must start with a valid customization prefix"))
            {
                rewritten = $"{ErrorPrefix} [InvalidPrefix] Schema name is missing or does not start with a valid publisher customization prefix. "
                         + "Ensure the component name starts with the solution publisher prefix.";
            }
            else if (lower.Contains("does not exist") && lower.Contains("dataversefault:"))
            {
                rewritten = $"{ErrorPrefix} [RecordNotFound] The specified record was not found in Dataverse. "
                         + "Verify the record_id via search_records or parse_record_url.";
            }
            else if (lower.Contains("0x80072522"))
            {
                rewritten = $"{ErrorPrefix} [MimeTypeBlocked] Upload blocked: the file's MIME type is in the organization's blocked MIME type list. "
                         + "Check System Settings → blocked MIME types (organization.blockedmimetypes) and remove the entry, or upload a different file type.";
            }
            else if (lower.Contains("0x80072521"))
            {
                rewritten = $"{ErrorPrefix} [MimeTypeNotAllowed] Upload blocked: the file's MIME type is not in the organization's allowed MIME type list. "
                         + "Check organization.allowedmimetypes and add the type, or upload a different file type.";
            }
            else if (lower.Contains("0x80072553"))
            {
                rewritten = $"{ErrorPrefix} [ImageProcessFailure] Update image properties failed. "
                         + "Image columns accept only gif/jpeg/tiff/bmp/png. Verify the file size against the column MaxSizeInKB and CanStoreFullImage settings.";
            }
            else if (ex is HttpRequestException || ex is TaskCanceledException || ex is UriFormatException)
            {
                rewritten = $"{ErrorPrefix} [UrlDownloadFailed] Failed to download the file from the URL. "
                         + "Check the URL is reachable and returns a valid file; verify network/DNS and that the host is not timing out.";
            }
            else
            {
                // Default: keep original message text, just without StackTrace
                rewritten = cleaned;
            }

            raw.Content = [new TextContentBlock { Text = rewritten }];
            return raw;
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
