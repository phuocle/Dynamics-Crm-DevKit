#pragma warning disable

/// <summary>
/// DEVKIT1013: Retrieve/RetrieveMultiple plugin registration analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1013 only.
/// - Visual Studio Error List should show DEVKIT1013 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1013 is restored.
///
/// Severity Rules:
/// - DEVKIT1013 diagnostics: INFO by default; this test project promotes DEVKIT1013 to WARNING in .editorconfig for visible editor squiggles.
/// </summary>
#pragma warning restore DEVKIT1013

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1013: Avoid Registering Plugins on Retrieve/RetrieveMultiple
    /// The diagnostic appears on the CrmPluginRegistration ATTRIBUTE when message is Retrieve or RetrieveMultiple.
    /// </summary>

    // ❌ BAD: Do not register plugins on Retrieve unless there is no alternative; prefer views, calculated data, or client-side logic.
    [CrmPluginRegistration("Retrieve", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "TestAnalyzers.DEVKIT1013_RetrievePlugin", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1013_RetrievePlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // This runs on EVERY territory form load!
            tracing.Trace("Retrieve plugin executed");
        }
    }

    // ❌ BAD: Do not register plugins on RetrieveMultiple for broad queries; prefer query design, views, or dedicated APIs.
    [CrmPluginRegistration("RetrieveMultiple", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "TestAnalyzers.DEVKIT1013_RetrieveMultiplePlugin", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1013_RetrieveMultiplePlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // This runs on EVERY territory view load!
            tracing.Trace("RetrieveMultiple plugin executed");
        }
    }
}
#pragma warning restore
