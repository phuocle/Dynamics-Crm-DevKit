using SunFlower.Shared;
using Microsoft.Xrm.Sdk;

namespace AccountPlugin
{
    [CrmPluginRegistration("Delete", "contact", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "", "AccountPlugin.PreContactDeleteAccount", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Id = "31c7f7b8-2712-ec11-b6e6-000d3a803987", Description = "AccountPlugin.PreDeleteAccount: Delete of contact")]
    [CrmPluginRegistration("Delete", "account", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "", "AccountPlugin.PreAccountDeleteAccount", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Id = "017debcf-6342-e911-a826-000d3a17c443", Description = "AccountPlugin.PreDeleteAccount", UnSecureConfiguration = "AccountPlugin.PreDeleteAccount Configuration")]
    public class PreDeleteAccount : BasePlugin
    {
        public override void Execute(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //YOUR PLUGIN CODE HERE !!!
        }
    }
}