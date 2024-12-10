using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.CustomAction
{
    [CrmPluginRegistration("devkit_DebugCustomAction", "none", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKit.CustomAction.Postdevkit_DebugCustomActionAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction, DeleteAsyncOperation = true)]
    public class Postdevkit_DebugCustomActionAsynchronous : IPlugin
    {
        /*
        InputParameters:
            InputBoolean             System.Boolean
            InputDateTime            System.DateTime
            InputDecimal             System.Decimal
            InputEntity              Microsoft.Xrm.Sdk.Entity
            InputEntityCollection    Microsoft.Xrm.Sdk.EntityCollection
            InputEntityReference     Microsoft.Xrm.Sdk.EntityReference
            InputFloat               System.Double
            InputInteger             System.Int32
            InputMoney               Microsoft.Xrm.Sdk.Money
            InputPickList            Microsoft.Xrm.Sdk.OptionSetValue
            InputString              System.String
        OutputParameters:
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public Postdevkit_DebugCustomActionAsynchronous(string unSecureConfiguration, string secureConfiguration)
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
            if (context.PrimaryEntityName.ToLower() != "none") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals none");
            if (context.MessageName.ToLower() != "devkit_DebugCustomAction".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals devkit_DebugCustomAction");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            tracing.DebugContext(context);

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
