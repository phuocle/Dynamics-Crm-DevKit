using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1007: IPlugin Implementations Should Be Stateless
    /// This file contains code that should trigger DEVKIT1007 errors for stateful plugins.
    /// </summary>
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1007_StatefulPlugin", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1007_StatefulPlugin : IPlugin
    {
        // DEVKIT1007: Mutable instance fields - shared across all executions!
        private IOrganizationService _service;
        private IPluginExecutionContext _context;
        private Entity _target;

        public void Execute(IServiceProvider serviceProvider)
        {
            // DEVKIT1007: Assigning to instance fields during execution - should trigger error
            _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            _service = factory.CreateOrganizationService(_context.UserId);

            _target = (Entity)_context.InputParameters["Target"];

            ProcessEntity();
        }

        private void ProcessEntity()
        {
            // Uses instance fields - DANGEROUS in plugins!
            _service.Update(_target);
        }
    }
}
