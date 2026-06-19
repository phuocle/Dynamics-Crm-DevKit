using System;
using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class JsForm : ItemTemplateBase, IWizard
    {
        private string _Javascript_ { get; set; } = string.Empty;
        private string _JavascriptForm_ { get; set; } = string.Empty;
        private string _Javascriptdts_ { get; set; } = string.Empty;
        private EntityMetadata EntityMetadata { get; set; }


        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            TrackGeneratedProjectItem(projectItem);
        }

        private async Task<bool> IsJsWebApiExistAsync()
        {
            var container = await VsixHelper.SelectedItem.GetProjectItemsContainerAsync();
            return System.IO.File.Exists(System.IO.Path.Combine(container?.FolderPath ?? string.Empty, $"{ItemName}.webapi.js"));
        }

        public void RunFinished()
        {
            using (TraceRunFinished())
            {
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    try
                    {
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        var formFileName = $"{ItemName}.form.js";
                        var declarationFileName = $"{ItemName}.d.ts";
                        var userFileName = $"{ItemName}.js";
                        var formProjectItem = GetGeneratedProjectItem(formFileName);
                        var declarationProjectItem = GetGeneratedProjectItem(declarationFileName);
                        if (formProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(formFileName, _JavascriptForm_);
                        }

                        if (declarationProjectItem == null)
                        {
                            await WriteTargetFileIfChangedAsync(declarationFileName, _Javascriptdts_);
                        }

                        VsixHelper.TrySetDependentUpon(formProjectItem ?? GetGeneratedProjectItem(formFileName), userFileName);
                        VsixHelper.TrySetDependentUpon(declarationProjectItem ?? GetGeneratedProjectItem(declarationFileName), userFileName);
                        await VS.StatusBar.ShowMessageAsync($"{formFileName} up to date!!!");
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.WriteLine($"DevKit: JsForm.RunFinished failed: {ex.Message}");
                    }
                    finally
                    {
                        await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
                    }
                });
            }
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            using (TraceRunStarted())
            {
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    var form = new FormItem(ItemType.JsForm);
                    var ok = form.ShowModal() ?? false;
                    if (ok)
                    {
                        await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                        ItemName = form.ItemName;
                        EntityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == ItemName);
                        using (Trace("GenerateDefaultJavaScript", $"entity={ItemName}"))
                        {
                            _Javascript_ = await new CodeGenService(form.ServiceClient).GetDefaultJsFormFileAsync(EntityMetadata, replacementsDictionary["$rootnamespace$"]);
                        }
                        replacementsDictionary["$Javascript$"] = _Javascript_;
                        using (Trace("GenerateFormJavaScript", $"entity={ItemName}"))
                        {
                            (_JavascriptForm_, _Javascriptdts_) = await DynamicsCrm.DevKit.Shared.Logic.JsForm.GetJsFormCodeAsync(form.ServiceClient, EntityMetadata, replacementsDictionary["$rootnamespace$"], await IsJsWebApiExistAsync());
                        }
                        replacementsDictionary["$Javascript.form.js$"] = _JavascriptForm_;
                        replacementsDictionary["$Javascript.d.ts$"] = _Javascriptdts_;
                        await Replacement.SetAsync(replacementsDictionary, form);
                        await VS.StatusBar.EndAnimationAsync(StatusAnimation.Deploy);
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
                return ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    var targetFileName = filePath switch
                    {
                        "Javascript.js" => $"{ItemName}.js",
                        "Javascript.d.ts" => $"{ItemName}.d.ts",
                        _ => $"{ItemName}.form.js"
                    };
                    return await ShouldAddProjectItemAsync(filePath, targetFileName);
                });
            }
        }
    }
}
