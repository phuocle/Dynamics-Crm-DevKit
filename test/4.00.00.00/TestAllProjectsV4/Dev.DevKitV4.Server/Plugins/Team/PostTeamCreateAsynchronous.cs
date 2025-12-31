using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKitV4.Server.Plugins.Team
{
    /// <summary>
    /// Plugin development guide: https://docs.microsoft.com/powerapps/developer/common-data-service/plug-ins
    /// Best practices and guidance: https://docs.microsoft.com/powerapps/developer/common-data-service/best-practices/business-logic/
    /// </summary>
    [CrmPluginRegistration("Create", "team", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKitV4.Server.Plugins.Team.PostTeamCreateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PostImage", Image1Alias = "PostImage", Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "name")]
    public class PostTeamCreateAsynchronous : PluginBase
    {
        /*
        InputParameters:
            Target                             Microsoft.Xrm.Sdk.Entity - require
            SuppressDuplicateDetection         System.Boolean
            CalculateMatchCodeSynchronously    System.Boolean
            SolutionUniqueName                 System.String
            MaintainLegacyAppServerBehavior    System.Boolean
            ReturnRowVersion                   System.Boolean
        OutputParameters:
            id                                 System.Guid - require
        */
        public PostTeamCreateAsynchronous(string unsecureConfiguration, string secureConfiguration)
            : base(typeof(PostTeamCreateAsynchronous))
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
            //    if (entity.LogicalName == "team")
            //    {
            //
            //    }
            //}
        }
    }
}
