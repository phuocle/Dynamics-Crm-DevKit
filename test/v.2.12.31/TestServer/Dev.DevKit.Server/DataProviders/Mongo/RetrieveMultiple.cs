using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.Query;
using System;
using Dev.DevKit.Shared;

namespace Dev.DevKit.Server.DataProviders.Mongo
{
    [CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Mongo.RetrieveMultiple", "RetrieveMultiple", PluginType.DataProvider, DataSource = "DataSource3")]
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

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public RetrieveMultiple(string unsecureString, string secureString)
        //{
        //    if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
        //    if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var retriever = serviceProvider.Get<IEntityDataSourceRetrieverService>();
            var dataSource = retriever.RetrieveEntityDataSource();

            //tracing.DebugMessage("Begin Data Provider: Dev.DevKit.DataProvider.RetrieveMultiple");
            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing, dataSource);

            //tracing.DebugMessage("End Data Provider: Dev.DevKit.DataProvider.RetrieveMultiple");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            //Get Parameter from DataSource
            //var ??? = dataSource.GetAttributeValue<string>("???");
            //var ??? = dataSource.GetAttributeValue<int>("???");

            var query = context.InputParameters["Query"];
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
                throw new InvalidPluginExecutionException("Somthing wrong with Query");

            context.OutputParameters["BusinessEntityCollection"] = entities;
        }
    }
}
