using System;
using Microsoft.Xrm.Sdk;
using SunFlower.Shared;

namespace AccountPlugin
{
    [CrmPluginRegistration("GrantAccess", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "",
    "AccountPlugin.PostAccountGrantAccessAsynchronous", 1, IsolationModeEnum.Sandbox,
    Image1Name = "", Image1Alias = "", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "")]
    public class PostAccountGrantAccessAsynchronous : IPlugin
    {
        /*
          InputParameters:
              Target             Microsoft.Xrm.Sdk.EntityReference - require
              PrincipalAccess    Microsoft.Crm.Sdk.Messages.PrincipalAccess - require
           OutputParameters:
        */
        //private readonly string _unsecureString = null;
        //private readonly string _secureString = null;

        //public PostAccountGrantAccessAsynchronous(string unsecureString, string secureString)
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
            if (context.Stage != (int)StageEnum.PostOperation) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (context.PrimaryEntityName.ToLower() != "account".ToLower()) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (context.MessageName.ToLower() != "GrantAccess".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals GrantAccess");
            if (context.Mode != (int)ExecutionModeEnum.Asynchronous) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");

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
