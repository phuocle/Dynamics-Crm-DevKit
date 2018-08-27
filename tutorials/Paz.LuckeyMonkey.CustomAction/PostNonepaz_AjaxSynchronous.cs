using System;
using System.Collections.Generic;
using Microsoft.Xrm.Sdk;
using Paz.LuckeyMonkey.CustomAction.BusinessLogic;
using Paz.LuckeyMonkey.Shared;

namespace Paz.LuckeyMonkey.CustomAction
{
    [CrmPluginRegistration("paz_Ajax", "none", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "",
    "Paz.LuckeyMonkey.CustomAction.None.PostNonepaz_AjaxSynchronous", 1, IsolationModeEnum.Sandbox)]
    public class PostNonepaz_AjaxSynchronous : IPlugin
    {
        /*
          InputParameters:
              function      System.String - require
              jsonInput     System.String
           OutputParameters:
              jsonOutput    System.String - require
        */
        private readonly string _unsecureString = null;
        private readonly string _secureString = null;

        public PostNonepaz_AjaxSynchronous(string unsecureString, string secureString)
        {
            if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
            if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        }

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            if (context == null) throw new InvalidPluginExecutionException("Initialize IPluginExecutionContext fail.");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            if (serviceFactory == null) throw new InvalidPluginExecutionException("Initialize IOrganizationServiceFactory fail.");
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            if (service == null) throw new InvalidPluginExecutionException("Initialize IOrganizationService fail.");
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (tracing == null) throw new InvalidPluginExecutionException("Initialize ITracingService fail.");
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "none".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals none");
            if (context.MessageName.ToLower() != "paz_Ajax".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals paz_Ajax");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            Debugger.Begin(tracing, context);

            var outputs = ExecuteCustomAction(context, serviceFactory, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;

            Debugger.End(tracing, context);
        }

        private ParameterCollection ExecuteCustomAction(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE
            var function = (string)context.InputParameters["function"];
            var jsonInput = (string)context.InputParameters["jsonInput"];
            var @return = string.Empty;
            switch (function)
            {
                case "QualifyLead":
                    var qualifyLead = new QualifyLead();
                    @return = qualifyLead.Do(context, service, tracing, jsonInput);
                    break;
            }
            outputs.Add(new KeyValuePair<string, object>("jsonOutput", @return));
            return outputs;
        }
    }
}