#pragma warning disable

/// <summary>
/// DEVKIT1018: File IO analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1018 only.
/// - Visual Studio Error List should show DEVKIT1018 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1018 is restored.
///
/// Severity Rules:
/// - System.IO file operations in plugins/workflows: ERROR - file IO is blocked in Dataverse sandbox
/// </summary>
#pragma warning restore DEVKIT1018

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
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "PostTerritoryUpdate_FileIOTest", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1018_FileIO : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // ❌ BAD: Do not read files from plugin sandbox code; store configuration in Dataverse or secure/unsecure plugin configuration.
            var content = File.ReadAllText("config.txt");

            // ❌ BAD: Do not write files from plugins; use ITracingService or Dataverse records for diagnostics.
            File.WriteAllText("log.txt", "Plugin executed");

            // ❌ BAD: Do not check file system state in plugins; the sandbox blocks file IO.
            if (File.Exists("test.txt"))
            {
                // ❌ BAD: Do not delete files from plugins; move file work to an external service if needed.
                File.Delete("test.txt");
            }

            // ❌ BAD: Do not open FileStream in plugins; use Dataverse storage or external services instead.
            using (var stream = new FileStream("data.bin", FileMode.Open))
            {
                // Read from stream
            }

            // ❌ BAD: Do not use StreamReader over local files in plugins; read data from supported platform services instead.
            using (var reader = new StreamReader("input.txt"))
            {
                var line = reader.ReadLine();
            }

            // ❌ BAD: Do not use StreamWriter over local files in plugins; trace or persist data through supported APIs.
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
#pragma warning restore
