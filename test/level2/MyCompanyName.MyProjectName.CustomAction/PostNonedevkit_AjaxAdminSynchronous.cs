using System;
using Microsoft.Xrm.Sdk;
using MyCompanyName.MyProjectName.Shared;

namespace MyCompanyName.MyProjectName.CustomAction
{
    [CrmPluginRegistration("devkit_AjaxAdmin", "none", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "MyCompanyName.MyProjectName.CustomAction.None.PostNonedevkit_AjaxAdminSynchronous", 1, IsolationModeEnum.Sandbox)]
    public class PostNonedevkit_AjaxAdminSynchronous : IPlugin
    {
        /*
          InputParameters:
              function      System.String - require
              jsonInput     System.String - require
           OutputParameters:
              jsonOutput    System.String - require
        */
        private readonly string _unsecureString = null;
        private readonly string _secureString = null;

        public PostNonedevkit_AjaxAdminSynchronous(string unsecureString, string secureString)
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
            if (context.PrimaryEntityName.ToLower() != "none".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals none");
            if (context.MessageName.ToLower() != "devkit_AjaxAdmin".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals devkit_AjaxAdmin");
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
