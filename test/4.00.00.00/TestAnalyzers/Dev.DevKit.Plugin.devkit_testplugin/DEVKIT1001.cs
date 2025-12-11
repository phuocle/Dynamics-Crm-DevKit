using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKit.Plugindevkit_testplugin
{
    [CrmPluginRegistration("UpdateMultiple", "devkit_testplugin", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "", "Dev.DevKit.Plugindevkit_testplugin.PreValidationdevkit_testpluginUpdateMultipleSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    [CrmPluginRegistration("Update", "devkit_testplugin", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "*", "Dev.DevKit.Plugindevkit_testplugin.PreValidationdevkit_testpluginUpdateMultipleSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class PreValidationdevkit_testpluginUpdateMultipleSynchronous : IPlugin
    {
        /*
        InputParameters:
            Targets    Microsoft.Xrm.Sdk.EntityCollection - require
        OutputParameters:
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PreValidationdevkit_testpluginUpdateMultipleSynchronous(string unSecureConfiguration, string secureConfiguration)
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
            if (context.Stage != (int)StageEnum.PreValidation) throw new InvalidPluginExecutionException("Stage does not equals PreValidation");
            if (context.PrimaryEntityName.ToLower() != "devkit_testplugin") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals devkit_testplugin");
            if (context.MessageName.ToLower() != "UpdateMultiple".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals UpdateMultiple");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var targetEntities = context.InputParameterOrDefault<EntityCollection>("Targets");
            //YOUR PLUGIN-CODE GO HERE
        }
    }
}