using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class PortalProjectTemplateWizard : IWizard
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
            var form = new FormProject(FormType.Portal, Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                ProjectName = form.ProjectName;
                if (!Utility.ExistProject(Dte, ProjectName))
                {
                    var solutionFullName = Dte?.Solution?.FullName;
                    var dir = Path.GetDirectoryName(solutionFullName);
                    var file = $"{dir}\\PL.DynamicsCrm.DevKit.Cli.json";
                    if (!File.Exists(file))
                    {
                        var json = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.PL.DynamicsCrm.DevKit.Cli.json");
                        if (Utility.SharedProjectExist(Dte))
                        {
                            var temp = ProjectName.Substring(0, ProjectName.Length - FormType.Shared.ToString().Length);
                            json = json
                                .Replace("???.Plugin.*.dll", $"{temp}Plugin.*.dll")
                                .Replace("???.CustomAction.*.dll", $"{temp}CustomAction.*.dll")
                                .Replace("???.Workflow.*.dll", $"{temp}Workflow.*.dll")
                                .Replace("???.DataProvider.*.dll", $"{temp}DataProvider.*.dll")
                                .Replace("???.*.Test.dll", $"{temp}*.Test.dll")
                                ;
                        }
                        File.WriteAllText(file, json);
                    }
                    replacementsDictionary.Add("$CrmName$", form.CrmName);
                    replacementsDictionary.Add("$DevKitVersion$", Const.Version);
                    replacementsDictionary.Add("$version$", form.CrmVersion);
                    replacementsDictionary.Add("$NetVersion$", form.NetVersion);
                    replacementsDictionary.Add("$AssemblyName$", form.AssemblyName);
                    replacementsDictionary.Add("$RootNamespace$", form.RootNamespace);
                    replacementsDictionary.Add("$SafeNamespace$", Utility.SafeNamespace(form.RootNamespace));
                    replacementsDictionary.Add("$CrmConnectionString$", form.CrmConnectionString);
                    replacementsDictionary.Add("$ProjectName$", form.ProjectName);
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitCliVersion$", form.PLDynamicsCrmDevKitCliVersion);
                    replacementsDictionary.Add("$PLDynamicsCrmDevKitAnalyzersVersion$", form.PLDynamicsCrmDevKitAnalyzersVersion);

                    var cliJson = SimpleJson.DeserializeObject<CliJson>(File.ReadAllText(file));
                    var update = cliJson.portals.FirstOrDefault(x => x.profile == "DEBUG");
                    if (update != null)
                    {
                        update.name = form.PortalName;
                        var updateJson = SimpleJson.SerializeObject(cliJson);
                        updateJson = updateJson.Replace("[entity]", "__entity__");
                        updateJson = Utility.FormatJson(updateJson);
                        updateJson = updateJson.Replace("__entity__", "[entity]");
                        File.WriteAllText(file, updateJson);
                    }
                    return;
                }
                else
                {
                    MessageBox.Show($@"{FormType.WebResource.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
