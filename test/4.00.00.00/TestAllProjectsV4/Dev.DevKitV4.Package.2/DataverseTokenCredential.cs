using Azure.Core;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dev.DevKitV4.Package._2
{
    /// <summary>
    /// A custom TokenCredential implementation that wraps the Dataverse IManagedIdentityService.
    /// This allows the use of standard Azure SDK client libraries (e.g., SecretClient, BlobServiceClient)
    /// within Dataverse plugins using the platform's managed identity for authentication.
    /// </summary>
    public class DataverseTokenCredential : TokenCredential
    {
        private readonly IManagedIdentityService _identityService;
        private readonly IEnumerable<string> _scopes;

        /// <summary>
        /// Initializes a new instance of the <see cref="DataverseTokenCredential"/> class.
        /// </summary>
        /// <param name="identityService">The Dataverse IManagedIdentityService obtained from the service provider.</param>
        /// <param name="scopes">The scopes required for the target Azure resource (e.g., "https://vault.azure.net/.default").</param>
        public DataverseTokenCredential(IManagedIdentityService identityService, IEnumerable<string> scopes)
        {
            _identityService = identityService ?? throw new ArgumentNullException(nameof(identityService));
            _scopes = scopes ?? throw new ArgumentNullException(nameof(scopes));
        }

        /// <summary>
        /// Synchronously gets an AccessToken using the Dataverse Managed Identity Service.
        /// This method is called by Azure SDK clients to authenticate requests.
        /// </summary>
        public override AccessToken GetToken(TokenRequestContext requestContext, CancellationToken cancellationToken = default)
        {
            // AcquireToken is called synchronously.
            string tokenString = _identityService.AcquireToken(_scopes);

            // The exact expiration time is not exposed, so we must set a safe, short default
            // expiration (5 minutes) to ensure the token is refreshed frequently by the SDK.
            var fiveMinutesFromNow = DateTimeOffset.UtcNow.AddMinutes(5);

            return new AccessToken(tokenString, fiveMinutesFromNow);
        }

        /// <summary>
        /// Asynchronously gets an AccessToken. Implemented for completeness of the TokenCredential abstract class.
        /// </summary>
        public override ValueTask<AccessToken> GetTokenAsync(TokenRequestContext requestContext, CancellationToken cancellationToken = default)
        {
            // Since Dataverse plugins are often synchronous, we wrap the synchronous call.
            return new ValueTask<AccessToken>(GetToken(requestContext, cancellationToken));
        }
    }
}
