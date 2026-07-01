#pragma warning disable

/// <summary>
/// DEVKIT1012: Tracing service analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1012 only.
/// - Visual Studio Error List should show DEVKIT1012 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1012 is restored.
///
/// Severity Rules:
/// - DEVKIT1012 diagnostics: INFO by default; this test project promotes DEVKIT1012 to WARNING in .editorconfig for visible editor squiggles.
/// </summary>
#pragma warning restore DEVKIT1012

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1012: Consider Using ITracingService in Plug-ins
    /// The diagnostic appears on the CLASS DECLARATION when ITracingService is NOT used.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1012_NoTracing", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    // ❌ BAD: Do not implement plugins without ITracingService; retrieve tracing and write useful trace messages for diagnostics.
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
#pragma warning restore
