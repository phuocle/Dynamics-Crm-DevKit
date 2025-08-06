using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    /// <summary>
    /// Helper class for caching ServiceClient instances for the duration of a Visual Studio session
    /// </summary>
    public static class CacheHelper
    {
        private static readonly Dictionary<string, ServiceClient> _serviceClientCache = new Dictionary<string, ServiceClient>();
        private static readonly object _cacheLock = new object();

        /// <summary>
        /// Gets a cached ServiceClient or prompts user to connect if not available
        /// </summary>
        /// <returns>ServiceClient instance or null if connection failed</returns>
        public static async Task<ServiceClient> GetServiceClientAsync()
        {
            return await GetServiceClientAsync(null);
        }

        /// <summary>
        /// Gets a cached ServiceClient for a specific connection or prompts user to connect if not available
        /// </summary>
        /// <param name="connectionName">Optional connection name to use. If null, uses default connection</param>
        /// <returns>ServiceClient instance or null if connection failed</returns>
        public static async Task<ServiceClient> GetServiceClientAsync(string connectionName)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            // Get the connection name to use for caching
            var cacheKey = connectionName ?? "default";
            // Check if we have a cached ServiceClient
            lock (_cacheLock)
            {
                if (_serviceClientCache.TryGetValue(cacheKey, out var cachedClient))
                {
                    // Verify the cached client is still connected
                    if (cachedClient != null && cachedClient.IsReady)
                    {
                        return cachedClient;
                    }
                    else
                    {
                        // Remove invalid cached client
                        _serviceClientCache.Remove(cacheKey);
                        cachedClient?.Dispose();
                    }
                }
            }
            // No valid cached client, prompt user for connection
            var serviceClient = await PromptForConnectionAsync(connectionName);
            
            if (serviceClient != null)
            {
                // Cache the new ServiceClient
                lock (_cacheLock)
                {
                    _serviceClientCache[cacheKey] = serviceClient;
                }
            }

            return serviceClient;
        }

        /// <summary>
        /// Prompts the user to select/create a connection and returns a ServiceClient
        /// </summary>
        /// <param name="connectionName">Optional specific connection name to use</param>
        /// <returns>ServiceClient instance or null if user cancelled or connection failed</returns>
        private static async Task<ServiceClient> PromptForConnectionAsync(string connectionName)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

            try
            {
                var formConnection = new FormConnection(true);
                var result = formConnection.ShowModal() ?? false;

                if (result && formConnection.CrmServiceClient != null)
                {
                    return formConnection.CrmServiceClient;
                }
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync($"Failed to establish connection: {ex.Message}");
            }

            return null;
        }

        /// <summary>
        /// Creates a ServiceClient from a CrmConnection configuration
        /// </summary>
        /// <param name="connection">The CrmConnection configuration</param>
        /// <returns>ServiceClient instance or null if connection failed</returns>
        public static async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
        {
            if (connection == null)
                return null;

            return await Task.Run(() =>
            {
                try
                {
                    var connectionString = BuildConnectionString(connection);
                    return new ServiceClient(connectionString);
                }
                catch (Exception ex)
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.MessageBox.ShowErrorAsync($"Failed to create ServiceClient: {ex.Message}");
                    });
                    return null;
                }
            });
        }

        /// <summary>
        /// Builds a connection string from CrmConnection configuration
        /// </summary>
        /// <param name="connection">The CrmConnection configuration</param>
        /// <returns>Connection string for ServiceClient</returns>
        private static string BuildConnectionString(CrmConnection connection)
        {
            if (connection == null)
                throw new ArgumentNullException(nameof(connection));

            var connectionString = $"Url={connection.Url};";

            switch (connection.Type?.ToLower())
            {
                case "oauth":
                    connectionString += $"Username={connection.UserName};Password={connection.Password};AuthType=OAuth;";
                    break;
                case "clientsecret":
                    connectionString += $"ClientId={connection.UserName};ClientSecret={connection.Password};AuthType=ClientSecret;";
                    break;
                default:
                    connectionString += $"Username={connection.UserName};Password={connection.Password};AuthType=OAuth;";
                    break;
            }

            connectionString += "RequireNewInstance=True;";

            return connectionString;
        }

        /// <summary>
        /// Gets the URL of the currently connected ServiceClient
        /// </summary>
        /// <param name="serviceClient">The ServiceClient instance</param>
        /// <returns>Connected URL or null if not connected</returns>
        public static string GetConnectedUrl(ServiceClient serviceClient)
        {
            return XrmHelper.ConnectedUrl(serviceClient);
        }

        /// <summary>
        /// Clears all cached ServiceClient instances
        /// </summary>
        public static void ClearCache()
        {
            lock (_cacheLock)
            {
                foreach (var client in _serviceClientCache.Values)
                {
                    try
                    {
                        client?.Dispose();
                    }
                    catch
                    {
                        // Ignore disposal errors
                    }
                }
                _serviceClientCache.Clear();
            }
        }

        /// <summary>
        /// Removes a specific ServiceClient from cache
        /// </summary>
        /// <param name="connectionName">Connection name to remove. If null, removes default connection</param>
        public static void RemoveFromCache(string connectionName = null)
        {
            var cacheKey = connectionName ?? "default";

            lock (_cacheLock)
            {
                if (_serviceClientCache.TryGetValue(cacheKey, out var client))
                {
                    try
                    {
                        client?.Dispose();
                    }
                    catch
                    {
                        // Ignore disposal errors
                    }
                    _serviceClientCache.Remove(cacheKey);
                }
            }
        }

        /// <summary>
        /// Checks if a ServiceClient is cached and valid for the given connection
        /// </summary>
        /// <param name="connectionName">Connection name to check. If null, checks default connection</param>
        /// <returns>True if a valid ServiceClient is cached</returns>
        public static bool IsServiceClientCached(string connectionName = null)
        {
            var cacheKey = connectionName ?? "default";

            lock (_cacheLock)
            {
                if (_serviceClientCache.TryGetValue(cacheKey, out var client))
                {
                    return client != null && client.IsReady;
                }
            }

            return false;
        }
    }
}