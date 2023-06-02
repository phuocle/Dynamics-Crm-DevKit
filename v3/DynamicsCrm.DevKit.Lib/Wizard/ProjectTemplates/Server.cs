using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ProjectTemplates
{
    internal class Server : IWizard
    {
        private object DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            project.Name = ProjectName;
            Project = project;
            Signing.GenerateKey(project, Path.GetDirectoryName(Project.FullName), $"{ProjectName}.snk");
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
            var OOBDestinationDirectory = replacementsDictionary["$destinationdirectory$"];
            if (!VsixHelper.IsSharedProjectExist())
            {
                Utility.TryDeleteDirectory(OOBDestinationDirectory);
                throw new WizardCancelledException();
            }
            var form = new FormProject(DevKit.Shared.ProjectType.Server);
            var ok = form.ShowModal() ?? false;
            Replacement.Set(replacementsDictionary, form);
            if (ok)
            {
                DTE = automationObject;
                ProjectName = form.ProjectName;
            }
            else
            {
                Utility.TryDeleteDirectory(OOBDestinationDirectory);
                throw new WizardCancelledException();
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
