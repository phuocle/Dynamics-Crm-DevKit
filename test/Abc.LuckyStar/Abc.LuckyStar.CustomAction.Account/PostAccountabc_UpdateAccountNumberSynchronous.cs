using System;
using Microsoft.Xrm.Sdk;
using Abc.LuckyStar.Shared;

namespace Abc.LuckyStar.CustomAction.Account
{
    [CrmPluginRegistration("abc_UpdateAccountNumber", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "Abc.LuckyStar.CustomAction.Account.PostAccountabc_UpdateAccountNumberSynchronous", 1, IsolationModeEnum.Sandbox,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PostAccountabc_UpdateAccountNumberSynchronous : IPlugin
    {
        /*
          InputParameters:
              AccountNumber    System.String - require
              Target           Microsoft.Xrm.Sdk.EntityReference - require
           OutputParameters:
              AccountId        Microsoft.Xrm.Sdk.EntityReference - require
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostAccountabc_UpdateAccountNumberSynchronous(string unsecureString, string secureString)
        //{
        //    if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
        //    if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "abc_UpdateAccountNumber".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals abc_UpdateAccountNumber");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugMessage("Begin custom action: Abc.LuckyStar.CustomAction.Account.PostAccountabc_UpdateAccountNumberSynchronous");

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            //tracing.DebugMessage("End custom action: Abc.LuckyStar.CustomAction.Account.PostAccountabc_UpdateAccountNumberSynchronous");
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}
