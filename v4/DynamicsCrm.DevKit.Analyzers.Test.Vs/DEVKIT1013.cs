using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace DynamicsCrm.DevKit.Analyzers.Test.Vs
{
    /// <summary>
    /// DEVKIT1013: Avoid Registering Plugins on Retrieve/RetrieveMultiple
    /// The diagnostic appears on the CrmPluginRegistration ATTRIBUTE when message is Retrieve or RetrieveMultiple.
    /// </summary>

    // DEVKIT1013: Plugin on Retrieve - should trigger info on this attribute
    [CrmPluginRegistration("Retrieve", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "DynamicsCrm.DevKit.Analyzers.Test.Vs.DEVKIT1013_RetrievePlugin", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
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

    // DEVKIT1013: Plugin on RetrieveMultiple - should trigger info on this attribute
    [CrmPluginRegistration("RetrieveMultiple", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "DynamicsCrm.DevKit.Analyzers.Test.Vs.DEVKIT1013_RetrieveMultiplePlugin", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
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
