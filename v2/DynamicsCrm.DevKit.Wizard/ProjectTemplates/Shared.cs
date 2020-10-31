using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Shared : IWizard
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
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var destinationDirectory = replacementsDictionary["$destinationdirectory$"];
            //try
            //{
                DTE = (DTE)automationObject;
                var form = new FormProject(ProjectType.Shared, DTE);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating project ...
                ProjectName = form.ProjectName;
                replacementsDictionary.Add("$Check$", form.Check);
                if (Utility.ExistProject(DTE, ProjectName))
                {
                    MessageBox.Show($@"{ProjectName} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    throw new WizardCancelledException();
                }
                Wizard.ProcessProjectReplacementsDictionary(replacementsDictionary, form);
                var file = Utility.GetDevKitCliJsonFile(DTE);
                if (!File.Exists(file))
                {
                    var solutionName = Utility.GetSolutionName(DTE);
                    var json = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.DynamicsCrm.DevKit.Cli.json");
                    json = json
                        .Replace("???.Plugin.*.dll", $"{solutionName}.Plugin.*.dll")
                        .Replace("???.CustomAction.*.dll", $"{solutionName}.CustomAction.*.dll")
                        .Replace("???.Workflow.*.dll", $"{solutionName}.Workflow.*.dll")
                        .Replace("???.DataProvider.*.dll", $"{solutionName}.DataProvider.*.dll")
                        .Replace("???.*.Test.dll", $"{solutionName}.*.Test.dll")
                        ;
                    Utility.ForceWriteAllText(file, json);
                }
            //}
            //catch
            //{
            //    if (Directory.Exists(destinationDirectory))
            //    {
            //        Utility.TryDeleteDirectory(destinationDirectory);
            //    }
            //    throw;
            //}
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
