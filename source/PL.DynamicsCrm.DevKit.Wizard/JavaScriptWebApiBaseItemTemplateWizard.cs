using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    class JavaScriptWebApiBaseItemTemplateWizard : IWizard
    {
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
            var parts = replacementsDictionary["$rootnamespace$"].Split(".".ToCharArray());
            replacementsDictionary.Add("$ProjectName$", $"{parts[1]}");
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
