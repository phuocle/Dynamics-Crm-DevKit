using SunFlower.Shared;
using System;
using Microsoft.Xrm.Sdk;

namespace AccountPlugin
{
    [CrmPluginRegistration("Delete", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "AccountPlugin.PostDeleteAccount", 1, IsolationModeEnum.Sandbox,
    DeleteAsyncOperation = true, Description = "AccountPlugin.PostDeleteAccount", Action = PluginStepOperationEnum.Deactivate, UnSecureConfiguration = "BB", SecureConfiguration = "AAB", RunAs = "Alan Steiner",
    Image1Name = "Image3", Image1Alias = "Alias3", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "accountnumber,revenue,accountid",
    Image2Name = "Image4", Image2Alias = "Alias5", Image2Type = ImageTypeEnum.PreImage, Image2Attributes = "name",
    Image3Name = "Image1", Image3Alias = "Alias1", Image3Type = ImageTypeEnum.PreImage, Image3Attributes = "accountid,revenue",
    Image4Name = "Image2", Image4Alias = "Alias2", Image4Type = ImageTypeEnum.PreImage, Image4Attributes = "name")]
    public class PostDeleteAccount : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            ExecutePlugin(context, serviceFactory, service, tracing);

        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {

        }
    }
}
