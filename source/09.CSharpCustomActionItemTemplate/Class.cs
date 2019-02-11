using System;
using Microsoft.Xrm.Sdk;
using $DevKitShared$;

namespace $rootnamespace$
{
    [CrmPluginRegistration("$message$", "$logicalname$", StageEnum.$stage_string$, ExecutionModeEnum.$execution$, "",
    "$rootnamespace$.$entityname$.$class$$execution$", 1, IsolationModeEnum.Sandbox)]
    public class $class$$execution$ : IPlugin
    {
$privateclass$
        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public $class$$execution$(string unsecureString, string secureString)
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
            if (context.Stage != (int)StageEnum.$stage_string$) throw new InvalidPluginExecutionException("Stage does not equals $stage_string$");
            if (context.PrimaryEntityName.ToLower() != "$logicalname$".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $logicalname$");
            if (context.MessageName.ToLower() != "$message$".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals $message$");
            if (context.Mode != (int)ExecutionModeEnum.$execution$) throw new InvalidPluginExecutionException("Execution does not equals $execution$");

            //Debugger.Begin(tracing, context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //Debugger.End(tracing, context);
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //var input = (string)context.InputParameters?["input"];
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
