using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class DataProviderProjectTemplateWizard : IWizard
    {
        private string _destDirectory;
        private string _keyName;
        private DTE Dte { get; set; }
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
            Dte.Solution.Remove(Project);
            var fInfoProject = new FileInfo(projectFullName);
            var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName);
            var folder = dInfoProject.Parent.FullName + "\\" + ProjectName;
            if (Directory.Exists(folder))
                try
                {
                    Directory.Delete(folder, true);
                }
                catch
                {
                }
            dInfoProject.MoveTo(folder);
            Dte.Solution.AddFromFile(dInfoProject.Parent.FullName + "\\" + ProjectName + "\\" + ProjectName + ".csproj");
            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var tfs = new Tfs(Dte);
            tfs.Undo(fInfoProject.DirectoryName);
            tfs.Add(dInfoProject.FullName);
            Dte.ExecuteCommand("SolutionExplorer.Refresh");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewProject)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.DataProvider, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;

                    replacementsDictionary.Remove("$projectname$");
                    replacementsDictionary.Add("$projectname$", ProjectName);
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                    replacementsDictionary.Add("$ProjectName$", ProjectName);
                    replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);

                    var projectPath = $"{replacementsDictionary["$solutiondirectory$"]}\\{ProjectName}";
                    replacementsDictionary.Remove("$destinationdirectory$");
                    replacementsDictionary.Add("$destinationdirectory$", projectPath);
                    if (replacementsDictionary.ContainsKey("$destinationdirectory$"))
                        _destDirectory = replacementsDictionary["$destinationdirectory$"];
                    if (replacementsDictionary.ContainsKey("$ProjectName$"))
                        _keyName = replacementsDictionary["$ProjectName$"] + ".snk";

                    var solutionFullName = Dte?.Solution?.FullName;
                    var fInfo = new FileInfo(solutionFullName);
                    var parts = fInfo.Name.Split(".".ToCharArray());
                    replacementsDictionary.Add("$ShareProject$", $"{GetName(parts)}Shared");
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
                }
                else
                {
                    throw new WizardCancelledException("Cancel Click");
                }
            }
            else
            {
                throw new WizardCancelledException("Cancel Click");
            }
        }

        private string GetName(string[] parts)
        {
            var data = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                data += parts[i] + ".";
            return data;
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
