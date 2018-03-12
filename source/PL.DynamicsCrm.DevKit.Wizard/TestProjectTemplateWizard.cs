using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EnvDTE;
using System.IO;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class TestProjectTemplateWizard : IWizard
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
                var form = new FormProject(FormType.Test, DTE);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    if (form.ProxyTypes != null)
                    {
                        replacementsDictionary.Add("$ProxyTypes$", "true");
                        replacementsDictionary.Add("$ProjectProxyTypesName$", form.ProxyTypes.Name);
                        replacementsDictionary.Add("$ProjectProxyTypesGuid$", form.ProxyTypes.Id);
                    }
                    else
                    {
                        replacementsDictionary.Add("$ProxyTypes$", "false");
                    }
                    replacementsDictionary.Add("$ProjectTestName$", form.SelectedProjectData.Name);
                    replacementsDictionary.Add("$ProjectTestGuid$", form.SelectedProjectData.Id);
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
