using System;
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
                MessageBox.Show(@"Please add shared project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
                throw new WizardCancelledException("Shared project should exist");
            }
            if (!Utility.ProxyTypesProjectExist(Dte))
            {
                MessageBox.Show(@"Please add ProxyTypes project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                Utility.TryDeleteDirectory(replacementsDictionary["$destinationdirectory$"]);
                throw new WizardCancelledException("ProxyTypes project should exist");
            }
            var form = new FormProject(FormType.Test, Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                ProjectName = form.ProjectName;
                if (!Utility.ExistProject(Dte, ProjectName))
                {
                    var fakeXrmEasy = form.FakeXrmEasy;
                    replacementsDictionary.Add("$FakeXrmEasy$", form.FakeXrmEasyShortName);
                    replacementsDictionary.Add("$FakeXrmEasyVersion$", fakeXrmEasy.Version);
                    replacementsDictionary.Add("$FakeXrmEasyNetVersion$", fakeXrmEasy.NetVersion.Replace(".", string.Empty));

                    var deployment = form.MicrosoftCrmSdkDeployment;
                    replacementsDictionary.Add("$CrmSdkDeploymentVersion$", deployment.Version);
                    replacementsDictionary.Add("$CrmSdkDeploymentNetVersion$", deployment.NetVersion.Replace(".", string.Empty));

                    var xrmToolingCoreAssembly = form.MicrosoftCrmSdkXrmToolingCoreAssembly;
                    replacementsDictionary.Add("$XrmToolingCoreAssemblyVersion$", xrmToolingCoreAssembly.Version);
                    replacementsDictionary.Add("$XrmToolingCoreAssemblyNetVersion$", xrmToolingCoreAssembly.NetVersion.Replace(".", string.Empty));

                    replacementsDictionary.Add("$CrmName$", form.CrmName);
                    replacementsDictionary.Add("$DevKitVersion$", Const.Version);
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$NugetNetVersion$", form.NugetNetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    replacementsDictionary.Add("$SafeNamespace$", form.SelectedProjectData.Namespace + ".Test");
                    if (form.ProxyTypes != null)
                    {
                        replacementsDictionary.Add("$ProxyTypes$", "true");
                        replacementsDictionary.Add("$ProjectProxyTypesName$", form.ProxyTypes.Name);
                    }
                    else
                    {
                        replacementsDictionary.Add("$ProxyTypes$", "false");
                    }
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitAnalyzersVersion$", form.PLDynamicsCrmDevKitAnalyzersVersion);
                    replacementsDictionary.Add("$ProjectTestName$", form.SelectedProjectData.Name);
                    replacementsDictionary.Add("$ProjectTestGuid$", form.SelectedProjectData.Id);
                    var solutionFullName = Dte?.Solution?.FullName;
                    replacementsDictionary.Add("$ShareProject$", Utility.GetSharedProject(solutionFullName));
                    var dir = Path.GetDirectoryName(solutionFullName);
                    var solutionName = Path.GetFileNameWithoutExtension(solutionFullName);
                    var file = $"{dir}\\VsTest.runsettings";
                    if (!File.Exists(file))
                    {
                        var text = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.VsTest.runsettings");
                        text = text.Replace("[[ProxyTypes.dll]]", form.ProxyTypes.Name + ".dll");
                        text = text.Replace("[[Namespace]]", solutionName);
                        File.WriteAllText(file, text);
                    }
                    return;
                }
                else
                {
                    MessageBox.Show($@"{FormType.Test.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
