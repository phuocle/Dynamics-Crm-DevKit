#pragma warning disable

/// <summary>
/// DEVKIT1019: Plugin depth check analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1019 only.
/// - Visual Studio Error List should show DEVKIT1019 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1019 is restored.
///
/// Severity Rules:
/// - Plugin classes that do not check IPluginExecutionContext.Depth: WARNING - guard against recursive execution
/// </summary>
#pragma warning restore DEVKIT1019

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Plugin.Territory
{
    /// <summary>
    /// Test file for DEVKIT1019 - Consider Checking context.Depth to Prevent Infinite Loops
    /// Plugins should check context.Depth to prevent recursive loops when modifying entities.
    /// </summary>

    // ❌ BAD: Do not omit a context.Depth guard in plugins that can update data; exit early when depth is greater than 1.
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "PostTerritoryUpdate_NoDepthCheck", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1019_NoDepthCheck : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            // ❌ BAD: Do not update records without checking context.Depth first; this can recursively trigger the same plugin.
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
#pragma warning restore
