using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;
using System;

namespace Dev.DevKitV4.Package.Contact
{
    [CrmPluginRegistration("Create", "contact", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "Dev.DevKitV4.Package.Contact.PreContactCreateSynchronousPackage", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class PreContactCreateSynchronousPackage : PluginBase<Entity>, IPlugin
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
        public PreContactCreateSynchronousPackage(string unsecure, string secure) : base(unsecure, secure)
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
            Set("jobtitle", "DynamicsCrm.DevKit.v4");
        }
    }
}