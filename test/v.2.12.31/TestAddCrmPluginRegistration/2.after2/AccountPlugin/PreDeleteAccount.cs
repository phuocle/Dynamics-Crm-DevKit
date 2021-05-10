using SunFlower.Shared;
using Microsoft.Xrm.Sdk;

namespace AccountPlugin
{
    [CrmPluginRegistration("Delete", "account", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "",
    "AccountPlugin.PreDeleteAccount", 1, IsolationModeEnum.Sandbox,
    Description = "AccountPlugin.PreDeleteAccount", UnSecureConfiguration = "AccountPlugin.PreDeleteAccount Configuration",
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PreDeleteAccount : BasePlugin
    {
        public override void Execute(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //YOUR PLUGIN CODE HERE !!!
        }
    }
}