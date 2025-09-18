using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKitV4.Server.CustomApis
{
    [CrmPluginRegistration("v4_CustomApi", "none", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKitV4.Server.CustomApis.PostSynchronous___v4_CustomApi", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction)]
    public class PostSynchronous___v4_CustomApi : IPlugin
    {
        /*
        InputParameters:
            v4_request_input      System.String
            v4_request_f          System.String - require
        OutputParameters:
            v4_response_output    System.String - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostSynchronous___v4_CustomApi(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "v4_CustomApi", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals v4_CustomApi");
            if (!string.Equals(context.PrimaryEntityName, "none", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals none");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Synchronous)) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");
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
