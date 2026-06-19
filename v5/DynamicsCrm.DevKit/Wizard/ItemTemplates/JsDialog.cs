using System;
using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using EnvDTE;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    internal class JsDialog : ItemTemplateBase, IWizard
    {
        private string _JavaScript_ { get; set; } = string.Empty;
        private string _JavaScriptDialog_ { get; set; } = string.Empty;
        private string _TypeScriptDialog_ { get; set; } = string.Empty;
        private string DialogClassName { get; set; }
        private string DialogLogicalName { get; set; }
        private ServiceClient ServiceClient { get; set; }
        private SystemForm SelectedDialogForm { get; set; }
        private bool IsDialogJsExisting { get; set; }

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
                    await WriteTargetFileIfChangedAsync($"{DialogClassName}.dialog.js", _JavaScriptDialog_);
                    await WriteTargetFileIfChangedAsync($"{DialogClassName}.dialog.d.ts", _TypeScriptDialog_);
                    if (!IsDialogJsExisting)
                        await WriteTargetFileIfChangedAsync($"{DialogClassName}.js", _JavaScript_);

                    VsixHelper.TrySetDependentUpon(GetGeneratedProjectItem($"{DialogClassName}.dialog.js"), $"{DialogClassName}.js");
                    VsixHelper.TrySetDependentUpon(GetGeneratedProjectItem($"{DialogClassName}.dialog.d.ts"), $"{DialogClassName}.js");
                    await VS.StatusBar.ShowMessageAsync($"{DialogClassName} JS Dialog generated successfully!!!");
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine($"DevKit: JsDialog.RunFinished failed: {ex.Message}");
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
                var form = new FormItem(ItemType.JsDialog);
                var ok = form.ShowModal() ?? false;
                if (ok)
                {
                    await Microsoft.VisualStudio.Shell.ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    await VS.StatusBar.StartAnimationAsync(StatusAnimation.Deploy);
                    ItemName = form.ItemName;
                    ServiceClient = form.ServiceClient;
                    SelectedDialogForm = form.SelectedDialogForm;
                    DialogLogicalName = SelectedDialogForm.Name;
                    DialogClassName = SelectedDialogForm.UniqueName;

                    // Generate the .dialog.js and .d.ts content
                    var result = await Shared.Logic.JsDialog.GetJsDialogCodeAsync(form.ServiceClient, SelectedDialogForm);
                    _JavaScriptDialog_ = result.code;
                    _TypeScriptDialog_ = result.dts;

                    // Generate user code (.js)
                    _JavaScript_ = await new CodeGenService(form.ServiceClient).GetDefaultJsDialogFileAsync(SelectedDialogForm, DialogClassName);

                    replacementsDictionary["$JavaScript$"] = _JavaScript_;
                    replacementsDictionary["$JavaScriptDialog$"] = _JavaScriptDialog_;
                    replacementsDictionary["$TypeScriptDialog$"] = _TypeScriptDialog_;
                    replacementsDictionary["$DialogName$"] = DialogClassName;
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
            return ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var targetFileName = filePath switch
                {
                    "JavaScript.js" => $"{DialogClassName}.js",
                    "JavaScript.d.ts" => $"{DialogClassName}.dialog.d.ts",
                    _ => $"{DialogClassName}.dialog.js"
                };
                var shouldAdd = await ShouldAddProjectItemAsync(filePath, targetFileName);

                // For the user script (.js), do not overwrite if exists
                if (filePath == "JavaScript.js")
                {
                    IsDialogJsExisting = IsFilePathExist;
                    return shouldAdd;
                }

                return shouldAdd;
            });
        }
    }
}
