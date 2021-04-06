using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using Abc.LuckyStar2.Shared;

namespace Abc.LuckyStar2.DataProvider
{
    [CrmPluginRegistration("Abc.LuckyStar2.DataProvider.Update", VirtualTablePlugin.Update)]
    public class Update : IPlugin
    {
        /*
          InputParameters:
              Target                             Microsoft.Xrm.Sdk.Entity - require
              SuppressDuplicateDetection         System.Boolean
              CalculateMatchCodeSynchronously    System.Boolean
              SolutionUniqueName                 System.String
              MaintainLegacyAppServerBehavior    System.Boolean
              ConcurrencyBehavior                Microsoft.Xrm.Sdk.ConcurrencyBehavior
              ReturnRowVersion                   System.Boolean
           OutputParameters:
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public Update(string unsecureString, string secureString)
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

            //tracing.DebugMessage("Begin Data Provider: Abc.LuckyStar2.DataProvider.Update");
            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing, dataSource);

            //tracing.DebugMessage("End Data Provider: Abc.LuckyStar2.DataProvider.Update");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            //Get Parameter from DataSource
            //var ??? = dataSource.GetAttributeValue<string>("???");
            //var ??? = dataSource.GetAttributeValue<int>("???");

            var target = context.InputParameterOrDefault<Entity>("Target");

            //YOUR CODE ...

        }
    }
}
