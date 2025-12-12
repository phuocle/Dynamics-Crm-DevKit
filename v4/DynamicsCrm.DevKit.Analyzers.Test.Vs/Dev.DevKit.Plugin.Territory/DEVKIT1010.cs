using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.Net.Http;

namespace Dev.DevKit.PluginTerritory
{
    /// <summary>
    /// DEVKIT1010: Set Timeout for External HTTP Calls
    /// The diagnostic appears when new HttpClient() is instantiated in a plugin/workflow.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "Dev.DevKit.PluginTerritory.DEVKIT1010_HttpTimeout", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1010_HttpTimeout : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // DEVKIT1010: Using new HttpClient() without setting Timeout - should trigger warning
            using (var client = new HttpClient())
            {
                // Missing: client.Timeout = TimeSpan.FromSeconds(15);
                tracing.Trace("Using HttpClient without timeout");
            }
        }
    }
}
