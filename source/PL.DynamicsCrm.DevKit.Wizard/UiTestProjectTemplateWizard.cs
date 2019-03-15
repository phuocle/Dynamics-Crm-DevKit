using System;
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
            var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName ?? throw new InvalidOperationException());
            var folder = dInfoProject.Parent?.FullName + "\\" + ProjectName;
            Utility.TryDeleteDirectory(folder);
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
            if (runKind != WizardRunKind.AsNewProject) return;
            Dte = (DTE)automationObject;
            if (!Utility.SharedProjectExist(Dte))
            {
                MessageBox.Show(@"Please add PL.DynamicsCrm.DevKit Shared project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
                throw new WizardCancelledException("Shared project should exist");
            }
            var form = new FormProject(FormType.UiTest, Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                ProjectName = form.ProjectName;
                if (!Utility.ExistProject(Dte, ProjectName))
                {
                    replacementsDictionary.Add("$CrmName$", form.CrmName);
                    replacementsDictionary.Add("$DevKitVersion$", Const.Version);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$NugetNetVersion$", form.NugetNetVersion);
                    replacementsDictionary.Add("$ProjectName$", form.ProjectName);
                    replacementsDictionary.Add("$CrmUrl$", form.CrmConnection.Url);
                    replacementsDictionary.Add("$CrmUserName$", form.CrmConnection.UserName);
                    replacementsDictionary.Add("$CrmPassword$", form.CrmConnection.Password);
                    var solutionFullName = Dte?.Solution?.FullName;
                    replacementsDictionary.Add("$ShareProject$", Utility.GetSharedProject(solutionFullName));
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitAnalyzersVersion$", form.PLDynamicsCrmDevKitAnalyzersVersion);
                    replacementsDictionary.Add("$versionWorkflow$", form.MicrosoftCrmSdkWorkflow.Version);
                    replacementsDictionary.Add("$NugetNetWorkflowVersion$", form.MicrosoftCrmSdkWorkflow.NetVersion.Replace(".", string.Empty));
                    return;
                }
                else
                {
                    MessageBox.Show($@"{FormType.UiTest.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
            throw new WizardCancelledException("Cancel Click");
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
