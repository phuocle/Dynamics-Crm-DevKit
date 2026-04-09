using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteWebApiTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ExecuteWebApiTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "execute_webapi", Title = "Execute a raw Web API request",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(WebApiResult)),
        Description(
            "Execute any Dataverse Web API request. Fallback when specialized tools don't cover your use case.\n\n" +

            "WHEN TO USE:\n" +
            "- Query/update metadata endpoints (RelationshipDefinitions, EntityDefinitions)\n" +
            "- Call custom Actions/Functions, read $metadata\n\n" +

            "BLOCKED OPERATIONS (hard-blocked, returns error):\n" +
            "- PATCH/PUT/DELETE systemforms → use manage_form\n" +
            "- PATCH/PUT/DELETE savedqueries/userqueries → use manage_view\n" +
            "- PATCH/PUT/DELETE sitemaps → use manage_sitemap\n" +
            "- PATCH/PUT/DELETE environmentvariable* → use manage_environment_variable\n" +
            "- POST PublishXml/PublishAllXml → use publish_customizations\n" +
            "GET is allowed. POST to create is allowed (except publish).\n" +
            "WHY: Malformed FormXML/LayoutXML/SiteMap breaks UI for all users with no undo.\n\n" +

            "URL: relative path only (SDK handles base URL). " +
            "PUT/PATCH/DELETE are destructive — confirm with user first.")]
        public CallToolResult execute_webapi(
            [Description("HTTP method: GET, POST, PUT, PATCH, or DELETE."
            )] string method,
            [Description("Relative URL path (SDK handles base URL). E.g., 'RelationshipDefinitions', '$metadata'."
            )] string url,
            [Description("JSON body for POST/PUT/PATCH. Not needed for GET/DELETE."
            )] string body = "",
            [Description("Extra headers as JSON. Standard headers handled by SDK."
            )] string headers = "",
            [Description("Include response headers in output. Default: false."
            )] bool include_headers = false,
            [Description(
                "Maximum response body lines to return. Default: 200. " +
                "Use smaller values (e.g. 50) for large responses like $metadata. " +
                "If response exceeds this, output is truncated."
            )] int max_response_lines = 200)
        {
            if (string.IsNullOrWhiteSpace(method))
                return ErrorResult("Error: method is required (GET, POST, PUT, PATCH, DELETE).");

            if (string.IsNullOrWhiteSpace(url))
                return ErrorResult("Error: url is required.");

            var httpMethod = ParseHttpMethod(method.Trim().ToUpperInvariant());
            if (httpMethod == null)
                return ErrorResult($"Error: Invalid HTTP method '{method}'. Use GET, POST, PUT, PATCH, or DELETE.");

            if (max_response_lines <= 0)
                max_response_lines = 200;

            var blockedReason = GetBlockedReason(httpMethod, url.Trim());
            if (blockedReason != null)
                return ErrorResult(blockedReason);

            if (_options.DryRun && httpMethod != HttpMethod.Get)
                return DryRunResult($"Would execute {httpMethod.Method} {url.Trim()}" +
                    (!string.IsNullOrWhiteSpace(body) ? $" with body ({body.Trim().Length} chars)" : "") + ".");

            try
            {
                var customHeaders = ParseHeaders(headers, out var headersError);
                if (headersError != null)
                    return ErrorResult(headersError);
                var requestBody = string.IsNullOrWhiteSpace(body) ? null : body.Trim();
                var trimmedUrl = url.Trim();
                HttpResponseMessage response;
                if (trimmedUrl.StartsWith("$metadata", StringComparison.OrdinalIgnoreCase))
                {
                    using var httpClient = new HttpClient();
                    var orgUri = _serviceClient.ConnectedOrgUriActual;
                    var apiUrl = $"{orgUri.Scheme}://{orgUri.Host}/api/data/v{_serviceClient.ConnectedOrgVersion.ToString(2)}/{trimmedUrl}";
                    var request = new HttpRequestMessage(httpMethod, apiUrl);
                    request.Headers.Add("Authorization", $"Bearer {_serviceClient.CurrentAccessToken}");
                    request.Headers.Add("Accept", "application/xml");
                    response = httpClient.SendAsync(request).GetAwaiter().GetResult();
                }
                else
                {
                    response = _serviceClient.ExecuteWebRequest(httpMethod, trimmedUrl, requestBody, customHeaders, "application/json");
                }
                var statusCode = (int)response.StatusCode;
                var reasonPhrase = response.ReasonPhrase ?? response.StatusCode.ToString();
                var responseBody = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                var sb = new StringBuilder(1024);
                sb.AppendLine($"[WebAPI] {httpMethod.Method} {url.Trim()}");
                sb.AppendLine($"Status: {statusCode} {reasonPhrase}");

                if (include_headers)
                {
                    sb.AppendLine();
                    sb.AppendLine("[Response Headers]");
                    foreach (var header in response.Headers)
                    {
                        sb.AppendLine($"{header.Key}: {string.Join(", ", header.Value)}");
                    }
                    if (response.Content.Headers.Any())
                    {
                        foreach (var header in response.Content.Headers)
                        {
                            sb.AppendLine($"{header.Key}: {string.Join(", ", header.Value)}");
                        }
                    }
                }

                string structuredBody = null;
                if (!string.IsNullOrWhiteSpace(responseBody))
                {
                    sb.AppendLine();
                    sb.AppendLine("[Response Body]");
                    var formattedBody = TryFormatJson(responseBody);
                    var lines = formattedBody.Split('\n');
                    if (lines.Length > max_response_lines)
                    {
                        structuredBody = string.Join("\n", lines.Take(max_response_lines));
                        sb.AppendLine(structuredBody);
                        sb.AppendLine($"(truncated, showing first {max_response_lines} lines of {lines.Length} total)");
                    }
                    else
                    {
                        structuredBody = formattedBody;
                        sb.Append(formattedBody);
                    }
                }

                var structured = new WebApiResult
                {
                    Method = httpMethod.Method,
                    Url = url.Trim(),
                    StatusCode = statusCode,
                    StatusText = reasonPhrase,
                    IsSuccess = response.IsSuccessStatusCode,
                    ResponseBody = structuredBody
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                var detail = new StringBuilder();
                detail.AppendLine("Error: Web API request failed");
                detail.AppendLine($"Method: {method}");
                detail.AppendLine($"Url: {url}");
                detail.AppendLine($"Message: {ex.Message}");
                ExtractResponseContent(ex, detail);
                var inner = ex.InnerException;
                while (inner != null)
                {
                    detail.AppendLine($"Detail: {inner.Message}");
                    ExtractResponseContent(inner, detail);
                    inner = inner.InnerException;
                }
                if (ex is HttpRequestException httpEx && httpEx.StatusCode.HasValue)
                    detail.AppendLine($"StatusCode: {(int)httpEx.StatusCode.Value} {httpEx.StatusCode.Value}");
                return ErrorResult(detail.ToString().TrimEnd());
            }
        }

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedEndpoints =
        [
            ("systemforms(", "manage_form",
                "FormXML defines the UI layout for ALL users. A malformed FormXML breaks the entire entity form with no undo."),
            ("savedqueries(", "manage_view",
                "SavedQuery defines view columns and query for ALL users. A FetchXML/LayoutXML mismatch hides all data or crashes the grid."),
            ("userqueries(", "manage_view",
                "UserQuery defines personal views. A malformed FetchXML/LayoutXML breaks the view with no undo."),
            ("sitemaps(", "manage_sitemap",
                "SiteMap defines app navigation for ALL users. A malformed SiteMap breaks navigation for the entire app."),
            ("environmentvariabledefinitions(", "manage_environment_variable",
                "Environment variable definitions have linked value records. The manage_environment_variable tool handles definition+value atomically with solution awareness."),
            ("environmentvariablevalues(", "manage_environment_variable",
                "Environment variable values are linked to definitions. The manage_environment_variable tool handles create/update/clear correctly with definition lookup.")
        ];

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedPostEndpoints =
        [
            ("publishxml", "publish_customizations",
                "PublishXml requires correctly formatted ParameterXml. The publish_customizations tool handles entity-specific vs all publishing with proper XML generation."),
            ("publishallxml", "publish_customizations",
                "PublishAllXml publishes ALL customizations. The publish_customizations tool provides a simpler interface with proper status reporting.")
        ];

        private static string GetBlockedReason(HttpMethod method, string url)
        {
            var urlLower = url.ToLowerInvariant();

            // Block POST on publish endpoints — redirect to publish_customizations tool
            if (method == HttpMethod.Post)
            {
                foreach (var (pattern, tool, reason) in BlockedPostEndpoints)
                {
                    if (urlLower.Contains(pattern))
                    {
                        return $"BLOCKED: Direct POST to {pattern} is not allowed via execute_webapi.\n\n" +
                               $"REASON: {reason}\n\n" +
                               $"USE INSTEAD: {tool} tool — pass entity names (e.g. entities='account,contact') or leave empty for publish all.";
                    }
                }
            }

            // GET and POST are allowed on all other endpoints
            if (method == HttpMethod.Get || method == HttpMethod.Post)
                return null;

            // Block PATCH/PUT/DELETE on system-critical endpoints
            foreach (var (pattern, tool, reason) in BlockedEndpoints)
            {
                if (urlLower.Contains(pattern))
                {
                    return $"BLOCKED: Direct {method.Method} on {pattern.TrimEnd('(')} is not allowed via execute_webapi.\n\n" +
                           $"REASON: {reason}\n\n" +
                           $"USE INSTEAD: {tool} — it auto-handles: backup → validate XSD → update → publish → rollback path.\n\n" +
                           $"If {tool} is not yet available, you MUST manually:\n" +
                           $"1. GET the current XML first (backup)\n" +
                           $"2. Validate your changes against the schema resource\n" +
                           $"3. Save backup to a local file\n" +
                           $"4. Only then consider using execute_webapi";
                }
            }

            return null;
        }

        private static HttpMethod ParseHttpMethod(string method)
        {
            return method switch
            {
                "GET" => HttpMethod.Get,
                "POST" => HttpMethod.Post,
                "PUT" => HttpMethod.Put,
                "PATCH" => HttpMethod.Patch,
                "DELETE" => HttpMethod.Delete,
                _ => null
            };
        }

        private static Dictionary<string, List<string>> ParseHeaders(string headersJson, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(headersJson))
                return null;

            try
            {
                var parsed = JsonSerializer.Deserialize<Dictionary<string, string>>(headersJson);
                if (parsed == null || parsed.Count == 0)
                    return null;

                return parsed.ToDictionary(
                    kv => kv.Key,
                    kv => new List<string> { kv.Value }
                );
            }
            catch (JsonException ex)
            {
                error = $"Error: Invalid JSON in headers parameter.\nInput: {headersJson}\nDetail: {ex.Message}";
                return null;
            }
        }

        private static string TryFormatJson(string json)
        {
            try
            {
                using var doc = JsonDocument.Parse(json);
                return JsonSerializer.Serialize(doc, new JsonSerializerOptions { WriteIndented = true });
            }
            catch
            {
                return json;
            }
        }

        private static void ExtractResponseContent(Exception ex, StringBuilder detail)
        {
            var responseProp = ex.GetType().GetProperty("Response");
            if (responseProp?.GetValue(ex) is object response)
            {
                var contentProp = response.GetType().GetProperty("Content");
                if (contentProp?.GetValue(response) is string content && !string.IsNullOrWhiteSpace(content))
                    detail.AppendLine($"Response: {content}");
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };
    }
}
