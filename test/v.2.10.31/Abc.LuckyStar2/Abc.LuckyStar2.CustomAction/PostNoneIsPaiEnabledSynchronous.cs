using System;
using Microsoft.Xrm.Sdk;
using Abc.LuckyStar2.Shared;

namespace Abc.LuckyStar2.CustomAction
{
    [CrmPluginRegistration("IsPaiEnabled", "none", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "Abc.LuckyStar2.CustomAction.PostNoneIsPaiEnabledSynchronous", 1, IsolationModeEnum.Sandbox,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PostNoneIsPaiEnabledSynchronous : IPlugin
    {


        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostNoneIsPaiEnabledSynchronous(string unsecureString, string secureString)
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
            if (context.MessageName.ToLower() != "IsPaiEnabled".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals IsPaiEnabled");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugMessage("Begin Custom Action: Abc.LuckyStar2.CustomAction.PostNoneIsPaiEnabledSynchronous");
            //tracing.DebugContext(context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugMessage("End Custom Action: Abc.LuckyStar2.CustomAction.PostNoneIsPaiEnabledSynchronous");
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
