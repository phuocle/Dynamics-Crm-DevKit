using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class DownloadWebResource : IWizard
    {
        private DTE DTE { get; set; }
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

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            try
            {
                DTE = (DTE)automationObject;
                var projects = (object[])DTE.ActiveSolutionProjects;
                var project = (Project)projects[0];
                if (project == null) return;
                var dir = Path.GetDirectoryName(project.FullName);
                var downloadFile = Path.Combine(dir, "download.webresources.bat");
                if (File.Exists(downloadFile))
                {
                    MessageBox.Show("You added this file: download.webresources.bat to your active project", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
                var form = new FormConnection(DTE);
                if (form.ShowDialog() != DialogResult.OK) return;
                var crmConnectionString = CrmConnectionString(form.CrmConnection);

                var downloadContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.webresource.download.webresources.bat");
                downloadContent = downloadContent.Replace("$CrmConnectionString$", crmConnectionString);
                Utility.ForceWriteAllTextWithoutUTF8(downloadFile, downloadContent);
                project.ProjectItems.AddFromFile(downloadFile);

                var deployFile = Path.Combine(dir, "deploy.debug.bat");
                if (!File.Exists(deployFile))
                {
                    var deployContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.webresource.deploy.debug.bat");
                    deployContent = deployContent.Replace("$CrmConnectionString$", crmConnectionString);
                    Utility.ForceWriteAllTextWithoutUTF8(deployFile, deployContent);
                    project.ProjectItems.AddFromFile(deployFile);
                }
                var packagesFile = Path.Combine(dir, "packages.config");
#if DEBUG
                var cliVersion = Const.Version;
#else
                var cliVersion = NugetHelper.GetLatestPackageVersion(Const.PLDynamicsCrmDevKitCli);
#endif
                if (!File.Exists(packagesFile))
                {
                    var packagesContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.webresource.packages.config");
                    packagesContent = packagesContent.Replace("$DynamicsCrm.DevKit.Cli.Version$", cliVersion);
                    Utility.ForceWriteAllText(packagesFile, packagesContent);
                    project.ProjectItems.AddFromFile(packagesFile);
                }
                else
                {
                    var packagesContent = File.ReadAllText(packagesFile);
                    if (packagesContent.IndexOf("DynamicsCrm.DevKit.Cli") < 0)
                    {
                        var packageLine = "\t<package id=\"DynamicsCrm.DevKit.Cli\" version=\"$DynamicsCrm.DevKit.Cli.Version$\" />\r\n";
                        packageLine = packageLine.Replace("$DynamicsCrm.DevKit.Cli.Version$", cliVersion);
                        packagesContent = packagesContent.Replace("</packages>", packageLine + "</packages>");
                        Utility.ForceWriteAllText(packagesFile, packagesContent);
                    }
                }
                project.Save();
            }
            catch
            {
                throw;
            }
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

        public bool ShouldAddProjectItem(string filePath)
        {
            return false;
        }
    }
}
