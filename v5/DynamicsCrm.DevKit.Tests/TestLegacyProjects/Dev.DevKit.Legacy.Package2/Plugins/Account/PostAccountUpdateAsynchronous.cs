using Dev.DevKit.Legacy.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;
using System;

namespace Dev.DevKit.Legacy.Package2.Plugins.Account
{
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "firstname", "Dev.DevKit.Legacy.Package2.Plugins.Account.PostAccountUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class PostAccountUpdateAsynchronousPackage : PluginBase<Entity>, IPlugin
    {
        /*
        InputParameters:
            Target                             Microsoft.Xrm.Sdk.Entity - require
            SuppressDuplicateDetection         System.Boolean
            CalculateMatchCodeSynchronously    System.Boolean
            SolutionUniqueName                 System.String
            MaintainLegacyAppServerBehavior    System.Boolean
            ConcurrencyBehavior                Microsoft.Xrm.Sdk.ConcurrencyBehavior
            ReturnRowVersion                   System.Boolean
        OutputParameters:
        */
        public PostAccountUpdateAsynchronousPackage(string unsecure, string secure) : base(unsecure, secure)
        {

        }
        protected override void ExecuteCrmPlugin(IPluginContext<Entity> context)
        {
            context.TracingService.DebugContext(context.PluginExecutionContext);
            new AccountOperation(context).Execute();
        }
    }

    public class AccountOperation : OperationBase
    {
        public AccountOperation(ITransactionContext<Entity> context) : base(context)
        {
        }
        protected override void HandleExecute()
        {
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}