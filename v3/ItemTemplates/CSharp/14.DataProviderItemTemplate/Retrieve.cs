using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using $SharedNameSpace$;

namespace $NameSpace$
{
    [CrmPluginRegistration("$NameSpace$.Retrieve", "Retrieve", PluginType.DataProvider, DataSource = "$DataSource$")]
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

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;

        //public Retrieve(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var retriever = serviceProvider.Get<IEntityDataSourceRetrieverService>();
            var dataSource = retriever.RetrieveEntityDataSource();

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing, dataSource);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Entity dataSource)
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
