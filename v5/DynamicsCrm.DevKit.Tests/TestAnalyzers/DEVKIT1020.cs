#pragma warning disable

/// <summary>
/// DEVKIT1020: DataProvider DataSource analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1020 only.
/// - Visual Studio Error List should show DEVKIT1020 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1020 is restored.
///
/// Severity Rules:
/// - PluginType.DataProvider without a valid DataSource: ERROR - DataSource is required
/// </summary>
#pragma warning restore DEVKIT1020

using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1020: DataProvider Requires DataSource
    /// The diagnostic appears when CrmPluginRegistration has PluginType.DataProvider but DataSource is empty or missing.
    /// </summary>

    // ❌ BAD: Do not register a DataProvider without DataSource; set DataSource to the configured virtual table data source.
    [CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cds.Retrieve", "Retrieve", PluginType.DataProvider, DataSource = "")]
    public class DEVKIT1020_EmptyDataSource : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // This DataProvider will fail at runtime because DataSource is empty!
            tracing.Trace("DataProvider executed");
        }
    }

    // This is the correct way - DataProvider with valid DataSource
    [CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cds.RetrieveMultiple", "RetrieveMultiple", PluginType.DataProvider, DataSource = "v4_sql_datasource")]
    public class DEVKIT1020_ValidDataSource : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // This DataProvider works correctly because DataSource is specified
            tracing.Trace("DataProvider executed");
        }
    }
}
#pragma warning restore
