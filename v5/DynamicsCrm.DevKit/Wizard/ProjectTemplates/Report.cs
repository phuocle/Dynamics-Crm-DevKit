using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    internal class Report : ProjectTemplateBase, IWizard
    {
        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            project.Name = ProjectName;
            Project = project;
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            var project = VsixHelper.FixProjectFolder(DTE, Project, ProjectName);
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var reportFile = Path.Combine(Path.GetDirectoryName(project.FullName), Path.GetFileNameWithoutExtension(project.FullName) + ".rptproj");
                var csFile = Path.Combine(Path.GetDirectoryName(project.FullName), Path.GetFileNameWithoutExtension(project.FullName) + ".csproj");
                this.DTE.Solution.Remove(project);
                var content = await VsixHelper.ReadEmbeddedResourceAsync("ReportProjectTemplate.rptproj");
                content= content.Replace("$DevKitVersion$", Const.VersionBuild);
                await FileHelper.ForceWriteAllTextAsync(reportFile, content);
                this.DTE.Solution.AddFromFile(reportFile);
                Helper.TryDeleteFile(csFile);
            });
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var OOBDestinationDirectory = replacementsDictionary["$destinationdirectory$"];
                var form = new FormProject(ProjectType.Report);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    ProjectName = form.ProjectName;
                    if (await VsixHelper.IsProjectExistAsync(ProjectName))
                    {
                        await VS.MessageBox.ShowErrorAsync($"Project: {ProjectName} exist !!!.", $"Thank you !!!");
                        VsixHelper.ThrowWizardCancelledException(OOBDestinationDirectory);
                    }
                    DTE = (EnvDTE.DTE)automationObject;
                    await Replacement.SetAsync(replacementsDictionary, form);
                }
                else
                {
                    VsixHelper.ThrowWizardCancelledException(OOBDestinationDirectory);
                }
            });
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
