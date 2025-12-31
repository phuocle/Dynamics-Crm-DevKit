using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Collections.Generic;
using System.Runtime.Remoting.Services;

namespace Dev.DevKitV4.Package._2
{
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "name", "Dev.DevKitV4.Package._2.PostAccountUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*", SecureConfiguration = "SecureConfiguration2", UnSecureConfiguration = "UnSecureConfiguration")]
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
                tracing.DebugMessage($"NEW API Endpoint: {secretValue}");
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
            tracing.DebugMessage(targetEntity.GetAttributeValue<string>("name"));
        }
    }
}