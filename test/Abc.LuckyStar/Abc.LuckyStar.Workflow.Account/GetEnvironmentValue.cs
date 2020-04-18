using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Abc.LuckyStar.Shared;

namespace Abc.LuckyStar.Workflow.Account
{
    [CrmPluginRegistration("GetEnvironmentValue", "GetEnvironmentValue", "", "Abc.LuckyStar.Workflow.Account", IsolationModeEnum.Sandbox)]
    public class GetEnvironmentValue : CodeActivity
    {
        //https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/workflow/add-metadata-custom-workflow-activity

        [Input("Account")]
        [ReferenceTarget("account")]
        [RequiredArgument]
        public InArgument<EntityReference> Account { get; set; }

        [Input("Contact")]
        [ReferenceTarget("contact")]
        public InArgument<EntityReference> Contact { get; set; }

        [Output("Is Send Email")]
        public OutArgument<bool> IsSendEmail { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            var workflowContext = executionContext.GetExtension<IWorkflowContext>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            //tracing.DebugMessage("Begin Workflow: Abc.LuckyStar.Workflow.Account.GetEnvironmentValue");

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, service, tracing);

            //tracing.DebugMessage("End Workflow: Abc.LuckyStar.Workflow.Account.GetEnvironmentValue");
        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //YOUR WORKFLOW-CODE GO HERE

        }
    }
}
