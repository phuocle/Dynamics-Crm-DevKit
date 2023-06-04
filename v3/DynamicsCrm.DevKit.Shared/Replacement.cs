using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace DynamicsCrm.DevKit.Shared
{
    public class Replacement
    {
        private static Dictionary<string, string> replacements = new Dictionary<string, string>();
        public static string DestinationDirectory => replacements["$destinationdirectory$"];

        internal static void Set(Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            replacements = replacementsDictionary;
            AddCommonReplacements();
            AddNuGetReplacements();

            replacements["$destinationdirectory$"] = $"{Directory.GetParent(DestinationDirectory).FullName}\\{form.ProjectName}";
            replacements["$projectname$"] = form.ProjectName;
            replacements["$safeprojectname$"] = form.ProjectName;

            replacements.Add("$LogicalProjectName$", form.ProjectName.ToLower());
            replacements.Add("$NameSpace$", Utility.SafeNamespace(form.ProjectName));
            replacements.Add("$NameSpacePlugin$", replacements["$NameSpace$"].Replace(".Plugin.", ".Plugin"));
            replacements.Add("$IsOOBConnection$", form.IsOOBConnection ? "1" : "0");
            replacements.Add("$CrmConnectionString$", XrmHelper.BuildConnectionString(form.DataverseConnectionString));
            replacements.Add("$ClientId$", form?.CrmConnection?.Type == "ClientSecret" ? "ClientId" : "Username");
            replacements.Add("$ClientSecret$", form?.CrmConnection?.Type == "ClientSecret" ? "ClientSecret" : "Password");
            replacements.Add("$AuthTypeValue$", form?.CrmConnection?.Type ?? string.Empty);
            replacements.Add("$UrlValue$", form?.CrmConnection?.Url ?? string.Empty);
            replacements.Add("$ClientIdValue$", form?.CrmConnection?.UserName ?? string.Empty);
            replacements.Add("$ClientSecretValue$", form?.CrmConnection?.Type == "ClientSecret" ? form?.CrmConnection?.Password : (form?.CrmConnection?.Password != string.Empty ? EncryptDecrypt.DecryptString(form?.CrmConnection?.Password) : string.Empty) ?? string.Empty);
        }

        private static void AddNuGetReplacements()
        {
            var versionDynamicsCrmDevKitCli = NuGetHelper.ListPackageVersions("DynamicsCrm.DevKit.Cli").Last();
            replacements.Add("$DynamicsCrm.DevKit.Cli.version$", versionDynamicsCrmDevKitCli.OriginalVersion);

            var versionDynamicsCrmDevKitAnalyzers = NuGetHelper.ListPackageVersions("DynamicsCrm.DevKit.Analyzers").Last();
            replacements.Add("$DynamicsCrm.DevKit.Analyzers.version$", versionDynamicsCrmDevKitAnalyzers.OriginalVersion);

            var versionMicrosoftCrmSdkCoreAssemblies = NuGetHelper.ListPackageVersions("Microsoft.CrmSdk.CoreAssemblies").Last();
            replacements.Add("$Microsoft.CrmSdk.CoreAssemblies.version$", versionMicrosoftCrmSdkCoreAssemblies.OriginalVersion);
            replacements.Add("$Microsoft.CrmSdk.CoreAssemblies.targetFramework$", NuGetHelper.GetTargetFramework("Microsoft.CrmSdk.CoreAssemblies", versionMicrosoftCrmSdkCoreAssemblies));

            var versionMicrosoftCrmSdkDeployment = NuGetHelper.ListPackageVersions("Microsoft.CrmSdk.Deployment").Last();
            replacements.Add("$Microsoft.CrmSdk.Deployment.version$", versionMicrosoftCrmSdkDeployment.OriginalVersion);
            replacements.Add("$Microsoft.CrmSdk.Deployment.targetFramework$", NuGetHelper.GetTargetFramework("Microsoft.CrmSdk.Deployment", versionMicrosoftCrmSdkDeployment));

            var versionMicrosoftCrmSdkWorkflow = NuGetHelper.ListPackageVersions("Microsoft.CrmSdk.Workflow").Last();
            replacements.Add("$Microsoft.CrmSdk.Workflow.version$", versionMicrosoftCrmSdkWorkflow.OriginalVersion);
            replacements.Add("$Microsoft.CrmSdk.Workflow.targetFramework$", NuGetHelper.GetTargetFramework("Microsoft.CrmSdk.Workflow", versionMicrosoftCrmSdkWorkflow));

            var versionMicrosoftCrmSdkXrmToolingCoreAssembly = NuGetHelper.ListPackageVersions("Microsoft.CrmSdk.XrmTooling.CoreAssembly").Last();
            replacements.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.version$", versionMicrosoftCrmSdkXrmToolingCoreAssembly.OriginalVersion);
            replacements.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.targetFramework$", NuGetHelper.GetTargetFramework("Microsoft.CrmSdk.XrmTooling.CoreAssembly", versionMicrosoftCrmSdkXrmToolingCoreAssembly));

            var versionMicrosoftCrmSdkXrmToolingWpfControls = NuGetHelper.ListPackageVersions("Microsoft.CrmSdk.XrmTooling.WpfControls").Last();
            replacements.Add("$Microsoft.CrmSdk.XrmTooling.WpfControls.version$", versionMicrosoftCrmSdkXrmToolingWpfControls.OriginalVersion);
            replacements.Add("$Microsoft.CrmSdk.XrmTooling.WpfControls.targetFramework$", NuGetHelper.GetTargetFramework("Microsoft.CrmSdk.XrmTooling.WpfControls", versionMicrosoftCrmSdkXrmToolingWpfControls));

            var versionMicrosoftCrmSdkData = NuGetHelper.ListPackageVersions("Microsoft.CrmSdk.Data").Last();
            replacements.Add("$Microsoft.CrmSdk.Data.version$", versionMicrosoftCrmSdkData.OriginalVersion);
            replacements.Add("$Microsoft.CrmSdk.Data.targetFramework$", NuGetHelper.GetTargetFramework("Microsoft.CrmSdk.Data", versionMicrosoftCrmSdkData));
        }

        private static void AddCommonReplacements()
        {
            replacements.Add("$DevKitVersion$", Const.Version);
            replacements.Add("$SharedNameSpace$", $"{VsixHelper.GetSolutionName()}.Shared");
            replacements.Add("$SharedProject$", $"{VsixHelper.GetSolutionName()}.Shared");
        }
    }
}
