#pragma warning disable

/// <summary>
/// DEVKIT1009: HTTP KeepAlive analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1009 only.
/// - Visual Studio Error List should show DEVKIT1009 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1009 is restored.
///
/// Severity Rules:
/// - External HTTP calls without connection close semantics: WARNING - set KeepAlive false or HttpClient connection close
/// </summary>
#pragma warning restore DEVKIT1009

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Net.Http;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1009: Set KeepAlive to False for External HTTP Calls
    /// The diagnostic appears when new HttpClient() is instantiated in a plugin/workflow.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1009_HttpKeepAlive", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1009_HttpKeepAlive : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // DEVKIT1009: Using new HttpClient() in plugin - should trigger warning on each instantiation
            using (var client = new HttpClient())
            {
                tracing.Trace("Using HttpClient");
            }

            // Another instance
            var client2 = new HttpClient();
        }
    }
}
#pragma warning restore
