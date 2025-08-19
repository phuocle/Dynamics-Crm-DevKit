using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
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
            var OOBDestinationDirectory = replacementsDictionary["$destinationdirectory$"];
            var form = new FormProject(ProjectType.Shared);
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                //ThreadHelper.JoinableTaskFactory.Run(async () =>
                //{
                //    //var solutionName = await VsixHelper.GetSolutionName(automationObject);
                //    //ProjectName = $"{solutionName}.Shared";
                //    //DTE = automationObject;
                //    //replacementsDictionary["$NameSpace$"] = Helper.SafeNamespace(ProjectName);
                //    //replacementsDictionary["$SafeProjectName$"] = ProjectName;
                //    //replacementsDictionary["$SharedNameSpace$"] = $"{ProjectName}.Shared";
                //    //replacementsDictionary["$DevKitVersion$"] = Const.VersionBuild;
                //});

            }
            else
            {
                VsixHelper.ThrowWizardCancelledException(OOBDestinationDirectory);
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
