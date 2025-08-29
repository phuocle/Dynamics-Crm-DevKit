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
    internal class Server : ProjectTemplateBase, IWizard
    {
        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            project.Name = ProjectName;
            Project = project;
            SigningHelper.GenerateKey(project, Path.GetDirectoryName(Project.FullName), $"{ProjectName}.snk");
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            VsixHelper.FixProjectFolder(DTE, Project, ProjectName);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var OOBDestinationDirectory = replacementsDictionary["$destinationdirectory$"];
                var sharedProjectName = await VsixHelper.GetSharedProjectAsync();
                if (!(await VsixHelper.IsProjectExistAsync(sharedProjectName)))
                {
                    await VS.MessageBox.ShowErrorAsync($"Please add {Const.DynamicsCrmDevKit} Shared project.", $"Thank you !!!");
                    VsixHelper.ThrowWizardCancelledException(OOBDestinationDirectory);
                }
                var form = new FormProject(ProjectType.Server);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    ProjectName = form.ProjectName;
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
