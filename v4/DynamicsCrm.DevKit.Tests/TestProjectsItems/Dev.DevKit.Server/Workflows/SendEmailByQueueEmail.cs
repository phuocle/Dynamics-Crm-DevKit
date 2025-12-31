using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace Dev.DevKit.Server.Workflows
{
    [CrmPluginRegistration("SendEmailByQueueEmail", "SendEmailByQueueEmail", "", "Dev.DevKit.Server.Workflows", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]
    public class SendEmailByQueueEmail : CodeActivity
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
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();

            tracing?.DebugContext(workflowContext);

            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, serviceAdmin, service, tracing);
        }

        public void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var targetEntity = workflowContext.InputParameters["Target"] as Entity;
            //workflowContext.PreEntityImages.TryGetValue("PreBusinessEntity", out Entity preEntity);
            //workflowContext.PostEntityImages.TryGetValue("PostBusinessEntity", out Entity postEntity);
            //YOUR WORKFLOW-CODE GO HERE

        }
    }
}