using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;

namespace Dev.DevKit.PluginTerritory
{
    /// <summary>
    /// DEVKIT1006: Don't Use Batch Request Types in Plug-ins
    /// This file contains code that should trigger DEVKIT1006 warnings for using batch requests in plugins.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "Dev.DevKit.PluginTerritory.DEVKIT1006_BatchRequests", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
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
