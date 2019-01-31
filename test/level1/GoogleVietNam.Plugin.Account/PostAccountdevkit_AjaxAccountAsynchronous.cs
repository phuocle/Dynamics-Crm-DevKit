using System;
using Microsoft.Xrm.Sdk;
using GoogleVietNam.Shared;

namespace GoogleVietNam.PluginAccount
{
    [CrmPluginRegistration("devkit_AjaxAccount", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "GoogleVietNam.PluginAccount.PostAccountdevkit_AjaxAccountAsynchronous", 1, IsolationModeEnum.Sandbox,
    Image1Name = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "",
    Image2Name = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "")]
    public class PostAccountdevkit_AjaxAccountAsynchronous : IPlugin
    {
        /*
          InputParameters:
              i         System.String - require
              Target    Microsoft.Xrm.Sdk.EntityReference - require
           OutputParameters:
              o         System.String - require
        */
        private readonly string _unsecureString = null;
        private readonly string _secureString = null;

        public PostAccountdevkit_AjaxAccountAsynchronous(string unsecureString, string secureString)
        {
            if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
            if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        }

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            if (context == null) throw new InvalidPluginExecutionException("Initialize IPluginExecutionContext fail.");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            if (serviceFactory == null) throw new InvalidPluginExecutionException("Initialize IOrganizationServiceFactory fail.");
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            if (service == null) throw new InvalidPluginExecutionException("Initialize IOrganizationService fail.");
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (tracing == null) throw new InvalidPluginExecutionException("Initialize ITracingService fail.");
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "devkit_AjaxAccount".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals devkit_AjaxAccount");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            Debugger.Begin(tracing, context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            Debugger.End(tracing, context);
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