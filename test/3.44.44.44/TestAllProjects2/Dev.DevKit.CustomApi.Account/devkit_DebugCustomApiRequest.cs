//CUSTOM API
using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.CustomApi.Account
{
    [CrmPluginRegistration("devkit_DebugCustomApiRequest", "devkit_DebugCustomApi", PluginType.CustomApi)]
    public class devkit_DebugCustomApiRequest : IPlugin
    {
        /*
        InputParameters:
            devkit_InputBoolean             System.Boolean
            devkit_InputDateTime            System.DateTime
            devkit_InputDecimal             System.Decimal
            devkit_InputEntity              Microsoft.Xrm.Sdk.Entity
            devkit_InputEntityCollection    Microsoft.Xrm.Sdk.EntityCollection
            devkit_InputEntityReference     Microsoft.Xrm.Sdk.EntityReference
            devkit_InputFloat               System.Double
            devkit_InputInteger             System.Int32
            devkit_InputMoney               Microsoft.Xrm.Sdk.Money
            devkit_InputPicklist            Microsoft.Xrm.Sdk.OptionSetValue
            devkit_InputString              System.String
            devkit_InputStringArray         System.String[]
            devkit_InputGuid                System.Guid
        OutputParameters:
        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            tracing.DebugContext(context);

            var outputs = ExecuteCustomApi(context, serviceFactory, serviceAdmin, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;
        }

        private ParameterCollection ExecuteCustomApi(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}