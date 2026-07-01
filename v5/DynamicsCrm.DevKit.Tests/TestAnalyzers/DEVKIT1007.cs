#pragma warning disable

/// <summary>
/// DEVKIT1007: Stateless plugin analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1007 only.
/// - Visual Studio Error List should show DEVKIT1007 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1007 is restored.
///
/// Severity Rules:
/// - Assigning execution state to instance fields or properties: ERROR - keep plugin execution state local
/// </summary>
#pragma warning restore DEVKIT1007

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
            // ❌ BAD: Do not store execution context in instance fields; keep per-execution state in local variables.
            _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            // ❌ BAD: Do not store organization services in instance fields; create and use them within the Execute call.
            _service = factory.CreateOrganizationService(_context.UserId);

            // ❌ BAD: Do not store target records in instance fields; pass them as method parameters instead.
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
#pragma warning restore
