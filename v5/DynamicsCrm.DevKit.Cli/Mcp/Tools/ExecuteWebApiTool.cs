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

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteWebApiTool
    {
        private readonly ServiceClient _serviceClient;

        public ExecuteWebApiTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "execute_webapi", Title = "Execute any Dataverse Web API request",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(WebApiResult)),
        Description(
            "Execute any Dataverse Web API request. Use this as a fallback when specialized " +
            "tools (execute_fetchxml, get_metadata_entities, upsert_record) " +
            "don't cover your use case.\n\n" +

            "WHEN TO USE:\n" +
            "- Query metadata endpoints: RelationshipDefinitions, EntityDefinitions subpaths\n" +
            "- PUT/PATCH metadata (relationship, entity, attribute metadata)\n" +
            "- Call custom Actions or Functions\n" +
            "- Read $metadata CSDL schema\n" +
            "- Any Dataverse Web API operation not covered by other tools\n\n" +

            "BLOCKED OPERATIONS (execute_webapi will REJECT these with an error):\n" +
            "You MUST NOT use execute_webapi to write to these endpoints. " +
            "The tool will hard-block and return an error if you try.\n" +
            "- PATCH/PUT/DELETE systemforms(...) → Use upsert_form tool instead\n" +
            "- PATCH/PUT/DELETE savedqueries(...) → Use upsert_view tool instead\n" +
            "- PATCH/PUT/DELETE userqueries(...) → Use upsert_view tool instead\n" +
            "- PATCH/PUT/DELETE sitemaps(...) → Use upsert_sitemap tool instead\n" +
            "- PATCH/PUT/DELETE environmentvariabledefinitions(...) → Use upsert_variable tool instead\n" +
            "- PATCH/PUT/DELETE environmentvariablevalues(...) → Use upsert_variable tool instead\n" +
            "- POST PublishXml → Use publish_customizations tool instead\n" +
            "- POST PublishAllXml → Use publish_customizations tool instead\n" +
            "GET on these endpoints is allowed (reading is safe). " +
            "POST to create new records is allowed (except publish endpoints).\n" +
            "WHY BLOCKED: A malformed FormXML/LayoutXML/SiteMap breaks the UI for ALL users " +
            "with no undo. Dedicated tools auto-backup, validate XSD, and provide rollback.\n\n" +

            "URL PARAMETER:\n" +
            "- Pass relative URL only — SDK handles base URL automatically\n" +
            "- Examples: 'RelationshipDefinitions', 'EntityDefinitions(LogicalName=\\'account\\')', '$metadata'\n\n" +

            "EXAMPLES:\n" +
            "GET relationship metadata: method='GET', url='RelationshipDefinitions/Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata?$filter=ReferencedEntity eq \\'account\\'&$top=2'\n" +
            "GET entity display names: method='GET', url='EntityDefinitions(LogicalName=\\'account\\')?$select=LogicalName,DisplayCollectionName,DisplayName'\n" +
            "PUT update relationship: method='PUT', url='RelationshipDefinitions(guid)', body='{...}', headers='{\"MSCRM.MergeLabels\":\"true\"}'\n" +
            "POST custom action: method='POST', url='PublishXml', body='{\"ParameterXml\":\"<importexportxml>...\"}'\n" +
            "GET $metadata schema: method='GET', url='$metadata', max_response_lines=50\n\n" +

            "CAUTION: PUT/PATCH/DELETE operations are destructive and irreversible. " +
            "Always confirm with the user before executing write operations on metadata endpoints.")]
        public CallToolResult execute_webapi(
            [Description(
                "HTTP method: GET, POST, PUT, PATCH, or DELETE. " +
                "Use GET for reading data/metadata. " +
                "Use POST for custom actions or creating via Web API. " +
                "Use PUT/PATCH for updating metadata. " +
                "Use DELETE for removing records or metadata."
            )] string method,
            [Description(
                "Relative URL path — SDK handles the base URL automatically. " +
                "Examples: 'RelationshipDefinitions', " +
                "'EntityDefinitions(LogicalName=\\'account\\')?$select=LogicalName,DisplayName', " +
                "'$metadata', 'accounts(guid)', 'PublishXml'. " +
                "Use get_metadata_entities to discover entity/attribute names if unsure."
            )] string url,
            [Description(
                "Request body for POST/PUT/PATCH as a JSON string. " +
                "Must be valid JSON. Not needed for GET/DELETE. " +
                "Example: '{\"name\": \"New Account\", \"revenue\": 50000}'"
            )] string body = "",
            [Description(
                "Additional custom headers as a JSON string. " +
                "Standard headers (Authorization, OData-Version) are handled by SDK. " +
                "Only provide extra headers. " +
                "Example: '{\"MSCRM.MergeLabels\": \"true\", \"If-Match\": \"*\"}'"
            )] string headers = "",
            [Description(
                "true: include response headers in output. " +
                "Default false to save tokens. " +
                "Set true when you need OData-EntityId, Location, or other response headers."
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

            try
            {
                var customHeaders = ParseHeaders(headers);
                var requestBody = string.IsNullOrWhiteSpace(body) ? null : body.Trim();
                var response = _serviceClient.ExecuteWebRequest(httpMethod, url.Trim(), requestBody, customHeaders, "application/json");
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

                if (!string.IsNullOrWhiteSpace(responseBody))
                {
                    sb.AppendLine();
                    sb.AppendLine("[Response Body]");
                    var formattedBody = TryFormatJson(responseBody);
                    var lines = formattedBody.Split('\n');
                    if (lines.Length > max_response_lines)
                    {
                        sb.AppendLine(string.Join("\n", lines.Take(max_response_lines)));
                        sb.AppendLine($"(truncated, showing first {max_response_lines} lines of {lines.Length} total)");
                    }
                    else
                    {
                        sb.Append(formattedBody);
                    }
                }

                var structured = new WebApiResult
                {
                    Method = httpMethod.Method,
                    Url = url.Trim(),
                    StatusCode = statusCode,
                    StatusText = reasonPhrase,
                    IsSuccess = response.IsSuccessStatusCode
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Web API request failed\nMethod: {method}\nUrl: {url}\nMessage: {ex.Message}");
            }
        }

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedEndpoints =
        [
            ("systemforms(", "upsert_form",
                "FormXML defines the UI layout for ALL users. A malformed FormXML breaks the entire entity form with no undo."),
            ("savedqueries(", "upsert_view",
                "SavedQuery defines view columns and query for ALL users. A FetchXML/LayoutXML mismatch hides all data or crashes the grid."),
            ("userqueries(", "upsert_view",
                "UserQuery defines personal views. A malformed FetchXML/LayoutXML breaks the view with no undo."),
            ("sitemaps(", "upsert_sitemap",
                "SiteMap defines app navigation for ALL users. A malformed SiteMap breaks navigation for the entire app."),
            ("environmentvariabledefinitions(", "upsert_variable",
                "Environment variable definitions have linked value records. The upsert_variable tool handles definition+value atomically with solution awareness."),
            ("environmentvariablevalues(", "upsert_variable",
                "Environment variable values are linked to definitions. The upsert_variable tool handles create/update/clear correctly with definition lookup.")
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

        private static Dictionary<string, List<string>> ParseHeaders(string headersJson)
        {
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
            catch
            {
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
