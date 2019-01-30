using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
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
            var projectFolder = Path.GetDirectoryName(projectFullName);
            var solutionFullName = Dte?.Solution?.FullName;
            var solutionFolder = Path.GetDirectoryName(solutionFullName) + "\\" + ProjectName;
            Dte.Solution.Remove(Project);
            Directory.Move(projectFolder, solutionFolder);
            Dte.Solution.AddFromFile(solutionFolder + "\\" + ProjectName + ".shproj");
            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var tfs = new Tfs(Dte);
            tfs.Undo(projectFolder);
            tfs.Add(solutionFolder);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            Dte = (DTE) automationObject;
            var solutionFullName = Dte?.Solution?.FullName;
            ProjectName = Utility.GetSharedProject(solutionFullName);
            var fInfo = new FileInfo(solutionFullName ?? throw new InvalidOperationException());
            if (!Directory.Exists(Path.Combine(fInfo.DirectoryName ?? throw new InvalidOperationException(), ProjectName)))
            {
                replacementsDictionary.Add("$DevKitVersion$", Const.Version);
                replacementsDictionary.Add("$rootnamespace$", ProjectName);
                replacementsDictionary.Add("$namespace$", ProjectName);
                var dir = Path.GetDirectoryName(solutionFullName);
                var file = $"{dir}\\PL.DynamicsCrm.DevKit.Cli.json";
                if (!File.Exists(file))
                    File.WriteAllText(file, Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.PL.DynamicsCrm.DevKit.Cli.json"));
                return;
            }
            MessageBox.Show($@"{FormType.Shared.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
            throw new WizardCancelledException("Cancel Click");
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
