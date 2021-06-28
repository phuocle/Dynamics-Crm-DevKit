using System;
using Microsoft.Xrm.Sdk;
using $SharedNameSpace$;

namespace $NameSpace$
{
    [CrmPluginRegistration("$PluginMessage$Request", "$PluginMessage$", PluginType.CustomApi$if$($PluginLogicalNameInt$==1), EntityLogicalName = "$PluginLogicalName$"$endif$)]
    public class $PluginClass$$PluginOrder2$ : IPlugin
    {
$PluginComment$

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            $if$($PluginLogicalNameInt$==1)if (context.PrimaryEntityName.ToLower() != "$PluginLogicalName$".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $PluginLogicalName$");$endif$

            tracing.DebugMessage("Begin Custom Api: $NameSpace$.$PluginClass$$PluginOrder2$");
            tracing.DebugContext(context);

            var outputs = ExecuteCustomApi(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            tracing.DebugMessage("End Custom Api: $NameSpace$.$PluginClass$$PluginOrder2$");
        }

        private ParameterCollection ExecuteCustomApi(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
