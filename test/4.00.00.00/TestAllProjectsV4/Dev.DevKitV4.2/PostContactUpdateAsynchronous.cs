#define IS_SUPPORT_MANAGED_IDENTITY // Uncomment to enable managed identity support
#if !IS_SUPPORT_MANAGED_IDENTITY
#undef IS_SUPPORT_MANAGED_IDENTITY
#endif

using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Collections.Generic;

namespace Dev.DevKitV4.Server._2
{
    [CrmPluginRegistration("Update", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "firstname,lastname,fullname,middlename", "Dev.DevKitV4.Server._2.PostContactUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*", SecureConfiguration = "SecureConfiguration", UnSecureConfiguration = "UnSecureConfiguration")]
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
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            tracing.DebugMessage($"FirstName = {targetEntity.GetAttributeValue<string>("firstname")}");
            try
            {
                var identityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));
                var scopes = new List<string> { "https://vault.azure.net/.default" };
                var token = identityService.AcquireToken(scopes);
                var secretValue = KeyVaultHelper.GetSecret(
                    token,
                    "https://kv-dataverse-devkitv4-3.vault.azure.net/",
                    "DEVKITV4-3",
                    tracing
                );
                tracing.DebugMessage($"API Endpoint: {secretValue}");
            }
            catch (Exception ex)
            {
                tracing.DebugMessage(ex.ToString());
            }
            tracing.DebugMessage("CAN RUN PLUGIN WITHOUT ERROR");
            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
            tracing.DebugMessage("CAN RUN PLUGIN WITHOUT ERROR2");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
            context.PostEntityImages.TryGetValue("PostImage", out Entity postEntity);
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}