using System;
using Microsoft.Xrm.Sdk;
using Paz.LuckeyMonkey.Shared;

namespace Paz.LuckeyMonkey.PluginLead
{
    [CrmPluginRegistration("Create", "lead", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "",
    "Paz.LuckeyMonkey.PluginLead.PreLeadCreateSynchronous", 1, IsolationModeEnum.Sandbox,
    Image1Name = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "",
    Image2Name = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "")]
    public class PreLeadCreateSynchronous : IPlugin
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

        //public PreLeadCreateSynchronous(string unsecureString, string secureString)
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
            if (context.Stage != (int)StageEnum.PreOperation) throw new InvalidPluginExecutionException("Stage does not equals PreOperation");
            if (context.PrimaryEntityName.ToLower() != "lead".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals lead");
            if (context.MessageName.ToLower() != "Create".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals Create");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //Debugger.Begin(tracing, context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            //Debugger.End(tracing, context);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //var target = (???)context.InputParameters["Target"];
            //var preEntity = (Entity)context.PreEntityImages["PreImage"];
            //var postEntity = (Entity)context.PostEntityImages["PostImage"];
            //YOUR PLUGIN-CODE GO HERE
            LeadSubjectAlwaysUppercase(context, service, tracing);
        }

        private void LeadSubjectAlwaysUppercase(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing)
        {
            var target = (Entity)context.InputParameters["Target"];
            var lead = new Shared.Entities.Lead(target);
            if (lead.Subject != null)
            {
                lead.Subject = lead.Subject.ToUpper();
            }
        }
    }
}
