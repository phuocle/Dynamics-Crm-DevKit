using System;
using Microsoft.Xrm.Sdk;

namespace Microsoft.Xrm.Sdk
{
    /// <summary>
    /// Wrapper class that implements IPluginExecutionContext7 by wrapping IPluginExecutionContext.
    /// Provides backward compatibility and graceful property access via reflection when running
    /// under RemoteExecutionContext, unit tests, or older Dataverse sandbox runtimes.
    /// </summary>
    internal class PluginExecutionContext7Wrapper : IPluginExecutionContext7
    {
        private readonly IPluginExecutionContext _context;
        private readonly IPluginExecutionContext2 _context2;
        private readonly IPluginExecutionContext3 _context3;
        private readonly IPluginExecutionContext4 _context4;
        private readonly IPluginExecutionContext5 _context5;
        private readonly IPluginExecutionContext6 _context6;
        private readonly IPluginExecutionContext7 _context7;

        public PluginExecutionContext7Wrapper(IPluginExecutionContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _context2 = context as IPluginExecutionContext2;
            _context3 = context as IPluginExecutionContext3;
            _context4 = context as IPluginExecutionContext4;
            _context5 = context as IPluginExecutionContext5;
            _context6 = context as IPluginExecutionContext6;
            _context7 = context as IPluginExecutionContext7;
        }

        // IPluginExecutionContext properties
        public int Mode => _context.Mode;
        public int IsolationMode => _context.IsolationMode;
        public int Depth => _context.Depth;
        public string MessageName => _context.MessageName;
        public string PrimaryEntityName => _context.PrimaryEntityName;
        public Guid? RequestId => _context.RequestId;
        public string SecondaryEntityName => _context.SecondaryEntityName;
        public ParameterCollection InputParameters => _context.InputParameters;
        public ParameterCollection OutputParameters => _context.OutputParameters;
        public ParameterCollection SharedVariables => _context.SharedVariables;
        public Guid UserId => _context.UserId;
        public Guid InitiatingUserId => _context.InitiatingUserId;
        public Guid BusinessUnitId => _context.BusinessUnitId;
        public Guid OrganizationId => _context.OrganizationId;
        public string OrganizationName => _context.OrganizationName;
        public Guid PrimaryEntityId => _context.PrimaryEntityId;
        public EntityImageCollection PreEntityImages => _context.PreEntityImages;
        public EntityImageCollection PostEntityImages => _context.PostEntityImages;
        public EntityReference OwningExtension => _context.OwningExtension;
        public Guid CorrelationId => _context.CorrelationId;
        public bool IsExecutingOffline => _context.IsExecutingOffline;
        public bool IsOfflinePlayback => _context.IsOfflinePlayback;
        public bool IsInTransaction => _context.IsInTransaction;
        public Guid OperationId => _context.OperationId;
        public DateTime OperationCreatedOn => _context.OperationCreatedOn;
        public IPluginExecutionContext ParentContext => _context.ParentContext;
        public int Stage => _context.Stage;

        // IPluginExecutionContext2 properties
        public Guid UserAzureActiveDirectoryObjectId => _context2 != null ? _context2.UserAzureActiveDirectoryObjectId : GetPropertyValue<Guid>("UserAzureActiveDirectoryObjectId", Guid.Empty);
        public Guid InitiatingUserAzureActiveDirectoryObjectId => _context2 != null ? _context2.InitiatingUserAzureActiveDirectoryObjectId : GetPropertyValue<Guid>("InitiatingUserAzureActiveDirectoryObjectId", Guid.Empty);
        public Guid InitiatingUserApplicationId => _context2 != null ? _context2.InitiatingUserApplicationId : GetPropertyValue<Guid>("InitiatingUserApplicationId", Guid.Empty);
        public Guid PortalsContactId => _context2 != null ? _context2.PortalsContactId : GetPropertyValue<Guid>("PortalsContactId", Guid.Empty);
        public bool IsPortalsClientCall => _context2 != null ? _context2.IsPortalsClientCall : GetPropertyValue<bool>("IsPortalsClientCall", false);

        // IPluginExecutionContext3 properties
        public Guid AuthenticatedUserId => _context3 != null ? _context3.AuthenticatedUserId : GetPropertyValue<Guid>("AuthenticatedUserId", Guid.Empty);

        // IPluginExecutionContext4 properties
        public EntityImageCollection[] PreEntityImagesCollection => _context4 != null ? _context4.PreEntityImagesCollection : GetPropertyValue<EntityImageCollection[]>("PreEntityImagesCollection", new EntityImageCollection[0]);
        public EntityImageCollection[] PostEntityImagesCollection => _context4 != null ? _context4.PostEntityImagesCollection : GetPropertyValue<EntityImageCollection[]>("PostEntityImagesCollection", new EntityImageCollection[0]);

        // IPluginExecutionContext5 properties
        public string InitiatingUserAgent => _context5 != null ? _context5.InitiatingUserAgent : GetPropertyValue<string>("InitiatingUserAgent", null);

        // IPluginExecutionContext6 properties
        public string EnvironmentId => _context6 != null ? _context6.EnvironmentId : GetPropertyValue<string>("EnvironmentId", string.Empty);
        public Guid TenantId => _context6 != null ? _context6.TenantId : GetPropertyValue<Guid>("TenantId", Guid.Empty);

        // IPluginExecutionContext7 properties
        public bool IsApplicationUser => _context7 != null ? _context7.IsApplicationUser : GetPropertyValue<bool>("IsApplicationUser", false);

        private T GetPropertyValue<T>(string propertyName, T defaultValue)
        {
            var property = _context.GetType().GetProperty(propertyName);
            if (property != null)
            {
                var value = property.GetValue(_context);
                if (value is T typedValue)
                    return typedValue;
            }
            return defaultValue;
        }
    }
}
