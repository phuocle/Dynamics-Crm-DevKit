using System;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using $PluginSharedNameSpace$;

namespace $PluginNameSpace$
{
    [CrmPluginRegistration("$PluginMessage$", "$PluginLogicalName$", StageEnum.$PluginStage$, ExecutionModeEnum.$PluginExecution$, "", "$PluginNameSpace$.$PluginClass$", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = $PluginDeleteAsyncOperation$)]
    public class $PluginClass$ : IPlugin
    {
        /*
        $PluginComment$
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;

        //public $PluginClass$(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        /*

        PluginSharedNameSpace = $PluginSharedNameSpace$;

        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.$PluginStage$) throw new InvalidPluginExecutionException("Stage does not equals $PluginStage$");
            if (context.PrimaryEntityName.ToLower() != "$PluginLogicalName$") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $PluginLogicalName$");
            if (context.MessageName.ToLower() != "$PluginMessage$".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals $PluginMessage$");
            if (context.Mode != (int)ExecutionModeEnum.$PluginExecution$) throw new InvalidPluginExecutionException("Execution does not equals $PluginExecution$");

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var targetEntity = context.InputParameterOrDefault<???>("???");
            //var preEntity = (Entity)context?.PreEntityImages?["???"];
            //var postEntity = (Entity)context?.PostEntityImages?["???"];
            //YOUR PLUGIN-CODE GO HERE
        }
    }
}