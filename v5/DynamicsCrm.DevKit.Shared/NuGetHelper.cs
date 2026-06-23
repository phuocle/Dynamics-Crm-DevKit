using NuGet.Common;
using NuGet.Packaging;
using NuGet.Protocol;
using NuGet.Protocol.Core.Types;
using NuGet.Versioning;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    internal class NuGetHelper
    {
        /// <summary>
        /// Default NuGet package versions (fetched on 2026-03-19).
        /// Used as fallback when NuGet API is slow/unreachable to prevent UI hang.
        /// </summary>
        internal static readonly Dictionary<string, (string Version, string TargetFramework)> DefaultVersions = new(StringComparer.OrdinalIgnoreCase)
        {
            ["DynamicsCrm.DevKit.Analyzers"]                = (Const.Version, "net462"),
            ["DynamicsCrm.DevKit.Cli"]                      = (Const.Version, "net462"),
            ["Microsoft.CrmSdk.CoreAssemblies"]             = ("9.0.2.60",    "net462"),
            ["Microsoft.CrmSdk.Workflow"]                   = ("9.0.2.60",    "net462"),
            ["Microsoft.CrmSdk.CoreTools"]                  = ("9.1.0.179",   "net462"),
            ["Microsoft.PowerPlatform.Dataverse.Client"]    = ("1.2.10",      "net462"),
            ["Azure.Identity"]                              = ("1.19.0",      "net462"),
            ["Microsoft.Extensions.Configuration"]          = ("10.0.5",      "net462"),
            ["Microsoft.Extensions.Configuration.Json"]     = ("10.0.5",      "net462"),
            ["NSubstitute"]                                 = ("5.3.0",       "net462"),
            ["MSTest.TestAdapter"]                          = ("4.1.0",       "net462"),
            ["MSTest.TestFramework"]                        = ("4.1.0",       "net462"),
            ["Dynamics365.UIAutomation.Api"]                = ("9.2.21084.148", "net462"),
            ["Bogus"]                                       = ("35.6.5",      "net462"),
            ["Selenium.WebDriver"]                          = ("3.141.0",     "net462"),
            ["Selenium.WebDriver.ChromeDriver"]             = ("149.0.7827.15500", "net462"),
            ["Selenium.Support"]                            = ("3.141.0",     "net462"),
        };

        /// <summary>
        /// Timeout for individual NuGet API calls (10 seconds).
        /// </summary>
        private static readonly TimeSpan NuGetTimeout = TimeSpan.FromSeconds(10);

        public static async Task<NuGetVersion> GetLatestVersionAsync(string nuget)
        {
            if (UseDefaultVersion(nuget) && DefaultVersions.TryGetValue(nuget, out var pinnedVersion))
            {
                return NuGetVersion.Parse(pinnedVersion.Version);
            }

            try
            {
                using var cts = new CancellationTokenSource(NuGetTimeout);
                ILogger logger = NuGet.Common.NullLogger.Instance;
                SourceCacheContext cache = new();
                SourceRepository repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
                FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>(cts.Token);
                IEnumerable<NuGetVersion> versions = await resource.GetAllVersionsAsync(nuget, cache, logger, cts.Token);
                var latest = versions.Where(v => !v.IsPrerelease).ToList().Last();
                return latest;
            }
            catch
            {
                // Timeout or network error — return default version if available
                if (DefaultVersions.TryGetValue(nuget, out var defaultData))
                {
                    return NuGetVersion.Parse(defaultData.Version);
                }
                return null;
            }
        }

        public static async Task<string> GetTargetFrameworkAsync(string nuget)
        {
            if (UseDefaultVersion(nuget) && DefaultVersions.TryGetValue(nuget, out var pinnedVersion))
            {
                return pinnedVersion.TargetFramework;
            }

            try
            {
                using var cts = new CancellationTokenSource(NuGetTimeout);
                ILogger logger = NuGet.Common.NullLogger.Instance;
                SourceCacheContext cache = new();
                SourceRepository repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
                FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>(cts.Token);
                var latest = await GetLatestVersionAsync(nuget);
                using MemoryStream packageStream = new();
                await resource.CopyNupkgToStreamAsync(nuget, latest, packageStream, cache, logger, cts.Token);
                packageStream.Seek(0, SeekOrigin.Begin);
                using PackageArchiveReader packageReader = new(packageStream);
                var targetFrameworkVersion = packageReader?.GetSupportedFrameworks()?.OrderByDescending(x => x.Version)?.FirstOrDefault()?.Version;
                if (targetFrameworkVersion != null) return $"net{targetFrameworkVersion.Major}{targetFrameworkVersion.Minor}{(targetFrameworkVersion.Build > 0 ? targetFrameworkVersion.Build.ToString() : "")}";
            }
            catch
            {
                // Timeout or network error — return default target framework if available
                if (DefaultVersions.TryGetValue(nuget, out var defaultData))
                {
                    return defaultData.TargetFramework;
                }
            }
            return "net462";
        }

        private static bool UseDefaultVersion(string nuget)
        {
            return nuget.Equals("Selenium.WebDriver", StringComparison.OrdinalIgnoreCase)
                || nuget.Equals("Selenium.Support", StringComparison.OrdinalIgnoreCase);
        }

        internal static async Task SetReplacementAsync(Dictionary<string, string> replacements, string nuget)
        {
            // Use cache for instant response if available (preloaded when form opened)
            var cached = NuGetVersionCache.TryGetCached(nuget);
            
            string versionString, targetFramework, xmlPackage;
            
            if (cached.HasValue)
            {
                versionString = cached.Value.Version;
                targetFramework = cached.Value.TargetFramework;
                xmlPackage = cached.Value.XmlPackage;
            }
            else
            {
                // Fallback: use default versions immediately to avoid blocking UI
                if (DefaultVersions.TryGetValue(nuget, out var defaultData))
                {
                    versionString = defaultData.Version;
                    targetFramework = defaultData.TargetFramework;
                    xmlPackage = $"<package id=\"{nuget}\" version=\"{versionString}\" targetFramework=\"{targetFramework}\" />";
                }
                else
                {
                    // Unknown package — fetch from NuGet (original behavior)
                    var data = await NuGetVersionCache.GetVersionAsync(nuget);
                    versionString = data.Version;
                    targetFramework = data.TargetFramework;
                    xmlPackage = data.XmlPackage;
                }
            }
            
            replacements[$"${nuget}.Version$"] = versionString;
            replacements[$"${nuget}.TargetFramework$"] = targetFramework;
            replacements[$"${nuget}.XmlPackage$"] = xmlPackage;
        }
    }
}
