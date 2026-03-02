using Azure.Core;
using Azure.Security.KeyVault.Secrets;
using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Dev.DevKit.Package2.Plugins.Contact
{
    [CrmPluginRegistration("Update", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "lastname", "Dev.DevKit.Package2.Plugins.Contact.PostContactUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class PostContactUpdateAsynchronous : IPlugin
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
        //public PostContactUpdateAsynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "Update", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (!string.Equals(context.PrimaryEntityName, "contact", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Asynchronous)) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            var identityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));
            var scopes = new List<string> { "https://vault.azure.net/.default" };
            var accessToken = identityService.AcquireToken(scopes);

            //tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing, accessToken);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, string accessToken)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
            context.PostEntityImages.TryGetValue("PostImage", out Entity postEntity);
            //YOUR PLUGIN-CODE GO HERE

            // Use Azure.Identity and Azure.Security.KeyVault.Secrets NuGet packages
            var keyVaultUrl = "https://devdevkitpackage2.vault.azure.net/";
            var secretName = "DevDevKitPackage2";

            // Use custom credential to pass the accessToken we already got from Dataverse
            var credential = new DataverseTokenCredential(accessToken);
            var client = new SecretClient(new Uri(keyVaultUrl), credential);
            var secret = client.GetSecret(secretName);
            var secretValue = secret.Value.Value;

            tracing.Trace($"Azure Access Token NUGET2: {accessToken}");
            throw new InvalidPluginExecutionException($"secretValue = {secretValue}");
        }

        // Custom TokenCredential to wrap the Dataverse-acquired token
        private class DataverseTokenCredential : TokenCredential
        {
            private readonly string _accessToken;

            public DataverseTokenCredential(string accessToken)
            {
                _accessToken = accessToken;
            }

            public override Azure.Core.AccessToken GetToken(TokenRequestContext context, CancellationToken cancellationToken)
            {
                return new Azure.Core.AccessToken(_accessToken, DateTimeOffset.MaxValue);
            }

            public override ValueTask<Azure.Core.AccessToken> GetTokenAsync(TokenRequestContext context, CancellationToken cancellationToken)
            {
                return new ValueTask<Azure.Core.AccessToken>(new Azure.Core.AccessToken(_accessToken, DateTimeOffset.MaxValue));
            }
        }
    }
}

