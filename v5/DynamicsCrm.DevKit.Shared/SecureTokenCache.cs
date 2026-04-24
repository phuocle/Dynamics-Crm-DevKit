#pragma warning disable CA1416
using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using Microsoft.Identity.Client;

namespace DynamicsCrm.DevKit.Shared
{
    /// <summary>
    /// Secure token cache using Windows DPAPI for encryption.
    /// Stores MSAL tokens encrypted on disk for session reuse.
    /// </summary>
    public class SecureTokenCache
    {
        private readonly string _cacheLocation;

        public SecureTokenCache()
        {
            _cacheLocation = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "DynamicsCrmDevKit",
                "TokenCache"
            );

            if (!Directory.Exists(_cacheLocation))
            {
                Directory.CreateDirectory(_cacheLocation);
            }
        }

        /// <summary>
        /// Register this cache with MSAL PublicClientApplication.
        /// Enables token persistence and silent acquisition.
        /// </summary>
        public void RegisterCache(IPublicClientApplication app, string connectionName)
        {
            app.UserTokenCache.SetBeforeAccess(notificationArgs =>
            {
                var cacheData = LoadCacheData(connectionName);
                if (cacheData != null)
                {
                    notificationArgs.TokenCache.DeserializeMsalV3(cacheData);
                }
            });

            app.UserTokenCache.SetAfterAccess(notificationArgs =>
            {
                if (notificationArgs.HasStateChanged)
                {
                    var cacheData = notificationArgs.TokenCache.SerializeMsalV3();
                    SaveCacheData(connectionName, cacheData);
                }
            });
        }

        private byte[] LoadCacheData(string connectionName)
        {
            var cacheFile = GetCacheFilePath(connectionName);
            if (!File.Exists(cacheFile)) return null;

            try
            {
                var encrypted = File.ReadAllBytes(cacheFile);
                return ProtectedData.Unprotect(
                    encrypted,
                    null,
                    DataProtectionScope.CurrentUser
                );
            }
            catch
            {
                // Cache corrupted or inaccessible, return null to force re-auth
                return null;
            }
        }

        private void SaveCacheData(string connectionName, byte[] data)
        {
            try
            {
                var encrypted = ProtectedData.Protect(
                    data,
                    null,
                    DataProtectionScope.CurrentUser
                );

                var cacheFile = GetCacheFilePath(connectionName);
                File.WriteAllBytes(cacheFile, encrypted);
            }
            catch
            {
                // Log error but don't fail - token will just not be cached
            }
        }

        private string GetCacheFilePath(string connectionName)
        {
            var safeFileName = string.Join("_",
                connectionName.Split(Path.GetInvalidFileNameChars()));
            return Path.Combine(_cacheLocation, $"{safeFileName}.msalcache");
        }

        /// <summary>
        /// Clear all cached tokens. Use for logout or troubleshooting.
        /// </summary>
        public void ClearAll()
        {
            try
            {
                if (Directory.Exists(_cacheLocation))
                {
                    Directory.Delete(_cacheLocation, true);
                }
            }
            catch { /* best-effort cache directory cleanup — may be locked or already deleted */ }
        }

        /// <summary>
        /// Clear token for a specific connection.
        /// </summary>
        public void Clear(string connectionName)
        {
            try
            {
                var cacheFile = GetCacheFilePath(connectionName);
                if (File.Exists(cacheFile))
                {
                    File.Delete(cacheFile);
                }
            }
            catch { /* best-effort token cache file cleanup — may be locked or already deleted */ }
        }

        /// <summary>
        /// Check if a token cache exists for the connection.
        /// </summary>
        public bool HasCache(string connectionName)
        {
            var cacheFile = GetCacheFilePath(connectionName);
            return File.Exists(cacheFile);
        }

        /// <summary>
        /// Get the cache location for diagnostic purposes.
        /// </summary>
        public string GetCacheLocation() => _cacheLocation;
    }
}
