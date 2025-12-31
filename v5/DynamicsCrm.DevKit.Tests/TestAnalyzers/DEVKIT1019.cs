using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Plugin.Territory
{
    /// <summary>
    /// Test file for DEVKIT1019 - Consider Checking context.Depth to Prevent Infinite Loops
    /// Plugins should check context.Depth to prevent recursive loops when modifying entities.
    /// </summary>

    // ❌ DEVKIT1019: This plugin does NOT check context.Depth - should trigger warning on class declaration
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name",
        "PostTerritoryUpdate_NoDepthCheck", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1019_NoDepthCheck : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            // ❌ No depth check - this can cause infinite loop if Update triggers this plugin again
            var target = (Entity)context.InputParameters["Target"];

            // This update will trigger the plugin again, causing infinite recursion!
            var update = new Entity("territory", target.Id);
            update["description"] = "Updated by plugin";
            service.Update(update);
        }
    }

    // ✅ GOOD: This plugin CHECKS context.Depth - should NOT trigger warning
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name",
        "PostTerritoryUpdate_WithDepthCheck", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1019_WithDepthCheck : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            // ✅ Check depth to prevent infinite loops
            if (context.Depth > 1) return;

            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            var target = (Entity)context.InputParameters["Target"];

            // Now safe to update - won't loop infinitely
            var update = new Entity("territory", target.Id);
            update["description"] = "Updated by plugin";
            service.Update(update);
        }
    }

    // ✅ GOOD: This plugin uses depth in a condition - should NOT trigger warning
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name",
        "PostTerritoryUpdate_DepthInCondition", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1019_DepthInCondition : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // ✅ Log depth and use it in logic
            tracingService.Trace($"Plugin executing at depth: {context.Depth}");

            if (context.Depth == 1)
            {
                // Only run logic on first level call
                var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                var service = serviceFactory.CreateOrganizationService(context.UserId);
                var target = (Entity)context.InputParameters["Target"];
                service.Update(target);
            }
        }
    }
}
