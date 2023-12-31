using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.PluginActivities.Email
{
    [CrmPluginRegistration("Send", "email", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "Dev.DevKit.PluginActivities.Email.PostEmailSendAsynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PostEmailSendAsynchronous : IPlugin
    {
        /*
          InputParameters:
              EmailId          System.Guid - require
              IssueSend        System.Boolean - require
              TrackingToken    System.String
           OutputParameters:
              Subject          System.String - require
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostEmailSendAsynchronous(string unsecureString, string secureString)
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
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "email".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals email");
            if (context.MessageName.ToLower() != "Send".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Send");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            tracing.DebugMessage("Begin Plugin: Dev.DevKit.PluginActivities.Email.PostEmailSendAsynchronous");
            tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            tracing.DebugMessage("End Plugin: Dev.DevKit.PluginActivities.Email.PostEmailSendAsynchronous");
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
