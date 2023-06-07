using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio.Shell;
using NuGet.Common;
using NuGet.Configuration;
using NuGet.Packaging;
using NuGet.Packaging.Core;
using NuGet.Packaging.Signing;
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
using static Microsoft.VisualStudio.Shell.ThreadedWaitDialogHelper;

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


        internal static string GetMicrosoftPowerAppsCLIFolder()
        {
            return ThreadHelper.JoinableTaskFactory.Run(GetMicrosoftPowerAppsCLIFolderAsync);
        }

        public static async Task<string> GetMicrosoftPowerAppsCLIFolderAsync()
        {
            var latestVersion = (await ListPackageVersionsAsync("Microsoft.PowerApps.CLI")).Last();
            var settings = NuGet.Configuration.Settings.LoadDefaultSettings(null);
            var globalPackagesFolder = SettingsUtility.GetGlobalPackagesFolder(settings);
            var folder = $"{globalPackagesFolder}microsoft.powerapps.cli\\{latestVersion.OriginalVersion}";
            if (Directory.Exists(folder)) return folder;
            ILogger logger = NullLogger.Instance;
            CancellationToken cancellationToken = CancellationToken.None;
            SourceCacheContext cache = new SourceCacheContext();
            SourceRepository repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
            FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();
            using MemoryStream packageStream = new MemoryStream();
            await resource.CopyNupkgToStreamAsync("Microsoft.PowerApps.CLI", latestVersion, packageStream, cache, logger, cancellationToken);
            packageStream.Seek(0, SeekOrigin.Begin);
            var downloadResult = await GlobalPackagesFolderUtility.AddPackageAsync(
                "https://api.nuget.org/v3/index.json",
                new PackageIdentity("Microsoft.PowerApps.CLI", latestVersion),
                packageStream,
                globalPackagesFolder,
                parentId: Guid.Empty,
                ClientPolicyContext.GetClientPolicy(settings, logger),
                logger,
                cancellationToken);
            return folder;
        }
    }
}
