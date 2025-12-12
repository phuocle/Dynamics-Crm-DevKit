using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Analyzers.Test.Vs
{
    /// <summary>
    /// DEVKIT1015: Avoid Blocking Async Patterns in Plug-ins
    /// The diagnostic appears on: task.GetAwaiter().GetResult(), task.Wait(), task.Result
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "DynamicsCrm.DevKit.Analyzers.Test.Vs.DEVKIT1015_BlockingAsync", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1015_BlockingAsync : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            var task = new Task<int>(() => 42);

            // DEVKIT1015: task.Wait() - should trigger info
            task.Wait();

            // DEVKIT1015: task.Result - should trigger info
            var result = task.Result;

            // DEVKIT1015: GetAwaiter().GetResult() pattern - should trigger info
            var task2 = new Task(() => { });
            task2.GetAwaiter().GetResult();

            tracing.Trace($"Result: {result}");
        }
    }
}
