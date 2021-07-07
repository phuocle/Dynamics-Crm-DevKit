using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Test : IWizard
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
            try
            {
                DTE = (DTE)automationObject;
                Wizard.MakeSureSharedProjectExist(DTE);
                if (!Utility.ProxyTypesProjectExist(DTE))
                {
                    MessageBox.Show(@"Please add DynamicsCrm.DevKit ProxyTypes project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    throw new WizardCancelledException();
                }
                var form = new FormProject(ProjectType.Test, DTE);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating project ...
                ProjectName = form.ProjectName;
                Wizard.ProcessProjectReplacementsDictionary(replacementsDictionary, form);
                var runsettings = Utility.GetTestRunSettingsFile(DTE);
                if (!File.Exists(runsettings))
                {
                    var text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.VsTest.runsettings");
                    if (text.Length > 0)
                    {
                        text = text.Replace("[[ProxyTypes.dll]]", Utility.GetProxyTypesProject(DTE) + ".dll");
                        text = text.Replace("[[Namespace]]", replacementsDictionary["$specifiedsolutionname$"]);
                        Utility.ForceWriteAllText(runsettings, text);
                    }
                }
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
