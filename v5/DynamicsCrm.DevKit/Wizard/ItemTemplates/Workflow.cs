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
    internal class Workflow : ItemTemplateBase, IWizard
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
            using (TraceRunStarted())
            {
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    var form = new FormPlugin(ItemType.Workflow, replacementsDictionary["$rootnamespace$"]);
                    var ok = form.ShowModal() ?? false;
                    if (ok)
                    {
                        Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        var templateTitle = form.CustomTemplate;
                        var t4Code = await T4Helper.GetT4CodeAsync(ItemType.Workflow, templateTitle);
                        var t4Context = string.Equals(templateTitle, T4Helper.DefaultTemplateTitle, System.StringComparison.Ordinal)
                            ? await T4Helper.BuildClassContextAsync(form)
                            : await T4Helper.BuildContextAsync(form);
                        var code = await T4Helper.ProcessTemplateAsync(t4Code, t4Context);
                        replacementsDictionary.Add("$workflow$", code);
                        replacementsDictionary.Add("$Class$", t4Context.Class);
                        replacementsDictionary.Add("$PluginOrder$", t4Context.PluginOrder == 1 ? string.Empty : $"{t4Context.PluginOrder}");
                        await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                        Mouse.OverrideCursor = null;
                    }
                    else
                    {
                        VsixHelper.ThrowWizardCancelledException();
                    }
                });
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            using (TraceShouldAddProjectItem(filePath))
            {
                return true;
            }
        }
    }
}
