using System;
using System.Collections.Generic;
using System.Linq;
using NuGet;

namespace PL.DynamicsCrm.DevKit.Shared.NuGet
{
    public class NuGetHelper
    {
        private List<NuGetPackage> _microsoftCrmSdkCoreAssembliesPackages = null;
        public List<NuGetPackage> MicrosoftCrmSdkCoreAssembliesPackages
        {
            get
            {
                if (_microsoftCrmSdkCoreAssembliesPackages != null)
                    return _microsoftCrmSdkCoreAssembliesPackages;
                var list = GetPackages("Microsoft.CrmSdk.CoreAssemblies");
                if (list == null)
                {
                    return new List<NuGetPackage> { new NuGetPackage {
                        Version = "9.0.2.5",
                        NetVersion = "4.6.2",
                        CrmName = "Dynamics 365"
                    }};
                }
                _microsoftCrmSdkCoreAssembliesPackages = (from item in list
                                                          orderby item.Version.ToOriginalString() descending
                                                          select new NuGetPackage
                                                          {
                                                              Version = item.Version.ToOriginalString(),
                                                              NetVersion = item.GetSupportedFrameworks().FirstOrDefault()?.Version.ToString(),
                                                              CrmName = GetCrmName(item.Version.Version)
                                                          }).ToList();
                return _microsoftCrmSdkCoreAssembliesPackages;
            }
        }

        private string GetCrmName(Version version)
        {
            if (version.Major == 5) return "Dynamics Crm 2011";
            if (version.Major == 6) return "Dynamics Crm 2013";
            if (version.Major == 7) return "Dynamics Crm 2015";
            if (version.Major == 8 && version < new Version("8.2.0")) return "Dynamics Crm 2016";
            return "Dynamics 365";
        }

        public List<string> CrmNameDataSource
        {
            get
            {
                return MicrosoftCrmSdkCoreAssembliesPackages.Select(x => x.CrmName).Distinct().ToList();
            }
        }

        public List<NuGetPackage> CrmVersionDataSource(string crmName)
        {
            return MicrosoftCrmSdkCoreAssembliesPackages.Where(x => x.CrmName == crmName).ToList<NuGetPackage>();
        }

        private List<NuGetPackage> _microsoftCrmSdkCoreToolsPackages = null;
        public List<NuGetPackage> MicrosoftCrmSdkCoreToolsPackages
        {
            get
            {
                if (_microsoftCrmSdkCoreToolsPackages != null)
                    return _microsoftCrmSdkCoreToolsPackages;
                var list = GetPackages("Microsoft.CrmSdk.CoreTools");
                list = null;
                if (list == null)
                {
                    return new List<NuGetPackage> { new NuGetPackage {
                        Version = "9.0.2.11",
                        NetVersion = "4.6.2",
                        CrmName = "Dynamics 365"
                    }};
                }
                _microsoftCrmSdkCoreToolsPackages = (from item in list
                                                     orderby item.Version.ToOriginalString() descending
                                                     select new NuGetPackage
                                                     {
                                                         Version = item.Version.ToOriginalString(),
                                                         NetVersion = item.GetSupportedFrameworks().FirstOrDefault()?.Version.ToString(),
                                                         CrmName = GetCrmName(item.Version.Version)
                                                     }).ToList();
                return _microsoftCrmSdkCoreToolsPackages;
            }
        }

        public NuGetPackage PLDynamicsCrmDevKitCliPackage
        {
            get
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
        }

        public NuGetPackage PLDynamicsCrmDevKitAnalyzersPackage
        {
            get
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

        private List<IPackage> GetPackages(string packageId)
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
    }
}
