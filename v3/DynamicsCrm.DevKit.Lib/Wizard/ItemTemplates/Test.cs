using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Lib.Wizard.ItemTemplates
{
    internal class Test : IWizard
    {
        private string ServerType { get; set; }

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
            Microsoft.VisualStudio.Shell.ThreadHelper.ThrowIfNotOnUIThread();
            var nameSpace = replacementsDictionary["$rootnamespace$"];
            var form = new FormProject(ItemType.Test, (DTE)automationObject);
            form.NameSpace = nameSpace;
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                ServerType = form.SelectedClassType.ServerType;
                //Replacement.SetItem(replacementsDictionary, form);
                //replacementsDictionary.Add("$message$", form.SelectedClassType.ServerMessage);
                //replacementsDictionary.Add("$logicalname$", form.SelectedClassType.ServerLogicalName);
                //replacementsDictionary.Add("$execution$", form.SelectedClassType.ServerMode);
                //replacementsDictionary.Add("$stage_string$", form.SelectedClassType.ServerStage);

                Replacement.SetItem(replacementsDictionary, form);
                var t4Code = T4Helper.GetT4Code2(ItemType.Test, form.TemplateTitle, ServerType);
                var t4Context = T4Helper.BuildContext(ItemType.Test, replacementsDictionary, form, ServerType);
                var code = T4Helper.ProcessTemplate(t4Code, t4Context);
                replacementsDictionary.Add("$test-plugin$", code);
            }
            else
                VsixHelper.ThrowWizardCancelledException();
        }
        public bool ShouldAddProjectItem(string filePath)
        {
            if (ServerType.Length == 0) return false;
            return filePath.ToLower().Contains(ServerType.ToLower());
        }
    }
}