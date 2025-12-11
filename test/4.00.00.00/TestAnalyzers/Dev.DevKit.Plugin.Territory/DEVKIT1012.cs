using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.PluginTerritory
{
    /// <summary>
    /// DEVKIT1012: Consider Using ITracingService in Plug-ins
    /// The diagnostic appears on the CLASS DECLARATION when ITracingService is NOT used.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "Dev.DevKit.PluginTerritory.DEVKIT1012_NoTracing", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1012_NoTracing : IPlugin
    {
        // DEVKIT1012: This plugin does NOT use ITracingService - should trigger info on class declaration
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            // Note: No ITracingService is retrieved or used
            // This makes debugging in production very difficult

            var target = (Entity)context.InputParameters["Target"];
            service.Update(target);
        }
    }
}
