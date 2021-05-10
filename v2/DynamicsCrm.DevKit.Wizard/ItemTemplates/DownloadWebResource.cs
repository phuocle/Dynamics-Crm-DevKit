using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
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
                var form = new FormConnection2(DTE);
                if (form.ShowDialog() != DialogResult.OK) return;
                //var crmConnectionString = CrmConnectionString(form.CrmConnection);

                var file = Utility.GetDevKitCliJsonFile(DTE);
                if (!File.Exists(file))
                {
                    var solutionName = Utility.GetSolutionName(DTE);
                    var json = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.DynamicsCrm.DevKit.Cli.json");
                    json = json
                        .Replace("???.Plugin.*.dll", $"{solutionName}.Plugin.*.dll")
                        .Replace("???.CustomAction.*.dll", $"{solutionName}.CustomAction.*.dll")
                        .Replace("???.CustomApi.*.dll", $"{solutionName}.CustomAction.*.dll")
                        .Replace("???.Workflow.*.dll", $"{solutionName}.Workflow.*.dll")
                        .Replace("???.DataProvider.*.dll", $"{solutionName}.DataProvider.*.dll")
                        .Replace("???.*.Test.dll", $"{solutionName}.*.Test.dll")
                        ;
                    Utility.ForceWriteAllText(file, json);
                }

                var downloadContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.webresource.download.webresources.bat");
                if (form.Check == "1")
                {
                    downloadContent = downloadContent.Replace("set CrmConnection=\"$CrmConnectionString$\"\r\n", string.Empty);
                    downloadContent = downloadContent.Replace("/conn:%CrmConnection%", "/sdklogin:\"yes\"");
                }
                else
                {
                    var crmConnectionString = XrmHelper.BuildConnectionString(form.CrmConnection);
                    downloadContent = downloadContent.Replace("$CrmConnectionString$", crmConnectionString);
                }
                Utility.ForceWriteAllTextWithoutUTF8(downloadFile, downloadContent);
                project.ProjectItems.AddFromFile(downloadFile);

                var deployFile = Path.Combine(dir, "deploy.debug.bat");
                if (!File.Exists(deployFile))
                {
                    var deployContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.webresource.deploy.debug.bat");
                    if (form.Check == "1")
                    {
                        deployContent = deployContent.Replace("set CrmConnection=\"$CrmConnectionString$\"\r\n", string.Empty);
                        deployContent = deployContent.Replace("/conn:%CrmConnection%", "/sdklogin:\"yes\"");
                    }
                    else
                    {
                        var crmConnectionString = XrmHelper.BuildConnectionString(form.CrmConnection);
                        deployContent = deployContent.Replace("$CrmConnectionString$", crmConnectionString);
                    }

                    Utility.ForceWriteAllTextWithoutUTF8(deployFile, deployContent);
                    project.ProjectItems.AddFromFile(deployFile);
                }
                var packagesFile = Path.Combine(dir, "packages.config");
#if DEBUG
                var cliVersion = Const.Version;
#else
                var cliVersion = NugetHelper.GetLatestPackageVersion(Const.DynamicsCrmDevKitCli);
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

        public bool ShouldAddProjectItem(string filePath)
        {
            return false;
        }
    }
}
