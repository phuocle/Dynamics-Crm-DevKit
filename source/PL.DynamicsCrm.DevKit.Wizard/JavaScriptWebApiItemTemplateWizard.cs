using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class JavaScriptWebApiItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }
        private ProjectItem SelectedProjectItem { get; set; }
        private string GeneratedJsWebApiCode { get; set; }
        private string GeneratedJsWebApiCodeIntellisense { get; set; }
        private string GeneratedJsWebApiCodeTypeScriptDeclaration { get; set; }
        private string CurrentFolder { get; set; } = string.Empty;
        private string EntityName { get; set; }
        private string WebApiFileName
        {
            get
            {
                return Path.Combine(CurrentFolder, EntityName + ".webapi.js");
            }
        }
        private string IntellisenseFileName
        {
            get
            {
                return Path.Combine(CurrentFolder, EntityName + ".intellisense.js");
            }
        }
        private string TypeScriptDeclarationFileName
        {
            get
            {
                return Path.Combine(CurrentFolder, EntityName + ".d.ts");
            }
        }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            if (Utility.CanWriteAllText(WebApiFileName))
            {
                File.WriteAllText(WebApiFileName, GeneratedJsWebApiCode, Encoding.UTF8);
            }
            SelectedProjectItem.ProjectItems.AddFromFile(WebApiFileName);
            if (GeneratedJsWebApiCodeIntellisense == null)
            {
                if (Utility.CanWriteAllText(TypeScriptDeclarationFileName))
                {
                    File.WriteAllText(TypeScriptDeclarationFileName, GeneratedJsWebApiCodeTypeScriptDeclaration, Encoding.UTF8);
                }
                SelectedProjectItem.ProjectItems.AddFromFile(TypeScriptDeclarationFileName);
                if (File.Exists(IntellisenseFileName))
                {
                    var projectItem = GetProjectItem($"{EntityName}.intellisense.js");
                    if (projectItem != null) projectItem.Remove();
                    Utility.TryDeleteFile(IntellisenseFileName);
                }
            }
            else
            {
                if (Utility.CanWriteAllText(IntellisenseFileName))
                {
                    File.WriteAllText(IntellisenseFileName, GeneratedJsWebApiCodeIntellisense, Encoding.UTF8);
                }
                SelectedProjectItem.ProjectItems.AddFromFile(IntellisenseFileName);
                if (File.Exists(TypeScriptDeclarationFileName))
                {
                    var projectItem = GetProjectItem($"{EntityName}.d.ts");
                    if (projectItem != null) projectItem.Remove();
                    Utility.TryDeleteFile(TypeScriptDeclarationFileName);
                }
            }
            SelectedProjectItem.ContainingProject.Save();
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind != WizardRunKind.AsNewItem) return;
            Dte = (DTE)automationObject;
            var form = new FormProject(FormType.JsWebApiItem, Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                EntityName = form.Class;
                SelectedProjectItem = GetProjectItem($"{EntityName}.js");
                if (SelectedProjectItem != null)
                {
                    CurrentFolder = Path.GetDirectoryName(SelectedProjectItem.FileNames[0]);
                    GeneratedJsWebApiCode = form.GeneratedJsWebApiCode;
                    if (form.UseTypeScriptDeclaration == "true")
                    {
                        GeneratedJsWebApiCodeTypeScriptDeclaration = form.GeneratedJsWebApiCodeIntellisense2;
                    }
                    else
                    {
                        GeneratedJsWebApiCodeIntellisense = form.GeneratedJsWebApiCodeIntellisense;
                    }
                }
            }
            else
            {
                throw new WizardCancelledException("Cancel Click");
            }
        }

        private ProjectItem GetProjectItem(string item)
        {
            var selectItem = Dte.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;
            if (projectItems == null) return null;
            foreach (ProjectItem projectItem in projectItems)
            {
                if (projectItem.Name.ToLower() == $"{item.ToLower()}")
                    return projectItem;
                foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
                    if (childProjectItem.Name.ToLower() == $"{item.ToLower()}")
                        return childProjectItem;
            }
            return null;
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return false;
        }
    }
}
