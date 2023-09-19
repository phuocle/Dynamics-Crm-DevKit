using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;

namespace Dev.DevKit.Packages
{
    [CrmPluginRegistration("Delete", "devkit_dependentassembly", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKit.Packages.Postdevkit_dependentassemblyDeleteAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*")]
    public class Postdevkit_dependentassemblyDeleteAsynchronous : PluginBase<Entity>, IPlugin
    {
        /*
        InputParameters:
            Target                 Microsoft.Xrm.Sdk.EntityReference - require
            SolutionUniqueName     System.String
            ConcurrencyBehavior    Microsoft.Xrm.Sdk.ConcurrencyBehavior
        OutputParameters:
        */
        public Postdevkit_dependentassemblyDeleteAsynchronous(string unsecure, string secure) : base(unsecure, secure)
        {
        }
        protected override void ExecuteCrmPlugin(IPluginContext<Entity> context)
        {
            //YOUR CODE GO HERE
        }

    }
}