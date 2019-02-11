using System;
using Microsoft.Xrm.Sdk;
using $DevKitShared$;

namespace $rootnamespace$
{
    [CrmPluginRegistration("$message$", "$logicalname$", StageEnum.$stage_string$, ExecutionModeEnum.$execution$, "",
    "$rootnamespace$.$class$$execution$", 1, IsolationModeEnum.Sandbox,
    Image1Name = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "",
    Image2Name = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "")]
    public class $class$$execution$ : IPlugin
    {
$privateclass$
        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public $class$$execution$(string unsecureString, string secureString)
        //{
        //    if (!string.IsNullOrWhiteSpace(unsecureString)) _unsecureString = unsecureString;
        //    if (!string.IsNullOrWhiteSpace(secureString)) _secureString = secureString;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.$stage_string$) throw new InvalidPluginExecutionException("Stage does not equals $stage_string$");
            if (context.PrimaryEntityName.ToLower() != "$logicalname$".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $logicalname$");
            if (context.MessageName.ToLower() != "$message$".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals $message$");
            if (context.Mode != (int)ExecutionModeEnum.$execution$) throw new InvalidPluginExecutionException("Execution does not equals $execution$");

            //Debugger.Begin(tracing, context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            //Debugger.End(tracing, context);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            //var target = (???)context.InputParameters["Target"];
            //var preEntity = (Entity)context.PreEntityImages["PreImage"];
            //var postEntity = (Entity)context.PostEntityImages["PostImage"];
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}
