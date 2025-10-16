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
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "Update", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (!string.Equals(context.PrimaryEntityName, "account", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Asynchronous)) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            tracing.DebugMessage(targetEntity.GetAttributeValue<string>("name"));

            try
            {
                // 1. Get Managed Identity Token
                var identityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));
                var scopes = new List<string> { "https://vault.azure.net/.default" };
                var token = identityService.AcquireToken(scopes);
                // 2. Get Secret from Key Vault
                var secretValue = KeyVaultHelper.GetSecret(
                    token,
                    "https://kv-dataverse-devkitv4-2.vault.azure.net/",
                    "DEVKITV4-2",
                    tracing
                );
                // 3. Use the secret!
                tracing.DebugMessage($"NEW API Endpoint: {secretValue}");
            }
            catch (Exception ex)
            {
                tracing.DebugMessage(ex.ToString());
            }
            tracing.DebugMessage("CAN RUN PLUGIN WITHOUT ERROR");
            tracing.DebugMessage("THIS IS THE SECOND LINE");
            tracing.DebugMessage("THIS IS THE NEXT LINE");
            try
            {
                var credential = new DefaultAzureCredential();
                var client = new SecretClient(new Uri("https://kv-dataverse-devkitv4-2.vault.azure.net/"), credential);
                KeyVaultSecret secret = client.GetSecret("DEVKITV4-2");
                tracing.Trace($"✓ Successfully retrieved secret from Key Vault");
                tracing.Trace($"  Secret Name: {secret.Name}");
                tracing.Trace($"  Secret Value: {secret.Value}");
                tracing.Trace($"  Content Type: {secret.Properties.ContentType ?? "N/A"}");
                tracing.Trace($"  Updated On: {secret.Properties.UpdatedOn}");
            }
            catch(Exception e)
            {
                throw new InvalidPluginExecutionException($"{e.Message}");
            }
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
            context.PostEntityImages.TryGetValue("PostImage", out Entity postEntity);
            //YOUR PLUGIN-CODE GO HERE
            tracing.DebugMessage(targetEntity.GetAttributeValue<string>("name"));
        }
    }
}