using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.CustomApi
{
    [CrmPluginRegistration("devkit_CustomApi", "none", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "Dev.DevKit.CustomApi.PostNonedevkit_CustomApiSynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
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

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostNonedevkit_CustomApiSynchronous(string unsecureString, string secureString)
        //{
        //    if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
        //    if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "none".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals none");
            if (context.MessageName.ToLower() != "devkit_CustomApi".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals devkit_CustomApi");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugMessage("Begin Custom Action: Dev.DevKit.CustomApi.PostNonedevkit_CustomApiSynchronous");
            //tracing.DebugContext(context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugMessage("End Custom Action: Dev.DevKit.CustomApi.PostNonedevkit_CustomApiSynchronous");
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
