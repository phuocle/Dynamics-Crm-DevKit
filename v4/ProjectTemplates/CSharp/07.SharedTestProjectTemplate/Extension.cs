using FakeXrmEasy.Plugins;
using Microsoft.Xrm.Sdk;

namespace $NameSpace$
{
    public static class Extension
    {
        public static void SetXrmFakedContextPlugin(this XrmFakedPluginExecutionContext plugin, RemoteExecutionContext remote)
        {
            plugin.UserId = remote.UserId;
            plugin.SharedVariables = remote.SharedVariables;
            plugin.SecondaryEntityName = remote.SecondaryEntityName;
            plugin.RequestId = remote.RequestId;
            plugin.PrimaryEntityName = remote.PrimaryEntityName;
            plugin.PrimaryEntityId = remote.PrimaryEntityId;
            plugin.PreEntityImages = remote.PreEntityImages;
            plugin.PostEntityImages = remote.PostEntityImages;
            plugin.OwningExtension = remote.OwningExtension;
            plugin.OutputParameters = remote.OutputParameters;
            plugin.OrganizationName = remote.OrganizationName;
            plugin.OrganizationId = remote.OrganizationId;
            plugin.OperationId = remote.OperationId;
            plugin.OperationCreatedOn = remote.OperationCreatedOn;
            plugin.Mode = remote.Mode;
            plugin.MessageName = remote.MessageName;
            plugin.IsolationMode = remote.IsolationMode;
            plugin.IsOfflinePlayback = remote.IsOfflinePlayback;
            plugin.IsInTransaction = remote.IsInTransaction;
            plugin.IsExecutingOffline = remote.IsExecutingOffline;
            plugin.InputParameters = remote.InputParameters;
            plugin.InitiatingUserId = remote.InitiatingUserId;
            plugin.Depth = remote.Depth;
            plugin.CorrelationId = remote.CorrelationId;
            plugin.BusinessUnitId = remote.BusinessUnitId;
            plugin.ParentContext = remote.ParentContext;
            plugin.Stage = remote.Stage;
        }

        public static void SetXrmFakedContextWorkflow(this XrmFakedWorkflowContext workflow, RemoteExecutionContext remote)
        {
            workflow.UserId = remote.UserId;
            workflow.SharedVariables = remote.SharedVariables;
            workflow.SecondaryEntityName = remote.SecondaryEntityName;
            workflow.RequestId = remote.RequestId;
            workflow.PrimaryEntityName = remote.PrimaryEntityName;
            workflow.PrimaryEntityId = remote.PrimaryEntityId;
            workflow.PreEntityImages = remote.PreEntityImages;
            workflow.PostEntityImages = remote.PostEntityImages;
            workflow.OwningExtension = remote.OwningExtension;
            workflow.OutputParameters = remote.OutputParameters;
            workflow.OrganizationName = remote.OrganizationName;
            workflow.OrganizationId = remote.OrganizationId;
            workflow.OperationId = remote.OperationId;
            workflow.OperationCreatedOn = remote.OperationCreatedOn;
            workflow.Mode = remote.Mode;
            workflow.MessageName = remote.MessageName;
            workflow.IsolationMode = remote.IsolationMode;
            workflow.IsOfflinePlayback = remote.IsOfflinePlayback;
            workflow.IsInTransaction = remote.IsInTransaction;
            workflow.IsExecutingOffline = remote.IsExecutingOffline;
            workflow.InputParameters = remote.InputParameters;
            workflow.InitiatingUserId = remote.InitiatingUserId;
            workflow.Depth = remote.Depth;
            workflow.CorrelationId = remote.CorrelationId;
            workflow.BusinessUnitId = remote.BusinessUnitId;
        }
    }
}
