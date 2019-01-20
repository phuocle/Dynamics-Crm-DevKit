using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    internal class JavaScriptFormItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }
        private string DeleteFile { get; set; }

        private string FormProjectItem { get; set; }
        private string FormCodeProjectItem { get; set; }
        private string FormCodeIntellisenseProjectItem { get; set; }

        private string GeneratedJsForm { get; set; }
        private string GeneratedJsFormCode { get; set; }
        private string GeneratedJsFormIntellisense { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            if (projectItem.Name.Contains(".intellisense.js"))
            {
                FormCodeIntellisenseProjectItem = projectItem.FileNames[0];
                CreateFormIntellisense();
            }
            else if (projectItem.Name.Contains(".form.js"))
            {
                FormCodeProjectItem = projectItem.FileNames[0];
                CreateFormCode();
            }
            else
            {
                FormProjectItem = projectItem.FileNames[0];
                CreateForm();
                projectItem.ProjectItems.AddFromFile(FormCodeIntellisenseProjectItem);
                projectItem.ProjectItems.AddFromFile(FormCodeProjectItem);
                projectItem.ContainingProject.Save();
            }
        }

        public void RunFinished()
        {
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary,
            WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                Dte = (DTE) automationObject;
                var form = new FormProject(FormType.JsFormItem, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    DeleteFile = LoadDeleteFile(automationObject, form.Class);

                    GeneratedJsForm = form.GeneratedJsForm;
                    GeneratedJsFormCode = form.GeneratedJsFormCode;
                    GeneratedJsFormIntellisense = form.GeneratedJsFormCodeIntellisense;

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

        public bool ShouldAddProjectItem(string filePath)
        {
            if (!string.IsNullOrEmpty(DeleteFile))
            {
                if (string.Equals(filePath, "JavascriptFormIntellisense.js", StringComparison.CurrentCultureIgnoreCase))
                    return true;
                if (string.Equals(filePath, "JavascriptForm.js", StringComparison.CurrentCultureIgnoreCase))
                    return true;
                if (string.Equals(filePath, "Javascript.js", StringComparison.CurrentCultureIgnoreCase))
                    return false;
            }

            return true;
        }

        private void CreateForm()
        {
            File.WriteAllText(FormProjectItem, GeneratedJsForm, System.Text.Encoding.UTF8);
        }

        private void CreateFormCode()
        {
            File.WriteAllText(FormCodeProjectItem, GeneratedJsFormCode, System.Text.Encoding.UTF8);
        }

        private void CreateFormIntellisense()
        {
            File.WriteAllText(FormCodeIntellisenseProjectItem, GeneratedJsFormIntellisense, System.Text.Encoding.UTF8);
        }

        private string LoadDeleteFile(object automationObject, string entityName)
        {
            var dte = (DTE) automationObject;
            var selectItem = dte.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;

            if (projectItems == null) return string.Empty;
            foreach (ProjectItem projectItem in projectItems)
            foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
                if ($"{entityName}.intellisense.js" == childProjectItem.Name ||
                    $"{entityName}.form.js" == childProjectItem.Name)
                {
                    foreach (Window window in dte.Windows)
                        if (window.Caption == $"{entityName}.intellisense.js" ||
                            window.Caption == $"{entityName}.form.js")
                            window.Close();
                    File.Delete(childProjectItem.FileNames[0]);
                    return childProjectItem.FileNames[0];
                }

            return string.Empty;
        }
    }
}