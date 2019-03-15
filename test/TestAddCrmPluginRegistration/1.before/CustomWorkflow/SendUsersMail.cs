using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace CustomWorkflow
{
    public class SendUsersMail : BaseCodeActivity
    {
        [Input("List UserIds")]
        [RequiredArgument]
        public InArgument<string> UserIds { get; set; }

        [Input("Email Template Title")]
        [RequiredArgument]
        public InArgument<string> EmailTemplateTitle { get; set; }

        [Input("Record Url")]
        [RequiredArgument]
        public InArgument<string> RecordUrl { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            var workflowContext = executionContext.GetExtension<IWorkflowContext>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, service, tracing);

        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {

        }
    }
}