using SunFlower.Shared;
using Microsoft.Xrm.Sdk;

namespace AccountPlugin
{
    [CrmPluginRegistration("Delete", "contact", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "", "AccountPlugin.PreContactDeleteAccount", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Description = "AccountPlugin.PreDeleteAccount: Delete of contact")]
    [CrmPluginRegistration("Delete", "account", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "", "AccountPlugin.PreAccountDeleteAccount", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Description = "AccountPlugin.PreDeleteAccount", UnSecureConfiguration = "AccountPlugin.PreDeleteAccount Configuration")]
    public class PreDeleteAccount : BasePlugin
    {
        public override void Execute(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //YOUR PLUGIN CODE HERE !!!
        }
    }
}