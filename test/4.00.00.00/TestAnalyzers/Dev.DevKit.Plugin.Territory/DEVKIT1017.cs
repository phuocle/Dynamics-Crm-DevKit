using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Plugin.Territory
{
    /// <summary>
    /// Test file for DEVKIT1017 - Avoid Console Output in Plug-ins
    /// Console.Write/WriteLine has no effect in the Dataverse sandbox.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name",
        "PostTerritoryUpdate_ConsoleTest", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1017_ConsoleOutput : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // ❌ DEVKIT1017: Console.WriteLine has no effect in sandbox
            Console.WriteLine("Plugin started");

            // ❌ DEVKIT1017: Console.Write has no effect in sandbox
            Console.Write("Processing: ");
            Console.Write(context.MessageName);

            // ❌ DEVKIT1017: Console.WriteLine with format has no effect in sandbox
            Console.WriteLine("Message: {0}, Stage: {1}", context.MessageName, context.Stage);

            // ❌ DEVKIT1017: Console.Error has no effect in sandbox
            Console.Error.WriteLine("Error message");

            // This is the correct way - use ITracingService
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            tracingService.Trace("This is the correct approach");
        }
    }
}
