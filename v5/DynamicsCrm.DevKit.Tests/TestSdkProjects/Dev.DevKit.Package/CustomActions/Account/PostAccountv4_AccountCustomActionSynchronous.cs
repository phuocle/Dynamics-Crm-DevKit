using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Package.CustomActions.Account
{
    [CrmPluginRegistration("v4_AccountCustomAction", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKit.Package.CustomActions.Account.PostAccountv4_AccountCustomActionSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction)]
    public class PostAccountv4_AccountCustomActionSynchronous : IPlugin
    {
        /*
        InputParameters:
            f                   System.String - require
            json                System.String
            Target              Microsoft.Xrm.Sdk.EntityReference - require
        OutputParameters:
            output              System.String - require
            EntityReference     Microsoft.Xrm.Sdk.EntityReference - require
            EntityCollection    Microsoft.Xrm.Sdk.EntityCollection - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostAccountv4_AccountCustomActionSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "v4_AccountCustomAction", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals v4_AccountCustomAction");
            if (!string.Equals(context.PrimaryEntityName, "account", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Synchronous)) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            tracing?.DebugContext(context);

            var outputs = ExecuteCustomAction(context, serviceFactory, serviceAdmin, service, tracing);
            foreach (var output in outputs)
            {
                if (context.OutputParameters.Contains(output.Key))
                {
                    context.OutputParameters[output.Key] = output.Value;
                }
            }
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
