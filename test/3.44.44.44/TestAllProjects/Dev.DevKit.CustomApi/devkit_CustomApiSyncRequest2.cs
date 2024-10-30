using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.CustomApi
{
    [CrmPluginRegistration("devkit_CustomApiSyncRequest", "devkit_CustomApiSync", PluginType.CustomApi)]
    public class devkit_CustomApiSyncRequest2 : IPlugin
    {
        /*
        InputParameters:
            devkit_f         System.String - require
            devkit_json      System.String
        OutputParameters:
            devkit_output    System.String - require
        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            tracing.DebugContext(context);

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