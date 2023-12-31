using FakeXrmEasy.Plugins;
using Microsoft.Xrm.Sdk;

namespace Dev.DevKit.Shared.Test
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
    }
}
