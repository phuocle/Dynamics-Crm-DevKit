using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKitV4.Server.Plugins.Contact.Pre
{
    [CrmPluginRegistration("SetState", "contact", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKitV4.Server.Plugins.Contact.Pre.PreContactSetStateSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*")]
    public class PreContactSetStateSynchronous : IPlugin
    {
        /*
        InputParameters:
            EntityMoniker                      Microsoft.Xrm.Sdk.EntityReference - require
            State                              Microsoft.Xrm.Sdk.OptionSetValue - require
            Status                             Microsoft.Xrm.Sdk.OptionSetValue - require
            MaintainLegacyAppServerBehavior    System.Boolean
        OutputParameters:
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PreContactSetStateSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PreOperation)) throw new InvalidPluginExecutionException("Stage does not equals PreOperation");
            if (!string.Equals(context.MessageName, "SetState", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals SetState");
            if (!string.Equals(context.PrimaryEntityName, "contact", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Synchronous)) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var ??? = context.InputParameterOrDefault<???>("???");
            context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}