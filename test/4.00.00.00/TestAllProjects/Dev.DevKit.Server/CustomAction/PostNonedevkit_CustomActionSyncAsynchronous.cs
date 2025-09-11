using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Server.CustomAction
{
    [CrmPluginRegistration("devkit_CustomActionSync", "none", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKit.Server.CustomAction.PostNonedevkit_CustomActionSyncAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction, DeleteAsyncOperation = true)]
    public class PostNonedevkit_CustomActionSyncAsynchronous : IPlugin
    {
        /* Custom Action 2
        InputParameters:
            f         System.String - require
            json      System.String
        OutputParameters:
            output    System.String - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostNonedevkit_CustomActionSyncAsynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "devkit_CustomActionSync", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals devkit_CustomActionSync");
            if (!string.Equals(context.PrimaryEntityName, "none", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals none");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Asynchronous)) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            tracing?.DebugContext(context);

            var outputs = ExecuteCustomAction(context, serviceFactory, serviceAdmin, service, tracing);
            foreach (var output in outputs)
            {
                if (context.OutputParameters.Contains(output.Key))
                {
                    context.OutputParameters[output.Key] = output.Value;
                }
            }
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
