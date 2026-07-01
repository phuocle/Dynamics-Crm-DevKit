#pragma warning disable

/// <summary>
/// DEVKIT1017: Console output analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1017 only.
/// - Visual Studio Error List should show DEVKIT1017 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1017 is restored.
///
/// Severity Rules:
/// - DEVKIT1017 diagnostics: INFO by default; this test project promotes DEVKIT1017 to WARNING in .editorconfig for visible editor squiggles.
/// </summary>
#pragma warning restore DEVKIT1017

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Plugin.Territory
{
    /// <summary>
    /// Test file for DEVKIT1017 - Avoid Console Output in Plug-ins
    /// Console.Write/WriteLine has no effect in the Dataverse sandbox.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "PostTerritoryUpdate_ConsoleTest", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1017_ConsoleOutput : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // ❌ BAD: Do not use Console.WriteLine in plugins; use ITracingService.Trace instead.
            Console.WriteLine("Plugin started");

            // ❌ BAD: Do not use Console.Write in plugins; write diagnostic output through ITracingService.
            Console.Write("Processing: ");
            Console.Write(context.MessageName);

            // ❌ BAD: Do not use formatted Console.WriteLine in plugins; use tracing with contextual values instead.
            Console.WriteLine("Message: {0}, Stage: {1}", context.MessageName, context.Stage);

            // ❌ BAD: Do not use Console.Error in plugins; trace errors through ITracingService.
            Console.Error.WriteLine("Error message");

            // This is the correct way - use ITracingService
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            tracingService.Trace("This is the correct approach");
        }
    }
}
#pragma warning restore
