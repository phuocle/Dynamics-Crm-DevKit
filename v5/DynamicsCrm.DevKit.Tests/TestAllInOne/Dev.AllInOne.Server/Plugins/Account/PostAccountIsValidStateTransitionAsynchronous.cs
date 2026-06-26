using Dev.AllInOne.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.AllInOne.Server.Plugins.Account
{
    [CrmPluginRegistration("IsValidStateTransition", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.AllInOne.Server.Plugins.Account.PostAccountIsValidStateTransitionAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true)]
    public class PostAccountIsValidStateTransitionAsynchronous : IPlugin
    {
        /*
        InputParameters:
            Entity       Microsoft.Xrm.Sdk.EntityReference - require
            NewState     System.String - require
            NewStatus    System.Int32 - require
        OutputParameters:
            IsValid      System.Boolean - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostAccountIsValidStateTransitionAsynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "IsValidStateTransition", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals IsValidStateTransition");
            if (!string.Equals(context.PrimaryEntityName, "account", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Asynchronous)) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {

            //var input = context.InputParameterOrDefault<Entity>("Target");

            //YOUR PLUGIN-CODE GO HERE

        }
    }
}
