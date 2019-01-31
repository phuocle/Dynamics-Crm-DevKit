using System.Collections.Generic;
using System.Linq;
using NuGet;

namespace PL.DynamicsCrm.DevKit.Shared.NuGet
{
    public class NuGetHelper
    {
        public static List<IPackage> GetPackages(string packageId)
        {
            try
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
            catch
            {
                return null;
            }
        }

        public static List<NuGetPackage> GetMicrosoftCrmSdkCoreAssembliesPackages()
        {
            var list = GetPackages("Microsoft.CrmSdk.CoreAssemblies");
            if (list == null) return new List<NuGetPackage> { new NuGetPackage { Version = "9.0.2.5" } };
            var packages = (from item in list
                orderby item.Version.ToOriginalString() descending
                select new NuGetPackage
                {
                    Version = item.Version.ToOriginalString()
                }).ToList();
            return packages;
        }

        public static List<NuGetPackage> GetMicrosoftCrmSdkCoreToolsPackages()
        {
            var list = GetPackages("Microsoft.CrmSdk.CoreTools");
            if (list == null) return new List<NuGetPackage> { new NuGetPackage { Version = "9.0.2.6" } };
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
            if (list == null) return new NuGetPackage { Version = Const.Version };
            var packages = (from item in list
                orderby item.Version.ToOriginalString() descending
                select new NuGetPackage
                {
                    Version = item.Version.ToOriginalString()
                }).ToList();
            return packages.FirstOrDefault();
        }

        public static NuGetPackage GetPLDynamicsCrmDevKitAnalyzersPackage()
        {
            var list = GetPackages("PL.DynamicsCrm.DevKit.Analyzers");
            if (list == null) return new NuGetPackage { Version = Const.Version };
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
