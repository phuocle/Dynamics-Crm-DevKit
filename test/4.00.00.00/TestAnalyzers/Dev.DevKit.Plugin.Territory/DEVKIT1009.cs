using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Net.Http;

namespace Dev.DevKit.PluginTerritory
{
    /// <summary>
    /// DEVKIT1009: Set KeepAlive to False for External HTTP Calls
    /// The diagnostic appears when new HttpClient() is instantiated in a plugin/workflow.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "Dev.DevKit.PluginTerritory.DEVKIT1009_HttpKeepAlive", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
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
