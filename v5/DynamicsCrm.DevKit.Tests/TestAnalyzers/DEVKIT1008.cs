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

            // DEVKIT1008: Parallel.ForEach is not supported in plugins - should trigger error
            Parallel.ForEach(entities, entity =>
            {
                service.Update(entity);
            });

            // DEVKIT1008: Task.Run spawns a new thread - should trigger error
            Task.Run(() => ProcessData());

            // DEVKIT1008: Creating threads directly - should trigger error
            var thread = new Thread(() => DoBackgroundWork());
            thread.Start();

            // DEVKIT1008: Parallel.For - should trigger error
            Parallel.For(0, 10, i =>
            {
                tracing.Trace($"Processing {i}");
            });

            // DEVKIT1008: ThreadPool.QueueUserWorkItem - should trigger error
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
