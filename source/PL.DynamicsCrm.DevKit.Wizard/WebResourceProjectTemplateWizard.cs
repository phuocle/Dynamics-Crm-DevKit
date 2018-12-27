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
                var form = new FormProject(FormType.WebResource, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    ProjectName = form.ProjectName;
                    if (!Utility.ExistProject(Dte, ProjectName))
                    {
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