using SunFlower.Shared;
using System;
using Microsoft.Xrm.Sdk;

namespace AccountPlugin
{
    [CrmPluginRegistration("Delete", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "AccountPlugin.PostDeleteAccount", 1, IsolationModeEnum.Sandbox,
    DeleteAsyncOperation = true, Description = "AccountPlugin.PostDeleteAccount", UnSecureConfiguration = "BB",
    Image1Name = "Image4", Image1Alias = "Alias5", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name",
    Image2Name = "Image3", Image2Alias = "Alias3", Image2Type = ImageTypeEnum.PreImage, Image2Attributes = "accountnumber,revenue,accountid",
    Image3Name = "Image2", Image3Alias = "Alias2", Image3Type = ImageTypeEnum.PreImage, Image3Attributes = "name",
    Image4Name = "Image1", Image4Alias = "Alias1", Image4Type = ImageTypeEnum.PreImage, Image4Attributes = "accountid,revenue")]
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
