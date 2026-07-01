using Dev.AllInOne.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;
using System;

namespace Dev.AllInOne.Package.Plugins.Account
{
    [CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.AllInOne.Package.Plugins.Account.PostAccountCreateAsynchronousPackage", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PostImage", Image1Alias = "PostImage", Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "*")]
    public class PostAccountCreateAsynchronous : PluginBase<Entity>, IPlugin
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
        public PostAccountCreateAsynchronous(string unsecure, string secure) : base(unsecure, secure)
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