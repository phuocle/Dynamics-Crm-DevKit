using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKit.PluginAccount
{
    [CrmPluginRegistration("RetrieveSharedPrincipalsAndAccess", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKit.PluginAccount.PostAccountRetrieveSharedPrincipalsAndAccessAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true)]
    public class PostAccountRetrieveSharedPrincipalsAndAccessAsynchronous : IPlugin
    {
        /*
        InputParameters:
            Target               Microsoft.Xrm.Sdk.EntityReference - require
        OutputParameters:
            PrincipalAccesses    Microsoft.Crm.Sdk.Messages.PrincipalAccess[] - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostAccountRetrieveSharedPrincipalsAndAccessAsynchronous(string unSecureConfiguration, string secureConfiguration)
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
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "account") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "RetrieveSharedPrincipalsAndAccess".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals RetrieveSharedPrincipalsAndAccess");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var ??? = context.InputParameterOrDefault<???>("???");
            //var preEntity = (Entity)context?.PreEntityImages?["???"];
            //var postEntity = (Entity)context?.PostEntityImages?["???"];
            //YOUR PLUGIN-CODE GO HERE
        }
    }
}