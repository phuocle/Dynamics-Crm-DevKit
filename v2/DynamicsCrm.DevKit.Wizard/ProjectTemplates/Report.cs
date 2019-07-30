using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Report : IWizard
    {
        private DTE DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
            project.Name = ProjectName;
            Project = project;
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            var oldProjectFolder = Path.GetDirectoryName(Project.FullName);
            var newProjectFolder = Path.GetDirectoryName(DTE?.Solution?.FullName) + "\\" + ProjectName;
            Utility.FixCorrectProjectFolder(DTE, Project, oldProjectFolder, newProjectFolder);
            Utility.TfsUndoAdd(DTE, oldProjectFolder, newProjectFolder);
            DTE.Solution.Remove(Utility.GetProject(DTE, ProjectName));
            Utility.TryDeleteDirectory(newProjectFolder + "\\bin");
            Utility.TryDeleteDirectory(newProjectFolder + "\\obj");
            Utility.TryDeleteFile(newProjectFolder + "\\" + ProjectName + ".csproj");
            Utility.TryDeleteFile(newProjectFolder + "\\" + ProjectName + ".csproj.vspscc");
            Utility.TryDeleteFile(newProjectFolder + "\\" + ProjectName + ".csproj.user");
            DTE.Solution.SaveAs(DTE.Solution.FullName);
            var report = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.ReportProjectTemplate.rptproj");
            var reportFile = newProjectFolder + "\\" + ProjectName + ".rptproj";
            Utility.ForceWriteAllText(reportFile, report);
            var fullName = DTE.Solution.FullName;
            DTE.Solution.SaveAs(fullName);
            MessageBox.Show("The project report created. Please add project to Visual Studio 2015 solution to design reports.", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var destinationDirectory = replacementsDictionary["$destinationdirectory$"];
            try
            {
                DTE = (DTE)automationObject;
                var form = new FormProject(ProjectType.Report, DTE);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating project ...
                ProjectName = form.ProjectName;
                Wizard.ProcessProjectReplacementsDictionary(replacementsDictionary, form);
            }
            catch
            {
                if (Directory.Exists(destinationDirectory))
                {
                    Utility.TryDeleteDirectory(destinationDirectory);
                }
                throw;
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
