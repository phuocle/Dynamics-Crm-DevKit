using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Services
{
    /// <summary>
    /// Abstraction over <see cref="ServiceClient"/> Web API request members
    /// (<see cref="ServiceClient.ExecuteWebRequest"/> / <see cref="ServiceClient.ExecuteWebRequestAsync"/>),
    /// which are not part of <c>IOrganizationService</c>/<c>IOrganizationServiceAsync2</c>.
    /// Lets Web API based MCP tools be unit-tested without a live ServiceClient.
    /// </summary>
    public interface IWebApiExecutor
    {
        /// <summary>Maps to <see cref="ServiceClient.ExecuteWebRequest"/>.</summary>
        HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body, Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default);
        /// <summary>Maps to <see cref="ServiceClient.ExecuteWebRequestAsync"/>.</summary>
        Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body, Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default);
        /// <summary>Maps to <see cref="ServiceClient.CurrentAccessToken"/>. Used by SSRF guard / URL building.</summary>
        string CurrentAccessToken { get; }
    }

    /// <summary>
    /// Production adapter: forwards every member to the wrapped <see cref="ServiceClient"/>.
    /// </summary>
    public sealed class ServiceClientWebApiExecutor : IWebApiExecutor
    {
        private readonly ServiceClient _serviceClient;

        public ServiceClientWebApiExecutor(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient ?? throw new ArgumentNullException(nameof(serviceClient));
        }

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body, Dictionary<string, List<string>> customHeaders, string contentType, CancellationToken cancellationToken = default)
            => _serviceClient.ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken);

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body, Dictionary<string, List<string>> customHeaders, string contentType, CancellationToken cancellationToken = default)
            => _serviceClient.ExecuteWebRequestAsync(method, queryString, body, customHeaders, contentType, cancellationToken);

        public string CurrentAccessToken => _serviceClient.CurrentAccessToken;
    }
}
