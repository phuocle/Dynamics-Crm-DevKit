using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKitV4.Server.Plugins.Contact.Pre
{
    [CrmPluginRegistration("CreateMultiple", "contact", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKitV4.Server.Plugins.Contact.Pre.PreContactCreateMultipleSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class PreContactCreateMultipleSynchronous : IPlugin
    {
        /*
        InputParameters:
            Targets    Microsoft.Xrm.Sdk.EntityCollection - require
        OutputParameters:
            Ids        System.Guid[] - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PreContactCreateMultipleSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PreOperation)) throw new InvalidPluginExecutionException("Stage does not equals PreOperation");
            if (!string.Equals(context.MessageName, "CreateMultiple", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals CreateMultiple");
            if (!string.Equals(context.PrimaryEntityName, "contact", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Synchronous)) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            //tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var targetEntities = context.InputParameterOrDefault<EntityCollection>("Targets");
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}