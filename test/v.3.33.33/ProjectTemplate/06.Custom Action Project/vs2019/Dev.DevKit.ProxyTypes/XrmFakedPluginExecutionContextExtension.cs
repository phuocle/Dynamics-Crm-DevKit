using FakeXrmEasy;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hs.Vus.Shared.Test.Lib
{
    [System.Diagnostics.DebuggerNonUserCode()]
    public static class XrmFakedPluginExecutionContextExtension
    {
        public static ParameterCollection ToParameterCollection(this Dictionary<string, object> values)
        {
            if (values == null) return null;
            var collection = new ParameterCollection();
            foreach (var value in values)
                collection.Add(value.Key, values[value.Key]);
            return collection;
        }

        public static EntityImageCollection ToEntityImageCollection(this Dictionary<string, object> values)
        {
            if (values == null) return null;
            var collection = new EntityImageCollection();
            foreach (var value in values)
                collection.Add(value.Key, (Entity)values[value.Key]);
            return collection;
        }
        public static EntityReference ToEntityReference(this DebugEntityReference value)
        {
            if (value == null) return null;
            return new EntityReference
            {
                Id = value.EntityReferenceId.Value,
                LogicalName = value.LogicalName
            };
        }

        public static void SetDebugContext(this XrmFakedPluginExecutionContext Plugin, DebugContext debugContext)
        {
            var defaultDateTime = new DateTime(2000, 1, 1, 0, 0, 0, 0);
            Plugin.BusinessUnitId = debugContext.BusinessUnitId ?? Guid.Empty;
            Plugin.CorrelationId = debugContext.CorrelationId ?? Guid.Empty;
            Plugin.Depth = debugContext.Depth ?? -1;
            Plugin.InitiatingUserId = debugContext.InitiatingUserId ?? Guid.Empty;
            Plugin.InputParameters = debugContext.InputParameters.ToParameterCollection();
            Plugin.IsExecutingOffline = debugContext.IsExecutingOffline ?? false;
            Plugin.IsInTransaction = debugContext.IsInTransaction ?? false;
            Plugin.IsOfflinePlayback = debugContext.IsOfflinePlayback ?? false;
            Plugin.IsolationMode = debugContext.IsolationMode ?? -1;
            Plugin.MessageName = debugContext.MessageName;
            Plugin.Mode = debugContext.Mode ?? -1;
            Plugin.OperationCreatedOn = debugContext.OperationCreatedOn ?? defaultDateTime;
            Plugin.OperationId = debugContext.OperationId ?? Guid.Empty;
            Plugin.OrganizationId = debugContext.OrganizationId ?? Guid.Empty;
            Plugin.OrganizationName = debugContext.OrganizationName;
            Plugin.OutputParameters = debugContext.OutputParameters.ToParameterCollection();
            Plugin.OwningExtension = debugContext.OwningExtension.ToEntityReference();
            Plugin.PostEntityImages = debugContext.PostEntityImages.ToEntityImageCollection();
            Plugin.PreEntityImages = debugContext.PreEntityImages.ToEntityImageCollection();
            Plugin.PrimaryEntityId = debugContext.PrimaryEntityId ?? Guid.Empty;
            Plugin.PrimaryEntityName = debugContext.PrimaryEntityName;
            Plugin.RequestId = debugContext.RequestId ?? Guid.Empty;
            Plugin.SecondaryEntityName = debugContext.SecondaryEntityName;
            Plugin.SharedVariables = debugContext.SharedVariables.ToParameterCollection();
            Plugin.Stage = debugContext.Stage ?? -1;
            Plugin.UserId = debugContext.UserId ?? Guid.Empty;
        }
    }
}
