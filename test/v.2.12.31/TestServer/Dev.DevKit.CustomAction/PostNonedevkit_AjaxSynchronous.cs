using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.CustomAction
{
    [CrmPluginRegistration("devkit_Ajax", "none", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "Dev.DevKit.CustomAction.PostNonedevkit_AjaxSynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "", PluginType = PluginType.CustomAction)]
    public class PostNonedevkit_AjaxSynchronous : IPlugin
    {
        /*
          InputParameters:
              f    System.String - require
              i    System.String
           OutputParameters:
              o    System.String - require
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostNonedevkit_AjaxSynchronous(string unsecureString, string secureString)
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
            if (context.PrimaryEntityName.ToLower() != "none".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals none");
            if (context.MessageName.ToLower() != "devkit_Ajax".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals devkit_Ajax");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugMessage("Begin Custom Action: Dev.DevKit.CustomAction.PostNonedevkit_AjaxSynchronous");
            //tracing.DebugContext(context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugMessage("End Custom Action: Dev.DevKit.CustomAction.PostNonedevkit_AjaxSynchronous");
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
