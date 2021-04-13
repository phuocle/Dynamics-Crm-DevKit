using System.Collections.Generic;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using EnvDTE;

namespace DynamicsCrm.DevKit.Wizard
{
    public class Wizard
    {
        public static void ProcessProjectReplacementsDictionary(Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            replacementsDictionary.Add("$CrmConnectionString$", form.WizardCrmConnectionString);
            replacementsDictionary.Add("$ShortCrmName$", form.WizardShortCrmName);
            replacementsDictionary.Add("$NameSpace$", Utility.SafeNamespace(form.WizardNameSpace));
            replacementsDictionary.Add("$SharedNameSpace$", Utility.GetSharedNameSpace(form.DTE));
            var nameSpace = Utility.SafeNamespace(form.WizardNameSpace);
            if (nameSpace.Contains($".{ProjectType.Plugin.ToString()}."))
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace.Replace($".{ItemType.Plugin.ToString()}.", $".{ItemType.Plugin.ToString()}"));
            else
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace);
            replacementsDictionary.Add("$DevKitVersion$", Const.Version);
            replacementsDictionary.Add("$SharedProject$", Utility.GetSharedProject(form.DTE));
            replacementsDictionary.Add("$ProjectName$", form.ProjectName);
            replacementsDictionary.Add("$LogicalProjectName$", form.ProjectName.ToLower());

            replacementsDictionary.Add("$ProjectNetVersion$", Utility.GetProjectNetVersion(form.ComboBoxCrmName));
            replacementsDictionary.Add("$CrmUrl$", form?.CrmConnection?.Url ?? string.Empty);
            replacementsDictionary.Add("$CrmUserName$", form?.CrmConnection?.UserName ?? string.Empty);

            replacementsDictionary.Add("$DynamicsCrm.DevKit.Cli.Version$", NugetHelper.GetLatestPackageVersion(Const.DynamicsCrmDevKitCli));
            replacementsDictionary.Add("$DynamicsCrm.DevKit.Analyzers.Version$", NugetHelper.GetLatestPackageVersion(Const.DynamicsCrmDevKitAnalyzers));

            replacementsDictionary.Add("$WebApiClientMin$", Utility.GetWebApiClientMin(form.ProjectJsName));
            replacementsDictionary.Add("$ProjectJsName$", form.ProjectJsName);

