using Microsoft.Xrm.Sdk;
using System.Collections.Generic;
using Wooow.Kool.Shared.Entities;
using Wooow.Kool.Shared.Lib;

namespace Wooow.Kool.CustomAction
{
    [CrmPluginRegistration("wo_AnnualRevenue", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "Wooow.Kool.CustomAction.Account.PostAccountwo_AnnualRevenueSynchronous", 1, IsolationModeEnum.Sandbox)]
    public class PostAccountwo_AnnualRevenueSynchronous : PluginBase
    {
        /*
          InputParameters:
              AccountNumber    System.String - require
              Target           Microsoft.Xrm.Sdk.EntityReference - require
           OutputParameters:
              AnnualRevenue    System.Decimal - require
        */
        public override void Execute()
        {
            if (Plugin.Context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (Plugin.Context.PrimaryEntityName != "account") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (Plugin.Context.MessageName.ToLower() != "wo_AnnualRevenue".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals wo_AnnualRevenue");
            if (Plugin.Context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equal Synchronous");
            var outputs = ExecuteCustomAction();
            foreach (var output in outputs)
                if (Plugin.Context.OutputParameters.Contains(output.Key))
                    Plugin.Context.OutputParameters[output.Key] = output.Value;
        }

        private ParameterCollection ExecuteCustomAction()
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE
            var target = (EntityReference)Plugin.Context.InputParameters["Target"];
            var accountNumber = (string)Plugin.Context.InputParameters["AccountNumber"];
            /*
            Your code here to connect Finance System with target, accountNumber data.
            This case the result always return value: 12345
            */
            var annualRevenue = 12345;
            //Update Annual Revenue data to Account
            var account = new Account(target.Id);
            account.Revenue = annualRevenue;
            Plugin.Service.Update(account.GetUpdateEntity());
            //Return data to Custom Action
            outputs.Add(new KeyValuePair<string, object>("AnnualRevenue", annualRevenue));
            return outputs;
        }
    }
}