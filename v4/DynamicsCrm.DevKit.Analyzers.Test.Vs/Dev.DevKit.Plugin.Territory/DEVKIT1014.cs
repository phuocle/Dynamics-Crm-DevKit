using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace Dev.DevKit.PluginTerritory
{
    /// <summary>
    /// DEVKIT1014: Avoid AppDomain Event Registration in Plug-ins
    /// This file contains code that subscribes to AppDomain events,
    /// which should trigger DEVKIT1014 errors.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "Dev.DevKit.PluginTerritory.DEVKIT1014_AppDomainEvents", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1014_AppDomainEvents : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // DEVKIT1014: Memory leak - event handler never removed - should trigger error
            AppDomain.CurrentDomain.UnhandledException += (s, e) =>
            {
                tracing.Trace("Unhandled exception occurred");
            };

            // DEVKIT1014: Multiple subscriptions per execution - should trigger error
            AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;

            // DEVKIT1014: First chance exception handler - should trigger error
            AppDomain.CurrentDomain.FirstChanceException += (s, e) =>
            {
                tracing.Trace($"First chance exception: {e.Exception.Message}");
            };
        }

        private Assembly OnAssemblyResolve(object sender, ResolveEventArgs e)
        {
            // Resolve assembly
            return null;
        }
    }
}
