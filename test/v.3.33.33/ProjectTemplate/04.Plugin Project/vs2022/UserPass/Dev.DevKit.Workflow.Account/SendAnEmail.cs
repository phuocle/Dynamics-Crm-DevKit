using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace Dev.DevKit.Workflow.Account
{
    [CrmPluginRegistration("SendAnEmail", "SendAnEmail", "", "Dev.DevKit.Workflow.Account", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]
    public class SendAnEmail : CodeActivity
    {
        //https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/workflow/add-metadata-custom-workflow-activity
        //Supported Input/Output types: bool, DateTime,	Decimal, Double, EntityReference, int, Money, OptionSetValue, string

        //[Default("Default Input Value")]
        //[Input("Input Value")]
        //[ReferenceTarget("account")]
        //[RequiredArgument]
        //[AttributeTarget("account", "industrycode")]
        //public InArgument<EntityReference> InputValue { get; set; }

        //[Default("Default Output Value")]
        //[Output("Output Value")]
        //public OutArgument<string> OutputValue { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            var workflowContext = executionContext.GetExtension<IWorkflowContext>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            //tracing.DebugContext(workflowContext);

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var preEntity = (Entity)workflowContext?.PreEntityImages?["PreBusinessEntity"];
            //var postEntity = (Entity)workflowContext?.PostEntityImages?["PostBusinessEntity"];
            //YOUR WORKFLOW-CODE GO HERE

        }
    }
}