using DynamicsCrm.DevKit.Lib;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class JsDevkit : ItemTemplateBase, IWizard
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
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                replacementsDictionary["$devkit.d.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.d.ts");
                replacementsDictionary["$devkit.js$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.js");
            });
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
