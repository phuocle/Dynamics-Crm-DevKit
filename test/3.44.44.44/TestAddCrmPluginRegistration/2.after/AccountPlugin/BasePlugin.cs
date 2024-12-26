using Microsoft.Xrm.Sdk;
using System;

namespace AccountPlugin
{
    public abstract class BasePlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            try
            {
                Execute(context, serviceFactory, service, tracing);
            }
            catch(Exception ex)
            {
                tracing.Trace(ex.Message);
            }
        }

        public abstract void Execute(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing);
    }
}
