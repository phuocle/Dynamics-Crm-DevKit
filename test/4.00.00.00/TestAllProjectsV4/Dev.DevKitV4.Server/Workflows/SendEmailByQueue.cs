using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace Dev.DevKitV4.Server.Workflows
{
    [CrmPluginRegistration("SendEmailByQueue", "SendEmailByQueue", "", "Dev.DevKitV4.Server.Workflows", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]
    public class SendEmailByQueue : CodeActivity
    {
        // https://learn.microsoft.com/en-us/power-apps/developer/data-platform/workflow/workflow-extensions#add-parameters
        // Supported Input/Output types: bool, DateTime, Decimal, Double, EntityReference, int, Money, OptionSetValue, string

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
            var tracing = executionContext.GetExtension<ITracingService>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);

            tracing?.DebugContext(workflowContext);

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