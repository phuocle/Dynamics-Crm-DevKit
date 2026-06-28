#pragma warning disable

/// <summary>
/// DEVKIT1014: AppDomain event registration analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1014 only.
/// - Visual Studio Error List should show DEVKIT1014 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1014 is restored.
///
/// Severity Rules:
/// - Subscribing to AppDomain events in plugins/workflows: ERROR - avoid process-wide event handlers in sandbox
/// </summary>
#pragma warning restore DEVKIT1014

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1014: Avoid AppDomain Event Registration in Plug-ins
    /// This file contains code that subscribes to AppDomain events,
    /// which should trigger DEVKIT1014 errors.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1014_AppDomainEvents", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1014_AppDomainEvents : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // ❌ BAD: Do not subscribe to AppDomain.UnhandledException in plugins; use ITracingService and normal exception handling instead.
            AppDomain.CurrentDomain.UnhandledException += (s, e) =>
            {
                tracing.Trace("Unhandled exception occurred");
            };

            // ❌ BAD: Do not subscribe to AppDomain.AssemblyResolve in plugins; package dependencies with the plugin assembly instead.
            AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;

            // ❌ BAD: Do not subscribe to AppDomain.FirstChanceException in plugins; trace exceptions in catch blocks instead.
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
#pragma warning restore
