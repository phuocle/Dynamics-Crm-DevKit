using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;
using System.Windows.Forms;
using System.IO;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class ConsoleProjectTemplateWizard : IWizard
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
                var form = new FormProject(FormType.Console, DTE);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    replacementsDictionary.Add("$ProjectName$", form.ProjectName);
                    replacementsDictionary.Add("$CrmUrl$", form.CrmConnection.Url);
                    replacementsDictionary.Add("$CrmUserName$", form.CrmConnection.UserName);
                    replacementsDictionary.Add("$CrmPassword$", form.CrmConnection.Password);
                    replacementsDictionary.Add("$ShareProject$", $"{form.RootNamespace.Split(".".ToCharArray())[0]}.{form.RootNamespace.Split(".".ToCharArray())[1]}.Shared");
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
