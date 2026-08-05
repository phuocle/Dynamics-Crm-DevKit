#nullable enable
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Single fail-closed gateway for Dataverse Web API writes.
    /// </summary>
    internal static class DataverseWebApiMutationExecutor
    {
        private static readonly HttpClient AbsoluteClient = new();

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
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            if (!Uri.TryCreate(trimmedUrl, UriKind.Absolute, out var absoluteUri))
                return serviceClient.ExecuteWebRequest(method, trimmedUrl, body, headers, contentType);

            using var request = new HttpRequestMessage(method, absoluteUri);
            if (body != null)
                request.Content = new StringContent(body, Encoding.UTF8, contentType);

            if (headers != null)
            {
                foreach (var header in headers)
                {
                    if (!request.Headers.TryAddWithoutValidation(header.Key, header.Value))
                        request.Content?.Headers.TryAddWithoutValidation(header.Key, header.Value);
                }
            }

            var accessToken = serviceClient.CurrentAccessToken;
            if (!string.IsNullOrWhiteSpace(accessToken))
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            return AbsoluteClient.SendAsync(request).GetAwaiter().GetResult();
        }
    }
}
