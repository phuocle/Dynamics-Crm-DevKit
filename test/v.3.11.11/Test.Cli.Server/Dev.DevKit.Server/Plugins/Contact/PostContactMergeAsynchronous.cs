﻿using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Server.Plugins.Contact
{
    [CrmPluginRegistration("Merge", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "Dev.DevKit.Server.Plugins.Contact.PostContactMergeAsynchronous", 1/*ExecutionOrder*/, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true,
    Image1Name = "PostImage", Image1Alias = "PostImage", Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "firstname",
    Image2Name = "PreImage", Image2Alias = "PreImage", Image2Type = ImageTypeEnum.PreImage, Image2Attributes = "firstname")]
    public class PostContactMergeAsynchronous : IPlugin
    {
        /*
          InputParameters:
              Target                    Microsoft.Xrm.Sdk.EntityReference - require
              SubordinateId             System.Guid - require
              UpdateContent             Microsoft.Xrm.Sdk.Entity - require
              PerformParentingChecks    System.Boolean - require
           OutputParameters:
        */

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostContactMergeAsynchronous(string unsecureString, string secureString)
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
            if (context.PrimaryEntityName.ToLower() != "contact".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");
            if (context.MessageName.ToLower() != "Merge".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Merge");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            tracing.DebugMessage("Begin Plugin: Dev.DevKit.Server.Plugins.Contact.PostContactMergeAsynchronous");
            tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            tracing.DebugMessage("End Plugin: Dev.DevKit.Server.Plugins.Contact.PostContactMergeAsynchronous");
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
