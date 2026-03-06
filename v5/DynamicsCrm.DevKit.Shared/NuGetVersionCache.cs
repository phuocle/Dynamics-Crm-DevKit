using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    /// <summary>
    /// Static cache for NuGet package versions to improve project creation UX.
    /// Preloads versions in background when form is displayed, so they're ready when user clicks OK.
    /// </summary>
    public static class NuGetVersionCache
    {
        private static readonly ConcurrentDictionary<string, (string Version, string TargetFramework, string XmlPackage)> _cache = new();
        private static Task _preloadTask = null;
        private static readonly object _lock = new object();
        private static bool _preloadStarted = false;

        /// <summary>
        /// List of packages to preload for project creation
        /// </summary>
        private static readonly string[] Packages =
        {
            "DynamicsCrm.DevKit.Analyzers",
            "DynamicsCrm.DevKit.Cli",
            "Microsoft.CrmSdk.CoreAssemblies",
            "Microsoft.CrmSdk.Workflow",
            "Microsoft.CrmSdk.CoreTools",
            "Microsoft.PowerPlatform.Dataverse.Client",
            "Azure.Identity",
            "Microsoft.Extensions.Configuration",
            "Microsoft.Extensions.Configuration.Json",
            "NSubstitute",
            "MSTest.TestAdapter",
            "MSTest.TestFramework",
            "Dynamics365.UIAutomation.Api",
            "Bogus",
            "Selenium.WebDriver",
            "Selenium.WebDriver.ChromeDriver",
            "Selenium.Support"
        };

        /// <summary>
        /// Check if preload has completed
        /// </summary>
        public static bool IsPreloadComplete => _preloadTask?.IsCompleted ?? false;

        /// <summary>
        /// Start preloading NuGet versions in background (fire-and-forget).
        /// Safe to call multiple times - only runs once.
        /// </summary>
        public static void StartPreload()
        {
            lock (_lock)
            {
                if (_preloadStarted) return;
                _preloadStarted = true;

                _preloadTask = Task.Run(async () =>
                {
                    // Run all package fetches in parallel for faster completion
                    var tasks = new Task[Packages.Length];
                    for (int i = 0; i < Packages.Length; i++)
                    {
                        var package = Packages[i];
                        tasks[i] = PreloadPackageAsync(package);
                    }
                    await Task.WhenAll(tasks);
                });
            }
        }

        private static async Task PreloadPackageAsync(string package)
        {
            try
            {
                var version = await NuGetHelper.GetLatestVersionAsync(package);
                var targetFramework = await NuGetHelper.GetTargetFrameworkAsync(package);
                var versionString = version?.OriginalVersion ?? string.Empty;
                var xmlPackage = $"<package id=\"{package}\" version=\"{versionString}\" targetFramework=\"{targetFramework}\" />";

                _cache[package] = (versionString, targetFramework, xmlPackage);
            }
            catch
            {
                // Silently ignore - will fallback to direct fetch
            }
        }

        /// <summary>
        /// Try to get cached version info for a package.
        /// Returns null if not cached yet.
        /// </summary>
        public static (string Version, string TargetFramework, string XmlPackage)? TryGetCached(string package)
        {
            if (_cache.TryGetValue(package, out var cached))
            {
                return cached;
            }
            return null;
        }

        /// <summary>
        /// Get version info for a package.
        /// Uses cache if available, otherwise fetches from NuGet.
        /// </summary>
        public static async Task<(string Version, string TargetFramework, string XmlPackage)> GetVersionAsync(string package)
        {
            // Check cache first
            var cached = TryGetCached(package);
            if (cached.HasValue)
            {
                return cached.Value;
            }

            // Not in cache - fetch directly
            var version = await NuGetHelper.GetLatestVersionAsync(package);
            var targetFramework = await NuGetHelper.GetTargetFrameworkAsync(package);
            var versionString = version?.OriginalVersion ?? string.Empty;
            var xmlPackage = $"<package id=\"{package}\" version=\"{versionString}\" targetFramework=\"{targetFramework}\" />";

            // Store in cache for future use
            _cache[package] = (versionString, targetFramework, xmlPackage);

            return (versionString, targetFramework, xmlPackage);
        }

        /// <summary>
        /// Wait for preload to complete (with optional timeout).
        /// Useful if you want to ensure cache is ready before proceeding.
        /// </summary>
        public static async Task<bool> WaitForPreloadAsync(int timeoutMs = 5000)
        {
            if (_preloadTask == null) return false;

            try
            {
                var preload = _preloadTask;
                var delayTask = Task.Delay(timeoutMs);
#pragma warning disable VSTHRD003 // Intentionally awaiting background preload task with timeout
                var completedTask = await Task.WhenAny(preload, delayTask).ConfigureAwait(false);
#pragma warning restore VSTHRD003
                return completedTask == preload && preload.Status == TaskStatus.RanToCompletion;
            }
            catch
            {
                return false;
            }
        }
    }
}
