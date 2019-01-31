using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.Query;
using MyCompanyName.MyProjectName.Shared;
using System;

namespace MyCompanyName.MyProjectName.DataProvider
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
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var retriever = serviceProvider.Get<IEntityDataSourceRetrieverService>();
            var dataSource = retriever.RetrieveEntityDataSource();

            //Debugger.Begin(tracing, context);

            ExecutePlugin(context, serviceFactory, service, tracing, dataSource);

            //Debugger.End(tracing, context);
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
