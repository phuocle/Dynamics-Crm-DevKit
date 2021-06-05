using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using Dev.DevKit.Shared;

namespace Dev.DevKit.Server.DataProviders.Cosmos
{
    [CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cosmos.Retrieve", "Retrieve", PluginType.DataProvider, DataSource = "devkit_datasource3")]
    public class Retrieve : IPlugin
    {
        /*
          InputParameters:
              Target                  Microsoft.Xrm.Sdk.EntityReference - require
              ColumnSet               Microsoft.Xrm.Sdk.Query.ColumnSet - require
              RelatedEntitiesQuery    Microsoft.Xrm.Sdk.RelationshipQueryCollection
              ReturnNotifications     System.Boolean
           OutputParameters:
              Entity                  Microsoft.Xrm.Sdk.Entity - require
              Notifications            - require
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public Retrieve(string unsecureString, string secureString)
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

            //tracing.DebugMessage("Begin Data Provider: Dev.DevKit.DataProvider.Retrieve");
            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing, dataSource);

            //tracing.DebugMessage("End Data Provider: Dev.DevKit.DataProvider.Retrieve");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            //Get Parameter from DataSource
            //var ??? = dataSource.GetAttributeValue<string>("???");
            //var ??? = dataSource.GetAttributeValue<int>("???");

            var target = context.InputParameterOrDefault<EntityReference>("Target");
            var entity = new Entity("???", target.Id);

            //YOUR CODE ...

            context.OutputParameters["BusinessEntity"] = entity;
        }
    }
}
