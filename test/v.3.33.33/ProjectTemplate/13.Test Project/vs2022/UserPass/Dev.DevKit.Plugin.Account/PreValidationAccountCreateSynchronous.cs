﻿using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKit.PluginAccount
{
    [CrmPluginRegistration("Create", "account", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "", "Dev.DevKit.PluginAccount.PreValidationAccountCreateSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PreValidationAccountCreateSynchronous : IPlugin
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

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;

        //public PreValidationAccountCreateSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PreValidation) throw new InvalidPluginExecutionException("Stage does not equals PreValidation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "Create".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Create");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var targetEntity = context.InputParameterOrDefault<???>("???");
            //var preEntity = (Entity)context?.PreEntityImages?["???"];
            //var postEntity = (Entity)context?.PostEntityImages?["???"];
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}