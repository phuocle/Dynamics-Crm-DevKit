#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.ServiceModel;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using WebApiHttpException = Microsoft.PowerPlatform.Dataverse.Client.Exceptions.HttpOperationException;

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
        /// The summary is duplicated into the structured payload as a <c>summary</c>
        /// property — byte-identical to the Content text line (prefix included) —
        /// because some clients (Claude Code CLI) surface only the structured side
        /// on success. Same duplication philosophy as <see cref="Error"/>.
        /// </summary>
        internal static CallToolResult Success(string summary, object? structured)
        {
            var text = $"{SuccessPrefix} {StripPrefix(summary, SuccessPrefix)}";
            var payload = JsonSerializer.SerializeToNode(structured) as JsonObject ?? new JsonObject();
            payload["summary"] = text;
            return new()
            {
                Content = [new TextContentBlock { Text = text }],
                StructuredContent = JsonSerializer.SerializeToElement(payload)
            };
        }

        /// <summary>
        /// Partial-failure result: some records succeeded, some failed.
        /// Text prefix is <c>[Partial]</c>; <c>IsError=true</c> so AI clients
        /// can detect that not everything went well. The text follows the same
        /// convention as <see cref="Error"/>: summary line + <c>[Detail]</c> line
        /// carrying the full structured payload (per-item statuses, errors), so
        /// text-only clients lose no information. The structured payload is the
        /// tool's own result DTO (not <see cref="McpErrorResult"/>).
        /// </summary>
        internal static CallToolResult Partial(string summary, object structured)
        {
            var text = $"{PartialPrefix} {StripPrefix(summary, PartialPrefix)}\n[Detail] {JsonSerializer.Serialize(structured)}";
            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text }],
                StructuredContent = JsonSerializer.SerializeToElement(structured),
                IsError = true
            };
        }

        /// <summary>
        /// All-failed result: every record in the batch failed.
        /// Text prefix is <c>[Failed]</c>; <c>IsError=true</c>. Text follows the
        /// same convention as <see cref="Error"/>: summary line + <c>[Detail]</c>
        /// line carrying the full structured payload (per-item errors). The
        /// structured payload is the tool's own result DTO so the caller can
        /// inspect per-item errors.
        /// </summary>
        internal static CallToolResult Failed(string summary, object structured)
        {
            var text = $"{FailedPrefix} {StripPrefix(summary, FailedPrefix)}\n[Detail] {JsonSerializer.Serialize(structured)}";
            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = text }],
                StructuredContent = JsonSerializer.SerializeToElement(structured),
                IsError = true
            };
        }

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
        /// The summary is duplicated into the structured payload as a <c>summary</c>
        /// property — byte-identical to the Content text line (prefix included) —
        /// same convention as <see cref="Success"/>: clients that surface only the
        /// structured side would otherwise lose the <c>[DryRun]</c> signal entirely.
        /// </summary>
        internal static CallToolResult DryRun(string summary, object structured)
        {
            var text = $"{DryRunPrefix} {StripPrefix(summary, DryRunPrefix)}";
            var payload = JsonSerializer.SerializeToNode(structured) as JsonObject ?? new JsonObject();
            payload["summary"] = text;
            return new()
            {
                Content = [new TextContentBlock { Text = text }],
                StructuredContent = JsonSerializer.SerializeToElement(payload)
            };
        }

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
            if (ex is WebApiHttpException webApiEx && webApiEx.Response != null)
            {
                details["statusCode"] = (int)webApiEx.Response.StatusCode;
                details["reasonPhrase"] = webApiEx.Response.ReasonPhrase ?? "";
                var responseContent = webApiEx.Response.Content;
                if (!string.IsNullOrWhiteSpace(responseContent))
                    details["responseContent"] = responseContent.Length > 1000
                        ? responseContent.Substring(0, 1000) + "..."
                        : responseContent;
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
            if (ex.InnerException != null)
            {
                var innerMessages = new List<string>();
                for (var current = ex.InnerException; current != null; current = current.InnerException)
                    innerMessages.Add($"{current.GetType().Name}: {current.Message ?? "(no message)"}");
                textLines.Add($"InnerException: {string.Join(" → ", innerMessages)}");
            }
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

            // Fold the raw Dataverse fault (errorCode + message) into a hint suffix so
            // friendly rewrites need no [Detail] line — [Error] + [Hint] is enough.
            var detailSuffix = "";
            if (raw.StructuredContent is { ValueKind: JsonValueKind.Object } structuredContent &&
                structuredContent.TryGetProperty("details", out var detailsElement) &&
                detailsElement.ValueKind == JsonValueKind.Object)
            {
                var rawMessage = detailsElement.TryGetProperty("message", out var m) ? m.GetString() : null;
                var rawErrorCode = detailsElement.TryGetProperty("errorCode", out var c) ? c.GetString() : null;
                if (!string.IsNullOrWhiteSpace(rawMessage))
                    detailSuffix = $" Dataverse {rawErrorCode}: {rawMessage}";
            }

            // 3. Apply substring-based rewrites for known Dataverse patterns
            string rewritten;
            if (lower.Contains("entity doesn't contain attribute with name"))
            {
                // Example original:
                //   "'Account' entity doesn't contain attribute with Name = 'nonexistent_field' and NameMapping = 'Logical'..."
                return Error("Attribute not found on entity.",
                    "Check attribute logical name (case-sensitive). Use get_tables(entity_name=...) to list valid fields." + detailSuffix);
            }
            else if (lower.Contains("with a name =") && lower.Contains("with namemapping = 'logical' was not found"))
            {
                return Error("Entity not found in Dataverse metadata.",
                    "Use get_tables to discover the correct logical name." + detailSuffix);
            }
            else if (lower.Contains("unknown condition operator:"))
            {
                return Error("Unknown FetchXML condition operator.",
                    "See https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/reference/operators." + detailSuffix);
            }
            else if (lower.Contains("entityname") && !lower.Contains("doesn't contain attribute"))
            {
                // Catches the bare "entityName" fault from empty <fetch></fetch>
                return Error("FetchXML is missing the required <entity name=\"...\"> element.",
                    "Read schema://fetchxml for FetchXML query structure." + detailSuffix);
            }
            else if (lower.Contains("could not find a relationship with name"))
            {
                return Error("Relationship not found in Dataverse. Check the relationship SchemaName.",
                    "Use get_tables(entity_name=..., detail_level='full') to inspect relationships." + detailSuffix);
            }
            else if (lower.Contains("cannot create another parental relation"))
            {
                return Error("The referencing entity already has a parental relationship.",
                    "Use cascade_preset='Referential' or 'ReferentialRestrictDelete' instead of 'Parental'." + detailSuffix);
            }
            else if (lower.Contains("custom label") && (lower.Contains("must have") || lower.Contains("should use")))
            {
                return Error("menu_behavior='UseLabel' requires custom display labels.",
                    "Provide custom labels for the relationship menu or use a different menu_behavior." + detailSuffix);
            }
            else if (lower.Contains("canchangehierarchicalrelationship"))
            {
                return Error("Hierarchical relationship managed property is locked.",
                    "The entity may already have a hierarchical relationship; use get_tables(entity_name=..., detail_level='full') to check, or create a non-hierarchical relationship." + detailSuffix);
            }
            else if (lower.Contains("navigation property name cannot be the same on both sides"))
            {
                return Error("A self-referential relationship cannot use the same navigation property name on both sides.",
                    "Dataverse requires distinct navigation property names per side for self-referential relationships; the tool does not expose them — create this relationship in the maker portal instead." + detailSuffix);
            }
            else if (lower.Contains("is invalid or missing") && lower.Contains("must start with a valid customization prefix"))
            {
                return Error("Schema name is missing or does not start with a valid publisher customization prefix.",
                    "Ensure the component name starts with the solution publisher prefix." + detailSuffix);
            }
            else if (lower.Contains("fields_json must be a non-empty json object"))
            {
                // User-input validation surfacing as ArgumentException from EntityParserHelper —
                // rewrite so it reads as a normal validation error, not a tool bug.
                rewritten = $"{ErrorPrefix} fields_json must be a non-empty JSON object.\n"
                         + "[Hint] Provide at least one field, e.g. {\"name\": \"value\"}. Use get_tables(entity_name=...) to list valid field names.";
            }
            else if (lower.Contains("does not exist") && lower.Contains("dataversefault:"))
            {
                // Rewrite to the 3-part convention with a friendly message; the raw server
                // fault (errorCode, innerFault, stackTrace) stays in structured.details.
                var faultMessage = cleaned;
                var nlIdx = faultMessage.IndexOf('\n');
                if (nlIdx > 0) faultMessage = faultMessage.Substring(0, nlIdx);
                var kindIdx = faultMessage.ToLowerInvariant().IndexOf("dataversefault:", StringComparison.Ordinal);
                if (kindIdx >= 0) faultMessage = faultMessage.Substring(kindIdx + "DataverseFault:".Length).Trim();
                var detailIdx = cleaned.IndexOf("\n[Detail] ", StringComparison.Ordinal);
                var detail = detailIdx >= 0 ? cleaned.Substring(detailIdx + 1) : "";

                var recordSb = new StringBuilder();
                var recordMatch = System.Text.RegularExpressions.Regex.Match(
                    faultMessage,
                    @"Entity '(?<entity>[^']+)' With Id = (?<id>[0-9a-fA-F-]{36}) Does Not Exist",
                    System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                if (recordMatch.Success)
                {
                    var entityName2 = recordMatch.Groups["entity"].Value;
                    var recordId2 = recordMatch.Groups["id"].Value;
                    recordSb.Append($"{ErrorPrefix} {entityName2} record with id {recordId2} does not exist. It may have been deleted.");
                    recordSb.Append("\n[Hint] Verify with manage_record(action='read'), or find the correct id via search_records / parse_record_url.");
                    recordSb.Append($"\n[Detail] {{\"entity\":{JsonSerializer.Serialize(entityName2)},\"id\":\"{recordId2}\",\"errorCode\":\"0x80040217\",\"message\":{JsonSerializer.Serialize(faultMessage)}}}");
                }
                else
                {
                    recordSb.Append($"{ErrorPrefix} [RecordNotFound] {faultMessage}");
                    recordSb.Append("\n[Hint] The record may have been deleted, or the record_id/entity_name pair is wrong. Verify with manage_record(action='read'), or find the correct id via search_records / parse_record_url.");
                    if (detail.Length > 0)
                        recordSb.Append('\n').Append(detail);
                }
                rewritten = recordSb.ToString();
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
            else if (ex is WebApiHttpException hex && hex.Response != null)
            {
                var status = (int)hex.Response.StatusCode;
                var reason = hex.Response.ReasonPhrase ?? hex.Response.StatusCode.ToString();
                var content = (hex.Response.Content ?? "").Trim();
                var cappedContent = content.Length > 1000 ? content.Substring(0, 1000) + "..." : content;
                var odataMessage = ExtractODataErrorMessage(content);

                var sb = new StringBuilder();
                sb.Append($"{ErrorPrefix} Dataverse Web API returned {status} {reason}");
                if (odataMessage != null)
                    sb.Append($": {odataMessage}");
                sb.AppendLine();
                sb.Append("[Hint] The request reached Dataverse but was rejected. Check the url path, HTTP method, and request body against the Web API endpoint.");
                sb.AppendLine();
                sb.Append($"[Detail] {{\"statusCode\":{status},\"reasonPhrase\":{JsonSerializer.Serialize(reason)}");
                if (!string.IsNullOrEmpty(cappedContent))
                    sb.Append($",\"responseContent\":{JsonSerializer.Serialize(cappedContent)}");
                sb.Append('}');
                rewritten = sb.ToString();
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

                case WebApiHttpException:
                    return ("WebApiError",
                        "The request reached Dataverse but was rejected. Check the url path, HTTP method, and request body against the Web API endpoint; the OData error details are in [Detail].");

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

        /// <summary>
        /// Extract <c>error.message</c> from a Dataverse OData error JSON body,
        /// e.g. {"error":{"code":"0x...","message":"..."}}. Returns null when the
        /// body is missing or not an OData error object.
        /// </summary>
        private static string? ExtractODataErrorMessage(string content)
        {
            if (string.IsNullOrWhiteSpace(content)) return null;
            try
            {
                using var doc = JsonDocument.Parse(content);
                if (doc.RootElement.ValueKind == JsonValueKind.Object &&
                    doc.RootElement.TryGetProperty("error", out var err) &&
                    err.ValueKind == JsonValueKind.Object &&
                    err.TryGetProperty("message", out var msg) &&
                    msg.ValueKind == JsonValueKind.String)
                {
                    var m = msg.GetString();
                    if (!string.IsNullOrWhiteSpace(m))
                        return m.Length > 300 ? m.Substring(0, 300) + "..." : m;
                }
            }
            catch (JsonException)
            {
                // Body is not JSON — fall back to the raw content in [Detail]
            }
            return null;
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
