using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.NuGet;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class DownloadWebResourcesItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }
        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
        }

        private string CrmConnectionString(CrmConnection CrmConnection)
        {
            var url = CrmConnection.Url.Substring(0, CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
            url = url.Replace(".api.", ".");
            if (CrmConnection.Url.Contains(".dynamics.com"))
                return $"AuthType=Office365;Url={url};Username={CrmConnection.UserName};Password={CrmConnection.Password};";
            var domain = CrmConnection.UserName.Split("\\".ToCharArray())[0];
            var user = CrmConnection.UserName.Split("\\".ToCharArray())[1];
            return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={CrmConnection.Password};";
        }


        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind != WizardRunKind.AsNewItem) return;
            Dte = (DTE)automationObject;
            var projects = (object[])Dte.ActiveSolutionProjects;
            var project = (Project)projects[0];
            if (project == null) return;
            var dir = Path.GetDirectoryName(project.FullName);
            var downloadFile = Path.Combine(dir, "download.webresources.bat");
            if (File.Exists(downloadFile))
            {
                MessageBox.Show("You added this file: download.webresources.bat to your active project", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            var form = new FormConnection(Dte);
            if (form.ShowDialog() != DialogResult.OK) return;
            var crmConnectionString = CrmConnectionString(form.CrmConnection);

            var cliContent = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.PL.DynamicsCrm.DevKit.Cli.json");
            var dirSolution = Path.GetDirectoryName(Dte?.Solution?.FullName);
            var cliFile = Path.Combine(dirSolution, "PL.DynamicsCrm.DevKit.Cli.json");
            if (!File.Exists(cliFile))
                File.WriteAllText(cliFile, cliContent);

            var downloadFileContent = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.DownloadWebResources.download.webresources.bat");
            downloadFileContent = downloadFileContent
                .Replace("$CrmConnectionString$", crmConnectionString)
                .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(project.FullName));
            if (!File.Exists(downloadFile))
            {
                File.WriteAllText(downloadFile, downloadFileContent);
                project.ProjectItems.AddFromFile(downloadFile);
            }

            var deployFile = Path.Combine(dir, "deploy.debug.bat");
            var deployFileContent = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.DownloadWebResources.deploy.debug.bat");
            deployFileContent = deployFileContent
                .Replace("$CrmConnectionString$", crmConnectionString)
                .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(project.FullName));
            if (!File.Exists(deployFile))
            {
                File.WriteAllText(deployFile, deployFileContent);
                project.ProjectItems.AddFromFile(deployFile);
            }

            var packagesFile = Path.Combine(dir, "packages.config");
            var nuget = new NuGetHelper();
            var version = nuget.PLDynamicsCrmDevKitCliPackage.Version;
            if (!File.Exists(packagesFile)) {
                var packagesFileContent = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.DownloadWebResources._packages.config");
                packagesFileContent = packagesFileContent.Replace("$PLDynamicsCrmDevKitCliVersion$", version);
                File.WriteAllText(packagesFile, packagesFileContent);
                project.ProjectItems.AddFromFile(packagesFile);
            }
            else
            {
                var packagesFileContent = File.ReadAllText(packagesFile);
                if (packagesFileContent.IndexOf("PL.DynamicsCrm.DevKit.Cli") < 0)
                {
                    var packageLine = "\t<package id='PL.DynamicsCrm.DevKit.Cli' version='$PLDynamicsCrmDevKitCliVersion$' targetFramework='net452' />\r\n";
                    packageLine = packageLine.Replace("'", "\"").Replace("$PLDynamicsCrmDevKitCliVersion$", version);
                    packagesFileContent = packagesFileContent.Replace("</packages>", packageLine + "</packages>");
                    File.WriteAllText(packagesFile, packagesFileContent);
                }
            }
            project.Save();
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return false;
        }
    }
}
