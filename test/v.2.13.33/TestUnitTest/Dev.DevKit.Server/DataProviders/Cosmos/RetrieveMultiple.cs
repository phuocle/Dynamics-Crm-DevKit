using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.Query;
using System;

namespace Dev.DevKit.Server.DataProviders.Cosmos
{
    [CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cosmos.RetrieveMultiple", "RetrieveMultiple", PluginType.DataProvider, DataSource = "devkit_datasource3")]
    public class RetrieveMultiple : IPlugin
    {
        /*
          InputParameters:
              Query                 Microsoft.Xrm.Sdk.Query.QueryBase - require
              AppModuleId           System.Guid
              IsAppModuleContext    System.Boolean
           OutputParameters:
              EntityCollection      Microsoft.Xrm.Sdk.EntityCollection - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;

        //public RetrieveMultiple(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var retriever = serviceProvider.Get<IEntityDataSourceRetrieverService>();
            var dataSource = retriever.RetrieveEntityDataSource();

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing, dataSource);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            //Get Parameter from DataSource
            //var ??? = dataSource.GetAttributeValue<string>("???");
            //var ??? = dataSource.GetAttributeValue<int>("???");
            //YOUR CODE ...
            var query = context?.InputParameters?["Query"];
            var entities = new EntityCollection();
            entities.EntityName = context.PrimaryEntityName;
            if (query is QueryExpression qe)
            {
                //UCI grid return QueryExpression
            }
            else if (query is FetchExpression fe)
            {
                //Advanced Find, Classic grid return FetchExpression
            }
            else
                throw new InvalidPluginExecutionException("Something wrong with Query");

            context.OutputParameters["BusinessEntityCollection"] = entities;
        }
    }
}
