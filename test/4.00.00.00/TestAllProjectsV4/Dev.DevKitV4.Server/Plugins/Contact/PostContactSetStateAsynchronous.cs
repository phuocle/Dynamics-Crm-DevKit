using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKitV4.Server.Plugins.Contact
{
    [CrmPluginRegistration("SetState", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKitV4.Server.Plugins.Contact.PostContactSetStateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class PostContactSetStateAsynchronous : IPlugin
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
        //public PostContactSetStateAsynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "SetState", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals SetState");
            if (!string.Equals(context.PrimaryEntityName, "contact", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Asynchronous)) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            //tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var ??? = context.InputParameterOrDefault<???>("???");
            context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
            context.PostEntityImages.TryGetValue("PostImage", out Entity postEntity);
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}