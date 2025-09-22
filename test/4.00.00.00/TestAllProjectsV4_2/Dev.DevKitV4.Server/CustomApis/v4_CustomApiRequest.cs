using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKitV4.Server.CustomApis
{
    [CrmPluginRegistration("v4_CustomApiRequest", "v4_CustomApi", PluginType.CustomApi)]
    public class v4_CustomApiRequest : IPlugin
    {
        /*
        InputParameters:
            v4_request_input      System.String
            v4_request_f          System.String - require
        OutputParameters:
            v4_response_output    System.String - require
        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            tracing?.DebugContext(context);

            var outputs = ExecuteCustomApi(context, serviceFactory, serviceAdmin, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;
        }

        private ParameterCollection ExecuteCustomApi(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}