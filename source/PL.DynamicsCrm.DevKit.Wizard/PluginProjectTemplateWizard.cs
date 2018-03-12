using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;
using System.IO;
using System.Windows.Forms;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class PluginProjectTemplateWizard : IWizard
    {
        private DTE DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }
        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        private string _destDirectory;
        private string _keyName;

        public void ProjectFinishedGenerating(Project project)
        {
            project.Name = ProjectName;
            Project = project;
            Signing.GenerateKey(project, _destDirectory, _keyName);
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
                var form = new FormProject(FormType.Plugin, DTE);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    replacementsDictionary.Remove("$projectname$");
                    replacementsDictionary.Add("$projectname$", ProjectName);
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    replacementsDictionary.Add("$ProjectName$", ProjectName);
                    replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                    var ProjectPath = $"{replacementsDictionary["$solutiondirectory$"]}\\{ProjectName}";
                    replacementsDictionary.Remove("$destinationdirectory$");
                    replacementsDictionary.Add("$destinationdirectory$", ProjectPath);
                    if (replacementsDictionary.ContainsKey("$destinationdirectory$"))
                        _destDirectory = replacementsDictionary["$destinationdirectory$"];
                    if (replacementsDictionary.ContainsKey("$ProjectName$"))
                        _keyName = replacementsDictionary["$ProjectName$"] + ".snk";
                    replacementsDictionary.Add("$ShareProject$", $"{form.RootNamespace.Split(".".ToCharArray())[0]}.{form.RootNamespace.Split(".".ToCharArray())[1]}.Shared");
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
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
