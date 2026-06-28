#pragma warning disable

/// <summary>
/// DEVKIT1006: Batch request usage in plugin analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1006 only.
/// - Visual Studio Error List should show DEVKIT1006 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1006 is restored.
///
/// Severity Rules:
/// - ExecuteMultiple/ExecuteTransaction and other batch requests in plugins/workflows: WARNING - avoid batch operations in sandbox execution
/// </summary>
#pragma warning restore DEVKIT1006

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1006: Don't Use Batch Request Types in Plug-ins
    /// This file contains code that should trigger DEVKIT1006 warnings for using batch requests in plugins.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1006_BatchRequests", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1006_BatchRequests : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // DEVKIT1006: Using ExecuteMultipleRequest in plugin - should trigger warning
            var executeMultiple = new ExecuteMultipleRequest
            {
                Requests = new OrganizationRequestCollection(),
                Settings = new ExecuteMultipleSettings
                {
                    ContinueOnError = false,
                    ReturnResponses = true
                }
            };
            service.Execute(executeMultiple);

            // DEVKIT1006: Using ExecuteTransactionRequest in plugin - should trigger warning
            var executeTransaction = new ExecuteTransactionRequest
            {
                Requests = new OrganizationRequestCollection()
            };
            service.Execute(executeTransaction);
        }
    }
}
#pragma warning restore
