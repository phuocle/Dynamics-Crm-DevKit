using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class SolutionPackagerProjectTemplateWizard : IWizard
    {
        private string _destDirectory;
        private string _keyName;
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

        private void TryDeleteFile(string file)
        {
            if (File.Exists(file))
            {
                try
                {
                    File.Delete(file);
                }
                catch { }
            }
        }

        private void TryDeleteDirectory(string directory)
        {
            if (Directory.Exists(directory))
            {
                try
                {
                    Directory.Delete(directory, true);
                }
                catch { }
            }
        }

        public void RunFinished()
        {
            var projectFullName = Project.FullName;
            Dte.Solution.Remove(Project);
            var fInfoProject = new FileInfo(projectFullName);
            var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName);
            var folder = dInfoProject.Parent.FullName + "\\" + ProjectName;
            TryDeleteDirectory(folder);
            dInfoProject.MoveTo(folder);
            TryDeleteDirectory(folder + "\\bin");
            TryDeleteDirectory(folder + "\\obj");
            TryDeleteFile(folder + "\\" + ProjectName + ".csproj");
            TryDeleteFile(folder + "\\" + ProjectName + ".csproj.vspscc");
            var tfs = new Tfs(Dte);
            tfs.Undo(fInfoProject.DirectoryName);
            Dte.Solution.SaveAs(Dte.Solution.FullName);
            var fullName = Dte.Solution.FullName;
            Port = (Dte.Solution.Projects.Count + 1).ToString();
            UpdateSolutionFile(fullName, ProjectName);
            Dte.Solution.Open(fullName);
        }

        private void UpdateSolutionFile(string solutionFile, string projectName)
        {
            var data = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.WebSite.txt");
            var solution = File.ReadAllText(solutionFile);
            data = data
                .Replace("$ProjectName$", projectName)
                .Replace("$Guid$", $"{{{Guid.NewGuid().ToString().ToUpper()}}}")
                .Replace("$NetVersion$", NetVersion)
                .Replace("$Port$", Port);
            solution += data;
            File.WriteAllText(solutionFile, solution);
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
                        replacementsDictionary.Remove("$projectname$");
                        replacementsDictionary.Add("$projectname$", ProjectName);
                        replacementsDictionary.Add("$version$", form.CrmVersion);
                        replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                        replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                        replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                        replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                        replacementsDictionary.Add("$ProjectName$", ProjectName);
                        replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                        var projectPath = $"{replacementsDictionary["$solutiondirectory$"]}\\{ProjectName}";
                        replacementsDictionary.Remove("$destinationdirectory$");
                        replacementsDictionary.Add("$destinationdirectory$", projectPath);
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
