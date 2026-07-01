#pragma warning disable

/// <summary>
/// DEVKIT1010: HTTP timeout analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1010 only.
/// - Visual Studio Error List should show DEVKIT1010 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1010 is restored.
///
/// Severity Rules:
/// - HttpClient usage without explicit Timeout: WARNING - set a timeout for external calls
/// </summary>
#pragma warning restore DEVKIT1010

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Net.Http;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1010: Set Timeout for External HTTP Calls
    /// The diagnostic appears when new HttpClient() is instantiated in a plugin/workflow.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1010_HttpTimeout", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1010_HttpTimeout : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // ❌ BAD: Do not use HttpClient without an explicit timeout; set client.Timeout to a bounded value before calling external services.
            using (var client = new HttpClient())
            {
                // Missing: client.Timeout = TimeSpan.FromSeconds(15);
                tracing.Trace("Using HttpClient without timeout");
            }
        }
    }
}
#pragma warning restore
