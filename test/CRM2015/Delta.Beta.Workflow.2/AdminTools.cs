using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Delta.Beta.Shared;

namespace Delta.Beta.Workflow._2
{
    [CrmPluginRegistration("AdminTools", "AdminTools", "", "Delta.Beta.Workflow._2", IsolationModeEnum.Sandbox)]
    public class AdminTools : CodeActivity
    {
        //https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/workflow/add-metadata-custom-workflow-activity

        //[Default("Default Value")]
        //[Input("Input Value")]
        //[ReferenceTarget("account")]
        //public InArgument<EntityReference> InputValue { get; set; }

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
            //YOUR WORKFLOW-CODE GO HERE

        }
    }
}