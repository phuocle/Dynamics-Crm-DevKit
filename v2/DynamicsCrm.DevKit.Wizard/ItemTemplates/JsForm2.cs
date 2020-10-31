using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class JsForm2 : IWizard
    {
        private DTE DTE { get; set; }
        private string CurrentFolder { get; set; }
        private ProjectItem SelectedProjectItem { get; set; }
        private string Class { get; set; }
        private string GeneratedJsCode { get; set; }
        private string GeneratedJsFormCode { get; set; }
        private string GeneratedJsFormCodeTypeScriptDeclaration2 { get; set; }
        private string JsCodeFileName
        {
            get
            {
                return Path.Combine(CurrentFolder, Class + ".js");
            }
        }
        private string FormFileName
        {
            get
            {
                return Path.Combine(CurrentFolder, Class + ".form.js");
            }
        }
        private string TypeScriptDeclarationFileName
        {
            get
            {
                return Path.Combine(CurrentFolder, Class + ".d.ts");
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
            if (!File.Exists(JsCodeFileName))
            {
                Utility.ForceWriteAllText(JsCodeFileName, GeneratedJsCode);
                SelectedProjectItem.ProjectItems.AddFromFile(JsCodeFileName);
            }
            SelectedProjectItem = GetProjectItem($"{Class}.js");
            Utility.ForceWriteAllText(FormFileName, GeneratedJsFormCode);
            SelectedProjectItem.ProjectItems.AddFromFile(FormFileName);
            Utility.ForceWriteAllText(TypeScriptDeclarationFileName, GeneratedJsFormCodeTypeScriptDeclaration2);
            SelectedProjectItem.ProjectItems.AddFromFile(TypeScriptDeclarationFileName);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            try
            {
                DTE = (DTE)automationObject;
                var form = new FormItemForm(ItemType.JsForm2, DTE, string.Empty, string.Empty);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating item ...
                Class = form.Class;
                SelectedProjectItem = GetProjectItem();
                if (SelectedProjectItem == null) throw new WizardCancelledException();
                CurrentFolder = Path.GetDirectoryName(SelectedProjectItem.FileNames[0]);
                GeneratedJsCode = form.GeneratedJsForm;
                GeneratedJsFormCode = form.GeneratedJsFormCode;
                GeneratedJsFormCodeTypeScriptDeclaration2 = form.GeneratedJsFormCodeTypeScriptDeclaration2;
            }
            catch
            {
                throw;
            }
        }

        private ProjectItem GetProjectItem()
        {
            var selectItem = DTE.SelectedItems.Item(1);
            ProjectItems projectItems = null;
            if (selectItem.Project != null)
                projectItems = selectItem.Project.ProjectItems;
            else if (selectItem.ProjectItem != null)
                projectItems = selectItem.ProjectItem.ProjectItems;
            return projectItems.Parent as ProjectItem;
        }

        private ProjectItem GetProjectItem(string item)
        {
            var selectItem = DTE.SelectedItems.Item(1);
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
