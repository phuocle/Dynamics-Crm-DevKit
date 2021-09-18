using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Server.CustomActions.Contact
{
    [CrmPluginRegistration("devkit_SetPrimaryContact", "contact", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "Dev.DevKit.Server.CustomActions.Contact.PostContactdevkit_SetPrimaryContactSynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction)]
    public class PostContactdevkit_SetPrimaryContactSynchronous : IPlugin
    {
        /*
          InputParameters:
              Account    Microsoft.Xrm.Sdk.EntityReference - require
              Target     Microsoft.Xrm.Sdk.EntityReference - require
           OutputParameters:
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;

        //public PostContactdevkit_SetPrimaryContactSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "contact".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");
            if (context.MessageName.ToLower() != "devkit_SetPrimaryContact".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals devkit_SetPrimaryContact");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugContext(context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugContext(context);
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
