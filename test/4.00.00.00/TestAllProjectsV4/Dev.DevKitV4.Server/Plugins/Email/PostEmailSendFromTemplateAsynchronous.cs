using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKitV4.Server.Plugins.Email
{
    /// <summary>
    /// Plugin development guide: https://docs.microsoft.com/powerapps/developer/common-data-service/plug-ins
    /// Best practices and guidance: https://docs.microsoft.com/powerapps/developer/common-data-service/best-practices/business-logic/
    /// </summary>
    [CrmPluginRegistration("SendFromTemplate", "email", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKitV4.Server.Plugins.Email.PostEmailSendFromTemplateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true)]
    public class PostEmailSendFromTemplateAsynchronous : PluginBase
    {
        /*

        */
        public PostEmailSendFromTemplateAsynchronous(string unsecureConfiguration, string secureConfiguration)
            : base(typeof(PostEmailSendFromTemplateAsynchronous))
        {
            // TODO: Implement your custom configuration handling
            // https://docs.microsoft.com/powerapps/developer/common-data-service/register-plug-in#set-configuration-data
        }

        // Entry point for custom business logic execution
        protected override void ExecuteDataversePlugin(ILocalPluginContext localPluginContext)
        {
            if (localPluginContext == null)
            {
                throw new ArgumentNullException(nameof(localPluginContext));
            }
            var context = localPluginContext.PluginExecutionContext;
            localPluginContext.TracingService.DebugContext(context);

            // TODO: Implement your custom business logic
            // Check for the entity on which the plugin would be registered
            //if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
            //{
            //    var entity = (Entity)context.InputParameters["Target"];
            //    // Check for entity name on which this plugin would be registered
            //    if (entity.LogicalName == "email")
            //    {
            //
            //    }
            //}
        }
    }
}
