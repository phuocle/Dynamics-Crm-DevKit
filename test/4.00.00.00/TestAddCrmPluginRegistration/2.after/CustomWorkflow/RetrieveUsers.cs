using SunFlower.Shared;
using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace CustomWorkflow
{
    [CrmPluginRegistration("RetrieveUsers", "RetrieveUsers", "DynamicsCrm.DevKit v.3.44.44.44 - Build: 2024.12.31 23.59.59", "CustomWorkflow", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]
    public class RetrieveUsers : CodeActivity
    {
        [Input("Email Template Title")]
        [RequiredArgument]
        public InArgument<string> EmailTemplateTitle { get; set; }

        [Input("Email Template Title")]
        [RequiredArgument]
        public InArgument<string> EmailTemplateTitle2 { get; set; }



        [Input("Email Template Title")]
        [RequiredArgument]
        public InArgument<string> EmailTemplateTitle4 { get; set; }


        [Output("UserIds")]
        [RequiredArgument]
        public OutArgument<string> UserIds { get; set; }

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