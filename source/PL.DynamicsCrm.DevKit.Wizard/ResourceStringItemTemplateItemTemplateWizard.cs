using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public class ResourceStringItemTemplateItemTemplateWizard : IWizard
    {
        private DTE Dte { get; set; }

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
            if (runKind == WizardRunKind.AsNewItem)
            {
                Dte = (DTE)automationObject;
                var form = new FormProject(FormType.ResourceString, Dte);
                if (form.ShowDialog() == DialogResult.OK)
                {
                    replacementsDictionary.Add("$LanguageCode$", form.LanguageCode);
                    replacementsDictionary.Add("$ResourceStringName$", form.ResourceStringName);
                }
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
