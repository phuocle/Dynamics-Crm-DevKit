using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class JavaScriptWebApiItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }
        private string DeleteFile { get; set; }

        private string WebApiCodeProjectItem { get; set; }
        private string WebApiCodeIntellisenseProjectItem { get; set; }

        private string GeneratedJsWebApiCode { get; set; }
        private string GeneratedJsWebApiCodeIntellisense { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        private ProjectItem formProjectItem = null;

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            WebApiCodeProjectItem = projectItem.FileNames[0];
            CreateWebApiCode();
            formProjectItem.ProjectItems.AddFromFile(WebApiCodeProjectItem);
            projectItem.ContainingProject.Save();
        }

        public void RunFinished()
        {
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.JsWebApiItem, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    formProjectItem = GetFormProjectItem(Dte, form.Class);
                    if (formProjectItem == null)
                    {
                        MessageBox.Show($"Not found: {form.Class}.js file!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        throw new WizardCancelledException($"Not found: {form.Class}.js file!");
                    }
                    GeneratedJsWebApiCode = form.GeneratedJsWebApiCode;
                    GeneratedJsWebApiCodeIntellisense = form.GeneratedJsWebApiCodeIntellisense;
                    replacementsDictionary.Add("$class$", form.Class);
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

        private ProjectItem GetFormProjectItem(DTE dte, string entityName)
        {
            var selectItem = dte.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;
            if (projectItems == null) return null;
            foreach (ProjectItem projectItem in projectItems)
            {
                if (projectItem.Name.ToLower() == $"{entityName.ToLower()}.js")
                    return projectItem;
                foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
                    if (childProjectItem.Name.ToLower() == $"{entityName.ToLower()}.js")
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
            CreateWebApiCodeIntellisense();

        }

        private void CreateWebApiCodeIntellisense()
        {
            File.WriteAllText(WebApiCodeIntellisenseProjectItem, GeneratedJsWebApiCodeIntellisense, System.Text.Encoding.UTF8);
        }
    }
}