using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;
using System.IO;

namespace Dev.DevKit.Plugin.Territory
{
    /// <summary>
    /// Test file for DEVKIT1018 - Avoid File/IO Operations in Plug-ins
    /// System.IO operations are blocked in the Dataverse sandbox.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name",
        "PostTerritoryUpdate_FileIOTest", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1018_FileIO : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // ❌ DEVKIT1018: File.ReadAllText is blocked in sandbox
            var content = File.ReadAllText("config.txt");

            // ❌ DEVKIT1018: File.WriteAllText is blocked in sandbox
            File.WriteAllText("log.txt", "Plugin executed");

            // ❌ DEVKIT1018: File.Exists is blocked in sandbox
            if (File.Exists("test.txt"))
            {
                // ❌ DEVKIT1018: File.Delete is blocked in sandbox
                File.Delete("test.txt");
            }

            // ❌ DEVKIT1018: new FileStream is blocked in sandbox
            using (var stream = new FileStream("data.bin", FileMode.Open))
            {
                // Read from stream
            }

            // ❌ DEVKIT1018: new StreamReader is blocked in sandbox
            using (var reader = new StreamReader("input.txt"))
            {
                var line = reader.ReadLine();
            }

            // ❌ DEVKIT1018: new StreamWriter is blocked in sandbox
            using (var writer = new StreamWriter("output.txt"))
            {
                writer.WriteLine("Output data");
            }

            // This is the correct way - use Dataverse services
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            tracingService.Trace("Use tracing instead of file logging");
        }
    }
}
