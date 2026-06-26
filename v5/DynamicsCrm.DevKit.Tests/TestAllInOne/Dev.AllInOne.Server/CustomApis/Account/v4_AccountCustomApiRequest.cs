using Dev.AllInOne.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.AllInOne.Server.CustomApis.Account
{
    [CrmPluginRegistration("v4_AccountCustomApiRequest", "v4_AccountCustomApi", PluginType.CustomApi, EntityLogicalName = "account")]
    public class v4_AccountCustomApiRequest : IPlugin
    {
        /*
        InputParameters:
            Target                        Microsoft.Xrm.Sdk.EntityReference - require
            v4_account_request_input      System.String
            v4_account_request_f          System.String - require
        OutputParameters:
            v4_account_response_output    System.String - require
        */

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            if (context.PrimaryEntityName.ToLower() != "account") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            tracing?.DebugContext(context);

            var outputs = ExecuteCustomApi(context, serviceFactory, serviceAdmin, service, tracing);
            foreach (var output in outputs)
                if (context.OutputParameters.Contains(output.Key))
                    context.OutputParameters[output.Key] = output.Value;
        }

        private ParameterCollection ExecuteCustomApi(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            var outputs = new ParameterCollection();
            //YOUR CUSTOM ACTION BEGIN HERE

            return outputs;
        }
    }
}