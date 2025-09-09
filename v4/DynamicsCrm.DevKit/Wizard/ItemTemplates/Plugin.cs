using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class Plugin : ItemTemplateBase, IWizard
    {
        private EntityMetadata EntityMetadata { get; set; }


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
                var form = new FormPlugin(ItemType.Plugin, replacementsDictionary["$rootnamespace$"]);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    //await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    //ItemName = form.ItemName;
                    //EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                    //_Javascript_ = await XrmHelper.GetDefaultFileWithFormAsync(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"]);
                    //replacementsDictionary["$Javascript$"] = _Javascript_;
                    //(_JavascriptForm_, _Javascriptdts_) = await DynamicsCrm.DevKit.Shared.Logic.JsForm.GetJsFormCodeAsync(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"], await IsJsWebApiExistAsync());
                    //await Replacement.SetAsync(replacementsDictionary, form);
                    //await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                }
                else
                {
                    VsixHelper.ThrowWizardCancelledException();
                }
            });

        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
