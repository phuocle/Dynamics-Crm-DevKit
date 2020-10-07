using System;
using Microsoft.Xrm.Sdk;
using Abc.LuckyStar.Shared;

namespace Abc.LuckyStar.PluginAccount
{
    [CrmPluginRegistration("Assign", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "Abc.LuckyStar.PluginAccount.PostAccountAssignAsynchronous", 1, IsolationModeEnum.Sandbox, DeleteAsyncOperation = true,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PostAccountAssignAsynchronous : IPlugin
    {
        /*
          InputParameters:
              Target      Microsoft.Xrm.Sdk.EntityReference - require
              Assignee    Microsoft.Xrm.Sdk.EntityReference - require
           OutputParameters:
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostAccountAssignAsynchronous(string unsecureString, string secureString)
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
            if (context.MessageName.ToLower() != "Assign".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Assign");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            //tracing.DebugMessage($"Begin Plugin: Abc.LuckyStar.PluginAccount.PostAccountAssignAsynchronous with context: {SimpleJson.SerializeObject(context)}");
            tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            //tracing.DebugMessage("End Plugin: Abc.LuckyStar.PluginAccount.PostAccountAssignAsynchronous");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //var target = (???)context.InputParameters["Target"];
            //var preEntity = (Entity)context.PreEntityImages["PreImage"];
            //var postEntity = (Entity)context.PostEntityImages["PostImage"];
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}
