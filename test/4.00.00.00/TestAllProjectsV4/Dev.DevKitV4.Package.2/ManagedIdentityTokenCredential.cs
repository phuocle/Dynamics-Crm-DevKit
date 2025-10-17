using Azure.Core;
using System;
using System.Threading;
using System.Threading.Tasks;

// Define this class outside of your main plugin class
public class ManagedIdentityTokenCredential : TokenCredential
{
    private readonly AccessToken _token;

    // CONSTRUCTOR CORRECTION: Accept the raw string token and expiration
    public ManagedIdentityTokenCredential(string token)
    {
        // Dataverse token is valid for 1 hour. We set the expiration time safely in the future (e.g., 50 minutes).
        // A more robust method would be to parse the token for the "exp" (expiration) claim.
        var expiresOn = DateTimeOffset.UtcNow.AddMinutes(50);

        _token = new AccessToken(token, expiresOn);
    }

    public override AccessToken GetToken(TokenRequestContext requestContext, CancellationToken cancellationToken)
    {
        // Returns the pre-acquired token.
        // NOTE: In a production scenario, you'd re-acquire the token if it's expired.
        // For a one-shot plugin, this is usually sufficient.
        return _token;
    }

    public override ValueTask<AccessToken> GetTokenAsync(TokenRequestContext requestContext, CancellationToken cancellationToken)
    {
        return new ValueTask<AccessToken>(GetToken(requestContext, cancellationToken));
    }
}