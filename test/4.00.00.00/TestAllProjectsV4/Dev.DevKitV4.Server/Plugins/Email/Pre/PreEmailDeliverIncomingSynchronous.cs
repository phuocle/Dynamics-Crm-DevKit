using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKitV4.Server.Plugins.Email.Pre
{
    [CrmPluginRegistration("DeliverIncoming", "email", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKitV4.Server.Plugins.Email.Pre.PreEmailDeliverIncomingSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*")]
    public class PreEmailDeliverIncomingSynchronous : IPlugin
    {
        /*
        InputParameters:
            MessageId               System.String - require
            Subject                 System.String
            From                    System.String - require
            To                      System.String - require
            Cc                      System.String - require
            Bcc                     System.String - require
            ReceivedOn              System.DateTime - require
            SubmittedBy             System.String - require
            Importance              System.String - require
            Body                    System.String - require
            Attachments             Microsoft.Xrm.Sdk.EntityCollection - require
            ExtraProperties         Microsoft.Xrm.Sdk.Entity
            ValidateBeforeCreate    System.Boolean
        OutputParameters:
            EmailId                 System.Guid - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PreEmailDeliverIncomingSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PreOperation)) throw new InvalidPluginExecutionException("Stage does not equals PreOperation");
            if (!string.Equals(context.MessageName, "DeliverIncoming", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals DeliverIncoming");
            if (!string.Equals(context.PrimaryEntityName, "email", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals email");
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