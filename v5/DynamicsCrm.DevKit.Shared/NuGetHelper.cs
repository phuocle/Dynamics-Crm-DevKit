using NuGet.Common;
using NuGet.Packaging;
using NuGet.Protocol;
using NuGet.Protocol.Core.Types;
using NuGet.Versioning;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    internal class NuGetHelper
    {
        public static async Task<NuGetVersion> GetLatestVersionAsync(string nuget)
        {
            try
            {
                ILogger logger = NuGet.Common.NullLogger.Instance;
                CancellationToken cancellationToken = CancellationToken.None;
                SourceCacheContext cache = new();
                SourceRepository repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
                FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();
                IEnumerable<NuGetVersion> versions = await resource.GetAllVersionsAsync(nuget, cache, logger, cancellationToken);
                var latest = versions.Where(v => !v.IsPrerelease).ToList().Last();
                return latest;
            }
            catch
            {
                return null;
            }
        }

        public static async Task<string> GetTargetFrameworkAsync(string nuget)
        {
            try
            {
                ILogger logger = NuGet.Common.NullLogger.Instance;
                CancellationToken cancellationToken = CancellationToken.None;
                SourceCacheContext cache = new();
                SourceRepository repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
                FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();
                var latest = await GetLatestVersionAsync(nuget);
                using MemoryStream packageStream = new();
                await resource.CopyNupkgToStreamAsync(nuget, latest, packageStream, cache, logger, cancellationToken);
                packageStream.Seek(0, SeekOrigin.Begin);
                using PackageArchiveReader packageReader = new(packageStream);
                var targetFrameworkVersion = packageReader?.GetSupportedFrameworks()?.OrderByDescending(x => x.Version)?.FirstOrDefault()?.Version;
                if (targetFrameworkVersion != null) return $"net{targetFrameworkVersion.Major}{targetFrameworkVersion.Minor}{(targetFrameworkVersion.Build > 0 ? targetFrameworkVersion.Build.ToString() : "")}";
            }
            catch
            {
            }
            return "net462";
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
                // Fallback: fetch from NuGet (original behavior)
                var data = await NuGetVersionCache.GetVersionAsync(nuget);
                versionString = data.Version;
                targetFramework = data.TargetFramework;
                xmlPackage = data.XmlPackage;
            }
            
            replacements[$"${nuget}.Version$"] = versionString;
            replacements[$"${nuget}.TargetFramework$"] = targetFramework;
            replacements[$"${nuget}.XmlPackage$"] = xmlPackage;
        }
    }
}
