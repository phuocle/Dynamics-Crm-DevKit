#pragma warning disable

/// <summary>
/// DEVKIT1008: Parallel execution in plugin analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1008 only.
/// - Visual Studio Error List should show DEVKIT1008 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1008 is restored.
///
/// Severity Rules:
/// - Task.Run, Parallel, Thread, and ThreadPool usage in plugins/workflows: ERROR - do not use parallel execution in sandbox
/// </summary>
#pragma warning restore DEVKIT1008

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1008: Don't Use Parallel Execution in Plug-ins
    /// This file contains code that should trigger DEVKIT1008 errors for parallel execution patterns.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1008_ParallelExecution", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1008_ParallelExecution : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            var entities = new List<Entity>();

            // ❌ BAD: Do not use Parallel.ForEach in plugins; process records synchronously or move parallel work outside Dataverse sandbox execution.
            Parallel.ForEach(entities, entity =>
            {
                service.Update(entity);
            });

            // ❌ BAD: Do not use Task.Run in plugins; keep plugin execution on the platform-managed thread.
            Task.Run(() => ProcessData());

            // ❌ BAD: Do not create Thread instances in plugins; use synchronous plugin logic or an external worker.
            var thread = new Thread(() => DoBackgroundWork());
            thread.Start();

            // ❌ BAD: Do not use Parallel.For in plugins; avoid multi-threaded sandbox execution.
            Parallel.For(0, 10, i =>
            {
                tracing.Trace($"Processing {i}");
            });

            // ❌ BAD: Do not queue ThreadPool work from plugins; use async processing outside the plugin pipeline.
            ThreadPool.QueueUserWorkItem(state => DoBackgroundWork());
        }

        private void ProcessData()
        {
            // Background processing
        }

        private void DoBackgroundWork()
        {
            // Background work
        }
    }
}
#pragma warning restore
