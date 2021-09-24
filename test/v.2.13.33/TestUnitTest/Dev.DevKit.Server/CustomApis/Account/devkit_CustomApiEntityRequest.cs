using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Server.CustomApis.Account
{
    [CrmPluginRegistration("devkit_CustomApiEntityRequest", "devkit_CustomApiEntity", PluginType.CustomApi, EntityLogicalName = "account")]
    public class devkit_CustomApiEntityRequest : IPlugin
    {
        /*
          InputParameters:
              Target                       Microsoft.Xrm.Sdk.EntityReference - require
              devkit_InEntity              Microsoft.Xrm.Sdk.Entity - require
              devkit_InEntityReference     Microsoft.Xrm.Sdk.EntityReference - require
           OutputParameters:
              devkit_OutEntity             Microsoft.Xrm.Sdk.Entity - require
              devkit_OutEntityReference    Microsoft.Xrm.Sdk.EntityReference - require
              devkit_OutStringArray        System.String[] - require
        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");

            //tracing.DebugContext(context);

            var outputs = ExecuteCustomApi(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugContext(context);
        }

        private ParameterCollection ExecuteCustomApi(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
