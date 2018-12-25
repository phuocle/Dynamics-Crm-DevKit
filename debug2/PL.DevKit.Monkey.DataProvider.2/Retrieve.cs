using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using PL.DevKit.Monkey.Shared;
using System;

namespace PL.DevKit.Monkey.DataProvider._2
{
    public class Retrieve : IPlugin
    {
        /*
          InputParameters:
              Target                  Microsoft.Xrm.Sdk.EntityReference - require
              ColumnSet               Microsoft.Xrm.Sdk.Query.ColumnSet - require
           OutputParameters:
              Entity                  Microsoft.Xrm.Sdk.Entity - require
        */
        private readonly string _unsecureString = null;
        private readonly string _secureString = null;

        public Retrieve(string unsecureString, string secureString)
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

            var target = context.InputParameterOrDefault<EntityReference>("Target");

            var entity = new Entity("???", target.Id);

            //YOUR CODE ...

            context.OutputParameters["BusinessEntity"] = entity;
        }
    }
}