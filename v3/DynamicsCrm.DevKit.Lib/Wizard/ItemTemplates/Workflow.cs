using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            var form = new FormProject(ItemType.Workflow);
            var ok = form.ShowModal() ?? false;
            if (ok)
            {
                Replacement.SetItem(replacementsDictionary, form);
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
