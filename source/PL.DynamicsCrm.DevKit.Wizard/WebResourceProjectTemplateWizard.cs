using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;
using System.IO;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class WebResourceProjectTemplateWizard : IWizard
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
            var projectFullName = Project.FullName;
            DTE.Solution.Remove(Project);
            var fInfoProject = new FileInfo(projectFullName);
            var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName);
            var oldDir = dInfoProject.FullName;
            dInfoProject.MoveTo(dInfoProject.Parent.FullName + "\\" + ProjectName);
            DTE.Solution.AddFromFile(dInfoProject.Parent.FullName + "\\" + ProjectName + "\\" + ProjectName + ".csproj");
            DTE.Solution.SaveAs(DTE.Solution.FullName);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewProject)
            {
                DTE = (DTE)automationObject;
                var form = new FormProject(FormType.WebResource, DTE);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                    replacementsDictionary.Add("$ProjectName$", form.ProjectName);
                }
                else
                    throw new WizardCancelledException("Cancel Click");
            }
            else
                throw new WizardCancelledException("Cancel Click");
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
