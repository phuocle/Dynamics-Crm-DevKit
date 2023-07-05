using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class DataProvider : IWizard
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
            var form = new FormProject(ItemType.DataProvider);
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                Replacement.SetItem(replacementsDictionary, form);
                var t4Context = T4Helper.BuildContext(ItemType.DataProvider, replacementsDictionary, form);
                var t4Code = T4Helper.GetT4Code(ItemType.DataProvider, "Create");
                var code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$DataProviderCreate$", code);
                t4Code = T4Helper.GetT4Code(ItemType.DataProvider, "Update");
                code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$DataProviderUpdate$", code);
                t4Code = T4Helper.GetT4Code(ItemType.DataProvider, "Delete");
                code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$DataProviderDelete$", code);
                t4Code = T4Helper.GetT4Code(ItemType.DataProvider, "Retrieve");
                code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$DataProviderRetrieve$", code);
                t4Code = T4Helper.GetT4Code(ItemType.DataProvider, "RetrieveMultiple");
                code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$DataProviderRetrieveMultiple$", code);
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