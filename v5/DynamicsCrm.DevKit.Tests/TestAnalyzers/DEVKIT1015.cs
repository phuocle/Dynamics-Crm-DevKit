#pragma warning disable

/// <summary>
/// DEVKIT1015: Blocking async pattern analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1015 only.
/// - Visual Studio Error List should show DEVKIT1015 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1015 is restored.
///
/// Severity Rules:
/// - DEVKIT1015 diagnostics: INFO by default; this test project promotes DEVKIT1015 to WARNING in .editorconfig for visible editor squiggles.
/// </summary>
#pragma warning restore DEVKIT1015

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Threading.Tasks;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1015: Avoid Blocking Async Patterns in Plug-ins
    /// The diagnostic appears on: task.GetAwaiter().GetResult(), task.Wait(), task.Result
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1015_BlockingAsync", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1015_BlockingAsync : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            var task = new Task<int>(() => 42);

            // ❌ BAD: Do not block plugin execution with Task.Wait(); use synchronous APIs or carefully awaited external code outside the plugin.
            task.Wait();

            // ❌ BAD: Do not block plugin execution with Task.Result; use a synchronous flow instead.
            var result = task.Result;

            // ❌ BAD: Do not block plugin execution with GetAwaiter().GetResult(); avoid async-over-sync deadlock patterns.
            var task2 = new Task(() => { });
            task2.GetAwaiter().GetResult();

            tracing.Trace($"Result: {result}");
        }
    }
}
#pragma warning restore
