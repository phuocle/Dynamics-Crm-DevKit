using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class JavaScriptWebApiItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }

        private string WebApiCodeProjectItem { get; set; }
        private string WebApiCodeIntellisenseProjectItem { get; set; }
        private string WebApiCodeIntellisenseProjectItemTypeScript { get; set; }

        private string GeneratedJsWebApiCode { get; set; }
        private string GeneratedJsWebApiCodeIntellisense { get; set; }
        private string GeneratedJsWebApiCodeIntellisenseTypeScript { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        private bool IsFirstTypeScriptDeclaration { get; set; } = false;

        private ProjectItem _formProjectItem;

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            WebApiCodeProjectItem = projectItem.FileNames[0];
            CreateWebApiCode();
            _formProjectItem.ProjectItems.AddFromFile(WebApiCodeProjectItem);
            if (GeneratedJsWebApiCodeIntellisenseTypeScript.Length == 0)
            {
                _formProjectItem.ProjectItems.AddFromFile(GeneratedJsWebApiCodeIntellisense);
            }
            else
            {
                _formProjectItem.ProjectItems.AddFromFile(GeneratedJsWebApiCodeIntellisenseTypeScript);
            }
            projectItem.ContainingProject.Save();
        }

        public void RunFinished()
        {
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind != WizardRunKind.AsNewItem) return;
            Dte = (DTE)automationObject;
            var form = new FormProject(FormType.JsWebApiItem, Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                replacementsDictionary.Add("$class$", form.Class);
                _formProjectItem = GetFormProjectItem(form.Class + ".js");
                GeneratedJsWebApiCode = form.GeneratedJsWebApiCode;
                if (form.UseTypeScriptDeclaration == "true")
                {
                    GeneratedJsWebApiCodeIntellisenseTypeScript = form.GeneratedJsWebApiCodeIntellisense2;
                }
                else
                {
                    GeneratedJsWebApiCodeIntellisense = form.GeneratedJsWebApiCodeIntellisense;
                }
            }
            else
            {
                throw new WizardCancelledException("Cancel Click");
            }
        }

        private ProjectItem GetFormProjectItem(string entityName)
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
                if (projectItem.Name.ToLower() == $"{entityName.ToLower()}")
                    return projectItem;
                foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
                    if (childProjectItem.Name.ToLower() == $"{entityName.ToLower()}")
                        return childProjectItem;
            }
            return null;
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }

        private void CreateWebApiCode()
        {
            File.WriteAllText(WebApiCodeProjectItem, GeneratedJsWebApiCode, System.Text.Encoding.UTF8);
            var fInfo = new FileInfo(WebApiCodeProjectItem);
            var entityName = fInfo.Name.Substring(0, fInfo.Name.Length - ".webapi.js".Length);
            WebApiCodeIntellisenseProjectItem = $"{fInfo.DirectoryName}\\{entityName}.intellisense.js";
            WebApiCodeIntellisenseProjectItemTypeScript = $"{fInfo.DirectoryName}\\{entityName}.d.ts";
            CreateWebApiCodeIntellisense();
            CreateWebApiCodeIntellisenseTypeScript();

        }

        private void CreateWebApiCodeIntellisense()
        {
            if (GeneratedJsWebApiCodeIntellisense.Length == 0)
            {
                if (!File.Exists(WebApiCodeIntellisenseProjectItem)) return;
                var fileName = Path.GetFileName(WebApiCodeIntellisenseProjectItem);
                var projectItem = GetFormProjectItem(fileName);
                if (projectItem != null) projectItem.Remove();
                Utility.TryDeleteFile(GeneratedJsWebApiCodeIntellisense);
            }
            else
                File.WriteAllText(WebApiCodeIntellisenseProjectItem, GeneratedJsWebApiCodeIntellisense, System.Text.Encoding.UTF8);
        }

        private void CreateWebApiCodeIntellisenseTypeScript()
        {
            if (GeneratedJsWebApiCodeIntellisenseTypeScript.Length == 0)
            {
                if (!File.Exists(WebApiCodeIntellisenseProjectItemTypeScript)) return;
                var fileName = Path.GetFileName(WebApiCodeIntellisenseProjectItemTypeScript);
                var projectItem = GetFormProjectItem(fileName);
                if (projectItem != null) projectItem.Remove();
                Utility.TryDeleteFile(WebApiCodeIntellisenseProjectItemTypeScript);
            }
            else
            {
                File.WriteAllText(WebApiCodeIntellisenseProjectItemTypeScript, GeneratedJsWebApiCodeIntellisenseTypeScript, System.Text.Encoding.UTF8);
            }
        }
    }
}
