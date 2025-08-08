using DynamicsCrm.DevKit.Lib.Forms;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    public static class CacheHelper
    {
        private static readonly ConcurrentDictionary<string, ServiceClient> _serviceClientCache = new ConcurrentDictionary<string, ServiceClient>();        
        private static readonly ConcurrentDictionary<string, DateTime> _connectionTimestamps = new ConcurrentDictionary<string, DateTime>();        
        private static readonly int ConnectionTimeoutMinutes = 60;
        public static async Task<ServiceClient> GetServiceClientAsync()
        {
            return await GetServiceClientAsync(null);
        }

        public static async Task<ServiceClient> GetServiceClientAsync(string connectionName)
        {
            var cacheKey = connectionName ?? "default";            
            if (_serviceClientCache.TryGetValue(cacheKey, out var cachedClient))
            {
                if (cachedClient != null && cachedClient.IsReady && !IsConnectionExpired(cacheKey))
                {
                    return cachedClient;
                }
                else
                {
                    RemoveFromCache(connectionName);
                }
            }
            var serviceClient = await PromptForConnectionAsync(connectionName);            
            if (serviceClient != null)
            {
                _serviceClientCache[cacheKey] = serviceClient;
                _connectionTimestamps[cacheKey] = DateTime.UtcNow;
            }
            return serviceClient;
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
                return formConnection.ServiceClient;
            }
            return null;
        }       

        public static void ClearCache()
        {
            var keys = new List<string>(_serviceClientCache.Keys);
            foreach (var key in keys)
            {
                RemoveFromCache(key);
            }
        }

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
                }
            }            
            _connectionTimestamps.TryRemove(cacheKey, out _);
        }        
    }
}