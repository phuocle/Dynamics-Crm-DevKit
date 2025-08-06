using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Concurrent;
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
        // Using ConcurrentDictionary for better thread safety and performance
        private static readonly ConcurrentDictionary<string, ServiceClient> _serviceClientCache = new ConcurrentDictionary<string, ServiceClient>();
        
        // Keep a separate collection to track connection timestamps for potential expiration
        private static readonly ConcurrentDictionary<string, DateTime> _connectionTimestamps = new ConcurrentDictionary<string, DateTime>();
        
        // Connection timeout in minutes (optional enhancement)
        private static readonly int ConnectionTimeoutMinutes = 60;

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
            
            var cacheKey = connectionName ?? "default";
            
            // Check if we have a cached ServiceClient
            if (_serviceClientCache.TryGetValue(cacheKey, out var cachedClient))
            {
                // Verify the cached client is still connected and not expired
                if (cachedClient != null && cachedClient.IsReady && !IsConnectionExpired(cacheKey))
                {
                    return cachedClient;
                }
                else
                {
                    // Remove invalid or expired cached client
                    RemoveFromCache(connectionName);
                }
            }

            // No valid cached client, prompt user for connection
            var serviceClient = await PromptForConnectionAsync(connectionName);
            
            if (serviceClient != null)
            {
                // Cache the new ServiceClient with timestamp
                _serviceClientCache[cacheKey] = serviceClient;
                _connectionTimestamps[cacheKey] = DateTime.UtcNow;
            }

            return serviceClient;
        }

        /// <summary>
        /// Checks if a connection has expired based on timestamp
        /// </summary>
        /// <param name="cacheKey">The cache key to check</param>
        /// <returns>True if connection is expired</returns>
        private static bool IsConnectionExpired(string cacheKey)
        {
            if (_connectionTimestamps.TryGetValue(cacheKey, out var timestamp))
            {
                return DateTime.UtcNow.Subtract(timestamp).TotalMinutes > ConnectionTimeoutMinutes;
            }
            return true; // If no timestamp found, consider it expired
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

                if (result && formConnection.ServiceClient != null)
                {
                    return formConnection.ServiceClient;
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
            var keys = new List<string>(_serviceClientCache.Keys);
            foreach (var key in keys)
            {
                RemoveFromCache(key);
            }
        }

        /// <summary>
        /// Removes a specific ServiceClient from cache
        /// </summary>
        /// <param name="connectionName">Connection name to remove. If null, removes default connection</param>
        public static void RemoveFromCache(string connectionName = null)
        {
            var cacheKey = connectionName ?? "default";

            if (_serviceClientCache.TryRemove(cacheKey, out var client))
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
            
            _connectionTimestamps.TryRemove(cacheKey, out _);
        }

        /// <summary>
        /// Checks if a ServiceClient is cached and valid for the given connection
        /// </summary>
        /// <param name="connectionName">Connection name to check. If null, checks default connection</param>
        /// <returns>True if a valid ServiceClient is cached</returns>
        public static bool IsServiceClientCached(string connectionName = null)
        {
            var cacheKey = connectionName ?? "default";

            if (_serviceClientCache.TryGetValue(cacheKey, out var client))
            {
                return client != null && client.IsReady && !IsConnectionExpired(cacheKey);
            }

            return false;
        }
    }
}