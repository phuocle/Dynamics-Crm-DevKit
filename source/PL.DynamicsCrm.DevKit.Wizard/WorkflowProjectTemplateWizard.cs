﻿using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class WorkflowProjectTemplateWizard : IWizard
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
            Signing.GenerateKey(project, _destDirectory, _keyName);
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

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewProject)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.Workflow, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    if (!Utility.ExistProject(Dte, ProjectName))
                    {
                        replacementsDictionary.Remove("$projectname$");
                        replacementsDictionary.Add("$projectname$", ProjectName);
                        replacementsDictionary.Add("$version$", form.CrmVersion);
                        replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                        replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                        replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                        if (form.Others)
                            replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                        else
                            replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace2(form.RootNamespace));
                        replacementsDictionary.Add("$ProjectName$", ProjectName);
                        replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                        var ProjectPath = $"{replacementsDictionary["$solutiondirectory$"]}\\{ProjectName}";
                        replacementsDictionary.Remove("$destinationdirectory$");
                        replacementsDictionary.Add("$destinationdirectory$", ProjectPath);
                        if (replacementsDictionary.ContainsKey("$destinationdirectory$"))
                            _destDirectory = replacementsDictionary["$destinationdirectory$"];
                        if (replacementsDictionary.ContainsKey("$ProjectName$"))
                            _keyName = replacementsDictionary["$ProjectName$"] + ".snk";
                        var solutionFullName = Dte?.Solution?.FullName;
                        var fInfo = new FileInfo(solutionFullName);
                        var parts = fInfo.Name.Split(".".ToCharArray());
                        replacementsDictionary.Add("$ShareProject$", $"{GetName(parts)}Shared");
                        replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
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