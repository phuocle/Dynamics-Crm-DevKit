using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using EnvDTE;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class Plugin : IWizard
    {
        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
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
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            var form = new FormPlugin(ItemType.Plugin, nameSpace);
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                Replacement.SetItem(replacementsDictionary, form);
                var t4Code = T4Helper.GetT4Code(ItemType.Plugin);
                var t4Context = T4Helper.BuildContext(replacementsDictionary, form);
                var code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$plugin$", code);
            }
            else
                VsixHelper.ThrowWizardCancelledException();
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}