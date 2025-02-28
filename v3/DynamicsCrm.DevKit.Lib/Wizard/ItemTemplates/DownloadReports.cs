﻿using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class DownloadReports : IWizard
    {
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
            var dir = VsixHelper.GetActiveProjectFolder();
            var downloadFile = Path.Combine(dir, "download.reports.bat");
            if (File.Exists(downloadFile))
                Community.VisualStudio.Toolkit.VS.MessageBox.ShowError("You added this file: download.reports.bat to your active project");
            else
            {
                var form = new FormProject(ItemType.DownloadReports);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    if (!File.Exists(VsixHelper.GetDynamicsCrmDevKitCliJsonFileName()))
                    {
                        var solutionName = VsixHelper.GetSolutionName();
                        var json = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DynamicsCrm.DevKit.Cli.json");
                        json = json
                            .Replace("???.Plugin.*.dll", $"{solutionName}.Plugin.*.dll")
                            .Replace("???.CustomAction.*.dll", $"{solutionName}.CustomAction.*.dll")
                            .Replace("???.CustomApi.*.dll", $"{solutionName}.CustomApi.*.dll")
                            .Replace("???.Workflow.*.dll", $"{solutionName}.Workflow.*.dll")
                            .Replace("???.DataProvider.*.dll", $"{solutionName}.DataProvider.*.dll")
                            .Replace("???.*.Test.dll", $"{solutionName}.*.Test.dll")
                            ;
                        Utility.ForceWriteAllText(VsixHelper.GetDynamicsCrmDevKitCliJsonFileName(), json);
                    }
                    var downloadContent = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.download.reports.bat");
                    if (form.IsOOBConnection)
                    {
                        downloadContent = downloadContent.Replace("set CrmConnection=\"$CrmConnectionString$\"\r\n", string.Empty);
                        downloadContent = downloadContent.Replace("/conn:%CrmConnection%", "/sdklogin:\"yes\"");
                    }
                    else
                    {
                        var crmConnectionString = XrmHelper.BuildConnectionString2(form.DataverseConnectionString);
                        downloadContent = downloadContent.Replace("$CrmConnectionString$", crmConnectionString);
                    }
                    Utility.ForceWriteAllTextWithoutUTF8(downloadFile, downloadContent);
                    VsixHelper.AddExistingFileToActiveProject(downloadFile);
                    Community.VisualStudio.Toolkit.VS.MessageBox.ShowWarning("download.reports.bat file added to project", "Please make sure you use NuGet to add DynamicsCrm.DevKit.Cli to run this bat file.");
                }
            }
        }
        public bool ShouldAddProjectItem(string filePath)
        {
            return false;
        }
    }
}
