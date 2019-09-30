using System.Collections.Generic;
using System.Linq;
using NuGet;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Shared.Helper
{
    public class NugetHelper
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
                    .OrderByDescending(package => package.Version)
                    .ToList();
                return packages;
            }
            catch
            {
                return null;
            }
        }

        public static string GetLatestPackageVersion(string packageId)
        {
            var packages = GetPackages(packageId);
            if (packages == null) return DefaultPackageVersion(packageId);
            var package = (from p in packages
                           where p.IsLatestVersion
                           orderby p.Version descending
                           select p
                           ).FirstOrDefault();
            if (package == null) return DefaultPackageVersion(packageId);
            return package.Version.ToOriginalString();
        }

        public static string GetLatestPackageTargetFramework(string packageId)
        {
            var packages = GetPackages(packageId);
            if (packages == null) return DefaultPackageTargetFramework(packageId);
            var package = (from p in packages
                           where p.IsLatestVersion
                           orderby p.Version descending
                           select p
                           ).FirstOrDefault();
            if (package == null) return DefaultPackageTargetFramework(packageId);
            return package?.GetSupportedFrameworks()?.OrderByDescending(x => x.Version)?.FirstOrDefault()?.Version?.ToString().Replace(".", "");
        }

        public static CrmNuget GetLatestPackageVersion(string packageId, string comboboxCrmName)
        {
            var parts = comboboxCrmName.Split("-".ToCharArray());
            var crmName = parts[0].Trim();
            var crmVersion = parts[1].Trim();
            if (crmName.StartsWith(Const.DynamicsCrm2013) || crmName.StartsWith(Const.DynamicsCrm2015)) crmVersion = "4.5";
            var packages = GetPackages(packageId);
            var package = (from p in packages
                           where
                                crmName == Utility.GetCrmName(p.Version.Version) &&
                                p.GetSupportedFrameworks().Any(x => x.Version.ToString() == crmVersion)
                           orderby p.Version descending
                           select p
                           ).FirstOrDefault();
            if (package != null)
            {
                return new CrmNuget
                {
                    Version = package.Version.ToOriginalString(),
                    TargetFramework = package.GetSupportedFrameworks().First(x => x.Version.ToString() == crmVersion).Version.ToString().Replace(".", "")
                };
            }
            return new CrmNuget
            {
                TargetFramework = "000",
                Version = "0.0.0"
            };
        }

        private static string DefaultPackageTargetFramework(string packageId)
        {
            switch(packageId)
            {
                case "FakeXrmEasy.9":
                    return "462";
                case "FakeXrmEasy.2016":
                case "FakeXrmEasy.2015":
                case "FakeXrmEasy.2013":
                    return "452";
                case "FakeXrmEasy.2011":
                    return "40";
            }
            return "000";
        }

        private static string DefaultPackageVersion(string packageId)
        {
            switch (packageId)
            {
                case Const.PLDynamicsCrmDevKitCli:
                    return Const.Version;
                case Const.PLDynamicsCrmDevKitAnalyzers:
                    return Const.Version;
            }
            return "0.0.0.0";
        }
    }
}
