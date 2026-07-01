#pragma warning disable

/// <summary>
/// DEVKIT1001: Create/Update message filtering attributes analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1001 only.
/// - Visual Studio Error List should show DEVKIT1001 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1001 is restored.
///
/// Severity Rules:
/// - Create messages (Create, CreateMultiple, OnExternalCreated): WARNING - filtering attributes should be specified
/// - Update messages (Update, UpdateMultiple, OnExternalUpdated): ERROR - filtering attributes must be specified
/// </summary>
#pragma warning restore DEVKIT1001

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1001: Create/Update message filtering attributes analyzer
    ///
    /// Severity Rules:
    /// - Create messages (Create, CreateMultiple, OnExternalCreated): WARNING - filtering attributes should be specified
    /// - Update messages (Update, UpdateMultiple, OnExternalUpdated): ERROR - filtering attributes must be specified
    /// </summary>

    #region Create messages - WARNING (should have filtering attributes)

    /// <summary>
    /// DEVKIT1001: Create message with empty filtering attributes - should trigger WARNING
    /// </summary>
    // ❌ BAD: Do not register Create without filtering attributes; specify the columns that should trigger the plugin.
    [CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "TestAnalyzers.DEVKIT1001_CreateWithoutFilteringAttributes", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1001_CreateWithoutFilteringAttributes : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            tracing.Trace("Create without filtering attributes - Warning expected");
        }
    }

    /// <summary>
    /// DEVKIT1001: Create message with * filtering attributes - should trigger WARNING
    /// </summary>
    // ❌ BAD: Do not use "*" for filtering attributes; list the specific columns the plugin depends on.
    [CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "*", "TestAnalyzers.DEVKIT1001_CreateWithAllAttributes", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1001_CreateWithAllAttributes : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            tracing.Trace("Create with * filtering attributes - Warning expected");
        }
    }

    #endregion

    #region Update messages - ERROR (must have filtering attributes)

    /// <summary>
    /// DEVKIT1001: Update message with empty filtering attributes - should trigger ERROR
    /// </summary>
    // ❌ BAD: Do not register Update without filtering attributes; specify the updated columns that should run this plugin.
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "TestAnalyzers.DEVKIT1001_UpdateWithoutFilteringAttributes", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1001_UpdateWithoutFilteringAttributes : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "territory") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals territory");
            if (context.MessageName.ToLower() != "Update".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            var preEntity = (Entity)context?.PreEntityImages?["PreImage"];
        }
    }

    /// <summary>
    /// DEVKIT1001: Update message with * filtering attributes - should trigger ERROR
    /// </summary>
    // ❌ BAD: Do not use "*" on Update filtering attributes; use explicit column names to avoid unnecessary executions.
    [CrmPluginRegistration("Update", "territory", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "*", "TestAnalyzers.DEVKIT1001_UpdateWithAllAttributes", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class DEVKIT1001_UpdateWithAllAttributes : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "territory") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals territory");
            if (context.MessageName.ToLower() != "Update".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            var preEntity = (Entity)context?.PreEntityImages?["PreImage"];
        }
    }

    #endregion
}
#pragma warning restore
