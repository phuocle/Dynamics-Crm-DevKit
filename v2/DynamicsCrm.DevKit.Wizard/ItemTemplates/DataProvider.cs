using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class DataProvider : IWizard
    {
        private DTE DTE { get; set; }
        private string CurrentFolder { get; set; }
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

        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            try
            {
                DTE = (DTE)automationObject;
                var form = new FormItem(ItemType.DataProvider, DTE, string.Empty, string.Empty);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating item ...
                Wizard.ProcessItemReplacementsDictionary(replacementsDictionary, form);
                CurrentFolder = GetCurrentFolder();
            }
            catch
            {
                throw;
            }
        }

        private string GetCurrentFolder()
        {
            var selectItem = DTE?.SelectedItems?.Item(1);
            if (selectItem == null) throw new WizardCancelledException();
            if (selectItem.Project != null)
            {
                return Path.GetDirectoryName(selectItem.Project.FullName);
            }
            return selectItem?.ProjectItem?.FileNames[0];
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            if (CurrentFolder == null) throw new WizardCancelledException();
            if (File.Exists(Path.Combine(CurrentFolder, filePath)))
                throw new WizardCancelledException($"File {filePath} exist in the current folder: {CurrentFolder}");
            return true;
        }
    }
}
