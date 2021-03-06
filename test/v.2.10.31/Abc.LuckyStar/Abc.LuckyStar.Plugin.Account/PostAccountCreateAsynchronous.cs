﻿using System;
using Microsoft.Xrm.Sdk;
using Abc.LuckyStar.Shared;
using Abc.LuckyStar.Shared.Entities;

namespace Abc.LuckyStar.PluginAccount
{
    [CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "Abc.LuckyStar.PluginAccount.PostAccountCreateAsynchronous", 1, IsolationModeEnum.Sandbox, DeleteAsyncOperation = true,
    Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "name,telephone1,fax")]
    public class PostAccountCreateAsynchronous : IPlugin
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

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostAccountCreateAsynchronous(string unsecureString, string secureString)
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
            if (context.MessageName.ToLower() != "Create".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Create");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

            //tracing.DebugMessage("Begin Plugin: Abc.LuckyStar.PluginAccount.PostAccountCreateAsynchronous");
            tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            //tracing.DebugMessage("End Plugin: Abc.LuckyStar.PluginAccount.PostAccountCreateAsynchronous");
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var target = (Entity)context.InputParameters["Target"];
            //var preEntity = (Entity)context.PreEntityImages["PreImage"];
            //var postEntity = (Entity)context.PostEntityImages["PostImage"];
            //YOUR PLUGIN-CODE GO HERE
            var account = new Account(target);
            if (account.Telephone1 == null) return;
            var update = new Account(account.Id)
            {
                Fax = account.Telephone1
            };
            service.Update(account.GetUpdateEntity());
        }
    }
}
