using System.Collections.Generic;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class Workflow : IWizard
    {
        private DTE DTE { get; set; }
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
                var form = new FormItem(ItemType.Workflow, DTE, string.Empty, string.Empty);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating item ...
                Wizard.ProcessItemReplacementsDictionary(replacementsDictionary, form);
            }
            catch
            {
                throw;
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
