using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Wizard.ProjectTemplates
{
    internal class Report : IWizard
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
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            VsixHelper.FixProjectFolder(DTE, Project, ProjectName);
            var dte = (EnvDTE.DTE)DTE;
            dte.Solution.Remove(VsixHelper.GetProject(dte, ProjectName));
            var newProjectFolder = Path.GetDirectoryName(dte?.Solution?.FullName) + "\\" + ProjectName;
            Utility.TryDeleteDirectory(newProjectFolder + "\\bin");
            Utility.TryDeleteDirectory(newProjectFolder + "\\obj");
            Utility.TryDeleteFile(newProjectFolder + "\\" + ProjectName + ".csproj");
            Utility.TryDeleteFile(newProjectFolder + "\\" + ProjectName + ".csproj.vspscc");
            Utility.TryDeleteFile(newProjectFolder + "\\" + ProjectName + ".csproj.user");
            var report = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.ReportProjectTemplate.rptproj");
            var reportFile = newProjectFolder + "\\" + ProjectName + ".rptproj";
            Utility.ForceWriteAllText(reportFile, report);
            var fullName = dte.Solution.FullName;
            dte.Solution.AddFromFile(reportFile);
            dte.Solution.SaveAs(fullName);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var OOBDestinationDirectory = replacementsDictionary["$destinationdirectory$"];
            var form = new FormProject(DevKit.Shared.ProjectType.Report);
            var ok = form.ShowModal() ?? false;
            Replacement.Set(replacementsDictionary, form);
            if (ok)
            {
                DTE = automationObject;
                ProjectName = form.ProjectName;
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
