using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio.Shell;
using NuGet.Common;
using NuGet.Packaging;
using NuGet.Protocol;
using NuGet.Protocol.Core.Types;
using NuGet.Versioning;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Packaging;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    internal class NuGetHelper
    {
        public static List<NuGetVersion> ListPackageVersions(string nuget)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                return await ListPackageVersionsAsync(nuget);
            });
        }
        private static async Task<List<NuGetVersion>> ListPackageVersionsAsync(string nuget)
        {
            ILogger logger = NullLogger.Instance;
            CancellationToken cancellationToken = CancellationToken.None;
            SourceCacheContext cache = new SourceCacheContext();
            SourceRepository repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
            FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();
            IEnumerable<NuGetVersion> versions = await resource.GetAllVersionsAsync(nuget, cache, logger, cancellationToken);
            return versions.ToList();
        }

        internal static string GetTargetFramework(string nuget, NuGetVersion version)
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                return await GetTargetFrameworkAsync(nuget, version);
            });
        }

        private static async Task<string> GetTargetFrameworkAsync(string nuget, NuGetVersion version)
        {
            ILogger logger = NullLogger.Instance;
            CancellationToken cancellationToken = CancellationToken.None;
            SourceCacheContext cache = new SourceCacheContext();
            SourceRepository repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
            FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();
            using MemoryStream packageStream = new MemoryStream();
            await resource.CopyNupkgToStreamAsync(nuget, version, packageStream, cache, logger, cancellationToken);
            using PackageArchiveReader packageReader = new PackageArchiveReader(packageStream);
            var targetFrameworkVersion = packageReader?.GetSupportedFrameworks()?.OrderByDescending(x => x.Version)?.FirstOrDefault()?.Version;
            return $"{targetFrameworkVersion.Major}{targetFrameworkVersion.Minor}{targetFrameworkVersion.Build}";
        }
    }
}
