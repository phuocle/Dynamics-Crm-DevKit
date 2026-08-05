#nullable enable
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Net.Http;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Single fail-closed gateway for Dataverse Web API writes.
    /// </summary>
    internal static class DataverseWebApiMutationExecutor
    {
        internal static HttpResponseMessage Execute(
            McpExecutionContext context,
            ServiceClient serviceClient,
            HttpMethod method,
            string url,
            string? body,
            Dictionary<string, List<string>>? headers,
            string contentType = "application/json")
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (method == null) throw new ArgumentNullException(nameof(method));
            if (string.IsNullOrWhiteSpace(url)) throw new ArgumentException("URL is required.", nameof(url));

            if (method != HttpMethod.Post && method != HttpMethod.Put &&
                method != HttpMethod.Patch && method != HttpMethod.Delete)
                throw new ArgumentException($"HTTP method '{method.Method}' is not a mutation.", nameof(method));

            var trimmedUrl = url.Trim();
            context.AssertMutationAllowed($"Web API {method.Method} {trimmedUrl}");
            // The public MCP contract accepts a relative Dataverse Web API path.
            // Never turn an AI-controlled absolute URL into an HttpClient request:
            // doing so would require attaching the Dataverse bearer token and could
            // exfiltrate it to an arbitrary host. ServiceClient owns the trusted
            // organization base URL and handles relative requests safely.
            if (Uri.TryCreate(trimmedUrl, UriKind.Absolute, out _))
                throw new ArgumentException("Web API URL must be a relative Dataverse path.", nameof(url));

            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            return serviceClient.ExecuteWebRequest(method, trimmedUrl, body, headers, contentType);
        }
    }
}
