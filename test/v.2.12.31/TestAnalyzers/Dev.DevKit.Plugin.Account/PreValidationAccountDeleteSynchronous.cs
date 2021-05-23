using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.PluginAccount
{

    //DEVKIT1003

    [CrmPluginRegistration("Delete", "account", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "",
    "Dev.DevKit.PluginAccount.PreValidationAccountDeleteSynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox,
    Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name",
    Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = Dev.DevKit.Shared.ImageTypeEnum.PostImage, Image2Attributes = "name"
    )]
    public class PreValidationAccountDeleteSynchronous : IPlugin
    {
        /*
          InputParameters:
              Target                 Microsoft.Xrm.Sdk.EntityReference - require
              SolutionUniqueName     System.String
              ConcurrencyBehavior    Microsoft.Xrm.Sdk.ConcurrencyBehavior
           OutputParameters:
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PreValidationAccountDeleteSynchronous(string unsecureString, string secureString)
        //{
        //    if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
        //    if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PreValidation) throw new InvalidPluginExecutionException("Stage does not equals PreValidation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "Delete".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Delete");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugMessage("Begin Plugin: Dev.DevKit.PluginAccount.PreValidationAccountDeleteSynchronous");
            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            //tracing.DebugMessage("End Plugin: Dev.DevKit.PluginAccount.PreValidationAccountDeleteSynchronous");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //var target = (???)context.InputParameters["Target"];
            //var preEntity = (Entity)context.PreEntityImages["PreImage"];
            //var postEntity = (Entity)context.PostEntityImages["PostImage"];
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}
