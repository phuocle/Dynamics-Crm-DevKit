using System.Activities;
using System.Text.RegularExpressions;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Wooow.Kool.Shared.Lib;

namespace Wooow.Kool.Workflow
{
    [CrmPluginRegistration("WooowKoolWorkflowContact_ValidateRegex", "WooowKoolWorkflowContact_ValidateRegex", "", "Wooow.Kool.Workflow.Contact", IsolationModeEnum.Sandbox)]
    public class WooowKoolWorkflowContact_ValidateRegex : CodeActivity
    {
        [Input("String To Validate")]
        public InArgument<string> StringToValidate { get; set; }

        [Input("Match Pattern")]
        public InArgument<string> MatchPattern { get; set; }

        [Output("Valid")]
        public OutArgument<string> Valid { get; set; }


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

            var stringToValidate = StringToValidate.Get(executionContext);
            var matchPattern = MatchPattern.Get(executionContext);
            if (ValidateString(stringToValidate, matchPattern))
            {
                Valid.Set(executionContext, "1");
            }
            else
            {
                Valid.Set(executionContext, "0");
            }

            tracing.Trace("End Execute Workflow: WooowKoolWorkflowContact_ValidateRegex");
        }

        private bool ValidateString(string valString, string matchPattern)
        {
            Match match = Regex.Match(valString, matchPattern, RegexOptions.IgnoreCase);
            return match.Success;
        }
    }
}