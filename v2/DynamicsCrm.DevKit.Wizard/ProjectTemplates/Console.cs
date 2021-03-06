﻿using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Console : IWizard
    {
        private DTE DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }
        private string Check { get; set; }

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
                var form = new FormProject(ProjectType.Console, DTE);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating project ...
                ProjectName = form.ProjectName;
                Check = form.Check;
                replacementsDictionary.Add("$Check$", Check);
                Wizard.ProcessProjectReplacementsDictionary(replacementsDictionary, form);
                Wizard.ProcessProjectConsoleReplacementsDictionary(replacementsDictionary, form);
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
            if (Check == "0")
            {
                if (filePath == "LoginForm.xaml" || filePath == "LoginForm.xaml.cs") return false;
                return true;
            }
            else if (Check == "1") {
                return true;
            }
            return true;
        }
    }
}
