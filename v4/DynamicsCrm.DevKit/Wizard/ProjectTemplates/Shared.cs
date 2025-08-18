using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Shared : IWizard
    {
        private object DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }

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
            VsixHelper.FixProjectFolder(DTE, Project, ProjectName);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            ProjectName = "ABCD.Shared";
            DTE = automationObject;
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
