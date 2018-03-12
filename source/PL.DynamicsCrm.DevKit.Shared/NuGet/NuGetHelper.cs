using NuGet;
using System.Collections.Generic;
using System.Linq;

namespace PL.DynamicsCrm.DevKit.Shared.NuGet
{
    public class NuGetHelper
    {
        public static List<IPackage> GetPackages(string packageId)
        {
            const string url = "https://www.nuget.org/api/v2/";
            var repo = PackageRepositoryFactory.Default.CreateRepository(url);
            var packages = repo
                .FindPackagesById(packageId)
                .Where(package => !package.Version.ToOriginalString().ToLower().Contains("preview"))
                .OrderByDescending(package => package.Version.ToOriginalString())
                .ToList();
            return packages;
        }

        public static List<NuGetPackage> GetMicrosoftCrmSdkCoreAssembliesPackages()
        {
            var list = GetPackages("Microsoft.CrmSdk.CoreAssemblies");
            var packages = (from item in list
                            orderby item.Version.ToOriginalString() descending
                            select new NuGetPackage
                            {
                                Version = item.Version.ToOriginalString()
                            }).ToList();
            return packages;
        }

        public static NuGetPackage GetPLDynamicsCrmDevKitCliPackage()
        {
            var list = GetPackages("PL.DynamicsCrm.DevKit.Cli");
            var packages = (from item in list
                            orderby item.Version.ToOriginalString() descending
                            select new NuGetPackage
                            {
                                Version = item.Version.ToOriginalString()
                            }).ToList();
            return packages.FirstOrDefault();
        }
    }
}
