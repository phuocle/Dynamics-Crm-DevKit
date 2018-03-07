using Microsoft.Xrm.Sdk;
using Wooow.Kool.Shared.Entities;
using Wooow.Kool.Shared.Lib;

namespace Wooow.Kool.Plugin
{
    [CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "",
        "Wooow.Kool.Plugin.Account.PreAccountCreateSynchronous", 1, IsolationModeEnum.Sandbox,
        Image1Name = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "",
        Image2Name = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "")]
    public class PreAccountCreateSynchronous : PluginBase
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
        public override void Execute()
        {
            if (Plugin.Context.Stage != (int)StageEnum.PreOperation) throw new InvalidPluginExecutionException("Stage does not equals PreOperation");
            if (Plugin.Context.PrimaryEntityName != "account") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (Plugin.Context.MessageName.ToLower() != "Create".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Create");
            if (Plugin.Context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equal Synchronous");

            var target = (Entity)Plugin.Context.InputParameters["Target"];
            //var preEntity = (Entity)Plugin.Context.PreEntityImages["PreImage"];
            //var postEntity = (Entity)Plugin.Context.PreEntityImages["PostImage"];

            //YOUR PLUGIN-CODE GO HERE
            var account = new Account(target);
            if (account.Name != null)
                account.Name = account.Name.ToUpper();
        }
    }
}