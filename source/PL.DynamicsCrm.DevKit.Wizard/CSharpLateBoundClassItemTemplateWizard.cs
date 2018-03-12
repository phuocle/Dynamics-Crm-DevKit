using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;
using EnvDTE;
using System.Windows.Forms;
using System.IO;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class CSharpLateBoundClassItemTemplateWizard : IWizard
    {
        private DTE DTE { get; set; }
        private Project ActiveProject { get; set; }
        private string ClassGenerated { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {

        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            if (projectItem.Name.Contains(".generated.cs"))
            {
                ClassGenerated = projectItem.FileNames[0];
            }
        }

        public void RunFinished()
        {
            ActiveProject.Save();
            var projectItemsFile = ActiveProject.FullName.Replace(".shproj", ".projitems");
            var arr = ClassGenerated.Split(@"\".ToCharArray());
            var fileName = arr[arr.Length - 1];
            var fileNameWithoutGenerator = fileName.Replace(".generated", "");
            if (DeleteFile.Length > 0)
            {
                var lines = File.ReadAllLines(projectItemsFile);
                var text = string.Empty;
                var a = File.ReadAllText(projectItemsFile);
                foreach (var line in lines)
                {
                    var t = line;
                    if (line.EndsWith($"{fileName + (char)34} />", StringComparison.Ordinal))
                    {
                        var part1 = line.Substring(0,
                            line.IndexOf($"{fileName + (char)34} />", StringComparison.Ordinal));
                        text += part1 + fileNameWithoutGenerator + (char)34 + " />\r\n";
                        text += part1 + fileName + (char)34 +
                                $"><DependentUpon>{fileNameWithoutGenerator}</DependentUpon></Compile>\r\n";
                    }
                    else
                        text += line + "\r\n";
                }
                File.WriteAllText(projectItemsFile, text);
            }
            else
            {
                var find = $"{fileName + (char)34} />";
                var replace =
                    $"{fileName + (char)34}>\r\n\t\t\t<DependentUpon>{fileNameWithoutGenerator}</DependentUpon>\r\n\t\t</Compile>";
                var text = File.ReadAllText(projectItemsFile);
                text = text.Replace(find, replace);
                File.WriteAllText(projectItemsFile, text);
            }
            File.WriteAllText(ActiveProject.FullName, File.ReadAllText(ActiveProject.FullName) + " ");
            var temp = File.ReadAllText(projectItemsFile).TrimEnd();
            File.WriteAllText(projectItemsFile, temp + " ");
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                DTE = (DTE)automationObject;
                var activeSolutionProjects = DTE.ActiveSolutionProjects as Array;
                if (activeSolutionProjects != null && activeSolutionProjects.Length > 0)
                {
                    ActiveProject = activeSolutionProjects.GetValue(0) as Project;
                    if (ActiveProject.Kind != "{D954291E-2A0B-460D-934E-DC6B0785DB48}")
                        throw new WizardCancelledException("Late Bound Class only support shared project");
                }
                else
                    throw new WizardCancelledException("Cannot find active project");
                var form = new FormProject(FormType.LateBoundClass, DTE);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    DeleteFile = LoadDeleteFile(automationObject, form.Class);
                    replacementsDictionary.Add("$class$", form.Class);
                    replacementsDictionary.Add("$generated$", form.Generated);
                }
                else
                    throw new WizardCancelledException("Cancel Click");
            }
            else
                throw new WizardCancelledException("Cancel Click");
        }

        private string LoadDeleteFile(object automationObject, string entityName)
        {
            entityName = $"{entityName}.generated.cs";
            var dte = (DTE)automationObject;
            var selectItem = dte.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;
            if (projectItems == null) return string.Empty;
            foreach (ProjectItem projectItem in projectItems)
            {
                if (entityName == projectItem.Name)
                {
                    foreach (Window window in dte.Windows)
                        if (window.Caption == entityName)
                            window.Close();
                    var path = projectItem.FileNames[0];
                    File.Delete(path);
                    projectItem.Remove();
                    ActiveProject.Save();
                    return path;
                }
            }
            foreach (ProjectItem projectItem in projectItems)
            {
                foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
                {
                    if (entityName == childProjectItem.Name)
                    {
                        foreach (Window window in dte.Windows)
                            if (window.Caption == entityName)
                                window.Close();
                        var path = childProjectItem.FileNames[0];
                        File.Delete(path);
                        projectItem.Remove();
                        ActiveProject.Save();
                        return path;
                    }
                }
            }
            return string.Empty;
        }

        private string DeleteFile { get; set; }
        public bool ShouldAddProjectItem(string filePath)
        {
            if (DeleteFile.Length > 0)
            {
                if (filePath.ToLower() == "class1.cs")
                    return true;
                if (filePath.ToLower() == "class.cs")
                    return false;
            }
            return true;
        }
    }
}
