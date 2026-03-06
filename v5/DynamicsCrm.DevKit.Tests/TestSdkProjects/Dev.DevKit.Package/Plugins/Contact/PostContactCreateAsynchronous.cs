using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;
using System;

namespace Dev.DevKit.Package.Plugins.Contact
{
    [CrmPluginRegistration("Create", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKit.Package.Plugins.Contact.PostContactCreateAsynchronousPackage", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PostImage", Image1Alias = "PostImage", Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "*")]
    public class PostContactCreateAsynchronousPackage : PluginBase<Entity>, IPlugin
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
        public PostContactCreateAsynchronousPackage(string unsecure, string secure) : base(unsecure, secure)
        {

        }
        protected override void ExecuteCrmPlugin(IPluginContext<Entity> context)
        {
            context.TracingService.DebugContext(context.PluginExecutionContext);
            new ContactOperation(context).Execute();
        }
    }

    public class ContactOperation : OperationBase
    {
        public ContactOperation(ITransactionContext<Entity> context) : base(context)
        {
        }
        protected override void HandleExecute()
        {
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}