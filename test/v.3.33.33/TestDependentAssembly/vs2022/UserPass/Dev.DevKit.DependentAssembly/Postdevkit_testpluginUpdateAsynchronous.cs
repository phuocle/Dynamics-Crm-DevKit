using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;

namespace Dev.DevKit.DependentAssembly
{
    [CrmPluginRegistration("Update", "devkit_testplugin", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "statuscode", "Dev.DevKit.DependentAssembly.Postdevkit_testpluginUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class Postdevkit_testpluginUpdateAsynchronous : PluginBase<Entity>, IPlugin
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
        public Postdevkit_testpluginUpdateAsynchronous(string unsecure, string secure) : base(unsecure, secure)
        {
        }
        protected override void ExecuteCrmPlugin(IPluginContext<Entity> context)
        {
            //YOUR CODE GO HERE
            new Execute___Postdevkit_testpluginUpdateAsynchronous(context).Execute();
        }
    }

    public class Execute___Postdevkit_testpluginUpdateAsynchronous : OperationBase
    {
        public Execute___Postdevkit_testpluginUpdateAsynchronous(ITransactionContext<Entity> context) : base(context)
        {
        }
        protected override void HandleExecute()
        {
            throw new InvalidPluginExecutionException("AA");
        }
    }
}