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
        private DTE Dte { get; set; }
        private Project ActiveProject { get; set; }
        private string ClassGenerated { get; set; }

        private string DeleteFile { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            if (projectItem.Name.Contains(".generated.cs")) ClassGenerated = projectItem.FileNames[0];
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
                foreach (var line in lines)
                {
                    if (line.EndsWith($"{fileName + (char) 34} />", StringComparison.Ordinal))
                    {
                        var part1 = line.Substring(0, line.IndexOf($"{fileName + (char) 34} />", StringComparison.Ordinal));
                        text += part1 + fileNameWithoutGenerator + (char) 34 + " />\r\n";
                        text += part1 + fileName + (char) 34 + $"><DependentUpon>{fileNameWithoutGenerator}</DependentUpon></Compile>\r\n";
                    }
                    else
                    {
                        text += line + "\r\n";
                    }
                }
                File.WriteAllText(projectItemsFile, text);
            }
            else
            {
                var lines = File.ReadAllLines(projectItemsFile);
                var text = string.Empty;
                foreach (var line in lines)
                {
                    if (line.EndsWith($".generated.cs{(char) 34} />", StringComparison.Ordinal))
                    {
                        fileName = line.Substring(line.LastIndexOf('\\') + 1);
                        fileName = fileName.Substring(0, fileName.Length - 4);
                        fileNameWithoutGenerator = line.Substring(line.LastIndexOf('\\') + 1);
                        fileNameWithoutGenerator = fileNameWithoutGenerator.Substring(0, fileNameWithoutGenerator.IndexOf('.'));
                        var find = $"{fileName + (char)34} />";
                        var replace = $"{fileName + (char)34}>\r\n\t\t\t<DependentUpon>{fileNameWithoutGenerator}.cs</DependentUpon>\r\n\t\t</Compile>\r\n";
                        text += line.Replace(find, replace);
                    }
                    else
                    {
                        text += line + "\r\n";
                    }
                }
                File.WriteAllText(projectItemsFile, text);
            }
            Dte.ExecuteCommand("File.SaveAll");
        }

        private string GetName(string[] parts)
        {
            var data = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                data += parts[i] + ".";
            return data;
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
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
                    DeleteFile = LoadDeleteFile(automationObject, form.Class);
                    replacementsDictionary.Add("$class$", form.Class);
                    replacementsDictionary.Add("$generated$", form.Generated);
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

        private string LoadDeleteFile(object automationObject, string entityName)
        {
            entityName = $"{entityName}.generated.cs";
            var dte = (DTE) automationObject;
            var selectItem = dte.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;
            if (projectItems == null) return string.Empty;
            foreach (ProjectItem projectItem in projectItems)
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

            foreach (ProjectItem projectItem in projectItems)
            foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
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

            return string.Empty;
        }
    }
}