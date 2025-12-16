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
                    // DEVKIT1011: Generic Exception - user sees "An error occurred" - should trigger warning
                    throw new Exception("Target entity is null");
                }

                if (!target.Contains("name"))
                {
                    // DEVKIT1011: ArgumentException - not properly displayed - should trigger warning
                    throw new ArgumentException("Name is required");
                }

                if (string.IsNullOrEmpty(target.GetAttributeValue<string>("name")))
                {
                    // DEVKIT1011: ArgumentNullException - should trigger warning
                    throw new ArgumentNullException("name", "Name cannot be empty");
                }
            }
            catch (Exception ex)
            {
                // DEVKIT1011: Re-throwing wrapped in generic Exception - should trigger warning
                throw new Exception($"Failed to process: {ex.Message}", ex);
            }
        }
    }
}
