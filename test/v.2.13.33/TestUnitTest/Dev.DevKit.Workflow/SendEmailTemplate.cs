using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace Dev.DevKit.Workflow
{
    [CrmPluginRegistration("SendEmailTemplate", "SendEmailTemplate", "", "Dev.DevKit.Workflow", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]
    public class SendEmailTemplate : CodeActivity
    {
        //https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/workflow/add-metadata-custom-workflow-activity

        [Input("Email Template")]
        [ReferenceTarget("template")]
        public InArgument<EntityReference> EmailTemplate { get; set; }

        //[Default("Default OutputValue"), Output("OutputValue")]
        //public OutArgument<string> OutputValue { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            var workflowContext = executionContext.GetExtension<IWorkflowContext>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            tracing.DebugMessage("Begin Workflow: Dev.DevKit.Workflow.SendEmailTemplate");
            tracing.DebugContext(workflowContext);

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, service, tracing);

            tracing.DebugMessage("End Workflow: Dev.DevKit.Workflow.SendEmailTemplate");
        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //YOUR WORKFLOW-CODE GO HERE

        }
    }
}
