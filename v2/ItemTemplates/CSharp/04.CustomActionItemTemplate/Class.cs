using System;
using Microsoft.Xrm.Sdk;
using $SharedNameSpace$;

namespace $NameSpace$
{
    [CrmPluginRegistration("$PluginMessage$", "$PluginLogicalName$", StageEnum.$PluginStage$, ExecutionModeEnum.$PluginExecution$, "",
    "$NameSpace$.$PluginClass$$PluginOrder2$", $PluginOrder$/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.CustomAction,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class $PluginClass$$PluginOrder2$ : IPlugin
    {
$PluginComment$

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public $PluginClass$(string unsecureString, string secureString)
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
            if (context.Stage != (int)StageEnum.$PluginStage$) throw new InvalidPluginExecutionException("Stage does not equals $PluginStage$");
            if (context.PrimaryEntityName.ToLower() != "$PluginLogicalName$".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $PluginLogicalName$");
            if (context.MessageName.ToLower() != "$PluginMessage$".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals $PluginMessage$");
            if (context.Mode != (int)ExecutionModeEnum.$PluginExecution$) throw new InvalidPluginExecutionException("Execution does not equals $PluginExecution$");

            //tracing.DebugMessage("Begin Custom Action: $NameSpace$.$PluginClass$$PluginOrder2$");
            //tracing.DebugContext(context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugMessage("End Custom Action: $NameSpace$.$PluginClass$$PluginOrder2$");
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
