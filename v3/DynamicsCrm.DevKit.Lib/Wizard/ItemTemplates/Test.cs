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
            var form = new FormProject(ItemType.Test, (DTE)automationObject);
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                ServerType = form.SelectedClassType.ServerType;
                Replacement.SetItem(replacementsDictionary, form);
                replacementsDictionary.Add("$message$", form.SelectedClassType.ServerMessage);
                replacementsDictionary.Add("$logicalname$", form.SelectedClassType.ServerLogicalName);
                replacementsDictionary.Add("$execution$", form.SelectedClassType.ServerMode);
                replacementsDictionary.Add("$stage_string$", form.SelectedClassType.ServerStage);
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