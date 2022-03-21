﻿using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.PluginAccount
{
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "name,parentaccountid,accountnumber,statuscode",
    "Dev.DevKit.PluginAccount.PostAccountUpdateAsynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true,
    Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name",
    Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "name,accountnumber")]
    public class PostAccountUpdateAsynchronous : IPlugin
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

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostAccountUpdateAsynchronous(string unsecureString, string secureString)
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
            if (context.MessageName.ToLower() != "Update".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            tracing.DebugMessage("Begin Plugin: Dev.DevKit.PluginAccount.PostAccountUpdateAsynchronous");
            tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            tracing.DebugContext(context);
            tracing.DebugMessage("End Plugin: Dev.DevKit.PluginAccount.PostAccountUpdateAsynchronous");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var target = (Entity)context.InputParameters["Target"];
            var preEntity = (Entity)context.PreEntityImages["PreImage"];
            var postEntity = (Entity)context.PostEntityImages["PostImage"];
            //YOUR PLUGIN-CODE GO HERE

            tracing.DebugMessage(target.ToDebug());
            tracing.DebugMessage(preEntity.ToDebug());
            tracing.DebugMessage(preEntity.ToDebug());

        }
    }
}
