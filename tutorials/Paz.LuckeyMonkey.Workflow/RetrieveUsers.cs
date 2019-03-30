using System.Activities;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Paz.LuckeyMonkey.Shared;
using Paz.LuckeyMonkey.Shared.Entities;

namespace Paz.LuckeyMonkey.Workflow
{
    [CrmPluginRegistration("RetrieveUsers111", "RetrieveUsers111", "BBB", "Paz.LuckeyMonkey.Workflow", IsolationModeEnum.Sandbox)]
    public class RetrieveUsers : CodeActivity
    {
        //https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/workflow/add-metadata-custom-workflow-activity

        [Output("UserIds")]
        [RequiredArgument]
        public OutArgument<string> UserIds { get; set; }

        //[Default("Default OutputValue"), Output("OutputValue")]
        //public OutArgument<string> OutputValue { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            var workflowContext = executionContext.GetExtension<IWorkflowContext>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            //Debugger.Begin(tracing, executionContext);

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, service, tracing);

            //Debugger.Begin(tracing, executionContext);
        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //YOUR CUSTOM-WORKFLOW-CODE GO HERE
            var fetchData = new
            {
                isdefault = "0"
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='systemuser'>
    <attribute name='systemuserid' />
    <link-entity name='teammembership' from='systemuserid' to='systemuserid' visible='false' intersect='true'>
      <link-entity name='team' from='teamid' to='teamid' alias='aa'>
        <filter>
          <condition attribute='isdefault' operator='eq' value='{fetchData.isdefault}'/>
        </filter>
        <link-entity name='teammembership' from='teamid' to='teamid' visible='false' intersect='true'>
          <link-entity name='systemuser' from='systemuserid' to='systemuserid' alias='ab'>
            <filter type='and'>
              <condition attribute='systemuserid' operator='eq-userid' />
            </filter>
          </link-entity>
        </link-entity>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
            var users = service.RetrieveAll<SystemUser>(fetchXml);
            var userIds = string.Join(";",
                users
                .Where(u => u.Id != workflowContext.InitiatingUserId)
                .Select(u => u.Id).Distinct().ToList());
            UserIds.Set(executionContext, userIds);

        }
    }
}