            var CoreAssemblies = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkCoreAssemblies, form.ComboBoxCrmName);
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreAssemblies.Version$", CoreAssemblies.Version);
            if (form.ComboBoxCrmName.StartsWith(Const.DynamicsCrm2013) || form.ComboBoxCrmName.StartsWith(Const.DynamicsCrm2015))
                CoreAssemblies.TargetFramework = "45";
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreAssemblies.TargetFramework$", CoreAssemblies.TargetFramework);

            var Workflow = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkWorkflow, form.ComboBoxCrmName);
            replacementsDictionary.Add("$Microsoft.CrmSdk.Workflow.Version$", Workflow.Version);
            replacementsDictionary.Add("$Microsoft.CrmSdk.Workflow.TargetFramework$", Workflow.TargetFramework);

            var Data = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkData, form.ComboBoxCrmName);
            replacementsDictionary.Add("$Microsoft.CrmSdk.Data.Version$", Data.Version);
            replacementsDictionary.Add("$Microsoft.CrmSdk.Data.TargetFramework$", Data.TargetFramework);

            var coreToolsVersion = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkCoreTools);
            replacementsDictionary.Add("$Microsoft.CrmSdk.CoreTools.Version$", coreToolsVersion);

            if (form.ProjectType == ProjectType.Test || form.ProjectType == ProjectType.Console)
            {
                var Deployment = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkDeployment, form.ComboBoxCrmName);
                replacementsDictionary.Add("$Microsoft.CrmSdk.Deployment.Version$", Deployment.Version);
                replacementsDictionary.Add("$Microsoft.CrmSdk.Deployment.TargetFramework$", Deployment.TargetFramework);
                if (form.ComboBoxCrmName != Const.DynamicsCrm2011)
                {
                    var CoreAssembly = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkXrmToolingCoreAssembly, form.ComboBoxCrmName);
                    replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.Version$", CoreAssembly.Version);
                    replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.TargetFramework$", CoreAssembly.TargetFramework);

                    var WpfControls = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkXrmToolingWpfControls, form.ComboBoxCrmName);
                    replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.WpfControls.Version$", WpfControls.Version);
                    replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.WpfControls.TargetFramework$", WpfControls.TargetFramework);
                }
                var shortPackage = "." + form.WizardShortCrmName;
                if (shortPackage == ".365") shortPackage = ".9";
                else if (shortPackage == ".2011") shortPackage = string.Empty;
                var fakeXrmEasyPackage = "FakeXrmEasy" + shortPackage;
                replacementsDictionary.Add("$FakeXrmEasy.Package$", fakeXrmEasyPackage);
                var fakeXrmEasyVersion = NugetHelper.GetLatestPackageVersion(fakeXrmEasyPackage);
                replacementsDictionary.Add("$FakeXrmEasy.Version$", fakeXrmEasyVersion);
                var fakeXrmEasyTargetFramework = NugetHelper.GetLatestPackageTargetFramework(fakeXrmEasyPackage);
                replacementsDictionary.Add("$FakeXrmEasy.TargetFramework$", fakeXrmEasyTargetFramework);
                replacementsDictionary.Add("$ProjectNameTested$", form.ProjectName.Substring(0, form.ProjectName.Length - ".Test".Length));
                replacementsDictionary.Add("$ProjectProxyTypes$", Utility.GetProxyTypesProject(form.DTE));
            }
            else if (form.ProjectType == ProjectType.UiTest)
            {
                replacementsDictionary.Add("$Dynamics365.UIAutomation.Api.Version$", NugetHelper.GetLatestPackageVersion(Const.Dynamics365UIAutomationApi));
                replacementsDictionary.Add("$Dynamics365.UIAutomation.Api.TargetFramework$", NugetHelper.GetLatestPackageTargetFramework(Const.Dynamics365UIAutomationApi));
                replacementsDictionary.Add("$Selenium.Chrome.WebDriver.Version$", NugetHelper.GetLatestPackageVersion(Const.SeleniumChromeWebDriver));
                replacementsDictionary.Add("$Selenium.Support.Version$", NugetHelper.GetLatestPackageVersion(Const.SeleniumSupport));
                replacementsDictionary.Add("$Selenium.Support.TargetFramework$", NugetHelper.GetLatestPackageTargetFramework(Const.SeleniumSupport));
                replacementsDictionary.Add("$Selenium.WebDriver.Version$", NugetHelper.GetLatestPackageVersion(Const.SeleniumWebDriver));
                replacementsDictionary.Add("$Selenium.WebDriver.TargetFramework$", NugetHelper.GetLatestPackageTargetFramework(Const.SeleniumWebDriver));
                ProcessProjectConsoleReplacementsDictionary(replacementsDictionary, form);
                var CoreAssembly = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkXrmToolingCoreAssembly, form.ComboBoxCrmName);
                replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.Version$", CoreAssembly.Version);
                replacementsDictionary.Add("$Microsoft.CrmSdk.XrmTooling.CoreAssembly.TargetFramework$", CoreAssembly.TargetFramework);
                var Deployment = NugetHelper.GetLatestPackageVersion(Const.MicrosoftCrmSdkDeployment, form.ComboBoxCrmName);
                replacementsDictionary.Add("$Microsoft.CrmSdk.Deployment.Version$", Deployment.Version);
                replacementsDictionary.Add("$Microsoft.CrmSdk.Deployment.TargetFramework$", Deployment.TargetFramework);
            }
        }

        public static void ProcessProjectConsoleReplacementsDictionary(Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            var ClientIdName = form?.CrmConnection?.Type == "ClientSecret" ? "ClientId" : "Username";
            var ClientSecretName = form?.CrmConnection?.Type == "ClientSecret" ? "ClientSecret" : "Password";
            var AuthTypeValue = form?.CrmConnection?.Type;
            var UrlValue = form?.CrmConnection?.Url;
            var ClientIdValue = form?.CrmConnection?.UserName;
            var ClientSecretValue = form?.CrmConnection?.Type == "ClientSecret" ? form?.CrmConnection?.Password : EncryptDecrypt.DecryptString(form?.CrmConnection?.Password);
            replacementsDictionary.Add("$ClientId$", ClientIdName ?? string.Empty);
            replacementsDictionary.Add("$ClientSecret$", ClientSecretName ?? string.Empty);
            replacementsDictionary.Add("$AuthTypeValue$", AuthTypeValue ?? string.Empty);
            replacementsDictionary.Add("$UrlValue$", UrlValue ?? string.Empty);
            replacementsDictionary.Add("$ClientIdValue$", ClientIdValue ?? string.Empty);
            replacementsDictionary.Add("$ClientSecretValue$", ClientSecretValue ?? string.Empty);
        }

        public static void ProcessItemReplacementsDictionary(Dictionary<string, string> replacementsDictionary, FormItem form)
        {
            replacementsDictionary.Add("$class$", form.Class);
            replacementsDictionary.Add("$NameSpace$", replacementsDictionary["$rootnamespace$"]);
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            if (nameSpace.Contains($".{ProjectType.Plugin.ToString()}."))
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace.Replace($".{ItemType.Plugin.ToString()}.", $".{ItemType.Plugin.ToString()}"));
            else
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace);
            replacementsDictionary.Add("$SharedNameSpace$", Utility.GetSharedNameSpace(form.DTE));
            replacementsDictionary.Add("$ProxyTypesNameSpace$", Utility.GetProxyTypesNameSpace(form.DTE));
            if (form.ItemType == ItemType.LateBound)
            {
                replacementsDictionary.Add("$GeneratedLateBoundClass$", form.GeneratedLateBoundClass);
            }
            else if (form.ItemType == ItemType.Test)
            {
                try
                {
                    var projects = (object[])form.DTE.ActiveSolutionProjects;
                    var project = (Project)projects[0];
                    var logicalname = project.Name.Split(".".ToCharArray())[project.Name.Split(".".ToCharArray()).Length - 2].ToLower();
                    var execution = form.Class.EndsWith("Asynchronous") ? "Asynchronous" : (form.Class.EndsWith("Synchronous") ? "Synchronous" : "");
                    var stage = form.Class.StartsWith("PreValidation") ? "PreValidation" : (form.Class.StartsWith("Pre") ? "PreOperation" : (form.Class.StartsWith("Post") ? "PostOperation" : ""));
                    var stage2 = form.Class.StartsWith("PreValidation") ? "PreValidation" : (form.Class.StartsWith("Pre") ? "Pre" : (form.Class.StartsWith("Post") ? "Post" : ""));
                    var message = form.Class.Substring(stage2.Length + logicalname.Length);
                    message = message.Substring(0, message.Length - execution.Length);
                    replacementsDictionary.Add("$logicalname$", logicalname);
                    replacementsDictionary.Add("$execution$", execution);
                    replacementsDictionary.Add("$stage_string$", stage);
                    replacementsDictionary.Add("$message$", message);
                }
                catch { }
            }
        }

        public static void ProcessItemReplacementsDictionary(Dictionary<string, string> replacementsDictionary, FormPlugin form)
        {
            replacementsDictionary.Add("$PluginClass$", form.PluginClass);
            replacementsDictionary.Add("$PluginMessage$", form.PluginMessage);
            replacementsDictionary.Add("$PluginComment$", form.PluginComment);
            replacementsDictionary.Add("$PluginLogicalName$", form.PluginLogicalName);
            replacementsDictionary.Add("$PluginStage$", form.PluginStage);
            replacementsDictionary.Add("$PluginExecution$", form.PluginExecution);
            replacementsDictionary.Add("$PluginExecutionInt$", form.PluginExecution == "Synchronous" ? "0" : "1");
            replacementsDictionary.Add("$PluginOrder$", form.PluginOrder);
            replacementsDictionary.Add("$PluginOrder2$", form.PluginOrder2);
            replacementsDictionary.Add("$NameSpace$", replacementsDictionary["$rootnamespace$"]);
            replacementsDictionary.Add("$SharedNameSpace$", Utility.GetSharedNameSpace(form.DTE));
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            if (nameSpace.Contains($".{ItemType.Plugin.ToString()}."))
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace.Replace($".{ItemType.Plugin.ToString()}.", $".{ItemType.Plugin.ToString()}"));
            else
                replacementsDictionary.Add("$NameSpacePlugin$", nameSpace);
        }
    }
}
