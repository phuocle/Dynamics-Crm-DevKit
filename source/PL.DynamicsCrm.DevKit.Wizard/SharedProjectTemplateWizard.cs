using System;
using System.Collections.Generic;
using System.IO;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class SharedProjectTemplateWizard : IWizard
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
            var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName ?? throw new InvalidOperationException());
            var folder = dInfoProject.Parent?.FullName + "\\" + ProjectName;
            if (Directory.Exists(folder))
                try
                {
                    Directory.Delete(folder, true);
                }
                catch
                {
                    // ignored
                }
            dInfoProject.MoveTo(folder);
            Dte.Solution.AddFromFile(dInfoProject.Parent?.FullName + "\\" + ProjectName + "\\" + ProjectName + ".shproj");
            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var tfs = new Tfs(Dte);
            tfs.Undo(fInfoProject.DirectoryName);
            tfs.Add(dInfoProject.FullName);
            Dte.ExecuteCommand("SolutionExplorer.Refresh");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
        {
            Dte = (DTE) automationObject;

            var solutionFullName = Dte?.Solution?.FullName;
            if (solutionFullName != null)
            {
                var fInfo = new FileInfo(solutionFullName);
                var parts = fInfo.Name.Split(".".ToCharArray());
                ProjectName = GetName(parts) +  $"{FormType.Shared.ToString()}";
            }
            replacementsDictionary.Add("$rootnamespace$", ProjectName);
            replacementsDictionary.Add("$namespace$", ProjectName);
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