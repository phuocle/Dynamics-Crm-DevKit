using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class Workflow : IWizard
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
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            var form = new FormProject(ItemType.Workflow);
            form.NameSpace = nameSpace;
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                Replacement.SetItem(replacementsDictionary, form);
                var t4Code = T4Helper.GetT4Code2(ItemType.Workflow, form.TemplateTitle);
                var t4Context = T4Helper.BuildContext(ItemType.Workflow, replacementsDictionary, form);
                var code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$workflow$", code);
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