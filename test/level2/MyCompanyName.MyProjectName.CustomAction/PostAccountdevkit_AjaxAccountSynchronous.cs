using System;
using Microsoft.Xrm.Sdk;
using MyCompanyName.MyProjectName.Shared;

namespace MyCompanyName.MyProjectName.CustomAction
{
    [CrmPluginRegistration("devkit_AjaxAccount", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "MyCompanyName.MyProjectName.CustomAction.Account.PostAccountdevkit_AjaxAccountSynchronous", 1, IsolationModeEnum.Sandbox)]
    public class PostAccountdevkit_AjaxAccountSynchronous : IPlugin
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

        public PostAccountdevkit_AjaxAccountSynchronous(string unsecureString, string secureString)
        {
            if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
            if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        }

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "devkit_AjaxAccount".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals devkit_AjaxAccount");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //Debugger.Begin(tracing, context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //Debugger.End(tracing, context);
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //var input = (string)context.InputParameters?["input"];
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
