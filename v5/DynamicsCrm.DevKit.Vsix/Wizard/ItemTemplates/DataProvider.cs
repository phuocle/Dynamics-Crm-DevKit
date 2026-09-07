using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Threading.Tasks;
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
            using (TraceRunStarted())
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

                        var t4Context = await T4Helper.BuildDataProviderContextAsync(form);
                        await AddDataProviderReplacementAsync(replacementsDictionary, t4Context, "Create", "$DataProviderCreate$");
                        await AddDataProviderReplacementAsync(replacementsDictionary, t4Context, "Update", "$DataProviderUpdate$");
                        await AddDataProviderReplacementAsync(replacementsDictionary, t4Context, "Delete", "$DataProviderDelete$");
                        await AddDataProviderReplacementAsync(replacementsDictionary, t4Context, "Retrieve", "$DataProviderRetrieve$");
                        await AddDataProviderReplacementAsync(replacementsDictionary, t4Context, "RetrieveMultiple", "$DataProviderRetrieveMultiple$");

                        replacementsDictionary.Add("$Class$", t4Context.Class);
                        replacementsDictionary.Add("$PluginOrder$", string.Empty);
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

        private async Task AddDataProviderReplacementAsync(Dictionary<string, string> replacementsDictionary, T4Context t4Context, string subType, string replacementKey)
        {
            using (Trace("ProcessDataProviderTemplate", $"subType={subType}"))
            {
                var t4Code = await VsixHelper.GetDefaultCustomTemplateBodyAsync(ItemType.DataProvider, subType);
                var code = await T4Helper.ProcessTemplateAsync(t4Code, t4Context);
                replacementsDictionary.Add(replacementKey, code);
            }
        }
    }
}
