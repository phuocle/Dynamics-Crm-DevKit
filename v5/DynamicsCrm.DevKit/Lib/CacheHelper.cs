using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    public static class CacheHelper
    {
        private static readonly ConcurrentDictionary<string, ServiceClient> _serviceClientCache = new ConcurrentDictionary<string, ServiceClient>();
        private static readonly ConcurrentDictionary<string, CrmConnection> _crmConnectionCache = new ConcurrentDictionary<string, CrmConnection>();
        private static readonly ConcurrentDictionary<string, DeployWebResource> _webResourceCache = new ConcurrentDictionary<string, DeployWebResource>();
        private static readonly ConcurrentDictionary<string, DateTime> _connectionTimestamps = new ConcurrentDictionary<string, DateTime>();
        
        private const int ConnectionTimeoutMinutes = 60;
        private const int ConnectionValidationTimeoutSeconds = 10;

        /// <summary>
        /// Gets a cached ServiceClient or prompts user for connection if not cached/expired.
        /// </summary>
        public static async Task<ServiceClient> GetServiceClientAsync()
        {
            return await GetServiceClientAsync(null, CancellationToken.None);
        }

        /// <summary>
        /// Gets a cached ServiceClient or prompts user for connection if not cached/expired.
        /// Supports cancellation token for async operations.
        /// </summary>
        public static async Task<ServiceClient> GetServiceClientAsync(string connectionName, CancellationToken cancellationToken = default)
        {
            var cacheKey = connectionName ?? "default";
            
            if (_serviceClientCache.TryGetValue(cacheKey, out var cachedClient))
            {
                if (cachedClient != null && cachedClient.IsReady && !IsConnectionExpired(cacheKey))
                {
                    // Validate connection is still alive with a lightweight ping
                    if (await ValidateConnectionAsync(cachedClient, cancellationToken))
                    {
                        // Refresh timestamp on successful validation
                        _connectionTimestamps[cacheKey] = DateTime.UtcNow;
                        return cachedClient;
                    }
                }
                // Connection is invalid, expired, or failed validation - remove from cache
                RemoveFromCache(connectionName);
            }

            cancellationToken.ThrowIfCancellationRequested();
            
            var serviceClient = await PromptForConnectionAsync(connectionName);
            if (serviceClient != null)
            {
                _serviceClientCache[cacheKey] = serviceClient;
                _connectionTimestamps[cacheKey] = DateTime.UtcNow;
            }
            return serviceClient;
        }

        /// <summary>
        /// Validates if the cached connection is still alive by performing a lightweight query.
        /// </summary>
        private static async Task<bool> ValidateConnectionAsync(ServiceClient serviceClient, CancellationToken cancellationToken)
        {
            try
            {
                using (var timeoutCts = new CancellationTokenSource(TimeSpan.FromSeconds(ConnectionValidationTimeoutSeconds)))
                using (var linkedCts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, timeoutCts.Token))
                {
                    // Perform a lightweight query to validate connection
                    // WhoAmI is the lightest operation but RetrieveMultiple with top 1 is also acceptable
                    return await Task.Run(() =>
                    {
                        try
                        {
                            var query = new QueryExpression("systemuser")
                            {
                                TopCount = 1,
                                ColumnSet = new ColumnSet("systemuserid")
                            };
                            var result = serviceClient.RetrieveMultiple(query);
                            return result != null;
                        }
                        catch
                        {
                            return false;
                        }
                    }, linkedCts.Token);
                }
            }
            catch (OperationCanceledException)
            {
                return false;
            }
            catch
            {
                return false;
            }
        }

        private static bool IsConnectionExpired(string cacheKey)
        {
            if (_connectionTimestamps.TryGetValue(cacheKey, out var timestamp))
            {
                return DateTime.UtcNow.Subtract(timestamp).TotalMinutes > ConnectionTimeoutMinutes;
            }
            return true;
        }

        private static async Task<ServiceClient> PromptForConnectionAsync(string connectionName)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var formConnection = new FormConnection();
            var result = formConnection.ShowModal() ?? false;
            if (result && formConnection.ServiceClient != null)
            {
                var cacheKey = connectionName ?? "default";
                _crmConnectionCache[cacheKey] = formConnection.CrmConnection;
                return formConnection.ServiceClient;
            }
            return null;
        }

        /// <summary>
        /// Clears all cached connections and disposes them properly.
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
        /// Removes a specific connection from cache and disposes it.
        /// </summary>
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
                    // Ignore dispose errors
                }
            }
            _connectionTimestamps.TryRemove(cacheKey, out _);
            _crmConnectionCache.TryRemove(cacheKey, out _);
        }

        /// <summary>
        /// Checks if there is a valid cached connection without prompting user.
        /// </summary>
        public static bool HasValidConnection(string connectionName = null)
        {
            var cacheKey = connectionName ?? "default";
            if (_serviceClientCache.TryGetValue(cacheKey, out var cachedClient))
            {
                return cachedClient != null && cachedClient.IsReady && !IsConnectionExpired(cacheKey);
            }
            return false;
        }

        /// <summary>
        /// Gets the cached CrmConnection settings (not the ServiceClient).
        /// </summary>
        public static CrmConnection GetCrmConnection(string connectionName = null)
        {
            var cacheKey = connectionName ?? "default";
            if (_crmConnectionCache.TryGetValue(cacheKey, out var crmConnection))
            {
                return crmConnection;
            }
            return null;
        }

        public static DeployWebResource GetWebResource(string fullFileName)
        {
            if (_webResourceCache.TryGetValue(fullFileName, out var cached))
            {
                return cached;
            }
            return null;
        }

        public static void SetWebResourceCache(string fullFileName, DeployWebResource resource)
        {
            _webResourceCache[fullFileName] = resource;
        }
    }
}