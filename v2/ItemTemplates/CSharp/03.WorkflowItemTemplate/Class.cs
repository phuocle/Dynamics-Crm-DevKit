using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using $SharedNameSpace$;

namespace $NameSpace$
{
    [CrmPluginRegistration("$class$", "$class$", "", "$rootnamespace$", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]
    public class $class$ : CodeActivity
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
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            //tracing.DebugContext(workflowContext);

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //YOUR WORKFLOW-CODE GO HERE

        }
    }
}
