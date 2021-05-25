using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace Dev.DevKit.Workflow
{
    [CrmPluginRegistration("ShareAccountWithTeamMembers", "ShareAccountWithTeamMembers", "", "Dev.DevKit.Workflow", IsolationModeEnum.Sandbox)]
    public class ShareAccountWithTeamMembers : CodeActivity
    {
        //https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/workflow/add-metadata-custom-workflow-activity


        [Input("Account")]
        [ReferenceTarget("account")]
        public InArgument<EntityReference> Account { get; set; }

        [Input("Team")]
        [ReferenceTarget("team")]
        public InArgument<EntityReference> Team { get; set; }

        [Output("IsSucceeded")]
        public OutArgument<bool> IsSucceeded { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            var workflowContext = executionContext.GetExtension<IWorkflowContext>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            //tracing.DebugMessage("Begin Workflow: Dev.DevKit.Workflow.ShareAccountWithTeamMembers");
            //tracing.DebugContext(workflowContext);

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, service, tracing);

            //tracing.DebugMessage("End Workflow: Dev.DevKit.Workflow.ShareAccountWithTeamMembers");
        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //YOUR WORKFLOW-CODE GO HERE

        }
    }
}
