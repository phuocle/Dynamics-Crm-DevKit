using SunFlower.Shared;
using System;
using Microsoft.Xrm.Sdk;

namespace AccountPlugin
{
    [CrmPluginRegistration("Delete", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "AccountPlugin.PostDeleteAccount", 1, IsolationModeEnum.Sandbox,
    DeleteAsyncOperation = false, Description = "AccountPlugin.PostDeleteAccount", Action = PluginStepOperationEnum.Deactivate, SecureConfiguration = "AA", UnSecureConfiguration = "BB",
    Image1Name = "Image1", Image1Alias = "Alias1", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "accountid,revenue",
    Image2Name = "Image2", Image2Alias = "Alias2", Image2Type = ImageTypeEnum.PreImage, Image2Attributes = "name,revenue",
    Image3Name = "Image3", Image3Alias = "Alias3", Image3Type = ImageTypeEnum.PreImage, Image3Attributes = "accountnumber,revenue,accountid",
    Image4Name = "Image4", Image4Alias = "Alias5", Image4Type = ImageTypeEnum.PreImage, Image4Attributes = "")]
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
