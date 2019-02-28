using System;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Paz.LuckeyMonkey.Shared;

namespace Paz.LuckeyMonkey.PluginAccount
{
    [CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "",
    "Paz.LuckeyMonkey.PluginAccount.PreAccountCreateSynchronous", 1, IsolationModeEnum.Sandbox,
    Image1Name = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "",
    Image2Name = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "")]
    public class PreAccountCreateSynchronous : IPlugin
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

        //public PreAccountCreateSynchronous(string unsecureString, string secureString)
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
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
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
            WhenALeadQualify(context, serviceFactory, service, tracing);
        }

        private void WhenALeadQualify(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            var target = (Entity)context.InputParameters["Target"];
            var account = new Shared.Entities.Account(target);//Bind account entity to Account Strong Type Late Bound by PL.DynamicsCrm.DevKit
            if (account.OriginatingLeadId != null) //check this field to make sure Account created by Qualify Lead
            {
                //Reading mapping Lead fields
                var fetchData = new
                {
                    leadid = account.OriginatingLeadId.Id
                };
                var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='lead'>
    <attribute name='leadid'/>
    <attribute name='paz_field3'/>
    <attribute name='paz_field2'/>
    <attribute name='paz_field1'/>
    <filter type='and'>
      <condition attribute='leadid' operator='eq' value='{fetchData.leadid}'/>
    </filter>
  </entity>
</fetch>
";
                var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count == 0) return;//Lead not found
                var lead = new Shared.Entities.Lead(rows.Entities[0]);//Bind lead entity to Lead Strong Type Late Bound by PL.DynamicsCrm.DevKit
                account.paz_Field1 = lead.paz_Field1;
                account.paz_Field2 = lead.paz_Field2;
                account.paz_Field3 = lead.paz_Field3;
            }
        }
    }
}
