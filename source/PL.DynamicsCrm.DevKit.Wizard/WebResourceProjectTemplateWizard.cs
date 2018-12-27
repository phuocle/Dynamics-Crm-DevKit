using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using NUglify;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class WebResourceProjectTemplateWizard : IWizard
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
            var dInfoProject = new DirectoryInfo(fInfoProject.DirectoryName);
            var folder = dInfoProject.Parent.FullName + "\\" + ProjectName;
            Utility.TryDeleteDirectory(folder);
            dInfoProject.MoveTo(folder);
            Utility.TryDeleteDirectory(folder + "\\bin");
            Utility.TryDeleteDirectory(folder + "\\obj");
            Utility.TryDeleteFile(folder + "\\" + ProjectName + ".csproj");
            Utility.TryDeleteFile(folder + "\\" + ProjectName + ".csproj.vspscc");
            Utility.TryDeleteFile(folder + "\\" + ProjectName + ".csproj.user");
            var tfs = new Tfs(Dte);
            tfs.Undo(fInfoProject.DirectoryName);
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
            File.WriteAllText(solutionFile, solution);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewProject)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.WebResource, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    if (!Utility.ExistProject(Dte, ProjectName))
                    {
                        NetVersion = form.NetVersion;
                        replacementsDictionary.Add("$version$", form.CrmVersion);
                        replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                        replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                        replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                        replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                        replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                        replacementsDictionary.Add("$ProjectName$", form.ProjectName);
                        replacementsDictionary.Add("$packagename$", form.AssemblyName.ToLower());
                        var parts = replacementsDictionary["$RootNamespace$"].Split(".".ToCharArray());
                        replacementsDictionary.Add("$ProjectNameJs$", $"{parts[1]}");
                        replacementsDictionary.Add("$WebApiClientMin$", GetWebApiClientMin(parts[1]));
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

        private string GetWebApiClientMin(string projectName)
        {
            if (projectName == "sln") projectName = "WebResource";
            var code = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.WebApiClient.min.js");
            code += "\r\n";
            var webApiClient = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.WebApiClient.js");
            webApiClient = webApiClient.Replace("DevKit", projectName);
            webApiClient = Uglify.Js(webApiClient).Code;
            return code + webApiClient;
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}