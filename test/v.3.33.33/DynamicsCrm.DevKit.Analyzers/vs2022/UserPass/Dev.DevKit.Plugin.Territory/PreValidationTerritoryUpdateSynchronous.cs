using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKit.PluginTerritory
{
    [CrmPluginRegistration("Update", "territory", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "*", "Dev.DevKit.PluginTerritory.PreValidationTerritoryUpdateSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class PreValidationTerritoryUpdateSynchronous : IPlugin
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
        //public PreValidationTerritoryUpdateSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PreValidation) throw new InvalidPluginExecutionException("Stage does not equals PreValidation");
            if (context.PrimaryEntityName.ToLower() != "territory") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals territory");
            if (context.MessageName.ToLower() != "Update".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            var preEntity = (Entity)context?.PreEntityImages?["PreImage"];
            //YOUR PLUGIN-CODE GO HERE
        }
    }
}