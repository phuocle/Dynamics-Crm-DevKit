﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class TestProjectTemplateWizard : IWizard
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
            Dte.Solution.AddFromFile(dInfoProject.Parent?.FullName + "\\" + ProjectName + "\\" + ProjectName + ".csproj");
            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var tfs = new Tfs(Dte);
            tfs.Undo(fInfoProject.DirectoryName);
            tfs.Add(dInfoProject.FullName);
            Dte.ExecuteCommand("SolutionExplorer.Refresh");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewProject)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.Test, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    if (!Utility.ExistProject(Dte, ProjectName))
                    {
                        replacementsDictionary.Add("$version$", form.CrmVersion);
                        replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                        replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                        replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                        replacementsDictionary.Add("$SafeNamespace$", form.SelectedProjectData.Namespace + ".Test");
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
        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}