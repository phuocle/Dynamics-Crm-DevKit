using Dev.DevKit.Legacy.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;
using System;

namespace Dev.DevKit.Legacy.Package.Plugins.Account
{
    [CrmPluginRegistration("Delete", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKit.Legacy.Package.Plugins.Account.PostAccountDeleteAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*")]
    public class PostAccountDeleteAsynchronousPackage : PluginBase<Entity>, IPlugin
    {
        /*
        InputParameters:
            Target                 Microsoft.Xrm.Sdk.EntityReference - require
            SolutionUniqueName     System.String
            ConcurrencyBehavior    Microsoft.Xrm.Sdk.ConcurrencyBehavior
        OutputParameters:
        */
        public PostAccountDeleteAsynchronousPackage(string unsecure, string secure) : base(unsecure, secure)
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