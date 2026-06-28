#pragma warning disable

/// <summary>
/// DEVKIT1011: InvalidPluginExecutionException analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1011 only.
/// - Visual Studio Error List should show DEVKIT1011 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1011 is restored.
///
/// Severity Rules:
/// - Throwing non-InvalidPluginExecutionException from plugins/workflows: WARNING - throw InvalidPluginExecutionException for user-facing errors
/// </summary>
#pragma warning restore DEVKIT1011

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1011: Use InvalidPluginExecutionException for Errors
    /// This file contains code that should trigger DEVKIT1011 warnings for throwing wrong exception types.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1011_WrongExceptionType", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1011_WrongExceptionType : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            try
            {
                // Some business logic
                var target = (Entity)context.InputParameters["Target"];
                if (target == null)
                {
                    // ❌ BAD: Do not throw generic Exception from plugins; throw InvalidPluginExecutionException with a user-facing message.
                    throw new Exception("Target entity is null");
                }

                if (!target.Contains("name"))
                {
                    // ❌ BAD: Do not throw ArgumentException from plugins; throw InvalidPluginExecutionException so Dataverse displays the message correctly.
                    throw new ArgumentException("Name is required");
                }

                if (string.IsNullOrEmpty(target.GetAttributeValue<string>("name")))
                {
                    // ❌ BAD: Do not throw ArgumentNullException from plugins; throw InvalidPluginExecutionException for validation failures.
                    throw new ArgumentNullException("name", "Name cannot be empty");
                }
            }
            catch (Exception ex)
            {
                // ❌ BAD: Do not wrap plugin errors in generic Exception; wrap them in InvalidPluginExecutionException instead.
                throw new Exception($"Failed to process: {ex.Message}", ex);
            }
        }
    }
}
#pragma warning restore
