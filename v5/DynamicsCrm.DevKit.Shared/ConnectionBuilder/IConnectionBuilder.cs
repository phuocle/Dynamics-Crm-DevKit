using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Interface for all connection builders.
    /// Each authentication type implements this interface.
    /// </summary>
    public interface IConnectionBuilder
    {
        /// <summary>
        /// The connection type this builder handles (e.g., "Interactive", "DeviceCode").
        /// </summary>
        string Type { get; }

        /// <summary>
        /// Create a ServiceClient using the configured authentication method.
        /// </summary>
        Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection);

        /// <summary>
        /// Build a connection string for this connection type.
        /// Some types (Interactive, DeviceCode) may return a diagnostic string
        /// since they use token providers instead of connection strings.
        /// </summary>
        string BuildConnectionString(CrmConnection connection, bool shouldMaskPassword = false);

        /// <summary>
        /// Validate the connection configuration before attempting to connect.
        /// </summary>
        Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection);
    }
}
