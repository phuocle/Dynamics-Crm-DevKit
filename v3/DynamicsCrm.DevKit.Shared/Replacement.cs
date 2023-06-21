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
        private static Dictionary<string, string> replacements = new();
        public static string DestinationDirectory => replacements["$destinationdirectory$"];

        internal static void SetItem(Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            replacements = replacementsDictionary;
            AddCommonReplacements();
            replacements.Add("$class$", form.ItemName);
            if (replacementsDictionary["$rootnamespace$"].EndsWith(".Test"))
            {
                var NameSpaceWithoutTest = replacementsDictionary["$rootnamespace$"].Substring(0, replacementsDictionary["$rootnamespace$"].Length - ".Test".Length);
                NameSpaceWithoutTest = NameSpaceWithoutTest.Replace(".Plugin.", ".Plugin");
                replacementsDictionary.Add("$NameSpaceWithoutTest$", NameSpaceWithoutTest);
            }
        }

        internal static void SetItem(Dictionary<string, string> replacementsDictionary, FormPlugin form)
        {
            replacements = replacementsDictionary;
            AddCommonReplacements();


            replacementsDictionary.Add("$PluginClass$", form.PluginClass);
            replacementsDictionary.Add("$PluginMessage$", form.PluginMessage);
            replacementsDictionary.Add("$PluginComment$", form.PluginComment);
            replacementsDictionary.Add("$PluginLogicalName$", form.PluginLogicalName);
            replacementsDictionary.Add("$PluginLogicalNameInt$", form.PluginLogicalName == "none" ? "0" : "1");
            replacementsDictionary.Add("$PluginStage$", form.PluginStage);
            replacementsDictionary.Add("$PluginExecution$", form.PluginExecution);
            replacementsDictionary.Add("$PluginExecutionInt$", form.PluginExecution == "Synchronous" ? "0" : "1");
            replacementsDictionary.Add("$PluginOrder$", form.PluginOrder);
            replacementsDictionary.Add("$PluginOrder2$", form.PluginOrder == "1" ? string.Empty : form.PluginOrder);
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            if (nameSpace.Contains($".{ItemType.Plugin}."))
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace.Replace($".{ItemType.Plugin}.", $".{ItemType.Plugin}"));
            else
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace);


        }

        internal static void Set(Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            replacements = replacementsDictionary;
            AddCommonReplacements();
            AddNuGetReplacements();
            AddDevkit(replacementsDictionary);

            replacements["$destinationdirectory$"] = $"{Directory.GetParent(DestinationDirectory).FullName}\\{form.ProjectName}";
            replacements["$projectname$"] = form.ProjectName;
            replacements["$safeprojectname$"] = form.ProjectName;

            replacements.Add("$LogicalProjectName$", form.ProjectName.ToLower());
            replacements.Add("$ProjectNameTested$", form.ProjectName.Substring(0, form.ProjectName.Length - ".Test".Length));
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

        public static void AddDevkit(Dictionary<string, string> replacementsDictionary)
        {
            replacementsDictionary.Add("$devkit.js$", Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.devkit.js"));
            replacementsDictionary.Add("$devkit.d.ts$", Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.devkit.d.ts"));
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

            var versionMicrosoftCrmSdkCoreTools = NuGetHelper.ListPackageVersions("Microsoft.CrmSdk.CoreTools").Last();
            replacements.Add("$Microsoft.CrmSdk.CoreTools.version$", versionMicrosoftCrmSdkCoreTools.OriginalVersion);

            //var versionDynamics365UIAutomationApi = NuGetHelper.ListPackageVersions("Dynamics365.UIAutomation.Api").Last();
            //replacements.Add("$Dynamics365.UIAutomation.Api.version$", versionDynamics365UIAutomationApi.OriginalVersion);
            //replacements.Add("$Dynamics365.UIAutomation.Api.targetFramework$", NuGetHelper.GetTargetFramework("Dynamics365.UIAutomation.Api", versionDynamics365UIAutomationApi));
            //var versionSeleniumWebDriver = NuGetHelper.ListPackageVersions("Selenium.WebDriver").Last();
            //replacements.Add("$Selenium.WebDriver.version$", versionSeleniumWebDriver.OriginalVersion);
            //replacements.Add("$Selenium.WebDriver.targetFramework$", NuGetHelper.GetTargetFramework("Selenium.WebDriver", versionSeleniumWebDriver));
            //var versionSeleniumWebDriverChromeDriver = NuGetHelper.ListPackageVersions("Selenium.WebDriver.ChromeDriver").Last();
            //replacements.Add("$Selenium.WebDriver.ChromeDriver.version$", versionSeleniumWebDriverChromeDriver.OriginalVersion);
            //replacements.Add("$Selenium.WebDriver.ChromeDriver.targetFramework$", NuGetHelper.GetTargetFramework("Selenium.WebDriver.ChromeDriver", versionSeleniumWebDriverChromeDriver));
            //var versionSeleniumSupport = NuGetHelper.ListPackageVersions("Selenium.Support").Last();
            //replacements.Add("$Selenium.Support.version$", versionSeleniumSupport.OriginalVersion);
            //replacements.Add("$Selenium.Support.targetFramework$", NuGetHelper.GetTargetFramework("Selenium.Support", versionSeleniumSupport));
        }

        private static void AddCommonReplacements()
        {
            var solutionName = VsixHelper.GetSolutionName();
            replacements.Add("$NameSpace$", replacements["$rootnamespace$"]);
            replacements.Add("$DevKitVersion$", Const.Version);
            replacements.Add("$SharedNameSpace$", $"{solutionName}.Shared");
            replacements.Add("$SharedProject$", $"{solutionName}.Shared");
            replacements.Add("$SharedTestProject$", $"{solutionName}.Shared.Test");
            replacements.Add("$ProjectProxyTypes$", $"{solutionName}.ProxyTypes");
        }
    }
}
