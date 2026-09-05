using Microsoft.PowerPlatform.Dataverse.Client;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    /// <summary>
    /// Read-only connection facts about the active Dataverse session.
    /// Abstraction over <see cref="ServiceClient"/> connection-info members so MCP tools
    /// that only need org identity (banner output, URL building) can be unit-tested
    /// without a live ServiceClient.
    /// </summary>
    public interface IMcpConnectionInfo
    {
        /// <summary>Maps to <see cref="ServiceClient.ConnectedOrgUriActual"/>.</summary>
        Uri ConnectedOrgUri { get; }
        /// <summary>Maps to <see cref="ServiceClient.ConnectedOrgFriendlyName"/>.</summary>
        string ConnectedOrgFriendlyName { get; }
        /// <summary>Maps to <see cref="ServiceClient.ConnectedOrgUniqueName"/>.</summary>
        string ConnectedOrgUniqueName { get; }
        /// <summary>Maps to <see cref="ServiceClient.ConnectedOrgVersion"/>.</summary>
        Version ConnectedOrgVersion { get; }
        /// <summary>Maps to <see cref="ServiceClient.TenantId"/>.</summary>
        Guid TenantId { get; }
        /// <summary>Maps to <see cref="ServiceClient.EnvironmentId"/>.</summary>
        string EnvironmentId { get; }
    }

    /// <summary>
    /// Production adapter: forwards every member to the wrapped <see cref="ServiceClient"/>.
    /// </summary>
    public sealed class ServiceClientConnectionInfo : IMcpConnectionInfo
    {
        private readonly ServiceClient _serviceClient;

        public ServiceClientConnectionInfo(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient ?? throw new ArgumentNullException(nameof(serviceClient));
        }

        public Uri ConnectedOrgUri => _serviceClient.ConnectedOrgUriActual;
        public string ConnectedOrgFriendlyName => _serviceClient.ConnectedOrgFriendlyName;
        public string ConnectedOrgUniqueName => _serviceClient.ConnectedOrgUniqueName;
        public Version ConnectedOrgVersion => _serviceClient.ConnectedOrgVersion;
        public Guid TenantId => _serviceClient.TenantId;
        public string EnvironmentId => _serviceClient.EnvironmentId;
    }
}
