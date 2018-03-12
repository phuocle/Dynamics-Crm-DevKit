using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;
using System.IO;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class JavaScriptWebApiItemTemplateWizard : IWizard
    {
        private DTE DTE { get; set; }
        private string EntityGenerator { get; set; }
        private string WebApiProjectItem { get; set; }
        private string FormProjectItem { get; set; }
        private string WebApiIntellisenseProjectItem { get; set; }
        private string FormIntellisenseProjectItem { get; set; }
        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            if (projectItem.Name.Contains(".form.intellisense.js"))
            {
                FormIntellisenseProjectItem = projectItem.FileNames[0];
                CreateFormIntellisense();
            }
            else if (projectItem.Name.Contains(".webapi.intellisense.js"))
            {
                WebApiIntellisenseProjectItem = projectItem.FileNames[0];
                CreateWebApiIntellisense();
            }
            else if (projectItem.Name.Contains(".webapi.js"))
            {
                WebApiProjectItem = projectItem.FileNames[0];
                CreateWebApi();
            }            
            else if (projectItem.Name.Contains(".form.js"))
            {
                FormProjectItem = projectItem.FileNames[0];
                CreateForm();
            }
            else
            {
                projectItem.ProjectItems.AddFromFile(WebApiIntellisenseProjectItem);
                projectItem.ProjectItems.AddFromFile(FormIntellisenseProjectItem);
                projectItem.ProjectItems.AddFromFile(WebApiProjectItem);
                projectItem.ProjectItems.AddFromFile(FormProjectItem);
                projectItem.ContainingProject.Save();
            }
        }

        private void CreateWebApi()
        {
            File.WriteAllText(WebApiProjectItem, GeneratedJsWebApi);
        }

        private void CreateForm()
        {
            File.WriteAllText(FormProjectItem, GeneratedJsForm);
        }

        private void CreateWebApiIntellisense()
        {
            File.WriteAllText(WebApiIntellisenseProjectItem, GeneratedJsWebApiIntellisense);
        }

        private void CreateFormIntellisense()
        {
            File.WriteAllText(FormIntellisenseProjectItem, GeneratedJsFormIntellisense);
        }

        public void RunFinished()
        {
        }

        private string LoadDeleteFile(object automationObject, string entityName)
        {
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
                foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
                {
                    if ($"{entityName}.webapi.js" == childProjectItem.Name ||
                        $"{entityName}.webapi.intellisense.js" == childProjectItem.Name ||
                        $"{entityName}.form.intellisense.js" == childProjectItem.Name ||
                        $"{entityName}.form.js" == childProjectItem.Name)
                    {
                        foreach (Window window in dte.Windows)
                        {
                            if (window.Caption == $"{entityName}.webapi.js" ||
                                window.Caption == $"{entityName}.webapi.intellisense.js" ||
                                window.Caption == $"{entityName}.form.intellisense.js" ||
                                window.Caption == $"{entityName}.form.js")
                                window.Close();
                        }
                        File.Delete(childProjectItem.FileNames[0]);
                        return childProjectItem.FileNames[0];
                    }
                }
            }
            return string.Empty;
        }

        private string GeneratedJsWebApi { get; set; }
        private string GeneratedJsForm { get; set; }
        private string GeneratedJsWebApiIntellisense { get; set; }
        private string GeneratedJsFormIntellisense { get; set; }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                DTE = (DTE)automationObject;
                var form = new FormProject(FormType.JsWebApiItem, DTE);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    //form.DoGeneratorCode();
                    //if (form.MessageError.Length > 0)
                    //{
                    //    MessageBox.Show(form.MessageError, "ERROR");
                    //    throw new WizardCancelledException("Cancel Click");
                    //}
                    DeleteFile = LoadDeleteFile(automationObject, form.Class);                    
                    GeneratedJsForm = form.GeneratedJsForm;
                    GeneratedJsFormIntellisense = form.GeneratedJsIntellisenseForm;
                    GeneratedJsWebApi = form.GeneratedJsWebApi;
                    GeneratedJsWebApiIntellisense = form.GeneratedJsIntellisense;                    
                    replacementsDictionary.Add("$class$", form.Class);
                }
                else
                    throw new WizardCancelledException("Cancel Click");
            }
            else
                throw new WizardCancelledException("Cancel Click");
        }
        
        private string DeleteFile { get; set; }
        public bool ShouldAddProjectItem(string filePath)
        {
            if (DeleteFile != null && DeleteFile.Length > 0)
            {
                if (filePath.ToLower() == "JavascriptWebApiIntellisense.js".ToLower())
                    return true;
                if (filePath.ToLower() == "JavascriptFormIntellisense.js".ToLower())
                    return true;
                if (filePath.ToLower() == "JavascriptWebApi.js".ToLower())
                    return true;
                if (filePath.ToLower() == "JavascriptForm.js".ToLower())
                    return true;
                if (filePath.ToLower() == "Javascript.js".ToLower())
                    return false;
            }
            return true;
        }
    }
}
