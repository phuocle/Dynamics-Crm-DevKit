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
        private ProjectItem _selectedProjectItem;


        private string WebApiCode { get; set; }
        private string WebApiCodeIntellisense { get; set; }
        private string WebApiCodeTypeScriptDeclaration { get; set; }

        //private string GeneratedJsWebApiCode { get; set; }
        //private string GeneratedJsWebApiCodeIntellisense { get; set; }
        //private string GeneratedJsWebApiCodeIntellisenseTypeScript { get; set; }


        private string CurrentFolder { get; set; }
        private string EntityName { get; set; }
        private string JsFileName
        {
            get
            {
                return Path.Combine(CurrentFolder, EntityName + ".js");
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
            //WebApiCodeProjectItem = projectItem.FileNames[0];
            //CreateWebApiCode();
            //_formProjectItem.ProjectItems.AddFromFile(WebApiCodeProjectItem);
            //if (GeneratedJsWebApiCodeIntellisenseTypeScript == null)
            //{
            //    _formProjectItem.ProjectItems.AddFromFile(WebApiCodeIntellisenseProjectItem);
            //}
            //else
            //{
            //    _formProjectItem.ProjectItems.AddFromFile(WebApiCodeIntellisenseProjectItemTypeScript);
            //}
            //projectItem.ContainingProject.Save();
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
                EntityName = form.Class;
                replacementsDictionary.Add("$class$", EntityName);
                _selectedProjectItem = GetProjectItem();

                var t = string.Empty;

                //GeneratedJsWebApiCode = form.GeneratedJsWebApiCode;
                //if (form.UseTypeScriptDeclaration == "true")
                //{
                //    GeneratedJsWebApiCodeIntellisenseTypeScript = form.GeneratedJsWebApiCodeIntellisense2;
                //}
                //else
                //{
                //    GeneratedJsWebApiCodeIntellisense = form.GeneratedJsWebApiCodeIntellisense;
                //}
            }
            else
            {
                throw new WizardCancelledException("Cancel Click");
            }
        }

        private ProjectItem GetProjectItem()
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
                if (projectItem.Name.ToLower() == $"{EntityName.ToLower()}")
                    return projectItem;
                foreach (ProjectItem childProjectItem in projectItem.ProjectItems)
                    if (childProjectItem.Name.ToLower() == $"{EntityName.ToLower()}")
                        return childProjectItem;
            }
            return null;
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return false; //always return false
        }

        private void CreateWebApiCode()
        {
            //File.WriteAllText(WebApiCodeProjectItem, GeneratedJsWebApiCode, System.Text.Encoding.UTF8);
            //var fInfo = new FileInfo(WebApiCodeProjectItem);
            //var entityName = fInfo.Name.Substring(0, fInfo.Name.Length - ".webapi.js".Length);
            //WebApiCodeIntellisenseProjectItem = $"{fInfo.DirectoryName}\\{entityName}.intellisense.js";
            //WebApiCodeIntellisenseProjectItemTypeScript = $"{fInfo.DirectoryName}\\{entityName}.d.ts";
            //CreateWebApiCodeIntellisense();
            //CreateWebApiCodeIntellisenseTypeScript();

        }

        private void CreateWebApiCodeIntellisense()
        {
            //if (GeneratedJsWebApiCodeIntellisense == null)
            //{
            //    if (!File.Exists(WebApiCodeIntellisenseProjectItem)) return;
            //    var fileName = Path.GetFileName(WebApiCodeIntellisenseProjectItem);
            //    var projectItem = GetFormProjectItem(fileName);
            //    if (projectItem != null) projectItem.Remove();
            //    Utility.TryDeleteFile(WebApiCodeIntellisenseProjectItem);
            //}
            //else
            //    File.WriteAllText(WebApiCodeIntellisenseProjectItem, GeneratedJsWebApiCodeIntellisense, System.Text.Encoding.UTF8);
        }

        private void CreateWebApiCodeIntellisenseTypeScript()
        {
            //if (GeneratedJsWebApiCodeIntellisenseTypeScript == null)
            //{
            //    if (!File.Exists(WebApiCodeIntellisenseProjectItemTypeScript)) return;
            //    var fileName = Path.GetFileName(WebApiCodeIntellisenseProjectItemTypeScript);
            //    var projectItem = GetFormProjectItem(fileName);
            //    if (projectItem != null) projectItem.Remove();
            //    Utility.TryDeleteFile(WebApiCodeIntellisenseProjectItemTypeScript);
            //}
            //else
            //{
            //    File.WriteAllText(WebApiCodeIntellisenseProjectItemTypeScript, GeneratedJsWebApiCodeIntellisenseTypeScript, System.Text.Encoding.UTF8);
            //}
        }
    }
}
