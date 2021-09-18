using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Server.CustomApis.Contact
{
    [CrmPluginRegistration("devkit_CustomApiEntityCollectionRequest", "devkit_CustomApiEntityCollection", PluginType.CustomApi, EntityLogicalName = "contact")]
    public class devkit_CustomApiEntityCollectionRequest : IPlugin
    {
        /*
          InputParameters:
              devkit_InEntityCollection     Microsoft.Xrm.Sdk.EntityCollection - require
              devkit_InStringArray          System.String[] - require
           OutputParameters:
              devkit_OutEntityCollection    Microsoft.Xrm.Sdk.EntityCollection - require
        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.PrimaryEntityName.ToLower() != "contact".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");

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
