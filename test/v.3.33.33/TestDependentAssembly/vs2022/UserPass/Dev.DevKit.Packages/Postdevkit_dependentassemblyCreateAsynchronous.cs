using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;

namespace Dev.DevKit.Packages
{
    [CrmPluginRegistration("Create", "devkit_dependentassembly", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKit.Packages.Postdevkit_dependentassemblyCreateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PostImage", Image1Alias = "PostImage", Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "*")]
    public class Postdevkit_dependentassemblyCreateAsynchronous : PluginBase<Entity>, IPlugin
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
        public Postdevkit_dependentassemblyCreateAsynchronous(string unsecure, string secure) : base(unsecure, secure)
        {
        }
        protected override void ExecuteCrmPlugin(IPluginContext<Entity> context)
        {
            //YOUR CODE GO HERE
            throw new InvalidPluginExecutionException("BBB");
        }

    }
}