using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.CustomApi
{
    [CrmPluginRegistration("devkit_CustomApiRequest", "devkit_CustomApi", PluginType.CustomApi)]
    public class devkit_CustomApiRequest : IPlugin
    {
        /*
          InputParameters:
              devkit_InBoolean      System.Boolean - require
              devkit_InDateTime     System.DateTime
              devkit_InDecimal      System.Decimal - require
              devkit_InFloat        System.Double
              devkit_InInteger      System.Int32 - require
              devkit_InMoney        Microsoft.Xrm.Sdk.Money - require
              devkit_InPicklist     Microsoft.Xrm.Sdk.OptionSetValue - require
              devkit_InString       System.String - require
              devkit_InGuid         System.Guid - require
           OutputParameters:
              devkit_OutString      System.String - require
              devkit_OutBoolean     System.Boolean - require
              devkit_OutDateTime    System.DateTime - require
              devkit_OutDecimal     System.Decimal - require
              devkit_OutFloat       System.Double - require
              devkit_OutInteger     System.Int32 - require
              devkit_OutMoney       Microsoft.Xrm.Sdk.Money - require
              devkit_OutPicklist    Microsoft.Xrm.Sdk.OptionSetValue - require
              devkit_OutGuid        System.Guid - require
        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            //tracing.DebugContext(context);

            var outputs = ExecuteCustomApi(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugContext(context);
        }

        private ParameterCollection ExecuteCustomApi(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
