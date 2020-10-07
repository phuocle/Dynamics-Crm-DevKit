using System;
using Microsoft.Xrm.Sdk;
using $SharedNameSpace$;

namespace $NameSpacePlugin$
{
    [CrmPluginRegistration("$PluginMessage$", "$PluginLogicalName$", StageEnum.$PluginStage$, ExecutionModeEnum.$PluginExecution$, "",
    "$NameSpacePlugin$.$PluginClass$$PluginOrder2$", $PluginOrder$, IsolationModeEnum.Sandbox, $if$($PluginExecutionInt$==1)DeleteAsyncOperation = true,$endif$
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class $PluginClass$$PluginOrder2$ : IPlugin
    {
$PluginComment$

        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public $PluginClass$(string unsecureString, string secureString)
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
            if (context.Stage != (int)StageEnum.$PluginStage$) throw new InvalidPluginExecutionException("Stage does not equals $PluginStage$");
            if (context.PrimaryEntityName.ToLower() != "$PluginLogicalName$".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals $PluginLogicalName$");
            if (context.MessageName.ToLower() != "$PluginMessage$".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals $PluginMessage$");
            if (context.Mode != (int)ExecutionModeEnum.$PluginExecution$) throw new InvalidPluginExecutionException("Execution does not equals $PluginExecution$");

            //tracing.DebugMessage("Begin Plugin: $NameSpacePlugin$.$PluginClass$$PluginOrder2$");
            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, service, tracing);

            //tracing.DebugMessage("End Plugin: $NameSpacePlugin$.$PluginClass$$PluginOrder2$");
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
