using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKit.PluginTeam
{
    [CrmPluginRegistration("AddMembers", "team", StageEnum.PreValidation, ExecutionModeEnum.Synchronous, "", "Dev.DevKit.PluginTeam.PreValidationTeamAddMembersSynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class PreValidationTeamAddMembersSynchronous : IPlugin
    {
        /*
        InputParameters:
            TeamId       System.Guid - require
            MemberIds    System.Guid[] - require
        OutputParameters:
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PreValidationTeamAddMembersSynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.Stage != (int)StageEnum.PreValidation) throw new InvalidPluginExecutionException("Stage does not equals PreValidation");
            if (context.PrimaryEntityName.ToLower() != "team") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals team");
            if (context.MessageName.ToLower() != "AddMembers".ToLower()) throw new InvalidPluginExecutionException("MessageName does not equals AddMembers");
            if (context.Mode != (int)ExecutionModeEnum.Synchronous) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");

            //tracing.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var ??? = context.InputParameterOrDefault<???>("???");
            //YOUR PLUGIN-CODE GO HERE
        }
    }
}