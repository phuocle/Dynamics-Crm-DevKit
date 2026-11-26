using Microsoft.Xrm.Sdk;
using System;

namespace $NameSpace$.Framework
{
    public sealed class PluginExecutionDescriptor
    {
        public string MessageName { get; set; } = string.Empty;
        public string PrimaryEntityName { get; set; } = string.Empty;
        public string SecondaryEntityName { get; set; } = string.Empty;
        public Guid PrimaryEntityId { get; set; }
        public Guid? RequestId { get; set; }
        public int Stage { get; set; }
        public int Mode { get; set; }
        public int IsolationMode { get; set; }
        public int Depth { get; set; } = 1;
        public Guid UserId { get; set; }
        public Guid InitiatingUserId { get; set; }
        public Guid BusinessUnitId { get; set; }
        public Guid OrganizationId { get; set; }
        public string OrganizationName { get; set; } = string.Empty;
        public Guid CorrelationId { get; set; }
        public Guid OperationId { get; set; }
        public DateTime OperationCreatedOn { get; set; }
        public bool IsExecutingOffline { get; set; }
        public bool IsOfflinePlayback { get; set; }
        public bool IsInTransaction { get; set; }
        public EntityReference OwningExtension { get; set; }
        public IPluginExecutionContext ParentContext { get; set; }
        public ParameterCollection InputParameters { get; } = new ParameterCollection();
        public ParameterCollection OutputParameters { get; internal set; } = new ParameterCollection();
        public ParameterCollection SharedVariables { get; internal set; } = new ParameterCollection();
        public EntityImageCollection PreEntityImages { get; } = new EntityImageCollection();
        public EntityImageCollection PostEntityImages { get; } = new EntityImageCollection();

        internal static PluginExecutionDescriptor FromContext(IPluginExecutionContext source)
        {
            var descriptor = new PluginExecutionDescriptor
            {
                MessageName = source.MessageName ?? string.Empty,
                PrimaryEntityName = source.PrimaryEntityName ?? string.Empty,
                SecondaryEntityName = source.SecondaryEntityName ?? string.Empty,
                PrimaryEntityId = source.PrimaryEntityId,
                RequestId = source.RequestId,
                Stage = source.Stage,
                Mode = source.Mode,
                IsolationMode = source.IsolationMode,
                Depth = source.Depth,
                UserId = source.UserId,
                InitiatingUserId = source.InitiatingUserId,
                BusinessUnitId = source.BusinessUnitId,
                OrganizationId = source.OrganizationId,
                OrganizationName = source.OrganizationName ?? string.Empty,
                CorrelationId = source.CorrelationId,
                OperationId = source.OperationId,
                OperationCreatedOn = source.OperationCreatedOn,
                IsExecutingOffline = source.IsExecutingOffline,
                IsOfflinePlayback = source.IsOfflinePlayback,
                IsInTransaction = source.IsInTransaction,
                OwningExtension = source.OwningExtension,
                ParentContext = source.ParentContext
            };
            Copy(source.InputParameters, descriptor.InputParameters);
            Copy(source.OutputParameters, descriptor.OutputParameters);
            Copy(source.SharedVariables, descriptor.SharedVariables);
            Copy(source.PreEntityImages, descriptor.PreEntityImages);
            Copy(source.PostEntityImages, descriptor.PostEntityImages);
            return descriptor;
        }

        private static void Copy<T>(DataCollection<string, T> source, DataCollection<string, T> destination)
        {
            if (source == null) return;
            foreach (var item in source) destination.Add(item);
        }
    }
}
