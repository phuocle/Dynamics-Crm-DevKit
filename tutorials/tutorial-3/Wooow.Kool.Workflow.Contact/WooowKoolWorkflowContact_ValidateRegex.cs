using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Wooow.Kool.Shared.Lib;

namespace Wooow.Kool.Workflow
{
    [CrmPluginRegistration("WooowKoolWorkflowContact_ValidateRegex", "WooowKoolWorkflowContact_ValidateRegex", "", "Wooow.Kool.Workflow.Contact", IsolationModeEnum.Sandbox)]
    public class WooowKoolWorkflowContact_ValidateRegex : CodeActivity
    {
        //[Default("Default InputValue"), Input("InputValue")]
        //public InArgument<string> InputValue { get; set; }

        //[Default("Default OutputValue"), Output("OutputValue")]
        //public OutArgument<string> OutputValue { get; set; }

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
            tracing.Trace("Begin Execute Workflow: WooowKoolWorkflowContact_ValidateRegex");

            //Your excute plugin code here

            tracing.Trace("End Execute Workflow: WooowKoolWorkflowContact_ValidateRegex");
        }
    }
}
