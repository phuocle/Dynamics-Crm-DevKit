using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class LateBound : IWizard
    {
        private DTE DTE { get; set; }
        private string Class { get; set; }
        private string ClassFileGenerated { get; set; }
        private string ClassFile { get; set; }
        private bool IsNew { get; set; }
        private ProjectItem CurrentProjectItem { get; set; }
        private Project ActiveProject { get; set; }
        private string GeneratedCode { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {

        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            try
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
                if (IsNew && ActiveProject.Name.EndsWith($"{ProjectType.Shared}"))
                {
                    DTE.ExecuteCommand("File.SaveAll");
                }
            }
            catch { }
        }

        public void RunFinished()
        {
            try
            {
                CloseWindows();
                if (!IsNew)
                {
                    Utility.ForceWriteAllText(ClassFileGenerated, GeneratedCode);
                }
                else
                {
                    if (!ActiveProject.Name.EndsWith($"{ProjectType.Shared}")) return;
                    var projectItemsFile = ActiveProject.FullName.Replace(".shproj", ".projitems");
                    var lines = File.ReadAllLines(projectItemsFile);
                    var text = string.Empty;
                    var @class = $"{Class}.cs";
                    var fInfoProject = new FileInfo(ActiveProject.FullName);
                    var dic = fInfoProject.Directory?.FullName;
                    if (dic != null)
                    {
                        var check = CurrentProjectItem.FileNames[0].Substring(dic.Length + 1);
                        foreach (var line in lines)
                        {
                            if (line.EndsWith($"{check + (char)34} />", StringComparison.Ordinal))
                            {
                                text += $"  <Compile Include=\"$(MSBuildThisFileDirectory){check}\">\r\n";
                                text += $"    <DependentUpon>{@class}</DependentUpon>\r\n";
                                text += $"    <SubType>Code</SubType>\r\n";
                                text += $"  </Compile>\r\n";
                            }
                            else
                            {
                                text += line + "\r\n";
                            }
                        }
                    }
                    Utility.ForceWriteAllText(projectItemsFile, text);
                    DTE.ExecuteCommand("File.SaveAll");
                }
            }
            catch { }
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            try
            {
                DTE = (DTE)automationObject;
                if (DTE.ActiveSolutionProjects is Array activeSolutionProjects && activeSolutionProjects.Length > 0)
                    ActiveProject = activeSolutionProjects.GetValue(0) as Project;
                var nameSpace = replacementsDictionary["$rootnamespace$"];
                var sharedNameSpace = Utility.GetSharedNameSpace(DTE);
                var form = new FormItem(ItemType.LateBound, DTE, nameSpace, sharedNameSpace);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating item ...
                Class = form.ComboBoxEntityName;
                GeneratedCode = form.GeneratedLateBoundClass;
                Wizard.ProcessItemReplacementsDictionary(replacementsDictionary, form);
                CloseWindows();
            }
            catch
            {
                throw;
            }
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
            var selectItem = DTE.SelectedItems.Item(1);
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
                    ClassFile = $"{fInfo.Directory?.FullName}\\{@class}";
                    ClassFileGenerated = $"{fInfo.Directory?.FullName}\\{@classGenerated}";
                    return !File.Exists(ClassFile);
                }
            }
            return true;
        }

        private void CloseWindows()
        {
            foreach (Window window in DTE.Windows)
                if (window.Caption == $"{Class}.cs" || window.Caption == $"{Class}.generated.cs")
                    window.Close();
        }
    }
}
