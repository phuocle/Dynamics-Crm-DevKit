using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1020: DataProvider Requires DataSource
    /// The diagnostic appears when CrmPluginRegistration has PluginType.DataProvider but DataSource is empty or missing.
    /// </summary>

    // DEVKIT1020: DataProvider with empty DataSource - should trigger error on DataSource
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
