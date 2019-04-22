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

        private string WebApiCodeProjectItem { get; set; }
        private string WebApiCodeIntellisenseProjectItem { get; set; }
        private string WebApiCodeIntellisenseProjectItem2 { get; set; }

        private string GeneratedJsWebApiCode { get; set; }
        private string GeneratedJsWebApiCodeIntellisense { get; set; }
        private string GeneratedJsWebApiCodeIntellisense2 { get; set; }

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
            if (IsFirstTypeScriptDeclaration)
            {
                var checkExistFile = WebApiCodeIntellisenseProjectItem2.Replace(".d.ts", ".js");
                if (File.Exists(checkExistFile))
                {
                    var fileName = Path.GetFileName(checkExistFile);
                    var selectItem = projectItem.DTE.SelectedItems.Item(1);
                    ProjectItems projectItems = null;
                    if (selectItem.Project != null)
                        projectItems = selectItem.Project.ProjectItems;
                    else if (selectItem.ProjectItem != null)
                        projectItems = selectItem.ProjectItem.ProjectItems;
                    if (projectItems == null) return;
                    foreach (ProjectItem projectItem2 in projectItems)
                    {
                        if (fileName == projectItem2.Name)
                        {
                            projectItem2.ProjectItems.AddFromFile(WebApiCodeIntellisenseProjectItem2);
                            break;
                        }
                        foreach (ProjectItem childProjectItem in projectItem2.ProjectItems)
                        {
                            if (fileName == childProjectItem.Name)
                            {
                                childProjectItem.ProjectItems.AddFromFile(WebApiCodeIntellisenseProjectItem2);
                                break;
                            }
                        }
                    }
                }
            }
            projectItem.ContainingProject.Save();
        }

        public void RunFinished()
        {
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            if (runKind == WizardRunKind.AsNewItem)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.JsWebApiItem, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    _formProjectItem = GetFormProjectItem(Dte, form.Class);
                    if (_formProjectItem == null)
                    {
                        MessageBox.Show($@"Not found: {form.Class}.js file!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        throw new WizardCancelledException($"Not found: {form.Class}.js file!");
                    }
                    GeneratedJsWebApiCode = form.GeneratedJsWebApiCode;
                    GeneratedJsWebApiCodeIntellisense = form.GeneratedJsWebApiCodeIntellisense;
                    GeneratedJsWebApiCodeIntellisense2 = form.GeneratedJsWebApiCodeIntellisense2;
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
            WebApiCodeIntellisenseProjectItem2 = $"{fInfo.DirectoryName}\\{entityName}.d.ts";
            CreateWebApiCodeIntellisense();
            CreateWebApiCodeIntellisense2();

        }

        private void CreateWebApiCodeIntellisense()
        {
            File.WriteAllText(WebApiCodeIntellisenseProjectItem, GeneratedJsWebApiCodeIntellisense, System.Text.Encoding.UTF8);
        }

        private void CreateWebApiCodeIntellisense2()
        {
            if (!File.Exists(WebApiCodeIntellisenseProjectItem2)) IsFirstTypeScriptDeclaration = true;
            File.WriteAllText(WebApiCodeIntellisenseProjectItem2, GeneratedJsWebApiCodeIntellisense2, System.Text.Encoding.UTF8);
        }
    }
}
