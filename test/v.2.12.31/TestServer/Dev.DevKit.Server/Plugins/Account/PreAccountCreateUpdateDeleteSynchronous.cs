using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Server.Plugins.Account
{
    [CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKit.Server.Plugins.Account.PreAccountCreateSynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "")]
    [CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "name", "Dev.DevKit.Server.Plugins.Account.PreAccountUpdateSynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name")]
    [CrmPluginRegistration("Delete", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKit.Server.Plugins.Account.PreAccountDeleteSynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PreAccountCreateUpdateDeleteSynchronous : IPlugin
    {
        /*
          InputParameters:
              Target                             Microsoft.Xrm.Sdk.Entity - require
              SuppressDuplicateDetection         System.Boolean
              CalculateMatchCodeSynchronously    System.Boolean
              SolutionUniqueName                 System.String
              MaintainLegacyAppServerBehavior    System.Boolean
              ReturnRowVersion                   System.Boolean
           OutputParameters:
              id                                 System.Guid - require
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PreAccountCreateUpdateDeleteSynchronous(string unsecureString, string secureString)
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
            if (context.Stage != (int)StageEnum.PreOperation) throw new InvalidPluginExecutionException("Stage does not equals PreOperation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            //if (context.MessageName.ToLower() != "Create".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Create");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugMessage("Begin Plugin: Dev.DevKit.Server.Plugins.Account.PreAccountCreateSynchronous");
            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            //tracing.DebugMessage("End Plugin: Dev.DevKit.Server.Plugins.Account.PreAccountCreateSynchronous");
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
