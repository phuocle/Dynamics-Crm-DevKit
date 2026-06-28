using SunFlower.Shared;
using System;
using Microsoft.Xrm.Sdk;

namespace AccountPlugin
{
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "AccountPlugin.PostUpdateAccount", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class PostUpdateAccount : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            ExecutePlugin(context, serviceFactory, service, tracing);

        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {

        }
    }
}
