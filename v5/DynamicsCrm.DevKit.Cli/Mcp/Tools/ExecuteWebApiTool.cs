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

        [McpServerTool(Name = "execute_webapi", Destructive = false, ReadOnly = false,
            UseStructuredContent = true, OutputSchemaType = typeof(WebApiResult)),
        Description(
            "Execute any Dataverse Web API request. Use this as a fallback when specialized " +
            "tools (execute_fetchxml, get_entity_metadata, create_record, update_record) " +
            "don't cover your use case.\n\n" +

            "WHEN TO USE:\n" +
            "- Query metadata endpoints: RelationshipDefinitions, EntityDefinitions subpaths\n" +
            "- PUT/PATCH metadata (relationship, entity, attribute metadata)\n" +
            "- Call custom Actions or Functions\n" +
            "- Read $metadata CSDL schema\n" +
            "- Any Dataverse Web API operation not covered by other tools\n\n" +

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
                "Use get_entity_metadata to discover entity/attribute names if unsure."
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
