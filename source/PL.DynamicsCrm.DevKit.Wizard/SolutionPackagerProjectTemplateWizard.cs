using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;
using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class SolutionPackagerProjectTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }
        private string NetVersion { get; set; }
        private string Port { get; set; }

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
            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var tfs = new Tfs(Dte);
            tfs.Undo(fInfoProject.DirectoryName);

            Utility.TryDeleteDirectory(folder + "\\bin");
            Utility.TryDeleteDirectory(folder + "\\obj");
            Utility.TryDeleteFile(folder + "\\" + ProjectName + ".csproj");
            Utility.TryDeleteFile(folder + "\\" + ProjectName + ".csproj.vspscc");
            Utility.TryDeleteFile(folder + "\\" + ProjectName + ".csproj.user");

            tfs.Add(dInfoProject.FullName);

            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var fullName = Dte.Solution.FullName;
            Port = (Dte.Solution.Projects.Count + 1).ToString();
            UpdateSolutionFile(fullName, ProjectName, NetVersion, Port);
            Dte.Solution.Open(fullName);
        }

        private void UpdateSolutionFile(string solutionFile, string projectName, string netVersion, string port)
        {
            var data = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.WebSite.txt");
            var solution = File.ReadAllText(solutionFile);
            data = data
                .Replace("$ProjectName$", projectName)
                .Replace("$Guid$", $"{{{Guid.NewGuid().ToString().ToUpper()}}}")
                .Replace("$NetVersion$", netVersion)
                .Replace("$Port$", port);
            solution += data;
            File.WriteAllText(solutionFile, solution, System.Text.Encoding.UTF8);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewProject)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.SolutionPackager, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    if (!Utility.ExistProject(Dte, ProjectName))
                    {
                        NetVersion = form.NetVersion;
                        replacementsDictionary.Add("$DevKitVersion$", Const.Version);
                        replacementsDictionary.Remove("$projectname$");
                        replacementsDictionary.Add("$projectname$", ProjectName);
                        replacementsDictionary.Add("$version$", form.CrmVersion);
                        replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                        replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                        replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                        replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                        replacementsDictionary.Add("$ProjectName$", ProjectName);
                        replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                        if (replacementsDictionary.ContainsKey("$ProjectName$"))
                        {
                        }

                        var solutionFullName = Dte?.Solution?.FullName;
                        replacementsDictionary.Add("$ShareProject$", Utility.GetSharedProject(solutionFullName));
                        replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
                        replacementsDictionary.Add("$PLDynamicsCrmDevKitAnalyzersVersion$", form.PLDynamicsCrmDevKitAnalyzersVersion);
                        replacementsDictionary.Add("$versionCoreTools$", form.CoreToolsVersion.Version);
                        return;
                    }
                }
            }
            MessageBox.Show($@"{FormType.SolutionPackager.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
            throw new WizardCancelledException("Cancel Click");
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
