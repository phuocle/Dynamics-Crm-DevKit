using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Windows.Input;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class DataProvider : ItemTemplateBase, IWizard
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
                var form = new FormPlugin(ItemType.DataProvider, replacementsDictionary["$rootnamespace$"]);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);

                    var t4Code = await VsixHelper.GetDefaultCustomTemplateBodyAsync(ItemType.DataProvider, "Create");
                    var t4Context = await T4Helper.BuildContextAsync(form);
                    var code = await T4Helper.ProcessTemplateAsync(t4Code, t4Context);
                    replacementsDictionary.Add("$DataProviderCreate$", code);

                    t4Code = await VsixHelper.GetDefaultCustomTemplateBodyAsync(ItemType.DataProvider, "Update");
                    code = await T4Helper.ProcessTemplateAsync(t4Code, t4Context);
                    replacementsDictionary.Add("$DataProviderUpdate$", code);

                    t4Code = await VsixHelper.GetDefaultCustomTemplateBodyAsync(ItemType.DataProvider, "Delete");
                    code = await T4Helper.ProcessTemplateAsync(t4Code, t4Context);
                    replacementsDictionary.Add("$DataProviderDelete$", code);

                    t4Code = await VsixHelper.GetDefaultCustomTemplateBodyAsync(ItemType.DataProvider, "Retrieve");
                    code = await T4Helper.ProcessTemplateAsync(t4Code, t4Context);
                    replacementsDictionary.Add("$DataProviderRetrieve$", code);

                    t4Code = await VsixHelper.GetDefaultCustomTemplateBodyAsync(ItemType.DataProvider, "RetrieveMultiple");
                    code = await T4Helper.ProcessTemplateAsync(t4Code, t4Context);
                    replacementsDictionary.Add("$DataProviderRetrieveMultiple$", code);

                    replacementsDictionary.Add("$Class$", form.Class);
                    replacementsDictionary.Add("$PluginOrder$", form.PluginOrder == 1 ? string.Empty : $"{form.PluginOrder}");
                    await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                    Mouse.OverrideCursor = null;
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
