using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class UiTestProjectTemplateWizard : IWizard
    {
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
            Dte.Solution.AddFromFile(dInfoProject.Parent.FullName + "\\" + ProjectName + "\\" + ProjectName +
                                     ".csproj");
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
                var form = new FormProject(FormType.UiTest, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    if (!Utility.ExistProject(Dte, ProjectName))
                    {
                        replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                        replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                        replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                        replacementsDictionary.Add("$version$", form.CrmVersion);
                        replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                        replacementsDictionary.Add("$ProjectName$", form.ProjectName);
                        replacementsDictionary.Add("$CrmUrl$", form.CrmConnection.Url);
                        replacementsDictionary.Add("$CrmUserName$", form.CrmConnection.UserName);
                        replacementsDictionary.Add("$CrmPassword$", form.CrmConnection.Password);
                        var solutionFullName = Dte?.Solution?.FullName;
                        var fInfo = new FileInfo(solutionFullName);
                        var parts = fInfo.Name.Split(".".ToCharArray());
                        replacementsDictionary.Add("$ShareProject$", $"{GetName(parts)}Shared");
                        return;
                    }
                }
            }
            try
            {
                Directory.Delete(replacementsDictionary["$destinationdirectory$"], true);
            }
            catch { }
            throw new WizardCancelledException("Cancel Click");
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