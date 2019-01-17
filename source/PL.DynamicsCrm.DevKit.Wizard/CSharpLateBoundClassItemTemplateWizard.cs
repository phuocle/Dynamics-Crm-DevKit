using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class CSharpLateBoundClassItemTemplateWizard : IWizard
    {

        private const string SHARED_PROJECT = "{D954291E-2A0B-460D-934E-DC6B0785DB48}";
        private string Class { get; set; }
        private DTE Dte { get; set; }
        private Project ActiveProject { get; set; }
        private string ClassFileGenerated { get; set; }
        private string ClassFile { get; set; }
        private bool IsNew { get; set; } = false;
        private string GeneratedCode { get; set; }
        private ProjectItem CurrentProjectItem { get; set; } = null;


        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            if (CurrentProjectItem == null)
            {
                CurrentProjectItem = projectItem;
            }
            if (projectItem.Name.Contains(".generated.cs"))
            {
                ClassFileGenerated = projectItem.FileNames[0];
            }
            if (!ActiveProject.Name.EndsWith("Shared") && !projectItem.Name.Contains(".generated.cs"))
            {
                projectItem.ProjectItems.AddFromFile(ClassFileGenerated);
                projectItem.ContainingProject.Save();
            }
            if (IsNew && ActiveProject.Name.EndsWith($"{FormType.Shared.ToString()}"))
            {
                Dte.ExecuteCommand("File.SaveAll");
            }
        }

        public void RunFinished()
        {
            CloseWindows();
            if (!IsNew)
            {
                File.WriteAllText(ClassFileGenerated, GeneratedCode, System.Text.Encoding.UTF8);
            }
            else
            {
                if(ActiveProject.Name.EndsWith($"{FormType.Shared.ToString()}"))
                {
                    var sharedProject = ActiveProject.FullName;
                    var projectItemsFile = ActiveProject.FullName.Replace(".shproj", ".projitems");
                    var lines = File.ReadAllLines(projectItemsFile);
                    var text = string.Empty;
                    var @class = $"{Class}.cs";
                    var @classGenerated = $"{Class}.generated.cs";
                    var fInfoProject = new FileInfo(ActiveProject.FullName);
                    var dic = fInfoProject.Directory.FullName;
                    var check = CurrentProjectItem.FileNames[0].Substring(dic.Length + 1);
                    foreach (var line in lines)
                    {
                        if (line.EndsWith($"{check + (char)34} />", StringComparison.Ordinal))
                        {
                            text += $"  <Compile Include=\"$(MSBuildThisFileDirectory){check}\">\r\n";
                            text += $"    <DependentUpon>{@class}</DependentUpon>\r\n";
                            text += $"  </Compile>\r\n";
                        }
                        else
                        {
                            text += line + "\r\n";
                        }
                    }
                    File.WriteAllText(projectItemsFile, text, System.Text.Encoding.UTF8);
                    Dte.ExecuteCommand("File.SaveAll");
                }
            }
        }

        private string GetName(string[] parts)
        {
            var data = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                data += parts[i] + ".";
            return data;
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                Dte = (DTE) automationObject;
                if (Dte.ActiveSolutionProjects is Array activeSolutionProjects && activeSolutionProjects.Length > 0)
                    ActiveProject = activeSolutionProjects.GetValue(0) as Project;
                var form = new FormProject(FormType.LateBoundClass, Dte);

                form.RootNameSpace = replacementsDictionary["$rootnamespace$"];
                var solutionFullName = Dte?.Solution?.FullName;
                var fInfo = new FileInfo(solutionFullName);
                var parts = fInfo.Name.Split(".".ToCharArray());
                form.SharedNameSpace = GetName(parts);

                if (form.ShowDialog() == DialogResult.OK)
                {
                    Class = form.Class;
                    replacementsDictionary.Add("$class$", form.Class);
                    GeneratedCode = form.Generated;
                    replacementsDictionary.Add("$generated$", GeneratedCode);
                    CloseWindows();
                }
                else
                {
                    throw new WizardCancelledException("Cancel Click");
                }
            }
            else
            {
                throw new WizardCancelledException("Cancel Click");
            }
        }


        private void CloseWindows()
        {
            foreach (Window window in Dte.Windows)
                if (window.Caption == $"{Class}.cs" || window.Caption == $"{Class}.generated.cs")
                    window.Close();
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            IsNew = CheckIsNew();
            return IsNew;
        }

        private bool CheckIsNew()
        {
            if (IsNew) return true;
            var @class = $"{Class}.cs";
            var @classGenerated = $"{Class}.generated.cs";
            var selectItem = Dte.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;
            if (projectItems == null)
                throw new WizardCancelledException("Cancel Click");
            foreach (ProjectItem projectItem in projectItems)
            {
                if (projectItem.Name == @class || projectItem.Name == @classGenerated)
                {
                    var fInfo = new FileInfo(projectItem.FileNames[0]);
                    ClassFile = $"{fInfo.Directory.FullName}\\{@class}";
                    ClassFileGenerated = $"{fInfo.Directory.FullName}\\{@classGenerated}";
                    return !File.Exists(ClassFile);
                }
            }
            return true;
        }
    }
}