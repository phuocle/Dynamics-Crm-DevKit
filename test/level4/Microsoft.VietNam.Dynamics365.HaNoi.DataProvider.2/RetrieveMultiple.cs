using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.VietNam.Dynamics365.HaNoi.Shared;
using System;

namespace Microsoft.VietNam.Dynamics365.HaNoi.DataProvider._2
{
    public class RetrieveMultiple : IPlugin
    {
        /*
          InputParameters:
              Query                 Microsoft.Xrm.Sdk.Query.QueryBase - require
           OutputParameters:
              EntityCollection      Microsoft.Xrm.Sdk.EntityCollection - require
        */
        private readonly string _unsecureString = null;
        private readonly string _secureString = null;

        public RetrieveMultiple(string unsecureString, string secureString)
        {
            if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
            if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        }

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            if (context == null) throw new InvalidPluginExecutionException("Initialize IPluginExecutionContext fail.");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            if (serviceFactory == null) throw new InvalidPluginExecutionException("Initialize IOrganizationServiceFactory fail.");
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            if (service == null) throw new InvalidPluginExecutionException("Initialize IOrganizationService fail.");
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (tracing == null) throw new InvalidPluginExecutionException("Initialize ITracingService fail.");
            var retriever = serviceProvider.Get<IEntityDataSourceRetrieverService>();
            if (retriever == null) throw new InvalidPluginExecutionException("Initialize IEntityDataSourceRetrieverService fail.");
            var dataSource = retriever.RetrieveEntityDataSource();
            if (dataSource == null) throw new InvalidPluginExecutionException("Initialize Entity fail.");
            Debugger.Begin(tracing, context);

            ExecutePlugin(context, serviceFactory, service, tracing, dataSource);

            Debugger.End(tracing, context);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            //Get Parameter from DataSource
            //var ??? = dataSource.GetAttributeValue<string>("???");
            //var ??? = dataSource.GetAttributeValue<int>("???");

            var query = context.InputParameterOrDefault<QueryExpression>("Query");

            var entities = new EntityCollection();

            //YOUR CODE ...

            context.OutputParameters["BusinessEntityCollection"] = entities;
        }
    }
}