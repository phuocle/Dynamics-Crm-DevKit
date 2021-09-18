using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKit.PluginAccount
{
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "name,parentaccountid,accountnumber,statuscode",
    "Dev.DevKit.PluginAccount.PostAccountUpdateAsynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true,
    Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name",
    Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "name,accountnumber")]
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
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "Update".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //var target = context.InputParameterOrDefault<???>("???");
            //var preEntity = (Entity)context?.PreEntityImages?["???"];
            //var postEntity = (Entity)context?.PostEntityImages?["???"];
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}
