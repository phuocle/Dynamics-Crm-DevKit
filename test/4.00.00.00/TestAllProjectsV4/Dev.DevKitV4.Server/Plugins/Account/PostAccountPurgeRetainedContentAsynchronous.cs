using Dev.DevKitV4.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;

namespace Dev.DevKitV4.Server.Plugins.Account
{
    [CrmPluginRegistration("PurgeRetainedContent", "account", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "", "Dev.DevKitV4.Server.Plugins.Account.PostAccountPurgeRetainedContentAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, SecureConfiguration = "SecureConfiguration", UnSecureConfiguration = "UnSecureConfiguration")]
    public class PostAccountPurgeRetainedContentAsynchronous : IPlugin
    {
        /*
        InputParameters:
            EntityName               System.String
            PageSize                 System.Int32
            OperationId              System.Guid
            MaxVersionToPurge        System.Int64 - require
        OutputParameters:
            EntityCountCollection    Microsoft.Xrm.Sdk.EntityRecordCountCollection - require
            HasMoreRecords           System.Boolean - require
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostAccountPurgeRetainedContentAsynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "PurgeRetainedContent", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals PurgeRetainedContent");
            if (!string.Equals(context.PrimaryEntityName, "account", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Asynchronous)) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            //tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing)
        {
            //var ??? = context.InputParameterOrDefault<???>("???");
            //YOUR PLUGIN-CODE GO HERE

        }
    }
}