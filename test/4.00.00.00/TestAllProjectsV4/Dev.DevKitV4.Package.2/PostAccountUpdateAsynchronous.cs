using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Collections.Generic;
using System.Runtime.Remoting.Services;

namespace Dev.DevKitV4.Package._2
{
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "name", "Dev.DevKitV4.Package._2.PostAccountUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*", SecureConfiguration = "SecureConfiguration", UnSecureConfiguration = "UnSecureConfiguration")]
    public class PostAccountUpdateAsynchronous : IPlugin
    {
        /*
        InputParameters:
            Target                             Microsoft.Xrm.Sdk.Entity - require
            SuppressDuplicateDetection         System.Boolean
            CalculateMatchCodeSynchronously    System.Boolean
            SolutionUniqueName                 System.String
            MaintainLegacyAppServerBehavior    System.Boolean
            ConcurrencyBehavior                Microsoft.Xrm.Sdk.ConcurrencyBehavior
            ReturnRowVersion                   System.Boolean
        OutputParameters:
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostAccountUpdateAsynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            try
            {
                // 1. Get the Dataverse IManagedIdentityService
                var identityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));

                // 2. Define the scope for the target Azure resource (Key Vault)
                // This is the standard Azure Key Vault scope.
                var keyVaultScopes = new List<string> { "https://vault.azure.net/.default" };

                // 3. Use the custom DataverseTokenCredential wrapper!
                // This credential object uses the Dataverse service to acquire the token
                // and presents it to the Azure SDK SecretClient in the required format.
                var credential = new DataverseTokenCredential(identityService, keyVaultScopes);

                // --- Azure SDK Key Vault Client Setup ---

                var vaultUri = new Uri("https://kv-dataverse-devkitv4-2.vault.azure.net/");
                const string secretName = "DEVKITV4-2";

                // Initialize the SecretClient using the URI and the custom DataverseTokenCredential.
                var client = new SecretClient(vaultUri, credential);

                tracing.Trace($"Attempting to retrieve secret '{secretName}' from {vaultUri.Host} using Dataverse Managed Identity...");

                // 4. Retrieve the secret using the Azure SDK client
                // We use .Result to block synchronously, which is necessary in a typical Dataverse IPlugin.Execute method.
                KeyVaultSecret secret = client.GetSecretAsync(secretName).Result;

                // 5. Success!
                tracing.Trace($"✓ Successfully retrieved secret from Key Vault");
                tracing.Trace($"  Secret Name: {secret.Name}");
                tracing.Trace($"  Secret Value starts with: {secret.Value.Substring(0, Math.Min(secret.Value.Length, 10))}...");

            }
            catch (Exception e)
            {
                // Log the full exception details
                tracing.Trace($"ERROR: Key Vault Access Failed: {e.ToString()}");

                // Throw the clean exception required for a plugin
                throw new InvalidPluginExecutionException(
                    "Plugin failed to retrieve Key Vault secret using Azure SDK via Managed Identity. Check trace log for details.", e);
            }
        }
    }
}