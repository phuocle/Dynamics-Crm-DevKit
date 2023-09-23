using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;

namespace Dev.DevKit.Packages
{
    [CrmPluginRegistration("Update", "devkit_dependentassembly", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "statuscode", "Dev.DevKit.Packages.Postdevkit_dependentassemblyUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class Postdevkit_dependentassemblyUpdateAsynchronous : PluginBase<Entity>, IPlugin
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
        public Postdevkit_dependentassemblyUpdateAsynchronous(string unsecure, string secure) : base(unsecure, secure)
        {
        }
        protected override void ExecuteCrmPlugin(IPluginContext<Entity> context)
        {
            //YOUR CODE GO HERE
            throw new InvalidPluginExecutionException("UPDATE");
        }
    }
}